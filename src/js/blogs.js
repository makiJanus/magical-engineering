// projects.js
function loadBlogs() {
    const projectsContainer = document.getElementById('projects-container');
    const language = document.documentElement.lang;
    const blogToLoad = (language === 'en') ? "/src/blog_posts/blogs.html" : "/src/blog_posts/blogs_es.html";

    fetch(blogToLoad)
      .then(response => response.text())
      .then(html => {
        projectsContainer.innerHTML = html;
      })
      .catch(error => {s
        console.error('Error loading projects:', error);
      });
  }
  
  // Call the loadProjects function when the page loads
  window.addEventListener('load', loadBlogs);
