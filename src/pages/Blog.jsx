import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Blog_main from '../components/blog/Blog_main'

function Blog() {
  const {pathname} = useLocation()
  useEffect(() =>{
    if(pathname.includes){
        window.scrollTo(0,0)
    }
  })
  return (
    <div>
      <Blog_main/>
    </div>
  )
}

export default Blog