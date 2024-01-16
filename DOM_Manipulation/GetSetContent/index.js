$("document").ready(()=>{
    $("#btn1").click(()=>{
        alert("Html : "+$("p").html())
    })
    $("#btn2").click(()=>{
        alert("Text/Content : "+$("p").text())
    })
    $("#btn5").click(()=>{
        alert("Value : "+$("input").val()+" attribute : "+$("input").attr('type'))
    })
    $("#btn3").click(()=>{
        $("p").html("<b>Hello vaishnav</b>")
    })
    $("#btn4").click(()=>{
        $("p").text((i,orinalText)=>{
            return "Old text : "+orinalText+" New Text : Hello Vaishnav Puram" 
        })
    })
    $("#btn6").click(()=>{
       $("input").val("vaishnav")
    })
})