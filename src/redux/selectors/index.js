import { get } from 'lodash';

export const isSearchingLoading = (state) => get(state, 'search.isLoading');
export const fileResults = (state) => get(state, 'search.fileResult');
export const requestResult = (state) => get(state, 'search.requestResult');
export const isLoadingRequest = (state) => get(state, 'search.isLoadingRequest');
export const fileResult = (state) => get(state, 'search.file');


export const userResult = (state) => get(state, 'user.userResult');
export const userState = (state) => get(state, 'user.userResult');
export const isLoadingUser = (state) => get(state, 'user.isLoading');
export const usersResults = (state) => get(state, 'user.users');
export const userError = (state) => get(state, 'user.userError');

export const matchs = (state) => get(state, 'match.matchResult');
