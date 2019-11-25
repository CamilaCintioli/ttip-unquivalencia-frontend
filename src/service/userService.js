/* eslint-disable import/prefer-default-export */
import { has } from 'lodash';

export const saveUser = (state) => localStorage.setItem('userStore', JSON.stringify(state));

export const loadUser = () => JSON.parse(localStorage.getItem('userStore'));

export const isValid = () => loadUser() || false;

export const isAuthenticated = (user, history) => {
    if (history.location.pathname !== '/') { localStorage.setItem('location', history.location.pathname); }
    return has(user, 'token') || false;
};
export const logout = () => {
    localStorage.removeItem('userStore');
    window.location.reload();
};