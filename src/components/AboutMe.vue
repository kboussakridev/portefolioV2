<script setup>
</script>

<template>
    <section id="about-me">
        <div class="about-container">
            <h2 class="section-title">Qui suis-je ?</h2>
            <div class="about-content">
                <div class="text-content">
                    <p class="about-text">
    Bonjour ! Je m’appelle Karim Boussakri, <span class="highlight-block">développeur web full-stack</span>. 
    Avant cela, j’ai travaillé pendant plus de <span class="highlight-block">15 ans</span> comme <span class="highlight-block">chef de chantier</span> dans les <span class="highlight-block">travaux publics</span>, 
    une expérience qui m’a appris la rigueur, la gestion d’équipes et l’optimisation de projets.
</p>

<p class="about-text">
    Attiré depuis longtemps par le numérique, j’ai choisi de me reconvertir dans le développement web. 
    Aujourd’hui, je mets à profit ma <span class="highlight-underline">polyvalence</span>, ma <span class="highlight-underline">créativité</span> et mon sens de l’<span class="highlight-underline">organisation</span> 
    pour concevoir des solutions modernes, efficaces et adaptées aux besoins des utilisateurs.
</p>


                    <div class="expertise-box">
                        <p class="expertise-title">Domaines d'expertise :</p>
                        <ul class="expertise-list">
                            <li><i class="fas fa-code"></i> Développement full-stack</li>
                            <li><i class="fab fa-php"></i> PHP / Symfony</li>
                            <li><i class="fab fa-vuejs"></i> Vue.js</li>
                            <li><i class="fas fa-project-diagram"></i> Gestion de projet</li>
                        </ul>
                    </div>
                </div>

                <div class="visual-element">
                    <div class="decoration-circle"></div>
                    <img src="../assets/images/illustration.jpg" alt="Illustration développement"
                        class="about-illustration">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#about-me {
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
    overflow: hidden;
}

.about-container {
    max-width: 1200px;
    width: 100%;
}

.section-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #2c3e50;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2ecc71);
    margin: 1rem auto 0;
}

.about-content {
    display: flex;
    gap: 4rem;
    align-items: center;
}

.text-content {
    flex: 1;
}

.about-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #34495e;
    margin-bottom: 1.5rem;
    text-align: justify;
}

.highlight-block {
    background-color: #e3f2fd;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-weight: 600;
    color: #1976d2;
}

.highlight-underline {
    position: relative;
    font-weight: 600;
    color: #2c3e50;
}

.highlight-underline::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #3498db, #2ecc71);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
}

.highlight-underline:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}

.expertise-box {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    margin: 2rem 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    border-left: 4px solid #3498db;
}

.expertise-title {
    font-weight: 600;
    color: #3498db;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.expertise-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.expertise-list li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #34495e;
}

.expertise-list i {
    color: #3498db;
}

.visual-element {
    position: relative;
    flex: 0 0 40%;
}

.about-illustration {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 2;
}

.decoration-circle {
    position: absolute;
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(46, 204, 113, 0.1) 100%);
    border-radius: 50%;
    top: -50px;
    right: -50px;
    z-index: 1;
}

@media screen and (max-width: 992px) {
    .about-content {
        flex-direction: column;
        gap: 2rem;
    }

    .visual-element {
        order: -1;
        margin-bottom: 2rem;
    }

    .expertise-list {
        grid-template-columns: 1fr;
    }

    .section-title {
        font-size: 2.5rem;
    }
}

@media screen and (max-width: 576px) {
    #about-me {
        padding: 2rem 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .about-text {
        font-size: 1rem;
    }
}
</style>