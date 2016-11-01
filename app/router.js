import Ember from 'ember';
import config from './config/environment';


const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committee-house');
  this.route('committee-senate');
  this.route('subcommittee');
});

export default Router;
