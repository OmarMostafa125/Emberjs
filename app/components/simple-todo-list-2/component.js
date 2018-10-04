import Component from '@ember/component';
export default Component.extend({
	init (){
		// one of the life cycles thats its being called only once during a component
		this._super(...arguments);
		// inStead of harcoding the array we can do this
		// this.todoList = Ember.String.w(this.attrs.list);
		this.todoList = ["Soccer", "TV", "Study Emberjs", "More studying Emberjs", "Shower", "Nap", "groceries"];
	},
	actions :{
		addItem(item){
			if (item !== undefined && this.get('todoList').indexOf(item) === -1){
				if (item.length === 0 ) {
					var r = confirm("Do you really want to add null to the list?");
					if (r === true) {
					    this.get('todoList').pushObject(item);
					}
				} else {
					this.get('todoList').pushObject(item);
				}
			}
		},
		removeItem(item){
			//removing item from array
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
