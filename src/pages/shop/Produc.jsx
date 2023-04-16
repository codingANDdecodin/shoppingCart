import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContextProvider';

function Produc(props) {
    const {id,productName,price,productImage}=props.data;
    const {addToCart,cartItems}=useContext(ShopContext);
    const cartItemAmount=cartItems[id];
  return (
    <div className='product'>
        <img src={productImage}></img>
        <div className='description'>
             <p>
                <b>{productName}</b>
             </p>
             <p>
                ${price}
             </p>
        </div>
        <button className='addTOCartBttn' onClick={()=>{addToCart(id)}}>add to cart{cartItemAmount>0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}

export default Produc