const buildings = document.querySelectorAll('.building');
const paintStatus = document.querySelector('#paint-status');
const finishCount = 3;

function repaint(building) {
  const nextFinish = (Number(building.dataset.finish) + 1) % finishCount;
  building.dataset.finish = nextFinish;
  return nextFinish;
}

buildings.forEach((building) => {
  building.addEventListener('pointerenter', (event) => {
    if ((event.pointerType === 'mouse' || event.pointerType === 'pen') && event.buttons === 0) {
      repaint(building);
    }
  });
  building.addEventListener('click', () => {
    const nextFinish = repaint(building);
    paintStatus.textContent = `${building.getAttribute('aria-label')}. Design ${nextFinish + 1} of ${finishCount}.`;
  });
  building.disabled = false;
});
