$(document).ready(function () {
    // $('h1').css({
    //     'color': 'white'
    // })

    // $('#nav-toggle').css({
    //     'color': 'white'
    // })

    // $('.skills__name').css({
    //     'color': 'blue'
    // })

    // $('.skills__name:eq(2)').css({
    //     'color': 'blue'
    // })

    // $('.skills__name').click(function () {
    //     $(this).css({
    //         'color': 'blue'
    //     })
    // })

    // $('h1').mouseenter(function () {
    //     $('h1').css({
    //         'color': 'blue'
    //     })
    // })

    // $('h1').mouseleave(function () {
    //     $('h1').css({
    //         'color': 'white'
    //     })
    // })

    // $('form').submit(function () {
    //     var nama = $('#name-input').val()
    //     var email = nama + '@gmail.com'

    //     $('#email-input').val(email)
    //     event.preventDefault()
    // })

    // $('.skills__box').before('Ruby')
    // $('.skills__box').empty()

    // $('.skills__name').click(function () {
    //     $(this).hide()
    // })

    $('.skills__subtitle').click(function () {
        $('.skills__name').slideToggle(1500, function () {
            alert('Success');
        })
    })

    $('.section-title').click(function () {
        $('.skills__box').slideUp(1500).slideDown(1500).fadeTo(1500, 0).fadeTo(1500, 1)
    })
});