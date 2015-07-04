Template.newComponent.events({
  'submit form': function(e) {
    e.preventDefault();

    var component = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      price: $(e.target).find('[name=price]').val()
    };

    component._id = Components.insert(component);
    Router.go('/');
  }
});