import { Box, Flex, Text, SimpleGrid, useMediaQuery, Spacer, Input, Button, HStack, VStack, Center, InputRightElement, InputGroup } from "@chakra-ui/react";
// import { useMediaQuery } from '@chakra-ui/react'
import { Link } from "react-router-dom"

export default function Navbar() {
    const [isLargerThanHD] = useMediaQuery('(min-width: 1240px)');
    const [isSmallerThanHD] = useMediaQuery('(max-width: 180px)');

    // if(isSmallerThanHD){

    //     <Box bg = "rgb(7, 71, 247)" height = "60px" py = "10px">

    //     <Flex direction="row"  justifyContent="space-between" >

    //         <Box  width = "770px" >

    //     <Flex direction="row">
    //     <Spacer/>
    //          <Box  fontFamily = "-moz-initial" color = "yellow" py = "5px" fontSize="20px">IDEAKART</Box>
    //         <Spacer/>

    //        <Box  borderRadius="10px" bg = "#ffffff" boxShadow='sm'  >
    //       <Flex>

    //       <Box borderColor="grey"  width = "410px" ><Input  borderTopRightRadius={"0px"} borderBottomRightRadius="0px" fontFamily = "-moz-initial" placeholder = "Search"/></Box>
    //        <Button borderTopLeftRadius={"0px"} borderBottomLeftRadius="0px"   fontFamily = "-moz-initial" color = "black" fontWeight="600" fontSize="15px" size='md'>Search</Button>

    //       </Flex>
    //       </Box>

    //     </Flex>

    //     </Box>
    //    <Center>
    //     <Box  color = "white" width = "450px">
    //     <Flex >
    //         <Link><Box>About</Box></Link>
    //         <Spacer/>
    //         <Link><Box>Contact</Box></Link>
    //         <Spacer/>
    //         <Link><Box>Sign In</Box></Link>
    //         <Spacer/>
    //         <Link><Box>Sign Up</Box></Link>
    //         <Spacer/>
    //         <Spacer/>
    //         <Spacer/>
    //     </Flex>

    //     </Box>
    //     </Center>

    //     </Flex>

    // </Box>


    // }


    return (

        <>
            <Box bg="#2874f0" height="60px" py="8px">

                <Flex direction="row" justifyContent="space-between" >

                    <Box width="770px" >

                        <Flex direction="row">
                            <Spacer />
                            
                            <Link><Box fontFamily="-moz-initial" color="yellow" py="5px" fontSize="20px">IDEAKART</Box></Link>
                            <Spacer />

                                    <Box borderRadius="10px" bg="#ffffff"   width="470px"  border = {"1px solid grey"} boxShadow='lg' >
                                        <InputGroup >
                                            <InputRightElement width = "60px"
                                                pointerEvents='none'
                                                children={<Button borderLeft={"1px solid gray"}  borderTopLeftRadius={"0px"} borderBottomLeftRadius="0px" fontFamily="-moz-initial" color="black" fontWeight="600" fontSize="15px" bg = "white" >Search</Button>
                                                }
                                            />
                                            <Input  placeholder='Search' />
                                        </InputGroup>
                                        </Box>
                            

                        </Flex>

                    </Box>
                    <Center>
                        <Box color="white" width="450px">
                            <Flex >
                                <Link><Box>About</Box></Link>
                                <Spacer />
                                <Link><Box>Contact</Box></Link>
                                <Spacer />
                                <Link><Box>Sign In</Box></Link>
                                <Spacer />
                                <Link><Box>Sign Up</Box></Link>
                                <Spacer />
                                <Spacer />
                                <Spacer />
                            </Flex>

                        </Box>
                    </Center>

                </Flex>

            </Box>









        </>

    )
}
