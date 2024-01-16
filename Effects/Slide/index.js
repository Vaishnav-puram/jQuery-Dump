$(document).ready(function(){
    // $("#flip").click(function(){
    //   $("#panel").slideDown("slow");
    // })
    $("#flip").click(function(){
        $("#panel").slideUp("slow");
      })
    $("#flip").click(()=>{
        $("#panel").slideToggle("slow")
    })
})