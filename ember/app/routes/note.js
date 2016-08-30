import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const id = params.note_id;
    const store = this.get('store');
    return store.getNoteById(id);
  },
  store: Ember.inject.service()
});
