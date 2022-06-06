 const resultado = document.querySelector('#Visor');


 //exibir os caracteres no visor
function insert(num){


 resultado.textContent += num;

}

//apagar todos os caracteres
function apagarTudo(){
	resultado.textContent ="";
}
//apagar um caracter
function apagar(){
	if(resultado.textContent){
        let result = document.getElementById('Visor').innerHTML
		/*o substring exibe as strings do primeiro parametro até o segundo.
		da forma que foi FileSystemDirectoryReader, vai tirar uma string e exibir como se estivesse apagado */
        resultado.innerHTML = result.substring(0, result.length - 1);
    } 
}
//método para calcular e exibir 
function calcular() {
    if(resultado.textContent != 'Erro') {
		//o método eval calcula diretemente
        document.getElementById("Visor").innerHTML = eval(resultado.innerHTML)
    }
}