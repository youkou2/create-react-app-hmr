const rewire = require('react-app-rewire-hot-loader');

module.exports = {
    webpack: function (config, env) {
        config = rewire(config, env);

        config.resolve.alias = {
            ...config.resolve.alias,
            'react-dom': '@hot-loader/react-dom'
        }

        //console.log(config);
        return config;
    },
    devServer: function (configFunction) {
        // Return the replacement function for create-react-app to use to generate the Webpack
        // Development Server config. "configFunction" is the function that would normally have
        // been used to generate the Webpack Development server config - you can use it to create
        // a starting configuration to then modify instead of having to create a config from scratch.
        return function (proxy, allowedHost) {
            // Create the default config by calling configFunction with the proxy/allowedHost parameters
            const config = configFunction(proxy, allowedHost);
            config.hotOnly = true;

            //console.log(config);


            // Return your customised Webpack Development Server config.
            return config;
        };
    }
}