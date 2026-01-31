import Banner from "../sections/Banner";
import Cards from "../sections/Cards";
import Contact from "../sections/Contact";
import MeSection from "../sections/MeSection";
import Skills from "../sections/Skills";

export default function Homepage() {
    return (
        <div>
            <Banner />
            <Cards />
            <MeSection />
            <Skills />
            <Contact />
        </div>
    );
}
