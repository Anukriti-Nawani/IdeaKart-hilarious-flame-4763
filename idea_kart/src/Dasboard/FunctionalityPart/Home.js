import style from '../CSSPart/Home.module.css'
import { Button } from '@chakra-ui/react'
import NewProduct from './NewProduct'
import { useSelector ,useDispatch} from 'react-redux'

const Home = ({props}) => {
   const dispatch=useDispatch()
  const {prod}=useSelector(store=>store)




  return (   <>
    { prod.dash.home? 
    
    <div  className={style.container}>
    <h1  >Welcome!</h1>

    <Button onClick={()=>dispatch({type:"upload"})} backgroundColor="#337ab7" color="white" _hover="#337ab7"> Upload New Product  </Button>


   
    <div  className={style.productprocess}>
    <div style={{color:"white", fontSize:"20px", fontWeight:"bold"}}>   Products Approved</div>
    <div style={{color:"white", fontSize:"20px", fontWeight:"bold"}}>   Under Review</div>
    <div style={{color:"white", fontSize:"20px", fontWeight:"bold"}}>   Couldn't Pass Review</div>
    </div>
  
  
   
    
    </div>: <NewProduct/>
  }
    
    </>


  )
}

export default Home