<template>
  <span style="float:right; text-align: right;"><a href="https://covington.tech">covington.tech</a></span>
  <h1>Alex's Blog</h1>
  <br>
  <p>Welcome to my blog. I write posts about technology, programming, music, or whatever else I might be thinking about.</p>
  <div class="post-list-section">
    <div v-if="loadingPosts">Loading...</div>
    <div v-else-if="posts != null && posts.length >= 1">
      <div v-for="post in posts" v-bind:key="post.link">
        <span style="text-align: left; float: left;">
          <router-link :to="'/post/' + post.title">{{ post.title }}</router-link>
        </span> 
        <span style="float: right; text-align: right;">
          Last edited on {{ post.date }}
        </span>
      </div>
    </div>
    <div v-else>Something is wrong...</div>
  </div>
</template>

<script>
import { parsePostsFromIndex } from '../util';

const api = 'https://cdn.covington.tech/blog/posts';

export default {
  name: 'Home',
  data() {
    return {
      loadingPosts: false,
      posts: null,
    };
  },
  created() {
    this.loadingPosts = true;
    this.axios.get(api)
      .then((res) => {
        this.posts = parsePostsFromIndex(res.data);
      })
      .finally(() => {
        this.loadingPosts = false;
      });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0069d1;
}

.post-list-section {
  margin-top: 10%;
}
</style>
