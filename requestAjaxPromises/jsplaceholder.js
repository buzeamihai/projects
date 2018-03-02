(function ($) {
  var url = "https://jsonplaceholder.typicode.com"

  $.ajax({
      url: url + '/posts',
      method: 'GET',
    })
    .then(showPosts)
    .then(buildPostHtml)
    .catch(function (e) {
      if (e.status === 404) {
        $('body').append('<div class="error">Page not found!</div>')
      }
    });

  function showPosts(posts) {
    var post, postHtml, commentsHtml;
    for (var i = 0; i < 3; ++i) {
      post = posts[i];
      postHtml = buildPostHtml(post);
      postHtml.appendTo('.getPosts');
    }
    return posts;
  }

  function buildPostHtml(post) {
    var container = $('<article>');
    var title = $('<h2>');
    var body = $('<p>');

    title.text(post.title).appendTo(container);
    body.text(post.body).appendTo(container);
    return container;
  }

  $('.add-Post').on('click', function () {

    $.ajax({
      url: url + '/posts',
      method: 'POST',
      data: {
        title: 'Adaugare titlu',
        body: 'Mihai a reusit sa faca un POST',
        userId: 1
      },
      success: function (newPost) {
        var container = $('<article>');
        var title = $('<h2>');
        var body = $('<p>');

        title.text(newPost.title).appendTo(container);
        body.text(newPost.body).appendTo(container);
        $('.addNewPost').append(container);
        console.log(newPost);
      }
    });
  });



})(jQuery);