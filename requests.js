export function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
}

export function getComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`)
        .then(response => response.json());
}

export function requestNewPost(title, body) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        })
    }).then(response => response.json())
}