import { Link } from "react-router-dom";

import Button from "../components/Button";
import StandardPage from "../components/StandardPage";

function GeneratorMenu() {
    return (
        <StandardPage>
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

            <Link to="/projectInfo">
                <Button>Project Info</Button>
            </Link>
        </StandardPage>
    );
}

export default GeneratorMenu;
