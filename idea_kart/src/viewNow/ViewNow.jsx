import {Container,Box,Flex,Image,Text, Button} from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {Link, useParams} from "react-router-dom"
import { getDetails } from "./viewAction";
export default function ViewNow(){
    const {id} = useParams()
    const details = useSelector((store)=>store.views.details)
    const dispatch = useDispatch()
    // console.log(id)
    // console.log(details[0])

useEffect(()=>{
    dispatch(getDetails(id))
},[])

    return(
       <>
       { details[0] && <Box  mt={"12px"} border={"1px solid blue"} ml={{base:null,md:"30px",lg:"130px"}} mr={{base:null,md:"30px",lg:"130px"}} >
          <Box ml={"10px"}  color = "blue">
            <Link>Home</Link>
            {" / "}
            <Link>Books</Link>
            {" / "}
            <Link> Health, Family & Personal Development</Link>
            {" / "}
            <Link>Personal Development & Self-Help</Link>
            {" / "}
            <Link>{details[0].name}</Link>
          </Box>
             

           <Flex flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}} mt={"15px"} border={"1px solid red"} justifyContent="space-between" >
           <Box  w={{base:"100%",sm:"100%",md:"29%",lg:"29%"}} >
            <Box  boxShadow={"lg"} p={"10px"} border = {"1px solid grey"}><Image   src = {details[0].image}/></Box>
            <Box w={{base:"70%",sm:"45%", md:"100%",lg:"100%"}}>
                <Text>Buy it at <b>best price</b> from here</Text>
                <Flex  px={"10px"} justifyContent={"space-between"}>
                    <Text color = "green" fontWeight={"bold"} fontSize = {"25px"}> Rs. {details[0].price}</Text>
                    <Link to=""><Button color = "white" bg = "#f0ad4e" size = {{base:"sm",sm:"md",md:"md",lg:"lg"}}>Buy Now</Button></Link>
                </Flex>
            </Box>
           </Box>

           <Box w={{md:"60%",lg:"65%"}}  > 

            <Box mt={"30px"}>
                <Text fontWeight={"bold"} fontFamily= "'Poppins', sans-serif" fontSize = {"50px"} >{details[0].name}</Text>
                 <Box bg="#f5f5f5" border={"1px solid grey"} p={"10px"} boxShadow={"lg"}><Text fontFamily= "'Poppins', sans-serif" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates incidunt autem nam ipsa libero architecto adipisci corrupti, neque nobis illo magnam molestias tempora similique? Corrupti repellat tempora saepe hic a ut deserunt eligendi obcaecati debitis facere repudiandae nam, officiis sed non voluptatibus sunt labore iusto, exercitationem rem quia dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus incidunt quidem reiciendis odit cupiditate aut earum, modi quos nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates incidunt autem nam ipsa libero architecto adipisci corrupti, neque nobis illo magnam molestias tempora similique? Corrupti repellat tempora saepe hic a ut deserunt eligendi obcaecati debitis facere repudiandae nam, officiis sed non voluptatibus sunt labore iusto, exercitationem rem quia dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus incidunt quidem reiciendis odit cupiditate aut earum, modi quos nostrum?sunt labore iusto, exercitationem rem quia dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus incidunt quidem reiciendis odit cupiditate aut earum, modi quos nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates incidunt autem nam ipsa libero architecto adipisci corrupti, neque nobis illo magnam molestias tempora similique? Corrupti repellat tempora saepe hic a ut deserunt eligendi obcaecati debitis facere repudiandae nam, officiis sed non voluptatibus sunt labore iusto, exercitationem rem quia dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minus incidunt quidem reiciendis odit cupiditate aut earum, modi quos nostrum? </Text></Box>
            </Box>

           <Flex p={"10px"} mt={{lg:"20px"}} box shadow={"xl"} justifyContent={"space-between"}>
              <Flex flexDirection={"column"}>
                <Text fontWeight={"bold"}>Store</Text>
                <Text>Amazon,Paper Back</Text>
              </Flex>
              <Flex flexDirection={"column"}>
                <Text fontWeight={"bold"}>Price</Text>
                <Text>Rs. {details[0].price}</Text>
              </Flex>
              <Flex flexDirection={"column"}>
                <Text fontWeight={"bold"}>Buy Now</Text>
                <Button bg = "#337ab7" size = {{base:"sm",sm:"sm",md:"lg",lg:"lg"}}>Buy Now</Button>
              </Flex>
           
           </Flex>

           </Box>
           </Flex>





       </Box>}
       </>
    )
}