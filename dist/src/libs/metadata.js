export const siteMetadata = {
    title: {
        default: 'My Skill Blog',
        template: '%s | My Skill Blog',
    },
    description: 'my skill blog',
    metadataBase: new URL('https://yourdomain.com'),
    openGraph: {
        title: 'My Skill Blog',
        description: 'my skill blog',
        type: 'website',
        url: 'https://yourdomain.com',
        siteName: 'My Skill Blog',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'My Skill Blog',
        description: 'my skill blog',
    },
    alternates: {
        canonical: 'https://yourdomain.com',
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
        },
    },
};
