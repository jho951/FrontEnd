import type { NextConfig } from 'next';
import type { Configuration, RuleSetRule } from 'webpack';

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    const rules = config.module?.rules ?? [];

    const fileLoaderRule = rules.find(
      (rule): rule is RuleSetRule =>
        typeof rule === 'object' &&
        rule !== null &&
        'test' in rule &&
        rule.test instanceof RegExp &&
        rule.test.test('.svg'),
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  allowedDevOrigins: ['172.30.*.*', 'local-origin.dev', '*.local-origin.dev'],
};

export default nextConfig;
