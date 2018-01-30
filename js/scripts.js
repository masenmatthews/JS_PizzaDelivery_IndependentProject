// Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.price = function() {
  var price = 0;
  if (this.size === "small" && this.toppings === "cheese" || this.size === "small" && this.toppings === "veggie") {
    price = price + 5;
  } else if (this.size === "small" && this.toppings === "meat-lovers" || this.size === "small" && this.toppings === "supreme") {
    price = price + 6;
  } else if (this.size === "medium" && this.toppings === "cheese" || this.size === "medium" && this.toppings === "veggie") {
    price = price + 7;
  } else if (this.size === "medium" && this.toppings === "meat-lovers" || this.size === "medium" && this.toppings === "supreme") {
    price = price + 8;
  } else if (this.size === "large" && this.toppings === "cheese" || this.size === "large" && this.toppings === "veggie") {
    price = price + 9;
  } else if (this.size === "large" && this.toppings === "meat-lovers" || this.size === "large" && this.toppings === "supreme") {
    price = price + 10;
  } else if (this.size === "extra-large" && this.toppings === "cheese" || this.size === "extra-large" && this.toppings === "veggie") {
    price = price + 11;
  } else if (this.size === "extra-large" && this.toppings === "meat-lovers" || this.size === "extra-large" && this.toppings === "supreme") {
    price = price + 12;
  } else {
    price = price;
  }
  this.price = price;
};

// User interface logic
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    var size = $("#pizza-size").val();
    var toppings = $("#pizza-toppings").val();
    var order = new Pizza(size, toppings)
    order.price();
    $("#final-pizza").text("The total for this " + size + " " + toppings + " pizza is " + order.price + " dollars");
    $("#order-total").show();
    $('#order-form').hide();
  });
});
