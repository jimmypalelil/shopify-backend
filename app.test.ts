import assert from 'assert';
import {ImageSearcher} from "./models/ImageSearcher";
import fs from 'fs';

describe('Testing ImageSearcher Class', () => {
    const imSearcher = new ImageSearcher();

    it('testing tag search: should return snow mountain', () => {
        const res = imSearcher.search('snow');
        assert.strictEqual(res[0].name, 'mountain2');
    });

    it('testing tag search: should return sandy beach', () => {
        const res = imSearcher.search('sand');
        assert.strictEqual(res[0].name, 'beach1');
    });

    it('should return 2 results', () => {
        const res = imSearcher.search('mountain');
        assert.strictEqual(res.length, 2);
    });
});
