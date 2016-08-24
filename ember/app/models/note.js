import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  seen: DS.attr('date'),
  project: DS.attr('string'),
  user: DS.attr('string'),
  recur: DS.attr('string'),

});
