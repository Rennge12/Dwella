import React, { useState } from 'react';
import '../styles/AddListing.css';

const AddListing = () => {
    const [listingData, setListingData] = useState({
        homeType: '',
        description: '',
        price: '',
        location: '',
        imageURL: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setListingData({ ...listingData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Listing added:', listingData);
    };

    return (
        <div className="form-container">
            <h2>Pievienot sludinājumu</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Dzīvoklis vai māja:</label>
                    <select name="homeType" value={listingData.homeType} onChange={handleChange}>
                <option value="">Izvēlies</option>
                <option value="offering">Dzīvoklis</option>
                <option value="using">Māja</option>
              </select>
                </div>
                <div>
                    <label>Detaļas:</label>
                    <textarea
                        name="description"
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <label>Cena:</label>
                    <input
                        type="number"
                        name="price"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Atrašanās vieta:</label>
                    <input
                        name="location"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Attēli:</label>
                    <input
                        name="images"
                        type= "file"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Pievienot</button>
            </form>
        </div>
    );
};

export default AddListing;
