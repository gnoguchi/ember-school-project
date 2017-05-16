import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
// Im a comment
Router.map(function() {
  this.route('foods');
  this.route('about');
  this.route('contact');
  this.route('favorite-word', {path: 'favorite-word/:word'});
});

export default Router;
