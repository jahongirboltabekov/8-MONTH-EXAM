import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Home/footer/Footer'
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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SingleRoute from './pages/single/SingleRoute'
import Login from './pages/login/Login'
import Auth from './pages/auth/Auth'
import MangeProduct from './pages/admin/manage_product/MangeProduct'
import Admin from './pages/admin/Admin'
import CreateProduct from './pages/admin/create_product/CreateProduct'



function App() {

  return (
    <>
      <ToastContainer/>
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
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Auth/>}>
            <Route path='/admin/*' element={<Admin/>}>
              <Route path='createproduct' element={<CreateProduct/>}/>
              <Route path='mangeproduct' element={<MangeProduct/>}/>
            </Route>
          </Route>
        </Routes>
        <Footer/>
    </>
  )
}
export default App
