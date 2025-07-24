import styles from "./KitSummaryPartsListItem.module.css";

function KitSummaryPartsListItem({ component, quantity, kitQuantity }) {
    return (
        <li className={styles.listItem}>
            <div className={styles.qtyCol}>{quantity * kitQuantity}</div>
            <div className={styles.partNumCol}>
                {component?.id || component}
            </div>
            <div className={styles.partDescCol}>
                {component?.description || "Item not found in parts database"}
            </div>
            <div>{component?.manufacturer}</div>
            <div>${component?.price.toFixed(2) || 0.0}</div>
            <div>
                ${(component?.price * quantity * kitQuantity).toFixed(2) || 0.0}
            </div>
        </li>
    );
}

export default KitSummaryPartsListItem;
