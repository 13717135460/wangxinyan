import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
	mode: 'hash', // 去掉路由#
  base: process.env.BASE_URL,
  routes: [
    {
			path: '/',
			redirect: '/index' // redirect 重定向
		},
		{
			path: '/admin',
			name: 'adminIndex',
			component: () => import('@/views/admin/home')
		},
		{
			path: '/admin/container',
			name: 'container',
			component: () => import('@/views/admin/container') // 管理后台-内容页
		},
		{
			path: '/index',
			name: 'index',
			component: () => import('@/views/index') // 主页
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/home') // 我的页面
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import('@/views/blog') // 博客模块
		},
		{
			path: '/blog/1',
			name: 'blog1',
			component: () => import('@/views/blog/lists/1')
		},
		{
			path: '/blog/2',
			name: 'blog2',
			component: () => import('@/views/blog/lists/2')
		},
		{
			path: '/blog/3',
			name: 'blog3',
			component: () => import('@/views/blog/lists/3')
		},
		{
			path: '/blog/4',
			name: 'blog4',
			component: () => import('@/views/blog/lists/4')
		},
		{
			path: '/blog/5',
			name: 'blog5',
			component: () => import('@/views/blog/lists/5')
		},
		{
			path: '/blog/6',
			name: 'blog6',
			component: () => import('@/views/blog/lists/6')
		},
		{
			path: '/blog/7',
			name: 'blog7',
			component: () => import('@/views/blog/lists/7')
		},
		{
			path: '/blog/8',
			name: 'blog8',
			component: () => import('@/views/blog/lists/8')
		},
		{
			path: '/blog/9',
			name: 'blog9',
			component: () => import('@/views/blog/lists/9')
		},
		{
			path: '/blog/10',
			name: 'blog10',
			component: () => import('@/views/blog/lists/10')
		},
		{
			path: '/blog/11',
			name: 'blog11',
			component: () => import('@/views/blog/lists/11')
		},
		{
			path: '/blog/12',
			name: 'blog12',
			component: () => import('@/views/blog/lists/12')
		},
		{
			path: '/blog/13',
			name: 'blog13',
			component: () => import('@/views/blog/lists/13')
		},
		{
			path: '/blog/14',
			name: 'blog14',
			component: () => import('@/views/blog/lists/14')
		},
		{
			path: '/blog/15',
			name: 'blog15',
			component: () => import('@/views/blog/lists/15')
		},
		{
			path: '/blog/16',
			name: 'blog16',
			component: () => import('@/views/blog/lists/16')
		},
		{
			path: '/blog/17',
			name: 'blog17',
			component: () => import('@/views/blog/lists/17')
		},
		{
			path: '/blog/18',
			name: 'blog18',
			component: () => import('@/views/blog/lists/18')
		},
		{
			path: '/blog/19',
			name: 'blog19',
			component: () => import('@/views/blog/lists/19')
		},
		{
			path: '/blog/20',
			name: 'blog20',
			component: () => import('@/views/blog/lists/20')
		},
		{
			path: '/blog/21',
			name: 'blog21',
			component: () => import('@/views/blog/lists/21')
		},
    {
			path: '/news',
			name: 'news',
			component: () => import('@/views/news') // 新闻模块
		},
		{
			path: '/soccer',
			name: 'soccer',
			component: () => import('@/views/soccer') // 足球模块
		},
		{
			path: '/case',
			name: 'case',
			component: () => import('@/views/case'), // 案例模块
			redirect: '/case/debounce',  // 进入案例模块路由重定向
			children: [
				{
					path: '/case/debounce', // 可写全路由地址
					name: 'debounce',
					component: () => import ('@/views/case/debounce'),
				},
				{
					path: 'throttle', // 因为是子路由也可不写 "/" 
					name: 'throttle',
					component: () => import ('@/views/case/throttle'),
				},
				{
					path: 'scroll-bar',
					name: '自定义滚动条',
					component: () => import ('@/views/case/scrollBar'),
				},
				{
					path: 'clipboard',
					name: '复制粘贴',
					component: () => import ('@/views/case/clipboard'),
				},
				{
					path: 'tailor',
					name: '裁剪',
					component: () => import ('@/views/case/tailor'),
				},
				{
					path: 'QR-code',
					name: '二维码',
					component: () => import ('@/views/case/QR-code'),
				},
				{
					path: 'excel',
					name: '二维码',
					component: () => import ('@/views/case/excel'),
				},
				{
					path: 'excel-upload',
					name: 'excel上传',
					component: () => import ('@/views/case/excelUpload'),
				},
				{
					path: 'count-shade',
					name: '数字渐变',
					component: () => import ('@/views/case/countShade'),
				},
				{
					path: 'drag-list',
					name: '列表拖拽',
					component: () => import ('@/views/case/dragList'),
				},
				{
					path: 'excel-download',
					name: 'excel下载',
					component: () => import ('@/views/case/excelDownload'),
				},
				{
					path: 'sortable',
					name: '多选框拖拽排序',
					component: () => import ('@/views/case/sortable'),
				},
				{
					path: 'tinymce',
					name: 'tinymce富文本编辑器',
					component: () => import ('@/views/case/tinymce'),
				},
				{
					path: 'flex-attr',
					name: 'flex知多少',
					component: () => import ('@/views/case/flexAttr'),
				},
				{
					path: 'css-filter',
					name: 'css滤镜',
					component: () => import ('@/views/case/cssFilter'),
				},
				{
					path: 'js-filter',
					name: 'js 过滤器',
					component: () => import ('@/views/case/jsFilter'),
				},
				{
					path: 'html2-canvas',
					name: 'html2Canvas截图',
					component: () => import ('@/views/case/html2Canvas'),
				},
				{
					path: 'vue-quill-editor',
					name: 'js遍历方法',
					component: () => import ('@/views/case/vueQuillEditor'),
				},
				{
					path: 'interceptor',
					name: 'vue拦截器',
					component: () => import ('@/views/case/interceptor'),
				},
				{
					path: 'vue-draggable-resizable',
					name: '控件拖拽',
					component: () => import ('@/views/case/vueDraggableResizable'),
				}
			]
    },
    {
			path: '*',
			name: '404',
			component: () => import('@/views/404') // 404 页面
    }
 ]
})

export default router