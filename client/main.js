import { Meteor } from 'meteor/meteor';
import { Vue } from 'meteor/akryum:vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.use(VueMeteorTracker);
Vue.use(SuiVue);

import App from '/imports/ui/App.vue';
import Router from '/imports/routes/routes';
import './main.html';

Meteor.startup(() => {
  new Vue({
    el: '#app',
    render: h => h(App),
    router: Router,
  });
});

