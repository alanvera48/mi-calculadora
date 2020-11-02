
var a;
var b;
var c;

var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var div = document.getElementById('div');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var mul = document.getElementById('mul');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var menos = document.getElementById('menos');
var reset = document.getElementById('reset');
var cero = document.getElementById('cero');
var suma = document.getElementById('suma');
var igual = document.getElementById('igual');
var resul = document.getElementById('resul');



siete.onclick = ()=> {
	resul.textContent = resul.textContent + "7";
}

ocho.onclick = ()=> {
	resul.textContent = resul.textContent + "8";
}
nueve.onclick = ()=> {
	resul.textContent = resul.textContent + "9";
}
cuatro.onclick = ()=> {
	resul.textContent = resul.textContent + "4";
}
cinco.onclick = ()=> {
	resul.textContent = resul.textContent + "5";
}
seis.onclick = ()=> {
	resul.textContent = resul.textContent + "6";
}
uno.onclick = ()=> {
	resul.textContent = resul.textContent + "1";
}
dos.onclick = ()=> {
	resul.textContent = resul.textContent + "2";
}
tres.onclick = ()=> {
	resul.textContent = resul.textContent + "3";
}

cero.onclick = ()=> {
	resul.textContent = resul.textContent + "0";
}


function limpiar(){ 
		resul.textContent = " ";

	}

suma.onclick = ()=>{
	a = resul.textContent;
	c = "+";
	limpiar();
}

menos.onclick = ()=>{
	a = resul.textContent;
	c = "-";
	limpiar();
}

div.onclick = ()=>{
	a = resul.textContent;
	c = "/";
	limpiar();
}

mul.onclick = ()=>{
	a = resul.textContent;
	c = "*";
	limpiar();

}

function ref(){
		a = 0;
		b = 0;
		c = "";

	}

function resolver(){

	var equal = 0;
	switch (c) {
		case "+":
		equal = parseFloat(a) + parseFloat(b);
		break;
		case "-":
		equal = parseFloat(a) - parseFloat(b);
		break;
		case "/":
		equal = parseFloat(a) / parseFloat(b);
		break;
		case "*": 
		equal = parseFloat(a) * parseFloat(b);
		break;
}
	ref();

	resul.textContent = equal;

	}

igual.onclick=()=>{
	b = resul.textContent;
	resolver();

	}


reset.onclick= ()=>{
	a =0;
	b=0;
	resul.textContent = " ";

}	




