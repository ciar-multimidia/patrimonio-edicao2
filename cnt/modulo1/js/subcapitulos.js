$(document).ready(function(){
  var subIndice = 0;
  $(".subtopicos a").click(function(){
  	// alert($(this).index());
    subIndice = $(this).index();
    var subAlvo = $("#conteudo-com-subtopicos article h3").eq(subIndice);
    $("article").animate({scrollTop: $(subAlvo).parent().scrollTop() + $(subAlvo).offset().top - $(subAlvo).parent().offset().top}, 600 );
  });
});