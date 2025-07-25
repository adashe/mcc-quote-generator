import TabNavigation from "../components/TabNavigation";
import Button from "../components/buttons/Button";
import LinkButton from "../components/buttons/LinkButton";
import { CSVButton } from "../components/CSVButton";
import PageWide from "../components/PageWide";
import { useSmcc } from "../contexts/SmccContext";
import styles from "./Totals.module.css";

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

    // Retrieve STC cost
    const selectedStcArr = partsData.filter((part) => part.id === options.stc);
    const selectedStc = selectedStcArr[0];

    // Retrieve labor "part" based on selected size
    const selectedLaborArr = partsData.filter(
        (part) => part.id === `labor-${options.size}`
    );
    const selectedSize = selectedLaborArr[0];

    // Retrieve install "part"
    const installArr = partsData.filter((part) => part.id === "labor-install");
    const install = installArr[0];

    return (
        <PageWide>
            <TabNavigation>
                <LinkButton route={"/smcc"}>Edit Inputs</LinkButton>
                <LinkButton route={"/kitSummary"}>Kit Summary</LinkButton>

                <LinkButton route={"/partSummary"}>Part Summary</LinkButton>
                <Button isActive={false}>Totals</Button>

                <CSVButton />
            </TabNavigation>
            <h2>Totals</h2>
            <ul className={styles.totalsUl}>
                <li>Assembly Price: ${assemblyPrice?.toFixed(2)}</li>
                <li>Base Assembly Price: ${baseAssemblyPrice?.toFixed(2)}</li>
                <ul>
                    Includes:
                    <li>
                        {options.stc}: ${selectedStc?.price.toFixed(2)}
                    </li>
                    <li>Labor: ${selectedSize?.price.toFixed(2)}</li>
                    <li>Install: ${install?.price.toFixed(2)}</li>
                </ul>

                <li>
                    Total: ${(assemblyPrice + baseAssemblyPrice).toFixed(2)}
                </li>
            </ul>
        </PageWide>
    );
}

export default Totals;
