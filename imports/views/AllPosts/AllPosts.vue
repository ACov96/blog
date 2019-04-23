<template>
<sui-grid :columns="1">
  <sui-grid-row>
    <sui-grid-column>
      <sui-header size="huge">All Posts</sui-header>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-column>
      <sui-item-group v-if="posts" divided>
        <post-card v-for="post in posts" :postID="post._id" :key="post._id" />
      </sui-item-group>
      <sui-item-group v-else>
        <sui-item>
          <sui-item-description>Loading...</sui-item-description>
        </sui-item>
      </sui-item-group>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>
</template>

<script>
import Post from '/imports/collections/Post';
import PostCard from '/imports/components/PostCard/PostCard';

export default {
  name: 'search',
  meteor: {
    $subscribe: {
      'posts': [],
    },
  },
  computed: {
    posts() {
      if (this.$subReady.posts)
        return Post.find(
          { active: true, archived: false },
          {
            sort: {
              lastUpdated: -1,
            },
          },
        );
      else
        return null;
    }
  },
  components: {
    'post-card': PostCard,
  },
};
</script>
