import React from 'react'
import {PRODUCTS} from '../../Product'
import Produc from './Produc'
import "./Shop.css";

function Shop() {
    
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>tech shop</h1>
        </div>
        <div className='products'>
              {PRODUCTS.map((p)=>{
                // console.log(p);
                 return<Produc key={p.id} data={p}></Produc>
              })}
        </div>
    </div>
  )
}

export default Shop