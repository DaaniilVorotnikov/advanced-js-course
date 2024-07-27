import path from 'path'
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';


export default (env: BuildEnv) => {
    
const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
}

const mode = env.mode || BuildMode.DEV;
const isDev = mode === BuildMode.DEV;
const PORT:number = env.port || 3000

const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
})
    return config
}