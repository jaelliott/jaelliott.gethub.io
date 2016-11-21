$(function () {
    // jQuery Code goes here
    var toggleStyle = function () {
        var inputFields = $('imput[type= "text"]')
        if (inputFields.css('background-color') === 'rgb(255,0,0)') {
            inputFields.css('background-color', 'rgb(255, 255, 255)');
        } else {
            inputFields.css('background-color', 'rgb(255, 0,0)');
        }
    }
    $('#ReqAQuoteBtn').click(toggleStyle);
})

$(function () {
    $('.coreValues').prepend("<li><strong>This is a brand new list</strong> </li>");
    $("<li><strong>This is also grate</strong> </li>").prependTo(".coreValues");
    var nameVal = $('imput[name="nameVall"]');

    function FillEmpty() {
        if (nameVal.val() == '') {
            nameVal.val('jhon doe');
        }
    }
    $('#reqAquoteBtn').click(FillEmpty());
})


$(function () {
    // jQuery Code goes here
    var box1 = $('.box1');
    var box2 = $('.box2');


    function leftToRight() {
        if (box2.html() == '') {
            box2.html(box1.html());
            box1.html('');
        }
    }
    $('#LeftToRight').click(leftToRight);

    function rightToLeft() {
        if (box1.html() == '') {
            box1.html(box2.html());
            box2.html('');
        }
    }
    $('#RightToLeft').click(rightToLeft);
})

$(function () {

    $('navigation > li').hover(function () {
            $(this).addClass('openSesame');
        },
        function () {});
})


$(function () {
    $('.toggleBtn').click(function () {
        $(this).toggleClass("toggleOn");
    });

})

$(function () {
    // $(',dropdownMenu> li').hover(function () {
    //$(this).children("ul").slideDow //n(200);
    //  }, $(function () {
    //   //$(this).children("ul").slideUp(200);
    //  })
    //

    // )
    $(',dropdownMenu> li').hover(function () {
        $(this).children("ul").slideToggle(200);
    })
    ])

$(function () {
    // Array containing Objects with Fruit names & quantities
    var fruitBasket = [{
            title: 'Apples',
            quantity: 20
        },
        {
            title: 'Oranges',
            quantity: 25
        },
        {
            title: 'Kiwis',
            quantity: 50
        },
        {
            title: 'Strawberries',
            quantity: 45
        },
        {
            title: 'Bananas',
            quantity: 10
        },
        {
            title: 'Mangoes',
            quantity: 5
        },
        {
            title: 'Tomatoes',
            quantity: 30
        }];

    // Your jQuery code goes here
    $each(fruitBasket, function (index, element) {
        $('.fruits').append('<li>We have' + element.quantity + "" + element.title + '</li>');
    })
    $('.fruits>li').each(function (index, element) {
        $(element).css('background-color', 'rgb(100,200,0)');
    })
})
