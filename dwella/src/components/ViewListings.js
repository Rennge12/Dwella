import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ViewListings.css';

const ViewListings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        // Fetch all listings from the backend API
        const fetchListings = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/listings');
                console.log(response.data);
                setListings(response.data);
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };

        fetchListings();
    }, []);

    return (
        <div>
            <h2>Sludinājumi</h2>
            <div className="sort">
            {listings.map((listing) => (
                <div className="listing-card">
                    <li key={listing.id}>
                        <h className="listing-homeType">{listing.homeType}</h>
                        <p>{listing.location}</p>
                        <p className="listing-description">{listing.description}</p>
                        <img className="" src={listing.imageURL}></img>
                        <p className="listing-price">Price: EUR{listing.price}</p>
                    </li>
                </div>
            ))}
            </div>
        </div>
    );
};

export default ViewListings;
