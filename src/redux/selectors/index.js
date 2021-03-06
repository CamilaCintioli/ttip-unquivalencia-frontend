import { get, has } from 'lodash';

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
export const matchsError = (state) => {
  const error = get(state, 'match.error');
  return !(has(error, 'status') && error.status === 401);
};

export const stepper = (state) => get(state, 'stepper.stepperResult');
export const userRole = (state) => get(state, 'user.userResult.user.role');

export const passwordError = (state) => get(state, 'user.passwordError');

export const dataHome = (state) => get(state, 'home.homeResult');
export const universities = (state) => get(state, 'subject.universities');
export const careers = (state) => get(state, 'subject.careers');
export const yearPlans = (state) => get(state, 'subject.yearsPlan');

export const subjects = (state, university, career, year) => {
  const subjectsState = Object.values(get(state, 'subject.subjects'));
  return subjectsState.filter((subject) => subject.university === university && subject.career === career
        && subject.yearPlan === year);
};

export const subjectById = (state, subjectId) => get(state, 'subject.subjects')[subjectId];

export const files = (state) => get(state, 'file.fileResult');
export const totalPageFile = (state) => get(state, 'file.totalPageFile');
export const getUserName = (state) => `${get(state, 'user.userResult.user.name')} ${get(state, 'user.userResult.user.lastName')}`;
