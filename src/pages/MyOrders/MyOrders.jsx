import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
        setData(response.data.data);
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className="orders-container">
            <h2 className="orders-title">My Orders</h2>
            <div className="order-list">
                {data.map((order, index) => (
                    <div key={index} className="order-item">
                        <img src={assets.parcel_icon} alt="Parcel" className="order-icon" />
                        <div className="order-details">
                            <p className="order-foods"><b> Details Order  :  </b>
                                 {order.items.map((item, idx) => (
                                    <b>
                                    <span key={idx}>
                                        {item.name} x {item.quantity}
                                        {idx < order.items.length - 1 ? ', ' : ''}
                                    </span></b>
                                ))}
                            </p>
                            <p className="order-customer">Items: {order.items.length}</p>
                        </div>
                        <div className="order-meta">
                            <b><p className="order-price">{order.amount}.00 DH</p></b>
                            <p className="order-status">
                                <span>&#x25cf;</span> {order.status}
                            </p>
                            <button className="track-order-btn" onClick={fetchOrders}>Track Order</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
