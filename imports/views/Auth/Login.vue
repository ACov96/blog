<template>
<sui-grid>
  <sui-grid-row>
    <sui-header content="Login" size="standard" />
  </sui-grid-row>
  <sui-grid-row>
    <login-form />
  </sui-grid-row>
</sui-grid>
</template>

<script>
import LoginForm from './imports/LoginForm';

export default {
  name: 'login',
  components: {
    'login-form': LoginForm,
  },
};
</script>
