import { BrowserRouter, Routes, Route } from "react-router-dom";

import GeneratorMenu from "./pages/GeneratorMenu";

import { SmccProvider } from "./contexts/SmccContext";
import SmccAssembly from "./pages/SmccAssembly";
import SmccOptions from "./pages/SmccOptions";

import ProjectInfo from "./pages/ProjectInfo";
import KitSummary from "./pages/KitSummary/KitSummary";
import PartSummary from "./pages/PartSummary/PartSummary";
import Totals from "./pages/Totals";

function App() {
    return (
        <>
            <SmccProvider>
                <BrowserRouter basename="/mcc-quote-generator/">
                    <Routes>
                        <Route index element={<SmccAssembly />} />

                        <Route path="smcc" element={<SmccAssembly />} />
                        <Route path="smccOptions" element={<SmccOptions />} />
                        <Route path="projectInfo" element={<ProjectInfo />} />
                        <Route path="kitSummary" element={<KitSummary />} />
                        <Route path="partSummary" element={<PartSummary />} />
                        <Route path="totals" element={<Totals />} />
                    </Routes>
                </BrowserRouter>
            </SmccProvider>
        </>
    );
}

export default App;
