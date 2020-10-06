import Vue from 'vue'
import Router from 'vue-router'

import loging from '@/components/login'

import show from '@/components/show'

import mn1 from '@/components/list/mn1'
import mn2 from '@/components/list/mn2'
import mn3 from '@/components/list/mn3'

Vue.use(Router);

//默认是hASH 模式
// export default new Router({
//     routes: [{
//             path: '/',
//             name: 'loging',
//             component: loging
//         },
//         {
//             path: "/show",
//             name: "show",
//             component: () => import ('@/components/show')
//         },
//         {
//             path: "/comMenu",
//             name: "comMenu",
//             component: () => import ('@/components/list/l1-hxtongxin')
// 				},
//         {
//             path: "/mn1",
//             name: "mn1",
//             component: () =>
//                 import ('@/components/list/mn1')
//         }, {
//             path: "/mn2",
//             name: "mn2",
//             component: () =>
//                 import ('@/components/list/mn2')
//         }, {
//             path: "/mn3",
//             name: "mn3",
//             component: () =>
//                 import ('@/components/list/mn3')
//         }
//     ]
// })


//history模式
export default new Router({
	mode: 'history',
	routes: [{
					path: '/',
					name: 'loging',
					component: loging
			},
			{
					path: "/show",
					name: "show",
					component: () => import ('@/components/show')
			},
			{
					path: "/comMenu",
					name: "comMenu",
					component: () => import ('@/components/list/l1-hxtongxin')
			},
			{
					path: "/mn1",
					name: "mn1",
					component: () =>
							import ('@/components/list/mn1')
			}, {
					path: "/mn2",
					name: "mn2",
					component: () =>
							import ('@/components/list/mn2')
			}, {
					path: "/mn3",
					name: "mn3",
					component: () =>
							import ('@/components/list/mn3')
			}
	]
})