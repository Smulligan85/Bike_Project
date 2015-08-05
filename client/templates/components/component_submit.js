Template.componentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();
    
    var component = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      price: $(e.target).find('[name=price]').val(),
      projectId: template.data._id
    };

    component._id = Components.insert(component);
    Router.go("projectPage");
  }
});