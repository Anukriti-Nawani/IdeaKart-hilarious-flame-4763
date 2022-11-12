import { Box, Flex, Text, SimpleGrid, useMediaQuery, Spacer, Input, Button, HStack, VStack, Center, InputRightElement, InputGroup, useDisclosure,Collapse } from "@chakra-ui/react";
// import { useMediaQuery } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import {GoThreeBars} from "react-icons/go";
import Drawers from "./Drawer";

export default function Navbar() {
    const [isLargerThanHD] = useMediaQuery('(min-width: 766px)');
    const { isOpen, onToggle } = useDisclosure()
    
    return (
      <>
      {
       isLargerThanHD ? (<Box h={"55px"} bg = "#2874f0" >
      
       <Flex alignItems={"center"} ml={{ base : "30px",md:"100px",lg:"90px"}} mr={{ base : "30px",md:"60px",lg:"90px"}} justifyContent="space-between">
    
         <Flex alignItems={"center"} gap={10}>
         <Link><Box color = "Yellow"><Text fontSize={"20px"}>IDEAKART</Text></Box></Link>
         <Box borderRadius={"10px"} bg = "white" fontFamily={"-moz-initial"} my={"7px"}>
         <InputGroup>
   <Input w={{base:null,md:"130px",lg:"500px"}} placeholder='Search' />
   <InputRightElement w={"60px"} children={<Button borderLeft={"1px solid gray"} bg="white" borderTopLeftRadius={"0px"} borderBottomLeftRadius={"0px"}  color = "blackAlpha.700">Search</Button>} />
 </InputGroup>
 </Box>
         </Flex>
                       
         <Flex color = "white" fontFamily = "-moz-initial"  ml={"40px"} gap = {10}>
           <Link><Box>About</Box></Link>
           <Link><Box>Contact</Box></Link>
           <Link><Box>Sign In</Box></Link>
           <Link><Box>Sign Up</Box></Link>
         </Flex>
       </Flex>
      </Box>): <Box bg = "#2874f0"><Flex p={"10px"} gap={"10px"} justifyContent={"space-between"} h={"55px"} bg = "#2874f0">
  <Box><Text fontSize={"20px"} color = "yellow">IDEAKART</Text></Box>
  <Box onClick={onToggle} backgroundColor={"-moz-initial"} p ={"5px"} borderRadius={"5px"} border={"1px solid black"}><GoThreeBars style={{color:"white",fontSize:"25px"}}  /></Box>
</Flex>
<Box border={"1px solid black"}></Box>
<Collapse in={isOpen} animateOpacity>
        <Box
          px='40px'
          py='20px'
          color='white'
          mt='4'
          
          rounded='md'
          shadow='md'
        >
        <InputGroup>
   <Input placeholder='Search' />
   <InputRightElement w={"60px"} children={<Button borderLeft={"1px solid gray"} bg="white" borderTopLeftRadius={"0px"} borderBottomLeftRadius={"0px"}  color = "blackAlpha.700">Search</Button>} />
 </InputGroup>
            
           <Link><Box>About</Box></Link>
           <Link><Box>Contact</Box></Link>
           <Link><Box>Sign In</Box></Link>
           <Link><Box>Sign Up</Box></Link>

        </Box>
      </Collapse>
</Box>






      } 
      </>

       

    )
}
