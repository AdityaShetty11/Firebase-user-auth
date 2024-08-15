import React, { useState } from "react";
import "./RegistrationPage.css";
import { Box, TextField, Button, Stack, Typography } from "@mui/material";

import {auth} from '../../Firebase/Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  const handleRegister = () =>{
    console.log('Register');
    createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
      console.log('User Credential', userCredential);
    }).catch((error)=>{
      console.log('Error', error);
    })
  };

  return (
    <>
    {/* <Typography level="h1">Registration Form</Typography> */}
<h1>Registration Form</h1>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        padding={2}
        border={2}
        // width={50}
      >
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextField
          id="retypePassword"
          label="Confirm Password"
          type="password"
          value={retypedPassword}
          autoComplete="current-password"
          hidden= {true}
          onChange={(e) => {
            setRetypedPassword(e.target.value);
          }}
        />
        <Button 
        variant="contained"
        onClick={handleRegister}
        >Register</Button>
      </Stack>
    </>
  );
}
export default RegistrationPage;
