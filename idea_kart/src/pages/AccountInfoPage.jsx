import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const AccountInfoPage = () => {
  const toast = useToast();

  return (
    <>
      <Flex
        minH={"100vh"}
        w={"full"}
        align={"center"}
        justify={"center"}
        // bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} w={"full"} py={12} px={6}>
          <Stack align={"left"}>
            <Heading fontSize={"3xl"} textAlign={"left"}>
              Account Info
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="firstName" isRequired>
                <FormLabel>Account Number</FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl id="mobile_no">
                <FormLabel>IFSC CODE</FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl id="bank name">
                <FormLabel>Bank Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>UPI ID</FormLabel>

                <Input type="text" />
              </FormControl>
              <FormControl id="password_confirmation">
                <FormLabel>Address 1</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password_confirmation">
                <FormLabel>Address 2</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password_confirmation">
                <FormLabel>City</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password_confirmation">
                <FormLabel>State</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password_confirmation">
                <FormLabel>Pin Code</FormLabel>
                <Input type="number" />
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  align={"center"}
                  bg={"#5cb85c"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                  onClick={() =>
                    toast({
                      title: "Account created.",
                      description: "We've created your account for you.",
                      status: "success",
                      duration: 5000,
                      isClosable: true,
                    })
                  }
                  //   onClick={handleSubmit}
                >
                  Create User account
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default AccountInfoPage;