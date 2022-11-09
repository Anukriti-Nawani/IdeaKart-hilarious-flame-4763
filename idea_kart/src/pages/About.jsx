import React from 'react'
import { Text, Stack } from '@chakra-ui/react'
import Footer from '../Footer/Footer'
import styled from "styled-components";


const Ptag = styled.p`
text-align:justify;
  margin-left: 60px;
  margin-right: 60px;
  font-weignt: bold !important;
  font-size: 20px;
//   margin-bottom: 420px;
// padding-bottom: 2rem;
  margin-top: 30px;
  line-height: 2rem;
//   border: 1px solid red;
`;

const About = () => {
  return (
    <div>
      <Ptag>
      {/* <Ptag> */}
       <Text fontSize={["sm","md","lg"]} paddingBottom={"0.8rem"}>Ideakart is a site that gives u an idea about the book you want to buy. We offer a huge collection of books in diverse categories.</Text>
       <Text fontSize={["sm","md","lg"]} paddingBottom={"0.8rem"}>We have a user friendly search engine and a quick delivery system. With this we even provide best discounts on our books. You can write to us for any idea or any help you need.</Text>
       <Text fontSize={["sm","md","lg"]} paddingBottom={"0.8rem"}>Ideakart is a site that gives u an idea and a platform for the book you want. We offer a huge collection of books in diverse categories.</Text>
       <Text fontSize={["sm","md","lg"]} paddingBottom={"0.8rem"}>We have a user friendly search engine and a quick delivery system. With this we even provide best discounts on our books. You can write to us for any idea or any help you need.</Text>
       </Ptag>

      
    </div>
  )
}

export default About