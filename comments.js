// Create web server
// Run node comments.js
// Open browser and go to http://localhost:3000/
// Add comments to the list
// View comments in the list
// Click on comment to view the details

const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const comments = [];

function renderForm() {
    return `
        <form method="POST">
            <input name="username" placeholder="Username">
            <textarea name="comment" placeholder="Comment"></textarea>
            <button>Submit</button>
        </form>
    `;
}

function renderComments() {
    const items = comments.map(comment => `
        <li>
            <a href="/comments/${comment.id}">${comment.username}</a>
        </li>
    `);
    return `
        <ul>
            ${items.join('')}
        </ul>
    `;
}

function renderComment(comment) {
    return `
        <h1>${comment.username}</h1>
        <p>${comment.comment}</p>
    `;
}