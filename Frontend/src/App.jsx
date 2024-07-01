import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shopcategory from './pages/Shopcategory'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Loginsignup from './pages/Loginsignup'
import Cart from './pages/Cart'
import Footer from './components/Footer/Footer'
import banner_mens from './components/assets/banner_mens.png'
import banner_women from './components/assets/banner_women.png'
import banner_kids from './components/assets/banner_kids.png'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<Shopcategory banner={banner_mens} category="men" />} />
          <Route path='/women' element={<Shopcategory banner={banner_women} category="women" />} />
          <Route path='/kid' element={<Shopcategory banner={banner_kids} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Loginsignup />} />
        </Routes>
        <Footer />



      </BrowserRouter>
    </>
  )
}

export default App
