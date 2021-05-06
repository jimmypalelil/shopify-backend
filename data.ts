
/*
 In Production/real case scenario, this data would be hosted on a cloud database (preferably NoSQL database like
 MongoDB/DynamoDB)
 */

export type ImageData = {
    name: string;
    url: string;
    tags: string[];
}

export const imageData: {name: string, url: string, tags: string[]}[] = [
    {
        name: 'mountain1',
        url: 'images/mountain1.jpg',
        tags: ['mountain']
    },
    {
        name: 'mountain2',
        url: 'images/mountain2.jpg',
        tags: ['mountain', 'snow']
    },
    {
        name: 'beach1',
        url: 'images/beach1.jpg',
        tags: ['beach', 'sand']
    },
]
