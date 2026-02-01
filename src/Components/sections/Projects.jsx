import { useState } from "react";
import { projects } from "../../data/ProjectsData";
import { Card, Badge, Select } from "flowbite-react";

export default function Projects() {
    const [techFilter, setTechFilter] = useState("all");
    const [sortOrder, setSortOrder] = useState("desc");

    const filteredProjects = projects
        .filter((project) =>
            techFilter === "all" ? true : project.techno.includes(techFilter),
        )
        .sort((a, b) =>
            sortOrder === "desc"
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date),
        );

    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Projets</h2>

            <p className="text-gray-600 max-w-2xl mb-10">
                Une sélection de projets web et mobiles que j’ai conçus et
                développés, mettant en œuvre différentes technologies et
                approches produit.
            </p>

            {/* Filtres */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Select onChange={(e) => setTechFilter(e.target.value)}>
                    <option value="all">Toutes les technos</option>
                    <option value="React/Vite">React / Vite</option>
                    <option value="React Native">React Native</option>
                    <option value="PHP Symfony">PHP / Symfony</option>
                    <option value="Python Django">Python / Django</option>
                    <option value="WordPress">WordPress</option>
                </Select>

                <Select onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="desc">Du plus récent au plus ancien</option>
                    <option value="asc">Du plus ancien au plus récent</option>
                </Select>
            </div>

            {/* Liste des projets */}
            <div className="grid gap-6 sm:grid-cols-2">
                {filteredProjects.map((project) => (
                    <Card
                        key={project.id}
                        className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="relative overflow-hidden rounded-md max-h-64">
                            <img
                                src={project.image}
                                alt={`Projet ${project.title}`}
                                className="object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Overlay hover */}
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium"
                                >
                                    Voir le projet →
                                </a>
                            )}
                        </div>

                        <div className="mt-4 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>

                            <p className="text-sm text-gray-500 mb-2">
                                {new Date(project.date).toLocaleDateString(
                                    "fr-FR",
                                    {
                                        year: "numeric",
                                        month: "long",
                                    },
                                )}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.techno.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="text-sm text-gray-600 flex-grow">
                                {project.description}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
