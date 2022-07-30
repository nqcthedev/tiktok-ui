import Following from '~/pages/Following';
import { HeaderOnly } from '~/components/Layouts';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// Layouts

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
