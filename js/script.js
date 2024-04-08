window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEj1").addEventListener("click", ej1);
    document.querySelector("#btnEj2").addEventListener("click", ej2);
    document.querySelector("#btnEj3").addEventListener("click", ej3);
    document.querySelector("#btnEj4").addEventListener("click", ej4);
    document.querySelector("#btnEj5").addEventListener("click", ej5);
    document.querySelector("#btnEj6").addEventListener("click", ej6);
    document.querySelector("#btnEj7").addEventListener("click", ej7);
    document.querySelector("#btnEj8").addEventListener("click", ej8);
    document.querySelector("#btnEj9").addEventListener("click", ej9);
    document.querySelector("#btnEj10").addEventListener("click", ej10);
    document.querySelector("#btnEj11").addEventListener("click", ej11);
    document.querySelector("#btnEj12").addEventListener("click", ej12);
    document.querySelector("#btnEj13").addEventListener("click", ej13);
}

function ej1() {
    let valor1, res;
    valor1 = parseFloat(document.querySelector("#valor1Ej1").value);
    res = "El número es "
    if (valor1 >= 0) {
        document.querySelector("#resEj1").innerHTML = (res + "positivo")
    } else {
        document.querySelector("#resEj1").innerHTML = (res + "negativo")
    }
}

function ej2() {
    let valor1, res;
    valor1 = parseFloat(document.querySelector("#valor1Ej2").value);
    res = "El número es "
    if (valor1 > 10) {
        document.querySelector("#resEj2").innerHTML = (res + "mayor que 10")
    } else if (valor1 === 10) {
        document.querySelector("#resEj2").innerHTML = (res + "10")
    } else {
        document.querySelector("#resEj2").innerHTML = (res + "menor que 10")
    }
}

function ej3() {
    let valor1, res;
    valor1 = parseFloat(document.querySelector("#valor1Ej3").value);
    res = "El número es "
    if (valor1 > 20) {
        document.querySelector("#resEj3").innerHTML = (res + "mayor que 20")
    } else {
        document.querySelector("#resEj3").innerHTML = (res + "menor o igual que 20")
    }
}

function ej4() {
    let valor1, abs, res;
    valor1 = parseFloat(document.querySelector("#valor1Ej4").value);
    res = "El valor absoluto es "
    if (valor1 >= 0) {
        document.querySelector("#resEj4").innerHTML = (res + valor1)
    } else {
        abs = Math.abs(valor1)
        document.querySelector("#resEj4").innerHTML = (res + abs)
    }
}

function ej5() {
    let valor1, res;
    valor1 = parseFloat(document.querySelector("#valor1Ej5").value);
    res = "El número es "
    if ((valor1 < 20) && (valor1 > 10)) {
        document.querySelector("#resEj5").innerHTML = (res + "mayor que 10 y menor que 20")
    } else {
        document.querySelector("#resEj5").innerHTML = (res + "menor que 10 o mayor que 20")
    }
}

function ej6() {
    let valor1, res;
    valor1 = parseFloat(document.querySelector("#valor1Ej6").value);
    res = "El número ";
    if (((valor1 % 7) === 0) && ((valor1 % 3) === 0)) {
        document.querySelector("#resEj6").innerHTML = (res + "es múltiplo de 7 y 3")
    } else {
        document.querySelector("#resEj6").innerHTML = (res + "no es múltiplo de 7 y 3")
    }
}

function ej7() {
    let valor1;
    valor1 = parseFloat(document.querySelector("#valor1Ej7").value);
    if ((valor1 < -20) || (valor1 > 20)) {
        document.querySelector("#resEj7").innerHTML = ("Cumple")
    } else {
        document.querySelector("#resEj7").innerHTML = ("no cumple")
    }
}

function ej8() {
    let valor1;
    valor1 = parseFloat(document.querySelector("#valor1Ej8").value);
    if (valor1 > 30) {
        document.querySelector("#resEj8").innerHTML = ("Mayor que 30");
    } else if (valor1 < 10) {
        document.querySelector("#resEj8").innerHTML = ("Menor que 10");
    } else {
        document.querySelector("#resEj8").innerHTML = ("Entre 10 y 30")
    }
}

function ej9() {
    let dom, valor1, res;
    valor1 = Number(document.querySelector("#valor1Ej9").value);
    res = "Levantarse, "
    document.querySelector("#resEj9").innerHTML = (res + "<br>")
    if (valor1 < 10) {
        document.querySelector("#resEj9").innerHTML += "abrigarse mucho, <br>"

    } else if (valor1 > 20) {
        document.querySelector("#resEj9").innerHTML += "ponerse ropa cómoda, <br>"

    } else {
        document.querySelector("#resEj9").innerHTML += "abrigo moderado, <br>"
    }
    dom = (document.querySelector("#ra7Ej9").checked);
    if (dom) {
        document.querySelector("#resEj9").innerHTML += "Quedarse en casa, hoy no trabaja, <br>"

    } else {
        document.querySelector("#resEj9").innerHTML += "Ir al trabajo, <br>"
    }
}

function ej10() {
    let valor1, valor2;
    valor1 = parseFloat(document.querySelector("#valor1Ej10").value);
    valor2 = parseFloat(document.querySelector("#valor2Ej10").value);
    if (valor1 > valor2) {
        document.querySelector("#resEj10").innerHTML = (valor1 - valor2);
    } else {
        document.querySelector("#resEj10").innerHTML = (valor2 - valor1);
    }
}

function ej11() {
    let valor1, valor2, res;
    valor1 = Number(document.querySelector("#valor1Ej11").value);
    valor2 = Number(document.querySelector("#valor2Ej11").value);
    console.log(valor1,valor2)
    if (document.querySelector("#ra1Ej11").checked) {
        res = valor1 + valor2
    }else if (document.querySelector("#ra2Ej11").checked) {
        res = valor1 - valor2
    }else if (document.querySelector("#ra3Ej11").checked) {
        res = valor1 * valor2
    }else if (document.querySelector("#ra4Ej11").checked) {
        res = valor1 / valor2
    }

    document.querySelector("#resEj11").innerHTML = res
}
function ej12(){
    let car;
    let vocales=["a","A", "e", "E", "i", "I", "o", "O", "u", "U"];
    car=document.querySelector("#valor1Ej12").value;
if (vocales.includes(car)){
    document.querySelector("#resEj12").innerHTML = "Es vocal"
}else {
    document.querySelector("#resEj12").innerHTML = "No es vocal"
}
}
function ej13(){
    let valor1, valor2;
    valor1=document.querySelector("#valor1Ej13").value;
    valor2=document.querySelector("#valor2Ej13").value;
if ((valor1 % valor2)==0){
    document.querySelector("#resEj13").innerHTML = "Es múltiplo"
}else {
    document.querySelector("#resEj13").innerHTML = "No es múltiplo"
}
}