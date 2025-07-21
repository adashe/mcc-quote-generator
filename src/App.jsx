import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormSMCC from "./pages/FormSMCC";
import Form208VMCC from "./pages/Form208VMCC";
import Form460VMCC from "./pages/Form460VMCC";
import FormEZMCC from "./pages/FormEZMCC";
import GeneratorMenu from "./pages/GeneratorMenu";

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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
