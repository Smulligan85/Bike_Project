if (Components.find().count() === 0) {
  Components.insert({
    title: "Stem",
    url: "http://example.com",
    price: "30.00"
  });

  Components.insert({
    title: "Handlebar",
    url: "http://example.com",
    price: "30.00"
  });

  Components.insert({
    title: "Wheelset",
    url: "http://example.com",
    price: "300.00"
  });
}