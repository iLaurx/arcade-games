const games = {
  'neon-drift': { number: '01', title: 'NEON DRIFT', description: 'Corre por una ciudad que nunca apaga sus luces.' },
  'orbit-runner': { number: '02', title: 'ORBIT RUNNER', description: 'Esquiva meteoritos y alcanza una nueva órbita.' },
  'pixel-quest': { number: '03', title: 'PIXEL QUEST', description: 'Un pequeño héroe. Un mundo lleno de secretos.' }
};

const dialog = document.querySelector('.game-dialog');

document.querySelectorAll('[data-open-game]').forEach((button) => {
  button.addEventListener('click', () => {
    const game = games[button.dataset.openGame];
    if (!game) return;
    document.querySelector('#dialog-number').textContent = game.number;
    document.querySelector('#dialog-title').textContent = game.title;
    document.querySelector('#dialog-description').textContent = game.description;
    dialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
