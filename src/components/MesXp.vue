<script setup>
import { ref, watchEffect } from 'vue';

const activeBloc = ref(0);
const experiences = ref([
    {
        id: 0,
        company: "Arundo.tech",
        title: "Développeur Web (Stage)",
        date: "Avril - Juin 2024",
        points: [
            "Conception d'un logiciel de dématérialisation de documents PDF volumineux",
            "Structuration des données avec YAML, JSON Schema et automatisation avec Python/Pandas",
            "Utilisation de GitLab pour la gestion de projet et collaboration en équipe"
        ],
        logo: "arundo.jpg"
    },
    {
        id: 1,
        company: "Easy Presta",
        title: "Développeur Web",
        date: "Juillet 2023",
        points: [
            "Création d'un site vitrine sous WordPress avec personnalisation du thème",
            "Intégration de contenus optimisés pour le SEO et configuration des plugins essentiels",
            "Formation du client à la prise en main du site et à sa gestion autonome"
        ],
        logo: "easy-presta.jpg"
    },
    {
        id: 2,
        company: "Guintoli (NGE)",
        title: "Chef de chantier VRD",
        date: "2020 - 2023",
        points: [
            "Planification et organisation des travaux de Voirie et Réseaux Divers sur les chantiers",
            "Encadrement et coordination des équipes terrain et des sous-traitants",
            "Suivi de l'avancement des travaux, respect des délais, du budget et des normes de sécurité"
        ],
        logo: "nge.png"
    },
    {
        id: 3,
        company: "PASS (NGE)",
        title: "Chef de chantier VRD extrudé et désactivé",
        date: "2011 - 2020",
        points: [
            "Gestion des chantiers et coulage des bordures et caniveaux à la machine extrudeuse",
            "Réalisation de voiries en béton désactivé",
            "Organisation logistique des équipes, du matériel et suivi qualité des finitions"
        ],
        logo: "pass.jpg"
    }
]);

const showXp = (id) => {
    activeBloc.value = id;
};

// Optionnel: Animation automatique du carrousel
const autoRotate = () => {
    const interval = setInterval(() => {
        activeBloc.value = (activeBloc.value + 1) % experiences.value.length;
    }, 5000);
    return () => clearInterval(interval);
};

watchEffect((onCleanup) => {
    const cleanup = autoRotate();
    onCleanup(cleanup);
});

function getImgUrl(imgPath) {
    // En développement, utilisez les chemins relatifs
    if (import.meta.env.DEV) {
        return `/src/assets/images/logos/${imgPath}`;
    }
    // En production avec GitHub Pages, utilisez le base path /portefolioV2/
    return `/portefolioV2/assets/images/logos/${imgPath}`;
}
</script>


<template>
    <section id="xp">
        <div class="xp-container">
            <h2 class="section-title">Mon <span class="highlight">parcours</span></h2>
            <p class="section-subtitle">Expériences professionnelles</p>

            <div class="xp-content">
                <div class="company-list">
                    <div v-for="exp in experiences" :key="exp.id"
                        :class="['company-card', { 'active': activeBloc === exp.id }]" @click="showXp(exp.id)"
                        @mouseenter="activeBloc = exp.id">
                        <div class="company-logo">
                            <img :src="getImgUrl(exp.logo)" :alt="exp.company">
                        </div>
                        <div class="company-info">
                            <h3>{{ exp.company }}</h3>
                            <p class="company-date">{{ exp.date }}</p>
                        </div>
                    </div>
                </div>

                <transition name="fade" mode="out-in">
                    <div class="experience-details" :key="activeBloc">
                        <div class="experience-card" v-if="experiences[activeBloc]">
                            <div class="experience-header">
                                <h3>{{ experiences[activeBloc].title }}</h3>
                                <span class="experience-date">{{ experiences[activeBloc].date }}</span>
                            </div>
                            <ul class="experience-points">
                                <li v-for="(point, index) in experiences[activeBloc].points" :key="index">
                                    <span class="point-icon">✓</span>
                                    <span class="experience-description">{{ point }}</span>
                                </li>
                            </ul>
                            <div class="experience-timeline">
                                <div class="timeline-dot"></div>
                                <div class="timeline-line"></div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>

<style scoped>
#xp {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    margin: 0;
    padding: 4rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
    position: relative;
}

.xp-container {
    max-width: 1200px;
    width: 100%;
}

.section-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #2c3e50;
    position: relative;
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

.xp-content {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.company-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}





.company-list {
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.company-card {
    background: white;
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-left: 3px solid transparent;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.company-card:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.company-card.active {
    border-left: 3px solid #3498db;
    background-color: #f0f7ff;
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.1);
}

.company-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    background: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.company-logo img {
    width: 80%;
    height: 80%;
    object-fit: contain;
}

.company-info h3 {
    font-size: 1.1rem;
    margin: 0;
    color: #2c3e50;
}

.company-date {
    font-size: 0.9rem;
    color: #7f8c8d;
    margin: 0.2rem 0 0;
}

.experience-details {
    flex: 1;
    position: relative;
}

.experience-card {
    background: white;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    position: relative;
    min-height: 300px;
}

.experience-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
}

.experience-header h3 {
    font-size: 1.5rem;
    margin: 0 0 0.5rem;
    color: #2c3e50;
}

.experience-date {
    font-size: 0.9rem;
    color: #3498db;
    font-weight: 500;
}

.experience-points {
    list-style: none;
    padding: 0;
    margin: 0;
}

.experience-points li {
    margin-bottom: 1rem;
    padding-left: 2rem;
    position: relative;
    line-height: 1.6;
}

.point-icon {
    position: absolute;
    left: 0;
    top: 0;
    color: #3498db;
    font-weight: bold;
}

.experience-description {
    color: #7f8c8d;

}

.experience-timeline {
    position: absolute;
    left: -1rem;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.timeline-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #3498db;
    border: 3px solid white;
    box-shadow: 0 0 0 2px #3498db;
    z-index: 2;
}

.timeline-line {
    flex: 1;
    width: 2px;
    background: #e0e0e0;
    margin: 5px 0;
}

@media screen and (max-width: 992px) {
    .xp-content {
        flex-direction: column;
    }

    .company-list {
        flex-direction: row;
        flex-wrap: wrap;
        flex: 0 0 auto;
    }

    .company-card {
        flex: 1 1 calc(50% - 1rem);
        min-width: 200px;
    }

    .experience-timeline {
        display: none;
    }
}

@media screen and (max-width: 768px) {
    .section-title {
        font-size: 2.5rem;
    }

    .company-card {
        flex: 1 1 100%;
    }
}

@media screen and (max-width: 576px) {
    #xp {
        padding: 2rem 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .experience-card {
        padding: 1.5rem;
    }
}
</style>