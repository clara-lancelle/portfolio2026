import creationImg from "../../assets/cards/crea.png";
import maintenanceImg from "../../assets/cards/maintenance.png";
import referencementImg from "../../assets/cards/ref.png";
import mobileImg from "../../assets/cards/appli.png";

import { Card } from "flowbite-react";

export default function Cards() {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 justify-items-center">
            {/* Card 1 - Création */}
            <Card className="bg-neutral-primary-soft p-0 border rounded-base shadow-xs w-full max-w-xs">
                <img
                    className="rounded-base w-40 md:w-48 mx-auto"
                    src={creationImg}
                    alt="Création de site web et applications mobiles sur mesure"
                />

                <h3 className="mt-4 mb-2 text-lg md:text-xl font-semibold tracking-tight text-heading">
                    Conception et création de votre site web
                </h3>

                <p className="text-sm text-body text-justify">
                    Je vous accompagne de la conception à la mise en ligne de
                    votre site web. Que vous ayez besoin d'un site moderne et
                    performant, ou d’un site WordPress clé en mains, je propose
                    des
                    <strong>
                        {" "}
                        solutions sur mesure, fiables et faciles à administrer
                    </strong>
                    .
                </p>
            </Card>

            {/* Card 2 - Référencement */}
            <Card className="bg-neutral-primary-soft p-4 border rounded-base shadow-xs w-full max-w-xs">
                <img
                    className="rounded-base w-40 md:w-48 mx-auto"
                    src={referencementImg}
                    alt="Optimisation SEO pour sites web et applications mobiles"
                />

                <h3 className="mt-4 mb-2 text-lg md:text-xl font-semibold tracking-tight text-heading">
                    Référencement pour toucher votre public
                </h3>

                <p className="text-sm text-body text-justify">
                    Votre site web ou application mobile sera conçu pour attirer
                    naturellement vos futurs clients via les moteurs de
                    recherche. Le référencement n’est pas un détail :{" "}
                    <strong>
                        il transforme votre projet en un levier efficace
                    </strong>
                    .
                </p>
            </Card>

            {/* Card 3 - Maintenance */}
            <Card className="bg-neutral-primary-soft p-4 border rounded-base shadow-xs w-full max-w-xs">
                <img
                    className="rounded-base w-40 md:w-48 mx-auto"
                    src={maintenanceImg}
                    alt="Maintenance et sécurité de sites web et applications mobiles"
                />

                <h3 className="mt-4 mb-2 text-lg md:text-xl font-semibold tracking-tight text-heading">
                    Maintenance et sécurité
                </h3>

                <p className="text-sm text-body text-justify">
                    Je vous accompagne pour assurer{" "}
                    <strong>la sécurité et la fiabilité </strong>
                    de votre site web ou application mobile, qu’il soit déjà en
                    ligne ou en cours de développement. Suivi régulier et
                    protections nécessaires pour rester stable et performant.
                </p>
            </Card>

            {/* Card 4 - Applications mobiles */}
            <Card className="bg-neutral-primary-soft p-4 border rounded-base shadow-xs w-full max-w-xs">
                <img
                    className="rounded-base w-40 md:w-48 mx-auto"
                    src={mobileImg}
                    alt="Développement d'applications mobiles React Native et Android"
                />

                <h3 className="mt-4 mb-2 text-lg md:text-xl font-semibold tracking-tight text-heading">
                    Développement d'applications mobiles
                </h3>

                <p className="text-sm text-body text-justify">
                    Je conçois des
                    <strong> applications mobiles React Native</strong> pour iOS
                    et Android, intuitives et performantes, avec une expérience
                    utilisateur fluide et réactive.
                </p>
            </Card>
        </div>
    );
}
