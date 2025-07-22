import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../components/Button";
import BackButton from "../components/BackButton";
import PageNarrow from "../components/PageNarrow.jsx";

import { KitsForm } from "../components/KitsForm.jsx";
import { KitRow } from "../components/KitRow.jsx";

import kitsData from "../data/smccKits";
import partsData from "../data/smccParts";

function SmccAssembly() {
    // Build initial assembly object based on kits in kitsData
    const initialAssembly = kitsData.reduce((prev, curr) => {
        prev[curr.id] = 0;
        return prev;
    }, {});

    const [assembly, setAssembly] = useState(initialAssembly);

    function handleChangeAssembly(e) {
        const { name, value } = e.target;

        setAssembly((previous) => ({
            ...previous,
            [name]: Number(value),
        }));
    }

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

    return (
        <PageNarrow>
            <h1>SMCC</h1>
            <KitsForm>
                {kitsData.map((kit) => (
                    <KitRow
                        assembly={assembly}
                        kit={kit}
                        handleChangeAssembly={handleChangeAssembly}
                        calcKitPrice={calcKitPrice}
                        key={kit.id}
                    />
                ))}
            </KitsForm>
            <Link to="/smcc/options">
                <Button>SMCC Options</Button>
            </Link>
            <BackButton />
        </PageNarrow>
    );
}

export default SmccAssembly;
