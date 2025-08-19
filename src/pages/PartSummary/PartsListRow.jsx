import styles from "./PartsListRow.module.css";

export function PartsListRow({ part, partsList }) {
    return (
        <li className={styles.listItem}>
            <div className={styles.qtyCol}>{partsList[part.id]}</div>
            <div className={styles.partNumCol}>{part.id}</div>
            <div className={styles.partDescCol}>{part.description}</div>
            <div>{part.manufacturer}</div>
            <div className={styles.currencyCol}>
                {part.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}
            </div>
            <div className={styles.currencyCol}>
                {(part.price * partsList[part.id]).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}
            </div>
        </li>
    );
}
