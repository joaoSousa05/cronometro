var seg =0
var min=0
var hr=0
var intervalo=0

function doisDigitos(digito){
   
    if (digito<10) {
        return('0'+ digito)
    }else{
        return(digito)
    }
}


function iniciar(){
    watch()
    intervalo= setInterval(watch,1000)
}

function pausar(){
    clearInterval(intervalo)
}

function parar(){
    clearInterval(intervalo)
    seg=0
    min=0
    document.getElementById('watch').innerText='00:00:00'
}
function watch(){
    seg++
    if(seg>60){
        min++
        seg=0
        if(min>60){
            min=0
            hr++
        }
    }

    document.getElementById('watch').innerText=(`${doisDigitos(hr)}:${doisDigitos(min)}:${doisDigitos(seg)}
    `)
}