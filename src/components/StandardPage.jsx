import styles from "./StandardPage.module.css";
import { Header } from "../components/Header";

function StandardPage({ children }) {
    return (
        <div className={styles.page}>
            <Header>MCC Quote Generator</Header>
            {children}
        </div>
    );
}

export default StandardPage;
