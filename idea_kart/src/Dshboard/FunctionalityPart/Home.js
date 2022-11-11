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

    <Button onClick={()=>dispatch({type:"upload"})} > Upload New Product  </Button>


   
    <div  className={style.productprocess}>
    <div>   Products Approved</div>
    <div>   Under Review</div>
    <div>   Couldn't Pass Review</div>
    </div>
  
  
   
    
    </div>: <NewProduct/>
  }
    
    </>


  )
}

export default Home