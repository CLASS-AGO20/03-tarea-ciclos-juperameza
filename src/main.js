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
        i++;
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
    }
   
    return suma;
}


}

let app = new App();
console.log(app.sumatoriaSerieUno(1));
console.log(app.sumatoriaSerieDos(1));