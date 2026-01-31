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
        <Navbar fluid rounded className="fixed top-0 w-full">
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
                <NavbarLink href="/#me" active>
                    Profil
                </NavbarLink>
                <NavbarLink href="/#skills">Compétences</NavbarLink>
                <NavbarLink href="/cv">Portfolio</NavbarLink>
                <NavbarLink href="/#contact">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
