import axios from 'axios';

const apiKey = `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`;

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: apiKey,
  },
});

//'Client-ID 9Zm9akN6jxQsdfsdfsdfsdfggsg'
