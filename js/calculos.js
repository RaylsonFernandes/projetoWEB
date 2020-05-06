function mediaFinal(){
	var nome = form_mediaFinal.nome.value;
	
	var diciplina = form_mediaFinal.diciplina.value;
	var nota1 = form_mediaFinal.nota1.value;
	var nota2 = form_mediaFinal.nota2.value;

	var soma = (nota1 + nota2) / 2;
	

	if (soma <= 3) {
		var situacao = "Reprovado";
	}else if (soma < 7) {
		var situacao = "Recuperação";
	}else if (soma >= 7) {
		var situacao = "Aprovado";
	}

	document.getElementById("mediaFinal").innerHTML = nome + ", você está "
		 + situacao + " na disciplina " + diciplina + 
		 " com média " + soma;
}