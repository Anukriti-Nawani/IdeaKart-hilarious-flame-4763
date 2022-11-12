import {Container,Box,Flex,Image,Text, Button,Heading} from "@chakra-ui/react"
import { useEffect, useState } from "react"



export default function ViewNow(){

    const [data,setData] = useState({})
    
    const searchGetData = JSON.parse(localStorage.getItem("searchItem")) || undefined;

    console.log(searchGetData)

    useEffect(() => {
        setData(searchGetData)
    }, [])
if(JSON.parse(localStorage.getItem("searchItem"))== undefined){
    return <div>.....Error</div>
}


    return(
       <>
        <Box  mt={"12px"} ml={{base:null,md:"30px",lg:"130px"}} mr={{base:null,md:"30px",lg:"130px"}}  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
         
             

           <Flex flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}} mt={"15px"}  justifyContent="space-between" >
           <Box  w={{base:"100%",sm:"100%",md:"29%",lg:"29%"}} >
           
            <Box  p={"10px"} border = {"1px solid grey"} >
                
                <Image src={searchGetData.image}/>
                </Box>
              
               
           </Box>

           <Box w={{md:"60%",lg:"65%"}}  > 

          

           <Flex mt={{lg:"20px"}} textAlign="justify">
             
              <Flex flexDirection={"column"}>
              <Heading paddingBottom={"1rem"}>{searchGetData.name}</Heading>
                <Text fontWeight={"40px"} paddingRight={"1rem"}>{searchGetData.description}</Text>
                <Text fontWeight={"bold"} justifyItems="left" paddingTop={"1rem"} paddingBottom={"1rem"} color={"red"}>{`Price: ${searchGetData.price}`}</Text>  
              </Flex>
              
            
           
           </Flex>
          
           
           </Box>
           </Flex>





       </Box>
       </>
    )
}