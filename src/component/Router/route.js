import ViewPrimary from '../ViewPrimary';
import NewFilePage from '../NewRequest/NewFilePage';
import VieweRequests from '../ViewRequests';
import Home from '../Home';
import User from '../User';
import NewRequestPage from '../NewRequest/NewRequestPage';
import UpdatePasswordForm from '../UpdatePasswordForm';

const routes = [
  { path: '/home', _component: Home },
  { path: '/expediente', _component: ViewPrimary },
  { path: '/solicitud/:requestId/materia/:subjectId', _component: VieweRequests },
  { path: '/new/solicitud', _component: NewFilePage },
  { path: '/usuarios', _component: User },
  { path: '/file/:fileId/request/new', _component: NewRequestPage },
  { path: '/password', _component: UpdatePasswordForm}

];

export default routes;
