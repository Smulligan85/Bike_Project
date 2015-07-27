Projects = new Mongo.Collection("projects");

Meteor.methods({
  projectInsert: function(projectAtttributes) {
    check(Meteor.userId(), String);
    check(projectAtttributes, {
      title: String
    });

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

Projects.allow({
  insert: function(userId, doc) {
    // only allow project creation if you are logged in
    return !! userId;
  }
});