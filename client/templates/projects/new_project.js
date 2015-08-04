Template.newProject.events({
  'submit form': function(e) {
    e.preventDefault();

    var project = {
      title: $(e.target).find('[name=title]').val(),
    };

    var errors = validateProject(project);
    if (errors.title || errors.url)
      return Session.set('newProjectErrors', errors);

    Meteor.call('projectInsert', project, function(error, result) {
      if (error)
        return throwError(error.reason);

    Router.go('projectPage', {_id: result._id});
    });
  }
});

Template.newProject.onCreated(function() {
  Session.set('newProjectErrors', {});
});
Template.newProject.helpers({
  errorMessage: function(field) {
    return Session.get('newProjectErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('newProjectErrors')[field] ? 'has-error' : '';
  }
});