import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/post/:id", component: () => import("../pages/Post.vue") },
    { path: "/newposter", component: () => import("../pages/NewPoster.vue") },
    { path: "/archives", component: () => import("../pages/Archive.vue") },
    { path: "/tags", component: () => import("../pages/Tag.vue") },
    { path: "/about", component: () => import("../pages/About.vue") },
    { path: "/admin", component: () => import("../pages/Admin.vue") },
    { path: "/admin/signin", component: () => import("../pages/Signin.admin.vue") }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router