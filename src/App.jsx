import { Route, Routes } from "react-router-dom";
import AppNavbar from "./Components/layouts/AppNavbar";
import Homepage from "./Components/layouts/Homepage";
import Cv from "./Components/Cv";
import AppFooter from "./Components/layouts/AppFooter";
import { Analytics } from "@vercel/analytics/react";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <AppNavbar />
            <div className="flex-1 content-center">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cv" element={<Cv />} />
                </Routes>
            </div>
            <AppFooter />
            <Analytics />
        </div>
    );
}

export default App;
