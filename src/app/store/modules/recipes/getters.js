import _ from 'lodash'

/**
 * recipes getters
 */
export const posts = state => _.toArray(state.records)

// export const pages = state => _.toArray(state.records)

export const getPostBySlug = state => slug => state.records[slug]
