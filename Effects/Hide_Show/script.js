$("document").ready(()=>{
    $("#hde").click(()=>{
        $("p").hide(1000)
    })
    $("#shw").click(()=>{
        $('p').show(1000)
    })
    $("#tog").click(()=>{
        $('p').toggle(1000)
    })
})