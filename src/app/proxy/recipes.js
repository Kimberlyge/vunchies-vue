import axios from 'axios'

const baseUrl = 'http://vunchies.com/wp-json/wp/v2'

export function getRecipes () {
  return axios.get(`${baseUrl}/posts`).then(result => result.data)
}

export function getRecipyBySlug (slug) {
  return axios.get(`${baseUrl}/posts?slug=${slug}`).then(result => result.data[0])
}

// export function getPostsByCategory (category) {
//   return axios.get(`${baseUrl}/posts?filter[cat]=${category}`).then(result => result.data)
// }
