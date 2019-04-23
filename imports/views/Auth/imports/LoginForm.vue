<template>
<div>
  <p v-if="badLogin">Bad login. Try again</p>
  <sui-form v-on:submit.prevent="submit">
    <sui-form-field>
      <sui-input v-model="username" placeholder="Username" />
    </sui-form-field>
    <sui-form-field>
      <sui-input v-model="password" placeholder="Password" type="password" />
    </sui-form-field>
    <sui-form-field>
      <sui-button type="submit">Login</sui-button>
    </sui-form-field>
</sui-form>
</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';

export default {
  data() {
    return {
      username: '',
      password: '',
      badLogin: false,
    };
  },
  methods: {
    submit() {
      Meteor.loginWithPassword(this.username, this.password, (err) => {
        if (err) {
          this.badLogin = true; 
          console.log(err);
        } else {
          this.$router.push('/'); 
        }
      });
    }
  },
};
</script>
