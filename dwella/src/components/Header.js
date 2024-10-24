import React, { useContext, useEffect } from "react";
import { AuthContext } from '../AuthProvider';
import axios from 'axios';
import '../styles/Header.css';
import { CiLogout } from "react-icons/ci";
import { VscAccount, VscEdit } from "react-icons/vsc";

const icons = [
    <VscAccount />,
];

function Header() {
    const { isAuthenticated, setIsAuthenticated, login, logout } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated) {
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
        if (isAuthenticated) {
            logout();
        } else {
            window.location.href = '/login'
        }
    }


    return (
        <>
            <div className="AlignRow">
                <div className="alignRow">
                    <a className="nav-links" href="/">Sākums</a>
                    <a className="nav-links" href="/about">Par mums</a>
                    <a className="nav-links" href="/contacts">Kontakti</a>
                    <a className="nav-links" href="/services">Piedāvā savu pakalpojumu</a>
                </div>
                <div className="user-info">
                    <a className="nav-links" onClick={handleButtonClicked}>
                        {isAuthenticated ? (
                                <>
                                    Iziet <CiLogout />
                                </>
                        )
                            : "Pieslēgties"}
                    </a>
                    {isAuthenticated ? 
                        <a className= "nav-links" href="/profile">
                            Profils
                        </a>
                    : 
                        <div style={{display: "none"}} />}
                </div>
            </div>

        </>
    )
}

export default Header;