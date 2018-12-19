import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {
	routes
} from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return {
				selector: to.hash
			};
		}
		return {
			x: 0,
			y: 0
		};
	}
});

router.beforeEach((to, from, next) => {
	console.log('global beforeEach');
	next();
});

Vue.http.options.root = 'https://vuejs-fd86b.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
	console.log(request);
	if (request.method == 'POST') {
		request.method = 'PUT';
	}
	next((response) => {
		response.json = () => {
			return {
				message: response.body
			};
		};
	});
});

new Vue({
	el: '#app',
	router,
	render: (h) => h(App)
});