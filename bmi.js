function calculateBMI(){
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;
 weight = Number(weight);
 height = Number(height);
  if(weight == 0 || height == 0 || isNaN(weight) || isNaN(height)){
     alert("please enter valid weight and hieght values");
     return;
  }
  let bmi = weight / (height * height);
  return document.getElementById("bmi-value").innerHTML = bmi.toFixed();

}