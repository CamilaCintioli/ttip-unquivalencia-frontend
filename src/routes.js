import SearchFile from './component/SearchFile/SearchFile';
import NewFilePage from './component/NewRequest/NewFilePage';
import VieweRequests from './component/ViewRequest/ViewRequests';
import Home from './component/Home/Home';
import User from './component/UserView/User';
import NewRequestPage from './component/NewRequest/NewRequest/NewRequestPage';
import UpdatePasswordForm from './component/Dashboard/Navbar/UpdatePasswordForm';
import SearchRequest from './component/SearchRequest/SearchRequest';


const ROUTES = [
    { path: '/home', _component: Home },
    { path: '/expediente', _component: SearchFile },
    { path: '/solicitud/:requestId/materia/:subjectId', _component: VieweRequests },
    { path: '/crear/expediente', _component: NewFilePage },
    { path: '/usuarios', _component: User },
    { path: '/file/:fileId/request/new', _component: NewRequestPage },
    { path: '/password', _component: UpdatePasswordForm },
    { path: '/solicitudes', _component: SearchRequest },

];

export default ROUTES;