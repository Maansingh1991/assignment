
import { SimpleGrid, Box, Input,Text,Button } from "@chakra-ui/react"

import {auth} from "../firebase";
import { useState } from 'react';
import { useNavigate } from "@reach/router"

var SignUp = (path)=>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = ()=>{
       
        auth.createUserWithEmailAndPassword(email,password)
  .then((userCredential) => {

    alert("Success, redirecting to Sign In page")
    navigate("signIn")
    
  })
  .catch((error) => {
    alert(error.message)
  });

    }

    return <SimpleGrid columns={1} spacing={10} >
    <Text align = {"center"} fontSize="xl">Sign Up Page</Text>
          
            <Input  type = {"email"} placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} size="lg" />
            <Input type = {"password"} placeholder="Password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}  size="lg" />
            <Button colorScheme="blue" onClick = {submit} >SignUp</Button>
        </SimpleGrid>
}



export default SignUp;