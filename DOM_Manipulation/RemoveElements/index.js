$("document").ready(()=>{
    $("#btn").click(()=>{
        $("p").append("<b class='boldText'>Vaishnav</b>")
    })
    $("#btn1").click(()=>{
        console.log($('#btn').val())
        $("b").remove(".boldText")
    })
    $("#btn2").click(()=>{
        $("li").empty()
    })
    $("#btn3").click(()=>{
        $("li").remove()
    })
})