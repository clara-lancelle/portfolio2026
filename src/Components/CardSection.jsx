import creationImg from "../assets/crea.png";
import maintenanceImg from "../assets/maintenance.png";
import referencementImg from "../assets/ref.png";

import { Card } from "flowbite-react";

export default function CardSection() {
    return (
        <div className="flex flex-row flex-wrap my-4 justify-evenly">
            <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
                <img
                    class="rounded-base w-52 md:w-60 mx-auto"
                    src={creationImg}
                    alt="Création de votre site web"
                />

                <h5 class="mt-4 md:mt-6 mb-2 text-1xl md:text-2xl font-semibold tracking-tight text-heading">
                    Conception et création de votre site clé en mains
                </h5>

                <p class=" text-body text-sm text-justify">
                    Je vous accompagne de la conception à la mise en ligne de
                    votre site web, avec une solution adaptée à vos objectifs.
                    Que vous ayez besoin d'un site sur mesure, moderne et
                    performant, ou d’un site WordPress clé en mains, fiable et
                    facile à administrer, je vous propose une solution efficace
                    pour valoriser votre activité.
                </p>
            </div>
            <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
                <img
                    class="rounded-base w-52 md:w-60 mx-auto"
                    src={referencementImg}
                    alt="Référencement de votre site web"
                />

                <h5 class="mt-4 md:mt-6 mb-2 text-1xl md:text-2xl font-semibold tracking-tight text-heading">
                    Référencement de votre site afin de toucher votre public
                </h5>

                <p class=" text-body text-sm">
                    Votre site sera conçu pour attirer naturellement vos futurs
                    clients sur les moteurs de recherche. Le référencement n’est
                    pas un détail : il transforme votre site en un vrai levier
                    pour développer votre activité.
                </p>
            </div>
            <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
                <img
                    class="rounded-base w-52 md:w-60 mx-auto"
                    src={maintenanceImg}
                    alt="Maintenance de votre site web"
                />

                <h5 class="mt-4 md:mt-6 mb-2 text-1xl md:text-2xl font-semibold tracking-tight text-heading">
                    Maintenance de votre site web existant
                </h5>

                <p class=" text-body text-sm">
                    Je vous accompagne pour assurer la sécurité et la fiabilité
                    de votre site, qu’il soit déjà en ligne ou que nous le
                    construisions ensemble. Grâce à un suivi régulier des mises
                    à jour et des protections nécessaires, votre site reste
                    stable, protégé contre les attaques et performant.
                </p>
            </div>
        </div>
    );
}
