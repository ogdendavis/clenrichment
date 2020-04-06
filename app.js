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

let figClick = 0;
const figBomb = () => {
  figClick++;
  if (figClick === 10) {
    loadSVG('ms-lord');
  }
  else if (figClick === 50) {
    alert('Man, you really like clicking on that dog');
  }
  else if (figClick === 125) {
    canvas.innerHTML = '';
    loadSVG('congrats');
    window.setTimeout(() => {
      canvas.innerHTML = '';
      loadSVG('mr-od');
      loadSVG('figgy');
    }, 10000);
    window.setTimeout(() => {
      setup();
    }, 10100);
  }
}

const canvas = document.getElementById('canvas');

const setup = () => {
  document.getElementById('svg--mr-od').addEventListener('click', async () => {
    loadSVG('sylvie','mr-od');
    window.setTimeout(() => {
      document.getElementById('svg--sylvie').querySelector('.tail').addEventListener('click', () => alert('Meow'));
    }, 100);
  }, {once: true});

  document.getElementById('svg--figgy').querySelector('.nose').addEventListener('click', () => alert('Nose boops are rude!'));

  document.getElementById('svg--figgy').addEventListener('click', figBomb);
}
setup();
