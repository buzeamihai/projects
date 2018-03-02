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
        var commentTemplate = $('.comment').eq(0).clone();
        var currentComment;
        var commentList = $('.comments').empty();

        console.log(comments);

        for (var i = 0; i < comments.length; i++) {
            currentComment = comments[i];
            $('img', commentTemplate).attr('src', currentComment.imageUrl);
            $('p', commentTemplate).text(currentComment.text);
            $('span', commentTemplate).text(currentComment.email);
            $('a', commentTemplate).attr('commentId', currentComment.id);

            commentList.prepend(commentTemplate);

            commentTemplate = commentTemplate.clone();
        }
    }
})(jQuery);