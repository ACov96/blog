<template>
  <h1>{{ $route.params.title }}</h1>
  <div v-if="loadingPost">Loading...</div>
  <div v-else-if="postBody != null">
      <div v-html="postBody"></div>
  </div>
  <div v-else>Something went wrong...</div>
</template>

<script>
import { marked } from 'marked';
const api = 'https://cdn.covington.tech/blog/posts';

export default {
  name: 'Post',
  data() {
    return {
      loadingPost: false,
      postBody: null
    };
  },
  created() {
      this.loadingPost = true;
      this.axios.get(`${api}/${this.$route.params.title}.md`)
        .then((res) => {
            console.log(res);
            this.postBody = marked(res.data, { sanitize: true });
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            this.loadingPost = false;
        });
  },
};
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
  color: #42b983;
}
</style>
