import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

const getUserFromLocal = () => {
    return JSON.parse(localStorage.getItem("user")) ?? null;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getUserFromLocal);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const isAuthenticated = !!user;

    const login = async (email, password) => {
        try {
            setLoading(true);
            setError(null);
            //fetch api login
            const mockUser = {
                id: Date.now(),
                name: "Aniket",
                email: email,
                age: 15,
                gender: "M",
                mobile: 9876543210
            }
            setUser(mockUser);
            localStorage.setItem("user", JSON.stringify(mockUser));
        } catch (error) {
            setError("Login failed: " + error.message);
            throw new Error("Login failed: " + error)
        } finally {
            setLoading(false);
        }
    }

    const register = async (userData) => {
        try {
            setLoading(true);
            setError(null);
            //fetch api login
            const mockUser = {
                id: Date.now(),
                ...userData
            }
            delete mockUser.password;
            setUser(mockUser);
            localStorage.setItem("user", JSON.stringify(mockUser));
        } catch (error) {
            setError("Registration failed: " + error.message);
            throw new Error("Registration failed: " + error)
        } finally {
            setLoading(false);
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, loading, error }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
