import { FILTER_COMPERATORS } from "../constants";

export const filterMovies = (movies :any, filters :any) => {
    const filtered =  movies.filter((movie :any) => {
        let isValid = true;
        filters.forEach((filter :any) => {
            if(!filter?.value) return;
            if(filter.comperator === FILTER_COMPERATORS.CONTAINS) {
                if(!movie[filter.name]?.toLowerCase().includes(filter.value?.toLowerCase())) {
                    isValid = false;
                }
            } else if(filter.comperator === FILTER_COMPERATORS.EQUAL) {
                if(movie[filter.name] !== filter.value) {
                    isValid = false;
                }
            } else if(filter.comperator === FILTER_COMPERATORS.EQUAL_OR_BIGGER) {
                if(Number(movie[filter.name]) < Number(filter.value)) {
                    isValid = false;
                }
            }
        })
        return isValid;
    });
    return filtered;
}