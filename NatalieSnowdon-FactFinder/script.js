/*
	https://coolors.co/d3c1c3-734b5e-124559-6e9887-a8dadc
	https://coolors.co/586994-7d869c-a2abab-b4c4ae-e5e8b6
	https://coolors.co/f2dfd7-fef9ff-d4c1ec-9f9fed-736ced
	https://coolors.co/fde8e9-e3bac6-bc9ec1-596475-1f2232
	https://coolors.co/8a716a-c2b8b2-197bbd-125e8a-204b57
*/

var factForm = document.querySelector('form');
factForm.a.addEventListener("click", factOne);

function factOne(){
	document.getElementById("factdisplay").innerHTML = "Pope Gregory IV declared war on cats because he believed they were related to Satan.";
	document.getElementById("factdisplay").style.fontFamily = "courier new";
	document.getElementById("factdisplay").style.backgroundColor = "#D3C1C3";
	document.querySelector("body").style.backgroundColor = "#734B5E";
	document.querySelector("form").style.backgroundColor = "#124559";
	document.getElementById("factdisplay").style.borderColor = "#6E9887";
	document.querySelector("form").style.borderColor = "#A8DADC";
}

factForm.b.addEventListener("click", factTwo);

function factTwo(){
	document.getElementById("factdisplay").innerHTML = "The Olymic Games used to have events for the fine arts, which included: literature, architecture, sculpture, painting, and music.";
	document.getElementById("factdisplay").style.fontFamily = "courier new";
	document.getElementById("factdisplay").style.backgroundColor = "#E5E8B6";
	document.querySelector("body").style.backgroundColor = "#586994";
	document.querySelector("form").style.backgroundColor = "#A2ABAB";
	document.getElementById("factdisplay").style.borderColor = "#7D869C";
	document.querySelector("form").style.borderColor = "#B4C4AE";
}

factForm.c.addEventListener("click", factThree);

function factThree(){
	document.getElementById("factdisplay").innerHTML = "Pineapples were once considered a sign of wealth in England as people would carry them around to show off their social status.";
	document.getElementById("factdisplay").style.fontFamily = "courier new";
	document.getElementById("factdisplay").style.backgroundColor = "#D4C1EC";
	document.querySelector("body").style.backgroundColor = "#F2DFD7";
	document.querySelector("form").style.backgroundColor = "#736CED";
	document.getElementById("factdisplay").style.borderColor = "#FEF9FF";
	document.querySelector("form").style.borderColor = "#9F9FED";
}

factForm.d.addEventListener("click", factFour);

function factFour(){
	document.getElementById("factdisplay").innerHTML = "The Great Pyramid of Giza doesn't actually have a point at the top. It is not known for sure whether there ever was a capstone, but it would defeat the purpose if there wasn't.<br></br><img src='images/gizapyramid.jpg' alt='Great Pyramid of Giza'>";
	document.getElementById("factdisplay").style.fontFamily = "courier new";
	document.getElementById("factdisplay").style.backgroundColor = "#E3BAC6";
	document.querySelector("body").style.backgroundColor = "#596475";
	document.querySelector("form").style.backgroundColor = "#BC9EC1";
	document.getElementById("factdisplay").style.borderColor = "#FDE8E9";
	document.querySelector("form").style.borderColor = "#1F2232";
}

factForm.e.addEventListener("click", factFive);

function factFive(){
	document.getElementById("factdisplay").innerHTML = "You are unable to taste food without saliva as the chemicals from the food need to dissolve in the saliva in order for the taste bud receptors to detect it.";
	document.getElementById("factdisplay").style.fontFamily = "courier new";
	document.getElementById("factdisplay").style.backgroundColor = "#C2B8B2";
	document.querySelector("body").style.backgroundColor = "#8A716A";
	document.querySelector("form").style.backgroundColor = "#125E8A";
	document.getElementById("factdisplay").style.borderColor = "#204B57";
	document.querySelector("form").style.borderColor = "#197BBD";
}