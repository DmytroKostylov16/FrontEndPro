'use strict';

import { createNewPost, createPostElement, createCommentElement } from './elements.js';
import { requestNewPost, getPosts, getComments } from './requests.js';

const messageTitle = document.querySelector('#messageTitle');
const messageBody = document.querySelector('#messageBody');
const messageButton = document.querySelector('#messageButton');

async function renderPosts() {
    try {
        const posts = await getPosts();
        document.body.appendChild(createPostElement(posts));
    } catch (error) {
        console.error('Failed to fetch posts:', error);
    }
}

renderPosts().catch(error => console.error('Error in renderPosts:', error));

document.body.addEventListener('click', async (event) => {
    if (event.target.classList.contains('commentButton')) {
        const postElement = event.target.closest('.postContainer');
        const postId = postElement.dataset.id;
        const existingComments = postElement.querySelectorAll('.commentContainer');

        if (existingComments.length > 0) {
            existingComments.forEach(comment => comment.remove());
            event.target.textContent = 'Show comments';
            return;
        }

        try {
            const comments = await getComments(postId);
            const commentsToShow = comments.slice(0, 2);
            commentsToShow.forEach(comment => {
                postElement.appendChild(createCommentElement(comment));
            });
            event.target.textContent = 'Hide comments';
        } catch (error) {
            console.error('Failed to fetch comments:', error);
        }
    }
});

messageButton.addEventListener('click', async () => {
    try {
        const newPost = await requestNewPost(messageTitle.value, messageBody.value);
        const postEl = createNewPost(newPost);
        document.body.appendChild(postEl);
        messageTitle.value = '';
        messageBody.value = '';
    }
    catch (e) {
        console.error(e);
    }
});
