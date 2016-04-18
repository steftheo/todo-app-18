import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todo');
  this.route('list', function() {
    this.route('new');
  });
  this.route('new-list');
});

export default Router;
