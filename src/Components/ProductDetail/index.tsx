import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Grid2'; 
import Button from '@mui/material/Button';
import { useLocation, useParams } from 'react-router-dom';
import { CircularProgress, IconButton, TextField } from '@mui/material';
import { RemoveCircle, AddCircle } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function ProductDetails() {
  const {id} = useParams();
  // const location = useLocation();
  // const { thumbnail, title, price, stock } = location.state;
  // DEFINE PRODUCT TYPE SO THAT PRODUCT HAS CONSISTENT DATA STRUCTURE
  type Product = {
    thumbnail: string;
    title: string;
    price: number;
    stock: number;
  }
  const [quantity, setQuantity] = useState(1);
  const[product,setProduct] = useState<Product>({
    thumbnail:'',
    title:'',
    price:0,
    stock:0,
    
  });
  
  const[isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(false);
  const getProductData =  async () => {
    try{
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(response.data);
      setIsLoading(false);
      // EXPLICITLY MAP THE DATA IN CASE RESPONSE.DATA CONTAINS EXTRA PROPERTIES OR MISS SOME REQUIRED ONE
      setProduct({
        thumbnail: response.data.thumbnail ||'',
        title:response.data.title ||'',
        price: response.data.price ||0,
        stock:response.data.stock||0,
      });
    }catch(error){
      setError(true);
      console.log(error);
      setIsLoading(false);
    }
    
  } 
useEffect(() => {
getProductData();
}, []);




  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleChange= (event:React.ChangeEvent<HTMLInputElement>)=>{
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && (value >= 1)) {
      setQuantity(value);
    }
  };
  if(isLoading){
    return <CircularProgress/>
  }
  return (
    <Box mt={2}>
      <Grid2 container spacing={2}>
        
        <Grid2 size={6}>
          <Box component="section" sx={{ p: 2, border: '1px solid grey' }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
          </Box>
        </Grid2>

        <Grid2 size={6}>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey'}}>
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="h6">Price: ${product.price}</Typography>
            <Typography variant="body1">Stock: {product.stock}</Typography>
            <Box display="flex" alignItems="center">
      <IconButton onClick={handleDecrease} disabled={quantity <= 1}>
        <RemoveCircle sx={{color:'black'}}/>
      </IconButton>
      <TextField
        value={quantity}
        onChange={handleChange}
        type="number"
        InputProps={{
          inputProps: { min: 1 }
        }}
        sx={{ width: '60px', mx: 1 }}
      />
      
        <IconButton onClick={handleIncrease}>
          <AddCircle sx={{color:'black'}}/>
        </IconButton>
        </Box>
          <Button size="small" sx={{color:'white',backgroundColor:"blue"}} onClick={() => console.log("Product_id", id)}>Add To Cart</Button>
        </Box>
        </Grid2>

      </Grid2>
    </Box>
  );
}