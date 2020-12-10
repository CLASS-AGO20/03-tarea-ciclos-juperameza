export default class App {

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

console.log(app.sumatoriaSerieDos(1));