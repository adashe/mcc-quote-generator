import { createContext, useState, useContext } from "react";

const SmccContext = createContext();

import kitsData from "../data/smccKits";
import partsData from "../data/smccParts";

// Build initial assembly object based on kits in kitsData
const initialAssembly = kitsData.reduce((prev, curr) => {
    prev[curr.id] = 0;
    return prev;
}, {});

// Calculate the price of each individual kit, for use in total price calculation and kits view
function calcKitPrice(kitID) {
    const kArr = kitsData.filter((kit) => kit.id === kitID);
    const kit = kArr[0];
    let sum = 0;

    // Cycle through kit components array, use ID to look up in partsData, and sum the price
    kit.components.forEach((component) => {
        const pArr = partsData.filter((part) => part.id === component);
        const part = pArr[0];
        sum += part?.price || 0;
    });
    return sum;
}

function SmccProvider({ children }) {
    const [assembly, setAssembly] = useState(initialAssembly);

    function handleChangeAssembly(e) {
        const { name, value } = e.target;

        setAssembly((previous) => ({
            ...previous,
            [name]: Number(value),
        }));
    }

    return (
        <SmccContext.Provider
            value={{ assembly, handleChangeAssembly, calcKitPrice }}
        >
            {children}
        </SmccContext.Provider>
    );
}

function useSmcc() {
    const context = useContext(SmccContext);
    if (context === undefined)
        throw new Error("SmccContext was used outside of the SmccProvider");
    return context;
}

export { SmccProvider, useSmcc };
