Template.newProject.events({
  'submit form': function(e) {
    e.preventDefault();

    var project = {
      title: $(e.target).find('[name=title]').val(),
    };

    Meteor.call('projectInsert', project, function(error, result) {
      if (error)
        return alert(error.reason);

    Router.go('projectPage', {_id: result._id});
    });
  }
});