"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = getAllPosts;
var fs = require("node:fs");
var path = require("node:path");
var matter = require('gray-matter');
function getAllPosts() {
    var dir = path.join(process.cwd(), 'posts');
    var files = fs.readdirSync(dir);
    return files.map(function (filename) {
        var slug = filename.replace(/\.md$/, '');
        var fileContent = fs.readFileSync(path.join(dir, filename), 'utf8');
        var data = matter(fileContent).data;
        return {
            title: data.title,
            slug: slug,
            date: data.date,
            description: data.description || '',
        };
    });
}
