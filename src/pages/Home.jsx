import React from 'react'
import Banner from '../components/Home/banner/Banner'
import BlogH from '../components/Home/blog/BlogH'
import KatalogH from '../components/Home/home_katalog/KatalogH'
import Product from '../components/Home/Product/Product'
import { useGetProductsQuery } from '../context/api/productApi'

function Home() {
  const {data,isError,isLoading,isFetching,isSuccess}  =  useGetProductsQuery({limit:10})
  
  return (
    <div>
      <Banner/>
      <KatalogH/>
      <Product title='Популярные товары' data={data}/>
      <BlogH/>
    </div>
  )
}

export default Home