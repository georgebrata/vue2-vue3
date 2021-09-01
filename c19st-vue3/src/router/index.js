import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Today',
        component: () => import('../views/Today.vue')
    },
    {
        path: '/symptom/add',
        name: 'Add Symptom',
        component: () => import('../views/AddSymptom.vue')
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;