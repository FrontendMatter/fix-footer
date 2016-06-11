var path = require('path')
var WebpackConfig = require('themekit-webpack-config')
var config = new WebpackConfig()
	.withStandaloneEntry('fix-footer')
	.withLibrary('fixFooter')
	.webpack({
		sassLoader: {
			importer: require('sass-importer-npm')
		},
		sassImportLoader: {
			base: './src/_variables.scss'
		}
	})
	.webpack({
		externals: [{
			'dom-factory': {
				root: 'domFactory',
				commonjs2: 'dom-factory',
				commonjs: 'dom-factory',
				amd: 'dom-factory'
			}
		}]
	})
	.use('extract')

module.exports = config