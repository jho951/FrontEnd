"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateFeed_1 = require("./generateFeed");
var post_1 = require("./post");
var posts = (0, post_1.getAllPosts)();
if (posts.length === 0) {
    console.log('No posts found. Skipping RSS generation.');
    process.exit(0);
}
(0, generateFeed_1.generateRssFeed)(posts);
