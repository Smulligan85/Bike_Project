Template.newProject.events({
  'submit form': function(e) {
    e.preventDefault();

    var project = {
      title: $(e.target).find('[name=title]').val(),
    };

    project._id = Projects.insert(project);
    Router.go('/');
  }
});