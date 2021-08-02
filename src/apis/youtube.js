import axios from 'axios';

const KEY = 'AIzaSyAuGAongQ6_WXOayG7QGCsYw0cBNobDAms';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});
