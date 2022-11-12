import React from "react";
import {Heading , Box, Link} from "@chakra-ui/react"
// import { Link } from "react-router-dom";
const Notifications = () => {
  return (
    <Box >
      <Heading aligh={"left"}>Notifications</Heading>
      <ul style={{style:"list-style-type:none"}}>
        <li><Link color={"blue.500"} href="https://www.ideakart.com/make-money">Earn Money Working from Home just by adding product reviews!</Link></li>
      </ul>
    </Box>
  );
};

export default Notifications;