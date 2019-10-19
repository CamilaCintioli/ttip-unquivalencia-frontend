/* eslint-disable import/prefer-default-export */
import { has } from 'lodash';

export const saveUser = (state) => localStorage.setItem('userStore', JSON.stringify(state));

export const loadUser = () => JSON.parse(localStorage.getItem('userStore'));

export const isValid = () => loadUser() || false;

export const isAuthenticated = (user) => has(user, 'token') || false;

export const logout = () => {
  localStorage.clear();
  window.location.reload();
};
