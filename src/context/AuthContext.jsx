import { createContext, useContext, useEffect, useState } from "react";
import  { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(sessionStorage.getItem('accessToken'));
    const [role, setRole] = useState(null);
    const [user, setUser] = useState(null); 

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setRole(decodedToken.role);
                setUser({ id: decodedToken.id, username: decodedToken.username });
            } catch (error) {
                console.error("Invalid token:", error);
                setRole(null);
                setUser(null);
            }
        } else {
            setRole(null);
            setUser(null);
        }
    }, [token]);
    
    const login = (token) => {
        sessionStorage.setItem('accessToken', token);
        setToken(token);
        const decodedToken = jwtDecode(token);
        setRole(decodedToken.role);
        setUser({ id: decodedToken.id, username: decodedToken.username });
    }
    const logout = () => {  
        sessionStorage.removeItem('accessToken');
        setToken(null);
        setRole(null);
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{role, token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);