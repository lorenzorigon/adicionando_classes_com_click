$('.animais .tab-menu a').first().addClass('active');
$('.animais .item').first().addClass('active');

$('.animais .tab-menu a').click(function (e){
    e.preventDefault();
    var itemId = $(this).attr('href');
    $('.animais .tab-menu a, .animais .item').removeClass("active");
    $(this).addClass('active');
    $(itemId).addClass('active');
});

$('.florestas .tab-menu a').first().addClass('active');
$('.florestas .item').first().addClass('active');

$('.florestas .tab-menu a').click(function (e){
    e.preventDefault();
    var itemId = $(this).attr('href');
    $('.florestas .tab-menu a, .florestas .item').removeClass("active");
    $(this).addClass('active');
    $(itemId).addClass('active');
});