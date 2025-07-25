import styles from "./KitSummaryRow.module.css";
import { useSmcc } from "../../contexts/SmccContext";
import KitSummaryPartsList from "./KitSummaryPartsList";
import { useState } from "react";

function KitSummaryRow({ kit }) {
    const { assembly, baseAssembly, calcKitPrice } = useSmcc();
    const [isOpen, setIsOpen] = useState(false);

    const quantity = assembly[kit.id] || baseAssembly[kit.id];

    function handleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className={styles.headerRow} onClick={handleOpen}>
                <div className={styles.kitDesc}>{kit.description}</div>
                <div className={`${styles.kitCol} ${styles.kitQty}`}>
                    Qty: {quantity}
                </div>

                <div className={styles.kitCol}>
                    Price: ${calcKitPrice(kit.id).toFixed(2)}
                </div>
                <div className={styles.kitCol}>
                    Total: ${(calcKitPrice(kit.id) * quantity).toFixed(2)}
                </div>

                {isOpen ? (
                    <span className={styles.materialSymbolsOutlined}>
                        keyboard_arrow_up
                    </span>
                ) : (
                    <span className={styles.materialSymbolsOutlined}>
                        keyboard_arrow_down
                    </span>
                )}
            </div>

            <div>
                {isOpen ? (
                    <div>
                        <KitSummaryPartsList
                            components={kit.components}
                            kitQuantity={quantity}
                        />
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default KitSummaryRow;
