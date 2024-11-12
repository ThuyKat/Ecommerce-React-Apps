

import { createContext, useEffect, useState } from "react";
// DEFINE TYPE FOR CART CONTEXT
type CartItemType= {
    id:number,
    title:string,
    thumbnail:string,
    price:number,
    quantity:number,
    stock:number,
}
type CartContextType ={
    cart:CartItemType[],
    // setCart:React.Dispatch<React.SetStateAction<CartItemType[]>>;
    handleChange:(id:number,newQuantity:number)=>void,
    handleDelete:(id:number) => void,
    //Object parameters: used when having many params, easier to add or remove params in the future without changing function signature, when some might be optional, or passign around a consistent set of data
    addToCart:(value:{item:CartItemType,quantity:number})=> void
}
// CREATE CONTEXT WHICH HAS TYPE AS CARTCONTEXTTYPE AND ASSIGN INITIAL VALUES
export const CartContext = createContext<CartContextType>({
    cart:[],
    addToCart:() => {},
    handleChange:()=>{},
    handleDelete:()=>{},
})


export default function CartProvider(props: { children: any }) {
    const [cart, setCart] = useState<any[]>([]);


    const addToCart =({item,quantity}:{item:any,quantity:number})=>{
        let newCart = [...cart];
        if(!cart.some(obj => obj.id === item.id)){
            newCart.push({...item,quantity});
            
        }else{
            newCart = cart.map(obj => obj.id === item.id? {...obj,quantity:obj.quantity+quantity}:obj)
        }
        setCart(newCart);
    }
     //handle quantity change in any cart item
     const handleChange = (id:number,newQuantity:number) => {
        if(newQuantity ===0){
            //Remove item from cart
            handleDelete(id);
        }else{
            //update quantity
            const newCart = cart.map(obj=> obj.id===id?{...obj,quantity:newQuantity}:obj)
            setCart(newCart);
        }
    }

    //remove item from cart
    const handleDelete = (id:number) => {
        const newCart = cart.filter(item => item.id !==id);
        setCart(newCart);
    };

    return <CartContext.Provider value={{
        cart,
        addToCart,
        handleChange,
        handleDelete,
    }} >
        {props.children}
    </CartContext.Provider>
}
