import BackButton from "../../components/BackButton";
import PageWide from "../../components/PageWide";
import { useSmcc } from "../../contexts/SmccContext";
import { PartsListRow } from "./PartsListRow";
import styles from "./PartsListRow.module.css";

function PartSummary() {
    const { kitsData, partsData, assembly } = useSmcc();

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

    // Use the partsList object to filter the partsData array
    const selectedPartsArr = partsData.filter((part) => partsList[part.id] > 0);

    return (
        <PageWide>
            <BackButton />
            <ul>
                <div className={`${styles.listItem} ${styles.listHeader}`}>
                    <div>QTY</div>
                    <div className={styles.partNumCol}>PART NUM</div>
                    <div className={styles.partDescCol}>DESCRIPTION</div>
                    <div>MANU</div>
                    <div>PRICE</div>
                    <div>TOTAL</div>
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
