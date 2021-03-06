import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  author: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('date'),
  numberOfAnswers: DS.attr('number'),
  answers: DS.hasMany('answer', {async: true})

});
