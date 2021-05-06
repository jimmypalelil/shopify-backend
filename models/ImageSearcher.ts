import {objectSearch} from "search-filterer/dist";
import {ImageData, imageData} from '../data';


/**
 * A Class meant to search for images with the given query
 */
export class ImageSearcher {

    search(query: string): ImageData[] {
        return objectSearch(
            query,
            ['name', 'tags'],
            imageData
        ) as ImageData[]
    }
}
