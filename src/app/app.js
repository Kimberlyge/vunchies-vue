import siteHeader from 'component/site-header/site-header.vue'
import siteFooter from 'component/footer/footer.vue'
import { TimelineMax, TweenMax, Power4 } from 'gsap'

export default {
  components: {
    siteHeader,
    siteFooter
  },

  mounted () {
  },

  methods: {
    enterSection (el, done) {
      const tl = new TimelineMax({
        onComplete: done
      })

      tl.set(el, {
        x: -window.innerWidth,
        transformOrigin: '50% 50%'
      })

      tl.to(el, 0.5, {
        x: 0,
        ease: Power4.easeOut
      })
    },

    leaveSection (el, done) {
      TweenMax.to(el, 1, {
        x: -window.innerWidth,
        ease: Power4.easeOut,
        onComplete: done
      })
    }
  }
}
