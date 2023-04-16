import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Product';


export const ShopContext=createContext();

const getDefaultCart=()=>{
  let cart={};
  for(let i=0;i<PRODUCTS.length+1;i++){
    cart[i]=0;
  }
  return cart;
}

function ShopContextProvider(props) {
  const [cartItems,setCartItems]=useState(getDefaultCart())

  const getTotalAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
         if(cartItems[item]>0){
          let itemInfo=PRODUCTS.find((product)=> product.id === Number(item));
          totalAmount+=cartItems[item] * itemInfo.price;
         }
    }
    return totalAmount;
  }

  const addToCart=(itemId)=>{
    setCartItems((pre)=>({...pre,[itemId]:pre[itemId]+1}))
  }
  const removeFromCart=(itemId)=>{
    setCartItems((pre)=>({...pre,[itemId]:pre[itemId]-1}))
  }
const updateCartItemCount=(newAmount,itemId)=>{
  setCartItems((pre)=>({...pre,[itemId]:newAmount}))
}

//  console.log(cartItems)
  const contextValue={cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalAmount}
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
};

export default ShopContextProvider