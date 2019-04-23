<template>
<sui-item-group v-if="posts" divided>
  <post-card v-for="post in posts" :postID="post._id" :key="post._id" />  
</sui-item-group>
<sui-item-group v-else>
  <sui-item>
    <sui-item-description>Loading...</sui-item-description>
  </sui-item>
</sui-item-group>
</template>

<script>
import Post from '/imports/collections/Post';
import PostCard from '/imports/components/PostCard/PostCard';

export default {
  name: 'recent-posts',
  meteor: {
    $subscribe: {
      'posts': [],
    },
    posts() {
      return Post.find(
        { archived: false, active: true },
        { limit: 5, sort: { lastUpdated: -1 } },
      );
    },
  },
  components: {
    'post-card': PostCard,
  },
};
</script>
