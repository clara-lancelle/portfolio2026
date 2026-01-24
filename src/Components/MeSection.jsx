import MePng from "../assets/me.png";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export default function MeSection() {
    return (
        <div className="flex flex-row bg-gray-100">
            <div className="w-3/4 flex justify-end">
                <img src={MePng} alt="Clara Lancelle" />
            </div>
            <div className="flex flex-col gap-4 m-6">
                <h2 className="text-4xl my-2 font-bold tracking-tight text-gray-900 dark:text-white">
                    A propos de moi
                </h2>
                <h3 className="text-1xl font-bold tracking-tight  text-gray-900">
                    Je m'appelle
                    <span className="text-amber-500"> Clara Lancelle</span>,
                </h3>
                <div className="text-sm flex flex-col gap-4 w-3/4">
                    <p>
                        Je suis une développeuse web, freelance à Nantes (44).
                    </p>
                    <p>
                        {" "}
                        Je travail avec différentes technologies en fonction des
                        besoin d'un site web : React/Vite, PHP/Symphony,
                        Wordpress et Prestashop.
                    </p>
                    <p>
                        Je suis diplomée d'une{" "}
                        <strong>
                            Licence informatique, mention developpement web, du
                            CNAM
                        </strong>
                        (2024). J'ai travaillé pour une agence web durant 1 an
                        sur différents projets puis pour une coopérative
                        agricole durant une autre année. J'ai acquis de grandes
                        compétences en management de projet que je met au
                        service de mes clients.
                    </p>
                </div>

                <Button
                    as={Link}
                    to={"/cv"}
                    className="bg-amber-400 text-white w-80"
                >
                    Consulter mon CV en ligne <GrLinkNext className="ml-2" />
                </Button>
            </div>
        </div>
    );
}
