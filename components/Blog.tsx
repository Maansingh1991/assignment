import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";

import { Stack, Divider, Badge, Image, Box, Heading, Text, Center, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button } from "@chakra-ui/react"
import { bottom } from "@popperjs/core";
const title = [
    "What is Lorem Ipsum?",
    "Why do we use it?",
    "Where does it come from?",
    "Where can I get some?",
    "The standard Lorem Ipsum passage, used since the 1500s",
    "Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC",
    "1914 translation by H. Rackham",
    "de Finibus Bonorum et Malorum",
    "1914 translation by H. Rackham",
    " written by Cicero in 45 BC"
];

const text = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ,
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    ,
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
    ,
    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from e Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    ,
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    ,
    "ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
    ,
    "e system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertake"
    ,
    "e system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertake"
    ,

    "molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earu",
    ,
    "r duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occ"];

const images = [
    "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
    "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
    "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
    "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
    "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
    "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    "https://homepages.cae.wisc.edu/~ece533/images/tulips.png",
    "https://homepages.cae.wisc.edu/~ece533/images/zelda.png",
    "https://homepages.cae.wisc.edu/~ece533/images/watch.png"
];
var Blog = (props, ref) => {

    const [data, setData] = useState([]);
    const [isOpen,setOpen] =  useState(false);
    const [objModal, setObjModal] = useState({});


    useEffect(() => {
        const interval = setInterval(() => {
            //randomBlogGenerator();
            readData();
        }, 10000);
        const interval1 = setInterval(() => {
            randomBlogGenerator();
            
        }, 11000);
        return () => clearInterval(interval);
    }, []);


    const readData = async() => {
       
        let docx = [...data];
        const querySnapshot = await firestore.collection("blog").get();
            querySnapshot.forEach((doc) => {

               
                docx.push(doc.data())
                
            });
            
            setData(docx);
       
    }
    const randomBlogGenerator = () => {

        const index = Math.floor(Math.random() * 9);
       
        if(title[index] && text[index] && images[index])
        firestore.collection("blog").add({
            title: title[index],
            text: text[index],
            imageUrl: images[index]
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
    function Feature({ title, desc, imageUrl }) {
        return AirbnbExample({ title, desc, imageUrl })
    }

    function StackEx() {
       

        return (
            <div>
            <Stack spacing={8}>

                {data.map((d) => {
                   
                    return (<Feature
                        title={d.title}
                        desc={d.text}
                        imageUrl={d.imageUrl}
                       
                    />)
                })}

            </Stack>
            {isOpen ? <BasicUsage isOpen={isOpen}/>:""}
            </div>
        )
    }



    function AirbnbExample(desc) {
        const property = {
            imageUrl: desc.imageUrl,
            imageAlt: "default text",
            title: desc.title,

        }

        return (

            <Box  maxW="lg" borderWidth="5px" borderRadius="lg" overflow="hidden">
                <Image  src={property.imageUrl} alt={property.imageAlt} />

                <Box p="6">


                    <Box >
                        <b >{property.title}</b>
                        <Button onClick={()=>{
                            
                           setOpen(true)
                           setObjModal({title:desc.title,desc:desc.desc})
                        }} >View</Button>
                    </Box>



                </Box>
                
            </Box>

        )
    }

    function BasicUsage(props) {
        //const { isOpen, onOpen, onClose } = useDisclosure()
       
        return (
          <>
            <Button onClick={()=>{}}>Open Modal</Button>
      
            <Modal isOpen={isOpen} onClose={()=>{
                setOpen(false)
            }}>
              <ModalOverlay />
              <ModalContent>
        <ModalHeader>{ objModal.title }</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  { objModal.desc }
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={()=>{  setOpen(false)}}>
                    Close
                  </Button>
                 
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }


    return data.length > 0 ? StackEx() : <h1>Loading blogs... Code will auto generate blogs and auto refresh(10s-11s).</h1>
};







export default Blog;
