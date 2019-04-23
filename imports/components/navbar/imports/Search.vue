<template>
<sui-form-field>
  <sui-input v-on:keyup.enter="performSearch" v-model="searchVal" placeholder="Search for a post..." />
  <sui-button v-on:click.prevent="performSearch">Search</sui-button>
</sui-form-field>
</template>

<script>
import Post from '/imports/collections/Post';

export default {
  name: 'search-bar',
  data: () => ({
    searchVal: '',
  }),
  methods: {
    performSearch() {
      this.$router.push({ name: 'search', query: { search: this.searchVal } });
    }
  }
};
</script>
