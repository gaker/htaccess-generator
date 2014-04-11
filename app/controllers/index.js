
import rewrite from 'htaccess/helpers/rewrite';

var IndexController = Ember.Controller.extend({

  hasResult: false,
  domain: null,
  rewrite: rewrite,
  rewriteRule: false,
  www: true,
  htpasswd: null,
  errors: {},

  selectedPlatform: null,
  platforms: [
    {id: 1, name: 'WordPress'},
    {id: 2, name: 'Zend Framework'},
    {id: 3, name: 'Drupal'},
    {id: 4, name: 'Laravel'},
    {id: 5, name: 'Craft CMS'},
    {id: 6, name: 'ExpressionEngine/CodeIgniter'}
  ],

  actions: {
    htpasswd: function () {
      var val = this.getProperties('test');

      this.set('htpasswd', val);
      this.set('hasResult', true);
    },

    // Reset everything.
    reset: function () {

      var conf = confirm('Are you sure?');

      if (conf === true) {
        this.set('hasResult', false);
        this.set('rewriteRule', false);
        this.set('www', true);
        this.set('htpasswd', null);
        this.set('expires', false);
        this.set('errors', {});
        this.set('domain', null);
        this.set('selectedPlatform', null);
      }
    },

    // step one
    domain: function () {
      var domain = this.get('domain'),
          www = this.get('www');

      this.set('errors.domain', null);

      if (domain === '' || domain === undefined || ! validator.isURL(domain)) {
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

      this.set('rewriteRule', true);
      this.set('hasResult', true);
    },

    // expires headers
    expires: function () {
      this.set('errors.expires', null);
      this.set('expires', true);
    },

    cancelExpires: function () {
      this.set('expires', false);
    },

    remove_index: function () {

    },

    cancelRemoveIndex: function () {
      this.set('selectedPlatform', null);
    }
  }

});


export default IndexController;
