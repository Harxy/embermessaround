import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'note',

  model: function() {
    return this.store.find('note', 1);
  },

  setupController: function(controller, model){
    controller.set('model', model);
  }
});
