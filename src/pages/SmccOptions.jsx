import { Link } from "react-router-dom";

import Button from "../components/buttons/Button";
import BackButton from "../components/buttons/BackButton";
import PageNarrow from "../components/PageNarrow";

import { useSmcc } from "../contexts/SmccContext";

function SmccOptions() {
    const { options, handleChangeOptions } = useSmcc();

    return (
        <PageNarrow>
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
                            <option value="32">32</option>
                            <option value="48">48</option>
                            <option value="64">64</option>
                            <option value="80">80</option>
                            <option value="96">96</option>
                            <option value="112">112</option>
                            <option value="128">128</option>
                        </select>
                    </label>
                </div>
            </form>
            <Link to="/projectInfo">
                <Button>Project Info</Button>
            </Link>
            <BackButton />
        </PageNarrow>
    );
}

export default SmccOptions;
