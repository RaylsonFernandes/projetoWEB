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

function carne(){
	var nome = form_carne.nome.value;
	var produto = form_carne.produto.value;
	var preco = form_carne.preco.value;
	var qtd = form_carne.qtd.value;
	var parcela = form_carne.parcela.value;

	preco = parseFloat(preco)	 * parseFloat(qtd);

	if (parcela >= 3) {
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
		"<br><b>VALOR: </b>" + valorParcela + 
		"<br>Parcela 1/" + parcela + "<br>"+ 
		"--------------------------------------------------------------------------------------------"
		);
		
	
}