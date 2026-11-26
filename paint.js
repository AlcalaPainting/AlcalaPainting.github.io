const paintFinishes = [
  ['Terracotta', 'Sage', 'Lilac'],
  ['Olive & Cream', 'Plum & Blush', 'Navy & Sky'],
  ['Cornflower', 'Paprika', 'Eucalyptus'],
  ['Marigold', 'Mulberry', 'Lagoon'],
];

const buildings = [...document.querySelectorAll('.building')];
const repaintAll = document.querySelector('.paint-all');
const paintStatus = document.querySelector('#paint-status');

function repaint(building, finishes) {
  const nextFinish = (Number(building.dataset.finish) + 1) % finishes.length;
  const finish = finishes[nextFinish];

  building.dataset.finish = nextFinish;
  building.querySelector('.finish').textContent = finish;
  return finish;
}

buildings.forEach((building, index) => {
  building.addEventListener('click', () => {
    const finish = repaint(building, paintFinishes[index]);
    paintStatus.textContent = `${building.querySelector('strong').textContent} repainted in ${finish}.`;
  });
  building.disabled = false;
});

repaintAll.addEventListener('click', () => {
  const finishes = buildings.map((building, index) => repaint(building, paintFinishes[index]));
  paintStatus.textContent = `All four buildings repainted in ${finishes.join(', ')}.`;
});
repaintAll.disabled = false;
