import { Card } from "flowbite-react";
import { FaCode, FaMobileAlt, FaServer, FaBolt } from "react-icons/fa";

const skillsData = [
    {
        title: "Front-end moderne",
        icon: <FaCode className="w-8 h-8 text-blue-500" />,
        technologies:
            "Vite/React · JavaScript · HTML · CSS (Tailwind/Flowbite)",
        description:
            "Interfaces rapides, accessibles et orientées UX, avec une attention particulière portée au feedback utilisateur et à la fluidité de navigation.",
    },
    {
        title: "Applications mobiles",
        icon: <FaMobileAlt className="w-8 h-8 text-green-500" />,
        technologies: "React Native · Android · Capacitor",
        description:
            "Développement d’applications mobiles cross-platform et Android, intuitives et performantes, avec une logique produit claire et centrée utilisateur.",
    },
    {
        title: "Back-end solide",
        icon: <FaServer className="w-8 h-8 text-purple-500" />,
        technologies: "PHP (Symfony/Laravel) · Python (Django/Flex)",
        description:
            "APIs robustes, sécurisées et maintenables, conçues pour évoluer facilement et s’intégrer à des architectures existantes.",
    },
    {
        title: "Performance & SEO",
        icon: <FaBolt className="w-8 h-8 text-yellow-500" />,
        technologies: "Optimisation · Bonnes pratiques web",
        description:
            "Temps de chargement optimisés, structure SEO-friendly et sites pensés pour générer du trafic et améliorer la conversion.",
    },
];

const Skills = () => {
    return (
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Compétences
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-12">
                Je développe des sites et applications web & mobiles
                performants, maintenables et pensés pour offrir une vraie valeur
                aux utilisateurs.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {skillsData.map((skill) => (
                    <Card
                        key={skill.title}
                        className="hover:scale-105 transition-transform duration-300 border-2 border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex items-center mb-4">
                            {skill.icon}
                            <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
                                {skill.title}
                            </h3>
                        </div>
                        <p className="font-medium text-primary-600 mb-2">
                            {skill.technologies}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            {skill.description}
                        </p>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Skills;
