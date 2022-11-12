import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const cancelRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const hadlePath = () => {
    onClose();
    navigate("/");
  };
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
            <Heading fontSize={"3xl"} textAlign={"center"}>
              Biling Details
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
                <FormLabel>First Name</FormLabel>
                <Input type="text" name="name" />
              </FormControl>

              <FormControl id="last_name">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" name="mobile_no" />
              </FormControl>

              <FormControl id="country" isRequired>
                <FormLabel>Country / Region </FormLabel>
                <Select placeholder="Select Country">
                  <option value="option1">India</option>
                  <option value="option2">China</option>
                  <option value="option3">Japan</option>
                  <option value="option3">USA</option>
                  <option value="option3">Russia</option>
                  <option value="option3">North Korea</option>
                  <option value="option3">UAE</option>{" "}
                  <option value="option3">Pakistan</option>
                </Select>
              </FormControl>
              <FormControl id="State" isRequired>
                <FormLabel>State</FormLabel>
                <Select placeholder="Select State">
                  <option value="option1">West Bengal</option>
                  <option value="option2">Bihar</option>
                  <option value="option3">Assam</option>
                  <option value="option3">Goa</option>
                  <option value="option3">Maharastra</option>
                  <option value="option3">Utter Pradesh</option>
                  <option value="option3">Sikkim</option>{" "}
                  <option value="option3">Tamilnadu</option>
                </Select>
              </FormControl>
              <FormControl id="town" isRequired>
                <FormLabel>Town / City </FormLabel>
                <Input type="text" name="city" />
              </FormControl>
              <FormControl id="pin" isRequired>
                <FormLabel>Pin </FormLabel>
                <Input type="nmuber" name="pin" />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Phone </FormLabel>
                <Input type="number" name="phone" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email </FormLabel>
                <Input type="email" name="email" />
              </FormControl>
              <Link
                color={"blue.400"}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create an account
              </Link>
              <Stack spacing={10} pt={2} w={"100%"}>
                <Button
                  align={"center"}
                  size="md"
                  bg={"#5cb85c"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                  onClick={() => {
                    navigate("/payment");
                  }}
                >
                  Place Order
                </Button>
              </Stack>
              {/* <Stack pt={6}>
              <Text align={"left"}>
                <Link color={"blue.400"}  onClick={() => {
              navigate("/login");
            }}
               
                >Login</Link>
              </Text>
            </Stack> */}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default CheckOutPage;