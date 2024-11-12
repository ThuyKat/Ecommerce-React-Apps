import { Autocomplete } from '@mui/material'

import './App.css'
import ProductList from './Components/ProductList'
import NavigationBar from './Components/NavigationBar'
import { Router, Routes,Route } from 'react-router-dom'
import ProductDetails from './Components/ProductDetail'
import CartProvider from './Context'
import CartPage from './Components/CartPage'

function App() {
  //TYPE

  //stricter in typescript
//  let str = 'string';
//  str =3;

 //khai bao: 
//  let str:string;
//  //number,boolean,number[]
//  let str1:string[]=["abc","def"]
//  let str2:[string,number] =["abc",3];
//  let str3:any=["abc",56];

// //2. Object
// let obj={
//   name:"Phuc",
//   age:3,
// }

// type User={
//   id:number,
//   name:string,
//   email?:string,
// }

// let example:User;
// example ={
//   id:3,
//   name:'string'
// }
// //3. Function
// function abc(param:string) : string{
//   param.toLowerCase; //all method of string will be suggested
//   return "ok";
//   //return type
//   //parameter
// }
//4. extend -> inheritance
//5. Material UI, ant.design -> component: props, state
return (
  <CartProvider>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<h1>Home page</h1>} ></Route>
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<CartPage/>} ></Route>
      <Route path="*" element={<h1>404 Not found!</h1>} ></Route>
    </Routes>
  </CartProvider>
);
}

export default App;
