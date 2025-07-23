import { useSmcc } from "../../contexts/SmccContext";
import styles from "./KitSummaryPartsListItem.module.css";

import KitSummaryPartsListItem from "./KitSummaryPartsListItem";

function KitSummaryPartsList({ components, kitQuantity }) {
    const { partsData } = useSmcc();

    /* Build a list of parts in each kit from the component list with the part numbers and their quantities */
    let kitParts = {};

    components.forEach((component) => {
        kitParts[component] = kitParts[component] + 1 || 1;
    });

    // Use the kitBom object to filter the partsData array
    const selectedPartsArr = partsData.filter((part) => kitParts[part.id] > 0);

    return (
        <ul>
            <li className={styles.listItem}>
                <div>QTY</div>
                <div className={styles.partNumCol}>PART NUM</div>
                <div className={styles.partDescCol}>DESCRIPTION</div>
                <div>MANU</div>
                <div>PRICE</div>
                <div>TOTAL</div>
            </li>
            {selectedPartsArr.map((component, i) => (
                <KitSummaryPartsListItem
                    component={component}
                    quantity={kitParts[component.id]}
                    kitQuantity={kitQuantity}
                    key={i}
                />
            ))}
        </ul>
    );
}

export default KitSummaryPartsList;
