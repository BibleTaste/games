/* =========================================================
   BIBLE TASTE GAMES - 共通サウンド (Web Audio API)
   効果音は「スペック(オブジェクト)」で宣言し GameAudio.play(spec) で鳴らす

   spec = {
     type:     'sine' | 'square' | 'triangle' | 'sawtooth'
     vol:      開始音量
     volEnd:   終了音量 (既定 0.01)
     volCurve: 'linear' | 'exp' (既定 'linear')
     dur:      長さ(秒)
     notes:    [[開始からの秒数, 周波数], ...]   ← 音程を階段状に変える
     sweep:    [開始Hz, 終了Hz, 'exp' | 'linear'] ← 音程をなめらかに変える
   }
   ========================================================= */
const GameAudio = (() => {
  let ctx = null;

  /** AudioContext を(必要なら生成して)返す。ユーザー操作の中で呼ぶこと */
  function init() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  /** 1音鳴らす。delay 秒後に開始 */
  function play(spec, delay = 0) {
    const c = init();
    if (!c) return;

    const { type = 'sine', vol = 0.2, volEnd = 0.01, volCurve = 'linear', dur = 0.1, notes, sweep } = spec;
    const t0 = c.currentTime + delay;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.connect(gain);
    gain.connect(c.destination);

    if (notes) {
      notes.forEach(([at, freq]) => osc.frequency.setValueAtTime(freq, t0 + at));
    }
    if (sweep) {
      const [from, to, mode = 'exp'] = sweep;
      osc.frequency.setValueAtTime(from, t0);
      if (mode === 'exp') osc.frequency.exponentialRampToValueAtTime(to, t0 + dur);
      else osc.frequency.linearRampToValueAtTime(to, t0 + dur);
    }

    gain.gain.setValueAtTime(vol, t0);
    if (volCurve === 'exp') gain.gain.exponentialRampToValueAtTime(volEnd, t0 + dur);
    else gain.gain.linearRampToValueAtTime(volEnd, t0 + dur);

    osc.start(t0);
    osc.stop(t0 + dur);
  }

  /**
   * BGM 用ループ。intervalMs ごとに nextSpec() を呼び、
   * spec が返ればそれを鳴らす (null/undefined なら休符)
   */
  function createLoop(intervalMs, nextSpec) {
    let timer = null;
    return {
      start() {
        if (timer) return;
        timer = setInterval(() => {
          const spec = nextSpec();
          if (spec) play(spec);
        }, intervalMs);
      },
      stop() {
        clearInterval(timer);
        timer = null;
      },
      get playing() { return timer !== null; }
    };
  }

  return { init, play, createLoop };
})();
