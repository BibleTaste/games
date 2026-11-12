/* =========================================================
   エデンの園：防衛戦
   依存: js/audio.js (GameAudio) / js/i18n.js (I18n)

   ゲームの流れ (game.phase):
     select  → 難易度選択
     descend → 天使が降臨するオープニング
     play    → 防衛中
     over    → ゲームオーバー（1人でも通過で即終了）
     clear   → 大洪水エンディング
   ========================================================= */
(() => {
  'use strict';

  // ---------------------------------------------------------
  // 多言語テキスト（{0} {1} は I18n.t の引数で置換）
  // ---------------------------------------------------------
  const I18N = {
    ja: {
      title: 'エデンの園：防衛戦',
      restartBtn: '難易度選択に戻る',
      infoText: '⚠️ 1人でも通過で即ゲームオーバー！ | 追い返し+10 / 剣撃破+0 / 巨人撃破+50',
      score: 'スコア',
      lives: '防衛ライフ',
      yearsProgress: '年経過',
      warningNephilim: '⚠️ ラスト{0}年：巨人のネフィリム大量襲来！',
      gameOverTitle: 'エデンの園侵入を許しました',
      gameOverDesc: '最終スコア: {0} 点 ({1}年経過時点で陥落)',
      gameOverRetry: '画面クリックか「難易度選択に戻る」でリトライできます',
      gameClearTitle: '{0}年間を守り抜きました！',
      gameClearDesc: '大洪水がすべてを流し去り、天使たちは天へと帰還しました。',
      gameClearScore: '最終防衛スコア: {0} 点',
      selectDifficulty: '難易度を選んでください',
      level1Name: 'レベル 1', level1Desc: '幼稚園の子でもできるレベル（とてもやさしい）',
      level2Name: 'レベル 2', level2Desc: '小学生の子でもできるレベル（ふつう）',
      level3Name: 'レベル 3', level3Desc: '大人でも楽しめるレベル（むずかしい）',
      levelAngelName: 'レベル 天使', levelAngelDesc: '大人でもクリアが難しい難易度（激ムズ）'
    },
    kana: {
      title: 'えでんのその：ぼうえいせん',
      restartBtn: 'むずかしさ えらびにもどる',
      infoText: '⚠️ 1にんでも とおったら ゲームオーバー！ | おいかえし+10 / けん+0 / きょじん+50',
      score: 'すこあ',
      lives: 'らいふ',
      yearsProgress: 'ねん けいか',
      warningNephilim: '⚠️ らすと{0}ねん：きょじんの ねふぃりむが しゅうらい！',
      gameOverTitle: 'えでんのそのに はいられてしまいました',
      gameOverDesc: 'さいしゅう すこあ: {0} てん ({1}ねんで たおれた)',
      gameOverRetry: 'がめんを おすか 「むずかしさ えらびにもどる」を おしてね',
      gameClearTitle: '{0}ねんかんを まもりぬきました！',
      gameClearDesc: 'おおみずが すべてを ながし、てんしたちは てんへ かえりました。',
      gameClearScore: 'さいしゅう すこあ: {0} てん',
      selectDifficulty: 'むずかしさを えらんでね',
      level1Name: 'れべる 1', level1Desc: 'ようちえんの こでも できる（とてもやさしい）',
      level2Name: 'れべる 2', level2Desc: 'しょうがくせいの こでも できる（ふつう）',
      level3Name: 'れべる 3', level3Desc: 'おとなでも たのしめる（むずかしい）',
      levelAngelName: 'れべる てんし', levelAngelDesc: 'おとなでも くりあが むずかしい（げきむず）'
    },
    en: {
      title: 'Garden of Eden: Defense',
      restartBtn: 'Select Difficulty',
      infoText: '⚠️ Game Over if 1 passes! | Repel +10 / Sword +0 / Nephilim +50',
      score: 'Score',
      lives: 'Lives',
      yearsProgress: 'Years Passed',
      warningNephilim: '⚠️ Last {0} Years: Invasion of Nephilim Giants!',
      gameOverTitle: 'Eden Has Been Breached',
      gameOverDesc: 'Final Score: {0} (Fell at Year {1})',
      gameOverRetry: "Click screen or press 'Select Difficulty' to retry",
      gameClearTitle: 'Defended for {0} Years!',
      gameClearDesc: 'The Great Flood swept everything away, and angels ascended.',
      gameClearScore: 'Final Defense Score: {0}',
      selectDifficulty: 'Select Difficulty Level',
      level1Name: 'Level 1', level1Desc: 'Kindergarten Level (Very Easy)',
      level2Name: 'Level 2', level2Desc: 'Elementary School Level (Normal)',
      level3Name: 'Level 3', level3Desc: 'Adult Challenge Level (Hard)',
      levelAngelName: 'Level Angel', levelAngelDesc: 'Extreme Difficulty Level (Very Hard)'
    }
  };

  const i18n = I18n.create(I18N);
  const t = (key, ...args) => i18n.t(key, ...args);

  // ---------------------------------------------------------
  // 設定
  // ---------------------------------------------------------
  const DIFFICULTY_SETTINGS = {
    1:     { spawnInterval: 140, speedHuman: 0.6, speedNephilim: 0.9, nephilimRate: 0.30 },
    2:     { spawnInterval: 95,  speedHuman: 1.1, speedNephilim: 1.5, nephilimRate: 0.55 },
    3:     { spawnInterval: 70,  speedHuman: 1.6, speedNephilim: 2.1, nephilimRate: 0.75 },
    angel: { spawnInterval: 45,  speedHuman: 2.2, speedNephilim: 2.8, nephilimRate: 0.90 }
  };

  const GAME_CONFIG = {
    TOTAL_TIME_SEC: 5 * 60, // ゲーム全体のリアル時間（5分 = 300秒）
    TOTAL_YEARS: 1500,      // 守る期間（1500年）
    NEPHILIM_YEARS: 120,    // ラスト何年をネフィリム出現期間にするか
    SCORE_RETURN: 10,       // 追い返し時
    SCORE_NEPHILIM: 50      // ネフィリム撃破時
  };

  /** 難易度選択ボタン（キャンバス上に描画・判定） */
  const DIFF_BUTTONS = [
    { id: '1',     keyName: 'level1Name',     keyDesc: 'level1Desc',     y: 150, height: 60, color: '#00e676' },
    { id: '2',     keyName: 'level2Name',     keyDesc: 'level2Desc',     y: 225, height: 60, color: '#00c2cb' },
    { id: '3',     keyName: 'level3Name',     keyDesc: 'level3Desc',     y: 300, height: 60, color: '#ff66c4' },
    { id: 'angel', keyName: 'levelAngelName', keyDesc: 'levelAngelDesc', y: 375, height: 60, color: '#ff3131' }
  ];

  // ---------------------------------------------------------
  // キャンバス
  // ---------------------------------------------------------
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  const DEFENSE_X = 720; // この線を越えられるとゲームオーバー
  const font = (weight, px) => `${weight} ${px}px "M PLUS Rounded 1c", sans-serif`;
  const rand = (min, max) => min + Math.random() * (max - min);
  const pick = list => list[Math.floor(Math.random() * list.length)];

  // ---------------------------------------------------------
  // 効果音 / BGM
  // ---------------------------------------------------------
  const SE = {
    return:         { type: 'sine',     vol: 0.15, dur: 0.15, sweep: [523.25, 1046.5, 'exp'] },
    kill_nephilim:  { type: 'triangle', vol: 0.3,  dur: 0.3,  sweep: [200, 50, 'exp'] },
    kill_human:     { type: 'sawtooth', vol: 0.15, dur: 0.2,  notes: [[0, 150], [0.15, 100]] },
    damage:         { type: 'square',   vol: 0.3,  dur: 0.3,  sweep: [120, 40, 'linear'] },
    flood:          { type: 'triangle', vol: 0.5,  dur: 2.0,  sweep: [100, 30, 'linear'] },
    descend:        { type: 'sine',     vol: 0.2,  dur: 0.8,  sweep: [261.63, 523.25, 'exp'] },
    select:         { type: 'sine',     vol: 0.2,  dur: 0.1,  sweep: [440, 880, 'exp'] }
  };
  const playSE = name => GameAudio.play(SE[name]);

  const BGM_NORMAL = [220, 261.63, 293.66, 329.63, 293.66, 261.63];
  const BGM_HURRY  = [220, 233.08, 220, 207.65, 220, 233.08];
  let bgmStep = 0;

  const bgm = GameAudio.createLoop(400, () => {
    if (game.phase !== 'play') return null;
    const notes = isLastYears(getYear()) ? BGM_HURRY : BGM_NORMAL;
    return { type: 'sine', vol: 0.03, volEnd: 0.001, volCurve: 'exp', dur: 0.35, notes: [[0, notes[bgmStep++ % notes.length]]] };
  });

  // 最初の操作でオーディオ解禁 + BGM 開始
  window.addEventListener('pointerdown', () => { GameAudio.init(); bgm.start(); }, { once: true });

  // ---------------------------------------------------------
  // ゲーム状態
  // ---------------------------------------------------------
  const game = {
    phase: 'select',
    difficulty: null,
    score: 0,
    lives: 1,
    elapsed: 0,        // 経過秒
    spawnTimer: 0,
    humans: [],
    slashed: [],
    descendProgress: 0,
    floodTimer: 0,
    floodX: -200
  };

  const getDiff = () => DIFFICULTY_SETTINGS[game.difficulty] || DIFFICULTY_SETTINGS['2'];
  const getYear = () => Math.floor((game.elapsed / GAME_CONFIG.TOTAL_TIME_SEC) * GAME_CONFIG.TOTAL_YEARS);
  const isLastYears = year => year >= GAME_CONFIG.TOTAL_YEARS - GAME_CONFIG.NEPHILIM_YEARS;

  // 雨粒（洪水演出）
  const rainDrops = Array.from({ length: 150 }, () => ({
    x: rand(0, W), y: rand(0, H), length: rand(10, 30), speed: rand(15, 25)
  }));

  // ---------------------------------------------------------
  // 背景装飾
  // ---------------------------------------------------------
  const EDEN_COLORS = ['#e91e63', '#ffeb3b', '#00e676', '#00bcd4', '#ff4081'];

  const edenDecorations = Array.from({ length: 18 }, () => ({
    x: rand(DEFENSE_X + 15, W - 10),
    y: rand(20, H - 20),
    type: Math.random() < 0.4 ? 'tree' : (Math.random() < 0.7 ? 'flower' : 'grass'),
    size: rand(10, 22),
    color: pick(EDEN_COLORS)
  }));

  const wastelandDecorations = Array.from({ length: 25 }, () => ({
    x: rand(30, DEFENSE_X - 30),
    y: rand(20, H - 20),
    type: Math.random() < 0.4 ? 'dead_tree' : (Math.random() < 0.7 ? 'dead_grass' : 'rock'),
    size: rand(8, 18)
  }));

  /** 種類ごとの描画（原点は装飾の根元） */
  const DECORATION_DRAWERS = {
    dead_tree(item) {
      const s = item.size;
      ctx.strokeStyle = '#4a3728';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(0, -s * 1.5);
      ctx.moveTo(0, -s * 0.8); ctx.lineTo(-s * 0.6, -s * 1.2);
      ctx.moveTo(0, -s * 0.5); ctx.lineTo(s * 0.5, -s * 0.9);
      ctx.stroke();
    },
    dead_grass(item) {
      const s = item.size;
      ctx.strokeStyle = '#6e5d4f';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(-4, -s);
      ctx.moveTo(0, 0); ctx.lineTo(0, -s * 1.2);
      ctx.moveTo(0, 0); ctx.lineTo(5, -s * 0.8);
      ctx.stroke();
    },
    rock(item) {
      ctx.fillStyle = '#3a332c';
      ctx.beginPath();
      ctx.arc(0, 0, item.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
    },
    tree(item) {
      const s = item.size;
      ctx.fillStyle = '#5d4037';
      ctx.fillRect(-3, 0, 6, s * 0.8);
      ctx.fillStyle = '#2e7d32';
      ctx.beginPath(); ctx.arc(0, -s * 0.3, s * 0.8, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#4caf50';
      ctx.beginPath(); ctx.arc(-3, -s * 0.5, s * 0.5, 0, Math.PI * 2); ctx.fill();
    },
    flower(item) {
      ctx.strokeStyle = '#388e3c';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -8); ctx.stroke();
      ctx.fillStyle = item.color;
      ctx.beginPath(); ctx.arc(0, -9, 4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(0, -9, 1.5, 0, Math.PI * 2); ctx.fill();
    },
    grass(item) {
      const s = item.size;
      ctx.strokeStyle = '#66bb6a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-3, 0); ctx.lineTo(-5, -s * 0.8);
      ctx.moveTo(0, 0);  ctx.lineTo(0, -s);
      ctx.moveTo(3, 0);  ctx.lineTo(4, -s * 0.7);
      ctx.stroke();
    }
  };

  function drawDecorations(list) {
    for (const item of list) {
      ctx.save();
      ctx.translate(item.x, item.y);
      DECORATION_DRAWERS[item.type](item);
      ctx.restore();
    }
  }

  function drawEnvironment() {
    drawDecorations(wastelandDecorations);

    // エデンの園エリア
    const grad = ctx.createLinearGradient(DEFENSE_X, 0, W, 0);
    grad.addColorStop(0, 'rgba(46, 125, 50, 0.25)');
    grad.addColorStop(1, 'rgba(27, 94, 32, 0.65)');
    ctx.fillStyle = grad;
    ctx.fillRect(DEFENSE_X, 0, W - DEFENSE_X, H);

    // 防衛ライン
    ctx.beginPath();
    ctx.moveTo(DEFENSE_X, 0);
    ctx.lineTo(DEFENSE_X, H);
    ctx.strokeStyle = '#81c784';
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 6]);
    ctx.stroke();
    ctx.setLineDash([]);

    drawDecorations(edenDecorations);
  }

  // ---------------------------------------------------------
  // キャラクター描画パーツ（生きている姿と切断演出で共用）
  // ---------------------------------------------------------
  function drawNephilimBody() {
    ctx.fillStyle = '#4e342e';
    ctx.fillRect(-10, -8, 20, 20);
    ctx.fillStyle = '#8d6e63';
    ctx.fillRect(-8, 5, 16, 10);
  }

  function drawNephilimHead() {
    ctx.beginPath();
    ctx.arc(0, -16, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#6d4c41';
    ctx.fill();
  }

  // ---------------------------------------------------------
  // 切断アニメーション
  // ---------------------------------------------------------
  class SlashedBody {
    constructor(x, y, isNephilim) {
      this.x = x;
      this.y = y;
      this.isNephilim = isNephilim;
      this.maxLife = 25;
      this.life = 25;

      this.vxLeft = -2.5 - Math.random() * 2;
      this.vxRight = 2.5 + Math.random() * 2;
      this.vyLeft = (Math.random() - 0.5) * 3;
      this.vyRight = (Math.random() - 0.5) * 3;

      this.rotLeft = 0;
      this.rotRight = 0;
    }

    update() {
      this.life--;
      this.x += 0.5;
      this.rotLeft -= 0.15;
      this.rotRight += 0.15;
    }

    draw() {
      const age = this.maxLife - this.life;
      const scale = this.isNephilim ? 1.5 : 1.0;

      ctx.save();
      ctx.globalAlpha = Math.max(0, this.life / this.maxLife);

      this.drawHalf(-1, this.x + this.vxLeft * age * 0.3, this.y + this.vyLeft * age * 0.3, this.rotLeft, scale);
      this.drawHalf(1, this.x + this.vxRight * age * 0.3, this.y + this.vyRight * age * 0.3, this.rotRight, scale);

      // 斬撃の閃光
      if (this.life > this.maxLife - 8) {
        ctx.strokeStyle = '#ffeb3b';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#ff3d00';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - 25 * scale);
        ctx.lineTo(this.x, this.y + 25 * scale);
        ctx.stroke();
      }
      ctx.restore();
    }

    drawHalf(side, x, y, rot, scale) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);

      ctx.beginPath();
      ctx.rect(side === -1 ? -20 : 0, -30, 20, 60);
      ctx.clip();

      if (this.isNephilim) {
        drawNephilimBody();
        drawNephilimHead();
      } else {
        ctx.fillStyle = '#d7ccc8';
        ctx.fillRect(-6, -4, 12, 14);
        ctx.beginPath();
        ctx.arc(0, -10, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#ffcc80';
        ctx.fill();
      }
      ctx.restore();
    }
  }

  // ---------------------------------------------------------
  // 天使
  // ---------------------------------------------------------
  const SKIN = '#ffdbac';
  const SKIN_LINE = '#d8a070';

  class Angel {
    constructor(targetX, targetY, mainColor, auraColor) {
      this.targetX = targetX;
      this.targetY = targetY;
      this.x = targetX;
      this.y = targetY;
      this.radius = 28;
      this.mainColor = mainColor;
      this.auraColor = auraColor;
      this.isDragging = false;
      this.wingAngle = 0;
      this.ascending = false;
      this.pushAnim = 0;
    }

    push() { this.pushAnim = 12; }

    update() {
      this.wingAngle += 0.05;
      if (this.ascending) this.y -= 2.5;
      if (this.pushAnim > 0) this.pushAnim--;
    }

    draw() {
      const wingOffset = Math.sin(this.wingAngle) * 4;

      ctx.save();
      ctx.translate(this.x, this.y);

      // ドラッグ中のハイライト
      if (this.isDragging) {
        ctx.beginPath();
        ctx.arc(0, 0, this.radius + 10, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      ctx.shadowColor = this.auraColor;
      ctx.shadowBlur = 15;

      // 翼
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(-10, -10);
      ctx.quadraticCurveTo(-45 - wingOffset, -35, -25 - wingOffset, 15);
      ctx.quadraticCurveTo(-15, 10, -10, 15);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(10, -10);
      ctx.quadraticCurveTo(45 + wingOffset, -35, 25 + wingOffset, 15);
      ctx.quadraticCurveTo(15, 10, 10, 15);
      ctx.fill();

      // ローブ
      ctx.fillStyle = this.mainColor;
      ctx.beginPath();
      ctx.moveTo(-16, 5); ctx.lineTo(16, 5); ctx.lineTo(12, 32); ctx.lineTo(-12, 32);
      ctx.closePath();
      ctx.fill();

      // 胸
      ctx.fillStyle = SKIN;
      ctx.beginPath();
      ctx.moveTo(-22, -10); ctx.lineTo(22, -10); ctx.lineTo(16, 8); ctx.lineTo(-16, 8);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = SKIN_LINE;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-12, -2); ctx.lineTo(0, 3); ctx.lineTo(12, -2);
      ctx.moveTo(0, -10); ctx.lineTo(0, 6);
      ctx.stroke();

      // 手（押し返し中は左手が前に出る）
      const pushX = this.pushAnim > 0 ? -18 : -5;
      ctx.fillStyle = SKIN;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(-16 + pushX, -2, 6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(18, -2, 6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

      // 頭・髪・目
      ctx.fillStyle = SKIN;
      ctx.beginPath(); ctx.arc(0, -20, 11, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#fbc02d';
      ctx.beginPath();
      ctx.arc(0, -23, 11, Math.PI, 0);
      ctx.lineTo(12, -18);
      ctx.lineTo(-12, -18);
      ctx.fill();

      ctx.fillStyle = '#333';
      ctx.fillRect(-6, -21, 3, 2);
      ctx.fillRect(3, -21, 3, 2);

      ctx.restore();
    }
  }

  const angels = [
    new Angel(650, 150, '#c62828', '#ff5252'),
    new Angel(650, 350, '#1565c0', '#448aff')
  ];

  // ---------------------------------------------------------
  // 回転する炎の剣（2人の天使の間を往復）
  // ---------------------------------------------------------
  const sword = { x: DEFENSE_X, y: 250, angle: 0, length: 60, t: 0 };

  function updateSword() {
    // 天使同士が近いほど速く回転
    const dist = Math.hypot(angels[0].x - angels[1].x, angels[0].y - angels[1].y);
    const minDist = 50;
    const maxDist = 400;
    const clamped = Math.max(minDist, Math.min(maxDist, dist));
    const speedMultiplier = 1 + (1 - (clamped - minDist) / (maxDist - minDist)) * 2.5;

    sword.angle += 0.2 * speedMultiplier;
    sword.t += 0.015 * speedMultiplier;

    const rawSine = (Math.sin(sword.t) + 1) / 2;
    const ratio = 0.15 + rawSine * 0.70;

    sword.x = DEFENSE_X; // エデンの園の入口に固定、Y座標のみ天使間を移動
    sword.y = angels[0].y * (1 - ratio) + angels[1].y * ratio;
  }

  function drawSword() {
    ctx.save();
    ctx.translate(sword.x, sword.y);
    ctx.rotate(sword.angle);

    // 炎のオーラ
    ctx.beginPath();
    ctx.arc(0, 0, sword.length / 2 + 8, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 69, 0, 0.4)';
    ctx.shadowColor = '#ff3d00';
    ctx.shadowBlur = 20;
    ctx.fill();

    // 刃
    ctx.beginPath();
    ctx.moveTo(0, -sword.length / 2 - 5);
    ctx.lineTo(5, sword.length / 2 - 10);
    ctx.lineTo(-5, sword.length / 2 - 10);
    ctx.closePath();
    ctx.fillStyle = '#ffea00';
    ctx.fill();

    // 鍔・柄
    ctx.fillStyle = '#d50000';
    ctx.fillRect(-10, sword.length / 2 - 10, 20, 4);
    ctx.fillStyle = '#5d4037';
    ctx.fillRect(-3, sword.length / 2 - 6, 6, 12);

    ctx.restore();
  }

  // ---------------------------------------------------------
  // 侵入者（righteous: 正しい人 / cunning: ずるい人 / super_cunning: 天使を避ける人 / nephilim: 巨人）
  // ---------------------------------------------------------
  class Character {
    constructor(type) {
      const diff = getDiff();
      this.type = type;
      this.x = -30;
      this.y = rand(80, H - 80);
      this.radius = type === 'nephilim' ? 28 : 15;
      this.baseSpeed = type === 'nephilim' ? diff.speedNephilim : diff.speedHuman;
      this.speed = this.baseSpeed;

      this.returning = false;
      this.animFrame = 0;

      // 立ち止まって周囲をうかがう挙動
      this.isPausing = false;
      this.pauseTimer = 0;
      this.pauseCount = 0;
      this.maxPauses = Math.floor(Math.random() * 2) + 1;
      this.nextPauseX = rand(120, 500);
      this.lookAngle = 0;
      this.dodgeDirY = Math.random() < 0.5 ? 1 : -1;
    }

    update() {
      this.animFrame += 0.15;

      if (this.returning) {
        this.x -= this.baseSpeed * 2.0;
        return;
      }

      if (this.isPausing) {
        this.updatePause();
        return;
      }

      this.x += this.speed;

      if (this.pauseCount < this.maxPauses && this.x >= this.nextPauseX) {
        this.isPausing = true;
        this.pauseTimer = 0;

        if (this.type === 'super_cunning') {
          const nearest = Math.abs(angels[0].y - this.y) < Math.abs(angels[1].y - this.y) ? angels[0] : angels[1];
          this.dodgeDirY = this.y > nearest.y ? 1 : -1;
        }
      }
    }

    updatePause() {
      this.pauseTimer++;
      this.lookAngle = Math.sin(this.pauseTimer * 0.2) * 0.6;

      // 天使から遠ざかるように上下に逃げる
      if (this.type === 'super_cunning') {
        this.y += this.dodgeDirY * 1.8;
        if (this.y < 50) { this.y = 50; this.dodgeDirY = 1; }
        if (this.y > H - 50) { this.y = H - 50; this.dodgeDirY = -1; }
      }

      if (this.pauseTimer > 60) {
        this.isPausing = false;
        this.pauseTimer = 0;
        this.pauseCount++;

        if (this.type === 'righteous') {
          this.returning = true; // 正しい人は自分から引き返す
          playSE('return');
        } else {
          this.nextPauseX = this.x + rand(100, 250);
        }
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      if (this.returning) ctx.scale(-1, 1);

      const legAngle = this.isPausing ? 0 : Math.sin(this.animFrame) * 0.5;
      if (this.type === 'nephilim') this.drawNephilim(legAngle);
      else this.drawHuman(legAngle);

      if (this.returning) this.drawSweatDrop();
      ctx.restore();
    }

    drawNephilim(legAngle) {
      ctx.scale(1.5, 1.5);

      // 禍々しいオーラ
      ctx.beginPath();
      ctx.arc(0, -5, 20, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(180, 40, 40, 0.2)';
      ctx.shadowColor = '#d50000';
      ctx.shadowBlur = 12;
      ctx.fill();

      // 脚
      ctx.strokeStyle = '#3e2723';
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(-4, 10); ctx.lineTo(-4 + Math.sin(legAngle) * 12, 28); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(4, 10);  ctx.lineTo(4 - Math.sin(legAngle) * 12, 28);  ctx.stroke();

      drawNephilimBody();

      // 腕とこぶし
      ctx.strokeStyle = '#5d4037';
      ctx.lineWidth = 6;
      ctx.beginPath(); ctx.moveTo(8, -4); ctx.lineTo(18, 5); ctx.stroke();
      ctx.fillStyle = '#3e2723';
      ctx.beginPath(); ctx.arc(22, 2, 6, 0, Math.PI * 2); ctx.fill();

      drawNephilimHead();

      // 角
      ctx.fillStyle = '#212121';
      ctx.beginPath();
      ctx.moveTo(-8, -22); ctx.lineTo(-2, -28); ctx.lineTo(2, -22); ctx.lineTo(8, -28); ctx.lineTo(6, -18);
      ctx.fill();

      // 赤い目
      ctx.fillStyle = '#ff1744';
      ctx.beginPath();
      ctx.arc(3 + (this.isPausing ? this.lookAngle * 3 : 0), -17, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    drawHuman(legAngle) {
      ctx.strokeStyle = '#b0bec5';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(-2, 8); ctx.lineTo(-2 + Math.sin(legAngle) * 8, 20); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(2, 8);  ctx.lineTo(2 - Math.sin(legAngle) * 8, 20);  ctx.stroke();

      // 衣
      ctx.fillStyle = '#d7ccc8';
      ctx.beginPath();
      ctx.moveTo(-6, -4); ctx.lineTo(6, -4); ctx.lineTo(8, 10); ctx.lineTo(-8, 10);
      ctx.closePath();
      ctx.fill();

      // 頭と目
      ctx.beginPath();
      ctx.arc(0, -10, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#ffcc80';
      ctx.fill();

      const eyeOffset = this.isPausing ? this.lookAngle * 4 : 2;
      ctx.fillStyle = '#3e2723';
      ctx.beginPath();
      ctx.arc(eyeOffset, -11, 1.2, 0, Math.PI * 2);
      ctx.fill();
    }

    /** 引き返し中に出る汗マーク */
    drawSweatDrop() {
      const x = 10;
      const y = -22;
      ctx.fillStyle = '#00b0ff';
      ctx.strokeStyle = '#0081cb';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y - 6);
      ctx.quadraticCurveTo(x + 5, y, x, y + 4);
      ctx.quadraticCurveTo(x - 5, y, x, y - 6);
      ctx.fill();
      ctx.stroke();
    }
  }

  // ---------------------------------------------------------
  // 入力（マウス・タッチ共通: Pointer Events）
  // ---------------------------------------------------------
  let draggedAngel = null;
  let dragOffsetY = 0;

  function toCanvasPos(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (clientX - rect.left) * (W / rect.width),
      y: (clientY - rect.top) * (H / rect.height)
    };
  }

  function handleStart(clientX, clientY) {
    const pos = toCanvasPos(clientX, clientY);

    switch (game.phase) {
      case 'select':
        for (const btn of DIFF_BUTTONS) {
          if (pos.x >= 150 && pos.x <= 650 && pos.y >= btn.y && pos.y <= btn.y + btn.height) {
            playSE('select');
            startGame(btn.id);
            return;
          }
        }
        return;

      case 'over':
        resetGame();
        return;

      case 'play':
        for (const angel of angels) {
          if (Math.hypot(pos.x - angel.x, pos.y - angel.y) < angel.radius + 20) {
            draggedAngel = angel;
            angel.isDragging = true;
            dragOffsetY = pos.y - angel.y;
            break;
          }
        }
        return;
      // descend / clear は操作不可
    }
  }

  function handleMove(clientX, clientY) {
    if (!draggedAngel || game.phase !== 'play') return;
    const pos = toCanvasPos(clientX, clientY);
    draggedAngel.y = Math.max(draggedAngel.radius, Math.min(H - draggedAngel.radius, pos.y - dragOffsetY));
  }

  function handleEnd() {
    if (!draggedAngel) return;
    draggedAngel.isDragging = false;
    draggedAngel = null;
  }

  canvas.addEventListener('pointerdown', e => handleStart(e.clientX, e.clientY));
  window.addEventListener('pointermove', e => handleMove(e.clientX, e.clientY));
  window.addEventListener('pointerup', handleEnd);
  window.addEventListener('pointercancel', handleEnd);

  // ---------------------------------------------------------
  // 開始 / リセット
  // ---------------------------------------------------------
  function startGame(difficultyKey) {
    Object.assign(game, {
      phase: 'descend',
      difficulty: difficultyKey,
      score: 0,
      lives: 1,
      elapsed: 0,
      spawnTimer: 0,
      humans: [],
      slashed: [],
      descendProgress: 0,
      floodTimer: 0,
      floodX: -200
    });

    angels[0].x = angels[0].targetX; angels[0].y = -60;  angels[0].ascending = false;
    angels[1].x = angels[1].targetX; angels[1].y = -120; angels[1].ascending = false;

    playSE('descend');
  }

  /** 難易度選択画面へ戻る */
  function resetGame() {
    game.phase = 'select';
    game.humans = [];
    game.slashed = [];
  }

  // ---------------------------------------------------------
  // 更新処理
  // ---------------------------------------------------------
  function updateDescend() {
    game.descendProgress = Math.min(1, game.descendProgress + 0.02);

    const ease = Math.sin((game.descendProgress * Math.PI) / 2);
    angels[0].y = -60 + (angels[0].targetY + 60) * ease;
    angels[1].y = -120 + (angels[1].targetY + 120) * ease;

    updateSword();
    draw(0, false);

    if (game.descendProgress >= 1) {
      game.phase = 'play';
      angels[0].y = angels[0].targetY;
      angels[1].y = angels[1].targetY;
    }
  }

  function updateFlood() {
    game.floodTimer++;
    game.floodX += 12;

    game.humans = game.humans.filter(h => h.x >= game.floodX);

    for (const drop of rainDrops) {
      drop.y += drop.speed;
      drop.x -= 3;
      if (drop.y > H) drop.y = -20;
      if (drop.x < 0) drop.x = W;
    }
  }

  /** 出現させるキャラの種類を抽選 */
  function chooseSpawnType(lastYears) {
    const diff = getDiff();
    const progress = game.elapsed / GAME_CONFIG.TOTAL_TIME_SEC;
    const righteousRatio = lastYears ? 0 : Math.max(0, 0.4 * (1 - game.elapsed / (GAME_CONFIG.TOTAL_TIME_SEC - 22)));
    const superCunningRatio = Math.min(0.70, 0.10 + progress * 0.60);

    if (lastYears && Math.random() < diff.nephilimRate) return 'nephilim';
    if (Math.random() < righteousRatio) return 'righteous';
    if (Math.random() < superCunningRatio) return 'super_cunning';
    return 'cunning';
  }

  function updatePlay() {
    game.elapsed += 1 / 60;
    if (game.elapsed >= GAME_CONFIG.TOTAL_TIME_SEC) {
      game.elapsed = GAME_CONFIG.TOTAL_TIME_SEC;
      game.phase = 'clear';
      playSE('flood');
      angels.forEach(a => { a.ascending = true; });
    }

    const year = getYear();
    const lastYears = isLastYears(year);
    const diff = getDiff();

    updateSword();

    // 切断エフェクト
    game.slashed.forEach(s => s.update());
    game.slashed = game.slashed.filter(s => s.life > 0);

    // 出現
    game.spawnTimer++;
    const interval = lastYears ? diff.spawnInterval * 0.5 : diff.spawnInterval;
    if (game.spawnTimer > interval) {
      game.humans.push(new Character(chooseSpawnType(lastYears)));
      game.spawnTimer = 0;
    }

    // 各キャラの更新と当たり判定
    for (let i = game.humans.length - 1; i >= 0; i--) {
      const h = game.humans[i];
      h.update();

      // 引き返し完了
      if (h.returning && h.x < -40) {
        game.humans.splice(i, 1);
        game.score += GAME_CONFIG.SCORE_RETURN;
        continue;
      }

      // 侵入された → ゲームオーバー
      if (!h.returning && h.x >= DEFENSE_X) {
        game.humans.splice(i, 1);
        game.lives = 0;
        game.phase = 'over';
        playSE('damage');
        continue;
      }

      // 炎の剣に斬られた
      if (Math.hypot(h.x - sword.x, h.y - sword.y) < h.radius + sword.length / 2) {
        game.slashed.push(new SlashedBody(h.x, h.y, h.type === 'nephilim'));
        game.humans.splice(i, 1);
        if (h.type === 'nephilim') {
          game.score += GAME_CONFIG.SCORE_NEPHILIM;
          playSE('kill_nephilim');
        } else {
          playSE('kill_human');
        }
        continue;
      }

      // 天使に押し返された（巨人は押し返せない）
      if (!h.returning && h.type !== 'nephilim') {
        for (const angel of angels) {
          if (Math.hypot(h.x - angel.x, h.y - angel.y) < h.radius + angel.radius) {
            h.returning = true;
            angel.push();
            playSE('return');
            break;
          }
        }
      }
    }

    draw(year, lastYears);
  }

  // ---------------------------------------------------------
  // 描画
  // ---------------------------------------------------------
  function drawDifficultyScreen() {
    ctx.clearRect(0, 0, W, H);
    drawEnvironment();

    ctx.fillStyle = 'rgba(10, 12, 22, 0.88)';
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = '#ffde59';
    ctx.font = font('bold', 26);
    ctx.textAlign = 'center';
    ctx.fillText(t('selectDifficulty'), W / 2, 85);

    for (const btn of DIFF_BUTTONS) {
      ctx.save();
      ctx.fillStyle = btn.color;
      ctx.beginPath();
      ctx.roundRect(150, btn.y, 500, btn.height, 12);
      ctx.fill();
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = font(900, 20);
      ctx.textAlign = 'left';
      ctx.fillText(t(btn.keyName), 175, btn.y + 36);

      ctx.font = font(700, 13);
      ctx.textAlign = 'right';
      ctx.fillText(t(btn.keyDesc), 630, btn.y + 36);
      ctx.restore();
    }
  }

  function drawFlood() {
    // 雨
    ctx.strokeStyle = 'rgba(120, 180, 255, 0.6)';
    ctx.lineWidth = 2;
    for (const drop of rainDrops) {
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x - 5, drop.y + drop.length);
      ctx.stroke();
    }

    // 押し寄せる波
    const grad = ctx.createLinearGradient(game.floodX - 200, 0, game.floodX, 0);
    grad.addColorStop(0, 'rgba(10, 50, 120, 0.95)');
    grad.addColorStop(0.8, 'rgba(28, 110, 210, 0.85)');
    grad.addColorStop(1, 'rgba(150, 220, 255, 0.9)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(-200, 0);
    ctx.lineTo(game.floodX, 0);
    for (let y = 0; y <= H; y += 20) {
      ctx.lineTo(game.floodX + Math.sin(y * 0.05 + game.floodTimer * 0.2) * 20, y);
    }
    ctx.lineTo(-200, H);
    ctx.closePath();
    ctx.fill();
  }

  function drawHUD(year, lastYears) {
    const accent = lastYears ? '#ff1744' : '#ffde59';

    ctx.textAlign = 'left';
    ctx.fillStyle = '#fff';
    ctx.font = font(900, 15);
    ctx.fillText(`${t('score')}: ${game.score}`, 20, 30);
    ctx.fillText(`${t('lives')}: ${'❤️'.repeat(game.lives)}`, 20, 55);

    ctx.fillStyle = accent;
    ctx.font = font(900, 16);
    ctx.fillText(`${year} / ${GAME_CONFIG.TOTAL_YEARS} ${t('yearsProgress')}`, 280, 30);

    if (lastYears && game.phase !== 'clear') {
      ctx.fillStyle = '#ff1744';
      ctx.font = font(900, 12);
      ctx.fillText(t('warningNephilim', GAME_CONFIG.NEPHILIM_YEARS), 280, 52);
    }

    // プログレスバー
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(280, 58, 250, 8);
    ctx.fillStyle = accent;
    ctx.fillRect(280, 58, (game.elapsed / GAME_CONFIG.TOTAL_TIME_SEC) * 250, 8);
  }

  function drawEndOverlay(year) {
    ctx.textAlign = 'center';

    if (game.phase === 'over') {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
      ctx.fillRect(0, 0, W, H);

      ctx.fillStyle = '#ff5252';
      ctx.font = font(900, 32);
      ctx.fillText(t('gameOverTitle'), W / 2, H / 2 - 20);

      ctx.fillStyle = '#fff';
      ctx.font = font(700, 18);
      ctx.fillText(t('gameOverDesc', game.score, year), W / 2, H / 2 + 20);
      ctx.font = font(700, 14);
      ctx.fillText(t('gameOverRetry'), W / 2, H / 2 + 60);
    }

    // 洪水が画面を通り過ぎたらクリア画面
    if (game.phase === 'clear' && game.floodX > W + 100) {
      ctx.fillStyle = 'rgba(5, 15, 35, 0.85)';
      ctx.fillRect(0, 0, W, H);

      ctx.fillStyle = '#ffde59';
      ctx.font = font(900, 32);
      ctx.fillText(t('gameClearTitle', GAME_CONFIG.TOTAL_YEARS), W / 2, H / 2 - 30);

      ctx.fillStyle = '#4fc3f7';
      ctx.font = font(700, 18);
      ctx.fillText(t('gameClearDesc'), W / 2, H / 2 + 10);

      ctx.fillStyle = '#fff';
      ctx.fillText(t('gameClearScore', game.score), W / 2, H / 2 + 50);
    }
  }

  function drawDescendRays() {
    for (const angel of angels) {
      const grad = ctx.createLinearGradient(angel.x, 0, angel.x, angel.y);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      grad.addColorStop(1, 'rgba(255, 255, 200, 0.0)');
      ctx.fillStyle = grad;
      ctx.fillRect(angel.x - 25, 0, 50, angel.y);
    }
  }

  function draw(year, lastYears) {
    ctx.clearRect(0, 0, W, H);
    drawEnvironment();

    game.humans.forEach(h => h.draw());
    game.slashed.forEach(s => s.draw());

    if (game.phase !== 'clear') {
      // 天使同士を結ぶ光の線 + 炎の剣
      ctx.beginPath();
      ctx.moveTo(angels[0].x, angels[0].y);
      ctx.lineTo(angels[1].x, angels[1].y);
      ctx.strokeStyle = 'rgba(255, 235, 59, 0.25)';
      ctx.lineWidth = 3;
      ctx.stroke();
      drawSword();
    }

    angels.forEach(a => a.draw());

    if (game.phase === 'descend') drawDescendRays();
    if (game.phase === 'clear') drawFlood();

    drawHUD(year, lastYears);
    drawEndOverlay(year);
  }

  // ---------------------------------------------------------
  // メインループ
  // ---------------------------------------------------------
  function frame() {
    if (game.phase !== 'select') angels.forEach(a => a.update());

    switch (game.phase) {
      case 'select':  drawDifficultyScreen(); break;
      case 'descend': updateDescend(); break;
      case 'play':    updatePlay(); break;
      case 'over':    draw(getYear(), false); break;
      case 'clear':   updateFlood(); draw(GAME_CONFIG.TOTAL_YEARS, true); break;
    }
    requestAnimationFrame(frame);
  }

  // ---------------------------------------------------------
  // 初期化
  // ---------------------------------------------------------
  document.getElementById('btn-restart').addEventListener('click', resetGame);
  i18n.init(document.getElementById('lang-switch'));
  document.title = `${t('title')} - BIBLE TASTE GAMES`;
  i18n.onChange(() => { document.title = `${t('title')} - BIBLE TASTE GAMES`; });
  frame();
})();
