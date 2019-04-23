<template>
<sui-grid class="left-border" :columns="1" v-if="$subReady.posts && post.active && !post.archived">
  <sui-grid-row>
    <sui-grid-column>
      <sui-header size="huge">
        {{ post.title }}
        <span v-if="user">
          <router-link :to="{ name: 'edit', params: { id: post._id } }">
            <small>Edit</small>
          </router-link>
        </span>
      </sui-header>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-column>
      <sui-header sub>Last Updated - {{ post.lastUpdated.toLocaleString('en-US') }}</sui-header>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row v-if="$subReady.posts">
    <sui-grid-column>
      <div v-html="renderedPost" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>

<sui-grid :columns="1" v-else-if="!$subReady.posts">
  <sui-grid-row>
    <sui-grid-column>
      <sui-header size="standard">Loading...</sui-header>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>

<sui-grid :columns="1" v-else>
  <sui-grid-row>
    <sui-grid-column>
      <sui-header size="standard">This post is not available.</sui-header>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import Post from '/imports/collections/Post';
import marked from 'marked';

export default {
  name: 'post',
  meteor: {
    $subscribe: {
      'posts': []
    },
    post() {
      if (this.$subReady.posts) {
        return Post.findOne({ _id: this.$route.params.id });
      } else {
        return null;
      }
    },
  },
  computed: {
    user() {
      return Meteor.user();
    },
    renderedPost() {
      return marked(this.post.body);
    }
  },
};
</script>

<style scoped>
.left-border {
    border-left-style: solid;
    border-color: #c6c6c6;
    margin-top: 1em;
    margin-bottom: 1em;
    border-radius: 2px;
}
</style>
