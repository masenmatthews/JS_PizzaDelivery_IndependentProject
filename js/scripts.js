// Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.Price = function() {
  var price = 0;
  if (this.size === "small") {
    price = 4;
  } else if (this.size === "medium") {
    price = 5;
  } else if (this.size === "large") {
    price = 6;
  } else if (this.size === "extra-large") {
    price = 8;
  }
  this.toppings.forEach(function() {
    price += 1;
  });
  this.price = price;
};

// User interface logic
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    $("#order-total").show();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var pizzaToppings = $(this).val();
      var pizzaSize = $("#pizza-size").val();
      $("span.total").append(pizzaToppings + pizzaSize);
    });
  $('#order-form').hide();
});
});
