'use strict';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const config = {
  mode: 'development',
  output: {
    filename: 'script.js',
    path: __dirname + '/js'
  },
  devtool: 'source-map',
  performance:{
    hints: false
  },
  module:{
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: [
            //   ['@babel/preset-env']
            // ]
          }
        }
      }
    ]
  }
}
