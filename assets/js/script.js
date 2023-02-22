"use strict"

 

// let formElem = document.querySelector("form");



// formElem.addEventListener("submit", function(e){
//     e.preventDefault();

//     if (document.getElementById("exampleInputEmail1").value != "")
//      {
//         document.querySelector("span").classList.add("d-none");
//         writeWord(document.getElementById("exampleInputEmail1").value );
//     }else{
//         document.querySelector("span").classList.remove("d-none");
    
//     }

// })


// function writeWord(word){
//     document.querySelector("h1").innerText = word;
// }



// document.querySelector("a").addEventListener("click", function(e){
//     e.preventDefault();
//     console.log("clicked a");
// })


let dragElems = document.querySelectorAll(".item");
let dropElem = document.getElementById("drop-Elem");


// dragElem.ondrag = () =>{
//     console.log("dragging");
// }

// dragElem.ondragend = () =>{
//     console.log("drag end");
// }



// dragElem.ondragstart = (e) =>{
//     e.dataTransfer.setData("id", dragElem.getAttribute("id"))
// }




dropElem.ondragover = (e) =>{
    e.preventDefault();
}



dropElem.ondrop = (e) =>{
//    let id = e.dataTransfer.getData("id");

//    let elem = document.getElementById(id);
   


dragElems.forEach(element => {
    dropElem.append(element);
});
  
}




















// dragElems.forEach(element => {
//     element.addEventListener("dragstart",function(){
//         console.log(element);
//     })
// })