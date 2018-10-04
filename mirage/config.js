export default function() {

  this.namespace = '/';

    // creating object with data for model, passed to route --> this.store.findAll('todo')
    var todosList = 
          [
            {
              id :1,
              title: 'Study Ember',
              isCompleted: false
            },
            {
              id :2,
              title: 'Finish Ember Tutorial',
              isCompleted: false
            },
            {
              id :3,
              title: 'Take a walk',
              isCompleted: true
            },
            {
              id :4,
              title: 'Read a book',
              isCompleted: true
            },
            {
              id :5,
              title: 'GYM',
              isCompleted: false
            }
        ]
        // Request to get the model
    this.get('/todos', ()=> {    
      return {
        todo: todosList   
      }
    });
    //Request to post to model
    this.post('/todos', (db, request)=> {
      // I need to return the new object after adding the new todo to it
      var attrs = JSON.parse(request.requestBody).todo; // getting the todo object
      todosList.push({ // adding todo object id, title, and isCompleted
        id: Number(attrs.id),
        title: attrs.title,
        isCompleted: attrs.isCompleted
      });
      return {
        todo: todosList // now returning the new object  
      }
    });
    // Request to delete from model
     this.del('/todos/:id', (db, request)=> {
      var id = Number(request.params.id); // getting the id to be deleted
      var length  = todosList.length;
      for( var i = 0; i < length; i++){ 
         if ( todosList[i].id === id ) {
              return {
                  todo: todosList.splice(i,1) // removing the todo object from todosList
                }
          }
      } 
    });
}
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  

    // http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  
