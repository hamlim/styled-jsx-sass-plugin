var nodeSass = require('node-sass')
module.exports = function(css, options) {
	return nodeSass.renderSync({ data: css }).css.toString()
}
