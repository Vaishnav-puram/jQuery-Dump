$("document").ready(()=>{
    $("#btn1").click(()=>{
        $("#box1").animate({
            left:"200px",
            height:"400px",
            width:"400px"
        },"slow")
    })
    $("#btn2").click(function(){
        var b = $("#box2");
        b.animate({height: '300px', opacity: '0.4'}, "slow");
        b.animate({width: '300px', opacity: '0.8'}, "slow");
        b.animate({height: '100px', opacity: '0.4'}, "slow");
        b.animate({width: '100px', opacity: '0.8'}, "slow");
    });
    $("#btn3").click(()=>{
        var b=$("#box3");
        b.animate({height: '+=300px',width:'+=300px', opacity: '0.4'}, "slow");
        b.animate({fontSize:'8.4em'},"slow");
    })

})