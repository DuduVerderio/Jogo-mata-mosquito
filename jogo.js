/* Variaveis */
var altura 
var largura 
var vidas = 1
var tempo = 35
var nivel = window.location.search
var criaMosquitoTempo = 1500

/* Niveis */
nivel = nivel.replace("?", "")

if(nivel === "normal"){
	criaMosquitoTempo = 1500
}

else if(nivel === "dificil"){
	criaMosquitoTempo = 1000
}

else if (nivel === "chucknorris"){
	criaMosquitoTempo = 750
}

/* Responsividade */
function ajustaTamanhoPalcoJogo(){ 
	altura = window.innerHeight
	largura = window.innerWidth

}

ajustaTamanhoPalcoJogo()

/* Cronometro */
var cronometro = setInterval(function(){
	tempo -= 1

	if(tempo < 0){ /* Venceu a partida */
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = "vitoria.html"
	}
	else {document.getElementById("cronometro").innerHTML = tempo
	}
}, 1000)

/* Posição mosquito */
function posicaoRandomica(){ 

	/* Remover o mosquito anterior(caso exista) */
	if(document.getElementById("mosquito")){
		document.getElementById("mosquito").remove()

		if(vidas > 3){ /* Perdeu a partida */
			window.location.href = "fim_de_jogo.html"
		}
			document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png" /* Perder vidas */
			vidas++
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	/* Elementos HTML */
	var mosquito = document.createElement("img")
	mosquito.src = "imagens/mosquito.png"
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + "px"
	mosquito.style.top = posicaoY + "px"
	mosquito.style.position = "absolute"
	mosquito.id = "mosquito"
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)

}

/* Tamanho mosquito */
function tamanhoAleatorio(){ 
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe){
	case 0:
		return "mosquito1"

	case 1:
		return "mosquito2"

	case 2:
		return "mosquito3"

	}
}

/* Lado mosquito */
function ladoAleatorio(){ 
	var lado = Math.floor(Math.random() * 2)
	
	switch(lado){
	case 0:
		return "ladoA"

	case 1:
		return "ladoB"

	}
}