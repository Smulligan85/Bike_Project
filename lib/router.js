Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', {name: 'projectsList'});
Router.route('/newComponent', {name: 'newComponent'});
Router.route('/newProject', {name: 'newProject'})

