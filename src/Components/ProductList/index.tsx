import { Grid2,Box, Container} from "@mui/material"
import ProductContainer from "../ProductContainer"
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import ProductContainerSkeleton from "../ProductContainerSkeleton";

export default function ProductList(){
    const[products,setProducts] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(false);
    const getProductData =  async () => {
      try{
        const response = await axios.get('https://dummyjson.com/products');
        console.log(response);
        setIsLoading(false);
        setProducts(response.data.products);
      }catch(error){
        setError(true);
        console.log(error);
        setIsLoading(false);
      }
      
    } 

useEffect(() => {
  getProductData();
}, []);
 
 
 return(
    <Box mt={2}>
    <Grid2 container >
   
    <Grid2 size={4}>
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box is side bar
    </Box>
   </Grid2>
   {
    error? "Something went wrong!!" : 
    (isLoading? <ProductContainerSkeleton/>: <ProductContainer  products={products}/>)
   }
  
   
    </Grid2>
    </Box>
    )
}