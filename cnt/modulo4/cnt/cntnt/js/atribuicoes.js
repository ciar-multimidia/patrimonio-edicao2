// capitulo ativo
$('.panel-heading').click(function(){  
    $('div').removeClass('cap-ativo');
    $(this).addClass('cap-ativo');
});


// artigo com altura responsiva
$(window).on('load resize', function(){
	$('article').height($(this).height()-250);
  $('.area-menu').height($(this).height()-45);
});


//função de passar páginas
var numPaginas = $( ".container #paginas > div" ).length;
var pagAtual = 1;
var mudando = false;

function nextPag(){
  if(pagAtual != numPaginas && mudando == false){
    mudando = true;
    $( ".container #paginas > div" ).eq(pagAtual).hide();
    pagAtual++;
    $( ".container #paginas > div" ).eq(pagAtual).fadeIn(400, function(){
      mudando=false;
    });
  }
}
function prevPag(){
  if(pagAtual != 1 && mudando == false){
    mudando = true;
    $( ".container #paginas > div" ).eq(pagAtual).hide();
    pagAtual--;
    $( ".container #paginas > div" ).eq(pagAtual).fadeIn(400, function(){
      mudando=false;
    });
  }
}

$('.proximo').click(function(){  
    nextPag();
});

$('.anterior').click(function(){
  prevPag();
});

$(document).keydown(function(e){
    if (e.which == 39) {
        nextPag();
    }
    else if (e.which == 37) {
        prevPag();
    }
});
  
// popover
$('[data-toggle="popover"]').popover({
	// trigger: 'hover',
	placement: 'top',
	html: 'true'
});

// popover
$('[data-toggle="popover-hover"]').popover({
  trigger: 'hover',
  // placement: 'bottom',
  html: 'true'
});


$(document).ready(function() {


 // acrescentando indicadores de continuação de conteudo
 // $('footer.paginacao').prepend('<div class="ind-bottom"><img src="images/indicador-de-continuidade.png"></div>'); //final texto
 // $('.col-md-9').prepend('<div class="ind-top"><img src="images/indicador-de-continuidade-top.png"></div>'); //inicio texto

 // acresentando navegação de acessibilidade
 $('.row').prepend('<div id="controls"><a href="#" id="small">A</a><a href="#" id="medium" class="selected">A</a><a href="#" id="large">A</a></div>');


 // parametros de acessibilidade - mudança de corpo de fonte
  $("#small").click(function(event){
    event.preventDefault();
    $("article h2, .corpoanexo h2").animate({"font-size":"20px"});
    $("article p, article ul, article ol, .corpoanexo p, .corpoanexo ul, .corpoanexo ol").animate({"font-size":"12px", "line-height": "20px"});
    
  });
  
  $("#medium").click(function(event){
    event.preventDefault();
    $("article h2, .corpoanexo h2").animate({"font-size":"30px"});
    $("article p, article ul, article ol, .corpoanexo p, .corpoanexo ul, .corpoanexo ol").animate({"font-size":"15px", "line-height": "26px"});
    
  });
  
  $("#large").click(function(event){
    event.preventDefault();
    $("article h2, .corpoanexo h2").animate({"font-size":"36px"});
    $("article p, article ul, article ol, .corpoanexo p, .corpoanexo ul, .corpoanexo ol").animate({"font-size":"18px", "line-height": "33px"});
    
  });
  
  $("a").click(function() {
    $("a").removeClass("selected");
    $(this).addClass("selected");
  });

  // fancybox
  $('.fancybox').fancybox();
}); // fim de document.ready(function)


// (function($){
//     $(window).load(function(){
//         $("article").mCustomScrollbar({
//           theme: 'dark',
//           autoHideScrollbar: 'true',
//           // scrollButtons:{
//           //   enable:true
//           // }
//         }); 
//     });
// })(jQuery);







