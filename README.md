# Blog

This is my blog web app built using Meteor + Vue.

## Prerequisites

You need to install the following:

- [Meteor](https://www.meteor.com/)
- [NPM](https://npmjs.com/)

## Setup

Clone the repository:

```bash
git clone https://github.com/ACov96/blog && cd blog
```

Install npm dependencies:
```bash
meteor npm install
```

Then you need to create a `settings.json` file:
```json
{
    "admin": {
        "email": <your email>,
        "password": <your password>
    }
}
```

This settings file will be used to create your admin account for the blog. Sorry that the password is in plain text, you can change it to some dummy value after the initial setup.

## Running

Because of how Vue and Meteor interact, we have to disable hot module replacement. You can do this by setting an environment variable `NO_HMR=1`.

If you're using bash, you can just run:
```bash
NO_HMR=1 meteor run --settings settings.json
```

Once you're up an running, navigate to `/login` and login with your admin account.
