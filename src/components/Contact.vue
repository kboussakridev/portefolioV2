<!--src/component/Contact.vue-->
<script setup>
import { ref } from 'vue';

const form = ref({
    name: '',
    email: '',
    message: ''
});

const isLoading = ref(false);
const isSuccess = ref(false);
const error = ref('');

const submitForm = () => {
    if (!form.value.name || !form.value.email || !form.value.message) {
        error.value = 'Veuillez remplir tous les champs';
        return;
    }

    isLoading.value = true;
    error.value = '';


    // Appel vers ton script PHP qui envoie le mail
    fetch('/send_mail.php', {
        method: 'POST',
        body: new FormData(
            Object.entries(form.value).reduce((fd, [k, v]) => {
                fd.append(k, v);
                return fd;
            }, new FormData())
        )
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                isSuccess.value = true;
                form.value = { name: '', email: '', message: '' };
                // Message de succès disparaît après 5s
                setTimeout(() => isSuccess.value = false, 5000);
            } else {
                error.value = 'Erreur lors de l’envoi du message.';
            }
        })
        .catch(() => {
            error.value = 'Impossible de contacter le serveur.';
        })
        .finally(() => {
            isLoading.value = false;
        });

    // // Simulation d'envoi (remplacez par votre vrai traitement)
    // setTimeout(() => {
    //     console.log('Formulaire soumis:', form.value);
    //     isLoading.value = false;
    //     isSuccess.value = true;
    //     form.value = { name: '', email: '', message: '' };

    //     // Réinitialiser le message de succès après 5s
    //     setTimeout(() => isSuccess.value = false, 5000);
    // }, 1500);
};
</script>

<template>
    <section id="contact" class="contact-section">
        <h2 class="section-title">Contactez-moi</h2>
        <p class="section-subtitle">Disponible pour des opportunités de collaboration</p>

        <div class="contact-container">
            <form @submit.prevent="submitForm" class="contact-form">
                <div class="form-group">
                    <label for="name">Nom</label>
                    <input type="text" id="name" v-model="form.name" placeholder="Votre nom">
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="form.email" placeholder="Votre email">
                </div>

                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" v-model="form.message" rows="5" placeholder="Votre message..."></textarea>
                </div>

                <div v-if="error" class="error-message">{{ error }}</div>
                <div v-if="isSuccess" class="success-message">
                    Message envoyé avec succès ! Je vous répondrai dès que possible.
                </div>

                <button type="submit" class="submit-btn" :disabled="isLoading">
                    <span v-if="!isLoading">Envoyer</span>
                    <span v-else class="loading">
                        <i class="fas fa-spinner fa-spin"></i> Envoi en cours...
                    </span>
                </button>
            </form>

            <div class="contact-info">
                <div class="info-item">
                    <i class="fas fa-envelope icon"></i>
                    <span>contact@kboussakri.com</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone-alt icon"></i>
                    <span>+33 6 61 91 69 57</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt icon"></i>
                    <span>Troyes, France</span>
                </div>

                <div class="social-links">
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin-in linkedin"></i>
                    </a>
                    <a href="https://github.com/kboussakridev/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github github"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-section {
    padding: 4rem 2rem;
    background-color: #f9f9f9;
    text-align: center;
}

.section-title {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.section-subtitle {
    color: #7f8c8d;
    margin-bottom: 3rem;
    font-size: 1.2rem;
}

.contact-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: flex-start;
}

.contact-form {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-group {
    margin-bottom: 1.5rem;
    text-align: left;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-weight: 500;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border 0.3s;
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #42b983;
}

.submit-btn {
    background-color: #3498DB;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    width: 100%;
    font-weight: 600;
}

.submit-btn:hover {
    background-color: #74c0f3;
}

.submit-btn:disabled {
    background-color: #95d5b2;
    cursor: not-allowed;
}

.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.error-message {
    color: #e74c3c;
    margin-bottom: 1rem;
    text-align: center;
}

.success-message {
    color: #42b983;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: 500;
}

.contact-info {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    text-align: left;
}

.info-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    color: #2c3e50;
}

.icon {
    margin-right: 1rem;
    color: #3498DB;
    font-size: 1.2rem;
    width: 20px;
    text-align: center;
}



.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f1f1f1;
    color: #2c3e50;
    transition: all 0.3s;
}

.social-links a:hover .linkedin {
    color: #0A66C1;
    transform: translateY(-3px);
}

.social-links a:hover .github {
    color: #15191F;
    transform: translateY(-3px);
}

@media (max-width: 768px) {
    .contact-container {
        grid-template-columns: 1fr;
    }

    .section-title {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .contact-section {
        padding: 3rem 1rem;
    }

    .contact-form,
    .contact-info {
        padding: 1.5rem;
    }
}
</style>