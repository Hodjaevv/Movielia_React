import { Image } from "./image"
import { Film } from './../../interfaces';

interface Props {
    film :Film
}

export const Card = (props: Props) => {
  return (
    <div className="mx-3 my-1.5">
        <Image src="" className=""></Image>
        <p className="py-1.5 line-clamp-3">{props.film.title}</p>
    </div>
  )
}
