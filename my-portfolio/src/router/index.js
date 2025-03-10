import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    { path: '/', component: Home },
    // Your commented routes
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;