require('dotenv').config();

const config = {
    webpack: (config) => {
        return {
            ...config,
            ...{
                module: {
                    rules: [
                        ...config.module.rules,
                        {
                            test: /\.(woff2|woff|eot|svg|ttf)$/,
                            use: [
                                {
                                    loader: 'file-loader',
                                    options: {
                                        name: 'static/fonts/[name].[ext]'
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        };
    },
    publicRuntimeConfig: {
        FRONTPAGE_STORIES_API_ENDPOINT: process.env.FRONTPAGE_STORIES_API_ENDPOINT
    }
};

module.exports = config;
