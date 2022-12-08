
const e = new Polinomio();
e.crear = (terms) => {
    let expresion = ``;
    for( let i=0; i < terms; i++){
        e.coef[i] = coeficiente(100);
        expresion += `${e.coef[i]}x`;
    }
    e.termInd = coeficiente(100);
    e.res = coeficiente(100);
    return expresion + (e.termInd > 0 ? "+" + e.termInd : e.termInd) + " = " + e.res;
}

const generar1 = () => {
    let ecuacion = `
                    <div class="contenedorEc">
                        <div class="ecuacion">${e.crear(1)}</div>
                        <div class="lateral"> x = <input id="x"> <span id="eval"></span></div>
                    </div>
                `;
    document.getElementById("ejer").innerHTML = ecuacion;
}

const verificar1 = () => {
    let X = document.getElementById("x");

    if(X.value == ((e.res - e.termInd) / e.coef[0]).toFixed(2)){
        document.getElementById("eval").innerHTML = "¡Bien!";
    } else {
        document.getElementById("eval").innerHTML = "¡Volvé a intentar!";
    }
    
    
}