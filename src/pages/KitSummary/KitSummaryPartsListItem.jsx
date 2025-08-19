import styles from "./KitSummaryPartsListItem.module.css";

function KitSummaryPartsListItem({ part, quantity, kitQuantity }) {
    return (
        <li className={styles.listItem}>
            <div className={styles.qtyCol}>{quantity * kitQuantity}</div>
            <div className={styles.partNumCol}>{part?.id || part}</div>
            <div className={styles.partDescCol}>
                {part?.description || "Item not found in parts database"}
            </div>
            <div>{part?.manufacturer}</div>
            <div className={styles.currencyCol}>
                {part?.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                }) ||
                    (0.0).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}
            </div>
            <div className={styles.currencyCol}>
                {(part?.price * quantity * kitQuantity).toLocaleString(
                    "en-US",
                    {
                        style: "currency",
                        currency: "USD",
                    }
                ) ||
                    (0.0).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}
            </div>
        </li>
    );
}

export default KitSummaryPartsListItem;
