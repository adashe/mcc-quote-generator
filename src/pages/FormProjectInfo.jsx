import BackButton from "../components/BackButton";
import PageNarrow from "../components/PageNarrow";
import { useSmcc } from "../contexts/SmccContext";

function FormProjectInfo() {
    const { projectInfo, handleChangeProjectInfo } = useSmcc();

    return (
        <PageNarrow>
            <form>
                <div>
                    <label>
                        P21 Number:
                        <input
                            type="text"
                            name="p21Num"
                            value={projectInfo.p21Num || ""}
                            onChange={handleChangeProjectInfo}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Project Name:
                        <input
                            type="text"
                            name="projectName"
                            value={projectInfo.projectName || ""}
                            onChange={handleChangeProjectInfo}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Company:
                        <input type="text" name="company" />
                    </label>
                </div>

                <div>
                    <label>
                        Contact:
                        <input
                            type="text"
                            name="contact"
                            value={projectInfo.contact || ""}
                            onChange={handleChangeProjectInfo}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Engineer:
                        <input
                            type="text"
                            name="engineer"
                            value={projectInfo.engineer || ""}
                            onChange={handleChangeProjectInfo}
                        />
                    </label>
                </div>
            </form>
            <BackButton />
        </PageNarrow>
    );
}

export default FormProjectInfo;
