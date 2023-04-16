import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContextProvider'
import { PRODUCTS } from '../../Product'
import CartItem from './CartItem';
import "./Cart.css";
import { Navigate, useNavigate } from 'react-router-dom';

function Cart() {
    const navigate=useNavigate();
    const {cartItems,getTotalAmount}=useContext(ShopContext);
    const totalAmount=getTotalAmount();
console.log(totalAmount)
  return (
    <div className='cart'>
        <div>
            
            <h1>Your Cart Items</h1>
        </div>
        <div className='cartItems'>
            {
                PRODUCTS.map((p)=>{
                    if(cartItems[p.id]!==0){
                        return<CartItem key={p.id} data={p}></CartItem>
                    }
                })
            }
        </div>
        { totalAmount> 0 ? <div className='checkout'>
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={()=>{navigate("/")}}>continue shopping</button>
            <button>Checkout</button>
        </div>:
        <h1>your card is empty</h1>}
    </div>
  );
}

export default Cart