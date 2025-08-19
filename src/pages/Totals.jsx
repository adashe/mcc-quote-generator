import { useSmcc } from "../contexts/SmccContext";
import styles from "./Totals.module.css";

import PageWide from "../components/PageWide";
import TabNavigation from "../components/TabNavigation";
import Button from "../components/buttons/Button";
import LinkButton from "../components/buttons/LinkButton";
import { XlsxButton } from "../components/buttons/XlsxButton";

function Totals() {
    const { partsData, assembly, options, baseAssembly, calcKitPrice } =
        useSmcc();

    // Calculate total price of assembly object
    let assemblyPrice = 0;

    for (const kitID in assembly) {
        const quantity = assembly[kitID];
        const kitPrice = calcKitPrice(kitID);
        assemblyPrice += kitPrice * quantity;
    }

    // Calculate total price of baseAssembly object
    let baseAssemblyPrice = 0;

    for (const kitID in baseAssembly) {
        const quantity = baseAssembly[kitID];
        const kitPrice = calcKitPrice(kitID);
        baseAssemblyPrice += kitPrice * quantity;
    }

    // Calculate total price of spare and shipped loose kit
    const spareShippedLoosePrice = calcKitPrice("spareShippedLoose") || 0;

    // Calculate total price of all non variable parts
    let nonVariablePrice = calcKitPrice(`${options.size}`) || 0;

    // Retrieve STC cost
    const selectedStc = partsData.filter((part) => part.id === options.stc)[0];

    // Retrieve labor "part" based on selected size or options input
    const selectedSizeLabor = partsData.filter(
        (part) => part.id === `labor-${options.size}`
    )[0];
    const updatedLabor = Number(options.labor) || selectedSizeLabor?.price || 0;

    // Update baseAssembly price and non variable kit price if labor has been edited in options form
    if (
        options.labor &&
        selectedSizeLabor.price &&
        options.labor != selectedSizeLabor.price
    ) {
        baseAssemblyPrice -= selectedSizeLabor.price | 0;
        baseAssemblyPrice += Number(options.labor);

        nonVariablePrice -= selectedSizeLabor.price | 0;
        nonVariablePrice += Number(options.labor);
    }

    // Retrieve install "part"
    const install = partsData.filter((part) => part.id === "labor-install")[0];

    // Retrieve freight "part"
    const freight = partsData.filter((part) => part.id === "freight")[0];

    // Retrieve and sum consumables
    const consumablesMisc = partsData.filter(
        (part) => part.id === "consumables-misc"
    )[0];

    const consumablesSize = partsData.filter(
        (part) => part.id === `consumables-${options.size}`
    )[0];

    const totalConsumables =
        consumablesMisc?.price + consumablesSize?.price || 0;

    return (
        <PageWide>
            <TabNavigation>
                <LinkButton route={"/assemblyForm"}>Edit Inputs</LinkButton>
                <LinkButton route={"/kitSummary"}>Kit Summary</LinkButton>

                <LinkButton route={"/partSummary"}>Part Summary</LinkButton>
                <Button isActive={false}>Totals</Button>

                <XlsxButton />
            </TabNavigation>
            <h2>TOTALS</h2>
            <ul className={styles.totalsUl}>
                <li>
                    <div className={styles.totalsLabel}>
                        Variable Parts (SMCC)
                    </div>
                    <div>
                        {assemblyPrice?.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </div>
                </li>
                <li>
                    <div className={styles.totalsLabel}>
                        {options.stc || "STC"}
                    </div>
                    <div>
                        {selectedStc?.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        }) ||
                            (0).toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                    </div>
                </li>
                <li>
                    <div className={styles.totalsLabel}>
                        Spare and Shipped Loose
                    </div>
                    <div>
                        {spareShippedLoosePrice.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        }) ||
                            (0).toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                    </div>
                </li>
                <li>
                    <div className={styles.totalsLabel}>Non Variable Parts</div>
                    <div>
                        {nonVariablePrice.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        }) ||
                            (0).toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                    </div>
                </li>

                <ul className={styles.totalsUl}>
                    <li>
                        <div className={styles.totalsLabel}>Labor</div>
                        <div>
                            {updatedLabor.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            }) ||
                                (0).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                        </div>
                    </li>
                    <li>
                        <div className={styles.totalsLabel}>Install Labor</div>
                        <div>
                            {install?.price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            }) ||
                                (0).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                        </div>
                    </li>
                    <li>
                        <div className={styles.totalsLabel}>Freight</div>
                        <div>
                            {freight?.price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            }) ||
                                (0).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                        </div>
                    </li>
                    <li>
                        <div className={styles.totalsLabel}>Consumables</div>
                        <div>
                            {totalConsumables?.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            }) ||
                                (0).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                        </div>
                    </li>

                    <li>
                        <div className={styles.totalsLabel}>
                            Non Variable Components
                        </div>
                        <div>
                            {(
                                nonVariablePrice -
                                    updatedLabor -
                                    install?.price -
                                    freight?.price -
                                    totalConsumables || 0
                            ).toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            }) ||
                                (0).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                        </div>
                    </li>
                </ul>
                <li className={styles.total}>
                    <span>TOTAL PRICE</span>
                    <span>
                        {(assemblyPrice + baseAssemblyPrice).toLocaleString(
                            "en-US",
                            {
                                style: "currency",
                                currency: "USD",
                            }
                        )}
                    </span>
                </li>
            </ul>
        </PageWide>
    );
}

export default Totals;
