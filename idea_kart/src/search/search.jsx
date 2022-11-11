// import { Box, Button, Center, Flex, Grid, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react'
// import React, { useState } from 'react'


// import {  useDisclosure } from "@chakra-ui/react";
// import  { useEffect} from "react";

// import { Select } from "@chakra-ui/react";
// import axios from "axios";

// const item = ["price", "size", "prod_name"];
// function Search() {
//     const [text,setText] =useState("")
//     const[data,setData] = useState([])
   
//     const[page,setPage] =useState(1);
//     const[totalpage,setTotalpage]=useState()
//     const [sort, setSort] = useState("");

//     const getsearch =()=>{
//       let url=`https://data-base.onrender.com/products`;
//       // if(sort===""&&text===true){
//       //   url=url+`?type1=${text}&_page=${page}&_limit=20`
//       // }else{
//       //   url=url+`?type1=${text}&_sort=${sort}&_order=asc&_page=${page}&_limit=20`
//       // }
      
//         axios
//           .get(url)
//           .then((res) => {
//             setData(res.data);
//             setTotalpage(res.headers["x-total-count"])
//             console.log(res.data)
          
//           },[]);
//         // setText("")
//     }

          
//           const btnRef = React.useRef();
          

//           useEffect(() => {
//             let url=`https://data-base.onrender.com/products`;
            
//             if(sort!==""&&text===false){
//                 url=url+`?_sort=${sort}&_order=asc&_page=${page}&_limit=20`
//             }
//              else if(sort&&text){
//                 url=url+`?type1=${text}&_sort=${sort}&_order=asc&_page=${page}&_limit=20`
//             }else if(text){
//                 url=url+`?type1=${text}&_page=${page}&_limit=20`
//             }else{
//                 url=url+`?_page=${page}&_limit=20`
//             }
           
//             axios
//               .get(url)
//               .then((res) => {
//                 setData(res.data);
//                 setTotalpage(res.headers["x-total-count"])
                
//               });
//           }, [sort,page]);
//   return (
//     <Box>
//       <Box>
//         <Box ml={["100px","150px","200px"]}>
//           <Text
//             as="h1"
//             textAlign="center"
//             fontSize={["xl","3xl","6xl"]}
//             fontWeight="500"
//           >
//             {" "}
//             SEARCH
//           </Text>

//           <Stack>
//             <Center>
//             <Input
//               width={["lg"]}
//               onChange={(e) => setText(e.target.value)}
//               border="none"
//               borderRadius="0"
//               borderBottom="1px"
//               borderColor="black"
//               type="text"
//               value={text}
//               placeholder="search items...."
//             />
//             <Button  onClick={getsearch} bgColor="wight"  color="black">
//                 <Text p={"10px"}>Search</Text>
//             </Button>
//             </Center>
//           </Stack>
//         </Box>
        
//           <Box width="400px" height="400px" bgColor="white">
       
//           </Box>
    
//           <SimpleGrid columns={[1,2,3,4]} spacing={5}>
//             {data.map((el) => {
//               return <div>key={el._id} id={el._id} price={el.price} imgUrl={el.imgUrl} prod_name={el.prod_name} </div> ;
//             })}
           
//           </SimpleGrid>
        

       
//       </Box>
      
//     </Box>
//   );
  
// }

// export default Search