var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("ul1");
var listItems = document.getElementsByClassName('pred1')

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.classList.add('deletable')
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	li.appendChild(btn);
	btn.onclick= removeDad;

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick= function(event){
	var target=event.target;
	target.classList.toggle("done");
}


// function listLenght(){
// 	return listItems.length
// }

// function deleteButton(){
// 	var btn = document.createElement("button");
// 	btn.appendChild(document.createTextNode("Delete!"));
// 	listItems[i].appendChild(btn);
// 	btn.onclick= removeDad;
// }

// for(i=0; i < listLenght(); i++){
// 	deleteButton()
// }

function removeDad(event){
	event.target.parentNode.remove();
}


// LIST 2 WE GOT THIS BruH! 

var button2 = document.getElementById("enter2");
var input2 = document.getElementById("userinput2");
var ul2 = document.getElementById("ul2");
var listItems2 = document.getElementsByClassName('pred2')

function inputLength2() {
	return input2.value.length;
}

function createListElement2() {
	var li = document.createElement("li");
	li.classList.add('deletable')
	li.appendChild(document.createTextNode(input2.value));
	ul2.appendChild(li);
	input2.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	li.appendChild(btn);
	btn.onclick= removeDad;

}

function addListAfterClick2() {
	if (inputLength2() > 0) {
		createListElement2();
	}
}

function addListAfterKeypress2(event) {
	if (inputLength2() > 0 && event.keyCode === 13) {
		createListElement2();
	}
}

button2.addEventListener("click", addListAfterClick2);

input2.addEventListener("keypress", addListAfterKeypress2);

function listLenght2(){
	return listItems2.length;
}

function deleteButton2(){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listItems2[i].appendChild(btn);
	btn.onclick= removeDad;
}

for(i=0; i < listLenght2(); i++){
	deleteButton2();
}


