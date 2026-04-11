import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Totle</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((itme, index) => {
          if (cartItems[itme._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={itme.image} alt="" />
                  <p>{itme.name}</p>
                  <p>₹{itme.price}</p>
                  <p>{cartItems[itme._id]}</p>
                  <p>₹{itme.price * cartItems[itme._id]}</p>
                  <p onClick={()=>removeFromCart(itme._id)} className='cross'>x</p>
                </div>
                <hr />
              </>


            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-totle">
          <h2>Cart Totle</h2>
          <div>
            <div className="cart-totle-detials">
              <p>Subtotle</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="cart-totle-detials">
              <p>Delivery fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-totle-detials">
              <b>Totle</b>
              <b>{0}</b>
            </div>
          </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>

      </div>
    </div>
  )
}

export default Cart