<script setup>

import { ref, onMounted } from 'vue'

const name = ref('Développeur Web')
const stack = ['Full-stack', 'Symfony', 'Vue.js', 'Python']
const currentIndex = ref(0)
const displayedText = ref('')
const isDeleting = ref(false)
const charIndex = ref(0)
const speed = 150
const pauseTime = 1500

onMounted(() => {
    const type = () => {
        const currentStack = stack[currentIndex.value]

        if (isDeleting.value) {
            displayedText.value = currentStack.substring(0, charIndex.value - 1)
            charIndex.value--
        } else {
            displayedText.value = currentStack.substring(0, charIndex.value + 1)
            charIndex.value++
        }

        if (!isDeleting.value && charIndex.value === currentStack.length) {
            setTimeout(() => {
                isDeleting.value = true
            }, pauseTime)
        } else if (isDeleting.value && charIndex.value === 0) {
            isDeleting.value = false
            currentIndex.value = (currentIndex.value + 1) % stack.length
        }

        setTimeout(type, isDeleting.value ? 100 : speed)
    }

    type()
})

const isMenuOpen = ref(false)

// Fonction pour basculer le menu
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

// Fonction pour télécharger le CV
const downloadCV = async () => {
    try {
        // Récupérer le fichier via fetch
        const response = await fetch('./cv/KB_CV_ENI.pdf');
        if (!response.ok) {
            throw new Error('Fichier non trouvé');
        }

        // Convertir la réponse en blob
        const blob = await response.blob();

        // Créer un lien temporaire pour télécharger le CV
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'KB_CV_ENI.pdf';
        document.body.appendChild(link);
        link.click();

        // Nettoyer
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        // Fermer le menu mobile si ouvert
        if (isMenuOpen.value) {
            toggleMenu();
        }
    } catch (error) {
        console.error('Erreur lors du téléchargement du CV:', error);
        alert('Erreur lors du téléchargement du CV. Veuillez réessayer.');
    }
};
</script>

<template>
    <section id="top-line">
        <div class="content-wrapper">
            <img id="profile-img" src="../assets/images/moi.jpg" alt="photo de profile">
            <div id="line">
                <h1>
                    <span class="text-highlignt-1">{{ name }}</span> {{ displayedText }}
                </h1>
                <p class="subtitle">Passionné par le développement et la création de projets fonctionnels, je suis
                    motivé à apprendre et à relever de nouveaux défis chaque jour.</p>
                <div id="social">
                    <ul>
                        <!-- <li class="item"><a href="#" target="_blank"><i class="fa-brands fa-facebook icon"></i></a></li> -->
                        <li class="item"><a href="https://www.linkedin.com/feed/" target="_blank"><i
                                    class="fa-brands fa-linkedin icon linkedin"></i></a></li>
                        <li class="item"><a href="https://github.com/kboussakridev/" target="_blank"><i
                                    class="fa-brands fa-github icon github"></i></a></li>
                        <!-- <li class="item"><a href="#" target="_blank"><i class="fa-brands fa-discord icon"></i></a></li> -->
                    </ul>
                </div>
                <div id="cv-download">
                    <button @click="downloadCV" class="cv-button">
                        <i class="fas fa-download"></i>
                        Télécharger mon CV
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#top-line {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    margin: 0;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    position: relative;
    overflow: hidden;
}

.content-wrapper {
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4rem;
}

#top-line #profile-img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

#top-line #line {
    text-align: left;
}

#top-line h1 {
    font-size: 3.5rem;
    margin: 0 0 1rem 0;
    color: #2c3e50;
    line-height: 1.2;
}

.text-highlignt-1 {
    color: #3498db;
}

.subtitle {
    font-size: 1.5rem;
    color: #7f8c8d;
    margin-bottom: 2rem;
    font-weight: 300;
}

#social {
    margin-top: 2rem;
}

#cv-download {
    margin-top: 2rem;
}

.cv-button {
    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
    text-decoration: none;
}

.cv-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
    background: linear-gradient(135deg, #2980b9 0%, #3498db 100%);
}

.cv-button:active {
    transform: translateY(-1px);
}

.cv-button i {
    font-size: 1rem;
}

#social ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
}

.item a {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    overflow: hidden;
    border: 3px solid #fff;
    position: relative;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.item a:hover {
    transform: translateY(-5px);
}

.icon {
    font-size: 1.5rem;
    transition: 0.5s ease;
    z-index: 2;
}

/* Animation des icônes */
.item a:hover .linkedin {
    color: #0A66C1;
    transform: rotateY(360deg);
}

.item a:hover .github {
    color: #15191F;
    transform: rotateY(360deg);
}

@media screen and (max-width: 905px) {
    .content-wrapper {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }

    #top-line #profile-img {
        width: 250px;
        height: 250px;
    }

    #top-line h1 {
        font-size: 2.5rem;
    }

    .subtitle {
        font-size: 1.2rem;
        text-align: center;
    }

    #social ul {
        justify-content: center;
    }

    #cv-download {
        text-align: center;
    }
}

/* Effet de fond animé optionnel */
#top-line::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(52, 152, 219, 0.1);
    top: -50px;
    left: -50px;
    z-index: 0;
}

#top-line::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(155, 89, 182, 0.1);
    bottom: -30px;
    right: -30px;
    z-index: 0;
}
</style>