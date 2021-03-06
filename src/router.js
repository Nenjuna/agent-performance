import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./components/Login";
import Register from "./components/Register"
import Add from "./components/Add";
import PageNotFound from "./components/PageNotFound";
import Test from "./components/Test"
import Tester from "./components/Tester"
import Chart from './components/Chart'
import firebase from "firebase";
import "@/firebasejs/firebaseinit";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/chart",
      name: "chart",
      component: Chart,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/test",
      name: "test",
      component: Test,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/tester",
      name: "Tester",
      component: Tester,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/add",
      name: "Add",
      component: Add,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "*",
      name: "PageNotFound",
      component: PageNotFound,
      meta: {
        requiresGuest: true
      }
    }
  ]
});

// Nav prevent

router.beforeEach((to, from, next) =>
{
  if (to.matched.some(record => record.meta.requiresAuth))
  {
    if (!firebase.auth().currentUser)
    {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else
    {
      //proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest))
  {
    // Check if NO logged user
    if (firebase.auth().currentUser)
    {
      // Go to login
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else
    {
      // Proceed to route
      next();
    }
  }
});

export default router;
