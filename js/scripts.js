// Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.price = function(price) {
  var price = [];
  if (this.size === "small" && this.toppings === "cheese" || "veggie") {
    price = 5;
  } else if (this.size === "small" && this.toppings === "meat-lovers" || "supreme") {
    price = 6;
  } else if (this.size === "medium" && this.toppings === "cheese" || "veggie") {
    price = 6;
  } else if (this.size === "medium" && this.toppings === "meat-lovers" || "supreme") {
    price = 7;
  } else if (this.size === "large" && this.toppings === "cheese" || "veggie") {
    price = 8;
  } else if (this.size === "large" && this.toppings === "meat-lovers" || "supreme") {
    price = 9;
  } else if (this.size === "extra-large" && this.toppings === "cheese" || "veggie") {
    price = 10;
  } else if (this.size === "extra-large" && this.toppings === "meat-lovers" || "supreme") {
    price = 11;
  }
  this.price = price;
};

// User interface logic
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#pizza-size").val();
    var pizzaToppings = $("#pizza-toppings").val();
    var order = new Pizza(pizzaSize, pizzaToppings)
    console.log(order);
  $("#order-total").show();
  $('#order-form').hide();
});
});
