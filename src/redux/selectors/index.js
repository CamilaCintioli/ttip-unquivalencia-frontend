import { get } from 'lodash';

export const isSearchingLoading = (state) => get(state, 'search.isLoading');
export const fileResults = (state) => get(state, 'search.fileResult');
export const requestResult = (state) => get(state, 'search.requestResult');


export const isLoadingRequest = (state) => get(state, 'search.isLoadingRequest');
