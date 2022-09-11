//Elementos del polinomio
const coeficiente = (x) => {
   return Math.ceil(Math.random()*200-x);
};

const exponente = (x) => {
    return Math.ceil(Math.random()*x);
};

/*Clase de polinommios enteros*/
class Polinomio{
    constructor(){
        this.coef = [/*coeficiente(),coeficiente()*/];//Math.floor(Math.random()*100);
        this.exp = [/*exponente(),exponente()*/];//Math.floor(Math.random()*10);
        this.termInd = 0;
    }
    crear = (terms) => {
        //return `${this.coef[0]}x<sup>${this.grado[0]}</sup> + ${this.coef[1]}x<sup>${this.grado[1]}</sup>`;
        let expresion = ``;
        for(let i=0;i<terms;i++){
            this.coef[i]=coeficiente(100);
            this.exp[i]=exponente(10);
            expresion += `${this.coef[i] > 0 ? "+" + this.coef[i] : this.coef[i]}x<sup>${this.exp[i]}</sup>`;
        }
        this.termInd = coeficiente(100);
        return expresion + (this.termInd > 0 ? "+" + this.termInd : this.termInd);
    }
}

//Creación de polinomios
const p = new Polinomio();
const q = new Polinomio();

//Generación de ejercicios
const generar1 = () => {
    let lista = `<ol>
                    <li>
                        <div class="contenedorPoli">
                            <div class="poli">${p.crear(1)}</div>
                            <div class="lateral">Grado: <input id="res1"> <span id="respuesta1"></span> C.P: <input id="CP1"> <span id="resCP1"></span></div>
                        </div>
                    </li>
                    <li>
                        <div class="contenedorPoli">
                            <div class="poli">${q.crear(2)}</div>
                            <div class="lateral">Grado: <input id="res2"> <span id="respuesta2"></span> C.P: <input id="CP2"> <span id="resCP2"></span></div>
                        </div>
                    </li>
                </ol>`;
    document.getElementById("enteros").innerHTML = lista;
}

//Verificación de resultados
const verificar1 = () => {
    let resUno = document.getElementById("res1");
    let resDos = document.getElementById("res2");
    let cpUno = document.getElementById("CP1");
    let cpDos = document.getElementById("CP2");
    let gradoP = Math.max(...p.exp);
    let gradoQ = Math.max(...q.exp);
    
    if(gradoP == resUno.value){
        document.getElementById("respuesta1").innerHTML = "¡Bien!";
    } else {
        document.getElementById("respuesta1").innerHTML = "¡Volvé a intentar!";
    }
    
    if(gradoQ == resDos.value){
        document.getElementById("respuesta2").innerHTML = "¡Bien!";
    } else {
        document.getElementById("respuesta2").innerHTML = "¡Volvé a intentar!";
    }
    
    
    if(p.coef[p.exp.indexOf(gradoP)] == cpUno.value){
        document.getElementById("resCP1").innerHTML = "¡Bien!";
    } else {
        document.getElementById("resCP1").innerHTML = "¡Volvé a intentar!";
    }
    
    if(q.coef[q.exp.indexOf(gradoQ)] == cpDos.value){
        document.getElementById("resCP2").innerHTML = "¡Bien!";
    } else {
        document.getElementById("resCP2").innerHTML = "¡Volvé a intentar!";
    }
    
    /*if(gradoP == resUno.value && gradoQ == resDos.value && p.coef[p.exp.indexOf(gradoP)] == cpUno.value && q.coef[q.exp.indexOf(gradoQ)] == cpDos.value){
        setTimeout(reset(), 1000);
    }*/
}

const reset = () => {
   /* p.grado = [exponente(),exponente()];
    p.coef = [coeficiente(),coeficiente()];
    p.termInd = coeficiente();
    q.grado = [exponente(),exponente()];
    q.coef = [coeficiente(),coeficiente()];
    q.termInd = coeficiente();*/
    p.crear(1);
    q.crear(2);
}

