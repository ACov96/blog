<template>
<sui-grid :columns=1>
  <sui-grid-row>
    <sui-grid-column>
      <sui-header size="huge">Alex's Blog</sui-header>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-column>
      <sui-header size="standard">Recent Posts</sui-header>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-column>
      <recent-posts />
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-column>
      <p>Looking for more? You can find all of my posts <router-link to="/all">here</router-link>.</p>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>
</template>

<script>
import RecentPost from './imports/RecentPosts';

export default {
  name: 'home',
  components: {
    'recent-posts': RecentPost,
  },
};
</script>
