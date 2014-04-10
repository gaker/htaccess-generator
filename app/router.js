var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'history'
});

Router.map(function() {
  this.route('about', { path: '/about'});
});

export default Router;
