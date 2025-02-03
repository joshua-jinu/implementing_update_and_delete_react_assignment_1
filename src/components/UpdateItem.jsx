import axios from "axios";
import { useState } from "react";
import './UpdateItem.css'

const UpdateItem = ({ item }) => {
    // 1. Create a state for the form
    const [formData, setFormData] = useState({
        id: item.id,
        name: item.name,
        status: item.status,
    });
    // 2. Create a function to handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://${import.meta.env.VITE_API_URI}/doors/${item.id}`, formData);
            console.log("Updated Cart Item:", formData);
            alert("Cart item updated successfully!");
        } catch (error) {
            console.log("Error in Cart Updation:", error.message);
            alert("Error in Cart Updation!");
        }
      };
    
    // 3. Create a function to handle the form input changes
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    // your code here
    return (
    <div className="card">
        <h2>Update Cart Item</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>ID</label>
            <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>Status</label>
            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
            >
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
            </select>
            </div>
            <button type="submit" className="submit-button">
            Update Item
            </button>
        </form>
    </div>
    );
};

export default UpdateItem;

