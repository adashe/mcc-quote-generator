import { useSmcc } from "../../contexts/SmccContext";
import styles from "./KitSummaryPartsListItem.module.css";

import KitSummaryPartsListItem from "./KitSummaryPartsListItem";

function KitSummaryPartsList({ parts, kitQuantity }) {
    const { partsData } = useSmcc();

    // Build a list of parts in each kit from the component list with the part numbers and their quantities
    let kitParts = {};

    parts.forEach((part) => {
        const keysArr = Object.keys(part);
        const partID = keysArr[0];

        const qtyArr = Object.values(part);
        const qty = qtyArr[0];

        kitParts[partID] = kitParts[partID] + qty || qty;
    });

    // Use the kitBom object to filter the partsData array
    const selectedPartsArr = partsData.filter((part) => kitParts[part.id] > 0);

    return (
        <ul>
            <li className={styles.listItem}>
                <div className={styles.qtyCol}>QTY</div>
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
