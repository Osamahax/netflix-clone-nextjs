import Link from "next/link";
import Image from "next/image";
interface DataProps{
    title:string
    description:string
    poster_path:string
}
const Movie = ({title,description,poster_path}:DataProps) => {
  const imagePath="https://image.tmdb.org/t/p/original"
  return (
    <div className="">
        <h1>{title}</h1>
        <Image src={imagePath+poster_path} alt="movie img" width={250} height={100}/>
    </div>
  )
}

export default Movie