import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchdata} from "../redux/action";
import { SimpleGrid, Box, Image, Text, Flex, HStack, Stack } from "@chakra-ui/react";
import { FaShoppingCart, FaList } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

// import Productcard from "./Productcard";
// import "./product.css";
const fetchdata = async () => {
  let res = await axios.get("https://data-base.onrender.com/products");
  return res.data;
};
export const Products = () => {
  const [productsData, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchdata().then((res) => {
      // console.log(res)
      setData(res);
      setLoading(false);
    }).then((e)=>{
        setError(true)
    });
  }, []);
  if (loading) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }
  if (error) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }
  
  // console.log(productsData !==null);
  // {console.log(productsData)}
  return (
    <div className="productbody">
      <Text
        m={"10px"}
        ml={"20px"}
        fontWeight="bold"
        fontSize="2xl"
        textAlign="left"
      >
        Top Reads
      </Text>
      <SimpleGrid
        mt={"5px"}
        ml={"30px"}
        mr={"30px"}
        columns={[1, 2, 3, 4]}
        spacing={5}
      >
        {/* <div className="productcontainer"> */}

        {productsData.map((el) => {
          return (
            <Box
              maxH={"98%"}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              _hover={{ bg: "rgba(247, 224, 161, 0.8)" }}
            >
              <Box backgroundColor="white" width="290px" textAlign={"center"}>
                <Image
                  p={"1rem"}
                  src={el.image}
                  alt="error"
                  width="290px"
                  height="380px"
                />
              </Box>
              <Box p={"10px"}>
                <Text
                  fontSize="sm"
                  textAlign="justify"
                  noOfLines={1}
                  letterSpacing="-1px"
                >
                  {el.name}
                </Text>
                <Text
                  color="rgb(99,102,241)"
                  fontSize="sm"
                  textAlign="left"
                >{`Price: ${el.price}`}</Text>
                <hr></hr>
                <Flex mt={"5px"}>
                  <HStack pr={"2rem"} borderRight="1px" borderColor="gray.200">
                    <FaShoppingCart />{" "}
                    <Text color="rgb(99,102,241)">
                      <Link to={`/ViewNow/${el._id}`}>View Now</Link>
                    </Text>{" "}
                  </HStack>
                  <HStack pl={"1rem"}>
                    <FaList />
                    <Text color="rgb(99,102,241)">
                      <Link to={`/ViewNow/${el._id}`}>More details</Link>
                    </Text>
                  </HStack>
                </Flex>
              </Box>
            </Box>
          );
        })}

        {/* </div> */}
      </SimpleGrid>
    </div>
  );
};