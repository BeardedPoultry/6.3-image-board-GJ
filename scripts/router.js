import IndexView from './views/index';
import ChatView from './views/chat';

import {UserCollection} from './models/user';
import {MessageCollection} from './models/message';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'chat': 'chat'
  },

  initialize: function() {
    this.users = new UserCollection();
    this.listenTo(this.users, 'add', function(){
      this.navigate('chat', {trigger: true});
    }.bind(this));

    this.messages = new MessageCollection();
  },

  index: function(){
    var view = new IndexView({collection: this.users});
    $('#app').html(view.el);
  },

  chat: function(){
    var view = new ChatView({
      collection: this.messages,
      user: this.users.at(0)
    });
    $('#app').html(view.el);
    this.messages.fetch();
  }
});

var router = new Router();

export default router;

// The Old Ugly Way™

// var Router = function(){
//   Backbone.Router.apply(this, arguments);
//   this.cool = true;
// };

// Router.prototype = Object.create(Backbone.Router.prototype);

// Router.prototype.routes = {
//   '': 'index',
//   'chat': 'chat'
// };

// Router.prototype.index = function(){
//   $('#app').html(JST.index());
// };

// Router.prototype.chat = function(){
//   $('#app').html(JST.chat());
// };
