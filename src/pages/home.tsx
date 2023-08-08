import { useEffect, useState } from 'react'
import {Slider} from "../components/slider/slider"

import { Section } from "../components/section"
import { Film } from "../../interfaces"
import { TrendingHero } from '../components/trending-hero'
import { Card } from '../components/card'


export const Home = () => {
    const [trendings, setTrendings] = useState<Film[]>([])
    const [inTheaters, setInTheaters] = useState<Film[]>([])

    const fetch = () => {
        const arrs: Film[] = []

        for (let i = 0; i < 5; i++) {
            arrs.push({
                id: i,
                title: 'lorem dasddaw w dawdwwdwadwdwd waf wwwwwwwwwwwwwwwwwww ??',
                description: 'lorem dasddaw w dawdwwdwadwdwd waf wwwwwwwwwwwwwwwwwww?? ',
                coverPath: '',
                genreIds: [1, 2, 3, 4, 5, 6],
                posterPath: '',
                seasons: [],
            })
        }
        setTrendings(arrs)
        setInTheaters(arrs)
    }

    useEffect(() => {
        fetch()
    }, [])


    return (
        <>
            {/* trendings */}
            <Section className='py-0'>
                <Slider className='slick-hero' autoplay={true} slidesToShow={1} slidesToScroll={1}>
                    {
                    trendings.map((film, i) => (
                    <TrendingHero film={film} key={i}></TrendingHero>
                        ))
                    }
                </Slider>
            </Section>
            {/* in theaters */}
            <Section title='In Theaters'>
                <Slider className='slick-hero px-6' autoplay={true} slidesToShow={5} slidesToScroll={5}>
                    {
                    inTheaters.map((film, i) => (
                    <Card film={film} key={i}></Card>
                        ))
                    }
                </Slider>
            </Section>
            {/* populars */}
            {/* top rated tv  */}
            {/* top rated movies  */}
        </>
    )
}
