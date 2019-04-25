// load projects data
$.getJSON('./data/projects.json', function(projects) {
  // iterate over array of projects objects
  projects.forEach(function(project) {
    // build out a list item with project info
    const listItem = `
      <div class="list-item">
        <h3 class="project--id">${project.id}</h3> <br/>
        <p class="project--description">${project.description}</p>
      </div>
    `;

    // append the list item to the projects list div
    $('#projects-list').append(listItem);
  });

  const [firstProject] = projects;

  // iterate over the keys in the data
  Object.keys(firstProject).forEach(key => {
    // append a sort button for each key with ID
    const button = `
      <button id="${key}">${key}</button>
    `;

    // append the list item to the projects list div
    $('#sort-by-buttons').append(button);

    // bind a sorter callback
    $(`#${key}`).on('click', sortBy.bind(null, key));
  });
});

function sortBy(key) {
  this.isAsc = !this.isAsc;

  const orderedDivs = $('.list-item').sort(function(a,b) {
    const orderKeySelector = `.project--${key}`;

    const direction = (function() {
      if (isAsc) {
        return $(a).find(orderKeySelector).text() < $(b).find(orderKeySelector).text();
      } else {
        return $(a).find(orderKeySelector).text() > $(b).find(orderKeySelector).text();
      }
    })();

    return direction;
  });

  $('#projects-list').html(orderedDivs);
}
