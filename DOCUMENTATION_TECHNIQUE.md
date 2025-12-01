# 📚 Documentation Technique - Portfolio Vue.js V2

## 🎯 Vue d'ensemble du projet

**Nom du projet :** Portfolio Vue.js V2  
**Version :** 0.0.0  
**Description :** Portfolio personnel développé avec Vue 3 et Vite  
**Auteur :** Bouss  
**Licence :** ISC  

## 🏗️ Architecture technique

### Stack technologique
- **Frontend :** Vue.js 3.5.17
- **Build tool :** Vite 7.1.2
- **Router :** Vue Router 4.5.1
- **Déploiement :** GitHub Pages via gh-pages

### Structure du projet
```
vue-portfolioV2/
├── public/                 # Assets statiques
│   ├── assets/
│   │   └── images/
│   │       └── logos/     # Logos des entreprises
│   └── favicon.ico
├── src/                    # Code source
│   ├── components/         # Composants réutilisables
│   ├── pages/             # Pages de l'application
│   ├── router/            # Configuration du routage
│   ├── assets/            # Ressources (CSS, images)
│   ├── App.vue            # Composant racine
│   └── main.js            # Point d'entrée
├── package.json           # Dépendances et scripts
├── vite.config.js         # Configuration Vite
└── jsconfig.json          # Configuration JavaScript
```

## 🚀 Installation et configuration

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn
- Git

### Installation des dépendances
```bash
# Cloner le repository
git clone <url-du-repo>
cd vue-portfolioV2

# Installer les dépendances
npm install
```

## 🛠️ Scripts disponibles

### Développement
```bash
# Démarrer le serveur de développement
npm run dev

# Prévisualiser la build de production
npm run preview
```

### Production
```bash
# Construire l'application pour la production
npm run build

# Déployer sur GitHub Pages
npm run deploy
```

## 🔧 Configuration Vite

### Configuration actuelle
- **Base path :** `/portefolioV2/` en production, `/` en développement
- **Dossier de sortie :** `dist/`
- **Optimisation des assets :** Hachage automatique des noms de fichiers
- **Alias :** `@` pointe vers `./src`

### Personnalisation
Modifiez `vite.config.js` pour ajuster :
- Le chemin de base pour le déploiement
- Les options de build
- Les alias de chemins

## 📱 Composants principaux

### Composants de base
- `PageHeader.vue` - En-tête de page
- `PageTitle.vue` - Titre de section
- `AboutMe.vue` - Section "À propos"
- `MesProjets.vue` - Liste des projets
- `ProjectSingle.vue` - Affichage d'un projet
- `MesTechnos.vue` - Technologies maîtrisées
- `MesXp.vue` - Expériences professionnelles
- `Contact.vue` - Formulaire de contact

### Pages
- `PortfolioMain.vue` - Page principale du portfolio

## 🗂️ Routage

### Configuration du router
Le routage est géré par Vue Router 4 avec une configuration dans `src/router/index.js`

### Routes disponibles
- `/` - Page d'accueil du portfolio

## 🎨 Styling

### Fichiers CSS
- `src/assets/base.css` - Styles de base
- `src/assets/main.css` - Styles principaux

### Approche
- CSS modulaire par composant
- Variables CSS pour la cohérence
- Design responsive

## 🚀 Déploiement

### Configuration GitHub Pages

#### 1. Préparation du repository
```bash
# Vérifier le statut Git
git status

# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "feat: préparation du déploiement"
```

#### 2. Configuration de la branche gh-pages
```bash
# Pousser les changements sur la branche principale
git push origin main

# Déployer sur GitHub Pages
npm run deploy
```

#### 3. Vérification du déploiement
- Aller dans les paramètres du repository GitHub
- Section "Pages"
- Vérifier que la source est `gh-pages`
- L'URL sera : `https://<username>.github.io/portefolioV2/`

### Commandes Git complètes pour le déploiement

#### Workflow de développement
```bash
# 1. Vérifier le statut
git status

# 2. Ajouter les modifications
git add .

# 3. Créer un commit descriptif
git commit -m "feat: ajout de nouvelles fonctionnalités
- Amélioration du design responsive
- Correction des bugs de navigation
- Optimisation des performances"

# 4. Pousser sur la branche principale
git push origin main

# 5. Déployer sur GitHub Pages
npm run deploy
```

#### Gestion des branches
```bash
# Créer une branche de fonctionnalité
git checkout -b feature/nouvelle-fonctionnalite

# Développer et tester
# ... travail sur le code ...

# Fusionner avec la branche principale
git checkout main
git merge feature/nouvelle-fonctionnalite

# Supprimer la branche de fonctionnalité
git branch -d feature/nouvelle-fonctionnalite
```

#### Gestion des erreurs
```bash
# Annuler le dernier commit (garder les modifications)
git reset --soft HEAD~1

# Annuler le dernier commit (perdre les modifications)
git reset --hard HEAD~1

# Voir l'historique des commits
git log --oneline

# Revenir à un commit spécifique
git checkout <commit-hash>
```

## 🔍 Développement et débogage

### Outils de développement
- **Vue DevTools** : Extension navigateur pour déboguer Vue
- **Vite DevTools** : Outils intégrés pour le développement
- **Console navigateur** : Logs et erreurs JavaScript

### Bonnes pratiques
1. **Commits atomiques** : Un commit par fonctionnalité
2. **Messages de commit** : Utiliser le format conventionnel
3. **Tests** : Tester avant chaque commit
4. **Code review** : Revoir le code avant le merge

## 📊 Performance et optimisation

### Build de production
- Minification automatique du code
- Hachage des assets pour le cache
- Optimisation des images
- Tree-shaking des dépendances inutilisées

### Monitoring
- Lighthouse pour les performances
- Core Web Vitals
- Temps de chargement des pages

## 🐛 Résolution des problèmes courants

### Problèmes de build
```bash
# Nettoyer le cache
npm run build --force

# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Problèmes de déploiement
```bash
# Vérifier la configuration gh-pages
npm list gh-pages

# Forcer le déploiement
npm run deploy --force
```

### Problèmes de routage
- Vérifier le `base` dans `vite.config.js`
- S'assurer que le mode history est configuré
- Vérifier la configuration du serveur web

## 📚 Ressources et documentation

### Liens utiles
- [Documentation Vue 3](https://vuejs.org/)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation Vue Router](https://router.vuejs.org/)
- [GitHub Pages](https://pages.github.com/)

### Support
- Issues GitHub du projet
- Documentation officielle des outils
- Communauté Vue.js

## 🔄 Mise à jour et maintenance

### Mise à jour des dépendances
```bash
# Vérifier les mises à jour disponibles
npm outdated

# Mettre à jour les dépendances
npm update

# Mettre à jour vers les dernières versions
npm audit fix
```

### Sauvegarde et versioning
- Commits réguliers
- Tags pour les versions importantes
- Branches de release pour les mises à jour majeures

---

**Dernière mise à jour :** $(Get-Date -Format "dd/MM/yyyy")  
**Version de la documentation :** 1.0.0 