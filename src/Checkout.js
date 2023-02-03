import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import CheckoutProduct from './CheckoutProduct.js'
import {useStateValue} from './StateProvider.js'

function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
       <div className='checkout__left'>
          <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='' />
          <div className='checkout__title'>
            <h3>Hello, {user?.email}</h3>
            <h2>Your Shopping Basket</h2>
            {basket.map(item =>(
              <CheckoutProduct 
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
            {/*CheckoutProduct*/}
          </div>
       </div>
       <div className='checkout__right'>
          <Subtotal />
       </div>
    </div>
  )
}

export default Checkout