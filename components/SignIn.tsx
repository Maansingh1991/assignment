
import { SimpleGrid, Box, Input,Text,Button } from "@chakra-ui/react"
import { useState } from 'react';
import { useNavigate } from "@reach/router"
import {auth} from "../firebase";

var SignIn = (path) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = ()=>{
       
        auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;

    localStorage.setItem('user', user.email);
    localStorage.setItem('isAuthenticated',"true");
    alert("Login succesfully...")

    window.location.href = "/"
    
  })
  .catch((error) => {
      alert("Not found. Please check your mail and password")
      localStorage.setItem('isAuthenticated',"false");
      console.error(error)
  });

    }

    return <SimpleGrid columns={1} spacing={10} >
<Text align = {"center"} fontSize="xl">Sign In Page</Text>
        <Input  type = {"email"} placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} size="lg" />
        <Input type = {"password"} placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  size="lg" />
        <Button onClick = {submit} colorScheme="blue">SignIn</Button>
    </SimpleGrid>
}



export default SignIn;