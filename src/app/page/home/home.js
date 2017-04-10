// import { TweenLite } from 'gsap'
// import carousel from 'component/carousel/carousel.vue'
import overview from 'component/overview/overview.vue'
// import fullscreen from 'component/fullscreen/fullscreen.vue'

/**
 * @name home page
 */
export default {
  name: 'home',

  components: {
    overview
  }

  // watch: {
  //   $route (to, from) {
  //     const { name, meta } = to
  //     const ref = [meta.section.name, name].join('-')
  //     const section = this.$refs[ref]
  //
  //     if (!section) {
  //       return
  //     }
  //
  //     const page = [document.body, document.documentElement]
  //
  //     console.log(ref, section, section.$el)
  //
  //     TweenLite.to(page, 0.5, {
  //       scrollTop: section.$el.offsetTop
  //     })
  //   }
  // },
  //
  // mounted () {
  //   window.addEventListener('scroll', this.onScroll, false)
  // },
  //
  // methods: {
  //   onScroll (event) {
  //     // const posY = window.offsetTop
  //   }
  // }

}
