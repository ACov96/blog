<template>
<sui-grid v-if="$subReady.posts" :columns=2 :centered=true>
  <sui-grid-row v-if="saveSuccess">
    <sui-grid-column>
      <p>Successfully saved post</p>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-column>
      <sui-form v-on:submit.prevent="submit">
        <sui-form-field>
          <sui-input v-model="post.title" placeholder="Title" />
        </sui-form-field>
        <sui-form-field>
          <textarea v-model="post.body" placeholder="Blog post content...">
          </textarea>
        </sui-form-field>
        <sui-form-field>
          <sui-button type="submit">Save Post</sui-button>
          <sui-button v-if="!post.active" color="green" v-on:click.prevent="toggleActive">
            Publish
          </sui-button>
          <sui-button v-else color="red" v-on:click.prevent="toggleActive">
            Unpublish
          </sui-button>
          <sui-button color="red" v-on:click.prevent="toggleArchive">
            <span v-if="!post.archived">Archive</span>
            <span v-else>Unarchive</span>
          </sui-button>
        </sui-form-field>
      </sui-form>
    </sui-grid-column>
    <sui-grid-column>
      <div v-html="postToHtml()"></div>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>
<sui-grid v-else>
  <sui-grid-row>Loading...</sui-grid-row>
</sui-grid>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import Post from '/imports/collections/Post';
import marked from 'marked';

export default {
  name: 'editForm',
  data: () => ({
    loadError: false,
    saveError: false,
    saveSuccess: false,
  }),
  methods: {
    submit() {
      Post.update(
        { _id: this.$route.params.id },
        {
          $set: {
            title: this.post.title,
            body: this.post.body,
            lastUpdated: new Date(),
          },
        },
        this.saveCB,
      );
    },
    toggleActive() {
      Post.update(
        { _id: this.$route.params.id },
        {
          $set: {
            active: !this.post.active,
          },
        },
        this.saveCB,
      )
    },
    toggleArchive() {
      Post.update(
        { _id: this.$route.params.id },
        {
          $set: {
            archived: !this.post.archived,
          },
        },
        this.saveCB,
      )
    },
    postToHtml() {
      if (this.$subReady.posts)
        return marked(this.post.body);
      else
        return null;
    },
    clearErrors() {
      this.loadError = false;
      this.saveError = false;
      this.saveSuccess = false;
    },
    saveCB(err) {
      if (!err) {
        this.saveSuccess = true;
      } else {
        this.saveError = true;
        console.error(err);
      }
      setTimeout(this.clearErrors, 5000);
    },
  },
  meteor: {
    $subscribe: {
      'posts': [],
    },
    post() {
      console.log(Post.findOne({ _id: this.$route.params.id }));
      return Post.findOne({ _id: this.$route.params.id });
    }
  }
};
</script>
