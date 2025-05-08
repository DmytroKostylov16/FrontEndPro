export function createPostElement(data) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < data.length; i++) {
        const postContainer = document.createElement('div');
        postContainer.dataset.id = data[i].id;
        postContainer.classList.add('postContainer');
        postContainer.innerHTML = `
        <h2 class="postTitle">${data[i].title}</h2>
        <span>${data[i].body}</span>
        <button class="commentButton" type="button">Show comments</button>`;
        fragment.appendChild(postContainer);
    }
    return fragment;
}

export function createCommentElement(comment) {
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('commentContainer');
    commentContainer.innerHTML = `
    <h3 class="commentName">${comment.name}</h3>
    <div class="commentEmail">${comment.email}</div>
    <div class="commentBody">${comment.body}</div>`;

    return commentContainer;
}

export function createNewPost(post) {
    const postContainer = document.createElement('div');
    postContainer.dataset.id = post.id;
    postContainer.classList.add('postContainer');
    postContainer.innerHTML = `
    <h2 class="postTitle">${post.title}</h2>
    <span>${post.body}</span>
    <button class="commentButton" type="button" disabled>Show comments</button>`;

    return postContainer;
}
