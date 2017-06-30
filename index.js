var nodeSass = require('node-sass')
module.exports = function(css, options) {
	return nodeSass.render({ data: css })
}
