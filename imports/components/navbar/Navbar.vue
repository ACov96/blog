<template>
<sui-menu>
  <sui-menu-item>
    <router-link to="/">
      <sui-header size="small">
        Alex's Blog
      </sui-header>
    </router-link>
  </sui-menu-item>
  <sui-menu-item position="right">
    <search-bar />
  </sui-menu-item>
  <sui-menu-item v-if="user">
    <router-link to="/dashboard">Dashboard</router-link>
  </sui-menu-item>
  <sui-menu-item v-if="user">
    <sui-button v-on:click.prevent="logout">Logout</sui-button>
  </sui-menu-item>
</sui-menu>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import Search from './imports/Search';

export default {
  name: 'navbar',
  meteor: {
    user() {
      return Meteor.user();
    },
  },
  methods: {
    logout() {
      Meteor.logout(() => this.$router.push('/'));
    }
  },
  components: {
    'search-bar': Search,
  },
};
</script>
