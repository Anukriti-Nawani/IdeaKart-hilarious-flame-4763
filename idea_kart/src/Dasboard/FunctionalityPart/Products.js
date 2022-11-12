import React, { useEffect } from "react";
import { GetToProduct } from "../redux_a/prod.action";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spacer,
  Box,
} from "@chakra-ui/react";

const Products = () => {
  const dispatch = useDispatch();
  const { prod } = useSelector((store) => store);

  useEffect(() => {
    dispatch(GetToProduct());
  }, []);

  //    console.log(prod)
  return (
    <div>
      <TableContainer maxW="660px" mx="auto">
        <Box fontSize="30px" mt="30px">
          Products
        </Box>

        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Media</Th>
              <Th>How to use</Th>
              <Th>Approval Status</Th>
            </Tr>
          </Thead>

          {prod.data.map((el, i) => {
            return (
              <Tbody key={i}>
                <Tr mt="30px">
                  <Td>{el.name}</Td>
                  <Td>
                    {" "}
                    <img src={el.file} alt="" width="100px" />
                  </Td>

                  <Td noOfLines={2}>{el.experience} </Td>
                  <Td>Under Review</Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
