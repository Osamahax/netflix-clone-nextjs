import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'
import prismadb from '@/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server';


//commeted code is use when using NextApiResquest and NextApiResponse
const handler = async (req:NextRequest,res:NextResponse) => {
    if(req.method !== 'POST'){
        return NextResponse.json({error:'Method NOT allowed'},{status:405})
        // return res.status(405).end();
    }
    try {
        // const {email, name, password} = req.body;
        const {email,name,password} =await req.json()

        const existingUser = await prismadb.user.findUnique({
            where:{email:email}
        });
        if(existingUser){
            return NextResponse.json({error:'Email taken'},{status:422})
            // return res.status(422).json({error : 'Email taken'});
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            }
        })
        return NextResponse.json(user,{status:200})
        //return res.status.(200).json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:error},{status:400})
        // return res.status(400).end();
    }
}
export {handler as POST}