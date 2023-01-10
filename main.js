//SIMPLE ADDITION IPO CALCULATOR BY MR.V
document.getElementById("btn").addEventListener("click", btnClicked);


let grade1 = document.getElementbyId("1").value;
let grade2 = document.getElementById("2").value;
let grade3 = document.getElementById("3").value;
let grade4 = document.getElementById("4").value;
let grade5 = document.getElementById("5").value;


function btnClicked () {
let total = (grade1 + grade2 + grade3 + grade4 + grade5) /5


alert(total);

}