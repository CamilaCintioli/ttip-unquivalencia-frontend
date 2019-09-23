/* eslint-disable import/prefer-default-export */

export const saveUser = (state) => {
  console.log('save');
  localStorage.setItem('userStore', JSON.stringify(state));
};
export const loadUser = () => JSON.parse(localStorage.getItem('userStore'));

export const isValid = () => JSON.parse(localStorage.getItem('userStore')).email || false;
