// script.js

// function showDetails(projectId) {
//     let modal = document.getElementById('modal');
//     let title = document.getElementById('modal-title');
//     let description = document.getElementById('modal-description');

//     // Add details for each project
//     if (projectId === 'project1') {
//         title.textContent = 'Project 1';
//         description.textContent = 'Detailed information about Project 1...';
//     } else if (projectId === 'project2') {
//         title.textContent = 'Project 2';
//         description.textContent = 'Detailed information about Project 2...';
//     }

//     modal.style.display = "block";
// }
function showDetails(projectId) {
    let modal = document.getElementById('modal');
    let title = document.getElementById('modal-title');
    let description = document.getElementById('modal-description');
    let githubLink = document.getElementById('github-link');

    if (projectId === 'project1') {
        title.textContent = 'Minitest';
        description.innerHTML = `
            <strong>Test Maker API</strong><br><br>
            This project is an API for a Test Maker. It allows the master to create and manage multiple-choice questions, set test rules such as total time, number of questions, and grant permission to students to take the test. The API is built using the Spring Boot framework with Java programming language, and the data is stored in MySQL.<br><br>
            <strong>Technologies Used</strong><br>
            Eclipse<br>
            Postman<br>
            MySQL<br>
            Spring Boot<br>
            Java
        `;        githubLink.href = 'https://github.com/Praveen318/minitest'; // Replace with your GitHub project link
    } else if (projectId === 'project2') {
        title.textContent = 'VANI: ADVANCED MULTI-MODAL CHATBOT';
        description.innerHTML = `
            <strong>Product architecture</strong><br><br>
            <img src="architecture.png" alt="Product architecture" style="width:100%; max-width:400px; margin-bottom:15px;"><br><br>
            User Queries: o The process begins with user queries. These can be normal queries or queries starting with specific keywords (e.g., “**”). o These queries serve as input for further processing.
            Vectorization of Queries: o The user queries are vectorized, transforming them into numerical representations. o Vectorization allows efficient comparison and retrieval of relevant information.
            Answer Generation: o Based on the vectorized queries, the system generates answers. o If the query starts with “**”, it treats it as a vector search on the Vector DB. o Otherwise, it uses GPT (Generative Pretrained Transformer) models to summarize content or provide answers.
            Web Search Results: o If the query requires web search, the system retrieves web search results. o It summarizes the content from web pages using GPT summarizers.
            Embedding Model: o The retrieved content is fed into an “Embedding Model.” o This model likely converts the textual content into embeddings (dense vector representations).
            GPT RAG (Retrieval-Augmented Generation): o The GPT RAG model combines retrieval-based and generation-based approaches. o It retrieves relevant information (using embeddings) and generates coherent responses.
            Web Search Functions: o The system performs web search functions, including loading websites, chunking content, and calling web search APIs. o It retrieves relevant information from web pages.
            Vector DB: o The Vector DB handles vector searches. o If the query is treated as a vector search, it looks up relevant vectors in the database.
            `;
        githubLink.href = 'https://github.com/Praveen318/Vaani'; // Replace with your GitHub project link
    }

    modal.style.display = "block";
}

function closeModal() {
    let modal = document.getElementById('modal');
    modal.style.display = "none";
}


// function closeModal() {
//     let modal = document.getElementById('modal');
//     modal.style.display = "none";
// }

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    let modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
