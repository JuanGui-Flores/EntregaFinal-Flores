import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MyContextProvider({ children }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <MyContext.Provider value={{ count, increment, decrement }}>
            {children}
        </MyContext.Provider>
    );
}

export function useMyContext() {
    return useContext(MyContext);
}
