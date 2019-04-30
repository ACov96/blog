<template>
<footer>
  <sui-container>
    <sui-list inverted>
      <sui-list-item>
        <sui-list-content>
          <sui-icon class="spacer" name="browser" />
          <a href="https://www.covington.tech">covington.tech</a>
        </sui-list-content>
      </sui-list-item>
      <sui-list-item>
        <sui-list-content>
          <sui-icon class="spacer" name="mail" />
          <a href="mailto:alex@covington.tech">Email Me</a>
        </sui-list-content>
      </sui-list-item>
      <sui-list-item>
        <sui-list-content>
          <font-awesome-icon class="spacer" :icon="['fab', 'github-square']" />
          <a href="https://github.com/ACov96">Github</a>
        </sui-list-content>
      </sui-list-item>
      <sui-list-item>
        <sui-list-content>
          <font-awesome-icon class="spacer" :icon="['fab', 'linkedin']" />
          <a href="https://www.linkedin.com/in/alexander-covington/">Linkedin</a>
        </sui-list-content>
      </sui-list-item>
    </sui-list>
  </sui-container>      
</footer>
</template>

<script>
export default {
  name: 'bottom-footer',
};
</script>

<style scoped>
footer {
    background-color: #204e99;
    height: 100px;
    margin-top: 2em;
    padding-top: 8px;
    padding-bottom: 20px;
}

.spacer {
    margin-right: 2px;
}
</style>
