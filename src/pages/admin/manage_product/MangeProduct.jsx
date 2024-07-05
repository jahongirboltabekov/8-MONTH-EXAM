import React from 'react'
import { useDeleteProductMutation, useGetProductsQuery } from '../../../context/api/productApi'
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import './ManageProduct.scss'

const MangeProduct = () => {
  const {data,isError,isLoading,isFetching,isSuccess}  =  useGetProductsQuery()
  const [deletProduct] = useDeleteProductMutation()
  const handleDeletProductById = id => {
    deletProduct(id)
  }
  
  let product = data?.map((el) =>
    <div className="card" key={el.id}>
            <div className="img">
                <img src={el.url} alt="" />
            </div>
        
            <div className="card_text">
                <h3>{el.title.slice(0, 20)}</h3>
                <div className="text">
                    <p> <del>${el.price * 2}</del>${el.price}</p>
                </div>
            </div>
        <div className="buttons">
          <button><BiEdit /></button>
          <button onClick={() =>handleDeletProductById(el.id)}><RiDeleteBin6Line /></button>
        </div>
    </div>
  );
  return (
    <div className='creat_product_wrap'>
      <h1>Manage product</h1>
      <div className="products">
        {product}
      </div>


    </div>
  )
}

export default MangeProduct