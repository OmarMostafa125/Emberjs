import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
  	rootURL: config.rootURL,
  });

Router.map(function() {
  //Declaration of URLS
  this.route('simpleToDoList', {path: "/"})
  this.route('simpleToDoList_2');
  this.route('page-not-found', {path : '/*'})
  this.route('todos');
});

export default Router;