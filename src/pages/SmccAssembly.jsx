import { useState } from "react";
import PageNarrow from "../components/PageNarrow.jsx";

import { KitsForm } from "../components/KitsForm.jsx";
import { KitRow } from "../components/KitRow.jsx";

import { useSmcc } from "../contexts/SmccContext.jsx";
import styles from "./AssemblyForm.module.css";
import LinkButton from "../components/buttons/LinkButton.jsx";
import TabNavigation from "../components/TabNavigation.jsx";

function SmccAssembly() {
    const { kitsData, assembly, handleChangeAssembly, calcKitPrice } =
        useSmcc();

    const [filter, setFilter] = useState("");

    function handleUpdateFilter(e) {
        setFilter(e.target.value);
    }

    const filteredData = kitsData.filter((kit) =>
        kit.description.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <PageNarrow>
            <TabNavigation>
                <LinkButton route={"/"}>&larr; Configurators</LinkButton>
                <LinkButton route={"/smccOptions"}>Options &rarr;</LinkButton>
            </TabNavigation>
            <h2>SMCC KITS</h2>
            <form>
                <input
                    className={styles.searchBar}
                    type="text"
                    onChange={handleUpdateFilter}
                    value={filter}
                    placeholder="Search"
                />
            </form>
            <KitsForm>
                {filteredData.map((kit) => (
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
