(function ($) {
  var url = "https://jsonplaceholder.typicode.com"

  $.ajax({
    url: url + '/posts',
    method: 'GET',
    success: showPosts
  })

  function showPosts(posts) {
    var post, postHtml, commentsHtml;
    for (var i = 0; i < 3; ++i) {
      post = posts[i];
      postHtml = buildPostHtml(post);
      postHtml.appendTo('.getPosts');
    }
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

  $('.update-Post').on('click', function() {

    $.ajax({
      url: url + '/posts/1',
      method: 'PUT',
      data: {
        id: 1,
        title: 'Update titlu',
        body: 'Mihai a reusit sa actualizeze o postare',
        userId: 1
      },
      success: function (response) {
        $('.getPosts article:first-child h2').text(response.title);
        $('.getPosts article:first-child p').text(response.body);
      }

    });
  });

  $('.delete-Post').on('click', function() {

    $.ajax({
      url: url + '/posts/2',
      method: 'DELETE',
      success: function () {
        $('.getPosts article:last-child').remove(); }
    });
  });


})(jQuery);