/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom"
import { MediaType } from "../../types"
import { Image } from "../components/image"
import { Section } from "../components/section"
import { Cast, Film as FilmInterface } from "../../interfaces"
import { useEffect, useState } from "react"
import { Card } from "../components/card"

import img from '../assets/images/wed.jpg'
import imgback from '../assets/images/HD-wallpaper-jenna-ortega-as-wednesday-addams-netflix-series-movies.jpg'


interface Props {
    mediaType: MediaType
}
export const Film = (props: Props) => {
    const { params } = useParams()

    const [film, setFilm] = useState<FilmInterface>({
        id: 0,
        title: "lorem idasdas d awdma dawdoawk dakfamwf  fasmawdaf afsdfsdfffffffffffffffffsfe f efsfsf sef es esf f f sfsfse ef esf sefsefes  fs ef sfsef sef esfesfse fsef se fes fesf sf sef sef sefsefesf",
        description: "lorem idasdas d awdma dawdoawk dakfamwf  fasmawdaf afsdfsdfffffffffffffffffsfe f efsfsf sef es esf f f sfsfse ef esf sefsefes  fs ef sfsef sef esfesfse fsef se fes fesf sf sef sef sefsefesf",
        coverPath: "",
        genreIds: [1, 2, 3, 4],
        mediaType: props.mediaType,
        posterPath: "",
        season: []
    })

    const [casts, setCasts] = useState<Cast[]>([])

    const fetch = () => {
        const arrs: any[] = []

        for (let i = 0; i < 20; i++) {
            arrs.push({

            })
        }
        setCasts(arrs)
    }

    useEffect(() => {
        fetch()
    }, [])

    return (    
        <>
            {/* background */}
            <div className="h-[300px] top-0 left-0 right-0 relative">
                <div className="overlay-film-cover"></div>
                <Image src={imgback}></Image>
            </div>
            {/* poster and text */}
            <Section className="-mt-[150px] flex items-center relative z-10 mobile:block">
                <Image src={img} className="w-[200px] min-w-[200px] h-[300px] mobile:mx-auto"></Image>
                <div className="px-3 flex flex-col items-start gap-3">
                    <p className="text-xl line-clamp-1">{film.title}
                    </p>
                    <ul className="flex items-center gap-3">
                        {
                            film.genreIds.map((genre, i) => (
                                <li className="px-3 py-1.5 text-sm bg-primary rounded-lg" key={i}>
                                    item {i}
                                </li>
                            ))
                        }
                    </ul>
                    <p className="line-clamp-3 opacity-[0.9]">{film.description}
                    </p>
                </div>
            </Section>
            {/* cast */}
            <Section title="Casts">
                <div className="scrollbar scrollbar-thumb-primary scrollbar-track-header">
                    <div className="flex items-center gap-3">
                        {casts.map((cast, i) => (
                            <div className="flex-shrink-0 max-w-[200px] my-3">
                                <Card imageSrc="" key={i} title="lorem ipsum lorem idasdas d awdma
                                 dawdoawk dakfamwf 
                                 fasmawdaf afsdfsdfffffffffffffffffsfe f efsfsf sef es esf f f sfsfse ef e"
                                 ></Card>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
            {/* trailers */}
            {/* seasons */}
            {/* recommedations */}
        </>
    )
}