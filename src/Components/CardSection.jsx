import creationImg from "../assets/crea.png";
import maintenanceImg from "../assets/maintenance.png";
import referencementImg from "../assets/ref.png";

import { Card } from "flowbite-react";

export default function CardSection() {
    return (
        <div className="flex my-4 justify-evenly">
            <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={creationImg}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Conception et création de votre site clé en mains
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={referencementImg}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Penser le référencement de votre site afin de toucher votre
                    public
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={maintenanceImg}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Maintenir votre site web existant ou celui que nous créerons
                    ensemble
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
            </Card>
        </div>
    );
}
