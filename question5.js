// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  // get container
  const container = document.querySelector('.container');

  data.forEach((post) => {
    //create el
    const postContainer = document.createElement('div');
    const titleEl = document.createElement('h3');
    const bodyEl = document.createElement('p');

    //add class
    postContainer.classList.add('post');

    //Update element
    titleEl.textContent = `Title: ${post.title}`;
    bodyEl.textContent = `Body: ${post.body}`;

    // append
    postContainer.appendChild(titleEl);
    postContainer.appendChild(bodyEl);
    container.appendChild(postContainer);
  });
}

getPosts();
