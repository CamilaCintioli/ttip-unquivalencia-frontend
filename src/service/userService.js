/* eslint-disable import/prefer-default-export */

export const saveUser = (state) => {
  console.log('save');
  return localStorage.setItem('userStore', JSON.stringify(state));
};
export const loadUser = () => JSON.parse(localStorage.getItem('userStore')) || { user: {} };

export const isValid = () => localStorage.getItem('userStore') !== null;
