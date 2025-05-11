import "./AllItems.css";
import React, { useContext } from "react";

import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../../components/FoodItem/FoodItem.jsx";
import { Link } from "react-router-dom";
import { useRef } from "react";

function AllItems() {
    const { food_list } = useContext(StoreContext);
    const allItemsRef = useRef(null);
    const isLoading = food_list.length === 0;

    const scrollToTop = () => {
        if (allItemsRef.current) {
            allItemsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToBottom = () => {
        if (allItemsRef.current) {
            allItemsRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    };

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <>
            <div className="all-items" ref={allItemsRef}>
                <div className="all-items-list">
                    {food_list.map((item, index) => (
                        <FoodItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>

                <button className="scroll-to-top" onClick={scrollToTop}>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>

                <button className="scroll-to-bottom" onClick={scrollToBottom}>
                    <i className="fa-solid fa-arrow-down"></i>
                </button>

                <Link to="/">
                    <button className="back-to-home">
                        <i className="fa-solid fa-house"></i>
                    </button>
                </Link>
            </div>
        </>
    );
}
export default AllItems;
