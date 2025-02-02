// script.js

document.getElementById('noteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const date = document.getElementById('date').value;
    const note = document.getElementById('note').value;

    const noteItem = document.createElement('div');
    noteItem.classList.add('note-item');
    noteItem.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Note:</strong> ${note}</p>
    `;

    document.getElementById('noteList').appendChild(noteItem);

    document.getElementById('noteForm').reset();
});
