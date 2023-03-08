const one = "Lavington"
const two = "Karen"
const three = "Upperhill"
const four = "Buruburu"

let beepBoop = function(number) {
  let numberList = [];
  for (let i = 0; i <= number; i++) {
    numberList.push(i.toString());
  };

  let KnowYourNeighbooringEstates= numberList.map(function(numberEntry) {
    if (numberEntry.includes("3")) {
      return numberEntry = three;
    } else if (numberEntry.includes("2")) {
      return numberEntry = two;
    } else if (numberEntry.includes("1")) {
      return numberEntry = one;
    } else {
      return numberEntry;
    };
  });
 return KnowYourNeighbooringEstates;
};

$(document).ready(function() {
  $("form#users").submit(function(event) {
    event.preventDefault();
    let input = parseInt($("input#input").val());
    let result = beepBoop (input);
    $("#alert").text(result);
    });
  });
