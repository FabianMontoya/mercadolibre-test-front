/* eslint-disable */
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
        name: "home",
        meta: { private: false, title: "Inicio" },
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Home.vue")
      },
      {
        path: "/404",
        name: "404",
        meta: { private: false, title: "404 Not Found" },
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/error/404.vue")
      },
      {
        path: "/items",
        name: "busqueda-productos",
        meta: { private: false, title: "Busqueda Productos" },
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Busqueda.vue")
      },
      {
        path: "/items/:id",
        name: "detalle-producto",
        meta: { private: false, title: "Detalle Producto" },
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Item.vue")
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

//Antes de enviar a la ruta solicitada
router.beforeEach((to, from, next) => {  
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  //const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle){document.title = nearestWithTitle.meta.title + ' - Mercadolibre test app by Fabian Montoya';}else{document.title = 'Mercadolibre test app by Fabian Montoya'}

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));
  next();
});



export default router;
