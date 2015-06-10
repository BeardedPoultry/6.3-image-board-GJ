export default Backbone.View.extend({
  template: JST.chat,

  events: {
    'submit .create-message-form': 'createMessage'
  },

  initialize: function(options){
    this.username = options.user ? options.user.get('username') : '';
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
  },

  createMessage: function(e) {
    e.preventDefault();
    var content = this.$('.create-message-content').val();
    this.collection.create({
      content: content,
      username: this.username
    });
  }
});
