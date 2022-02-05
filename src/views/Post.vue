<template>
  <div id="nav">
    <router-link to="/">Alex's Blog</router-link> | <a href="https://covington.tech">covington.tech</a>
  </div>
  <div v-if="loadingPost">Loading...</div>
  <div v-else-if="postBody != null">
        <div class="post-info">
            <h1>{{ $route.params.title }}</h1>
            <h3 style="color: gray;"><i>Last edited: {{ this.postDate }}</i></h3>
        </div>
        <div style="margin-top: 50px" v-html="postBody"></div>
  </div>
  <div v-else>Something went wrong...</div>
</template>

<script>
import { marked } from 'marked';
import { parsePostsFromIndex } from '../util';

const api = 'https://cdn.covington.tech/blog/posts';

export default {
  name: 'Post',
  data() {
    return {
      loadingPost: false,
      postBody: null,
      postDate: null,
    };
  },
  created() {
      this.loadingPost = true;
      Promise.all([
        this.axios.get(`${api}/${this.$route.params.title}.md`), 
        this.axios.get(`${api}/`)
      ]).then((res) => {
            const [ postRes, allPostsRes ] = res;
            this.postBody = marked(postRes.data, { xhtml: true });
            this.postDate = parsePostsFromIndex(allPostsRes.data).filter(el => el.title === this.$route.params.title)[0].date;
            console.log(this.postDate);
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
#nav {
    margin-bottom: 50px;
}

img {
    filter: drop-shadow(5px 5px 5px #222)
}
</style>
