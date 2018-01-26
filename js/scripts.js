// Business logic
function Pizza(size, meatTopping, vegTopping1, vegTopping2, vegTopping3) {
  this.size = size;
  this.meatTopping = meatTopping;
  this.vegTopping1 = vegTopping1;
  this.vegTopping2 = vegTopping2;
  this.vegTopping3 = vegTopping3;
  this.pizzaPrice = pizzaPrice;
}

Pizza.prototype.Size = function(size) {
  var sizePrice = 0;
  if (this.size === "small") {
    sizePrice = 5;
  } else if (this.size === "medium") {
    sizePrice = 6;
  } else if (this.size === "large") {
    sizePrice = 8;
  } else if (this.size === "extra-large") {
    sizePrice = 10;
  }
  this.sizePrice = sizePrice;
};

Pizza.prototype.meatTopping = function(meatTopping) {
  var meatToppingPrice = 0;
  if (this.meatTopping === "pep") {
    meatToppingPrice = 3;
  } else if (this.meatTopping === "saus") {
    meatToppingPrice = 4;
  } else if (this.meatTopping === "ham") {
    meatToppingPrice = 2;
  } else if (this.meatTopping === "nomeat") {
    meatToppingPrice = 0;
  }
  this.meatToppingPrice = meatToppingPrice;
};

Pizza.prototype.vegTopping1 = function(vegTopping1) {
  var vegTopping1Price = 0;
  if (this.vegTopping1 === "spin") {
    vegTopping1Price = 2;
  } else if (this.vegTopping1 === "kale") {
    vegTopping1Price = 3;
  } else if (this.vegTopping1 === "lettuce") {
    vegTopping1Price = 1;
  } else if (this.vegTopping1 === "nogreens") {
    vegTopping1Price = 0;
  }
  this.vegTopping1Price = vegTopping1Price;
};

Pizza.prototype.vegTopping2 = function(vegTopping2) {
  var vegTopping2Price = 0;
  if (this.vegTopping2 === "jal") {
    vegTopping2Price = 1;
  } else if (this.vegTopping2 === "ban") {
    vegTopping2Price = 2;
  } else if (this.vegTopping2 === "bell") {
    vegTopping2Price = 3;
  } else if (this.vegTopping2 === "nopeppers") {
    vegTopping2Price = 0;
  }
  this.vegTopping2Price = vegTopping2Price;
};

Pizza.prototype.vegTopping3 = function(vegTopping3) {
  var vegTopping3Price = 0;
  if (this.vegTopping3 === "mush") {
    vegTopping3Price = 3;
  } else if (this.vegTopping3 === "oni") {
    vegTopping3Price = 1;
  } else if (this.vegTopping3 === "tom") {
    vegTopping3Price = 2;
  } else if (this.vegTopping3 === "noextras") {
    vegTopping3Price = 0;
  }
  this.vegTopping3Price = vegTopping3Price;
};

Pizza.prototype.totalPrice = function(pizzaPrice) {
  var pizzaPrice = this.sizePrice + this.meatToppingPrice + this.vegTopping1Price + this.vegTopping2Price + this.vegTopping3Price;
};

// User interface logic

var pizzaOrder = function() {
  var size = $("pizza-size").val();
  var meatTopping = $("#meat-topping").val();
  var vegTopping1 = $("#veg-topping1").val();
  var vegTopping2 = $("#veg-topping2").val();
  var vegTopping3 = $("#veg-topping3").val();

  var pizzaSelection = new Pizza (size, meatTopping, vegTopping1, vegTopping2, vegTopping3)
  return pizzaSelection;
};

$(document).ready(function() {

  $("button#submit-order").submit(function(event) {
    event.preventDefault();
      $("span.size-output").text($("#size").val());
      $("span.meat-output").text($("#meat-topping").val());
      $("span.veg1-output").text($("#veg-topping1").val());
      $("span.veg2-output").text($("#veg-topping2").val());
      $("span.veg3-output").text($("#veg-topping3").val());

      return
  });
});
