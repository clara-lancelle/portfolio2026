import { List, ListItem } from "flowbite-react";
import { BsEnvelope, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <section className="max-w-4xl mx-auto p-6 mb-10 mt-5 space-y-6">
            <h2 className="text-4xl mb-20 font-bold mx-auto tracking-tight text-gray-900 justify-self-center">
                Contactez-moi
            </h2>
            <List className="flex gap-6 justify-evenly align-middle">
                <Link
                    className="text-gray-900 content-center"
                    to={`https://www.linkedin.com/in/clara-lancelle-159634238/`}
                    target="_blank"
                >
                    <ListItem icon={BsLinkedin}> Via Linkedin</ListItem>
                </Link>
                <Link className="text-gray-900" to={"mailto:contact@lncl.fr"}>
                    <ListItem icon={BsEnvelope}>Par email</ListItem>
                </Link>
            </List>
        </section>
    );
}
