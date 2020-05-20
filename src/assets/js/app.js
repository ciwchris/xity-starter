const Turbolinks = require('turbolinks')
Turbolinks.start()
/**
 * Init Turbolinks within the site
 */
Turbolinks.start()

window.addEventListener('turbolinks:load', () => {
  console.log('**turbolinks:load in posts.js**')
})
