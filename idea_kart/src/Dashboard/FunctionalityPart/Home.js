import React from 'react'
import style from '../CssPart/Home.module.css'

const Home = () => {
  return (
    <div>
    <h1>Welcome!</h1>

    <a  href='#'>  <button>Upload New Product</button>  </a>

    <div  className={style.productprocess}>
    <div>   Products Approved</div>
    <div>   Under Review</div>
    <div>   Couldn't Pass Review</div>
    </div>
   
    
    </div>
  )
}

export default Home