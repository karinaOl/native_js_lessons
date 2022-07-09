import axios from 'axios';

const key = 'bfe1444b';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};

const axiosInstance = axios.create(configOMB);

type MovieType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

type APIResponseDataType = {
    Response: string
    Search: MovieType[]
    totalResults: string
}

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get<APIResponseDataType>(`?apikey=${key}&s=${title}`)
            .then(response => response.data)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get<APIResponseDataType>(`?apikey=${key}&s=${title}&type=${type}`)
            .then(response => response.data)
    }
};


export default API;
