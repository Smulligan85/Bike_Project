Meteor.publish('projects', function() {
  return Projects.find();
});

Meteor.publish('components', function() {
  return Components.find();
});