const loadSVG = async (id, insertBefore=false) => {
  fetch(`./assets/${id}.svg`)
    .then(r => r.text())
    .then(svgText => {
      const dispoDiv = document.createElement('div');
      dispoDiv.innerHTML = svgText;
      if (insertBefore) {
        document.getElementById('canvas').insertBefore(dispoDiv.firstElementChild, document.getElementById(`svg--${insertBefore}`));
      }
      else {
        document.getElementById('canvas').appendChild(dispoDiv.firstElementChild);
      }
    });
}

const canvas = document.getElementById('canvas');

document.getElementById('svg--mr-od').addEventListener('click', async () => {
  loadSVG('sylvie','mr-od');
  window.setTimeout(() => {
    document.getElementById('svg--sylvie').querySelector('.tail').addEventListener('click', () => alert('Meow'));
  }, 100);
}, {once: true});

document.getElementById('svg--figgy').querySelector('.nose').addEventListener('click', () => alert('Nose boops are rude!'));
