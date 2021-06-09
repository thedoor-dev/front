import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/newposter", component: ()=>import("../pages/NewPoster.vue") },
    { path: "/signin", component: ()=>import("../pages/Signin.vue") }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router