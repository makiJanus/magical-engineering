// projects.js
function loadProjects_cherrypicked() {
    const projectsContainer = document.getElementById('projects-container');
    const language = document.documentElement.lang;
    const cherryProjectsToLoad = (language === 'en') ? "/src/project_posts/projects_cherrypicked.html" : "/src/project_posts/projects_cherrypicked_es.html";
  
    fetch(cherryProjectsToLoad)
      .then(response => response.text())
      .then(html => {
        projectsContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading projects:', error);
      });
  }
  
  // Call the loadProjects function when the page loads
  window.addEventListener('load', loadProjects_cherrypicked);

  function loadProjects_general() {
    const projectsContainer = document.getElementById('projects-general');
    const language = document.documentElement.lang;
    const projectsToLoad = (language === 'en') ? "/src/project_posts/projects.html" : "/src/project_posts/projects_es.html";
  
    fetch(projectsToLoad)
      .then(response => response.text())
      .then(html => {
        projectsContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading projects:', error);
      });
  }
  
  // Call the loadProjects function when the page loads
  window.addEventListener('load', loadProjects_general);