import React, { createContext, useState } from "react";

export const BackgroundColorContext = createContext();

export const BackgroundColorProvider = ({ children }) => {
    const [color, setColor] = useState("blue");

    return (
        <BackgroundColorContext.Provider value={{ color, setColor }}>
            {children}
        </BackgroundColorContext.Provider>
    );
};
