'use strict';

const messageTitle = document.querySelector('#messageTitle');
const messageBody = document.querySelector('#messageBody');
const messageButton = document.querySelector('#messageButton');

fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        const postContainer = document.createElement('div');
        postContainer.classList.add('postContainer');

        const postTitle = document.createElement('div');
        postTitle.classList.add('postTitle');
        postTitle.textContent = `${i + 1}:${data[i].title}`;

        const postBody = document.createElement('div');
        postBody.classList.add('postBody');
        postBody.textContent = `${data[i].body}`;

        const commentButton = document.createElement('Button');
        commentButton.classList.add('commentButton');
        commentButton.textContent = `Show comments`;

        commentButton.addEventListener('click', () => {
            const existingComments = postContainer.querySelectorAll('.allComments');

            if (existingComments.length > 0) {
                existingComments.forEach(el => el.remove());
                commentButton.textContent = 'Show comments';
            } else {
                fetch(`https://jsonplaceholder.typicode.com/posts/${data[i].id}/comments?_limit=2`)
                    .then(response => response.json())
                    .then(comments => {

                        const allComments = document.createElement('div');
                        allComments.classList.add('allComments');

                        comments.forEach(comment => {
                            const commentContainer = document.createElement('div');
                            commentContainer.classList.add('commentContainer');

                            const commentName = document.createElement('div');
                            commentName.classList.add('commentName');
                            commentName.textContent = `${comment.name}`;

                            const commentEmail = document.createElement('div');
                            commentEmail.classList.add('commentEmail');
                            commentEmail.textContent = `${comment.email}`;

                            const commentBody = document.createElement('div');
                            commentBody.classList.add('commentBody');
                            commentBody.textContent = `${comment.body}`;

                            commentContainer.appendChild(commentName);
                            commentContainer.appendChild(commentEmail);
                            commentContainer.appendChild(commentBody);
                            allComments.appendChild(commentContainer);
                        });

                        postContainer.appendChild(allComments);

                        commentButton.textContent = 'Hide comments';

                    });
            }
        });

        postContainer.appendChild(postTitle);
        postContainer.appendChild(postBody);
        postContainer.appendChild(commentButton);
        document.body.appendChild(postContainer);
    }
});

messageButton.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: messageTitle.value,
            body: messageBody.value,
            userId: 1
        })
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        function addPostToPage(post) {
            const postContainer = document.createElement('div');
            postContainer.classList.add('postContainer');

            const postTitle = document.createElement('div');
            postTitle.classList.add('postTitle');
            postTitle.textContent = `${document.querySelectorAll('.postContainer').length + 1}: ${post.title}`;

            const postBody = document.createElement('div');
            postBody.classList.add('postBody');
            postBody.textContent = post.body;

            const commentButton = document.createElement('button');
            commentButton.classList.add('commentButton');
            commentButton.textContent = 'Show comments';

            commentButton.addEventListener('click', () => {
                alert('No comments for newly created post!');
            });

            postContainer.appendChild(postTitle);
            postContainer.appendChild(postBody);
            postContainer.appendChild(commentButton);
            document.body.appendChild(postContainer);

            messageTitle.value = '';
            messageBody.value = '';
        }
        addPostToPage(data);
    });
});
