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
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux_s/authaction";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";


const SignupPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.auth);
  console.log(data);

  const [text, setText] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    onOpen();
    e.preventDefault();
     dispatch(signUp(text));
  };
  const hadlePath = () => {
    onClose();
    navigate("/login");
  };
  // console.log(text);
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
              Sign up
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
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" onChange={handleChange} />
              </FormControl>

              <FormControl id="mobile_no">
                <FormLabel>Mobile number</FormLabel>
                <Input type="number" name="mobile_no" onChange={handleChange} />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" onChange={handleChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="password_confirmation" isRequired>
                <FormLabel>Password confirmation</FormLabel>
                <Input type="text" />
              </FormControl>
              <Stack spacing={10} pt={2} w={100}>
                <Button
                  align={"left"}
                  size="md"
                  bg={"#5cb85c"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                  onClick={handleSubmit}
                >
                  Sign up
                </Button>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        You are Signup Successfully
                      </AlertDialogHeader>

                      <AlertDialogBody>You need to login again</AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button colorScheme="blue" onClick={hadlePath} ml={3}>
                          OK
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </Stack>
              <Stack pt={6}>
                <Text align={"left"}>
                  <Link color={"blue.400"}  onClick={() => {
                navigate("/login");
              }}
                 
                  >Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      
    </>
  );
};

export default SignupPage;