import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import webpackDevServer from 'webpack-dev-server';

interface Environment {
  apiBaseURL: string;
  port: number;
}

const devServer: (port: number) => webpackDevServer.Configuration = (
  port: number
) => {
  return {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization'
    }
  };
};

export function config(env: Environment) {
  const config: webpack.Configuration = {
    devServer: devServer(env.port || 9000),
    devtool: 'inline-source-map',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.jpg$/i,
          use: ['babel-loader']
        }
      ]
    },
    entry: './src/index.tsx',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'cieclarke.com',
        template: 'src/templates/index.html'
      }),
      new DefinePlugin({
        __API_BASE_URL__: JSON.stringify(env.apiBaseURL)
      })
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    }
  };
  return config;
}
export default config;
