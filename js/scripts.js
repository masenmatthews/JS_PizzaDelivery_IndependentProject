// Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.price = function(price) {
  var price = [];
  if (this.size === "small") {
    price = 4;
  } else if (this.size === "medium") {
    price = 5;
  } else if (this.size === "large") {
    price = 6;
  } else if (this.size === "extra-large") {
    price = 8;
  }
  });
  this.price = price;
};

// User interface logic
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#pizza-size").val();
    var pizzaToppings = $("#pizza-toppings").val();
    var order = new Pizza(pizzaSize, pizzaToppings)
  $("#order-total").show();
  $('#order-form').hide();
});
});
