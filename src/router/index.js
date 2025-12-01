import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/PortfolioMain.vue"),
    meta: { title: "Accueil" },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/components/AboutMe.vue"),
    meta: { title: "À Propos" },
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/components/MesProjets.vue"),
    meta: { title: "Mes Projets" },
  },
  {
    path: "/technologies",
    name: "Technologies",
    component: () => import("@/components/MesTechnos.vue"),
    meta: { title: "Mes Technologies" },
  },
  {
    path: "/experiences",
    name: "Experiences",
    component: () => import("@/components/MesXp.vue"),
    meta: { title: "Mes Expériences" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/components/Contact.vue"),
    meta: { title: "Mes Me contacter" },
  },
  // Routes éducatives v-bind (commentées car les fichiers n'existent pas encore)
  // {
  //   path: "/vbind-fundamentals",
  //   name: "VBindFundamentals",
  //   component: () => import("@/views/VBindFundamentals.vue"),
  //   meta: { title: "Fondamentaux v-bind" },
  // },
  // {
  //   path: "/class-style-binding",
  //   name: "ClassStyleBinding",
  //   component: () => import("@/views/ClassAndStyleBinding.vue"),
  //   meta: { title: "Classes et Styles" },
  // },
  // {
  //   path: "/props-binding",
  //   name: "PropsBinding",
  //   component: () => import("@/views/PropsBinding.vue"),
  //   meta: { title: "Props et v-bind" },
  // },
  // {
  //   path: "/advanced-binding",
  //   name: "AdvancedBinding",
  //   component: () => import("@/views/AdvancedBinding.vue"),
  //   meta: { title: "v-bind Avancé" },
  // },
  // {
  //   path: "/practice-exercises",
  //   name: "PracticeExercises",
  //   component: () => import("@/views/PracticeExercises.vue"),
  //   meta: { title: "Exercices Pratiques" },
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

// Gestion du titre de page
router.beforeEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} - Mon Portfolio`
    : "Mon Portfolio";
});

export default router;
