export default Backbone.View.extend({
  template: JST.index,

  events: {
    'submit .login-form': 'login'
  },

  login: function(e) {
    e.preventDefault();
    var username = this.$('.login-form-username').val();
    this.collection.add({name: username});
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
  }
});
