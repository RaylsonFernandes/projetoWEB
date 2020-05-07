//Questão 1
function mediaFinal(){
	var nome = form_mediaFinal.nome.value;
	
	var diciplina = form_mediaFinal.diciplina.value;
	var nota1 = form_mediaFinal.nota1.value;
	var nota2 = form_mediaFinal.nota2.value;

	var soma = (parseFloat(nota1) + parseFloat(nota2)) / 2;

	if (soma <= 3) {
		var situacao = "Reprovado";
	}else if (soma < 7) {
		var situacao = "Recuperação";
	}else if (soma >= 7) {
		var situacao = "Aprovado";
	}

	$('#msgFinal').append(nome.toUpperCase() + ", você está "
		 + situacao + " na disciplina " + diciplina.toUpperCase() + 
		 " com média " + soma);

}

//Questão 2
function carne(){
	var nome = form_carne.nome.value;
	var produto = form_carne.produto.value;
	var preco = form_carne.preco.value;
	var qtd = form_carne.qtd.value;
	var parcela = form_carne.parcela.value;

	preco = parseFloat(preco)	 * parseFloat(qtd);

	if (parcela >= 3 && parcela < 6) {
		var valorTotal = parseFloat(preco) + (parseFloat(preco) * 0.05);
	}else if (parcela == 6) {
		var valorTotal = parseFloat(preco) + (parseFloat(preco) * 0.12);
	}else{
		var valorTotal = preco;
	}
	var valorParcela = parseFloat(valorTotal) / parseInt(parcela);

	$('#msgCarne').append(
		"--------------------------------------------------------------------------------------------"+
		"<br><b>LOJA DE ELETRODOMÉSTICOS</b><br>" + 
		"<b>CLIENTE: </b>" + nome.toUpperCase() + 
		"<br><b>PRODUTO: </b>" + produto.toUpperCase() + 
		"<br><b>VALOR: </b>R$" + valorParcela + 
		"<br>Parcela 1/" + parcela + "<br>"+ 
		"--------------------------------------------------------------------------------------------"
		);
}

//Questão 4
function imc(){
	var nome = form_imc.nome.value;
	var peso = form_imc.peso.value;
	var altura = form_imc.altura.value;

	var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

	$('#resultImc').append(
		"--------------------------------------------------------------------------------------------" + 
		"<br><b>RESULTADO - IMC</b><br>" + 
		"<b>PACIENTE: </b>" + nome.toUpperCase() + 
		"<br><b>PESO: </b>" + peso + "KG" + 
		"<br><b>ALTURA: </b>" + altura + 
		"<br><b>IMC: </b>" + imc + "<br>"
		);

	if (imc < 18.5) {
		var nivel = "baixo peso";
		var msg = "Peso baixo para a altura. Maior probabilidade de anorexia.";
	}else if (imc < 24.9) {
		var nivel = "peso normal";
		var msg = "Maior probabilidade de ser um indivíduo saudável.";
	}else if (imc < 29.9) {
		var nivel = "pré-obesidade";
		var msg = "Alguma probabilidade de problemas de saúde. Predisposição a tornar-se obeso.";
	}else if (imc < 34.9) {
		var nivel = "obesidade grau I";
		var msg = "Risco moderado de diabetes tipo II, hipertensão, colestrerol, cardiopatia.";
	}else if (imc < 39.9) {
		var nivel = "obesidade grau II";
		var msg = "Risco grave. Aumenta o risco das doenças associadas. O risco de mortalidade aumenta 50%.";
	}else if (imc > 40) {
		var nivel = "obesidade grau III ou obesidade móbida";
		var msg = "Risco muito grave. O risco das doenças associadas assim como mortalidade aumenta 90%.";
	}

	$('#msgImc').append(
			"Olá " + nome.toUpperCase() + ", você está no nível de obesidade: <b>"
			+ nivel + "</b>. <br>" +
			"Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde:"
			+ msg + "<br>" + 
			"--------------------------------------------------------------------------------------------"
			);
}