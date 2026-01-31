import MePng from "../../assets/me.png";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export default function MeSection() {
    return (
        <section
            className="flex flex-col lg:flex-row bg-gray-100"
            aria-labelledby="me-title"
        >
            {/* Image */}
            <div className="w-full lg:w-3/4 hidden lg:flex  justify-end">
                <img
                    src={MePng}
                    className="h-fit w-4/5"
                    alt="Portrait de Clara Lancelle, développeuse web et mobile freelance"
                />
            </div>

            {/* Texte */}
            <div id="me" className="flex flex-col gap-4 m-6">
                <h1
                    id="me-title"
                    className="text-4xl my-2 font-bold tracking-tight text-gray-900"
                >
                    À propos de moi
                </h1>

                <h2 className="text-2xl font-semibold text-gray-900">
                    Je m'appelle{" "}
                    <span className="text-amber-500">Clara Lancelle</span>
                </h2>

                <div className="text-sm flex flex-col gap-4 text-justify md:w-3/4">
                    <p>
                        Je suis développeuse web et mobile freelance basée à
                        Nantes (44). Je crée des sites web performants et des
                        applications mobiles intuitives, adaptées aux besoins
                        des entreprises et des utilisateurs.
                    </p>

                    <p>
                        Mes technologies principales sont :{" "}
                        <strong>React/Vite</strong>,{" "}
                        <strong>React Native</strong> pour les applications
                        mobiles, <strong>PHP/Symfony</strong>,{" "}
                        <strong>WordPress</strong> et{" "}
                        <strong>Prestashop</strong>. Je développe des solutions
                        web et mobiles <strong>sur mesure</strong>, rapides et
                        faciles à maintenir.
                    </p>

                    <p>
                        Diplômée d'une{" "}
                        <strong>
                            Licence informatique, mention développement web,
                            CNAM (2024)
                        </strong>
                        , j'ai travaillé pendant 1 an dans une agence web sur
                        divers projets et 1 an pour une coopérative agricole.
                        Cette expérience m'a permis de développer des
                        compétences solides en{" "}
                        <strong>gestion de projet</strong> et{" "}
                        <strong>accompagnement client</strong>, que je mets au
                        service de mes clients.
                    </p>

                    <p>
                        Je suis passionnée par le développement d’interfaces
                        modernes, l’optimisation des performances et la création
                        d’applications mobiles réactives et ergonomiques.
                    </p>
                </div>

                <Button
                    as={Link}
                    to={"/cv"}
                    className="bg-amber-400 text-white w-80 my-6 self-center md:self-start"
                >
                    Consulter mon CV en ligne <GrLinkNext className="ml-2" />
                </Button>
            </div>
        </section>
    );
}
