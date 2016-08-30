import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return [{
      id: 1,
      name: "Paul"
    }, {
      id: 2,
      name: "Greg"
    }].findBy('id', params.note_id);
  }
});
