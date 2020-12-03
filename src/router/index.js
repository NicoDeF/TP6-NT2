import { createWebHistory, createRouter } from 'vue-router'
import Formulario from '../components/Formulario.vue'
import Users from '../components/Users.vue'
import Home from '../components/Home.vue'


const routes = [
    { path: '/users', name: 'Users', component: Users},
    { path: '/formulario', name: 'Formulario', component: Formulario },
    { path: '/home', name: 'Home', component: Home }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;