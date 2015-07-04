Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', {name: 'componentsList'});
Router.route('/newComponent', {name: 'newComponent'});
Router.route('/newProject', {name: 'newProject'})

