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

document.getElementById('svg--mr-od').addEventListener('click', () => loadSVG('sylvie','mr-od'), {once: true});
