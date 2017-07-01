var nodeSass = require('node-sass')
var fs = require('fs')
module.exports = function(css, options) {
	var contents = nodeSass.renderSync({
		data: css,
		importer: function(url, prev, done) {
			var file = fs.readFileSync('./srca/' + url)
			if (!file) {
				return ''
			}
			return { contents: file.toString() }
		},
	})
	return contents.css.toString()
}
