/* index.html 専用スクリプト: BGM ON/OFF と「遊ぶ」ボタンの決定音 */
(() => {
  'use strict';

  const BGM_NOTES = [
    261.63, 329.63, 392.00, 523.25, // C E G C
    293.66, 349.23, 440.00, 587.33, // D F A D
    329.63, 392.00, 493.88, 659.25, // E G B E
    349.23, 440.00, 523.25, 698.46  // F A C F
  ];
  // ファミコン風の決定音（ピピッと上昇）
  const CLICK_SE = { type: 'square', vol: 0.1, volCurve: 'exp', dur: 0.15, notes: [[0, 523.25], [0.06, 1046.5]] };

  const soundBtn = document.getElementById('soundBtn');
  let noteIndex = 0;

  const bgm = GameAudio.createLoop(150, () => ({
    type: 'triangle', vol: 0.05, volEnd: 0.005, volCurve: 'exp', dur: 0.12,
    notes: [[0, BGM_NOTES[noteIndex++ % BGM_NOTES.length]]]
  }));

  function setBgm(on) {
    if (on) bgm.start(); else bgm.stop();
    soundBtn.textContent = on ? '🔊 SOUND: ON' : '🔇 SOUND: OFF';
  }

  // 最初のクリックで BGM 開始（ブラウザの自動再生制限対策）
  document.addEventListener('click', () => {
    GameAudio.init();
    if (!bgm.playing) setBgm(true);
  }, { once: true });

  soundBtn.addEventListener('click', e => {
    e.stopPropagation();
    GameAudio.init();
    setBgm(!bgm.playing);
  });

  // 決定音を鳴らしてから遷移
  document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const url = btn.getAttribute('href');
      GameAudio.play(CLICK_SE);
      setTimeout(() => { window.location.href = url; }, 150);
    });
  });
})();
