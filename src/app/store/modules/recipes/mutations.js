import Vue from 'vue'
import events from './events'

/**
 * recipes mutations
 */
export default {
  // [events.GET_ALL_PAGES_SUCCESS] (state, payload) {
  //   payload.forEach(record => {
  //     Vue.set(state.records, record.slug, record)
  //   })
  // },

  [events.GET_ALL_POSTS_SUCCESS] (state, payload) {
    payload.forEach(record => {
      Vue.set(state.records, record.slug, record)
    })
  },

  [events.GET_POST_BY_SLUG_SUCCESS] (state, payload) {
    Vue.set(state.records, payload.slug, payload)
  }

  // [events.GET_POSTS_BY_CATEGORY_SUCCESS] (state, payload) {
  //   payload.forEach(record => {
  //     Vue.set(state.records, record.category, record)
  //   })
  // }
}
