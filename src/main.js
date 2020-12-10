export default class App {
sumatoriaSerieUno(numero){
    let suma=0;
    for (let i=1;i<=6;i++){
        if(i<=5){
        suma=(1/i)+suma;
        }
        else{
            suma+=(1/numero);
        }
    }
   
    return suma;
}
sumatoriaSerieDos(numero){
    let suma=0;
    let i=1;
    while(i<=6){
       
        switch(i){
                case 1:
                case 2:
                case 4:
        suma+=(1/i);
                break;
                case 3:
                case 5:
            suma-=(1/i);
                break;
        default:
            suma+=(1/numero);
            break;
        }  
         i++;
    }
   
    return suma;
}
esPrimo(numero){
    let i=0;
    let x=0;
    let resultado;
    do{
            i++;
            if(numero%i==0){
                x+=1;;
            }
           if(x==2){
               resultado=true;
           }
           else{
               resultado=false;
           }
        

    }while(i<numero)
    return resultado;
}
obtenerMultiplos(inicio, fin){
    let numero="";
    do{
        inicio++;
        if(inicio%3==0){
            numero+=inicio;
        }


    }while(inicio<=fin);
    return numero;
}

obtenerImpares(numero1, numero2){
    let inicio;
    let fin;
    let numero="";
    if(numero1>numero2){
        inicio=numero2;
        fin=numero1;

    }
    else{
        inicio=numero1;
        fin=numero2;
    }
    for(inicio;inicio<=fin;inicio++){
        if(inicio%2!=0){
            numero+=inicio+ ",";
        }
        
    }

    return numero;
}
}

let app = new App();
console.log(app.sumatoriaSerieUno(15));
console.log(app.sumatoriaSerieDos(7));
console.log(app.esPrimo(6));
console.log(app.obtenerMultiplos(10,25))
console.log(app.obtenerImpares(10,5))