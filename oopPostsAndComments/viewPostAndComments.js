class Model {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    getPosts() {
        return fetch(`${this.baseUrl}/posts`).then(response => response.json());
    }

    getPostById(id) {
        return fetch(`${this.baseUrl}/posts/${id}`).then(response => response.json());
    }

    getCommentsForPost(id) {
        return fetch(`${this.baseUrl}/posts/${id}/comments`).then(response => response.json());
    }
}


class ViewPostAndComments {
    constructor() {

        this.model = new Model();

        this.showPostAndComments();
    }

    showPostAndComments() {

        function getUrlParam(name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results == null) {
                return null;
            } else {
                return results[1] || 0;
            }
        }

        let id = getUrlParam('id');
        let post = this.model.getPostById(id);
        post.then(res => this.model.getCommentsForPost(id).then(result => this.displayComments(result, res)));


    }

    displayComments(comments, post) {
        let comment;
        let ctn = document.createElement('article');
        ctn.className = 'ctn';
        let postTitle = document.createElement('h3');
        let postBody = document.createElement('p');
        postTitle.innerText = post.title;
        postBody.innerText = post.body;
        ctn.appendChild(postTitle);
        ctn.appendChild(postBody);
        document.getElementById('postAndComments').appendChild(ctn);



        for (let i in comments) {
            let container = document.createElement('article');
            container.className = 'container';
            let title = document.createElement('h3');
            let body = document.createElement('p');

            comment = comments[i];

            title.innerText = comment.name;
            body.innerText = comment.body;

            container.appendChild(title);
            container.appendChild(body);
            document.getElementById('postAndComments').appendChild(container);
        }
    }
}

let b = new ViewPostAndComments();