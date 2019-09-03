//inputsd das temperaturas
var inCe= document.getElementById('celc');
var inKe= document.getElementById('kelvin');
var inFa= document.getElementById('fare');

//função chamada na entradad de dados para o calculo
function calcular(t, valor) {
    var temp = parseFloat(valor);
    inCe= document.getElementById('celc');
    inKe= document.getElementById('kelvin');
    inFa= document.getElementById('fare');
    if(t == 'c'&&temp>=-273.15 ){// Variável t se refere a qual o input que entro o valor
        inKe.value = Convercor.celciusToKelvin(temp);
        inFa.value = Convercor.celciusToFahrenheit(temp);
    }else if(t== 'k'&& temp>=0){
        inCe.value = Convercor.kelvinToCelcius(temp);
        inFa.value = Convercor.kelvinToFahrenheit(temp);


    }else if(t == 'f'&&temp>= -459.67){
        inCe.value = Convercor.fahrenheitToCelcius(temp);
        inKe.value = Convercor.fahrenheitToKelvin(temp);


    }else if(t != NaN){//alert personalizado
        var body = document.querySelector("#corpo");
        var alert = document.createElement('div');
        alert.setAttribute('class', 'alert');
        alert.appendChild(document.createTextNode("Valor Invalido"));
        body.appendChild(alert);
        setTimeout(function(){
            body.removeChild(alert);
        }, 3000);
    }
}

//fuction para sumir com a esplicação
function espicOff() {
    document.getElementById('any').setAttribute('style', 'display:none');
}

//mudar o valor dos inputs para vasios
function limpar() {
    inCe.value="";
    inKe.value= "";
    inFa.value="";
}