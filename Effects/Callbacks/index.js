$("document").ready(()=>{
    $('#btn1').click(()=>{
        $('p').fadeOut("slow",()=>{
            alert("Hello vaishnav")
        })
    })
    $("#btn2").click(()=>{
        $("img").fadeOut(3000,()=>{
            $("img").fadeIn(3000)
        })
    })
})