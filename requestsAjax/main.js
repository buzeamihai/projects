(function ($) {
    var url = "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Technology/30.json";
    url += '?' + $.param({
        'api-key': "95a09be2864f43e186e04355babdd5cf"
    });
    $.ajax({
        url: url,
        method: 'GET',
        success: function (response) {
            console.log(response);
            var news = $('.news');
            for (var i = 0; i < 10; i++) {
                // news.append('<h2 class="title">' + response.results[i].title + '</h2>');
                // news.append('<p class="infos">' + response.results[i].abstract + '</p>');
                $('<h2>').addClass('title').text(response.results[i].title).appendTo(news);
                $('<p>').addClass('infos').text(response.results[i].abstract).appendTo(news);
            }
        }
    });
})(jQuery);