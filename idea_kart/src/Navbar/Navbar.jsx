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
  useDisclosure,
  Collapse,
  MenuItem,
  Menu,
  MenuList,
  MenuButton,
} from "@chakra-ui/react";
import { GoThreeBars } from "react-icons/go";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux_s/authaction";

import { json, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowForwardIcon, ChevronDownIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  // const [cartCount, seTCartCount] = useState(cart.length)
  const { isAuth } = useSelector((store) => store.auth);

  const [isLargerThanHD] = useMediaQuery("(min-width: 766px)");
  const { isOpen, onToggle } = useDisclosure();
  const [inputData, setInputData] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logOut());
  };

  // useEffect(()=>{
  //   seTCartCount(cart.length)
  // },[])
  //console.log(cartCount)
  console.log("isAuth", isAuth);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    // console.log(value)
    setInputData(value);
  };

  const handleSubmit = () => {
    axios
      .get(`https://data-base.onrender.com/products?name=${inputData}`)
      .then((res) => {
        console.log(res.data[0]);
        localStorage.setItem("searchItem", JSON.stringify(res.data[0]));
        navigate("/search");
      });
  };

  // dashboard nav with if/else
  // if (isAuth) {
  //   return (
  //     <>
  //       <Box bg="#2874f0" height="60px" py="8px">
  //         <Flex direction="row" justifyContent="space-between">
  //           <Box width="770px">
  //             <Flex direction="row">
  //               <Spacer />

  //               <Link to="/">
  //                 <Box
  //                   fontFamily="-moz-initial"
  //                   color="yellow"
  //                   py="5px"
  //                   fontSize="20px"
  //                 >
  //                   IDEAKART
  //                 </Box>
  //               </Link>
  //               <Spacer />

  //               <Box
  //                 borderRadius="10px"
  //                 bg="#ffffff"
  //                 width="470px"
  //                 border={"1px solid grey"}
  //                 boxShadow="lg"
  //               >
  //                 <InputGroup>
  //                   <InputRightElement width="60px" pointerEvents="none" />
  //                   <Input
  //                     placeholder="Search"
  //                     value={inputData}
  //                     onChange={handleChange}
  //                   />
  //                   <button
  //                     onClick={handleSubmit}
  //                     style={{
  //                       fontSize: "15px",
  //                       paddingLeft: "0.5rem",
  //                       paddingRight: "0.5rem",
  //                     }}
  //                   >
  //                     Search
  //                   </button>
  //                 </InputGroup>
  //               </Box>
  //             </Flex>
  //           </Box>
  //           <Center>
  //             <Box color="white" width="450px">
  //               <Flex>
  //                 <Link to="/about">
  //                   <Box>About</Box>
  //                 </Link>
  //                 <Spacer />
  //                 <Link to="/contact">
  //                   <Box>Contact</Box>
  //                 </Link>
  //                 <Spacer />

  //                 <Menu border={"1px solid red"} bg={"black"}>
  //                   <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>
  //                     {user.name}
  //                     <ChevronDownIcon />
  //                   </MenuButton>
  //                   <MenuList color={"black"}>
  //                     <MenuItem>
  //                       <Link to={"/dashboard"}>Dashboard</Link>
  //                     </MenuItem>
  //                     <MenuItem>
  //                       {" "}
  //                       <Link to={"/accountinfo"}>Account Info</Link>
  //                     </MenuItem>
  //                     <MenuItem>
  //                       <Link to={"/notifications"}>Notifications</Link>
  //                     </MenuItem>
  //                     <MenuItem>
  //                       {" "}
  //                       <Button
  //                         varient="outline"
  //                         bg={"transparent"}
  //                         onClick={handleSignOut}
  //                       >
  //                         Sign Out
  //                       </Button>
  //                     </MenuItem>
  //                   </MenuList>
  //                 </Menu>
  //                 <Spacer />
  //                 <Link to="/cart">
  //                   <Box>Cart</Box>
  //                 </Link>
  //                 <Spacer />
  //                 <Spacer />
  //               </Flex>
  //             </Box>
  //           </Center>
  //         </Flex>
  //       </Box>
  //     </>
  //   );
  // } else {
  return (
    <>
      {isLargerThanHD ? (
        <Box h={"55px"} bg="#2874f0">
          <Flex
            alignItems={"center"}
            ml={{ base: "30px", md: "100px", lg: "90px" }}
            mr={{ base: "30px", md: "60px", lg: "90px" }}
            justifyContent="space-between"
          >
            <Flex alignItems={"center"} gap={10}>
              <Link to="/">
                <Box color="Yellow">
                  <Text fontSize={"20px"}>IDEAKART</Text>
                </Box>
              </Link>
              <Box
                borderRadius={"10px"}
                bg="white"
                fontFamily={"-moz-initial"}
                my={"7px"}
              >
                <InputGroup w={{ base: null, md: "230px", lg: "500px" }}>
                  <Input
                    placeholder="Search"
                    value={inputData}
                    onChange={handleChange}
                  />
                  <button
                    onClick={handleSubmit}
                    style={{
                      fontSize: "15px",
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                    }}
                  >
                    Search
                  </button>
                </InputGroup>
              </Box>
            </Flex>

            <Flex color="white" fontFamily="-moz-initial" ml={"40px"} gap={10}>
              <Link to="/about">
                <Box>About</Box>
              </Link>
              <Link to="/contact">
                <Box>Contact</Box>
              </Link>

              {isAuth ? (
                <Menu border={"1px solid red"} bg={"black"}>
                  <MenuButton as={Text} rightIcon={<ChevronDownIcon />}>
                    {user.name}
                    <ChevronDownIcon />
                  </MenuButton>
                  <MenuList color={"black"}>
                    <MenuItem>
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <Link to={"/accountinfo"}>Account Info</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to={"/notifications"}>Notifications</Link>
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <Button
                        varient="outline"
                        bg={"transparent"}
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </Button>
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <>
                  <Link to="/login">
                    <Box>Sign In</Box>
                  </Link>
                  <Link to="signup">
                    <Box>Sign Up</Box>
                  </Link>{" "}
                </>
              )}
              <Link to="cart">
                <Box>Cart</Box>
              </Link>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Box bg="#2874f0">
          <Flex
            p={"10px"}
            gap={"10px"}
            justifyContent={"space-between"}
            h={"55px"}
            bg="#2874f0"
          >
            <Box>
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
            </Box>
            <Box
              onClick={onToggle}
              backgroundColor={"-moz-initial"}
              p={"5px"}
              borderRadius={"5px"}
              border={"1px solid black"}
            >
              <GoThreeBars style={{ color: "white", fontSize: "25px" }} />
            </Box>
          </Flex>
          <Box border={"1px solid black"}></Box>
          {isAuth ? (
            <Collapse in={isOpen} animateOpacity>
              <Box
                px="40px"
                py="20px"
                color="white"
                mt="4"
                rounded="md"
                shadow="md"
              >
                <InputGroup>
                  <Input
                    placeholder="Search"
                    value={inputData}
                    onChange={handleChange}
                    backgroundColor="white"
                    color="black"
                  />
                  <button
                    onClick={handleSubmit}
                    style={{
                      fontSize: "15px",
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "5px",
                    }}
                  >
                    Search
                  </button>
                </InputGroup>

                <Link to="/about">
                  <Box>About</Box>
                </Link>
                <Link to="/contact">
                  <Box>Contact</Box>
                </Link>
                <Link to="/dashboard">
                  <Box>Dashboard</Box>
                </Link>
                <Link to="/accountinfo">
                  <Box>Account Info</Box>
                </Link>
                <Link to="/notifications">
                  <Box> Notifications</Box>
                </Link>
                <Button
                  colorScheme="blue"
                  variant="solid"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </Box>
            </Collapse>
          ) : (
            <Collapse in={isOpen} animateOpacity>
              <Box
                px="40px"
                py="20px"
                color="white"
                mt="4"
                rounded="md"
                shadow="md"
              >
                <InputGroup>
                  <Input
                    placeholder="Search"
                    value={inputData}
                    onChange={handleChange}
                    backgroundColor="white"
                    color="black"
                  />
                  <button
                    onClick={handleSubmit}
                    style={{
                      fontSize: "15px",
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "5px",
                    }}
                  >
                    Search
                  </button>
                </InputGroup>

                <Link to="/about">
                  <Box>About</Box>
                </Link>
                <Link to="/contact">
                  <Box>Contact</Box>
                </Link>
                <Link to="/login">
                  <Box>Sign In</Box>
                </Link>
                <Link to="signup">
                  <Box>Sign Up</Box>
                </Link>
              </Box>
            </Collapse>
          )}
          {/* <Collapse in={isOpen} animateOpacity>
            <Box
              px="40px"
              py="20px"
              color="white"
              mt="4"
              rounded="md"
              shadow="md"
            >
              <InputGroup>
                <Input
                  placeholder="Search"
                  value={inputData}
                  onChange={handleChange}
                  backgroundColor="white"
                  color="black"
                />
                <button
                  onClick={handleSubmit}
                  style={{
                    fontSize: "15px",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "5px",
                  }}
                >
                  Search
                </button>
              </InputGroup>

              <Link to="/about">
                <Box>About</Box>
              </Link>
              <Link to="/contact">
                <Box>Contact</Box>
              </Link>
              <Link to="/login">
                <Box>Sign In</Box>
              </Link>
              <Link to="signup">
                <Box>Sign Up</Box>
              </Link>
            </Box>
          </Collapse> */}
        </Box>
      )}
    </>
  );
}
