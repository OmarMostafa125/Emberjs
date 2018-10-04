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
			while (1){ /* I added this loop because for some reason Ember keeps a copy of the id
						I an id has been deleted, and I try to add another record it complains 
						about this id being processed before, so I made this try and catch 
						to make sure that I have a new Id everytime!
						*/
				try {
					let todo = this.store.createRecord('todo', {
						id: length, //adding id
						title: title, // adding title
						isCompleted: false // adding isCompleted
					});
					break; // if new todo is added, then BREAK
					} catch (err) {
						length ++; // keep incrementing the length "id" until a new one is found
					}
			}
			this.set('newTitle', ''); // setting the input field to blank
		},
		// Removing a todo from the Model, finding the record with specici Id and delete it
		removeTodo: function(id){
			this.store.findRecord('todo', id, { backgroundReload: false }).then(function(todo) {
				todo.destroyRecord(); // Delete the record
			});
		}
	}
});
