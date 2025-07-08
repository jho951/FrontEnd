"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRssFeed = generateRssFeed;
var fs = require("node:fs");
var path = require("node:path");
var RSS = require('rss');
function generateRssFeed(posts) {
    var siteUrl = 'https://yourdomain.com';
    var feed = new RSS({
        title: 'Your Blog Title',
        description: 'Latest posts from my blog',
        feed_url: "".concat(siteUrl, "/feed.xml"),
        site_url: siteUrl,
        language: 'en',
        copyright: "All rights reserved ".concat(new Date().getFullYear(), ", Your Name"),
        pubDate: new Date(),
    });
    posts.forEach(function (post) {
        feed.item({
            title: post.title,
            url: "".concat(siteUrl, "/posts/").concat(post.slug),
            guid: "".concat(siteUrl, "/posts/").concat(post.slug),
            description: post.description || '',
            date: new Date(post.date),
        });
    });
    var outputPath = path.join(process.cwd(), 'public', 'feed.xml');
    fs.writeFileSync(outputPath, feed.xml({ indent: true }));
}
