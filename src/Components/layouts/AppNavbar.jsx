import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

export default function AppNavbar() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand as={Link} href="https://porfolio.lncl.fr">
                <img
                    src="/icon.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Lancelle Clara - image du portfolio"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Lancelle Clara
                </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#" active>
                    Profil
                </NavbarLink>
                <NavbarLink href="#">Compétences</NavbarLink>
                <NavbarLink href="#">Portfolio</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
