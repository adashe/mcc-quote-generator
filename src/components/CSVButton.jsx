import Button from "./buttons/Button";
import { useSmcc } from "../contexts/SmccContext";

export function CSVButton() {
    const { kitsData, partsData, assembly, projectInfo } = useSmcc();

    const downloadCSV = () => {
        if (window.confirm("Are you sure you want to download this file?")) {
            let csvString =
                "ID, Main ID, Item ID, Component ID, Qty Per Assembly, Save Changes";

            let partsList = {};

            const quoteID = projectInfo.p21Num;

            for (const k in assembly) {
                if (assembly[k] > 0) {
                    const arr = kitsData.filter((kit) => kit.id === k);
                    const kit = arr[0];
                    kit.components.forEach(
                        (component) =>
                            (partsList[component] =
                                partsList[component] + assembly[k] ||
                                assembly[k])
                    );
                }
            }

            const selectedPartsArr = partsData.filter(
                (part) => partsList[part.id] > 0
            );

            selectedPartsArr.map(
                (part, i) =>
                    (csvString += `\n${i + 1},1,${quoteID},${part.id},${
                        partsList[part.id]
                    },Y`)
            );

            // Create a Blob from the CSV string
            const blob = new Blob([csvString], { type: "text/csv" });

            // Generate a download link and initiate the download
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "download.csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    };

    return (
        <Button className="active" onClick={downloadCSV}>
            EXPORT CSV
        </Button>
    );
}
