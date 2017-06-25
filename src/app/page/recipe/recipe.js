import recipeEvents from 'store/recipes/events'
import { mapGetters } from 'vuex'
import _ from 'lodash'
// import { TimelineMax, TweenMax, Power4 } from 'gsap'

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
    },

    ingredientsList () {
      const post = this.post

      return _.get(post, 'acf.ingredients')
    },

    information () {
      const post = this.post

      return _.get(post, 'acf.info')
    },

    grids () {
      return [].concat(this.post.acf.grids)
    }
  },

  mounted () {
    const { params } = this.$route

    this.$store.dispatch(recipeEvents.GET_POST_BY_SLUG, params)
  },

  methods: {
    enterSection (el, done) {
      // const tl = new TimelineMax({
      //   onComplete: done
      // })
      //
      // tl.set(el, {
      //   x: window.innerWidth,
      //   transformOrigin: '50% 50%'
      // })
      //
      // tl.to(el, 0.5, {
      //   x: 0,
      //   ease: Power4.easeOut
      // })
    },

    leaveSection (el, done) {
      // TweenMax.to(el, 1, {
      //   x: window.innerWidth,
      //   ease: Power4.easeOut,
      //   onComplete: done
      // })
    }
  }
}
