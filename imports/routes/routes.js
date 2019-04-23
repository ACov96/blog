import { Vue } from 'meteor/akryum:vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '/imports/views/Home/Home';
import Login from '/imports/views/Auth/Login';
import Dashboard from '/imports/views/Dashboard/Dashboard';
import Edit from '/imports/views/Edit/Edit';
import Post from '/imports/views/Post/Post';
import Search from '/imports/views/Search/Search';
import All from '/imports/views/AllPosts/AllPosts';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/edit/:id', component: Edit, name: 'edit' },
  { path: '/post/:id', component: Post, name: 'post' },
  { path: '/search', component: Search, name: 'search' },
  { path: '/all', component: All, name: 'all' },
];

export default new VueRouter({
  routes,
  mode: 'history',
});
