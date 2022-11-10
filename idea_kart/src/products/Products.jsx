import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata} from "../redux/action";
import { SimpleGrid,Box,Image,Text, Flex,HStack,Link } from '@chakra-ui/react'
import { FaShoppingCart,FaList } from "react-icons/fa";


// import Productcard from "./Productcard";
// import "./product.css";

export const Products = () => {
  let productsData = useSelector((state) => state.productsData);
  console.log(productsData);
  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  return (
    <div className="productbody">
        <Text m={"10px"} ml={"20px"} fontWeight="bold" fontSize='2xl'>Top Reads</Text>
        <SimpleGrid mt={"5px"} ml={"30px"} mr={"30px"} columns={[1,2,3,4]}  spacing={5}>

      {/* <div className="productcontainer"> */}
        {productsData.map((el) => {
          return(
            <Box maxH={"auto"}   maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
             <Image p={"1rem"} src={el.image} alt="error" />
             <Box p={"10px"} _hover={{ bg:"rgba(247, 224, 161, 0.8)"}}>
             <Text fontSize='sm'>{el.name}</Text>
             <Text color="rgb(99,102,241)" fontSize='sm'>{el.price}</Text>
             <hr></hr>
             <Flex mt={"5px"}>
              <HStack   pr={"2rem"}  borderRight="1px" borderColor='gray.200'><FaShoppingCart/> <Text  color="rgb(99,102,241)"><Link to="" >View Now</Link></Text>   </HStack>
              <HStack pl={"1rem"}><FaList/><Text  color="rgb(99,102,241)"><Link to="">More details</Link></Text></HStack>
             </Flex>
             </Box>
          </Box>)
        })}
      {/* </div> */}
      </SimpleGrid>
    </div>
  );
};