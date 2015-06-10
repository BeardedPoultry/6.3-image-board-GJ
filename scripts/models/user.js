var User = Backbone.Model.extend({
  defaults: {
    name: ''
  }
});

var UserCollection = Backbone.Collection.extend({
  model: User
});

export default {User, UserCollection};
