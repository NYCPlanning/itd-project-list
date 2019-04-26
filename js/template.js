function renderListItemTemplate(project) {
  const requiresCityNet = project.requiresCityNet ? 'red' : 'silver';

  return `
    <div class="list-item">
      <h3 class="project-title">${project.id}</h3>
      <p class="project-description">${project.description}</p>
      <ul class="list-item-meta">
        <li>web app</li>
        <li>edm</li>
        <li>capital planning</li>
        <li>Javascript</li>
        <li>Website: http://</li>
        <li>Repo: http://</li>
        <li>Issues: http://</li>
        <li>CityNet
          <span class="fa-stack">
            <i class="fa fa-network-wired ${requiresCityNet} fa-stack-1x"></i>
          </span>
        </li>
        <li>Documented
          <span class="fa-stack">
            <i class="fa fa-file fa-lg silver fa-stack-1x"></i>
            <i class="fa fa-check fa-xs green-dark fa-stack-1x"></i>
          </span>
        </li>
      </ul>

    </div>
  `;
}
