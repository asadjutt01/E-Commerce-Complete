import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../components/AddProduct/AddProduct'
import ProductList from '../../components/ProductList/ProductList'

const Admin = () => {
  return (
    <div className='admin flex max-sm:flex-col max-sm:items-center'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/productlist' element={<ProductList/>}/>
      </Routes>
    </div>
  )
}

export default Admin
