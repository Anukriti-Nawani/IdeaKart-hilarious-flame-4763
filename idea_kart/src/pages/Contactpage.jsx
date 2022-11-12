import React from "react";
import "./Contactpage.css";
// import {DB} from './firebase';
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Contactpage = () => {

    const toast = useToast();

  const navigate = useNavigate();
  const handleSubmit = () => {
    // alert("Thank You! Your form has been submitted.");
    toast({
        title: "Thank You! Your form has been submitted.",
        
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    navigate("/");
  };

  return (
    <form className="container2" onSubmit={handleSubmit}>
      <p style={{ margin: "auto" }}>
        You can contact our team by filling this form -
      </p>

      <div className="boxcontact">
        <div className="line1">
          <p>Firstname*</p>
          <input
            className="input_box"
            type="text"
            placeholder="Please enter your firstname*"
          />
        </div>
        <div className="line1">
          <p>Lastname*</p>
          <input
            className="input_box"
            type="text"
            placeholder="Please enter your lastname*"
          />
        </div>
      </div>

      <div className="boxcontact">
        <div className="line2">
          <p>Email*</p>
          <input
            className="input_box"
            type="email"
            placeholder="Please enter your email*"
          />
        </div>
        <div className="line2">
          <p>Phone*</p>
          <input
            className="input_box"
            type="Number"
            placeholder="Please enter your phone*"
          />
        </div>
      </div>

      <div className="msg1">
      <br />
        <p>Message*</p>
        
        <textarea className="msg2" type="text"></textarea>
        <button
        className="btn"
          style={{
            backgroundColor: "#5cb85c",
            color: "white",
            padding: "10px 0px",
            borderRadius: "3px",
            margin: "auto",
            marginTop: "20px",
            width: "200px",
            cursor: "pointer",
            fontSize: "bold",
          }}
          type="submit"
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default Contactpage;