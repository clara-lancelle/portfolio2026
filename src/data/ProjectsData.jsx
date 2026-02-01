export const projects = [
    {
        id: 1,
        title: "Popcorn",
        slug: "popcorn",
        url: "https://popcorn.lncl.fr",
        date: "2024-06-01",
        type: ["React", "Vite", "PWA"],
        techno: ["React/Vite"],
        image: "/src/assets/projects/popcorn.png",
        description:
            "Application web moderne développée en React et Vite, Popcorn permet de découvrir les dernières sorties cinéma et de rechercher n’importe quel film via l’API IMDB. L’application peut être installée directement depuis le navigateur comme une application mobile, fonctionne rapidement et sans compte, et offre une expérience fluide sur ordinateur comme sur mobile. Les utilisateurs peuvent consulter les informations détaillées des films (casting, notes, synopsis), ajouter des favoris, noter et commenter les films, avec des données stockées localement sur leur appareil.",
        features: [
            "Recherche de films",
            "Favoris, notes et commentaires",
            "Données stockées en localStorage",
            "Interface responsive",
        ],
    },
    {
        id: 2,
        title: "Password Generator",
        slug: "password-generator",
        url: "https://password-generator.lncl.fr",
        date: "2024-03-01",
        type: ["PWA", "Web"],
        techno: ["React/Vite"],
        image: "/src/assets/projects/pass.png",
        description:
            "Application web progressive (Téléchargeable depuis le navigateur) permettant de générer des mots de passe sécurisés, pensé pour la performance, la simplicité d’utilisation et la sécurité.",
        features: [
            "Génération de mots de passe sécurisés",
            "Interface simple et rapide",
            "Utilisation hors ligne (PWA)",
        ],
    },

    /* Projets vides à compléter */
    {
        id: 3,
        title: "Projet React Native",
        date: "2023-01-01",
        techno: ["React Native"],
        image: "/src/assets/projects/coming.png",
        description: "Projet mobile à venir.",
    },
    {
        id: 4,
        title: "Projet Symfony",
        date: "2022-01-01",
        techno: ["PHP Symfony"],
        image: "/src/assets/projects/coming.png",
        description: "Projet backend / API.",
    },
];
