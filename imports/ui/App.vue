<template>
<sui-container fluid>
  <navbar />
  <sui-container>
    <router-view />
  </sui-container>
  <bottom-footer />
</sui-container>
</template>

<script>
import Navbar from '/imports/components/navbar/Navbar';
import Footer from '/imports/components/footer/Footer';

export default {
  name: 'app',
  components: {
    'navbar': Navbar,
    'bottom-footer': Footer,
  },
};
</script>

<style scoped>
.main-content {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}
</style>
