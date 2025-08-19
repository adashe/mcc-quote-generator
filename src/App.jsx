import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SmccProvider } from "./contexts/SmccContext";

import AssemblyForm from "./pages/AssemblyForm/AssemblyForm";
import SmccOptions from "./pages/SmccOptions";
import ProjectInfo from "./pages/ProjectInfo";
import KitSummary from "./pages/KitSummary/KitSummary";
import PartSummary from "./pages/PartSummary/PartSummary";
import Totals from "./pages/Totals";

function App() {
    return (
        <>
            <SmccProvider>
                <BrowserRouter basename="/smcc-quote-generator/">
                    <Routes>
                        <Route index element={<AssemblyForm />} />

                        <Route path="assemblyForm" element={<AssemblyForm />} />
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
