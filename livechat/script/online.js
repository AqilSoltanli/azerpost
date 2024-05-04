/**
 * @author Nasir Aliyev
 * @copyright 2015
 */

function OpenChat() {
    $('.online-content').fadeIn();
    $('.online-btn').hide();
    // $('.online-content').css('right','30px');
}

function CloseChat() {
    $('.online-content').fadeOut();
    //$('.online-content').css('right','-500px');
    $('.online-btn').show();
}

$(document).on('click', '.online-content img.oc-close', function() {
    CloseChat();
});

$("min").click(function() {

    CloseChat();
});

$(document).on('click', '.online-btn', function() {
    OpenChat();
});


/* popup end */

/* Stamps popup based on LiveChat */

function OpenStampsInfo() {
    $('.stamps-content').fadeIn();
    $('.stamps-btn').hide();
}

function CloseStampsInfo() {
    $('.stamps-content').fadeOut();
    $('.stamps-btn').show();
}

$(document).on('click', '.stamps-content img.oc-close', function() {
    CloseStampsInfo();
});

$("min2").click(function() {

    CloseStampsInfo();
});

$(document).on('click', '.stamps-btn', function() {
    OpenStampsInfo();
});