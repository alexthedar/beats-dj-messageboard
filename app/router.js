import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('about');
  this.resource('questions', {path: '/'}, function() {
    this.resource('question', {path: 'questions/:question_id'}, function(){
      this.resource('new-answer');
      this.resource('answer', {path: 'answers/:answer_id'});
    });
  });
  this.resource('new-question');
});

export default Router;
