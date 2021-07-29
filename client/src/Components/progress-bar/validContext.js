import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [valid, setValid] = useState();

    return (
        <UserContext.Provider
        value={{
            valid,
            setValid,
        }}
        >
        {children}
        </UserContext.Provider>
    );
};