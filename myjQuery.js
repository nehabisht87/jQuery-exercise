$(document).ready(function () {


    $('p').click(function () {
        // console.log("", this);
        //     // console.log("clicked on all elements", this);
        //     // console.log("you clicked on odd p", this);
        //     // console.log("you clicked on p", this);
        //     // $(this).hide(); //hides those paragraph which are clicked ;this is used as selector
        //     // $('#id').hide(); // id is unique for an element
        //     // $('.class').hide(); //we can have same class for multiple element
    });

    // 1) element selector - this is an example of element selector
    // $('p').click();

    // 2) id selector - this is an example of id selector
    // $('#second').click();

    // 3) class selector- this is an example of class selector
    // $('.odd').click();

    // other selectors: -

    // $('*').click(); //clicks on all the elements
    // $('p.odd').click(); //clicks on odd elements
    // $('p:first').click(); // clicks on the first element 


    // EVENTS IN JQUERY

    // mouse events : -click, mouseenter, dblclick, mouseleave
    // keyboard events : - keypress, keydown, MediaKeyStatusMap
    // form events : - submit, change, focus, blur
    // document/window events : - load, resize, scroll, unload  


    // $('p').dblclick(function () {
    //     console.log("you double clicked on p", this);
    // });

    // $('p').mouseenter(function(){
    //     console.log("you entered:", this);
    // });

    // $('p').hover(function(){
    //     console.log("you hovered:", this);
    // },
    // function(){
    //     console.log("thanks for coming");
    // });

    // demo of on method:-
    $('p').on(
        {
            'click': function () {
                console.log("Thanks for clicking", this);
            },
            mouseleave: function () {
                console.log("mouseleave");
            }

        });

    // // 
    // $('#lorem').hide(1000);

    // $('#lorem').show(1000, function(){
    //     console.log("the content is shown after 1000 milliseconds");
    // });

    // $('#but').click(function(){
    //     $('#lorem').toggle(1000);
    // });

    // In similar way, use these functions: - 
    // fadeOut()
    // fadeIn()
    // fadeToggle()
    // fadeTo()


    // Slide methods - speed and callback parameters are optional
        // $('#lorem').slideUp(1000), function(){
        //     console.log("slide down");
        // };

        // $('#lorem').slideDown(1000);
        // $('#lorem').slideToggle(1000);
    
        // Animate function in jQuery
    // $('#lorem').animate({

    //     opacity:0.3,
    //     height: '150px',
    //     width:'350px'
    
    // }, 2000) //speed can also be written as slow or fast

    // $('#lorem').animate({ opacity: 0.3 }, 4000);
    // $('#lorem').animate({ height: '380px' }, 1000);
    // $('#lorem').animate({ width: '450px' }, 12000);
    // $('#lorem').stop();


    // $('p').html();

    // // $('#ta').val('setting it to neha');
    // $('#ta').html('setting it to neha');
    // $('#ta').html('setting it to neha3');
    // $('#inp').html('setting it to neha5'); //this will not work
    // $('#inp').val('setting it to neha7');
    // $('#inp').empty()
    // $('lorem').empty()
    // $('#lorem').text('you are good')
    // $('#lorem').remove()

    // $('#lorem').addClass('myclass')
    // $('#lorem').addClass('myclass2')
    // $('#lorem').removeClass('myclass2')
    // $('#lorem').toggleClass('myclass')
    // $('#lorem').css('background-color', 'red')
    // $('#lorem').css('background-color')  // to know the rgb value of background-color


    // AJAX Using jQuery: -

    // $.get('https://code.jquery.com/jquery-3.6.0.min.js', function (data, status) { alert(data); })

    // $.get('https://code.jquery.com/jquery-3.6.0.min.js', function (data, status) { alert(status); })

    // $.post('https://code.jquery.com/jquery-3.6.0.min.js',
    //     { name: 'neha', channel: 'code with neha' },
    //     function (data, status) { alert(status) });

        //Post is not allowed and itwill throw an error
});
