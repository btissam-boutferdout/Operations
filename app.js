/*var cost1 = document.getElementById("cost-num1");
var cost2 = document.getElementById("cost-num2");
var cost3 = document.getElementById("cost-num3");
//
function calc() {
  cost1 = document.getElementById("cost-num1").value;
  cost2 = document.getElementById("cost-num2").value;
  cost3 = document.getElementById("cost-num3").value;
}
  */

var cost1 = document.getElementById("cost-num1");
var cost2 = document.getElementById("cost-num2");
var cost3 = document.getElementById("cost-num3");
var res = total;

function calc() {
  var value1 = parseInt(cost1.value);
  var value2 = parseInt(cost2.value);
  var value3 = parseInt(cost3.value);

  var total = value1 + value2 + value3;
  alert("the Total is " + total + "$");

  // succecive = document.body.innerHTML = "total is " + total;

  //document.querySelector(".paragraph").innerHTML =
  //  "The total cost is: $" + total.toFixed(2);
}
