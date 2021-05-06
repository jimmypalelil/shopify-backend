import {ImageSearcher} from "./models/ImageSearcher";

const express = require('express')
const app = express()
const port = 3000

const imSearcher = new ImageSearcher();

app.use('/static', express.static('public'))

/*
    @GET: Search
    Searches for the images with the given query and returns an html element with the search results as
    image elements within them
 */
app.get('/search', (req, res) => {
    let imageLists = '<div style="display: grid; grid-template-columns: repeat(3, 1fr)">';

    const searchResult = imSearcher.search(req.query.q);
    for (let i in searchResult) {
        console.log(searchResult[i]);
        imageLists += '<img style="padding: 20px; border-radius: 7px; width: 300px; height: 400px" ' +
            'src="http://localhost:3000/static/' + searchResult[i].url + '">';

    }
    imageLists += '</ul></div>'

    res.writeHead(200, {'Content-type':'text/html'});
    res.end(imageLists);
})

app.listen(port, () => {
    console.log(`Shopify Backend Challenge at http://localhost:${port}`)
})
