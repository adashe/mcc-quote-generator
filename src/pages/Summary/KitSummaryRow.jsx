import styles from "./KitSummaryRow.module.css";
import { useSmcc } from "../../contexts/SmccContext";
import KitSummaryPartsList from "./KitSummaryPartsList";

function KitSummaryRow({ kit }) {
    const { assembly, calcKitPrice } = useSmcc();

    return (
        <div>
            <div className={styles.headerRow}>
                <div className={styles.kitDesc}>{kit.description}</div>
                <div>Qty: {assembly[kit.id]}</div>
                <div>Kit Price: ${calcKitPrice(kit.id).toFixed(2)}</div>
                <div>
                    Total: $
                    {(calcKitPrice(kit.id) * assembly[kit.id]).toFixed(2)}
                </div>
            </div>
            <div>
                <KitSummaryPartsList
                    components={kit.components}
                    kitQuantity={assembly[kit.id]}
                />
            </div>
        </div>
    );
}

export default KitSummaryRow;
