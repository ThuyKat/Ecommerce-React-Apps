import { Grid2 } from "@mui/material";
import Product from "../Product";
type ProductContainerProps={
    products: any[]
}
type Product={
    id:number,
    thumbnail:string,
    title:string,
    price:number,
    stock:number,
}

export default function ProductContainer({products}:ProductContainerProps){
 return (
    
<Grid2 size={{xs:12,md:8}} container spacing={2}>
{
    products.map(({id,thumbnail,title,price,stock})=>{
        return <Grid2 size={4}>
            <Product id={id} title={title} thumbnail={thumbnail} price={price} stock={stock} />
             </Grid2>
    })
}
    
</Grid2>



 )

}


