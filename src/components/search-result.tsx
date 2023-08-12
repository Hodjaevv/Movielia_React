/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { useState, useEffect } from 'react'
import { Film } from '../../interfaces'
import { Image } from './image'
interface Props {
  keyword: string
  goToSearchPage: Function
}
export const SearchResult = (props: Props) => {
  const [items, setItems] = useState<Film[]>([])

  const [totalItem, setTotalItem] = useState(6)

  const fetch = () => {
    const arrs: Film[] = []

    for (let i = 0; i < 5; i++) {
      arrs.push({
        id: i,
        mediaType: 'tv',
        title: 'lorem dasddaw w dawdwwdwadwdwd waf wwwwww wwww',
        description: '',
        coverPath: '',
        genreIds: [1, 2, 3, 4, 5, 6],
        posterPath: '',
        seasons: [],
      })
    }
    setItems(arrs)
  }

  useEffect(() => {
    fetch()
  }, [props.keyword])

  return (
    <div className="absolute top-[48px] left-0 right-0 p-3 rounded-md shadow-lg overflow-auto max-h-[480px]: bg-header">
      {items.map((film, i) => (
        <div
          key={i}
          className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer m-1.5"
        >
          {/* image */}
          <Image src="" className=""></Image>
          {/* title and genres */}
          <div className="px-3 truncate">
            <p className="text-base truncate">{film.title}</p>
            <ul className="flex flex-wrap gap-x-1.5 text-sm opacity-[0.7]">
              {film.genreIds.map((id, i) => (
                <li key={i}>item{i}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      {
        totalItem > 5 ? (
          <button onClick={() => props.goToSearchPage()} className='sticky bottom-0 shadow-lg px-3 py-1.5 bg-primary w-full hover:text-body'>More results</button>
        ) : ('')
      }
    </div>
  )
}
