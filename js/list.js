
console.log("Skriv dit Javascript her");
let a = document.getElementsByTagName("li");
console.log(a);
let body = document.getElementsByTagName('body')[0]
body.style.fontFamily = "JetBrainsMono NF Regular";
body.style.backgroundColor = "#A88905";
document

let isCool = true; 
let isHidden = false; 
function changeState(id){
    id = document.getElementById(id); 
    let stateBtn = document.getElementById('stateBtn'); 
    if (isCool){
        id.className = "hot"; 
        stateBtn.textContent = "Gør 3. element cool!";
    }
    else {
        id.className = "cool"; 
        stateBtn.textContent = "Gør 3. element hot!"; 
    }
    isCool = !isCool; 
    console.log(isCool);
}

function changeVisibility(id){
    id = document.getElementById(id); 
    let visBtn = document.getElementById('visibilityBtn');
    if (!isHidden){
        id.style.visibility = "hidden"; 
        visBtn.textContent = "Gør 3. skjult!"; 
    }
    else {
        id.style.visibility = "visible"; 
        visBtn.textContent = "Gør 3. synlig!"; 
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
const map = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]; 
function addToList(id){
   
    let newElem = document.createElement("li");
    newElem.id = map[parent.children.length];
    newElem.className = "hot";
    let inputFieldText = document.getElementById(id).value; 
    let textNode = document.createTextNode(inputFieldText); 
    newElem.appendChild(textNode);
    parent.appendChild(newElem); 
}

function removeLastFromList(){
    parent = document.getElementsByTagName('ul')[0]; 
    
    parent.removeChild(parent.lastChild);  
    parent.removeChild(parent.lastChild); 
}

function randomColor(){
    parent = document.getElementsByTagName('ul')[0];
    
    let randInt = Math.round(Math.random()*parent.children.length);
    let randElem = parent.children[randInt]; 
    console.log(randInt);
    let randColor = Math.floor(Math.random()*16777215).toString(16);
    randElem.style.backgroundColor = "#" + randColor;
}

function setBackgroundImage(url){
    let body = document.getElementsByTagName('body')[0];
    let URL = document.getElementById(url).value
    console.log(body);
    
    body.style.background = `URL(${URL})`;
}




console.log("slut på JavaScript");
