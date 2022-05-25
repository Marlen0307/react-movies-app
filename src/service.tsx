import { API_ENDPOINT } from "./constants";

export const fetchMovies = async ()=>{
    return fetch(API_ENDPOINT)
		.then((response) => response.json())
		.then(function (data) {
            debugger;
			return data.results;
		})
		.catch(function (error) {
			return Promise.reject(error);
		});
}