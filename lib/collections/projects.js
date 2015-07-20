Projects = new Mongo.Collection("projects");

Projects.allow({
  update: function(userId, project) { return ownsDocument(userId, project); },
  remove: function(userId, project) { return ownsDocument(userId, project); },
});