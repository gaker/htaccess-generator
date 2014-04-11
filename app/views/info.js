

var InfoView = Ember.View.extend({

  showHide: 'More info',

  click: function (e) {
    var el = $(e.target).parent().next('div.tip');

    if (el.is(":visible")) {
      el.hide();
      this.set('showHide', 'More info');
    } else {
      el.show();
      this.set('showHide', 'Less info');
    }
  }

});

export default InfoView;
