import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  if (!Meteor.isServer) return;
  if (!Meteor.settings.admin) {
    Meteor.logger.error('No admin object in settings.json');
    process.exit(1);
  }

  const admin = Accounts.findUserByEmail(Meteor.settings.admin.email);

  if (admin === undefined) {
    Accounts.createUser({
      email: Meteor.settings.admin.email,
      password: Meteor.settings.admin.password,
    });
    console.log('Created admin user');
  } else {
    console.log('Found admin user');
  }
});
