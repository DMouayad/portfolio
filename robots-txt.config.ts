
import type { RobotsTxtOptions } from 'astro-robots-txt';

const robotsConfig: RobotsTxtOptions = {
    policy: [
        {
            userAgent: '*',
            disallow: ['/works', '/studies', '/contact', '/about', '/certificates', '/blogs'],
        },
    ],
    sitemapBaseFileName: 'sitemap-index',
};

export default robotsConfig;