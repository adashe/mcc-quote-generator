import { useSmcc } from "../../contexts/SmccContext";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

import PageWide from "../../components/PageWide";
import KitSummaryRow from "./KitSummaryRow";
import BackButton from "../../components/BackButton";

function KitSummary() {
    const { kitsData, assembly } = useSmcc();

    const selectedKitsArr = kitsData.filter((kit) => assembly[kit.id] > 0);

    return (
        <PageWide>
            <BackButton />
            <Link to="/partSummary">
                <Button>Part Summary</Button>
            </Link>
            {selectedKitsArr.map((kit, i) => (
                <KitSummaryRow kit={kit} key={i} />
            ))}
        </PageWide>
    );
}

export default KitSummary;
