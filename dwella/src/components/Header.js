import React, { useContext, useEffect } from "react";
import { AuthContext } from '../AuthProvider';
import axios from 'axios';
import styles from '../styles/Header.css';

function Header() {
    const { isAuthenticated, setIsAuthenticated, login, logout} = useContext(AuthContext);

    useEffect(() => {
        if(isAuthenticated){
            axios.get('http://localhost:8000/api/user')
            .then(response => {
                setIsAuthenticated(response.data.name);
            })
            .catch(error => {
                console.error('Error fetching user', error);
            });
        }
    }, [isAuthenticated, setIsAuthenticated]);

    const handleButtonClicked = (event) => {
        event.preventDefault();
        if(isAuthenticated){
            logout();
        }else{
            window.location.href = '/login'
        }
    }


    return (
        <>
            <div>
                <a href="/">Sākums</a>
                <a href="/about">Par mums</a>
                <a href="/contacts">Kontakti</a>
                <a href="/services">Piedāvā savu pakalpojumu</a>
                <a className="abutton" onClick={handleButtonClicked}>
                    {isAuthenticated ? "iziet" : "pieslegties"}
                </a>
            </div>

        </>
    )
}

export default Header;