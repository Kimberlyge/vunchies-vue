/**
 * @name navigation component
 * @author  <>
 */
// import { TimelineMax, Power4, Elastic } from 'gsap'
// import _ from 'lodash'
// import routes from 'src/app/routes'

export default {
  name: 'navigation',

  data () {
    return {
      items: [
        'travel',
        'about'
      ]
    }
  },

  methods: {
    getNavItemClass (item) {
      const { $style, $route } = this
      return ($route.name === item) ? $style.navItemActive : $style.navItem
    },

    onNavItemClick (name) {
      this.$router.push({
        name
      })
    }
  }
}
