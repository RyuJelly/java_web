$(function () {
    $.ajax({
        url: 'iu_song.json',
        type: 'get',
        dataType: 'json',

        success: function (data) {
            var $thumb = $('.info_wrap > .thumb a img');
            var $title = $('.txt_area .tit strong');
            var $album = $('.txt_area p.album');
            var iu = [];

            $.each(data, function (index, item) {
                iu.push(item);
            });

            $thumb.each(function (index) {
                $(this).attr('src', iu[index].img);
            });
            $title.each(function (index) {
                $(this).html(iu[index].name);
            });
            $album.each(function (index) {
                $(this).html(iu[index].albumTitle);
            });


            $('.link_thumbnail img').each(function (index) {
                $(this).attr('src', iu[index].img);
            });
        }

    });
    
});


$(function () {
    $.ajax({
        url: 'lyrics.json',
        type: 'get',
        dataType: 'json',

        success: function (data) {
            var $thumb = $('.lyricsss .info_wrap > .thumb a img');
            var $title = $('.lyricsss .txt_area .tit strong');
            var $album = $('.lyricsss .txt_area p.album');
            var iu = [];

            $.each(data, function (index, item) {
                iu.push(item);
            });

            $thumb.each(function (index) {
                $(this).attr('src', iu[index].img);
            });
            $title.each(function (index) {
                $(this).html(iu[index].name);
            });
            $album.each(function (index) {
                $(this).html(iu[index].lyrics);
            });
        }

    });

});


$(function () {
    $('.btn_tab_normal').click(function () {
        $('.btn_tab_normal').removeClass('active');
        $('.swiper-slide').removeClass('on');
        $(this).addClass('active');
        $(this).parent().addClass('on');
        $('div.con').addClass('blindd');
    });

    $('.btn_tab_normal').each(function (index) {
        $(this).click(function () {
            $('div.con').eq(index).removeClass('blindd')
        });
    });
});


// $(function(){
//     $('a').click(function(e){
//
//         return false;
//     });

//     $('.con a img').click(function(){
//         var html = "background-image: url(" + $(this).attr('src') + ")";
//         console.log('확인용2: ' + $('.track_area hide_lyrics .thumb').style.['background-image']);
//         // $('.track_area hide_lyrics .thumb').attr('style', html);
//     });
// });