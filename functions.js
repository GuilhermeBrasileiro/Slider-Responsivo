/*	Funções para rodar o script quando o documento carregar
$(document).ready(function(){
	alert("ola mundo");
});
$(function(){
	alert("ola mundo");
});
*/
/*	Função para rodar o script quando tudo(videos, imagens, links, TUDO) do documento carregar
$(window).on('load',function(){
	alert("ola mundo");
});
*/

$(function(){

	var indiceAtual = 0;
	var indiceMaximo = $('.slider img').length;

	initSlider();
	bulletMaker();
	cliqueSlider();
	abrirJanela();
	fecharJanela();
	
	
	function initSlider(){
		$('.slider img').eq(0).stop().fadeIn();
		setInterval(function(){
			alternarSlider()
		},5000);
		/*abrirJanela();*/
	}

	function cliqueSlider(){
		$('.bullets-nav span').click(function(){
			$('.slider img').eq(indiceAtual).stop().fadeOut();
			indiceAtual = $(this).index();
			$('.slider img').eq(indiceAtual).stop().fadeIn();
			$('.bullets-nav span').css('background-color','gray');
			$(this).css('background-color','black');
		});
	}

	function alternarSlider(){
		$('.slider img').eq(indiceAtual).stop().fadeOut(1500);
		indiceAtual+=1;
		if(indiceAtual == indiceMaximo){
			indiceAtual = 0;
		}
		$('.bullets-nav span').css('background-color','gray');
		$('.bullets-nav span').eq(indiceAtual).css('background-color','black');
		$('.slider img').eq(indiceAtual).stop().fadeIn(1500);
	}

	function bulletMaker(){
		for(var i = 0; i < indiceMaximo; i++){
			if(i == 0){
				$('.bullets-nav').append('<span style="background:black;"></span>');
			}else{
				$('.bullets-nav').append('<span></span>');
			}
		}
	}

	function abrirJanela(){
		$('.slider img').click(function(e){
			e.stopPropagation();
			var img = $('.slider img').eq(indiceAtual).attr('src');
			$('.bg').html('<img src='+img+'></img>').fadeIn();
		});
	};

	function fecharJanela(){
		
		var el = $('body');

		el.click(function(){
			$('.bg').fadeOut();
		})

	};

});