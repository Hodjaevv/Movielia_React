import {BrowserRouter} from 'react-router-dom'

import Body from "../layouts/body"
import Footer from "../layouts/footer"
import Header from "../layouts/header"

const AppContainer = () => {
  return (
    <BrowserRouter>
        {/* header */}
        <Header/>
        {/* body */}
        <Body/>
        {/* footer */}
        <Footer/>
    </BrowserRouter>
  )
}

export default AppContainer