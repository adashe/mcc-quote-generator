import { BrowserRouter, Routes, Route } from "react-router-dom";

import GeneratorMenu from "./pages/GeneratorMenu";
import FormSMCC from "./pages/FormSMCC";
import FormEZMCC from "./pages/FormEZMCC";
import Form208VMCC from "./pages/Form208VMCC";
import Form460VMCC from "./pages/Form460VMCC";
import FormProjectInfo from "./pages/FormProjectInfo";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<GeneratorMenu />} />
                    <Route path="smcc" element={<FormSMCC />} />
                    <Route path="v208" element={<Form208VMCC />} />
                    <Route path="v460" element={<Form460VMCC />} />
                    <Route path="ezmcc" element={<FormEZMCC />} />
                    <Route path="projectInfo" element={<FormProjectInfo />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
