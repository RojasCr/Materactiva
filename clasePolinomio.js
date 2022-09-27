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
             if(this.exp[i] !== this.exp[i-1]){
                 expresion += `${this.coef[i] > 0 ? "+" + this.coef[i] : this.coef[i]}x<sup>${this.exp[i]}</sup>`;
             } else{
                 this.exp[i] = exponente(10);
                 expresion += `${this.coef[i] > 0 ? "+" + this.coef[i] : this.coef[i]}x<sup>${this.exp[i]}</sup>`;
             }
         }
         this.termInd = coeficiente(100);
         return expresion + (this.termInd > 0 ? "+" + this.termInd : this.termInd);
     }
 }