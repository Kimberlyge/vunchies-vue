// import { routeParser } from 'vue-i18n-manager'

/**
 * Pages
 */
const home = resolve => require(['./page/home/home.vue'], resolve)
const recipe = resolve => require(['./page/recipe/recipe.vue'], resolve)
const travel = resolve => require(['./page/travel/travel.vue'], resolve)
const about = resolve => require(['./page/about/about.vue'], resolve)

export default [
  {
    name: 'home',
    path: '/',
    component: home,
    meta: {
      section: {
        name: 'home',
        title: 'Home'
      }
    }
  },
  {
    name: 'recipe',
    path: '/:slug',
    component: recipe,
    meta: {
      section: {
        name: 'recipe',
        title: 'Recipe'
      }
    }
  },
  {
    name: 'travel',
    path: '/travel',
    component: travel
  },
  {
    name: 'about',
    path: '/about',
    component: about
  }
]
