import recipeEvents from 'store/recipes/events'
import { mapGetters } from 'vuex'

/**
 * @name overview component
 * @author  <>
 */

export default {
  name: 'overview',

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
