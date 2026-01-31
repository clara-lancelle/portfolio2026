import { List, ListItem } from "flowbite-react";
import { BsEnvelope, BsLinkedin } from "react-icons/bs";

export default function Contact() {
    return (
        <section
            id="contact"
            className="max-w-4xl mx-auto p-6 mb-10 mt-5 space-y-6"
            aria-labelledby="contact-title"
        >
            <h2
                id="contact-title"
                className="text-4xl mb-6 font-bold tracking-tight text-gray-900 text-center"
            >
                Contactez-moi
            </h2>

            <p className="text-gray-700 text-center mb-10">
                Vous souhaitez discuter d’un projet web ou mobile, ou simplement
                me poser une question ? Je suis développeuse web et mobile
                freelance et je serai ravie de vous répondre.
            </p>

            <List className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/clara-lancelle-159634238/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900"
                    aria-label="LinkedIn Clara Lancelle"
                >
                    <ListItem icon={BsLinkedin}>
                        Via LinkedIn : Clara Lancelle
                    </ListItem>
                </a>

                {/* Email */}
                <a
                    href="mailto:contact@lncl.fr"
                    className="text-gray-900"
                    aria-label="Envoyer un email à Clara Lancelle"
                >
                    <ListItem icon={BsEnvelope}>
                        Par email : contact@lncl.fr
                    </ListItem>
                </a>
            </List>
        </section>
    );
}
