import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  useMediaQuery,
  Spacer,
  Input,
  Button,
  HStack,
  VStack,
  Center,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { useMediaQuery } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { signOut } from "../redux_s/authaction";

export default function Navbar() {
  const [isLargerThanHD] = useMediaQuery("(min-width: 1240px)");
  const [isSmallerThanHD] = useMediaQuery("(max-width: 180px)");
  const { isAuth } = useSelector((store) => store.auth);
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const handleSignOut=()=>{
    dispatch(signOut());
  }
  console.log("isAuth", isAuth);
  console.log(user.name);
  if (isAuth) {
    return (
      <>
        <Box bg="#2874f0" height="60px" py="8px">
          <Flex direction="row" justifyContent="space-between">
            <Box width="770px">
              <Flex direction="row">
                <Spacer />

                <Link to="/">
                  <Box
                    fontFamily="-moz-initial"
                    color="yellow"
                    py="5px"
                    fontSize="20px"
                  >
                    IDEAKART
                  </Box>
                </Link>
                <Spacer />

                <Box
                  borderRadius="10px"
                  bg="#ffffff"
                  width="470px"
                  border={"1px solid grey"}
                  boxShadow="lg"
                >
                  <InputGroup>
                    <InputRightElement
                      width="60px"
                      pointerEvents="none"
                      children={
                        <Button
                          borderLeft={"1px solid gray"}
                          borderTopLeftRadius={"0px"}
                          borderBottomLeftRadius="0px"
                          fontFamily="-moz-initial"
                          color="black"
                          fontWeight="600"
                          fontSize="15px"
                          bg="white"
                        >
                          Search
                        </Button>
                      }
                    />
                    <Input placeholder="Search" />
                  </InputGroup>
                </Box>
              </Flex>
            </Box>
            <Center>
              <Box color="white" width="450px">
                <Flex>
                  <Link to="/about">
                    <Box>About</Box>
                  </Link>
                  <Spacer />
                  <Link to="/contact">
                    <Box>Contact</Box>
                  </Link>
                  <Spacer />
                  
                  <Menu border={"1px solid red"} bg={"black"}>
                    <MenuButton
                      as={Text}
                      rightIcon={<ChevronDownIcon />}
                    >
                      {user.name}<ChevronDownIcon />
                    </MenuButton>
                    <MenuList color={"black"}>
                      <MenuItem>
                        <Link to={"/dashboard"}>Dashboard</Link>
                      </MenuItem>
                      <MenuItem> <Link to={"/accountinfo"}>Account Info</Link></MenuItem>
                      <MenuItem><Link to={"/notifications"}>Notifications</Link></MenuItem>
                      <MenuItem > <Button varient="outline"  bg={"transparent"} onClick={handleSignOut}>Sign Out</Button></MenuItem>
                    </MenuList>
                  </Menu>
                  <Spacer />
                  <Spacer />
                  <Spacer />
                </Flex>
              </Box>
            </Center>
          </Flex>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box bg="#2874f0" height="60px" py="8px">
          <Flex direction="row" justifyContent="space-between">
            <Box width="770px">
              <Flex direction="row">
                <Spacer />

                <Link to="/">
                  <Box
                    fontFamily="-moz-initial"
                    color="yellow"
                    py="5px"
                    fontSize="20px"
                  >
                    IDEAKART
                  </Box>
                </Link>
                <Spacer />

                <Box
                  borderRadius="10px"
                  bg="#ffffff"
                  width="470px"
                  border={"1px solid grey"}
                  boxShadow="lg"
                >
                  <InputGroup>
                    <InputRightElement
                      width="60px"
                      pointerEvents="none"
                      children={
                        <Button
                          borderLeft={"1px solid gray"}
                          borderTopLeftRadius={"0px"}
                          borderBottomLeftRadius="0px"
                          fontFamily="-moz-initial"
                          color="black"
                          fontWeight="600"
                          fontSize="15px"
                          bg="white"
                        >
                          Search
                        </Button>
                      }
                    />
                    <Input placeholder="Search" />
                  </InputGroup>
                </Box>
              </Flex>
            </Box>
            <Center>
              <Box color="white" width="450px">
                <Flex>
                  <Link to="/about">
                    <Box>About</Box>
                  </Link>
                  <Spacer />
                  <Link to="/contact">
                    <Box>Contact</Box>
                  </Link>
                  <Spacer />

                  <Link to="login">
                    <Box>Sign In</Box>
                  </Link>
                  <Spacer />
                  <Link to="/signup">
                    <Box>Sign Up</Box>
                  </Link>
                  <Spacer />
                  <Spacer />
                  <Spacer />
                </Flex>
              </Box>
            </Center>
          </Flex>
        </Box>
      </>
    );
  }
}
