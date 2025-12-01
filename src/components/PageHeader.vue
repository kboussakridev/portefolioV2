<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// Fonction pour télécharger le CV
const downloadCV = async () => {
    try {
        // Récupérer le fichier via fetch
        const response = await fetch('/cv/KB_CV_ENI.pdf');
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
    <nav class="navbar">
        <RouterLink to="/" class="nav-logo">Karim BOUSSAKRI</RouterLink>

        <!-- Menu Desktop -->
        <div class="nav-links">
            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/about">À Propos</RouterLink>
            <RouterLink to="/projects">Projets</RouterLink>
            <RouterLink to="/technologies">Technos</RouterLink>
            <RouterLink to="/experiences">Expériences</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <button class="cv-download-btn" @click="downloadCV" title="Télécharger mon CV">
                <i class="fas fa-download"></i>
                CV
            </button>
        </div>

        <!-- Menu Mobile -->
        <button class="menu-toggle" @click="toggleMenu" aria-label="Menu">
            <i class="fas fa-bars"></i>
        </button>

        <div class="mobile-menu" :class="{ 'active': isMenuOpen }">
            <RouterLink to="/" @click="toggleMenu">Accueil</RouterLink>
            <RouterLink to="/about" @click="toggleMenu">À Propos</RouterLink>
            <RouterLink to="/projects" @click="toggleMenu">Projets</RouterLink>
            <RouterLink to="/technologies" @click="toggleMenu">Technologies</RouterLink>
            <RouterLink to="/experiences" @click="toggleMenu">Expériences</RouterLink>
            <RouterLink to="/contact" @click="toggleMenu">Contact</RouterLink>
            <button class="cv-download-btn-mobile" @click="downloadCV">
                <i class="fas fa-download"></i>
                Télécharger mon CV
            </button>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #2c3e50;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
}

.nav-logo {
    color: #3498DB;
    font-weight: bold;
    text-decoration: none;
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    /* Taille responsive */
    white-space: nowrap;
    margin-right: 1rem;
    overflow: hidden;
    /* évite que ça dépasse */
}

.nav-links {
    display: flex;
    gap: clamp(0.5rem, 2vw, 1.5rem);
    /* Espacement responsive */
    flex-wrap: wrap;
    justify-content: flex-end;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
    padding: 0.3rem 0;
    font-size: clamp(0.9rem, 2vw, 1rem);
    /* Taille de police responsive */
    white-space: nowrap;
    /* Empêche le retour à la ligne */
}

/* Menu Mobile */
.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
}

.mobile-menu {
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #2c3e50;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.mobile-menu a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* États actifs/hover */
.nav-links a:hover,
.nav-links a.router-link-exact-active,
.mobile-menu a:hover,
.mobile-menu a.router-link-exact-active {
    color: #3498DB;
}

.nav-links a.router-link-exact-active,
.mobile-menu a.router-link-exact-active {
    font-weight: bold;
}

/* Animation menu mobile */
.mobile-menu {
    transform: translateY(-150%);
    transition: transform 0.3s ease;
}

.mobile-menu.active {
    transform: translateY(0);
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .menu-toggle {
        display: block;
    }

    .mobile-menu {
        display: flex;
    }

    /* Ajustement spécifique pour petits écrans */
    .nav-logo {
        font-size: 1.2rem;
    }
}

/* Bouton télécharger CV */
.cv-download-btn {
    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: clamp(0.85rem, 2vw, 0.95rem);
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
    white-space: nowrap;
}

.cv-download-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);
    background: linear-gradient(135deg, #2980b9 0%, #3498db 100%);
}

.cv-download-btn i {
    font-size: 0.9rem;
}

.cv-download-btn-mobile {
    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
    color: white;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    transition: all 0.3s ease;
    margin-top: 0.5rem;
    width: 100%;
}

.cv-download-btn-mobile:hover {
    background: linear-gradient(135deg, #2980b9 0%, #3498db 100%);
    transform: translateX(5px);
}

/* Pour les très petits écrans */
@media (max-width: 400px) {
    .navbar {
        padding: 1rem;
    }

    .nav-logo {
        font-size: 1rem;
    }
}
</style>