Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('projects'), Meteor.subscribe('components')];
  }
});

Router.route('/', {name: 'projectsList'});

Router.route('/projects/:_id', {
  name: 'projectPage',
  data: function() { return Projects.findOne(this.params._id); }
});

Router.route('/componentSubmit', {name: 'componentSubmit'});
Router.route('/newProject', {name: 'newProject'});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
};

Router.onBeforeAction('dataNotFound', {only: 'projectPage'});
Router.onBeforeAction(requireLogin, {only: 'newProject'})