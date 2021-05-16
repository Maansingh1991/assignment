import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "components/DynamicText";
import { useRef } from "react";
import { Input } from "@chakra-ui/react";
import {  Link } from "@reach/router";

const Home = (path) => {
  const myref = useRef (null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    myref.current.changeValue(e.target.value);
    
  };

  return (
   
    <div className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <ul>
            <li>
              <Link to="/">Assignment 1</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
      </div>
      <main className={styles.main}>
        <DynamicText ref= {myref}
        />
        <Input w="400px" variant="filled" onChange={onChange} placeholder="Enter Text" />
        
      </main>
   

  
    </div>
   
  );
};


export default Home;
