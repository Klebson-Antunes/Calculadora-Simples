//função para calcular
function calcular(tipo, valor){

    // tipo de acao
    if(tipo === "acao"){

        //ação limpar visor
        if(valor === "c"){
            document.getElementById('resultado').value = ''

        }

        //acão operadores
        if(valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === "."){
            document.getElementById('resultado').value += valor
        }

        //ação igual
        if(valor === "="){
          
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
            
        }
       
    } else if(tipo ==="valor"){
        
     //tipo de valor
     //mostra no visor e concatena numeros
    document.getElementById('resultado').value += valor
    
    
    }

    
}