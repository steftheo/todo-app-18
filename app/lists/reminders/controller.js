import Ember from 'ember';

export default Ember.Controller.extend({
  saveReminder(list, name) {
    const reminder = this.store.createRecord(`reminder`, {
      done: false,
      list,
      name,
    });

    reminder.save();
  },

  markDone(reminder) {
    reminder.toggleProperty(`done`);
    reminder.save();
  },

  deleteList(list) {
    list.destroyRecord();
  },

});
