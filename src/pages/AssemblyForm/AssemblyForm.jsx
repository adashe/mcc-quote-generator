import { useState } from "react";
import { useSmcc } from "../../contexts/SmccContext.jsx";
import styles from "./AssemblyForm.module.css";

import PageNarrow from "../../components/PageNarrow.jsx";
import TabNavigation from "../../components/TabNavigation.jsx";
import LinkButton from "../../components/buttons/LinkButton.jsx";
import RestartButton from "../../components/buttons/RestartButton.jsx";

import { KitsForm } from "./KitsForm.jsx";
import { KitRow } from "./KitRow.jsx";

function AssemblyForm() {
    const { kitsData } = useSmcc();

    const [filter, setFilter] = useState("");

    function handleUpdateFilter(e) {
        e.preventDefault();
        setFilter(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    const filteredData = kitsData.filter((kit) =>
        kit.description.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <PageNarrow>
            <TabNavigation>
                <RestartButton />
                <LinkButton route={"/optionsForm"}>Options &rarr;</LinkButton>
            </TabNavigation>
            <h2>SMCC KITS</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.searchBar}
                    name="search"
                    type="text"
                    onChange={handleUpdateFilter}
                    value={filter}
                    placeholder="Search"
                />
            </form>
            <KitsForm>
                {filteredData.map((kit) => (
                    <KitRow kit={kit} key={kit.id} />
                ))}
            </KitsForm>
        </PageNarrow>
    );
}

export default AssemblyForm;
