/**
 * @file 这是模块页面的路由配置
 * @author kuan.qin@i-tudou.com
 */

import Home from '@/layouts/default';

import { PotatoNotFound, PotatoNetworkError, PotatoPermissionDenied } from 'potato-ui';

const routes = [
	{
		path: '/',
		name: '',
		component: Home,
	},
	{
		path: '/403',
		name: 'notVisit',
		component: PotatoPermissionDenied,
		meta: {
			noAuth: true,
		},
	},
	{
		path: '/500',
		name: 'serveError',
		component: PotatoNetworkError,
		meta: {
			noAuth: true,
		},
	},
	{
		path: '/404',
		name: 'notfount',
		component: PotatoNotFound,
		meta: {
			noAuth: true,
		},
	},
];

export default routes;
