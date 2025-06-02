import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-content">
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {food_list.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <tr key={item._id}>
                      <td>
                        <img className="ppipi" src={item.image} alt={item.name} />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price} DH</td>
                      <td>{cartItems[item._id]}</td>
                      <td>{item.price * cartItems[item._id]} DH</td>
                      <td className="remove-btn" onClick={() => removeFromCart(item._id)}>
                        <img src={assets.deleteicon} alt="Remove" />
                      </td>
                    </tr>
                  );
                } else return null;
              })}
            </tbody>
          </table>
        </div>
          <div className="vertical-separator"></div>

        <div className="cart-bottom">
          <div className="cart-total">
            <h2><b>Cart Totals</b></h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}DH</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount() === 0 ? 0 : 20}DH</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}DH</b>
              </div>
            </div>
            <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
          </div>

          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Cart;
