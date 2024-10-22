import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const name = localStorage.getItem('name');
        if (userId && name) {
            setUser({ userId, name });
        }
    }, []);

    const isAuthenticated = () => {
        return localStorage.getItem('isAuthenticated') === 'true';
    };

    const login = (id, name, serviceType) => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userId', id);
        localStorage.setItem('name', name);
        localStorage.setItem('serviceType', serviceType);
        setUser({ userId: id, name, serviceType });
    };

    const logout = () => {
        localStorage.setItem('isAuthenticated', 'false');
        localStorage.removeItem('userId');
        localStorage.removeItem('name');
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: isAuthenticated(), login, logout, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};