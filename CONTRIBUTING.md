# 🤝 Guide de contribution

Merci de votre intérêt pour contribuer à ce projet portfolio Vue.js ! Ce document vous guidera à travers le processus de contribution.

## 📋 Table des matières

- [Comment contribuer](#comment-contribuer)
- [Standards de code](#standards-de-code)
- [Processus de contribution](#processus-de-contribution)
- [Rapport de bugs](#rapport-de-bugs)
- [Demande de fonctionnalités](#demande-de-fonctionnalités)
- [Pull Request](#pull-request)
- [Questions et support](#questions-et-support)

## 🚀 Comment contribuer

### Types de contributions acceptées

- 🐛 **Correction de bugs**
- ✨ **Nouvelles fonctionnalités**
- 📚 **Amélioration de la documentation**
- 🎨 **Améliorations du design/UI**
- ⚡ **Optimisations de performance**
- 🧪 **Tests et améliorations de qualité**

### Avant de commencer

1. **Vérifiez les issues existantes** pour éviter les doublons
2. **Lisez cette documentation** complètement
3. **Assurez-vous que votre environnement de développement** est configuré
4. **Faites-vous connaître** en commentant sur l'issue que vous souhaitez traiter

## 💻 Standards de code

### Vue.js
- Utilisez la **Composition API** pour les nouveaux composants
- Respectez la **convention de nommage** des composants (PascalCase)
- Utilisez des **props typées** avec validation
- Implémentez des **emits typés** pour la communication parent-enfant

### JavaScript/TypeScript
- Utilisez **ES6+** et les fonctionnalités modernes
- Respectez les **conventions ESLint** du projet
- Écrivez du code **lisible et maintenable**
- Ajoutez des **commentaires** pour la logique complexe

### CSS/SCSS
- Utilisez des **classes BEM** pour la nomenclature
- Respectez la **hiérarchie des sélecteurs**
- Implémentez un **design responsive**
- Utilisez des **variables CSS** pour la cohérence

### Git
- Utilisez des **messages de commit conventionnels**
- Créez des **branches descriptives**
- Faites des **commits atomiques**
- Gardez l'**historique propre**

## 🔄 Processus de contribution

### 1. Fork et clone
```bash
# Fork le repository sur GitHub
# Puis clonez votre fork
git clone https://github.com/votre-username/vue-portfolioV2.git
cd vue-portfolioV2

# Ajoutez le repository original comme upstream
git remote add upstream https://github.com/original-username/vue-portfolioV2.git
```

### 2. Créer une branche
```bash
# Créez une branche pour votre contribution
git checkout -b feature/nom-de-votre-fonctionnalite
# ou
git checkout -b fix/nom-du-bug
```

### 3. Développer
- Implémentez vos changements
- Respectez les standards de code
- Testez localement
- Mettez à jour la documentation si nécessaire

### 4. Tester
```bash
# Vérifiez que tout fonctionne
npm run dev
npm run build
npm run preview
```

### 5. Commiter
```bash
# Ajoutez vos fichiers
git add .

# Créez un commit descriptif
git commit -m "feat: ajout de la fonctionnalité X
- Description détaillée des changements
- Impact sur l'utilisateur
- Tests effectués"
```

### 6. Pousser et créer une Pull Request
```bash
# Poussez votre branche
git push origin feature/nom-de-votre-fonctionnalite

# Créez une Pull Request sur GitHub
```

## 🐛 Rapport de bugs

### Avant de signaler un bug

1. **Vérifiez les issues existantes**
2. **Testez sur la dernière version**
3. **Reproduisez le problème** sur un environnement propre

### Template de rapport de bug

```markdown
## 🐛 Description du bug

**Résumé :** Description courte du problème

**Étapes pour reproduire :**
1. Aller sur '...'
2. Cliquer sur '...'
3. Voir l'erreur

**Comportement attendu :** Ce qui devrait se passer

**Comportement actuel :** Ce qui se passe réellement

**Captures d'écran :** Si applicable

**Environnement :**
- OS : [ex: Windows 10, macOS, Linux]
- Navigateur : [ex: Chrome, Firefox, Safari]
- Version : [ex: 22]

**Informations supplémentaires :** Contexte, logs, etc.
```

## ✨ Demande de fonctionnalités

### Template de demande de fonctionnalité

```markdown
## ✨ Demande de fonctionnalité

**Problème :** Description du problème que cette fonctionnalité résoudrait

**Solution proposée :** Description de la solution souhaitée

**Alternatives considérées :** Autres solutions possibles

**Impact :** Qui bénéficierait de cette fonctionnalité

**Contexte :** Informations supplémentaires
```

## 🔀 Pull Request

### Avant de soumettre

- [ ] J'ai lu et respecté ce guide de contribution
- [ ] Mon code respecte les standards du projet
- [ ] J'ai testé mes changements localement
- [ ] J'ai mis à jour la documentation si nécessaire
- [ ] J'ai ajouté des tests si applicable
- [ ] Mon commit suit les conventions du projet

### Template de Pull Request

```markdown
## 📝 Description

Description claire et concise des changements apportés.

## 🔗 Issue liée

Fixes #(issue number)

## ✅ Tests effectués

- [ ] Tests unitaires
- [ ] Tests d'intégration
- [ ] Tests manuels
- [ ] Tests de performance

## 📸 Captures d'écran

Si applicable, ajoutez des captures d'écran pour illustrer les changements.

## 📚 Documentation

- [ ] J'ai mis à jour la documentation technique
- [ ] J'ai mis à jour le README si nécessaire
- [ ] J'ai mis à jour le CHANGELOG

## 🔍 Checklist

- [ ] Mon code respecte les standards du projet
- [ ] J'ai testé sur différents navigateurs
- [ ] J'ai vérifié la responsivité
- [ ] J'ai optimisé les performances
```

## 🚨 Questions et support

### Besoin d'aide ?

- **Issues GitHub** : Pour les bugs et demandes de fonctionnalités
- **Discussions GitHub** : Pour les questions générales
- **Email** : [votre-email@example.com]

### Ressources utiles

- [Documentation technique](./DOCUMENTATION_TECHNIQUE.md)
- [Documentation Vue.js](https://vuejs.org/)
- [Documentation Vite](https://vitejs.dev/)
- [Guide de style Vue.js](https://vuejs.org/style-guide/)

## 🎯 Prochaines étapes

1. **Choisissez une issue** à traiter
2. **Commentez** pour indiquer votre intérêt
3. **Créez votre branche** et commencez à développer
4. **Soumettez votre Pull Request**
5. **Participez aux discussions** et améliorez votre code

---

**Merci de contribuer à ce projet !** 🎉

Votre contribution aide à améliorer ce portfolio et à créer quelque chose d'extraordinaire pour la communauté. 