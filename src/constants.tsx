export const API_KEY :string = 'k_xs8ccgba';
export const API_ENDPOINT :string = `https://imdb-api.com/API/AdvancedSearch/${API_KEY}?groups=top_250&count=250`;
export enum FILTER_COMPERATORS {
    CONTAINS = 'contains',
    EQUAL = '=',
    EQUAL_OR_BIGGER = '>=',
}
