import ViewPrimary from '../ViewPrimary';
import NewFilePage from '../NewRequest/NewFilePage';
import RequestPage from '../Request/RequestPage';
import Home from '../Home';
import User from '../User';


const routes = [
  { path: '/home', _component: Home },
  { path: '/expediente', _component: ViewPrimary },
  { path: '/solicitud/:solicitudId', _component: RequestPage },
  { path: '/new/solicitud', _component: NewFilePage },
  { path: '/usuarios', _component: User },
];

export default routes;
