function renderListItemTemplate(project) {
  return `
    <div class="list-item">
      <h3 class="col-0">${project.id}</h3> <br/>
      <p class="col-1">${project.description}</p>
      <p class="col-2">${project.fruit}</p>
    </div>
  `;
}
