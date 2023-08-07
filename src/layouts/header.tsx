import { useEffect, useRef, useState } from 'react'
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

import Container from '../components/container'
import { mergeClassName } from '../../utils'
import { IoIosSearch } from 'react-icons/io'
import { SearchResult } from '../components/search-result'

const MENU_CLASS = `
    p-1.5
    rounded-md
    hover:bg-primary
`
const MENU_CLASS_ACTIVE = `
    bg-primary
`

const Header = () => {
  const location = useLocation()
  const [params, _] = useSearchParams()
  const navigate = useNavigate()

  const [pathname, setPathname] = useState('')
  const pathnameRef = useRef('')

  const [keyword, setKeyword] = useState('')
  const [isSearchFocus, setSearchFocus] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const goToSearchPage = () => {
    if (keyword) {
      navigate(`/search?q=${keyword}`)
      setSearchFocus(false)
      searchRef.current?.blur()
    }
  }

  const initKeyword = () => {
    if (pathnameRef.current === '/search') {
      setKeyword(params.get('q') || '')
    } else {
      setKeyword('')
    }
  }

  const onWindowClick = () => {
    setisSearchFocus(false)
    initKeyword()
  }

  const getMenuClass = (path: string) => {
    if (path === pathname) {
      return mergeClassName(MENU_CLASS, MENU_CLASS_ACTIVE)
    }
    return mergeClassName(MENU_CLASS, '')
  }

  useEffect(() => {
    setPathname(location.pathname)
    pathnameRef.current = location.pathname
    initKeyword()
  }, [location.pathname])

  useEffect(() => {
    window.addEventListener('click', () => onWindowClick())
  }, [])

  return (
    <div className="bg-header">
      <Container className="flex items-center justify-between">
        {/* brand menu */}
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-semibold">
            <Link to={'/'}>Movielia</Link>
          </h1>
          {/* menu */}
          <div className="pt-1 flex items-center gap-1.5">
            <Link className={getMenuClass('/movie')} to={'/movies'}>
              Movies
            </Link>
            <Link className={getMenuClass('/tv')} to={'/tv'}>
              Tv
            </Link>
          </div>
        </div>
        {/* search */}
        <div className="relative border-b-[1.5px] border-white flex items-center p-1 flex-[0.5] focus-within:border-primary">
          <input
            onClick={(e) => {
              e.stopPropagation()
              setSearchFocus(true)
            }}
            onKeyDown={(e) => (e.key === 'Enter' ? goToSearchPage() : '')}
            onInput={(e) => setKeyword(e.currentTarget.value)}
            value={keyword}
            type="text"
            className="bg-transparent outline-0 flex-1"
            placeholder="Search..."
          />
          <IoIosSearch size={18}> </IoIosSearch>
          {/* tmp results */}
          {isSearchFocus ? (
            <SearchResult
              keyword={keyword}
              goToSearchPage={goToSearchPage}
            ></SearchResult>
          ) : (
            ''
          )}
        </div>
      </Container>
    </div>
  )
}
export default Header
