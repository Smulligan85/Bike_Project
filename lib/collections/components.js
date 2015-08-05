Components = new Mongo.Collection("components");

Meteor.methods({
  componentInsert: function(componentAttributes) {
    check(this.userId, String);
    check(componentAttributes, {
      projectId: String,
      url: String,
      title: String,
      price: String
    });
    var user = Meteor.user();
    var project = Projects.findOne(componentAttributes.projectId);
    if (!project)
      throw new Meteor.Error('invalid-component', 'You must comment on a post');
    component = _.extend(componentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    return Components.insert(component);
  }
});