var names = ["Ratnakumar", "Pushpa", "Anjali", "Myself"];
var photos = ["father.png","mother.jpg,","sister.jpg","brother.png"];
var i=0;
function nextslide(){
document.getElementById("names").innerHTML=text[i];
document.getElementById("photos").src=img[i]; i++;
}