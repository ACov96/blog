<template>
<sui-item v-if="post">
  <sui-item-content>
    <sui-item-header>
      <router-link :to="{ name: 'post', params: { id: post._id } }">
        {{ post.title }}
      </router-link>
    </sui-item-header>
    <sui-item-meta>
      {{ post.lastUpdated.toLocaleString('en-US') }}
    </sui-item-meta>
    <sui-item-description>
      <span v-html="renderPostBody()" />
      <router-link :to="{ name: 'post', params: { id: post._id } }">
        Read More
      </router-link>
    </sui-item-description>
  </sui-item-content>
</sui-item>
<sui-item v-else>
  <sui-item-content>Loading...</sui-item-content>
</sui-item>
</template>

<script>
import Post from '/imports/collections/Post';
import marked from 'marked';

export default {
  name: 'post-card',
  props: ['postID'],
  meteor: {
    $subscribe: {
      'posts': [],
    },
  },
  computed: {
    post() {
      if (this.$subReady.posts)
        return Post.findOne({ _id: this.postID });
      else
        return null;
    },
  },
  methods: {
    renderPostBody() {
      const lines = this.post.body.split('\n').slice(0, 5).join('\n');
      const subContent = lines.substring(0, 200) + '...';
      return marked(subContent);
    },
  },
};
</script>
