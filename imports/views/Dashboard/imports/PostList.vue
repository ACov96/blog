<template>
<sui-list>
  <sui-list-item v-if="$subReady.posts" v-for="post in posts" :key="post._id">
    <router-link :to="{ name: 'edit', params: { id: post._id } }">
      {{ post.title }} - {{ post.lastUpdated ? post.lastUpdated.toLocaleString('en-US') : post.created.toLocaleString('en-US') }}
    </router-link>
  </sui-list-item>
  <sui-list-item v-else>Loading...</sui-list-item>
</sui-list>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import Post from '/imports/collections/Post';

export default {
  name: 'post-list',
  meteor: {
    $subscribe: {
      'posts': [],
    },
    posts() {
      return Post.find({ archived: false });
    },
  }
};
</script>
