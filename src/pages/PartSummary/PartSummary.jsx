import BackButton from "../../components/buttons/BackButton";
import { CSVButton } from "../../components/CSVButton";
import PageWide from "../../components/PageWide";
import { useSmcc } from "../../contexts/SmccContext";
import { PartsListRow } from "./PartsListRow";
import styles from "./PartsListRow.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import TabNavigation from "../../components/TabNavigation";
import LinkButton from "../../components/buttons/LinkButton";

function PartSummary() {
    const { kitsData, optionsData, partsData, assembly, baseAssembly } =
        useSmcc();

    // Build a parts list from the assembly object with the parts numbers and their quantities
    let partsList = {};

    for (const k in assembly) {
        if (assembly[k] > 0) {
            const arr = kitsData.filter((kit) => kit.id === k);
            const kit = arr[0];
            kit.components.forEach(
                (component) =>
                    (partsList[component] =
                        partsList[component] + assembly[k] || assembly[k])
            );
        }
    }

    // Add parts from the baseAssembly object with the parts numbers and their quantities
    for (const k in baseAssembly) {
        if (baseAssembly[k] > 0) {
            const arr = optionsData.filter((kit) => kit.id === k);
            const kit = arr[0];
            kit.components.forEach(
                (component) =>
                    (partsList[component] =
                        partsList[component] + baseAssembly[k] ||
                        baseAssembly[k])
            );
        }
    }

    // Use the partsList object to filter the partsData array
    const selectedPartsArr = partsData.filter((part) => partsList[part.id] > 0);

    return (
        <PageWide>
            <TabNavigation>
                <LinkButton route={"/smcc"}>Edit Inputs</LinkButton>
                <LinkButton route={"/kitSummary"}>Kit Summary</LinkButton>
                <Button isActive={false}>Part Summary</Button>
                <CSVButton />
            </TabNavigation>
            <h2>PART SUMMARY</h2>
            <ul>
                <div className={`${styles.listItem} ${styles.listHeader}`}>
                    <div className={styles.qtyCol}>Qty</div>
                    <div className={styles.partNumCol}>Part Num</div>
                    <div className={styles.partDescCol}>Description</div>
                    <div>Manu</div>
                    <div>Price</div>
                    <div>Total</div>
                </div>
                {selectedPartsArr.map((part) => (
                    <PartsListRow
                        part={part}
                        partsList={partsList}
                        key={part.id}
                    />
                ))}
            </ul>
        </PageWide>
    );
}

export default PartSummary;
