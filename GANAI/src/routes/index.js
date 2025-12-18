import Home from '../pages/home.page';
import Spaces from '../pages/spaces.page';
import Exhibitions from '../pages/exhibitions.page';
import ExhibitionDetail from '../pages/ExhibitionDetail.jsx';
import Products from '../pages/products.pages';
import Introduce from '../pages//introduce.page';
import Contact from '../pages/contact.page';
import SpaceDetail from '../pages/SpaceDetail.jsx';
import config from '../config';

const PublicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.spaces, component: Spaces },
    { path: config.routes.spaceDetail, component: SpaceDetail },
    { path: config.routes.exhibitions, component: Exhibitions },
    { path: config.routes.exhibitionDetail, component: ExhibitionDetail },
    { path: config.routes.products, component: Products },
    { path: config.routes.introduce, component: Introduce },
    { path: config.routes.contact, component: Contact },
];

export default PublicRoutes;
