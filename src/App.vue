<template>
  <div class="blog-center">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}


.blog-center {
  margin: auto;
  width: 66%;
  height: 100%;
  padding: 20px;
  font-family: monospace;
  text-align: left;
}

html,body { 
  height:100%; 
  padding: 0;
  margin: 0;
  font-family: monospace;
}

a, a:link, a:visited {
  color: #0069d1;
}

</style>
