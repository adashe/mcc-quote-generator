import { Link } from "react-router-dom";

import styles from "./GeneratorMenu.module.css";
import Button from "../components/Button";
import { Header } from "../components/Header";

function GeneratorMenu() {
    return (
        <div className={styles.page}>
            <Header>Quote Generator</Header>

            <Link to="/smcc">
                <Button>SMCC</Button>
            </Link>

            <Link to="/v208">
                <Button>208V MCC</Button>
            </Link>

            <Link to="/v460">
                <Button>460V MCC</Button>
            </Link>

            <Link to="/ezmcc">
                <Button>EZMCC</Button>
            </Link>
        </div>
    );
}

export default GeneratorMenu;
