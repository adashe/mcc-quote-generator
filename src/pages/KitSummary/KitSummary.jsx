import { useSmcc } from "../../contexts/SmccContext";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import LinkButton from "../../components/buttons/LinkButton";

import PageWide from "../../components/PageWide";
import KitSummaryRow from "./KitSummaryRow";
import BackButton from "../../components/buttons/BackButton";
import { CSVButton } from "../../components/CSVButton";
import TabNavigation from "../../components/TabNavigation";

function KitSummary() {
    const { kitsData, assembly } = useSmcc();

    const selectedKitsArr = kitsData.filter((kit) => assembly[kit.id] > 0);

    return (
        <PageWide>
            <TabNavigation>
                <LinkButton route={"/smcc"}>Edit Inputs</LinkButton>
                <Button isActive={false}>Kit Summary</Button>
                <LinkButton route={"/partSummary"}>Part Summary</LinkButton>
                <CSVButton />
            </TabNavigation>

            {selectedKitsArr.map((kit, i) => (
                <KitSummaryRow kit={kit} key={i} />
            ))}
        </PageWide>
    );
}

export default KitSummary;
