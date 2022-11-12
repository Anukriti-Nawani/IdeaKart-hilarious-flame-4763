import { Checkbox, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaSlack } from "react-icons/fa";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
  const cancelRef = React.useRef()
  const [show, setShow] = useState(false);
  const [debit, setDebit] = useState(false);
  useEffect(() => {
    setShow(show);
  }, [show]);
  const handlePath = () => {
    onClose();
    navigate("/");
  };
  console.log(show, debit);
  return (
    <Box textAlign={"center"} >
      <br />
      <Heading>Payment</Heading>
      <br />

      <Flex
      boxShadow='md'
        minH={"170px"}
        
        w={{ base: "290px", md: "440px", lg: "2xl" }}
        margin={"auto"}
        align={"center"}
        justify={"center"}
        bg={"#ffffff"}
      >
        <Box px={10}   textAlign={"left"} w={{ base: "xs", md: "xs", lg: "sm" }} margin={"auto"}>
          <Checkbox  size={["md","lg"]} onChange={() => setShow(!show)}>
            Cash On Delevery
          </Checkbox>
          <br />
          <Checkbox marginTop={4} size={["md","lg"]} onChange={() => setDebit(!debit)}>
            Debit Card/ Credit Card
          </Checkbox>
        </Box>
      </Flex>
     
      {show ? (
        <Button
          size="md"
          height="48px"
          border="2px"
          bg={"blue.300"}
          marginTop={2}
          borderColor="blue.500"
          onClick={onOpen}
        >
          For Confirmation Click Here
        </Button>
        
      ) : (
        ""
      )}

      {debit ? (
        <Flex boxShadow='lg' minH={"59vh"} w={{ base: "290px", md: "440px", lg: "2xl" }}justify={"center"} margin={"auto"}>
          <Stack mx={"auto"} maxW={"lg"} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Card Details</Heading>
            </Stack>
            <Box  w={{ base: "xs", md: "md", lg: "lg" }} rounded={"lg"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <FormControl id="cardno">
                  <FormLabel>Card Number :</FormLabel>
                  <Input type="number" />
                </FormControl>
                <FormControl id="valid ">
                  <FormLabel>Valid Upto :</FormLabel>
                  <Input type="datetime-local" />
                </FormControl>
                <FormControl id="cvv">
                  <FormLabel>CVV :</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                  </Stack>
                  <Button
                    bg={"green.400"}
                    color={"white"}
                    _hover={{
                      bg: "green.500",
                    }}
                    onClick={onOpen}
                  >
                   Pay
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      ) : (
        ""
      )}
       <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='medium'>
             You have placed your order successfully !
            </AlertDialogHeader>

            <AlertDialogBody>
            Continue shooping ?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handlePath} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default PaymentPage;