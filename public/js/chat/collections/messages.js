Application.Collections = Application.Collections || {};

(function() {
  'use strict';

  var Messages = Backbone.Collection.extend({
    model: Application.Models.Message
  });

  Application.Collections.Messages = new Messages();
} ());