import axios from 'axios';

const DEEZER_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com';

export const search = query => axios.get('/search', {
    baseURL: DEEZER_BASE_URL,
    params: {
        q: query,
        //Habilitamos la respuesta a un máximo de 50
        limit: 50
    }
});


export const fetchUser = id => axios.get(`/artist/${id}`, {
    baseURL: DEEZER_BASE_URL
});
