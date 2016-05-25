import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('list', {path: '/'}, function() {
    this.route('new');
    this.route('reminders');
  });
  this.route('new-list');
});

export default Router;
