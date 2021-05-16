import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react"
import DynamicText from "components/DynamicText";
import SignIn from "components/SignIn";
import SignUp from "components/SignUp";
import Blog from "components/Blog";
import Index from "../pages/index";
import { Router, Link } from "@reach/router"
import { useNavigate } from "@reach/router"
import { Stack,Button } from "@chakra-ui/react"
import { useEffect, useState } from 'react';

const MyApp = ({ Component, pageProps }) => {
  const [key, setKey] = useState(undefined)

  useEffect(() => {
    setKey(localStorage.getItem('isAuthenticated'))
  }, [])

 
  if (key === "true") {
    
    return publicRoute();
  }
  else {
   
    return privateRoute();
  }

};

const LandingPage = (path) => {


  const navigate = useNavigate()
  return (<Stack spacing={4} direction="row" align="center">

    <Button onClick={() => {
      navigate("signIn")
    }} colorScheme="teal" size="lg">
      SignIn
  </Button>
    <Button onClick={() => {
      navigate("signup")
    }} colorScheme="teal" size="lg">
      Singup
  </Button>
  </Stack>)
}

const privateRoute = () => {

  return (

    <ChakraProvider>
      <Router>
        <LandingPage path="/" />
        <SignIn path="/signIn" />
        <SignUp path="/signup" />

      </Router>
    </ChakraProvider>
  )
}

const publicRoute = () => {
  return (

    <ChakraProvider>
      <Router>
        <Index path="/" />
        <DynamicText path="/" />
        <Blog path="/blog" />

      </Router>
    </ChakraProvider>
  )
}

export default MyApp;
