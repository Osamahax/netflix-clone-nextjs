import Link from "next/link";
import Image from "next/image";
interface DataProps{
    title:string
    description:string
    poster_path:string
}
const Movie = ({title,description,poster_path}:DataProps) => {
  const imagePath="https://image.tmdb.org/t/p/original"
  if(title.length>30){
    title=title.substring(0,20)+'...'
  }
  return (
    <div className="box-border mt-2">
        <Image 
        className="
          shadow-md
          shadow-white
          hover:scale-110
          peer
        "
        src={imagePath+poster_path} alt="movie img" width={250} height={100}/>
        <h1 className="text-xl font-semibold max-w-md mt-2 box-border">{title}</h1>
    </div>
  )
}

export default Movie