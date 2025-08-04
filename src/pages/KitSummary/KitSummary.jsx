import { useSmcc } from "../../contexts/SmccContext";
import Button from "../../components/buttons/Button";
import LinkButton from "../../components/buttons/LinkButton";
import { CSVButton } from "../../components/buttons/CSVButton";

import PageWide from "../../components/PageWide";
import KitSummaryRow from "./KitSummaryRow";

import TabNavigation from "../../components/TabNavigation";

function KitSummary() {
    const { kitsData, optionsData, assembly, baseAssembly } = useSmcc();

    // Filter kitsData to include only kits selected by user
    const selectedKitsArr = kitsData.filter((kit) => assembly[kit.id] > 0);

    // Filter optionsData to include only options selected by user
    const selectedOptionsArr = optionsData.filter(
        (kit) => baseAssembly[kit.id] > 0
    );

    return (
        <PageWide>
            <TabNavigation>
                <LinkButton route={"/smcc"}>Edit Inputs</LinkButton>
                <Button isActive={false}>Kit Summary</Button>
                <LinkButton route={"/partSummary"}>Part Summary</LinkButton>
                <LinkButton route={"/totals"}>Totals</LinkButton>
                <CSVButton />
            </TabNavigation>
            <h2>KIT SUMMARY</h2>

            {selectedOptionsArr.map((kit, i) => (
                <KitSummaryRow kit={kit} key={i} />
            ))}

            {selectedKitsArr.map((kit, i) => (
                <KitSummaryRow kit={kit} key={i} />
            ))}
        </PageWide>
    );
}

export default KitSummary;
