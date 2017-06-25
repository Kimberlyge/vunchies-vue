const utils = require('./utils')
const fontList = require('./font')

const colors = {
  'black': '#000',
  'white': '#fff',
  'darkgrey': 'rgb(76, 76, 76)',
  'gray': '#D5D5D5',
  'lightgray': '#f7f7f7',
  'color-primary': '#ffc440',
  'bg-color': '#f7f7f7',
  'grey': 'hsl(0, 0%, 62%)',
  'darkgrey': 'hsl(0, 0%, 30%)',
  'text-color': '#000'
}

const paths = {
  'common': utils.getComposeFile('common.css'),
  'page': utils.getComposeFile('layout/page.css'),
  'grid': utils.getComposeFile('layout/grid.css'),
  'visibility': utils.getComposeFile('layout/visibility.css'),
  'button': utils.getComposeFile('ui/button.css'),
  'list': utils.getComposeFile('ui/list.css'),
  'icon': utils.getComposeFile('ui/icon.css'),
  'typography': utils.getComposeFile('type/typography.css'),
  'heading': utils.getComposeFile('type/heading.css'),
  'type': utils.getComposeFile('type/type.css')
}

const sizes = {
  'base-font-size': '16px',
  'site-width': '736px'
}

const fonts = {
  fonts: fontList
}

const mediaQueries = require('./media-queries')

module.exports = Object.assign({}, colors, paths, sizes, mediaQueries, fonts)
