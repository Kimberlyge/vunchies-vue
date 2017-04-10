import navigation from 'component/navigation/navigation.vue'

/**
 * @name site-header component
 * @author  <>
 */
export default {
  name: 'site-header',

  components: {
    navigation
  }
  //
  // data () {
  //   return {
  //     items: [
  //       'travel',
  //       'about'
  //       // 'contact'
  //     ]
  //   }
  // },

  // methods: {
  //   getNavItemClass (item) {
  //     const { $style, $route } = this
  //     console.log($route)
  //
  //     return ($route.name === item) ? $style.navItemActive : $style.navItem
  //   },
  //
  //   onNavItemClick (name) {
  //     this.$router.push({
  //       name
  //     })
  //   }
  // }
}
