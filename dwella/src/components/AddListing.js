import React, { useState } from 'react';

const AddListing = () => {
    const [listingData, setListingData] = useState({
        title: '',
        description: '',
        price: ''
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
            <h2>Add a New Listing</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={listingData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
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
                <button type="submit">Add Listing</button>
            </form>
        </div>
    );
};

export default AddListing;
