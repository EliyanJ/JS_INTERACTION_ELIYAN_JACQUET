const tabs = document.querySelectorAll('.tab li');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', function() {
    tabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');

    contents.forEach(content => content.classList.remove('active'));
    contents[index].classList.add('active');
  });
});

