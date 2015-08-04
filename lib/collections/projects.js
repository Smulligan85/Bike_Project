Projects = new Mongo.Collection("projects");

Meteor.methods({
  projectInsert: function(projectAtttributes) {
    check(Meteor.userId(), String);
    check(projectAtttributes, {
      title: String
    });

    var errors = validateProject(projectAttributes);
    if (errors.title || errors.url)
      throw new Meteor.Error('invalid-project', "You must set a title for your project");

    var user = Meteor.user();
    var project = _.extend(projectAtttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var projectId = Projects.insert(project);
    return {
      _id: projectId
    };
  }
});

validateProject = function (project) {
  var errors = {};
  if (!project.title)
    errors.title = "Please fill in a project title";
  return errors;
}

Projects.allow({
  insert: function(userId, doc) {
    // only allow project creation if you are logged in
    return !! userId;
  }
});