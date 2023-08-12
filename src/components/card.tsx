/* eslint-disable @typescript-eslint/ban-types */
import { Image } from "./image"
import { Film } from './../../interfaces';
import { useNavigate } from "react-router-dom";
import img from '../assets/images/wed.jpg'
interface Props {
    title: string
    imageSrc: string
    onClick?: Function 
}       

export const Card = (props: Props) => {
  return (
    <div onClick={()=> (props.onClick ? props.onClick() :'')} 
    className="mx-3 my-1.5 cursor-pointer">
        <Image src={img} className="min-h-[200px] h-[200px]"></Image>
        <p className="py-1.5 line-clamp-3">{props.title}</p>
    </div>
  )
}
