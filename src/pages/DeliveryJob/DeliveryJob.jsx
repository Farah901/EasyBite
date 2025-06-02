import React, { useRef, useState } from "react";
import "./DeliveryJob.css";
import { assets } from "../../assets/assets";  // Importez votre image

const DeliveryJob = () => {
  const formRef = useRef(null);
  const [msg, setMsg] = useState("");

  const scriptURL = "https://script.google.com/macros/s/AKfycbwOhEuFjwOnzjRWBHUFXdjamFiFhSB-uwLA8Mhq8-ehrGZIXIOzAYE-I7EVGLj9UJ4-/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then(() => {
        setMsg("Message sent successfully!");
        setTimeout(() => setMsg(""), 5000);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setMsg("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="delivery-page-container">
      <div className="delivery-content-container">
        <div className="form-container">
          <h1>Join Our Delivery Team</h1>
          
          <form onSubmit={handleSubmit} name="submit-to-google-sheet" ref={formRef}>
            <div className="form-row">
              <div className="form-group">
                <label><strong>Full Name:</strong></label>
                <input type="text" name="FullName" required />
              </div>

              <div className="form-group">
                <label><strong>Phone Number:</strong></label>
                <input type="tel" name="Phone" required />
              </div>
            </div>

            <div className="form-group">
              <label><strong>City:</strong></label>
              <input type="text" name="City" required />
            </div>

            <div className="form-group">
              <label><strong>Delivery Experience:</strong></label>
              <input type="text" name="Experience" />
            </div>

            <div className="form-group">
              <label><strong>Vehicle Type:</strong></label>
              <select name="VehicleType" required>
                <option value="">-- Select --</option>
                <option value="bike">Bike</option>
                <option value="motorbike">Motorbike</option>
                <option value="car">Car</option>
              </select>
            </div>

            <button type="submit">Submit</button>
          </form>
          {msg && <span id="msg">{msg}</span>}
        </div>

        <div className="image-container">
           <img 
            src={assets.delivery_man} // Utilisez l'image depuis assets
            alt="Delivery Person" 
            className="delivery-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryJob;