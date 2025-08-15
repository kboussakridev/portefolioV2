<!--MesProjets.vue-->

<script setup>
import { ref } from 'vue'
import ProjectSingle from './ProjectSingle.vue';

const projects = ref([
    {
        name: "Site web de vente aux enchères",
        image: [
            "VE-adresse.png",
            "VE-articles.png",
            "VE-connexion.png",
            "VE-inscription.png",
            "VE-liste des enchères.png",
            "VE-mon profil.png",
            "VE-mon profil2.png",

        ],
        tags: ["HTML", "Tailwind", "Java", "Spring Boot"],
        description: "Plateforme de vente aux enchères et paiement sécurisé.",
        tasks: [
            "Conception de l'interface utilisateur responsive",
            "Implémentation du système d'enchères en temps réel",
            "Intégration du module de paiement sécurisé"
        ],
        link: "#"
    },
    {
        name: "Organisateur de sorties interne à l'école ENI ",
        image: [
            "Sortir.com-afficher une sortie.png",
            "Sortir.com-annuler une sortie.png",
            "Sortir.com-connexion.png",
            "Sortir.com-créer une sortie.png",
            "Sortir.com-détails profil.png",
            "Sortir.com-flash message.png",
            "Sortir.com-modifier une sortie.png",
            "Sortir.com-mon profil.png",
            "Sortir.com-recherche de sortie.png",

        ], tags: ["Symfony", "PHP", "HTML", "Tailwind"],
        description: "Application web pour organiser et rejoindre des sorties entre amis avec système de réservation.",
        tasks: [
            "Développement du back-end avec Symfony",
            "Système de Base de donées ",
        ],
        link: "#"
    },
    {
        name: "Boutique en ligne de vêtements traditionnels marocains",
        image: [
            "ECO-espace membre.png",
            "ECO-connexion.png",
            "ECO-inscription.png",
            "ECO-mes commandes.png",
            "ECO-mon panier.png",
            "ECO-produit.png",
            "ECO-produit2.png",
            "ECO-stripe.png",
            "ECO-achat validé.png",
        ], tags: ["Vue.js", "PHP", "HTML", "CSS"],
        description: "Site e-commerce spécialisé dans les vêtements traditionnels marocains avec catalogue complet et paiement sécurisé avec API Stripe.",
        tasks: [
            "Développement du front-end avec Twig",
            "Intégration du système de gestion de stock",
            "Optimisation pour le référencement naturel"
        ],
        link: "#"
    },
    {
        name: "Blog avec WordPress",
        image: [
            "WP-dashboard.png",
            "WP-acceuil.png",
            "WP-blog.png",
            "WP-blog2.png",
        ], tags: ["WordPress"],
        description: "Petit blog sur la ville de Troyes.",
        tasks: [
            "Customisation du thème WordPress",
            "Optimisation des performances",
            "Configuration des plugins SEO"
        ],
        link: "#"
    }
]);

const filteredProjects = ref(projects.value);
const activeFilter = ref('Tous');

const filterProjects = (tag = 'Tous') => {
    activeFilter.value = tag;
    if (tag === 'Tous') {
        filteredProjects.value = projects.value;
    } else {
        filteredProjects.value = projects.value.filter(project =>
            project.tags.includes(tag)
        );
    }
};
</script>

<template>
    <section id="projects">
        <div class="projects-container">
            <h2 class="section-title">Mes <span class="highlight">réalisations</span></h2>
            <p class="section-subtitle">Découvrez mes projets phares</p>

            <div class="filter-buttons">
                <button v-for="tag in ['Tous', ...new Set(projects.flatMap(p => p.tags))]" :key="tag"
                    @click="filterProjects(tag)" :class="{ active: activeFilter === tag }">
                    {{ tag }}
                </button>
            </div>

            <div class="projects-grid">
                <ProjectSingle v-for="(project, index) in filteredProjects" :key="project.name" :project="project"
                    :reverse="index % 2 === 0 ? false : true" />
            </div>
        </div>
    </section>
</template>

<style scoped>
#projects {
    width: 100%;
    min-height: 100vh;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    position: relative;
    overflow: hidden;
}

.projects-container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #2c3e50;
}

.highlight {
    color: #3498db;
}

.section-subtitle {
    font-size: 1.2rem;
    color: #7f8c8d;
    text-align: center;
    margin-bottom: 3rem;
}

.filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: center;
    margin-bottom: 3rem;
}

.filter-buttons button {
    padding: 0.6rem 1.2rem;
    border-radius: 30px;
    border: 2px solid #3498db;
    background: white;
    color: #3498db;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-buttons button:hover {
    background: #e3f2fd;
    transform: translateY(-2px);
}

.filter-buttons button.active {
    background: #3498db;
    color: white;
    box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
}

.projects-grid {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

@media screen and (max-width: 992px) {
    .section-title {
        font-size: 2.5rem;
    }
}

@media screen and (max-width: 768px) {
    #projects {
        padding: 3rem 1rem;
    }

    .filter-buttons {
        gap: 0.5rem;
        margin-bottom: 2rem;
    }

    .filter-buttons button {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }
}

@media screen and (max-width: 576px) {
    .section-title {
        font-size: 2rem;
    }

    .section-subtitle {
        font-size: 1rem;
    }

    .projects-grid {
        gap: 3rem;
    }
}
</style>
