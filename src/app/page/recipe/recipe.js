import recipeEvents from 'store/recipes/events'
import { mapGetters } from 'vuex'
import _ from 'lodash'
import { TweenLite, Power4 } from 'gsap'

/**
 * @name recipe page
 * @author  <>
 */
export default {
  name: 'recipe',

  computed: {
    ...mapGetters([
      'getPostBySlug'
    ]),

    post () {
      const { slug } = this.$route.params

      return this.getPostBySlug(slug)
    },

    title () {
      const post = this.post

      return _.get(post, 'title.rendered')
    },

    cover () {
      const post = this.post

      return _.get(post, 'acf.cover.sizes.large')
    }
  },

  mounted () {
    const { params } = this.$route

    this.$store.dispatch(recipeEvents.GET_POST_BY_SLUG, params)
  },

  methods: {
    enterSection (el) {
      TweenLite.fromTo(el, 10,
        { YPercent: -100 },
        { yPercent: 0, ease: Power4.easeOut }
      )
    },

    leaveSection (el) {
      // TweenLite.to(el, 1, { x: 100, ease: Power4.easeOut })
    }
  }
}
