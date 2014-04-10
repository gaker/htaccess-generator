
var IndexController = Ember.Controller.extend({

  hasResult: false,
  htpasswd: null,


  actions: {
    htpasswd: function () {
      var val = this.getProperties('test');

      this.set('htpasswd', val);
      this.set('hasResult', true);
    },

    // step one
    domain: function () {
      console.log(this.getProperties('domain', 'www'));
      var domain = this.get('domain'),
          forceWWW = this.get('www');
      this.set('domain', domain);

      // console.log(forceWWW);

      // window.console.log(this.get('domain'));
    }
  }

});


export default IndexController;
