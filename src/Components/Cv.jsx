import {
    Button,
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export default function Cv() {
    return (
        <div className="flex w-4/5 md:w-2/3 center m-auto my-2">
            <Timeline>
                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent>
                        <TimelineTime>
                            Septembre 2024 - Novembre 2025
                        </TimelineTime>
                        <TimelineTitle>
                            Chargée de documentation IT - VALFRANCE
                        </TimelineTitle>
                        <TimelineBody>
                            <strong>
                                Coopérative Agricole Valfrance, Senlis (60).
                            </strong>
                        </TimelineBody>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent>
                        <TimelineTime>Septembre 2023 - Aout 2024</TimelineTime>
                        <TimelineTitle>
                            Licence informatique du CNAM (Bac+3).
                        </TimelineTitle>
                        <TimelineBody className="text-sm text-justify">
                            <strong>
                                Licence générale informatique du CNAM
                            </strong>
                            , mention développement web de l'UFA Saint-Vincent,
                            Senlis (60). Réalisée en <strong>Alternance</strong>{" "}
                            au sein de l'agence web{" "}
                            <strong>MozArtsduWeb</strong>, Chantilly (60).
                            Réalisation de sites web Prestashop, Wordpress,
                            Laravel. Apprentissage du fonctionnement et des
                            process propres à l'entreprise.
                        </TimelineBody>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent>
                        <TimelineTime>Avril - Septembre 2023</TimelineTime>
                        <TimelineTitle>
                            Apprentissage en autodidacte.
                        </TimelineTitle>
                        <TimelineBody className="text-sm text-justify">
                            Apprentissage du langage Python ainsi que de ses
                            Frameworks Django et Flask. Approfondissement de mon
                            apprentissage de Docker et du framework PHP Symfony.
                        </TimelineBody>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent>
                        <TimelineTime>Octorbre 2022 - Avril 2023</TimelineTime>
                        <TimelineTitle>
                            Fromation "Développeur web et web mobile" (Bac +2).
                        </TimelineTitle>
                        <TimelineBody className="text-sm text-justify">
                            Ecole du numérique, La Manu, Compiègne (60). Cette
                            formation intensive m'a permis d'obtenir le{" "}
                            <strong>
                                titre professionnel d'Etat (RNCP 311114, Bac+2)
                            </strong>
                            . J'ai ainsi pu éprouver mon apprentissage
                            personnel, rectifier et consolider mes
                            connaissances.
                        </TimelineBody>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent>
                        <TimelineTime>
                            Septembre 2021 - Octobre 2022
                        </TimelineTime>
                        <TimelineTitle>
                            Apprentissage en autodidacte des bases du
                            développement web.
                        </TimelineTitle>
                        <TimelineBody className="text-sm text-justify">
                            Durant un an, via des sources en ligne telles que
                            <strong> Pierre Giraud </strong>et
                            <strong> Openclassroom</strong>, j'ai étudié et
                            expérimenté différents langages et logiciels. J'ai
                            obtenus de nombreux certificats grâce au cours
                            validés par OpenClassroom.
                        </TimelineBody>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}
