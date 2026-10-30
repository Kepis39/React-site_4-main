import Header from './Header/header'
import Footer from './Footer/footer'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
    <BrowserRouter>
     <Header/>
     <Routes> 
        <Route path ='/' index element = {<Page1/>} />
         <Route path ='/Page2' element = {<Page2/>} />
          <Route path ='/Page3' element = {<Page3/>} />
     </Routes>
      <Footer/>
     </BrowserRouter>
    </>

  )
}


