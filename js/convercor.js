class Convercor{
    //conversao de uam temperatura para a outra como o nome de cada metodo sujere
    static celciusToFahrenheit(temp){
        return (1.8*temp+32).toFixed(2);
    }
    static celciusToKelvin(temp){
       return (temp+273.15).toFixed(2);
    }
    static fahrenheitToCelcius(temp){
        return  ((5/9)*(temp-32)).toFixed(2);
     }
     static fahrenheitToKelvin(temp){
        return (((5/9)*(temp-32))+273.15).toFixed(2);
     }
     static kelvinToFahrenheit(temp){
        return  ((1.8*(temp-273.15))+32).toFixed(2);
     }
     static kelvinToCelcius(temp){
        return (temp-273.15).toFixed(2);
     }

}