import styles from "./KitsForm.module.css";

export function KitRow({ assembly, kit, handleChangeAssembly, calcKitPrice }) {
    // Select the entire value when user clicks in the input box (for easier editing)
    function handleSelect(e) {
        e.target.select();
    }

    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <label className={styles.kitRowLabel}>
                    <input
                        className={styles.kitRowInput}
                        type="number"
                        name={kit.id}
                        value={assembly[kit.id]}
                        onFocus={handleSelect}
                        onChange={handleChangeAssembly}
                        min={0}
                    />
                    {kit.description}
                </label>
            </div>
            <div className={styles.column}>
                ${calcKitPrice(kit.id).toFixed(2)}
            </div>
        </div>
    );
}
