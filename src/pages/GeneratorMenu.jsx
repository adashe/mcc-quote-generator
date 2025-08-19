import PageNarrow from "../components/PageNarrow";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";

function GeneratorMenu() {
    return (
        <PageNarrow>
            <Link to="/smcc">
                <Button>SMCC</Button>
            </Link>

            <Link to="/ezmcc">
                <Button>EZMCC</Button>
            </Link>

            <Link to="/v208">
                <Button>208V MCC</Button>
            </Link>

            <Link to="/v460">
                <Button>460V MCC</Button>
            </Link>
        </PageNarrow>
    );
}

export default GeneratorMenu;
