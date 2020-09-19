$(() => {
$('.landing').hide()
$('#login-page').hide()
$('#circles').hide()
$('#feelings').hide()
$('#reflection').hide()
$('#the-atlas').hide()
$('#logout').hide()
 $('.landing').fadeIn(1000)

$('#leaf').on('click', function(event){
    event.preventDefault()
    event.stopPropagation()
    $('.landing').fadeOut(1000)
    $('#login-page').fadeIn(2000)
})

$('.enter').on('click', function(event){
    event.preventDefault()
    event.stopPropagation()
    $('#login-page').fadeOut(2000)
    $('#circles').fadeIn(2000)
})

$('#logger').on('click', function(event){
    event.preventDefault()
    event.stopPropagation()
    $('#feelings').fadeOut(2000)
    $('#reflection').fadeIn(2000)
})

$('#circle1').on('click', function(event) {
    event.preventDefault()
    event.stopPropagation()
    $('#the-atlas').show(2000)
    $('#circles').hide(2000)
})

$('#leaf6').on('click', function(event) {
    event.preventDefault()
    event.stopPropagation()
    $('#the-atlas').hide(2000)
    $('#circles').show(2000)

})

$('#circle2').on('click', function (event){
    event.preventDefault()
    event.stopPropagation()
    $('#circles').hide(2000)
    $('#reflection').show(2000)
})


$('#leaf5').on('click', function (event){
    event.preventDefault()
    event.stopPropagation()
    $('#circles').show(2000)
    $('#reflection').hide(2000)
})

$('#circle3').on('click', function (event){
    event.preventDefault()
    event.stopPropagation()
    $('#circles').hide(2000)
    $('#feelings').show(2000)
})

$('#leaf4').on('click', function (event){
    event.preventDefault()
    event.stopPropagation()
    $('#circles').show(2000)
    $('#feelings').hide(2000)
})


$('#leaf3').on('click', function (event){
    event.preventDefault()
    event.stopPropagation()
    $('#circles').hide(1000)
    $('#logout').show(1000)
    $('#logout').fadeOut(4000)
    $('.landing').fadeIn(2000)
})








})

