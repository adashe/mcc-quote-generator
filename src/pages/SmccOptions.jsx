import { Link } from "react-router-dom";

import Button from "../components/buttons/Button";
import PageNarrow from "../components/PageNarrow";

import { useSmcc } from "../contexts/SmccContext";
import TabNavigation from "../components/TabNavigation";
import LinkButton from "../components/buttons/LinkButton";

function SmccOptions() {
    const { options, handleChangeOptions } = useSmcc();

    return (
        <PageNarrow>
            <TabNavigation>
                <LinkButton route={"/smcc"}>&larr; KITS</LinkButton>
                <LinkButton route={"/kitSummary"}>SUBMIT &rarr;</LinkButton>
            </TabNavigation>
            <h2>SMCC OPTIONS</h2>
            <form>
                <div>
                    <label>
                        Size:
                        <select
                            name="size"
                            value={options.size || "..."}
                            onChange={handleChangeOptions}
                        >
                            <option disabled="disabled" value="...">
                                ...
                            </option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xlarge">Extra Large</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>
                        STC:
                        <select
                            name="stc"
                            value={options.stc || "..."}
                            onChange={handleChangeOptions}
                        >
                            <option disabled="disabled" value="...">
                                ...
                            </option>
                            <option value="stc32">32</option>
                            <option value="stc48">48</option>
                            <option value="stc64">64</option>
                            <option value="stc80">80</option>
                            <option value="stc96">96</option>
                            <option value="stc112">112</option>
                            <option value="stc128">128</option>
                        </select>
                    </label>
                </div>
            </form>
        </PageNarrow>
    );
}

export default SmccOptions;
