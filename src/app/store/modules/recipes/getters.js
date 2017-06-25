import _ from 'lodash'

/**
 * recipes getters
 */
export const posts = state => _.toArray(state.records)
// export const posts = state => category => _.toArray(state.records.category)
// export const getPostsByCategory = state => _.toArray(state.records)

// export const pages = state => _.toArray(state.records)

export const getPostBySlug = state => slug => state.records[slug]

// export const getPostsByCategory = state => category => state.records[category]
