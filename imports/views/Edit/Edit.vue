<template>
<sui-grid>
  <sui-grid-row>
    <sui-grid-column>
      <sui-header size="standard">Edit Post</sui-header>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-column>
      <editform />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import EditForm from './imports/EditForm';

export default {
  name: 'edit',
  components: {
    'editform': EditForm,
  },
};
</script>
