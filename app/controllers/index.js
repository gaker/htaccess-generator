
var IndexController = Ember.Controller.extend({

  hasResult: false,
  rewrite: false,
  result: '',
  www: true,
  htpasswd: null,
  errors: {},

  actions: {
    htpasswd: function () {
      var val = this.getProperties('test');

      this.set('htpasswd', val);
      this.set('hasResult', true);
    },

    // step one
    domain: function () {
      var domain = this.get('domain'),
          www = this.get('www');

      this.set('errors.domain', null);

      if (domain === '' || domain === undefined) {
        this.set('errors.domain', 'Please enter a valid domain');
        return false;
      }

      domain = domain.toLowerCase();

      // Get rid of https?://
      if ((/^https?:\/\//).test(domain)) {
        domain = domain.substr(domain.indexOf('://') + 3);
      }

      //  Make sure www isn't in the URL
      if (domain.substr(0,4) === 'www.') {
        domain = domain.substr(4);
      }

      this.set('domain', domain);
      this.set('www', www);

      this.set('rewrite', true);
      this.set('hasResult', true);

      $('#domain').hide();
      $('#expires').show();
    },

    // expires headers
    expires: function () {
      this.set('errors.expires', null);
      this.set('expires', true);

      $('#expires').hide();
    }

  }

});


export default IndexController;
