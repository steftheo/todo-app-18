import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lists', {path: '/'}, function() {
    this.route('new', { path: `/new-list` });
    this.route('reminders', { path: `/:id/reminders` });
  });
  // this.route('new-list');
});

export default Router;
