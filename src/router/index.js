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
