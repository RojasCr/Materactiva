//import { coeficiente, exponente, Polinomio } from "./ejercicio1";
const r = new Polinomio();
r.crear = (terms) => {
    let expresion = ``;
    for(let i=0;i<terms;i++){
        r.coef[i]=coeficiente(100);
        r.exp[i]=exponente(5);
        expresion += `${r.coef[i] > 0 ? "+" + r.coef[i] : r.coef[i]}x<sup>${r.exp[i]}</sup>`;
    }
    r.termInd = coeficiente(100);
    return expresion + (r.termInd > 0 ? "+" + r.termInd : r.termInd);
};
const x = () => {
    return (exponente(10) - 1);
}


var xCero = 0;
const generar2 = () => {
    xCero = x();
    let lista = `<div id="evaluar">
                    <div class="contenedorPoli">
                        <div class="poli">R(x) = ${r.crear(1)} </div>
                        <div class="lateral">para x=${xCero} R(${xCero}) = <input id="R(x)"> <span id="eval"></span></div>
                    </div>
                </div>`;
    document.getElementById("evaluar").innerHTML = lista;
}

const verificar2 = () => {
    //let x = document.getElementById("x");
    let R = document.getElementById("R(x)");

    if(R.value == (r.coef[0]*Math.pow(xCero, r.exp[0])+r.termInd)){
        document.getElementById("eval").innerHTML = "¡Bien!";
    } else {
        document.getElementById("eval").innerHTML = "¡Volvé a intentar!";
    }
    
}