import ViewPrimary from '../ViewPrimary';
import NewFilePage from '../NewRequest/NewFilePage';
import VieweRequests from '../ViewRequests';
import Home from '../Home';
import User from '../User';
import NewRequestPage from '../NewRequest/NewRequestPage';


const routes = [
  { path: '/home', _component: Home },
  { path: '/expediente', _component: ViewPrimary },
  { path: '/file/:fileId/solicitud/:requestId/:index', _component: VieweRequests },
  { path: '/new/solicitud', _component: NewFilePage },
  { path: '/usuarios', _component: User },
  { path: '/file/:fileId/request/new', _component: NewRequestPage }
];

export default routes;
