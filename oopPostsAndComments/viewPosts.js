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

    getCommentsForPost(postId) {
        return fetch(`${this.baseUrl}/posts/${id}/comments`).then(response => response.json());
    }
}


class ViewPosts {
    constructor() {

        this.model = new Model();

        this.showPostList();
        this.init();

    }

    init() {
        document.addEventListener('click', this.handleClick.bind(this));
    }



    handleClick(e) {

        if (!e.target.classList.contains('titlu')) {
            return;
        }
        console.log('click');
        const id = e.target.getAttribute('data-article');
        window.location.href = "postAndComments.html?id=" + id;

    }

    showPostList() {

        let posts = this.model.getPosts();
        posts.then(result => this.displayPost(result));
    }

    displayPost(posts) {
        let post;
        for (let i in posts) {
            let container = document.createElement('article');
            container.className = 'container';
            let title = document.createElement('h2');
            title.className = 'titlu';

            let body = document.createElement('p');

            post = posts[i];

            title.setAttribute('data-article', post.id);

            title.innerText = post.title;
            body.innerText = post.body;

            container.appendChild(title);
            container.appendChild(body);
            document.getElementById('ceva').appendChild(container);
        }
    }
}

let a = new ViewPosts();