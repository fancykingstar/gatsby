$('img[usemap]').rwdImageMaps();

$('area').on('click', function() {
    alert($(this).attr('alt') + ' clicked');
});