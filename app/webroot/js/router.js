// Generated by CoffeeScript 1.4.0
(function() {
  var App, Router, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App = (_ref = window.App) != null ? _ref : {};

  Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      "365wzs/": 'index',
      "365wzs/main": 'index',
      "365wzs/shares": 'index',
      "365wzs/users/view/:user_id": 'profile',
      "*actions": 'default'
    };

    Router.prototype["default"] = function(actions) {};

    Router.prototype.index = function() {
      var postsCollection;
      postsCollection = new App.Collections.Posts;
      postsCollection.url = "" + App.BASEURL + "/pipe/0/32";
      return postsCollection.fetch({
        success: function() {
          var col, cols_num, i, post, row, size, _i, _len, _ref1;
          App.zexpo = new App.Views.ZExpo({
            collection: postsCollection
          });
          cols_num = 7;
          size = 1000 / cols_num;
          _ref1 = postsCollection.models;
          for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
            post = _ref1[i];
            row = Math.floor(i / cols_num);
            col = i % cols_num;
            post.set({
              top: row * size,
              left: col * size
            });
          }
          return $(document.body).append(App.zexpo.render().el);
        },
        error: function() {
          var col, cols_num, i, post, row, size, _i, _j, _len, _len1, _ref1;
          for (_i = 0, _len = posts.length; _i < _len; _i++) {
            post = posts[_i];
            postsCollection.add(post);
          }
          App.zexpo = new App.Views.ZExpo({
            collection: postsCollection
          });
          cols_num = 7;
          size = 1000 / cols_num;
          _ref1 = postsCollection.models;
          for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
            post = _ref1[i];
            row = Math.floor(i / cols_num);
            col = i % cols_num;
            post.set({
              top: row * size,
              left: col * size,
              pic_url: post.get('src')
            });
          }
          return $(document.body).append(App.zexpo.render().el);
        }
      });
    };

    Router.prototype.profile = function(user_id) {
      var user_basic_info;
      return user_basic_info = new App.Views.UserBasicInfo({
        user_id: user_id
      });
    };

    return Router;

  })(Backbone.Router);

  App.Router = Router;

}).call(this);
