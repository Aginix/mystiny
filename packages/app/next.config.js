/* eslint-disable */
const withPlugins = require('next-compose-plugins');
const withAnalyze = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = withPlugins([[withAnalyze]], nextConfig);
