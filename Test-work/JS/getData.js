var accToken = '408015576.845cd9b.072b207004d74d0bbb791d2082b64dac',
    userId = 408015576,
    i = 0,
    date = new Date();

$('main').append('<input class="btn" type="button" value="Загрузить ещё" onclick="addElement();">');

$.ajax({
    url: 'https://api.instagram.com/v1/users/' + userId,
    dataType: 'json',
    type: 'GET',
    data: {access_token: accToken},
    async: false,
    success: function (result) {
        $('.header-ul').append('<li><img class="avatar-image" src = "' + result.data.profile_picture + '"></li>');
        $('.header-ul').append('<li><span class = "photo-count">Фотографий: ' + result.data.counts.media + '</span>');
        $('.header-ul').append('<li><span class = "user-name">Пользователь: ' + result.data.username + '</span></li>');

    },
    error: function (result) {
        console.log(result);
        alert('Что-то пошло не так');
    }
});

var instaData = JSON.parse($.ajax({
    url: 'https://api.instagram.com/v1/users/' + userId + '/media/recent',
    dataType: 'json',
    type: 'GET',
    data: {access_token: accToken},
    async: false,
    success: function (result) {
        console.log(result);
    },
    error: function () {
        alert('Что-то пошло не так');
    }
}).responseText);

addElement();

function addElement() {
    var iterCount = 0,
        likesCount = 0,
        commentsCount = 0,
        date = null,
        caption = null;


    for (i; i < instaData.data.length; i++) {
        likesCount = instaData.data[i].likes.count;
        commentsCount = instaData.data[i].comments.count;
        date = myGetDate(instaData.data[i].created_time);
        caption = instaData.data[i].caption;


        if (iterCount == 5) {
            break;
        }
        iterCount++;
        $('.photo-ul').append('<li class="post"><img src = "' + instaData.data[i].images.standard_resolution.url + '"></li>');
        if (caption != null) {
            caption = instaData.data[i].caption.text;
            $('.photo-ul').append('<p class="caption">' + caption + '</p>');
        }

        if (commentsCount == 0) {
            $('.photo-ul').append('<p class="post-info">' + likesCount + '&#10084; Нет комментариев ' + date + '</p>');
        } else {
            $('.photo-ul').append('<p class="post-info">' + likesCount + '&#10084; ' + commentsCount + 'комментариев ' + date + '</p>');
        }

    }

    if (i == instaData.data.length) {
        $('.btn').css({"display": "none"});
    }
}


function myGetDate(seconds) {
    var date = new Date(+seconds * 1000),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    date = day + '.' + month + '.' + year;

    return date;
}



















