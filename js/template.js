function renderListItemTemplate(project) {
  const requiresCityNet = project.cityNet ? 'red' : 'silver';
  const cityNetToolTip = project.cityNet ? 'Requires CityNet' : 'Does Not Require CityNet';
  const repoDocsIcon = project.repoDocs ? 'check' : 'times';
  const repoDocsColor = project.repoDocs ? 'green-dark' : 'red-dark';
  const docsToolTip = project.repoDocs ? 'Has Docs' : 'No Docs';
  const repoLink = project.repoLink ? `<a href="${project.publicRepo}"><i class="fab fa-git-square"></i></a>` : '<i class="fab fa-git-square silver"></i>';
  const issueLink = project.issueTracker ? `<a href="${project.issueTracker}"><i class="fa fa-exclamation-circle"></i></a>` : '<i class="fa fa-exclamation-circle silver"></i>';
  return `
    <div class="list-item">
      <h3 class="project-title">${project.name}</h3>
      <p class="project-description">${project.description}</p>
      <ul class="list-item-meta">
        <li>${project.category}</li>
        <li>${project.techOwner}</li>
        <li>${project.busOwner}</li>
        <li>${project.language}</li>
        <li>Website: ${project.url}</li>
        <li>${repoLink}</li>
        <li>${issueLink}</li>
        <li>${project.publicProduct}</li>

        <li>
          <span class="fa-stack">
            <i class="fa fa-network-wired ${requiresCityNet} fa-stack-1x"></i>
          </span>
          <span class="tooltip">${cityNetToolTip}</span>
        </li>
        <li>
          <span class="fa-stack">
            <i class="fa fa-file fa-lg silver fa-stack-1x"></i>
            <i class="fa fa-${repoDocsIcon} fa-xs ${repoDocsColor} fa-stack-1x"></i>
          </span>
          <span class="tooltip">${docsToolTip}</span>
        </li>
      </ul>

    </div>
  `;
}
