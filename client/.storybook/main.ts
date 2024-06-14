import type {StorybookConfig} from "@storybook/react-webpack5";
import path from "path";
import webpack from "webpack";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
    /** Expose public folder to storybook as static */
    staticDirs: ["../public"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-styling-webpack",
        'storybook-addon-remix-react-router',
        {
            name: "@storybook/addon-postcss",
            options: {
                postcssLoaderOptions: {
                    implementation: require("postcss"),
                },
            },
        },
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    webpackFinal: async (config) => {
        config.resolve = {
            extensions: ['.ts', '.tsx', '.js'],
            preferAbsolute: true,
            modules: [path.resolve(__dirname, '..', 'node_modules')],
            mainFiles: ['index'],
            alias: {'@': path.resolve(__dirname, '..', 'src')}
        }

        //@ts-ignore
        config?.module?.rules = config?.module?.rules.map(
            //@ts-ignore
            (rule: webpack.RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return {...rule, exclude: /\.svg$/i};
                }
                return rule;
            },
        );

        //@ts-ignore
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        native: false,
                    },
                },
            ],
            issuer: /\.[jt]sx?$/,
        })

        // SASS + Tailwdind CSS
        //@ts-ignore
        config.module.rules.push({
            test: /\.s(a|c)ss$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1, // We always need to apply postcss-loader before css-loader
                        modules: {
                            auto: /\.module\.scss$/, // true
                            localIdentName: "[name]__[local]--[hash:base64:5]",
                        },
                    },
                },
                {
                    loader: "postcss-loader", // required for tailwind
                    options: {
                        implementation: require("postcss"), // postcss 8
                        postcssOptions: {
                            config: path.resolve(__dirname, "../postcss.config.cjs"),
                        },
                    },
                },
                {
                    loader: "sass-loader",
                    options: {
                        // sourceMap: true,
                        implementation: require("sass"), // dart sass
                    },
                },
            ],
        });

        return config;
    },
};

export default config