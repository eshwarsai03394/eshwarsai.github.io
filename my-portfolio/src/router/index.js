import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
// import About from '../views/About.vue';
// import Skills from '../views/Skills.vue';
// import Blogs from '../views/Blogs.vue';
// import Experience from '../views/Experience.vue';
// import Contact from '../views/Contact.vue';


const routes = [
    { path: '/', component: Home },
    // { path: '/about', component: About },
    // { path: '/skills', component: Skills },
    // { path: '/blogs', component: Blogs },
    // { path: '/experience', component: Experience },
    // { path: '/contact', component: Contact },
  ];
  

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;  