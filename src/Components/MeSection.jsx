import MePng from "../assets/me.png";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export default function MeSection() {
    return (
        <div className="flex flex-row bg-gray-100">
            <div className="w-1/2">
                <img src={MePng} alt="Clara Lancelle" />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-4xl my-2 font-bold tracking-tight text-gray-900 dark:text-white">
                    A propos de moi
                </h2>
                <h3 className="text-1xl font-bold tracking-tight  text-gray-900">
                    Je m'appelle
                    <span className="text-amber-500"> Clara Lancelle</span>,
                </h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed amet, voluptate tempore repellat explicabo inventore
                    sequi quae saepe eum iusto velit, doloremque vitae,
                    consequatur enim ex soluta? Exercitationem, cum eveniet?
                </p>
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
