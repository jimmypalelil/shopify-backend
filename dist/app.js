"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ImageSearcher_1 = require("./models/ImageSearcher");
const express = require('express');
const app = express();
const port = 3000;
const imSearcher = new ImageSearcher_1.ImageSearcher();
app.use('/static', express.static('public'));
app.get('/search', (req, res) => {
    let imageLists = '<div style="display: grid; grid-template-columns: repeat(3, 1fr)">';
    const searchResult = imSearcher.search(req.query.q);
    for (let i in searchResult) {
        console.log(searchResult[i]);
        imageLists += '<img style="padding: 20px; border-radius: 7px; width: 300px; height: auto" ' +
            'src="http://localhost:3000/static/' + searchResult[i].url + '">';
    }
    imageLists += '</ul></div>';
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(imageLists);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map