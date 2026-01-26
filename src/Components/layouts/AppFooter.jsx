import { Link } from "react-router-dom";
import {
    Footer,
    FooterCopyright,
    FooterDivider,
    FooterLinkGroup,
    FooterTitle,
} from "flowbite-react";

export default function AppFooter({ onCookiesClick }) {
    return (
        <Footer container className="border-gray-200 bg-gray-50 mt-2">
            <div className="w-full">
                <FooterDivider />
                <FooterCopyright
                    className="justify-self-center"
                    to="#"
                    by="Lancelle Clara"
                    year={new Date().getFullYear()}
                />
            </div>
        </Footer>
    );
}
