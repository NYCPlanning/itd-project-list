function renderListItemTemplate(project) {
  const requiresCityNet = project.cityNet ? 'red' : 'silver';
  const cityNetToolTip = project.cityNet ? 'Requires CityNet' : 'CityNet Not Required';
  const publicProduct = project.publicProduct ? 'green-dark' : 'silver';
  const issueToolTip = project.issueTracker ? 'Issue Tracker Link' : 'No Issue Tracker'
  const publicProductToolTip = project.publicProduct ? 'Has Public Product' : 'No Public Product';
  const repoDocsIcon = project.repoDocs ? 'check' : 'times';
  const repoDocsColor = project.repoDocs ? 'green-dark' : 'red-dark';
  const docsToolTip = project.repoDocs ? 'Has Docs' : 'No Docs';
  const repoLink = project.url ? `<a href="${project.url}"><i class="fab fa-git-square"></i></a>` : '<i class="fab fa-git-square silver"></i>';
  const repoToolTip = project.url ? 'Repository Link' : 'No Repository';
  const issueLink = project.issueTracker ? `<a href="${project.issueTracker}"><i class="fa fa-exclamation-circle"></i></a>` : '<i class="fa fa-exclamation-circle silver"></i>';
  return `
    <div class="list-item">
      <h3 class="project-title">${project.name}</h3>
      <p class="project-description">${project.description}</p>
      <ul class="list-item-meta">
        <li><strong>Category: </strong>${project.category}</li>
        <li><strong>Tech Owner: </strong> ${project.techOwner}</li>
        <li><strong>Business Owner: </strong> ${project.busOwner}</li>
        <li><strong>Language: </strong>${project.language}</li>
        <li>${repoLink}<span class="tooltip">${repoToolTip}</span></li>
        <li>${issueLink}<span class="tooltip">${issueToolTip}</span></li>
        <li>
          <span class="fa-stack">
            <i class="fa fa-users ${publicProduct} fa-stack-1x"></i>
          </span>
          <span class="tooltip">${publicProductToolTip}</span>
        </li>

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
