/**
 * Module Dependencies
 */
var cssnext = require("cssnext")

/**
 * Export cssnext plugin
 *
 * @param {Object} options
 * @return {Function}
 */
module.exports = function duoCssnextPlugin(options) {
  options = options || {}

  return function duoCssnext(file) {
    if (file.type !== "css") {
      return
    }

    options.from = file.path
    file.src = cssnext(file.src, options)
  }
}
