const blogContainer = document.getElementById("blog");

blogData.forEach(post => {
  blogContainer.innerHTML += `
    <div>
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <small>${post.date}</small>
    </div>
  `;
});