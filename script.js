const links = document.querySelectorAll('.tab-link');
const tabs = document.querySelectorAll('.tab-content');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.tab;

    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.id === target);
    });
  });
});