Template.componentsList.helpers({
  components: function () {
    return Components.find();

  total: function () {
    components_price = Components.find({fields: price});
    components_price.reduce(function(previous, current) return previous + current;);
  }
  }
});