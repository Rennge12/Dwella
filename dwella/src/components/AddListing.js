import React, { useState } from 'react';

const AddListing = () => {
    const [listingData, setListingData] = useState({
        homeType: '',
        description: '',
        price: ''
    });
    const [formData, setFormData] = useState({
        description: '',
        price: '',
        homeType: '',
      });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setListingData({ ...listingData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can now send this data to the backend API for adding a listing
        console.log('Listing added:', listingData);
    };

    return (
        <div>
            <h2>Pievienot sludinājumu</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Dzīvoklis vai māja:</label>
                    <select name="homeType" value={formData.homeType} onChange={handleChange}>
                <option value="">Izvēlies</option>
                <option value="offering">Dzīvoklis</option>
                <option value="using">Māja</option>
              </select>
                </div>
                <div>
                    <label>Detaļas:</label>
                    <textarea
                        name="description"
                        value={listingData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={listingData.price}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Pievienot</button>
            </form>
        </div>
    );
};

export default AddListing;
