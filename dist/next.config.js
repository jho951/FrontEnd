const nextConfig = {
    webpack(config) {
        const rules = config.module?.rules ?? [];
        // SVG 기본 로더 제외
        const fileLoaderRule = rules.find((rule) => typeof rule === 'object' &&
            rule !== null &&
            'test' in rule &&
            rule.test instanceof RegExp &&
            rule.test.test('.svg'));
        if (fileLoaderRule) {
            fileLoaderRule.exclude = /\.svg$/i;
        }
        // SVGR 적용
        rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};
export default nextConfig;
