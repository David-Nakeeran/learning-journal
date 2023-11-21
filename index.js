'use strict';

import { postsData } from "./data.js";

function render() {
    const postContainer = document.getElementById('posts');
    let htmlString = ``;

    for(const post of postsData) {
        htmlString += `
                <article>
                    <img src="${post.image}">
                    <p>${post.date}</p>
                    <h1>${post.title}</h1>
                    <p>${post.text}</p>
                </article>
        `
        console.log(htmlString);
    }

    postContainer.innerHTML = htmlString;
};

render();

// loop through postsData and innerHTML +=

// check if parent element has 3 or less children, add class hidden to remaining elements

// click view more, removes elements with hidden class