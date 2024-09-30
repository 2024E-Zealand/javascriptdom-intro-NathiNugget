
console.log("Skriv dit Javascript her");
let a = document.getElementsByTagName("li");
console.log(a);

let isCool = true; 
let isHidden = false; 
function changeState(id){
    id = document.getElementById(id); 
    if (isCool){
        id.className = "hot"; 
        id.textContent = "Gør 3. element cool!";
    }
    else {
        id.textContent = "Gør 3. element hot!"; 
        id.className = "cool"; 
    }
    isCool = !isCool; 
    console.log(isCool);
}

function changeVisibility(id){
    id = document.getElementById(id); 
    if (!isHidden){
        id.style.visibility = "hidden"; 
        id.textContent = "Gør 3. skjult!"; 
    }
    else {
        id.style.visibility = "visible"; 
        id.textContent = "Gør 3. synlig!"; 
    }
    isHidden = !isHidden; 
}

let elemOne = document.getElementById('one'); 
console.log("Element one before changing it " + elemOne.textContent);
let elemOneChildren = document.getElementById('one').children; 
for (let index = 0; index < elemOneChildren.length; index++) {
    const element = elemOneChildren[index];
    element.textContent = "bad";
    
}
elemOne.textContent = elemOneChildren.item(0).textContent + " bananas";
console.log(elemOneChildren);


console.log("Element one after changing it " + elemOne.textContent);
console.log("Now changing 3rd element to cool class"); 
let elemCollection = document.getElementsByTagName('li'); 
let elem = elemCollection[2];
elem.className = "cool"; 

console.log(elem); 

function AddHealthyClass(id){
    id.ClassList.add('healthy');
}

let unhealthyItems = document.getElementsByClassName('hot'); 
const myArr = [unhealthyItems]; 
console.log(unhealthyItems);

let nodes = document.getElementsByClassName('hot');
console.log(nodes);
let parent = nodes[0].parentElement;
console.log(parent);
let firstChild = parent.children[0];
let lastChild = parent.lastChild; 
console.log(lastChild);

firstChild.style.backgroundColor = "red";
console.log(firstChild);

function addToList(id){
    let map = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]; 
    for (let index = 0; index < map.length; index++) {
        map[index].value = index; 
        
    }
    let newElem = document.createElement("li");
    newElem.id = map[parent.children.length];
    newElem.className = "hot";
    let inputFieldText = document.getElementById(id).value; 
    let textNode = document.createTextNode(inputFieldText); 
    newElem.appendChild(textNode);
    parent.appendChild(newElem); 
}


console.log("slut på JavaScript");
