import { combineReducers } from 'redux';
import {
  GET_UNIVERSITIES_COMPLETE, GET_CAREERS_COMPLETE, GET_YEAR_PLANS_COMPLETE, GET_SUBJECTS_COMPLETE, CREATE_SUBJECT_COMPLETE,
} from '../../consts/actionTypes';

const actionTypes = {
  fetchUniversitiesSuccess: GET_UNIVERSITIES_COMPLETE,
  fetchCareersSuccess: GET_CAREERS_COMPLETE,
  fetchYearsPlanSuccess: GET_YEAR_PLANS_COMPLETE,
  fetchSubjectsSuccess: GET_SUBJECTS_COMPLETE,
  createSubjectSuccess: CREATE_SUBJECT_COMPLETE,
};

function subjectByIdReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.fetchSubjectsSuccess: return {
      ...state,
      ...action.subjects.reduce((result, subject) => {
        result[subject.id] = subject;
        return result;
      }, {}),
    };
    case actionTypes.createSubjectSuccess: return {
      ...state,
      [action.subject.id]: action.subject,
    };
    default: return state;
  }
}

function universitiesByIdReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.fetchUniversitiesSuccess: return {
      ...state,
      ...action.universities.reduce((result, university) => {
        result[university] = university;
        return result;
      }, {}),
    };
    case actionTypes.createSubjectSuccess: return {
      ...state,
      [action.subject.university]: action.subject.university,
    };
    default: return state;
  }
}

function careersByUniversityReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.fetchCareersSuccess: return {
      ...state,
      [action.careers.university]: action.careers.careers,
    };
    case actionTypes.createSubjectSuccess: return {
      ...state,
      [action.subject.university]: Array.from(new Set(state[action.subject.university]).add(action.subject.career)),
    };
    default: return state;
  }
}

function yearPlansByUniversityAndCareer(state = {}, action) {
  switch (action.type) {
    case actionTypes.fetchYearsPlanSuccess: return {
      ...state,
      [`${action.years.university}-${action.years.career}`]: action.years.yearsPlan,
    };
    case actionTypes.createSubjectSuccess: return {
      ...state,
      [`${action.subject.university}-${action.subject.career}`]: 
      Array.from(new Set(state[`${action.subject.university}-${action.subject.career}`]).add(action.subject.yearPlan)),
    };
    default: return state;
  }
}

export default combineReducers({
  careers: careersByUniversityReducer,
  universities: universitiesByIdReducer,
  yearsPlan: yearPlansByUniversityAndCareer,
  subjects: subjectByIdReducer,
});
