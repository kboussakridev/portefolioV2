<!--ProjectSingle.vue-->

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const props = defineProps({
    project: {
        type: Object,
        required: true
    },
    reverse: {
        type: Boolean,
        default: false
    }
});

// Carrousel logic
const currentImageIndex = ref(0);
const transitionEffect = ref('slide');
const intervalId = ref(null);
const isHovered = ref(false);

const currentImage = computed(() => {
    return props.project.image[currentImageIndex.value] || '';
});

function getImgUrl(imgPath) {
    try {
        return new URL(`/src/assets/images/${imgPath}`, import.meta.url).href;
    } catch (error) {
        console.error("Erreur de chargement de l'image:", imgPath, error);
        return '';
    }
}

function nextSlide() {
    if (props.project.image.length <= 1) return;
    currentImageIndex.value = (currentImageIndex.value + 1) % props.project.image.length;
    transitionEffect.value = 'slide';
}

function prevSlide() {
    if (props.project.image.length <= 1) return;
    currentImageIndex.value = (currentImageIndex.value - 1 + props.project.image.length) % props.project.image.length;
    transitionEffect.value = 'slide-reverse';
}

function goToSlide(index) {
    if (index === currentImageIndex.value || props.project.image.length <= 1) return;
    transitionEffect.value = index > currentImageIndex.value ? 'slide' : 'slide-reverse';
    currentImageIndex.value = index;
}

function startSlideshow() {
    clearInterval();
    if (props.project.image.length > 1) {
        intervalId.value = setInterval(nextSlide, 5000);
    }
}

function clearInterval() {
    if (intervalId.value) {
        window.clearInterval(intervalId.value);
        intervalId.value = null;
    }
}

onMounted(() => {
    startSlideshow();
});

onUnmounted(() => {
    clearInterval();
});
</script>

<template>
    <div class="project-card" :class="{ 'reverse': reverse }">
        <div class="project-media">
            <div class="carrousel-container" @mouseenter="clearInterval" @mouseleave="startSlideshow">
                <transition :name="transitionEffect" mode="out-in">
                    <div class="slide-container" :key="currentImage">
                        <a :href="getImgUrl(currentImage)" target="_blank" rel="noopener noreferrer">
                            <img :src="getImgUrl(currentImage)"
                                :alt="`${project.name} - Capture ${currentImageIndex + 1}`" class="carrousel-image" />
                        </a>
                    </div>
                </transition>

                <button v-if="project.image.length > 1" class="nav-btn prev-btn" @click="prevSlide"
                    aria-label="Previous">
                    ‹
                </button>
                <button v-if="project.image.length > 1" class="nav-btn next-btn" @click="nextSlide" aria-label="Next">
                    ›
                </button>

                <div v-if="project.image.length > 1" class="indicators">
                    <button v-for="(img, index) in project.image" :key="index"
                        :class="{ active: index === currentImageIndex }" @click="goToSlide(index)"
                        :aria-label="`Voir l'image ${index + 1}`">
                    </button>
                </div>
            </div>
        </div>

        <div class="project-content">
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>

            <ul class="project-tasks">
                <li v-for="(task, index) in project.tasks" :key="index">
                    <span class="task-icon">✓</span>
                    <span class="task-text">{{ task }}</span>
                </li>
            </ul>

            <!-- <a v-if="project.link" :href="project.link" class="project-link" target="_blank">
                Voir le projet
                <i class="fas fa-arrow-right"></i>
            </a> -->
        </div>
    </div>
</template>

<style scoped>
.project-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.project-card.reverse {
    direction: rtl;
}

.project-card.reverse>* {
    direction: ltr;
}

.project-media {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.carrousel-container {
    position: relative;
    height: 350px;
    overflow: hidden;
    border-radius: 8px;
}

.carrousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .carrousel-image {
    transform: scale(1.02);
}

.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.9);
    color: #2c3e50;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.nav-btn:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
}

.prev-btn {
    left: 15px;
}

.next-btn {
    right: 15px;
}

.indicators {
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 8px;
    z-index: 10;
}

.indicators button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(67, 99, 156, 0.5);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
}

.indicators button.active {
    background: #1976d2;
    transform: scale(1.2);
}

.indicators button:hover {
    background: rgba(255, 255, 255, 0.8);
}

.project-content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.project-title {
    font-size: 1.8rem;
    margin: 0 0 1rem 0;
    color: #2c3e50;
}

.project-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #34495e;
    margin-bottom: 1.5rem;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
}

.tag {
    background: #e3f2fd;
    color: #1976d2;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 600;
}

.project-tasks {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.project-tasks li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    line-height: 1.6;
}

.task-icon {
    color: #2ecc71;
    font-weight: bold;
    flex-shrink: 0;
}

.task-text {
    color: #34495e;
}

/* .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: auto;
    padding: 0.8rem 1.5rem;
    background: #3498db;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    align-self: flex-start;
} */

/* .project-link:hover {
    background: #2980b9;
    transform: translateX(5px);
} */

/* Animations */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease;
}

.slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-reverse-enter-active,
.slide-reverse-leave-active {
    transition: all 0.5s ease;
}

.slide-reverse-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-reverse-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-reverse-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

@media screen and (max-width: 992px) {
    .project-card {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .carrousel-container {
        height: 300px;
    }

    .project-title {
        font-size: 1.6rem;
    }
}

@media screen and (max-width: 768px) {
    .project-card {
        padding: 1.5rem;
    }

    .carrousel-container {
        height: 250px;
    }
}

@media screen and (max-width: 576px) {
    .project-card {
        padding: 1rem;
    }

    .carrousel-container {
        height: 200px;
    }

    .project-title {
        font-size: 1.4rem;
    }

    .project-description {
        font-size: 1rem;
    }

    .nav-btn {
        width: 30px;
        height: 30px;
        font-size: 16px;
    }

    .indicators button {
        width: 10px;
        height: 10px;
    }
}
</style>