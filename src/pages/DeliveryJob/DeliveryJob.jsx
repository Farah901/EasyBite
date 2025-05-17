import React, { useState } from "react";

function DeliveryJob() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    experience: "",
    vehicleType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your application has been submitted!");
    // TODO: Send the data to an API or backend here
    setFormData({
      fullName: "",
      phone: "",
      city: "",
      experience: "",
      vehicleType: "",
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Join Our Delivery Team</h1>
      <p>Fill out this form if you’re interested in working with us as a delivery driver.</p>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", marginTop: "1rem" }}>
        <div>
          <label>Full Name:</label><br />
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>

        <div>
          <label>Phone Number:</label><br />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div>
          <label>City:</label><br />
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>

        <div>
          <label>Delivery Experience:</label><br />
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} />
        </div>

        <div>
          <label>Vehicle Type:</label><br />
          <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="bike">Bike</option>
            <option value="motorbike">Motorbike</option>
            <option value="car">Car</option>
          </select>
        </div>

        <button type="submit" style={{ marginTop: "1rem" }}>Submit</button>
      </form>
    </div>
  );
}

export default DeliveryJob;
