// Generated by CoffeeScript 1.6.1
(function() {

  define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var AccordionView;
    return AccordionView = Backbone.View.extend({
      initialize: function() {
        console.info('[AccordionView initialize]');
        _.bindAll(this);
        this.render();
        return this;
      },
      events: {
        'click header': 'toggleChild'
      },
      render: function() {
        var $bellows;
        console.info('[AccordionView render]');
        $bellows = $('h2').nextAll().andSelf();
        return this;
      },
      toggleChild: function() {
        event.preventDefault();
        $(event.target).next('div').toggle();
        return this;
      }
    });
  });

}).call(this);
