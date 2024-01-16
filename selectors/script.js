$('ul li:first').css('background','red')
$('ul li:first-child').css('color','pink')
$('ul li:nth-child(2)').css('color','yellow') // every 2nd child of ul
//$('*').css('fontWeight','bold').css('fontSize','larger')
$('li:even').css('color','brown')
$('li:odd').css('color','grey')
$('#btn').click(()=>{
    alert('color is : '+$('ul li:first').css('color'));
})
$("#div1,#div2").css('background','purple')
$("#div2 p:first").css('color','red')
$("#div1 > p").click(()=>{
    $('#div1 > p').fadeToggle(3000)
})