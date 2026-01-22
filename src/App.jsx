import AppNavbar from "./Components/layouts/AppNavbar";
import Banner from "./Components/Banner";
import CardSection from "./Components/CardSection";
import MeSection from "./Components/MeSection";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <AppNavbar />
            <Banner />
            <CardSection />
            <MeSection />
        </div>
    );
}

export default App;
