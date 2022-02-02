<template>
  <h1>Home</h1>
  <div v-if="loadingPosts">Loading...</div>
  <div v-else-if="posts != null && posts.length >= 1">
    <div v-for="post in posts" v-bind:key="post.link">
      <router-link :to="'/post/' + post.title">{{ post.title }}</router-link>, last edited on {{ post.date }}
    </div>
  </div>
  <div v-else>Something is wrong...</div>
</template>

<script>
const api = 'https://cdn.covington.tech/blog/posts';

function parsePostsFromIndex(indexString) {
  const doc = new DOMParser().parseFromString(indexString, 'text/html');
  const rawPostElements = doc.getElementsByTagName('pre').item(0).innerText.split('\n').filter(post => post !== "../" && post !== "");
  const minifiedPosts = rawPostElements.map((post) => {
    const words = post.split(/\s+/);
    const _date = new Date(Date.parse(`${words[1]} ${words[2]}`));
    return {
      link: `${api}/${words[0]}`,
      title: words[0].replace('.md', ''),
      date: _date.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}),
    };
  });
  console.log(minifiedPosts);
  return minifiedPosts;
}

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
  color: #42b983;
}
</style>
