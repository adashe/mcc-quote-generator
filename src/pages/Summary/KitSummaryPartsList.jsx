import { useSmcc } from "../../contexts/SmccContext";

import KitSummaryPartsListItem from "./KitSummaryPartsListItem";

function KitSummaryPartsList({ components, kitQuantity }) {
    const { partsData } = useSmcc();

    /* Build a list of parts in each kit from the component list with the part numbers and their quantities */
    let kitParts = {};

    components.forEach((component) => {
        kitParts[component] = kitParts[component] + 1 || 1;
    });

    // Use the kitBom object to filter the partsData array
    const selectedPartsArr = partsData.filter((part) => kitParts[part.id] > 0);

    return (
        <ul>
            {selectedPartsArr.map((component, i) => (
                <KitSummaryPartsListItem component={component} />
            ))}
        </ul>
    );
}

export default KitSummaryPartsList;
