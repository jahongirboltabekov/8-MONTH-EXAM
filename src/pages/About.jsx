import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About_header from '../components/about/About_header'

function About() {
  const {pathname} = useLocation()
  useEffect(() =>{
    if(pathname.includes){
        window.scrollTo(0,0)
    }
})
  return (
    <div>
      <About_header/>
    </div>
  )
}

export default About