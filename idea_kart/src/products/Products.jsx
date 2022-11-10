import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../redux/action";
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Flex,
  HStack,
  Link,
  Stack,
} from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
// import Productcard from "./Productcard";
// import "./product.css";

export const Products = () => {

  return (
    <div className="productbody">
      {/* <div className="productcontainer">
        {productsData.map((el) => {
          return <Image p={"1rem"} src={el.image} alt="error" key={el._id} />;
        })} */}
      {/* </div> */}
    </div>
  );
};
