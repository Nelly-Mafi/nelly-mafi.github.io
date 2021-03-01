//horizontal
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("value1");


output1.innerHTML = slider1.value;


slider1.oninput = function(){
  output1.innerHTML = this.value;
}

//vertical
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2");


output2.innerHTML = slider2.value;


slider2.oninput = function(){
  output2.innerHTML = this.value;
}