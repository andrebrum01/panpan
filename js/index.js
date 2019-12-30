var tamtilte =$(".title").height();
var audio =document.getElementById("mf");
var tamMusic = $(".music").width();
var pac = $(".pac")
var num ;
if( $(window).width()>=800) num=3;
else num=1;
$(".corda").remove();
for(var i=0;i<pac.length;i++){
    if(i%num==0) {
        pac.eq(i).before('<div class="corda"></div>');
    }
}
var quant = $(".polar");
for(var i=0;i<quant.length;i++){
    var name = "ft"+(i+1).toString();
    quant.eq(i).addClass(name);

}
function atualizar(){
    tamMusic = $(".music").width();
    $(".title").height(tamtilte+50);
    $(".pregador").height($(".pregador").width()*955/638);
    $(".pac").css("top",-$(".pregador").height()*0.5);
    $("title").css("padding-bottom",$(".pregador").height()*0.5);
    $(".polaroid").height($(".polaroid").width()+($(".polaroid").width()*0.3));
    $(".corda").height($(".corda").width()*65/1300);
    var corda= $("<div class='corda'></div>");
    tocando();
}
atualizar();

$(".music").click(function (e) {
   play();
    
});
function play() {
    var context = new AudioContext();
    if(audio.paused) {
        audio.play();
        $(".mask").hide();
    }
    else {
        audio.pause();
        $(".mask").show();
    }
    
}
function tocando(){
    $(".trackMusic").width(tamMusic- (tamMusic*(audio.currentTime/audio.duration)));
}
// funções da tela
$(window).scroll(function () { 
    atualizar();
});
$(window).resize(function () { 
    $(".corda").remove();
    atualizar();
    if( $(window).width()>=800) num=3;
    else num=1;
    for(var i=0;i<pac.length;i++){
        if(i%num==0) {
            pac.eq(i).before('<div class="corda"></div>');
        }
    }
});