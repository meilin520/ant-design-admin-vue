import lazyLoading from '@/libs/lazyLoading';

// 基础页面
import BaseLayout from '@/layouts/BaseLayout/BaseLayout.vue';
import MainLayout from '@/layouts/MainLayout/MainLayout.vue';

// 内容页面
const Home = lazyLoading('Home');
const VButton = lazyLoading('VButton');

const routes = [
    {
        path: '/',
        name: 'BaseLayout',
        component: BaseLayout
    },
    {
        path: '/MainLayout',
        name: 'MainLayout',
        meta: {
            auth: true
        },
        component: MainLayout,
        children:[
            {
                path: '/MainLayout/Home',
                name: 'Home',
                meta: {
                    title: '首页',
                    icon: ''
                },
                component: Home
            },
            {
                path: '/MainLayout/VButton',
                name: 'VButton',
                meta: {
                    title: '按钮',
                    icon: ''
                },
                component: VButton
            },
        ]
    }
]

export default routes;