import Ember from 'ember';

export default Ember.Service.extend({
  getNotes() {
    return [ { id:1, name: "Paul"}, 
             { id:2, name: "Greg"} 
    ];
  },
  getNoteById(id) {
    const notes = this.getNotes();
    return notes.findBy('id', id);
  }
});
