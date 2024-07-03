import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Home/footer/Footer'
import Header from './components/Home/header/Header'
import Navbar from './components/Home/Navbar/Navbar'
import About from './pages/About'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Delivery from './pages/Delivery'
import Guarantee from './pages/Guarantee'
import Home from './pages/Home'
import Return from './pages/Return'
import Wishlist from './pages/Wishlist'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleRoute from './pages/single/SingleRoute'

function App() {

  return (
    <>
      <ToastContainer/>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/delivery' element={<Delivery/>} />
          <Route path='/guarantee' element={<Guarantee/>} />
          <Route path='/return' element={<Return/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/products/:id' element={<SingleRoute/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
