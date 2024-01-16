$("document").ready(()=>{
    $("button").dblclick(()=>{
        $("#img1").css('width','500px')
    })
    // $("#img1").mouseenter(()=>{
    //     $("#img1").css('width','500px')
    // })
    // $("#img1").mouseleave(()=>{
    //     $("#img1").css('width','150px')
    // })

    $("#img1").hover(func1,func2)
    function func1(){
        $("#img1").css('width','500px')
    }
    function func2(){
        $("#img1").css('width','150px')
    }
    
    $("#inputHandle").keydown((event)=>{
        console.log('keypressed')
        console.log(event.which);
    })
})