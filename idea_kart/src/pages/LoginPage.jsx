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
  Checkbox,
  useDisclosure,
  Spinner,
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
import { LogIn } from "../redux_s/authaction";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const cancelRef = React.useRef();
  const { isAuth } = useSelector((store) => store.auth);
  const { error } = useSelector((store) => store.auth);
  console.log(isAuth);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.auth);
  console.log(data);

  const [creds, setCreds] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(LogIn(creds));
    onOpen();
    // if (isAuth) {
    //   return onOpen();
    // }
  };

  const hadlePath = () => {
    onClose();
    if (isAuth) {
      return navigate("/");
    } else {
      return;
    }
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        w={"full"}
        // align={"center"}
        justify={"center"}
        // bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={8}
          mx={"auto"}
          w={"full"}
          py={12}
          px={6}
          // border={"1px solid red"}
        >
          <Stack align={"left"}>
            <Heading fontSize={"3xl"} textAlign={"left"}>
              Log in
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
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
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
              </Stack>
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
                  Log in
                </Button>
                {isAuth && (
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          You have log in Successfully
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Redirecting you to the Homepage
                        </AlertDialogBody>

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
                )}
                {error && (
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader
                          fontSize="lg"
                          fontWeight="bold"
                          color={"red"}
                        >
                          Warning!
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Username and password do not match or you do not have
                          an account yet.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                          </Button>
                          <Button colorScheme="blue" onClick={onClose} ml={3}>
                            OK
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                )}
              </Stack>
              <Stack pt={6}>
                <Text align={"left"}>
                  <Link
                    style={{ color: " blue", textDecoration: "underline" }}
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                  <br />
                  <Link color={"blue.500"}>Forgot your password?</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default LoginPage;
