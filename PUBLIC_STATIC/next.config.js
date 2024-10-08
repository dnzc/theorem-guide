const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    webpack: (config) => {
        config.infrastructureLogging = {
            level: "error",
        };

        return config;
    },
};

module.exports = withBundleAnalyzer(config);