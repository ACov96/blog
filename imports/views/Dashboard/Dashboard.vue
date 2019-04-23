<template>
<div>
  <sui-grid :columns="1">
    <sui-grid-row>
      <sui-grid-column>
        <sui-header size="standard">Dashboard</sui-header>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column>
        <p v-if="newPostError">Couldn't create new post</p>
        <sui-button v-on:click.prevent="newPost">New Post</sui-button>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column>
        <sui-header size="small">Posts</sui-header>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column>
        <post-list />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import Post from '/imports/collections/Post';

import PostList from './imports/PostList';

export default {
  name: 'dashboard',
  data() {
    return {
      newPostError: false,
    };
  },
  methods: {
    newPost() {
      Meteor.call('newPost', (err, postID) => {
        if (err) {
          console.error(err);
          this.newPostError = true;
        } else {
          this.$router.push(`/edit/${postID}`);
        }
      });
    },
  },
  components: {
    'post-list': PostList,
  },
};
</script>
