import { Route, Routes } from "react-router-dom";
import AppNavbar from "./Components/layouts/AppNavbar";
import Homepage from "./Components/Homepage";
import Cv from "./Components/Cv";

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
        </div>
    );
}

export default App;
