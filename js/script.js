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
    document.querySelector("#btnEj14").addEventListener("click", ej14);
    document.querySelector("#btnEj15").addEventListener("click", ej15);
    document.querySelector("#btnEj16").addEventListener("click", ej16);
    document.querySelector("#btnEj17").addEventListener("click", ej17);
    document.querySelector("#btnEj18").addEventListener("click", ej18);
    document.querySelector("#btnEj19").addEventListener("click", ej19);
    document.querySelector("#btnEj20").addEventListener("click", ej20);
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
/*     console.log(valor1, valor2) */
    if (document.querySelector("#ra1Ej11").checked) {
        res = valor1 + valor2
    } else if (document.querySelector("#ra2Ej11").checked) {
        res = valor1 - valor2
    } else if (document.querySelector("#ra3Ej11").checked) {
        res = valor1 * valor2
    } else if (document.querySelector("#ra4Ej11").checked) {
        res = valor1 / valor2
    }

    document.querySelector("#resEj11").innerHTML = res
}

function ej12() {
    let car;
    let vocales = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    car = document.querySelector("#valor1Ej12").value;
    if (vocales.includes(car)) {
        document.querySelector("#resEj12").innerHTML = "Es vocal"
    } else {
        document.querySelector("#resEj12").innerHTML = "No es vocal"
    }
}

function ej13() {
    let valor1, valor2;
    valor1 = document.querySelector("#valor1Ej13").value;
    valor2 = document.querySelector("#valor2Ej13").value;
    if ((valor1 % valor2) == 0) {
        document.querySelector("#resEj13").innerHTML = "Es múltiplo"
    } else {
        document.querySelector("#resEj13").innerHTML = "No es múltiplo"
    }
}

function ej14() {
    let valor1, plus;
    valor1 = parseInt(document.querySelector("#valor1Ej14").value);
    plus = document.querySelector("#ra1Ej14").checked;
/*     console.log(plus) */
    if (plus) {
        valor1 += valor1
    }
   /*  console.log(valor1) */
    if (valor1 >= 60000) {
        document.querySelector("#resEj14").innerHTML = "Europa";
    } else if (valor1 >= 30000) {
        document.querySelector("#resEj14").innerHTML = "Norte-America";
    } else if (valor1 >= 15000) {
        document.querySelector("#resEj14").innerHTML = "Sud-America";
    } else {
        document.querySelector("#resEj14").innerHTML = "Ningún destino disponible";
    }
}

function ej15() {
    let valor1, dept;
    valor1 = document.querySelector("#depsEj15").value;
    /* console.log(valor1) */
    /* Tenía ganas de hacerlo con arreglos pero nunca había usado el switch */
    switch (valor1) {
        case "A": {
            dept = "Canelones";
            break
        }
        case "B": {
            dept = "Maldonado";
            break
        }
        case "C": {
            dept = "Rocha";
            break
        }
        case "D": {
            dept = "Treinta y Tres";
            break
        }
        case "E": {
            dept = "Cerro Largo";
            break
        }
        case "F": {
            dept = "Rivera";
            break
        }
        case "G": {
            dept = "Artigas";
            break
        }
        case "H": {
            dept = "Salto";
            break
        }
        case "I": {
            dept = "Paysandú";
            break
        }
        case "J": {
            dept = "Rio Negro";
            break
        }
        case "K": {
            dept = "Soriano";
            break
        }
        case "L": {
            dept = "Colonia";
            break
        }
        case "M": {
            dept = "San José";
            break
        }
        case "N": {
            dept = "Flores";
            break
        }
        case "O": {
            dept = "Florida";
            break
        }
        case "P": {
            dept = "Lavalleja";
            break
        }
        case "Q": {
            dept = "Durazno";
            break
        }
        case "R": {
            dept = "Tacuarembó";
            break
        }
        case "S": {
            dept = "Montevideo";
            break
        }
    }
    /* console.log(dept) */
    document.querySelector("#resEj15").innerHTML = dept
}

function ej16() {
    let valor1, valor2, valor3;
    valor1 = document.querySelector("#valor1Ej16").value;
    valor2 = document.querySelector("#valor2Ej16").value;
    valor3 = document.querySelector("#valor3Ej16").value;
    if ((valor1 > valor2) && (valor1 > valor3)) {
        document.querySelector("#resEj16").innerHTML = "A es el mayor"
    } else {
        document.querySelector("#resEj16").innerHTML = "A no es el mayor"
    }
}

function ej17() {
    let valor1;
    valor1 = document.querySelector("#valor1Ej17").value;
    if ((valor1 > 10) || (valor1 < 0)) {
        document.querySelector("#resEj17").innerHTML = "Está fuera de rango"
    } else {
        document.querySelector("#resEj17").innerHTML = "Está en rango"
    }
}
let contadorEj18 = 0;
let valorEj18 = 0;

function ej18() {
    let valor1 = parseInt(document.querySelector("#valor1Ej18").value);
    if (contadorEj18 < 6) {
        valorEj18 += valor1
        contadorEj18++
        document.querySelector("#resEj18").innerHTML = `La suma es ${valorEj18}`
    } else {
        document.querySelector("#resEj18").innerHTML = `Ya se sumaron los 6 números el último resultado es ${valorEj18}`
    }
}
let contadorEj19 = 0;
let contadorM5Ej19 = 0;
let contadorM20Ej19 = 0;
let contadorL2Ej18=0;
function ej19() {
    let valor1 = parseInt(document.querySelector("#valor1Ej19").value);
    if (contadorEj19 < 5) {
        if (((valor1 % 5) === 0) && (valor1 > 20)) {
            contadorM20Ej19++
            contadorM5Ej19++
            contadorL2Ej18++
            contadorEj19++
        }else if ((valor1 % 5) === 0){
            contadorM5Ej19++
            contadorEj19++
        }else if (valor1 > 20) {
            contadorM20Ej19++
            contadorEj19++
        }
        document.querySelector("#resEj19").innerHTML = `${contadorM20Ej19} son mayores que 20, ${contadorM5Ej19} son múltiplos de 5 y ${contadorL2Ej18} cumplen ambas condiciones`
    }else {
        document.querySelector("#resEj19").innerHTML = `Límite alcanzado último resultado: ${contadorM20Ej19} son mayores que 20, ${contadorM5Ej19} son múltiplos de 5 y ${contadorL2Ej18} cumplen ambas condiciones`
    }
    
}
function ej20(){
    let harina, azucar, aceite, agua, min;
    harina=parseInt(document.querySelector("#valor1Ej20").value);
    azucar=parseInt(document.querySelector("#valor2Ej20").value);
    aceite=parseInt(document.querySelector("#valor3Ej20").value);
    agua=parseInt(document.querySelector("#valor4Ej20").value);
    min=Math.min(harina, (azucar/100), aceite, agua);
    document.querySelector("#resEj20").innerHTML = `se pueden hacer ${min} recetas`
}