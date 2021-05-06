"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const ImageSearcher_1 = require("./models/ImageSearcher");
const fs_1 = __importDefault(require("fs"));
describe('Simple Math Test', () => {
    const imSearcher = new ImageSearcher_1.ImageSearcher();
    it('should return snow mountain', () => {
        const res = imSearcher.search('snow');
        assert_1.default.equal(res[0].name, 'mountain2');
    });
    it('should return sandy beach', () => {
        const res = imSearcher.search('sand');
        console.log(fs_1.default.openSync(res[0].url, 'r'));
        assert_1.default.equal(res[0].name, 'beach1');
    });
});
//# sourceMappingURL=app.test.js.map