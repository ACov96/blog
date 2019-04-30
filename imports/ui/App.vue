<template>
<sui-container fluid class="Site">
  <navbar />
  <sui-container class="Site-content">
    <router-view />
  </sui-container>
  <bottom-footer class="" />
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
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
}
</style>
