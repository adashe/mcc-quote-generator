import { Link } from "react-router-dom";

import Button from "../components/Button";
import BackButton from "../components/BackButton";
import PageNarrow from "../components/PageNarrow.jsx";

import { KitsForm } from "../components/KitsForm.jsx";
import { KitRow } from "../components/KitRow.jsx";

import { useSmcc } from "../contexts/SmccContext.jsx";

function SmccAssembly() {
    const { kitsData, assembly, handleChangeAssembly, calcKitPrice } =
        useSmcc();

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
