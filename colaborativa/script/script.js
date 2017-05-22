

/*MENU HAMBURGUER*/
var botaoMenuHamburguer = document.querySelector(".botao.menu-hamburguer");
function abrirMenu(){
	// declarar uma variavel, pegar navegacaoPrimaria
	var menu = document.querySelector("#navegacao-primaria");
	
	// se estiver com o classname "menuHorizontal visivel" fecha o dropdown
	if(menu.className == "menu-horizontal visivel"){
		// Fechar o menuHorizontal
		menu.className = "menu-horizontal";
	}else{
		// Abrir o menuHorizontal
		// tornar a navegacaoPrimaria Visivel, adicionar a classe visivel
		menu.className = "menu-horizontal visivel";
	}
}
botaoMenuHamburguer.onclick = abrirMenu;
/*FIM MENU HAMBURGUER*/




// SLIDER
function criarUmBullet(numeroDoSlide){
	// Pegando o ul que vai inserir o li
	var bulletUl = document.querySelector(".bullets ul");
	// Criando um novo li
	var li = document.createElement("li");
	// Criando um button para inserir no li
	var button = document.createElement("button");
	button.className="bullet";
	// PARAM1 = Nome da propriedade
	// PARAM2 = Valor da propriedade
	button.setAttribute("data-slide",numeroDoSlide);

	// Inserindo o button no li
	li.appendChild(button);
	// Inserindo o li no ul dos bullets
	bulletUl.appendChild(li);
}

function criarBulletsNoSlider(){
	// pegando todos os slides que estão dentros da #slider
	var slides = document.querySelectorAll("#slider .slide");
	var quantidadeSlides = slides.length;

	// Criar os bullets
	for(var i=0; i < quantidadeSlides; i++){
		// Criar um bullet
		criarUmBullet(i);
	}

}

var slideIndexAtivo = 0;

// Todos os slides do slider
var slides = document.querySelectorAll("#slider .slide");

// Funções para os botoes
// Botao da seta esquerda
function voltarSlide(){
	var slideAtivo = document.querySelector('.slide.ativo');
	var slideAtivoIndex = parseInt(slideAtivo.getAttribute('data-slide'));
	var proximoSlideIndex = slideAtivoIndex - 1;
	if(proximoSlideIndex <1) {
		proximoSlideIndex = slides.length;
	}
	irParaOSlideCorrespondente(proximoSlideIndex);
}

// Botao da seta direita
function avancarSlide(){
	var slideAtivo = document.querySelector('.slide.ativo');
	var slideAtivoIndex = parseInt(slideAtivo.getAttribute('data-slide'));
	var proximoSlideIndex = slideAtivoIndex + 1;
	if(proximoSlideIndex > slides.length) {
		proximoSlideIndex = 1;
	}
	irParaOSlideCorrespondente(proximoSlideIndex);
}

function irParaOSlideCorrespondente(numeroSlide){
	// Pegar o slide com a classe ativo
	var slideAtivo = document.querySelector(".slide.ativo");
	// Desaparece o slide ativo
	slideAtivo.classList.remove("ativo");
	// Aparecer o slide Correspondente

	var proximoSlide = document
	.querySelector("#slider .slide:nth-child("+numeroSlide+")");
	proximoSlide.classList.add("ativo");
}


function adicionarOnClickNosBotoes(){
	// Adicionando nas setas
	var botaoVoltar = document.querySelector(".seta.esquerda");
	botaoVoltar.onclick = voltarSlide;
	var botaoAvancar = document.querySelector(".seta.direita");
	botaoAvancar.onclick = avancarSlide;

	// Adicionando nos bullets
	var bullets = document.querySelectorAll("#slider .bullet");
	for(var i=0;i<bullets.length;i++){
		console.log(bullets[i])
		bullets[i].onclick = irParaOSlideCorrespondente;
	}
}

//se o slide for adicionado criar bullets
var slider = document.querySelector("#slider");
if(slider != null){
	criarBulletsNoSlider();
	adicionarOnClickNosBotoes();
}

// CODIGO PARA O FORMULARIO
// Pegar o campo
var nome = document.querySelector("#input-nome");

// Criar a validação
function validarNome(){
	// Pegar o valor dele
	var valorNome = nome.value;

	// Verificar se o valor é vazio
	if(valorNome == ""){
		// Se for vazio deixa o campo vermelho
		// // Adiciona uma classe no campo nome
		nome.parentNode.classList.add("errado");
	}else{
		nome.parentNode.classList.remove("errado");
	}
}

// Executar a validação ao sair do foco do campo
nome.onblur = validarNome;


//Validar email
// Pegar o campo que vai ser validado]
var email = document.querySelector("#input-email");
// Criar a função da validação
function validarEmail(){
	// pegar o valor do input
	var valorEmail = email.value;
	// verificar se o valor é menor que 18
	if (valorEmail == "nome@site.com"){
		//Caso seja menor que 18 deixa o campo vermelho
		email.parentNode.classList.add("errado");
	}else{
		email.parentNode.classList.remove("errado");
	}

}
// Executar a função ao desfocar (aplicar a algum evento, quando será executado)
email.onblur = validarEmail;



$('#navegacao-primaria ul li a').click(function() {
	var hash = this.hash;
	
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	})
});