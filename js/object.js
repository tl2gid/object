
$(document).ready(function(){
    function fnBanner(){
        $(".banner").animate({
            top:"-50px"
        },{
            complete:function(){
                var $clone=$(".banner li").first().clone();//첫번째 복사하고
                $(".banner").append($clone);//가장 뒤에 붙여주고
                $(".banner").css({top:"0"}); //위로 이동한 이후에 
                $(".banner li").first().remove(); //화면 위로 사라진 첫번째는 제거함
            }
            ,duration:1000
        });
    }
    setInterval(fnBanner,4500);

    //slide
    $('.slider').bxSlider({
        auto:true,
        pager:false,
        controls:true
    });
    $(".slider ,.bx-prev ,.bx-next").hover(function(){
        $(".bx-prev").css("left","10px");
        $(".bx-next").css("right","10px");
    },function(){
        $(".bx-prev").css("left","-70px");
        $(".bx-next").css("right","-70px");
    })

    /*best seller*/
    $(".contents").fadeOut();
    $(".contents").first().fadeIn();
    $(".gallery li").first().addClass("g-active"); //active 불러오기
    $(".gallery li").on("click",function(){
         var idx=$(this).index(); //idx 에는 인덱스가 담겨있음
         $(".contents").fadeOut(); //1번째 숨겼다가 
         $(".contents").eq(idx).fadeIn(); //누르면 보여줌
         $(".gallery li").removeClass("g-active"); 
         $(this).addClass("g-active");
    });

    //e-slide
    var event=0;
    var slideWidth=screen.width; 
    $(".event-wrap").width(slideWidth);
      
    var slideHeight=$(".event-wrap").height();
      
    $("#event-control").height(slideHeight);
    $("#event-control").width(slideWidth);
      

    var total=$(".event-wrap").length;
    var fullSlideWidth=slideWidth * total;
    $(".event-group").css({
        "width":fullSlideWidth
    });
    function fnNext(idx){
        $(".event-group").animate({
            left:-slideWidth
        
        },{
            duration:400,
            complete:function(){
              var $clone=$(".event-wrap").first().clone();
              $(".event-group").append($clone);
              $(".event-wrap").first().remove();
              $(".event-group").css({"left":"0px"});
            }
        });
    
    }
      function fnPrev(idx){
        $(".evnet-group").css({"left":-slideWidth});
        $(".event-group").animate({
            left:0
        
        },{
            duration:400,
            complete:function(){
              var $clone=$(".event-wrap").first().clone();
              $(".event-group").append($clone);
              $(".event-wrap").first().remove();
              $(".event-group").css({"left":slideWidth});
            }
        });
    
    }

    $("#e-next").on("click",function(){   
        if(event==2){
            fnNext(0); 
        }
        else{
        fnNext(event+1);
        }
    });
    $("#e-prev").on("click",function(){
        if(event==0){
            fnPrev(2); 
        }
        else{
        fnPrev(event-1);
        }
        event=idx;
    });

});


//left-control
function pageUp(){
    window.scrollTo({ top: 0, behavior: "smooth" });  
}
function pageDown(){
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
