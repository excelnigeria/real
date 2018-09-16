



var ourButton = document.getElementById("btn")
var ourLocations = document.getElementById("selectpicker").getElementsByTagName("option");



function SearchItem (e){
if(e.target.nodeName == "option"){
    ourLocations.innerHTML = e.target.innerHTML;
   for(i =0; i < e.target.parentNode.children.length; i++ ) {
    e.target.parentNode.children[i].search("active");
}
}
    
    else if(e.target.nodeName != "option"){
          echo "not selected";
          }
}
   
ourButton.addEventListener("click", SearchItem);



