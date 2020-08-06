import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/layout/DefaultLayout";

Vue.use(VueRouter);

const routes = [
  { path: "*", redirect: "/404" },
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "Home",
        meta: { private: false, title: "Home" },
        component: () => import(/* webpackChunkName: "demo" */ "../views/Home.vue")

      },
      {
        path: "/404",
        name: "Home",
        meta: { private: false, title: "404 Not Found" },
        component: () => import(/* webpackChunkName: "demo" */ "../views/error/404.vue")

      },
      {
        path: "/items",
        name: "Busqueda Productos",
        meta: { private: false, title: "Busqueda Productos" },
        component: () => import(/* webpackChunkName: "demo" */ "../views/Busqueda.vue")

      },
      {
        path: "/items/:id",
        name: "Detalle Producto",
        meta: { private: false, title: "Detalle Producto" },
        component: () => import(/* webpackChunkName: "demo" */ "../views/Item.vue")

      }
    ]
  }
];

const router = new VueRouter({
  linkExactActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
