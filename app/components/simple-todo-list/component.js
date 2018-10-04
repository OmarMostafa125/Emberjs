import Component from '@ember/component';
export default Component.extend({

	// Declarting an array to do list here array is not declared inside init, so its state is shared
	todoList : ["GYM", "Soccer", "Study Emberjs", "More studying Emberjs", "Eat", "Sleep", "Have fun"],
	actions :{
		//action to add item to todoList array
		addItem(item){
			// if item is null or has been added to the list before
			if (item !== undefined && this.get('todoList').indexOf(item) === -1){
				if (item.length === 0 ) {
					var r = confirm("Do you really want to add null to the list?");
					// add null
					if (r === true) {
					    this.get('todoList').pushObject(item);
					}
				} else {
					this.get('todoList').pushObject(item);
				}
			}
		},
		//removing item from array
		removeItem(item){
			if (item !== undefined){
				if (item.length !== 0 ) {
					var found  = false;
					//////// first solution doesnt pay attention to case sensetivity ////////
					// var index = this.get('todoList').indexOf(item);
					// if (index > -1) {
					// 	this.get('todoList').removeObject(item);
					// } else {
					// 	alert ("item DOESNT EXIST");
					// }

					//////// Second solution will pay attention to case sensetivity ////////
					var arrayList = this.get('todoList');
					// var length = this.get('todoList').length; // shouldnt use that because length might change in loop
					for (var i=0; i < this.get('todoList').length; i++){
						if (item.toLowerCase() === arrayList[i].toLowerCase())
						{
							this.get('todoList').removeObject(arrayList[i]);
							found = true;
						}
					}
					if ( found  === false ) {
							alert ("ITEM: "+item+" DOESNT EXIST IN LIST");
					}
				}
			}
		}
	}
});
