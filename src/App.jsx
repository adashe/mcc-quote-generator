import { BrowserRouter, Routes, Route } from "react-router-dom";

import GeneratorMenu from "./pages/GeneratorMenu";

import { SmccProvider } from "./contexts/SmccContext";
import SmccAssembly from "./pages/SmccAssembly";
import SmccOptions from "./pages/SmccOptions";

import FormEZMCC from "./pages/FormEZMCC";
import Form208VMCC from "./pages/Form208VMCC";
import Form460VMCC from "./pages/Form460VMCC";

import ProjectInfo from "./pages/ProjectInfo";
import KitSummary from "./pages/KitSummary/KitSummary";
import PartSummary from "./pages/PartSummary/PartSummary";

function App() {
    return (
        <>
            <SmccProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<GeneratorMenu />} />

                        <Route path="smcc" element={<SmccAssembly />} />
                        <Route path="smccOptions" element={<SmccOptions />} />

                        <Route path="v208" element={<Form208VMCC />} />
                        <Route path="v460" element={<Form460VMCC />} />
                        <Route path="ezmcc" element={<FormEZMCC />} />
                        <Route path="projectInfo" element={<ProjectInfo />} />
                        <Route path="kitSummary" element={<KitSummary />} />
                        <Route path="partSummary" element={<PartSummary />} />
                    </Routes>
                </BrowserRouter>
            </SmccProvider>
        </>
    );
}

export default App;
