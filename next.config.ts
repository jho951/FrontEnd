import path from 'path';
import type { NextConfig } from 'next';
import type { Configuration, RuleSetRule } from 'webpack';

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_TITLE: process.env.NEXT_PUBLIC_TITLE,
    NEXT_PUBLIC_DESCRIPTION: process.env.NEXT_PUBLIC_DESCRIPTION,
    NEXT_PUBLIC_COPY: process.env.NEXT_PUBLIC_COPY,
    NEXT_PUBLIC_SITE: process.env.NEXT_PUBLIC_SITE,
    NEXT_PUBLIC_ADSENSE_CLIENT_ID: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
    NEXT_PUBLIC_ADSENSE_SLOT_ID: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID,
  },

  webpack(config: Configuration) {
    const rules = config.module?.rules ?? [];

    // 1. 기존 svg 로더에서 제외
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

    // 2. svgr 로더 추가
    rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    // ✅ 3. Webpack alias 추가
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname),
    };

    return config;
  },

  compress: true,

  allowedDevOrigins: ['172.30.*.*', 'local-origin.dev', '*.local-origin.dev'],
};

export default nextConfig;
