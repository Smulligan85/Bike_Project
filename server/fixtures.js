if (Components.find().count() === 0) {

  var seanId = Meteor.users.insert({
    profile: { name: 'Sean' }
  });
  var sean = Meteor.users.findOne(seanId);

  var projectId = Projects.insert({
    title: 'Road Bike',
    userId: sean._id,
    author: sean.profile.name
  });

  Components.insert({
    title: "Stem",
    url: "http://example.com",
    price: "30.00",
    userId: sean._id,
    projectId: projectId
  });

  Components.insert({
    title: "Handlebar",
    url: "http://example.com",
    price: "30.00",
    userId: sean._id,
    projectId: projectId
  });

  Components.insert({
    title: "Wheelset",
    url: "http://example.com",
    price: "300.00",
    userId: sean._id,
    projectId: projectId
  });
}