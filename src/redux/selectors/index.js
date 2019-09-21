import { get } from 'lodash';

export const isSearchingLoading = (state) => get(state, 'search.isLoading');
export const fileResults = (state) => get(state, 'search.fileResult');
export const requestResult = (state) => get(state, 'search.requestResult');
export const isLoadingRequest = (state) => get(state, 'search.isLoadingRequest');


export const userResult = (state) => get(state, 'user.userResult.user');
export const userState = (state) => get(state, 'user.userResult');
export const isLoadingUser = (state) => get(state, 'user.isLoading');
