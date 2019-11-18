import { ADMIN, PROFESSOR, USER } from '../../consts/role';

export const isAdmin = (userRole) => (userRole === ADMIN);

export const isProfessor = (userRole) => (userRole === PROFESSOR);

export const isAdminOrUser = (userRole) => userRole === ADMIN || userRole === USER;

export const isUser = (userRole) => userRole === USER;
