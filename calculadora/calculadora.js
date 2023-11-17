function insert(numeroum) {
    
   var numerodois = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numerodois + numeroum;
}

function clean() {

    document.getElementById('resultado').innerHTML = "";
}

function back() {

    var voltar = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = voltar.substring(0, voltar.length -1);
}

function calculator() {

    var calcular = document.getElementById('resultado').innerHTML;

    if(calcular) {
        document.getElementById('resultado').innerHTML = eval(calcular)
    }else{
        document.getElementById('resultado').innerHTML = "digite algo"
    }
}