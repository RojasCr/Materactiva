const coeficiente = () => {
   return Math.floor(Math.random()*100);
};

const exponente = () => {
    return Math.floor(Math.random()*10);
};

/*Clase de polinommios enteros*/
class Polinomio{
    constructor(){
        this.coef = [coeficiente(),coeficiente()];//Math.floor(Math.random()*100);
        this.grado = [exponente(),exponente()];//Math.floor(Math.random()*10);
    }
    crear = () => {
        return `${this.coef[0]}x<sup>${this.grado[0]}</sup> + ${this.coef[1]}x<sup>${this.grado[1]}</sup>`;
    }
}

const p = new Polinomio();
const q = new Polinomio();

const generar = () => {
    let lista = `<ol>
                    <li>${p.crear()} Grado: <input id="res1"> <span id="respuesta1"></span></li>
                    <li>${q.crear()} Grado: <input id="res2"> <span id="respuesta2"></span></li>
                </ol>`;
    document.getElementById("enteros").innerHTML = lista;
}

const verificar = () => {
    let resUno = document.getElementById("res1");
    let resDos = document.getElementById("res2");
    if(Math.max(...p.grado) == resUno.value){
        document.getElementById("respuesta1").innerHTML = "¡Bien!";
    } else {
        document.getElementById("respuesta1").innerHTML = "¡Volvé a intentar!";
    }
    
    if(Math.max(...q.grado) == resDos.value){
        document.getElementById("respuesta2").innerHTML = "¡Bien!";
    } else {
        document.getElementById("respuesta2").innerHTML = "¡Volvé a intentar!";
    }
    
    if(Math.max(...p.grado) == resUno.value && Math.max(...q.grado) == resDos.value){
        setTimeout(reset(), 1000);
    }
}

const reset = () => {
    p.grado = [exponente(),exponente()];
    p.coef = [coeficiente(),coeficiente()];
    q.grado = [exponente(),exponente()];
    q.coef = [coeficiente(),coeficiente()];
}