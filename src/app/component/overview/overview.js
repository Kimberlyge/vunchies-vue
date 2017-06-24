import recipeEvents from 'store/recipes/events'
import { mapGetters } from 'vuex'

/**
 * @name overview component
 * @author  <>
 */

export default {
  name: 'overview',

  data () {
    return {
      categories: [
        {name: 'Breakfast', id: 1},
        {name: 'Dinner', id: 14},
        {name: 'Dessert', id: 17},
        {name: 'Lunch', id: 13},
        {name: 'Salad', id: 18},
        {name: 'Sauce / Dip / Spread', id: 23},
        {name: 'Sidedish', id: 34},
        {name: 'Snack', id: 33},
        {name: 'Smoothie', id: 15},
        {name: 'Thai', id: 20},
        {name: 'Middle-Eastern', id: 22}
      ]
    }
  },

  computed: {
    ...mapGetters([
      'posts'
    ]),

    category (id) {
      return id
    }
  },

  mounted () {
    this.$store.dispatch(recipeEvents.GET_ALL_POSTS)
  },

  methods: {
    goToDetail (post) {
      this.$router.push({
        name: 'recipe',
        params: {
          slug: post.slug
        }
      })
    }
  }
}
