import React, { useEffect, useState } from 'react'
import Home from './FunctionalityPart/Home'
import { NavLink  as RouterLink ,Link} from 'react-router-dom';
import NewProduct from './FunctionalityPart/NewProduct';
import Products from './FunctionalityPart/Products';
import style from "./CSSPart/navbar.module.css"

import Credit from './FunctionalityPart/Credit';
import { useDispatch } from 'react-redux';

const initialState={
  home:true,
  new:false,
  prod:false,
  cres:false
}
const DashNavbar = () => {
  const dispatch=useDispatch()

  const [status,setStatus]=useState(initialState)



const handleClick=(ind)=>{
  if(ind==="home"){

    setStatus({ home:true, new:false, prod:false,cres:false})

  }else if(ind==="new"){

    setStatus({ home:false, new:true, prod:false,cres:false})


  }else if(ind==="prod"){
    setStatus({ home:false, new:false, prod:true,cres:false})
  }else if(ind==="cred"){
    setStatus({ home:false, new:false, prod:false,cres:true})
  }

}


useEffect(()=>{

  dispatch({type:"DashBoard",payload:status})

},[status])

  return (
    <div  className={style.container}>


    <div className={style.dashboardpart} >
    <h1>Your Dashboard</h1>
    <button as={RouterLink} onClick={()=>handleClick("home")} >Home</button>  <br/>
    <button   onClick={()=>handleClick("new")} >New Product</button> <br/>
    <button   onClick={()=>handleClick("prod")} >Product</button> <br/>
    <button   onClick={()=>handleClick("cred")} >Credit</button> <br/>
    </div>
  <div className={style.componentpart}>

  <div  className={ status.home? style.homeblock:style.homenone}>
  <Home props={true} />
  </div>

  <div  className={ status.new?  style.NewProductblovk :style.NewProductnone}> <NewProduct/></div>

  <div className={ status.prod? style.Productsblovk:style.Productsnone} > <Products/></div>
 <div  className={ status.cres? style.Creditblock:style.Creditnone}><Credit/></div>
 
  </div>


   
    
    </div>
  )
}

export default DashNavbar;