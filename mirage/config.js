export default function() {

  this.namespace = '/';

    // creating object with data for model, passed to route --> this.store.findAll('todo')
    var jsonObject = 
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
        todo: jsonObject   
      }
    });
    //Request to post to model
    this.post('/todos', ()=> {
      return {
        todo: jsonObject   
      }
    });
    // Request to delete from model
     this.del('/todos/:id', ()=> {
      return {
        todo: jsonObject   
      }
    });
    // this.get('/todos/:id', ()=> {
    //   return {
    //     todo: jsonObject   
    //   }
    // });
    // this.put('/todos/:id', ()=> {
    //   return {
    //     todo: jsonObject   
    //   }
    // });
};
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  

    // http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  
