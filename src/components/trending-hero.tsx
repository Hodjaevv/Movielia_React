import { useNavigate } from "react-router-dom"
import { Film } from "../../interfaces"
import { Image } from "./image"
import { MdPlayCircleOutline } from "react-icons/md"
import img from '../assets/images/HD-wallpaper-jenna-ortega-as-wednesday-addams-netflix-series-movies.jpg'


interface Props{
    film: Film
}

export const TrendingHero = (props: Props) => {
    const navigate = useNavigate()
  return (
    <div onClick={()=> navigate(`/${props.film.mediaType}/${props.film.id}`)} className="h-[300px] cursor-pointer relative flex items-center">
        {/* bg image  */}
        <div className="absolute left-0 top-0 right-0 bottom-0">
            <div className="overlay-slick-hero"></div>
            <Image src={img}></Image>
        </div>
        {/* text */}
        <div className="flex flex-col gap-3 items-start relative z-10 mx-[65px] max-[50%] mobile:max-w-[100%]">
            <p className="text-xl line-clamp-1">{props.film.title}</p>
            <p className="text-sm w-[60%] line-clamp-3">{props.film.description}</p>
            <button className="px-3 py-1.5 flex items-center gap-3 bg-primary rounded-md">
                <MdPlayCircleOutline size={18}></MdPlayCircleOutline>
                <span>Play trailers</span>
            </button>
        </div>
    </div>
  )
}
