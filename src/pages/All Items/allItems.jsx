import "./AllItems.css";
import React, { useContext, useRef, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../../components/FoodItem/FoodItem.jsx";
import { Link } from "react-router-dom";

function AllItems() {
  const { food_list } = useContext(StoreContext);
  const allItemsRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);
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
        <br />
        <h1 className="text-center">Our Full Collection</h1>
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

        <div className={`btns ${showButtons ? "show" : ""}`}>
          {showButtons ? (
            <i
              className="fa-solid fa-eye-slash"
              onClick={() => setShowButtons(false)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-eye"
              onClick={() => setShowButtons(true)}
            ></i>
          )}

          {showButtons && (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AllItems;
