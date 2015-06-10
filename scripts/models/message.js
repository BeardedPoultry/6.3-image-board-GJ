var Message = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: function() {
    return {
      content: '',
      username: '',
      created_at: new Date()
    };
  }
});

var MessageCollection = Backbone.Collection.extend({
  model: Message,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages'
});

export default {Message, MessageCollection};
