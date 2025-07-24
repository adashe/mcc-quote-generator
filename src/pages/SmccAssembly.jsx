import { Link } from "react-router-dom";

import Button from "../components/buttons/Button.jsx";
import PageNarrow from "../components/PageNarrow.jsx";

import { KitsForm } from "../components/KitsForm.jsx";
import { KitRow } from "../components/KitRow.jsx";

import { useSmcc } from "../contexts/SmccContext.jsx";
import LinkButton from "../components/buttons/LinkButton.jsx";
import TabNavigation from "../components/TabNavigation.jsx";

function SmccAssembly() {
    const { kitsData, assembly, handleChangeAssembly, calcKitPrice } =
        useSmcc();

    return (
        <PageNarrow>
            <TabNavigation>
                <LinkButton route={"/"}>&larr; Configurators</LinkButton>
                <LinkButton route={"/smccOptions"}>Options &rarr;</LinkButton>
            </TabNavigation>
            <h2>SMCC KITS</h2>
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
        </PageNarrow>
    );
}

export default SmccAssembly;
