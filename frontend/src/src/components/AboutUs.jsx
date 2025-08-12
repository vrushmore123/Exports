import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/submit", formData);
      alert(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Company Info */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-green-700">
          Dadhe Global Exporters – Delivering India to the World
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          At Dadhe Global Exporters, we go beyond borders to bring the finest treasures of India to the global marketplace. 
          We are a modern export company rooted in rich traditions — proudly dealing in high-quality spices, cold-pressed oils, 
          agro products, imitation jewelry, and handwoven carpets.
        </p>
        <p className="italic text-gray-600 mb-4">“Quality isn’t a feature — it’s a promise.”</p>
        <p className="text-gray-700">
          We work closely with trusted farmers, artisans, and producers across India to ensure every product we export carries 
          the essence of authenticity and excellence. From the bold flavors of Indian spices to the purity of natural oils, 
          every shipment tells a story — of care, culture, and craftsmanship.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <Form/>
      </div>
    </div>
  );
}
