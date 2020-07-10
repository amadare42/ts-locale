import * as webpack from 'webpack';
import * as path from 'path';

export default {
    entry: './src/index.ts',
    target: 'web',
    mode: 'production',
    resolve: { extensions: ['.ts', '.d.ts'] },
    output: {
        filename: 'index.js',
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /.*\.ts$/,
            use: 'ts-loader',
            include: /src/,
            exclude: /node_modules/
        }]
    }
} as webpack.Configuration;
