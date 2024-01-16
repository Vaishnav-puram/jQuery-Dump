$("document").ready(()=>{
    let i=4;
    $("#btn1").click(()=>{
        $("p").append("<b>Vaishnav Puram</b>")
    })
    $("#btn4").click(()=>{
        $("p").prepend("<b>Full Name : </b>")
    })
    $("#btn2").click(()=>{
        $("ol").append((`<li>Item ${i}</li>`))
        i++;
    })
    let j=0;
    $("#btn3").click(()=>{
        $("ol").prepend((`<li>Item ${j}</li>`))
        j--;
    })
})