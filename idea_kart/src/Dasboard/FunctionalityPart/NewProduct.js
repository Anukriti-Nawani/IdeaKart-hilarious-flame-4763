import { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea,
  Spacer,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { AddToProduct } from "../redux_a/prod.action";

const NewProduct = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [experience, setexp] = useState("");
  const [file, setfile] = useState("");
  const [buy, setbuy] = useState("");
  const [plateform, setplateform] = useState("");
  const { prod } = useSelector((store) => store);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      console.log(reader.result);
      setfile(reader.result);
    });

    reader.readAsDataURL(file);

    // console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(AddToProduct({ name, experience, file, buy, plateform }));
  };

  if (prod.error) {
    return alert("something went wrong try again");
  }

  return (
    <div>
      <h1
        style={{
          marginTop: "80px",
          marginLeft: "90px",
          marginBottom: "30px",
          fontSize: "30px",
        }}
      >
        New Review
      </h1>

      <FormControl maxW="660px" mx="auto" color="black" onSubmit={handleSubmit}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          onChange={(e) => setname(e.target.value)}
          name="name"
          value={name}
        />
        <Spacer />
        <FormLabel>Your Experience</FormLabel>
        <Textarea
          type="text"
          onChange={(e) => setexp(e.target.value)}
          name="experience"
          value={experience}
        />
        <Spacer />

        <FormLabel>File</FormLabel>
        <Input
          type="file"
          onChange={handleImage}
          name="file"
          accept=".png, .jpg"
        />
        <Spacer />

        <FormLabel>Did you bought it online or offline</FormLabel>
        <Select
          placeholder="Select One"
          onChange={(e) => setbuy(e.target.value)}
          name="buy"
          value={buy}
        >
          <option>online</option>
          <option>offline</option>
        </Select>

        <Spacer />

        <FormLabel>Platform</FormLabel>
        <Select
          placeholder="Select Platform"
          onChange={(e) => setplateform(e.target.value)}
          name="plateform"
          value={plateform}
        >
          <option>Amazon</option>
          <option>Flipkart</option>
          <option>SnapDeal</option>
          <option>ShopClues</option>
          <option>Reliance Digital</option>
          <option>Others</option>
        </Select>

        <Spacer />
        <Spacer />
        <Input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          mt="16px"
          cursor="pointer"
        />
      </FormControl>
    </div>
  );
};

export default NewProduct;
