$(function() {

    $("button.forward.btn_paging_arrow.PERSONAL_btn_forward").on("click", function() {
        let $trans = parseInt($("ul.thumbnail_list.wide.swiper-wrapper").css("transform").split(",")[3]);
        $("button.previous.btn_paging_arrow.PERSONAL_btn_previous.swiper-button-disabled").removeClass("swiper-button-disabled");
        $("ul.thumbnail_list.wide.swiper-wrapper");

        console.log($trans);
    });
    loadSwipe();
    loadTodayTotal();
    loadAudio();
    loadWalkSong();
    loadGenreCollection();
    loadWilla();
    loadGoTo();
    loadEditorPick();
});


function loadSwipe() {
    $.ajax({
        type : "GET",
        url : "../assets/json/swife.json",
        dataType : "json",
        success : function(data) {
            let $cont = [];

            $(function() {
                $.each(data, function(index, value) {
                    let temp = [];
                    $cont.push(value.title);
                });

                $(".personal_recommend_head > h4").each(function(index) {
                    $(this).text($cont[index]);
                });

                // $(".me_album_tracklist .chart_thumbnail").each(function(index) {
                    
                // }); 
            });
        }
    });
}
{/* <img src="https://cdn.music-flo.com/image/v2/album/563/953/05/04/405953563_6054118e_s.jpg?1616122257074/dims/resize/200x200/quality/90" width="175" height="175" alt="샤르르"></img> */}

function loadTodayTotal() {
    $.ajax({
        type : "GET",
        url : "../assets/json/todays_add_music_total.json",
        dataType : "json",
        success : function(data) {
            let cont = [];
            for(let i in data) {
                cont.push(data[i]);
            }
            $(".thumbnail_list:nth(1) .thumbnail_item_area .link_thumbnail").each(function(index) {
                $(this).append("<img src=" + cont[index].img + "width='175' height='175'></img>");
  
            });

            $(".thumbnail_list:nth(1) .thumbnail_item_area > .album_title_text").each(function(index) {
                $(this).append("<span>" + cont[index].title + "</span>");   
            });

            $(".thumbnail_list:nth(1) .thumbnail_item_area > .artist_title_text").each(function(index) {
                $(this).append("<span>" + cont[index].artist + "</span>");   
            }); 
        }   
    });
}

function loadAudio() {
    $.ajax({
        type : "GET",
        url : "../assets/json/audio_for_you.json",
        dataType : "json",
        success : function(data) {
            let cont = [];
            for(let i in data) {
                cont.push(data[i]);
            }
            $(".thumbnail_list:nth(3) .thumbnail_item_area .link_thumbnail").each(function(index) {
                $(this).append("<img src=" + cont[index].img + "width='175' height='175'></img>");
            });

            $(".thumbnail_list:nth(3) .thumbnail_item_area > .album_title_text").each(function(index) {
                $(this).append("<span>" + cont[index].name + "</span>");   
            });
        }
    });
}


function loadWalkSong() {
    $.ajax({
        type : "GET",
        url : "../assets/json/walk_withme.json",
        dataType : "json",
        success : function(data) {
            let cont = [];
            for(let i in data) {
                cont.push(data[i]);
            }
            $(".thumbnail_list:nth(4) .thumbnail_item_area .link_thumbnail").each(function(index) {
                $(this).append("<img src=" + cont[index].img + "width='175' height='175'></img>");
            });

            $(".thumbnail_list:nth(4) .thumbnail_item_area > .album_title_text").each(function(index) {
                $(this).append("<span>" + cont[index].name + "</span>");   
            });
        }
    });
}


function loadGenreCollection() {
    $.ajax({
        type : "GET",
        url : "../assets/json/genres.json",
        dataType : "json",
        success : function(data) {
            let cont = [];
            for(let i in data) {
                cont.push(data[i]);
            }
            $(".thumbnail_list:nth(5) .thumbnail_item_area .link_thumbnail").each(function(index) {
                $(this).append("<img src=" + cont[index].img + " width='175' height='175'></img>");
                console.log(this);
            });
        }
    });
}


function loadWilla() {
    $.ajax({
        type : "GET",
        url : "../assets/json/willa.json",
        dataType : "json",
        success : function(data) {
            let cont = [];
            for(let i in data) {
                cont.push(data[i]);
            }
            $(".thumbnail_list:nth(6) .thumbnail_item_area .link_thumbnail").each(function(index) {
                $(this).append("<img src=" + cont[index].img + " width='175' height='175'></img>");
                console.log(this);
            });

            $(".thumbnail_list:nth(6) .thumbnail_item_area > .album_title_text").each(function(index) {
                $(this).append("<span>" + cont[index].name + "</span>");   
            });
        }
    });
}


function loadGoTo() {
    $.ajax({
        type : "GET",
        url : "../assets/json/we_go_music.json",
        dataType : "json",
        success : function(data) {
            let cont = [];
            for(let i in data) {
                cont.push(data[i]);
            }
            $(".thumbnail_list:nth(7) .thumbnail_item_area .link_thumbnail").each(function(index) {
                $(this).append("<img src=" + cont[index].img + " width='175' height='175'></img>");
                console.log(this);
            });

            $(".thumbnail_list:nth(7) .thumbnail_item_area > .album_title_text").each(function(index) {
                $(this).append("<span>" + cont[index].name + "</span>");   
            });
        }
    });
}


function loadEditorPick() {
    $.ajax({
        type : "GET",
        url : "../assets/json/editors_pick.json",
        dataType : "json",
        success : function(data) {
            let cont = [];
            for(let i in data) {
                cont.push(data[i]);
            }
            $(".thumbnail_list:nth(8) .thumbnail_item_area .link_thumbnail").each(function(index) {
                $(this).append("<img src=" + cont[index].img + " width='175' height='175'></img>");
                console.log(this);
            });

            $(".thumbnail_list:nth(8) .thumbnail_item_area > .album_title_text").each(function(index) {
                $(this).append("<span>" + cont[index].name + "</span>");   
            });
        }
    });
}
