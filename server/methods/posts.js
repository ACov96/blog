import { Meteor } from 'meteor/meteor';
import Post from '/imports/collections/Post';

Meteor.methods({
  newPost() {
    const post = Post.insert({
      title: '',
      body: '',
      lastUpdated: new Date(),
      active: false,
      archived: false,
    });
    return post;
  },

  getPost(postID) {
    return Post.findOne({ _id: postID });
  },

  savePost(post) {
    Post.update(
      { _id: post._id },
      { $set: {
        title: post.title,
        body: post.body,
        lastUpdated: new Date(),
      }
      },
    );
  },
});

Meteor.publish('posts', function() {
  return Post.find({});
});
