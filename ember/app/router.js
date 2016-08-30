import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('notes', function() {
    this.route('note', { path: '/:note_id' });
  });
});

export default Router;
