import TabNavigation from "../components/TabNavigation";
import Button from "../components/buttons/Button";
import LinkButton from "../components/buttons/LinkButton";
import PageWide from "../components/PageWide";
import { useSmcc } from "../contexts/SmccContext";
import styles from "./Totals.module.css";
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
    // Calculate total price of baseAssembly object
    let spareShippedLoosePrice = calcKitPrice("spareShippedLoose") || 0;

    // for (const kitID in baseAssembly) {
    //     const quantity = baseAssembly[kitID];
    //     const kitPrice = calcKitPrice(kitID);
    //     baseAssemblyPrice += kitPrice * quantity;
    // }

    // Retrieve STC cost
    const selectedStc = partsData.filter((part) => part.id === options.stc)[0];

    // Retrieve labor "part" based on selected size or options input
    const selectedSizeLabor = partsData.filter(
        (part) => part.id === `labor-${options.size}`
    )[0];
    const updatedLabor = Number(options.labor) || selectedSizeLabor?.price || 0;

    // Update baseAssembly price if labor has been edited in options form
    if (
        options.labor &&
        selectedSizeLabor.price &&
        options.labor != selectedSizeLabor.price
    ) {
        baseAssemblyPrice -= selectedSizeLabor.price | 0;
        baseAssemblyPrice += Number(options.labor);
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
                <LinkButton route={"/smcc"}>Edit Inputs</LinkButton>
                <LinkButton route={"/kitSummary"}>Kit Summary</LinkButton>

                <LinkButton route={"/partSummary"}>Part Summary</LinkButton>
                <Button isActive={false}>Totals</Button>

                <XlsxButton />
            </TabNavigation>
            <h2>Totals</h2>
            <ul className={styles.totalsUl}>
                <li>SMCC Price: ${assemblyPrice?.toFixed(2)}</li>
                <li>Base Assembly Price: ${baseAssemblyPrice?.toFixed(2)}</li>
                <ul>
                    Includes:
                    <li>
                        {options.stc || "STC"}: $
                        {selectedStc?.price.toFixed(2) || "0.00"}
                    </li>
                    <li>Labor: ${updatedLabor.toFixed(2) || "0.00"}</li>
                    <li>
                        Install Labor: ${install?.price.toFixed(2) || "0.00"}
                    </li>
                    <li>Freight: ${freight?.price.toFixed(2) || "0.00"}</li>
                    <li>
                        Consumables: ${totalConsumables?.toFixed(2) || "0.00"}
                    </li>
                    <li>
                        Spare and Shipped Loose: $
                        {spareShippedLoosePrice.toFixed(2) || "0.00"}
                    </li>
                    <li>
                        Base Components: $
                        {(
                            baseAssemblyPrice -
                                selectedStc?.price -
                                updatedLabor -
                                install?.price -
                                freight?.price -
                                totalConsumables || 0 - spareShippedLoosePrice
                        ).toFixed(2) || "0.00"}
                    </li>
                </ul>

                <li>
                    Total: ${(assemblyPrice + baseAssemblyPrice).toFixed(2)}
                </li>
            </ul>
        </PageWide>
    );
}

export default Totals;
