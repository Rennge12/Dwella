import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../ViewListings.css';

const ViewListings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        // Fetch all listings from the backend API
        const fetchListings = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/listings');
                setListings(response.data);
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };

        fetchListings();
    }, []);

    return (
        <div>
            <h2>Available Listings</h2>
            <ul>
                {listings.map((listing) => (
                    <li key={listing.id}>
                        <h3>{listing.title}</h3>
                        <p>{listing.description}</p>
                        <p>Price: {listing.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewListings;
