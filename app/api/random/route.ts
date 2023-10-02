import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb"
import serverAuth from "@/lib/serverAuth";
interface Movie{
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    thumnailUrl: string | null;
    genre: string;
    duration: string;
}
const handler =async (req:NextRequest, res:NextResponse) => {
    try {
        await serverAuth()
        const moviesCount = await prismadb.movie.count();
        console.log("movieCount: ",moviesCount)
        const randomIndex = Math.floor(Math.random() * moviesCount);
        console.log("randomIndex: ",randomIndex)
        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex
        });
        const movie:Movie = randomMovies[0]
        console.log("randomMovies: ",movie)
        return NextResponse.json({movie},{status:200})
    } catch(error) {
        console.log(error)
        return NextResponse.json({message:error},{status:400})
    }
}
export {handler as GET}