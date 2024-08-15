import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

import {auth} from '../../Firebase/Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin =()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log('userCredential',userCredential);
        })
        .catch((error)=>{
            console.log('error',error);

        })
    };

    return(
        <>
        <h1>Login Form</h1>
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
        <Button 
        variant="contained"
        onClick={handleLogin}
        >Login</Button>
        </Stack>
        </>
    )
};

export default LoginPage;