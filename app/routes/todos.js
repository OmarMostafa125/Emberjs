import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  	// getting the data from mirage 
  	return this.store.findAll('todo'); 
}
});