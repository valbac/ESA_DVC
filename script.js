const features = [
  {
    title: 'Git Commands',
    text: 'Demonstration von add, commit, push, pull, diff und status.'
  },
  {
    title: 'Branches',
    text: 'Feature-Branches erstellen und anschließend mergen.'
  },
  {
    title: 'Time Travel',
    text: 'Mit git log, checkout und reset alte Versionen wiederherstellen.'
  },
  {
    title: 'Pull Requests',
    text: 'Änderungen über GitHub Pull Requests verwalten.'
  }
];

const commits = [
  'Initial commit',
  'Navbar hinzugefügt',
  'Dark Mode erstellt',
  'Feature-Branch gemerged',
  'README aktualisiert'
];

const featureContainer = document.getElementById('featureCards');
const commitContainer = document.getElementById('commitList');

features.forEach(feature => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <h4>${feature.title}</h4>
    <p>${feature.text}</p>
  `;

  featureContainer.appendChild(card);
});

commits.forEach(commit => {
  const item = document.createElement('div');
  item.classList.add('commit-item');
  item.textContent = commit;

  commitContainer.appendChild(item);
});

const repoBtn = document.getElementById('repoBtn');
const publishBtn = document.getElementById('publishBtn');

repoBtn.addEventListener('click', () => {
  alert('Git Repository erfolgreich gestartet!');
});

publishBtn.addEventListener('click', () => {
  alert('Projekt bereit zum Push auf GitHub!');
});