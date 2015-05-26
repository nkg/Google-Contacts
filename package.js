Package.describe({
  name: 'nkg:google-contacts',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Google-Contacts package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nkg/Google-Contacts.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('google-contacts.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nkg:google-contacts');
  api.addFiles('google-contacts-tests.js');
});
