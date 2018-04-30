(function ($) {
    var comments = [];

    $('.comment-box__add-btn').on('click', addComment);

    $('.comments').on('click', 'a', deleteComment);

    function addComment(e) {
        var text = $('.comment-box__field').val();
        var email = $('.email-field').val();
        var image = $('.image-field').val();

        comments.push({
            id: Math.floor(Math.random() * 1000),
            text: text,
            email: email,
            imageUrl: image
        });

        displayComments();
        e.preventDefault();
    }


    function deleteComment(e) {
        var commentId = parseInt($(this).attr('commentId'), 10);
        for (var i = 0; i < comments.length; i++) {
            if (comments[i].id === commentId) {
                comments.splice(i, 1);
            }
        }
        displayComments();
    }

    function displayComments() {
        var commentTemplate = $('.comment');
        var currentComment;
        var commentList = $('.comments');
        commentList.html('');
        console.log(comments);

        for (var i = 0; i < comments.length; i++) {
            currentComment = comments[i];
            var newComment = $('<div>').addClass('comment');

            $('<img>').attr('src', currentComment.imageUrl).appendTo(newComment);
            $('<p>').text(currentComment.text).appendTo(newComment);
            $('<span>').text(currentComment.email).appendTo(newComment);
            $('<a>').attr('href', '#').attr('commentId', currentComment.id).addClass('comment__delete-btn').appendTo(newComment).html('X');

            commentList.prepend(newComment);
        }
    }
})(jQuery);``