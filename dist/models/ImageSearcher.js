"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSearcher = void 0;
const dist_1 = require("search-filterer/dist");
const data_1 = require("../data");
class ImageSearcher {
    search(query) {
        return dist_1.objectSearch(query, ['name', 'tags'], data_1.imageData);
    }
}
exports.ImageSearcher = ImageSearcher;
//# sourceMappingURL=ImageSearcher.js.map