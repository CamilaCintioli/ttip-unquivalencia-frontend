import ViewPrimary from '../ViewPrimary/ViewPrimary';
import NewFilePage from '../NewRequest/NewFilePage';
import VieweRequests from '../Request/ViewRequests';
import Home from '../Home/Home';
import User from '../UserView/User';
import NewRequestPage from '../NewRequest/NewRequest/NewRequestPage';
import UpdatePasswordForm from '../Dashboard/Navbar/UpdatePasswordForm';

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
