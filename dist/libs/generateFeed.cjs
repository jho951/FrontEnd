"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRssFeed = generateRssFeed;
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const rss_1 = __importDefault(require("rss"));
function generateRssFeed(posts) {
    const siteUrl = 'https://yourdomain.com';
    const feed = new rss_1.default({
        title: 'Your Blog Title',
        description: 'Latest posts from my blog',
        feed_url: `${siteUrl}/feed.xml`,
        site_url: siteUrl,
        language: 'en',
        copyright: `All rights reserved ${new Date().getFullYear()}, Your Name`,
        pubDate: new Date(),
    });
    posts.forEach(post => {
        feed.item({
            title: post.title,
            url: `${siteUrl}/posts/${post.slug}`,
            guid: `${siteUrl}/posts/${post.slug}`,
            description: post.description || '',
            date: new Date(post.date),
        });
    });
    const outputPath = path.join(process.cwd(), 'public', 'feed.xml');
    fs.writeFileSync(outputPath, feed.xml({ indent: true }));
}
