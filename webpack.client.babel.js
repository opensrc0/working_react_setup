import path from 'path';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import DashboardPlugin from 'webpack-dashboard/plugin';

// const __APP_ENV__ = process.env.APP_ENV;
const __APP_PUBLIC_PATH__ = process.env.APP_PUBLIC_PATH;
const __BUILD_DIR__ = path.resolve(__dirname, './build/client');
const __APP_DIR__ = path.resolve(__dirname, './application/client');
const isProd = process.env.NODE_ENV === 'production';

const config = {
	entry: {
		main: __APP_DIR__ + '/client.js',
	},

	devtool: 'inline-source-map',
	mode: 'development',

	output: {
		path: __BUILD_DIR__,
		publicPath: __APP_PUBLIC_PATH__,
		filename: isProd ? 'js/[name].[hash].js' : 'js/[name].js',
		chunkFilename: isProd ? 'js/[name].[hash].js' : 'js/[name].js',
	},

	module: {
		rules: [
		  // Transpile .js file es6 to es5 and exclude node_module, we need to include that other wise error will come
		  { test: /\.js$/, exclude: /node_modules/, use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }] },
		  { test: /\.(gif|png|jpe?g|svg|ico)$/i, use: [{ loader: 'file-loader', options: { name: 'images/[name].[ext]' } }] },
		  { test: /\.css$/, use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'] },
		  { test: /\.(woff(2)?|ttf|otf|eot)(\?[a-z0-9=&.]+)?$/, use: [{ loader: 'url-loader', options: { limit: 1000, name: 'fonts/[name].[ext]' } }] },
		 
		],
	},

	devServer: {
		contentBase: __BUILD_DIR__,
		headers: { 'Access-Control-Allow-Origin': '*' },
	},

	optimization: {
		splitChunks: {
		  cacheGroups: {
			commons: {
			  test: /[\\/]node_modules[\\/]/,
			  name: 'vendor',
			  chunks: 'all'
			}
		  }
		}
	},
	
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new CleanWebpackPlugin(['./build/client']),
		new webpack.DefinePlugin({
			__BROWSER__: false,
		}),
		new AssetsPlugin({
			filename: 'assetsManifest.json',
			path: path.resolve('./build/client'),
			prettyPrint: true,
		}),
		new webpack.NamedModulesPlugin(),
	],
	
};

module.exports = config;