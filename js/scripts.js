// load projects data
$.getJSON('./data/projects.json', function(projects) {
  // initially iterate over array of projects objects
  render(projects);

  const [someProject] = projects;

  // set up the sort button UI
  Object.keys(someProject).forEach(function(key, index) {
    // append each sort button
    $('#project-sort-buttons').append(`
      <button id="project-${key}">${key}</button>
    `);

    // bind a click event to each sort button
    $(`#project-${key}`).on('click', sortBy.bind(null, key, projects));
  });
});

// main renderer function - takes projects and selector
function render(projects, projectListSelector='#projects-list') {
  const listItems = projects.map(function(project, index) {
    // call the list item template function, pass in a project
    // this function is provided globally in the index.html

    return renderListItemTemplate(project);
  });

  // replace the project list
  $(projectListSelector).html(listItems);
}

// ability to sort projects by key
function sortBy(key, projects) {
  // instance variable to contain state of sorting directionn
  this.isAscending = !this.isAscending;

  // sort projects by value of given key
  const sortedProjects = projects.sort((a,b) => {
    if (this.isAscending) {
      if (a[key] > b[key]){
        return 1;
      } else {
        return -1;
      }
    }
      else {
      if (a[key] < b[key]){
        return 1;
      } else {
        return -1;
      }
    }
  });
  render(sortedProjects);
}
