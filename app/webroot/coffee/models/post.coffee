App = window.App ? {}
App.Models = App.Models ? {}

class Post extends Backbone.Model
    defaults:
        top: 0
        left: 0
        src: '/test/post'

App.Models.Post = Post
