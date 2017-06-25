import events from './events'
import * as recipes from 'src/app/proxy/recipes'

/**
 * recipes actions
 */
export default {

  // async [events.GET_ALL_PAGES] ({ commit }) {
  //   try {
  //     const result = await recipes.getRecipes()
  //
  //     commit(events.GET_ALL_PAGES_SUCCESS, result)
  //   } catch (error) {
  //     commit(events.GET_ALL_PAGES_FAILURE, error)
  //   }
  // },

  async [events.GET_ALL_POSTS] ({ commit }) {
    try {
      const result = await recipes.getRecipes()

      commit(events.GET_ALL_POSTS_SUCCESS, result)
    } catch (error) {
      commit(events.GET_ALL_POSTS_FAILURE, error)
    }
  },

  async [events.GET_POST_BY_SLUG] ({ commit }, payload) {
    const { slug } = payload

    try {
      const result = await recipes.getRecipyBySlug(slug)

      commit(events.GET_POST_BY_SLUG_SUCCESS, result)
    } catch (error) {
      commit(events.GET_POST_BY_SLUG_FAILURE, error)
    }
  }

  // async [events.GET_POSTS_BY_CATEGORY] ({ commit }, payload) {
  //   const { category } = payload
  //
  //   try {
  //     const result = await recipes.getPostsByCategory(category)
  //
  //     commit(events.GET_POSTS_BY_CATEGORY_SUCCESS, result)
  //   } catch (error) {
  //     commit(events.GET_POSTS_BY_CATEGORY_FAILURE, error)
  //   }
  // }

}
