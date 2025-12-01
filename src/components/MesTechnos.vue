<script setup>
import { ref } from 'vue'

const technologies = ref([
    { name: 'HTML5', icon: 'html5-plain', level: 90 },
    { name: 'CSS3', icon: 'css3-plain', level: 80 },
    { name: 'JavaScript', icon: 'javascript-plain', level: 70 },
    { name: 'PHP', icon: 'php-plain', level: 60 },
    { name: 'Vue.js', icon: 'vuejs-plain', level: 60 },
    { name: 'Symfony', icon: 'symfony-original', level: 60 },
    { name: 'MySQL', icon: 'mysql-plain', level: 50 },
    { name: 'Git', icon: 'git-plain', level: 70 },
    { name: 'Bootstrap', icon: 'bootstrap-plain', level: 60 },
    { name: 'Tailwind', icon: 'tailwindcss-plain', level: 50 },
    { name: 'jQuery', icon: 'jquery-plain', level: 50 },
    { name: 'WordPress', icon: 'wordpress-plain', level: 50 },
    { name: 'Java', icon: 'java-plain', level: 50 },
    { name: 'Docker', icon: 'docker-plain', level: 40 }
])

const learningTechs = ref(['React', 'Node.js', 'TypeScript'])
</script>

<template>
    <section id="skills">
        <div class="skills-container">
            <h2 class="section-title">Mes <span class="highlight">compétences</span></h2>
            <p class="section-subtitle">
    Elles sont en constante évolution, car ce métier m’offre l’opportunité d’apprendre chaque jour. 
    Curieux, impliqué et passionné, j’aime explorer de nouvelles technologies et les mettre en pratique 
    pour créer des projets concrets et utiles.
</p>

            <div class="skills-grid">
                <div v-for="(tech, index) in technologies" :key="index" class="skill-card"
                    :style="`--delay: ${index * 0.05}s`">
                    <div class="skill-icon">
                        <i :class="`devicon-${tech.icon} colored`"></i>
                    </div>
                    <div class="skill-name">{{ tech.name }}</div>
                    <div class="skill-level">
                        <div class="level-bar" :style="`width: ${tech.level}%`"></div>
                    </div>
                </div>
            </div>

            <div class="learning-section">
                <h3>Actuellement en apprentissage :</h3>
                <div class="learning-techs">
                    <span v-for="(tech, index) in learningTechs" :key="index">
                        {{ tech }}<span v-if="index < learningTechs.length - 1">, </span>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#skills {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    margin: 0;
    padding: 4rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    position: relative;
    overflow: hidden;
}

.skills-container {
    max-width: 1200px;
    width: 100%;
    text-align: center;
}

.section-title {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #2c3e50;
    position: relative;
    display: inline-block;
}

.highlight {
    color: #3498db;
}

.section-subtitle {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin-bottom: 3rem;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.skill-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.5s ease forwards;
    animation-delay: var(--delay);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.skill-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2ecc71);
}

.skill-icon {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
}

.skill-card:hover .skill-icon {
    transform: scale(1.1);
}

.skill-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.skill-level {
    height: 6px;
    background: #ecf0f1;
    border-radius: 3px;
    overflow: hidden;
}

.level-bar {
    height: 100%;
    background: linear-gradient(90deg, #3498db, #2ecc71);
    border-radius: 3px;
    transition: width 1s ease;
}

.learning-section {
    margin-top: 3rem;
    padding: 1.5rem;
    background: rgba(52, 152, 219, 0.1);
    border-radius: 12px;
    display: inline-block;
}

.learning-section h3 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.learning-techs {
    font-size: 1.1rem;
    color: #3498db;
    font-weight: 500;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media screen and (max-width: 992px) {
    .skills-grid {
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        gap: 1.5rem;
    }

    .section-title {
        font-size: 2.5rem;
    }
}

@media screen and (max-width: 768px) {
    .skills-grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 1rem;
    }

    .skill-icon {
        font-size: 3rem;
    }
}

@media screen and (max-width: 576px) {
    #skills {
        padding: 2rem 1rem;
    }

    .skills-grid {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }

    .section-title {
        font-size: 2rem;
    }

    .skill-icon {
        font-size: 2.5rem;
    }

    .learning-section {
        padding: 1rem;
    }
}
</style>