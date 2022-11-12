import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Text,
  Heading,
  TableCaption,
  TableContainer,
  Image,
  Button,
  Flex,
  Box,
  Spacer,
  Container,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

// console.log(data);
const CartPage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(cart);
  const [total, setTotal] = useState(0);
  const removeItem = (id) => {
    console.log(id);

    let new_cart = items.filter((el) => {
      return el._id !== id;
    });
    console.log(new_cart);
    setItems(new_cart);
    localStorage.setItem("cart", JSON.stringify(new_cart));
  };
  console.log("cart", cart);
  const handleCount = (id, qty) => {
    console.log(id);
    let data = items.map((el) =>
      el._id === id ? { ...el, qty: el.qty + qty } : el
    );
    setItems([...data]);
  };
  let Total = 0;
  useEffect(() => {
    items.map((el) => (Total += +el.price * el.qty));
    setTotal(Total);
  }, [items, items]);
  console.log(items);
  return (
    <Container maxW="8xl" textAlign={"center"} margin="auto">
      <Heading size={{ base: "10px", sm: "12px", md: "15px", lg: "xl" }}>
        CART
      </Heading>
      <TableContainer
        w={{
          sm: "1000px",
          md: "1260",
          lg: "full",
          xl: "full",
        }}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        margin={"auto"}
        bg={"#edf2f7"}
        // border={"1px solid red"}
      >
        <Table
          variant="simple"
          // w={{
          //   sm: "320px",
          //   md: "768px",
          //   lg: "960px",
          //   xl: "1200px",
          // }}
        >
          <Thead>
            <Tr>
              <Th fontSize={"15px"} fontWeight={800}>
                PRODUCT
              </Th>
              <Th fontSize={"15px"} fontWeight={800}>
                PRICE
              </Th>
              <Th fontSize={"15px"} fontWeight={800}>
                QUANTITY
              </Th>
              <Th fontSize={"15px"} fontWeight={800}>
                TOTAL
              </Th>
              <Th fontSize={"15px"} fontWeight={800}>
                REMOVE
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((el, i) => (
              <Tr key={el._id}>
                <Td textAlign={"center"} maxWidth={["120px", "160px"]}>
                  <Image
                    margin={"auto"}
                    w={{ sm: "80px", md: "140px", lg: "180px" }}
                    h={{ sm: "100px", md: "156px", lg: "200px" }}
                    src={el.image}
                    alt="alt"
                  />
                  <Text
                    fontWeight={500}
                    fontSize={{
                      sm: "10px",
                      md: "12px",
                      lg: "13px",
                      xl: "15px",
                    }}
                    overflow={"hidden"}
                    textOverflow={"clip"}
                    minW={"full"}
                  >
                    {el.name}
                  </Text>
                </Td>
                <Td fontWeight={500}>₹{+el.price}</Td>
                <Td>
                  <Button
                    fontWeight={500}
                    disabled={el.qty === 1}
                    onClick={() => handleCount(el._id, -1)}
                    bg={"gray.400"}
                  >
                    -
                  </Button>{" "}
                  {el.qty}{" "}
                  <Button
                    fontWeight={500}
                    onClick={() => handleCount(el._id, 1)}
                    bg={"gray.400"}
                  >
                    +
                  </Button>
                </Td>
                <Td fontWeight={500}>₹{el.qty * +el.price}</Td>
                <Td>
                  <Button bg={"gray.400"} onClick={() => removeItem(el._id)}>
                    <CloseIcon color={"red"} />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
        </Table>
      </TableContainer>
      <br />
      <Spacer />
      <Box
        p={5}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        textAlign={"center"}
        margin={"auto"}
        minH={"350px"}
        maxW={"xl"}
        bg={"gray.100"}
      >
        <Heading
          marginBottom={4}
          size={{ base: "10px", sm: "12px", md: "15px", lg: "lg" }}
        >
          CART TOTAL
        </Heading>
        <Box
          fontWeight={500}
          fontSize={"20px"}
          margin={"auto"}
          textAlign={"center"}
          p={3}
          maxW={"300px"}
          minH={"270px"}
          bg={"#d9d9d9"}
        >
          <Flex justifyContent={"space-between"} marginTop={"7px"}>
            <Text fontSize={{ base: "sm", md: "md", lg: "xl" }}>
              Subtotal :{" "}
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "xl" }}>₹{total}</Text>
          </Flex>
          <Spacer />
          <Flex justifyContent={"space-between"} marginTop={"7px"}>
            <Text fontSize={{ base: "sm", md: "sm", lg: "xl" }}>
              GST 12% :{" "}
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "xl" }}>
              ₹{((12 / 100) * total).toFixed(2)}
            </Text>
          </Flex>
          <Spacer />
          <Flex justifyContent={"space-between"} marginTop={"7px"}>
            <Text fontSize={{ base: "sm", md: "md", lg: "xl" }}>
              Subtotal :{" "}
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "xl" }}>
              ₹{(total + (12 / 100) * total).toFixed(2)}
            </Text>
          </Flex>
          <Spacer />
          <Button
            marginTop={"19px"}
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
            // w={{ base: "70px", md: "200px", lg: "200px" }}
          >
            <Link to={"/checkout"}>Proceed to checkout</Link>
          </Button>
          <br />
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            marginTop={"7px"}
            variant="outline"
            w={"200px"}
          >
            <Link to={"/"}>Continue Shopping</Link>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CartPage;