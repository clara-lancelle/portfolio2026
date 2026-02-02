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
        <Navbar
            fluid
            rounded
            className="sticky top-0 w-full bg-white opacity-100 z-10"
        >
            <Link
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
            >
                <img
                    src="/icon.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Lancelle Clara - image du portfolio"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-amber-500">
                    Lancelle Clara
                </span>
            </Link>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/#me">Profil</NavbarLink>
                <NavbarLink href="/#skills">Compétences</NavbarLink>
                <NavbarLink href="/#projects">Projets</NavbarLink>
                <NavbarLink href="/cv">CV</NavbarLink>
                <NavbarLink href="/#contact">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
