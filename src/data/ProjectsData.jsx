export const projects = [
    {
        id: 1,
        title: "Popcorn",
        slug: "popcorn",
        url: "https://popcorn.lncl.fr",
        date: "2025-11-01",
        type: ["React", "Vite", "PWA"],
        techno: ["React/Vite"],
        image: "/src/assets/projects/popcorn.png",
        description: {
            intro: "Application web moderne développée en React et Vite pour découvrir les dernières sorties cinéma et de rechercher des films via l’API IMDB.",
            highlight:
                "Installable directement depuis le navigateur comme une application mobile, accessible sur tous les écrans.",
            details:
                "Les utilisateurs peuvent consulter les informations détaillées des films, gérer leurs favoris, noter et commenter les contenus, avec un stockage local des données.",
        },

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
        date: "2025-01-01",
        type: ["PWA", "Web"],
        techno: ["React/Vite"],
        image: "/src/assets/projects/pass.png",
        description: {
            intro: "Application web développée en React et Vite permettant de générer facilement des mots de passe sécurisés en toute sécurité.",
            highlight:
                "Installable depuis le navigateur comme une application mobile, l’outil est rapide, léger et utilisable même hors connexion.",
            details:
                "Génération et copie instantanée de mots de passe directement sur l’appareil de l’utilisateur, sans stockage ni transmission de données.",
        },

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
        description: { details: "Projet mobile à venir." },
    },
    {
        id: 4,
        title: "Projet Symfony",
        date: "2022-01-01",
        techno: ["PHP Symfony"],
        image: "/src/assets/projects/coming.png",
        description: { details: "Projet backend / API." },
    },
];
