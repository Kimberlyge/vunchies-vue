/**
 * @name travel page
 * @author  <>
 */

import { TweenLite, Power4 } from 'gsap'

export default {
  name: 'travel',

  methods: {
    beforeEnter (el) {
      TweenLite.from(el, 1,
        { autoAlpha: 0 }
      )
    },

    enterSection (el) {
      // TweenLite.fromTo(el, 1,
      //   { xPercent: -100 },
      //   { xPercent: 0, ease: Power4.easeOut }
      // )
      TweenLite.to(el, 1,
        { autoAlpha: 0.9, ease: Power4.easeOut }
      )
    },

    leaveSection (el) {
      // TweenLite.to(el, 1, { xPercent: 100, ease: Power4.easeOut })
    }
  }
}
