import { Container} from "@mui/material";
import CartItem from "../CartItem";
import { useContext } from "react";
import { CartContext } from "../../Context";

// BT1: Update cart logic on ProductList and list all in CartPage (Create/Read)
// BT2: Add logic to update cart from ProductDetail and CartPage (Update/Delete)
function CartPage() {
    // useReducer
    // action, reducer, dispatch aciton
    // Update cart
    // Delete cart
    // const onChangeQuantity = (newQuantity) => {
    //     dispatch({ type: 'UPDATE_CART', payload: { id, newQuantity } })
    // }

    
   
    const {cart,handleChange,handleDelete} = useContext(CartContext);
    
    return <Container>
        {cart.length ? cart.map(({ id, title, thumbnail, price, quantity }) => {
            //When quantity is passed as prop, read-only value is passed. Changes to this prop in CartItem wont automatically update the state in CartPage
            return <CartItem handleDelete={ () => handleDelete(id)} key={id} handleChange={(newQuantity:number) => handleChange(id, newQuantity)} id={id} img={thumbnail} title={title} price={price} quantity={quantity} />
        }) : <h1>Your cart is empty</h1>}
    </Container>
}







export default CartPage
