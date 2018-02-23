import Home from './views/home/Home.jsx';
import About from './views/about/About.jsx';



const routes = {
    routes: [
        path: '/', component: Home, exact: true, title: 'Home',
        path: '/', component: About, exact: true, title: 'About',
    ]



}

export default routes;
