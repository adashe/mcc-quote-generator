import { useSmcc } from "../../contexts/SmccContext";

import PageWide from "../../components/PageWide";
import KitSummaryRow from "./KitSummaryRow";
import BackButton from "../../components/BackButton";

function KitSummary() {
    const { kitsData, assembly } = useSmcc();

    const selectedKitsArr = kitsData.filter((kit) => assembly[kit.id] > 0);

    return (
        <PageWide>
            {selectedKitsArr.map((kit, i) => (
                <KitSummaryRow kit={kit} key={i} />
            ))}
            <BackButton />
        </PageWide>
    );
}

export default KitSummary;
