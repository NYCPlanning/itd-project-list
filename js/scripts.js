// load projects data
$.getJSON('./data/projects.json', function(projects) {
  // iterate over array of projects objects
  projects.forEach(function(project) {
    // build out a list item with project info
    const listItem = `
      <div class="list-item">
        <h3>${project.id}</h3> <br/>
        <p>${project.description}</p>
      </div>
    `;

    // append the list item to the projects list div
    $('#projects-list').append(listItem);
  });

  // iterate over the keys in the data
  Object.keys(projects[0]).forEach(key => {
    // bind a callback
    $(`#${key}`).on('click', function() {
      alert('clicked!');
    });
  });
});
