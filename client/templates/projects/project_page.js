



Template.projectPage.helpers({
  components: function() {
    return Components.find({projectId: this._id});
  }
});