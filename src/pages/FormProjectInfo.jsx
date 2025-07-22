import BackButton from "../components/BackButton";
import PageNarrow from "../components/PageNarrow";

function FormProjectInfo() {
    return (
        <PageNarrow>
            <form>
                <div>
                    <label>
                        P21 Number:
                        <input type="text" name="p21Num" />
                    </label>
                </div>

                <div>
                    <label>
                        Project Name:
                        <input type="text" name="projectName" />
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
                        <input type="text" name="contact" />
                    </label>
                </div>

                <div>
                    <label>
                        Engineer:
                        <input type="text" name="engineer" />
                    </label>
                </div>
            </form>
            <BackButton />
        </PageNarrow>
    );
}

export default FormProjectInfo;
