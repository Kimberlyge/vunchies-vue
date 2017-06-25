/**
 * @name navigation component
 * @author  <>
 */

// import recipeEvents from 'store/recipes/events'
// import { mapGetters } from 'vuex'

export default {
  name: 'navigation',

  data () {
    return {
      // items: [
      //   'breakfast',
      //   'lunch',
      //   'dinner',
      //   'dessert',
      //   'travel',
      //   'about'
      // ]
      items: [
        {name: 'Breakfast', id: 1},
        {name: 'Lunch', id: 13},
        {name: 'Dinner', id: 14},
        {name: 'Dessert', id: 17}
      ]
    }
  },

  computed: {
    // ...mapGetters([
    //   'posts'
    // ])
  },

  mounted () {
    // const { params } = this.$route

    // this.$store.dispatch(recipeEvents.GET_POSTS_BY_CATEGORY)
  },

  methods: {
    getNavItemClass (item) {
      const { $style, $route } = this
      return ($route.name === item) ? $style.navItemActive : $style.navItem
    },

    filterCategory (post) {
      console.log(post)
      this.$router.push({
        name: 'category',
        params: {
          category: post
        }
      })
    },

    onNavItemClick (name) {
      console.log('click', name)
      this.$router.push({
        name
      })
    }
  }
}
