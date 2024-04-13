import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ingredients from '../views/Ingredients.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByLetter from "@/views/MealsByLetter.vue";
import MealsByName from "@/views/MealsByName.vue";
import DefaultLayout from "@/components/DefaultLayout.vue";
import GuestLayout from "@/components/GuestLayout.vue";
import MealDetails from "@/views/MealDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/by-name/:name?',
          name: 'byName',
          component: MealsByName
        },
        {
          path: '/by-letter/:letter?',
          name: 'byLetter',
          component: MealsByLetter
        },
        {
          path: '/ingredients',
          name: 'ingredients',
          component: Ingredients
        },
        {
          path: '/by-ingredient/:ingredient',
          name: 'byIngredient',
          component: MealsByIngredient
        },
        {
          path: '/meal/:id',
          name: 'mealDetails',
          component: MealDetails
        },
      ]
    },
    {
      path: '/guest',
      component: GuestLayout,
      children: [],
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
