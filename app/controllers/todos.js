import Controller from '@ember/controller';

export default Ember.Controller.extend({
	actions :{
		// Adding a todo to the model
		addTodo(){
			//getting length to add id to the new record
			var length = this.get('model.length');
			length ++;
			var title = this.get('newTitle');
			if (title === false){return false;}
			if (title.trim().length === 0){return false;}
			
			//adding the item to our model, and displaying it 
			let todo = this.store.createRecord('todo', {
				id: length, //adding id
				title: title, // adding title
				isCompleted: false // adding isCompleted
			});
			todo.save(); // saving the model
			this.set('newTitle', ''); // setting the input field to blank
			
		},
		// Removing a todo from the Model, finding the record with specici Id and delete it
		removeTodo: function(id){
			this.store.findRecord('todo', id, { backgroundReload: false }).then(function(todo) {
				todo.destroyRecord();
				// todo.get('isDeleted'); // => true
				todo.save();
			});
		}
	}
});
