// Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.meatTopping = meatTopping;
  this.vegTopping1 = vegTopping1;
  this.vegTopping2 = vegTopping2;
  this.vegTopping3 = vegTopping3;
}

// function Price(size, meatTopping, vegTopping1, vegTopping2, vegTopping3) {
//   this.sizePrice = sizePrice;
//   this.meatToppingPrice = meatToppingPrice;
//   this.vegTopping1Price = vegTopping1Price;
//   this.vegTopping2Price = vegTopping2Price;
//   this.vegTopping3Price = vegTopping3Price;
// }

Pizza.prototype.pSize = function() {
  var sizePrice = 0;
  if (this.size === "small") {
    sizePrice = 5;
  } else if {this.size === "medium") {
    sizePrice = 6;
  } else if {this.size === "large") {
    sizePrice = 8;
  } else if {this.size === "extra-large") {
    sizePrice = 10;
  }
  this.sizePrice = sizePrice;
};

Pizza.prottype.meatTopping = function() {
  var meatToppingPrice = 0;
  if (this.meatTopping === "pep") {
    meatToppingPrice = 3;
  } else if {this.meatTopping === "saus") {
    meatToppingPrice = 4;
  } else if {this.meatTopping === "ham") {
    meatToppingPrice = 2;
  } else if {this.meatTopping === "nomeat") {
    meatToppingPrice = 0;
  }
  this.meatToppingPrice = meatToppingPrice;
};

Pizza.prottype.vegTopping1 = function() {
  var vegTopping1Price = 0;
  if (this.vegTopping1 === "spin") {
    vegTopping1Price = 2;
  } else if {this.vegTopping1 === "kale") {
    vegTopping1Price = 3;
  } else if {this.vegTopping1 === "lettuce") {
    vegTopping1Price = 1;
  } else if {this.vegTopping1 === "nogreens") {
    vegTopping1Price = 0;
  }
  this.vegTopping1Price = vegTopping1Price;
};

Pizza.prottype.vegTopping2 = function() {
  var vegTopping2Price = 0;
  if (this.vegTopping2 === "jal") {
    vegTopping2Price = 1;
  } else if {this.vegTopping2 === "ban") {
    vegTopping2Price = 2;
  } else if {this.vegTopping2 === "bell") {
    vegTopping2Price = 3;
  } else if {this.vegTopping2 === "nopeppers") {
    vegTopping2Price = 0;
  }
  this.vegTopping2Price = vegTopping2Price;
};

Pizza.prottype.vegTopping3 = function() {
  var vegTopping3Price = 0;
  if (this.vegTopping3 === "mush") {
    vegTopping3Price = 3;
  } else if {this.vegTopping3 === "oni") {
    vegTopping3Price = 1;
  } else if {this.vegTopping3 === "tom") {
    vegTopping3Price = 2;
  } else if {this.vegTopping3 === "noextras") {
    vegTopping3Price = 0;
  }
  this.vegTopping3Price = vegTopping3Price;
};

Pizza.prototype.totalPrice = function() {
  var pizzaprice = forEach(Pizza) {

    
  }
}

// User interface logic
$(document).ready(function() {
  event.preventDefault();

  $("form#order-form").submit(function(event) {
  event.preventDefault();

}
