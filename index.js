'use strict';

import { postsData } from "./data.js";

const postContainer = document.getElementById('posts');
const button = document.getElementById('view-more');

function feedHTML() {
    let htmlString = ``;

    for(const post of postsData) {
        htmlString += `
                <article class="blog-post" id="blog-post">
                    <div class="img-container"><img src="${post.image}"></div>
                    <p class="date">${post.date}</p>
                    <h2>${post.title}</h2>
                    <p>${post.text}</p>
                </article>
        `
    };
    
    postContainer.innerHTML = htmlString;
    const blogPosts = document.querySelectorAll('#blog-post');
    for(const [index, item] of blogPosts.entries()) {
        if(index >= 3) {
            item.classList.add('hidden')
        };
    };     
};

button.addEventListener('click', () => {
    const blogPosts = document.querySelectorAll('#blog-post');
    for(const item of blogPosts) {
        if(item.classList.contains('hidden')) {
            item.classList.remove('hidden');
            button.classList.add('hidden');
        };
    };


});


function render() {
    feedHTML();
};

render();
