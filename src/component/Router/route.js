import ViewPrimary from '../ViewPrimary';
import NewFilePage from '../NewRequest/NewFilePage';
import VieweRequests from '../ViewRequests';
import Home from '../Home';
import User from '../User';
import NewRequestForm from '../NewRequest/NewRequestForm';


const routes = [
  { path: '/home', _component: Home },
  { path: '/expediente', _component: ViewPrimary },
  { path: '/file/:fileId/solicitud/:solicitudId', _component: VieweRequests },
  { path: '/new/solicitud', _component: NewFilePage },
  { path: '/usuarios', _component: User },
  { path: '/file/:fileId/request/new', _component: NewRequestForm }
];

export default routes;
