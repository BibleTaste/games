/* =========================================================
   ノアの箱舟ゲーム
   依存: js/audio.js (GameAudio) / js/i18n.js (I18n)
   ========================================================= */
(() => {
  'use strict';

  // ---------------------------------------------------------
  // 多言語テキスト（文字列 or 関数）
  // ---------------------------------------------------------
  const I18N = {
    ja: {
      title: 'ノアの箱舟ゲーム',
      lvl1: 'レベル1 (4種)', lvl2: 'レベル2 (8種)', lvl3: 'レベル3 (16種)', lvl4: 'レベルノア (49種)',
      instructions:
        '動物が1匹ずつやってくるよ！<br>' +
        '箱舟にまだ乗れるなら<strong>「乗せる」</strong>、もう定員がいっぱいなら<strong>「帰ってもらう」</strong>を選ぼう！<br>' +
        '<small>⚠️ <strong>ネフィリム</strong>が来たらどんなときも<strong>「帰ってもらう」</strong>を選ぼう！</small>',
      board: '🚢 乗せる', reject: '👋 帰ってもらう', start: '▶️ スタート！', reset: '🔄 最初から遊ぶ',
      promptStart: '「スタート！」を押してゲームを開始しよう！',
      levelStart: n => `レベル${n === 4 ? 'ノア' : n} スタート！`,
      arkTitle: (n, max) => `🚢 箱舟の中（乗せた数: ${n} / ${max}匹）`,
      male: '♂ (オス)', female: '♀ (メス)', maleShort: '♂', femaleShort: '♀',
      countInfo: (n, max) => `(${n}/${max}匹目)`,
      boarded: (name, g, info) => `⭕ ${name} ${g}${info ? ' ' + info : ''} を乗せました！`,
      allDone: '🎉 おめでとう！すべての動物を乗せられました！ 🎉',
      turnedAwayForbidden: name => `⭕ ${name}に無事帰ってもらいました！`,
      turnedAwayFull: (name, g) => `⭕ ${name} ${g} は定員がいっぱいだったので帰ってもらいました。`,
      failForbidden: name => `失敗！ ${name}は乗せてはいけません！`,
      failFull: (name, g) => `失敗！ ${name}の${g}はもう定員がいっぱいです！`,
      failRoom: (name, g) => `失敗！ ${name}の${g}はまだ乗せられました！`,
      clearLabel: '⏱️ クリアタイム',
      time: (m, s) => (m > 0 ? `${m}分${s}秒` : `${s}秒`)
    },
    kana: {
      title: 'のあの はこぶね',
      lvl1: 'れべる1 (4しゅ)', lvl2: 'れべる2 (8しゅ)', lvl3: 'れべる3 (16しゅ)', lvl4: 'れべる のあ (49しゅ)',
      instructions:
        'どうぶつが 1ひきずつ やってくるよ！<br>' +
        'はこぶねに まだのれるなら<strong>「のせる」</strong>、もう いっぱいなら<strong>「かえってもらう」</strong>を えらぼう！<br>' +
        '<small>⚠️ <strong>ねふぃりむ</strong>が きたら かならず <strong>「かえってもらう」</strong>を えらんでね！</small>',
      board: '🚢 のせる', reject: '👋 かえってもらう', start: '▶️ すたーと！', reset: '🔄 もういちど あそぶ',
      promptStart: '「すたーと！」を おしてね！',
      levelStart: n => `れべる ${n === 4 ? 'のあ' : n} すたーと！`,
      arkTitle: (n, max) => `🚢 はこぶねの なか（のせたかず: ${n} / ${max}ひき）`,
      male: 'おす', female: 'めす', maleShort: 'おす', femaleShort: 'めす',
      countInfo: (n, max) => `(${n}/${max}ひきめ)`,
      boarded: (name, g, info) => `⭕ ${name} ${g}${info ? ' ' + info : ''} を のせました！`,
      allDone: '🎉 おめでとう！ ぜんぶの どうぶつを のせられたよ！ 🎉',
      turnedAwayForbidden: name => `⭕ ${name}に かえってもらいました！`,
      turnedAwayFull: (name, g) => `⭕ ${name} ${g} は いっぱいだったので かえってもらいました。`,
      failForbidden: name => `しっぱい！ ${name}は のせられません！`,
      failFull: (name, g) => `しっぱい！ ${name}の ${g}は もう いっぱいです！`,
      failRoom: (name, g) => `しっぱい！ ${name}の ${g}は まだ のせられました！`,
      clearLabel: '⏱️ くりあたいむ',
      time: (m, s) => (m > 0 ? `${m}ふん${s}びょう` : `${s}びょう`)
    },
    en: {
      title: 'ARK GAME',
      lvl1: 'Level 1 (4 types)', lvl2: 'Level 2 (8 types)', lvl3: 'Level 3 (16 types)', lvl4: 'Noah Level (49 types)',
      instructions:
        'Animals arrive one by one!<br>' +
        'Tap <strong>"Board"</strong> if there\'s room, or <strong>"Reject"</strong> if capacity is full!<br>' +
        '<small>⚠️ Always <strong>Reject</strong> Nephilim! ✨ Clean animals: <strong>3 Males / 4 Females</strong>.</small>',
      board: '🚢 Board', reject: '👋 Reject', start: '▶️ Start!', reset: '🔄 Play Again',
      promptStart: "Press 'Start!' to begin!",
      levelStart: n => `Level ${n === 4 ? 'Noah' : n} Start!`,
      arkTitle: (n, max) => `🚢 Inside Ark (Boarded: ${n} / ${max})`,
      male: '♂ Male', female: '♀ Female', maleShort: 'M', femaleShort: 'F',
      countInfo: (n, max) => `(${n}/${max})`,
      boarded: (name, g, info) => `⭕ Boarded ${name} (${g})${info ? ' ' + info : ''}!`,
      allDone: '🎉 Congratulations! All animals are aboard! 🎉',
      turnedAwayForbidden: name => `⭕ Successfully turned away ${name}!`,
      turnedAwayFull: (name, g) => `⭕ Turned away ${name} (${g}) as capacity was full.`,
      failForbidden: name => `Failed! You cannot board ${name}!`,
      failFull: (name, g) => `Failed! ${name} (${g}) is already full!`,
      failRoom: (name, g) => `Failed! ${name} (${g}) still had room!`,
      clearLabel: '⏱️ Clear Time',
      time: (m, s) => (m > 0 ? `${m}m ${s}s` : `${s}s`)
    }
  };

  // ---------------------------------------------------------
  // 動物データ  [id, 日本語, ひらがな, English, 絵文字, 種別]
  // 種別: 'clean' = 清い動物(オス3/メス4) / 'forbidden' = 乗せてはいけない / 省略 = 通常(オス1/メス1)
  // ★並び順がレベル範囲に影響するので、順番を変えるときは LEVEL_SIZES も確認
  // ---------------------------------------------------------
  const ANIMAL_ROWS = [
    // レベル1
    ['elephant', 'ぞう', 'ぞう', 'Elephant', '🐘'],
    ['giraffe', 'キリン', 'きりん', 'Giraffe', '🦒'],
    ['lion', 'ライオン', 'らいおん', 'Lion', '🦁'],
    ['dog', '犬', 'いぬ', 'Dog', '🐶'],
    // レベル2で追加
    ['gorilla', 'ごりら', 'ごりら', 'Gorilla', '🦍'],
    ['rabbit', 'ウサギ', 'うさぎ', 'Rabbit', '🐰'],
    ['cat', '猫', 'ねこ', 'Cat', '🐱'],
    ['dove', '鳩', 'はと', 'Dove', '🕊️', 'clean'],
    // レベル3で追加
    ['nephilim', 'ネフィリム', 'ねふぃりむ', 'Nephilim', '🧌', 'forbidden'],
    ['mouse', 'ネズミ', 'ねずみ', 'Mouse', '🐭'],
    ['crocodile', 'わに', 'わに', 'Crocodile', '🐊'],
    ['chicken', '鶏', 'にわとり', 'Chicken', '🐔', 'clean'],
    ['frog', 'カエル', 'かえる', 'Frog', '🐸'],
    ['horse', '馬', 'うま', 'Horse', '🐴'],
    ['cow', '牛', 'うし', 'Cow', '🐮', 'clean'],
    ['pig', '豚', 'ぶた', 'Pig', '🐷'],
    ['panda', 'パンダ', 'ぱんだ', 'Panda', '🐼'],
    // レベルノアで追加
    ['sheep', 'ひつじ', 'ひつじ', 'Sheep', '🐑', 'clean'],
    ['goat', 'やぎ', 'やぎ', 'Goat', '🐐', 'clean'],
    ['moose', 'ヘラジカ', 'へらじか', 'Moose', '🫎', 'clean'],
    ['deer', 'シカ', 'しか', 'Deer', '🦌', 'clean'],
    ['eagle', 'ワシ', 'わし', 'Eagle', '🦅', 'clean'],
    ['duck', 'カモ', 'かも', 'Duck', '🦆', 'clean'],
    ['owl', 'フクロウ', 'ふくろう', 'Owl', '🦉', 'clean'],
    ['flamingo', 'フラミンゴ', 'ふらみんご', 'Flamingo', '🦩', 'clean'],
    ['peacock', 'クジャク', 'くじゃく', 'Peacock', '🦚', 'clean'],
    ['parrot', 'インコ', 'いんこ', 'Parrot', '🦜', 'clean'],
    ['fox', 'きつね', 'きつね', 'Fox', '🦊'],
    ['bear', 'くま', 'くま', 'Bear', '🐻'],
    ['koala', 'コアラ', 'こあら', 'Koala', '🐨'],
    ['tiger', 'トラ', 'とら', 'Tiger', '🐯'],
    ['monkey', 'さる', 'さる', 'Monkey', '🐵'],
    ['hippo', 'カバ', 'かば', 'Hippo', '🦛'],
    ['rhino', 'サイ', 'さい', 'Rhino', '🦏'],
    ['kangaroo', 'カンガルー', 'かんがるー', 'Kangaroo', '🦘'],
    ['llama', 'ラマ', 'らま', 'Llama', '🦙'],
    ['sloth', 'ナマケモノ', 'なまけもの', 'Sloth', '🦥'],
    ['otter', 'カワウソ', 'かわうそ', 'Otter', '🦦'],
    ['skunk', 'スカンク', 'すかんく', 'Skunk', '🦨'],
    ['badger', 'アナグマ', 'あなぐま', 'Badger', '🦡'],
    ['hedgehog', 'ハリネズミ', 'はりねずみ', 'Hedgehog', '🦔'],
    ['bat', 'コウモリ', 'こうもり', 'Bat', '🦇'],
    ['chipmunk', 'リス', 'りす', 'Squirrel', '🐿️'],
    ['donkey', 'ロバ', 'ろば', 'Donkey', '🫏'],
    ['zebra', 'シマウマ', 'しまうま', 'Zebra', '🦓'],
    ['turtle', 'カメ', 'かめ', 'Turtle', '🐢'],
    ['lizard', 'トカゲ', 'とかげ', 'Lizard', '🦎'],
    ['snake', 'ヘビ', 'へび', 'Snake', '🐍'],
    ['butterfly', 'チョウ', 'ちょう', 'Butterfly', '🦋'],
    ['bee', 'ミツバチ', 'みつばち', 'Bee', '🐝'],
    ['ladybug', 'テントウムシ', 'てんとうむし', 'Ladybug', '🐞'],
    ['caterpillar', 'イモムシ', 'いもむし', 'Caterpillar', '🐛'],
    ['camel', 'ラクダ', 'らくだ', 'Camel', '🐪'],
    ['swan', '白鳥', 'はくちょう', 'Swan', '🦢', 'clean'],
    ['hawk', '鷹', 'たか', 'Hawk', '🦅', 'clean'],
    ['penguin', 'ペンギン', 'ぺんぎん', 'Penguin', '🐧'],
    ['dodo', 'ドードー', 'どーどー', 'Dodo', '🦤'],
    ['snail', 'カタツムリ', 'かたつむり', 'Snail', '🐌']
  ];

  const ALL_ANIMALS = ANIMAL_ROWS.map(([id, ja, kana, en, emoji, kind]) => ({
    id,
    name: { ja, kana, en },
    emoji,
    isForbidden: kind === 'forbidden',
    maxMale:   kind === 'forbidden' ? 0 : kind === 'clean' ? 3 : 1,
    maxFemale: kind === 'forbidden' ? 0 : kind === 'clean' ? 4 : 1
  }));

  /** レベルごとに使う動物数（先頭から何件か） */
  const LEVEL_SIZES = { 1: 4, 2: 8, 3: 16, 4: Infinity };

  // ---------------------------------------------------------
  // 効果音
  // ---------------------------------------------------------
  const SE = {
    appear: { type: 'sine', vol: 0.3, dur: 0.08, sweep: [300, 600, 'exp'] },
    board:  { type: 'triangle', vol: 0.3, dur: 0.3, notes: [[0, 523.25], [0.08, 659.25], [0.16, 783.99]] },
    reject: { type: 'sine', vol: 0.2, dur: 0.12, sweep: [400, 150, 'exp'] },
    lose:   { type: 'sawtooth', vol: 0.4, dur: 0.8, sweep: [150, 40, 'linear'] },
    winNote: freq => ({ type: 'triangle', vol: 0.3, dur: 0.4, notes: [[0, freq]] })
  };
  const WIN_ARPEGGIO = [523.25, 659.25, 783.99, 1046.5];

  function playSE(name) {
    if (name === 'win') {
      WIN_ARPEGGIO.forEach((freq, i) => GameAudio.play(SE.winNote(freq), i * 0.12));
    } else {
      GameAudio.play(SE[name]);
    }
  }

  // ---------------------------------------------------------
  // DOM 参照
  // ---------------------------------------------------------
  const $ = id => document.getElementById(id);
  const el = {
    body: document.body,
    rainbow: $('rainbow'),
    ark: $('ark-container'),
    arkTitle: $('ark-title'),
    arkGrid: $('ark-grid'),
    message: $('message'),
    clearTime: $('clear-time-display'),
    card: $('v-card'),
    vEmoji: $('v-emoji'),
    vName: $('v-name'),
    btnStart: $('btn-start'),
    btnBoard: $('btn-board'),
    btnReject: $('btn-reject'),
    btnReset: $('btn-reset'),
    levelBtns: document.querySelectorAll('.level-btn')
  };

  // ---------------------------------------------------------
  // ゲーム状態
  // ---------------------------------------------------------
  const i18n = I18n.create(I18N);
  const t = (key, ...args) => i18n.t(key, ...args);

  let currentLevel = 1;
  let activeAnimals = [];
  let totalTarget = 0;
  let arkState = {};       // { [animalId]: { male, female } }
  let currentVisitor = null;
  let onboardCount = 0;
  let isGameOver = false;
  let isGameStarted = false;
  let isAnimating = false;
  let startTime = 0;

  // ---------------------------------------------------------
  // 表示ヘルパー
  // ---------------------------------------------------------
  const animalName = a => a.name[i18n.lang];
  const genderLabel = gender => (gender === 'none' ? '' : t(gender));  // 'male' | 'female'

  function setMessage(text, kind = '') {
    el.message.textContent = text;
    el.message.className = kind ? `message ${kind}` : 'message';
  }

  function enableButtons(enabled) {
    el.btnBoard.disabled = !enabled;
    el.btnReject.disabled = !enabled;
  }

  function updateVisitorName() {
    if (!currentVisitor) return;
    const g = genderLabel(currentVisitor.gender);
    el.vName.textContent = g ? `${animalName(currentVisitor)} ${g}` : animalName(currentVisitor);
  }

  function genderBadge(kind, count, max) {
    const label = t(kind === 'male' ? 'maleShort' : 'femaleShort');
    const multi = max > 1;
    const cls = count > 0 ? `gender-${kind}-on` : 'gender-off';
    return `<span class="${cls}${multi ? ' count-text' : ''}">${multi ? `${label}${count}/${max}` : label}</span>`;
  }

  function renderArk() {
    el.arkTitle.textContent = t('arkTitle', onboardCount, totalTarget);

    el.arkGrid.innerHTML = activeAnimals
      .filter(a => !a.isForbidden)
      .map(a => {
        const s = arkState[a.id];
        return `
          <div class="ark-card">
            <span class="emoji">${a.emoji}</span>
            <div class="animal-name">${animalName(a)}</div>
            <div class="genders">${genderBadge('male', s.male, a.maxMale)} ${genderBadge('female', s.female, a.maxFemale)}</div>
          </div>`;
      })
      .join('');
  }

  /** 言語が変わったとき: 動的に作るテキストを更新 */
  function refreshLanguage() {
    if (!isGameStarted && !isGameOver) setMessage(t('promptStart'));
    renderArk();
    updateVisitorName();
  }

  // ---------------------------------------------------------
  // ゲーム進行
  // ---------------------------------------------------------
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function changeLevel(level) {
    currentLevel = level;
    el.levelBtns.forEach(btn => btn.classList.toggle('active', Number(btn.dataset.level) === level));
    resetGame();
  }

  function resetGame() {
    onboardCount = 0;
    isGameOver = false;
    isGameStarted = false;
    isAnimating = false;
    currentVisitor = null;

    activeAnimals = shuffle(ALL_ANIMALS.slice(0, LEVEL_SIZES[currentLevel]));
    totalTarget = activeAnimals.reduce((sum, a) => sum + a.maxMale + a.maxFemale, 0);

    arkState = {};
    activeAnimals.forEach(a => { arkState[a.id] = { male: 0, female: 0 }; });

    el.body.className = 'page-ark';
    el.rainbow.style.display = 'none';
    el.ark.className = 'ark-container';
    el.clearTime.innerHTML = '';
    el.btnStart.style.display = 'inline-block';
    el.vEmoji.textContent = '❓';
    el.vName.textContent = '...';
    enableButtons(false);

    setMessage(t('promptStart'));
    renderArk();
  }

  function startGame() {
    isGameStarted = true;
    startTime = Date.now();
    el.btnStart.style.display = 'none';
    enableButtons(true);
    setMessage(t('levelStart', currentLevel));
    nextVisitor();
  }

  /** 次に来る動物を重み付き抽選（まだ乗せられる枠が多いほど出やすい。ネフィリムは重み3） */
  function pickVisitor() {
    const candidates = [];
    activeAnimals.forEach(animal => {
      if (animal.isForbidden) {
        candidates.push({ animal, gender: 'none', weight: 3 });
        return;
      }
      ['male', 'female'].forEach(gender => {
        const current = arkState[animal.id][gender];
        const max = gender === 'male' ? animal.maxMale : animal.maxFemale;
        candidates.push({ animal, gender, weight: current < max ? (max - current) * 10 : 1 });
      });
    });

    let r = Math.random() * candidates.reduce((sum, c) => sum + c.weight, 0);
    for (const c of candidates) {
      if (r < c.weight) return c;
      r -= c.weight;
    }
    return candidates[0];
  }

  function nextVisitor() {
    if (isGameOver || !isGameStarted) return;

    const { animal, gender } = pickVisitor();
    currentVisitor = { ...animal, gender };

    el.card.className = 'visitor-card';
    void el.card.offsetWidth; // アニメーション再起動
    el.vEmoji.textContent = currentVisitor.emoji;
    updateVisitorName();
    el.card.classList.add('walk-in');

    playSE('appear');
    isAnimating = false;
  }

  function handleChoice(playerWantsToBoard) {
    if (isGameOver || !isGameStarted || isAnimating || !currentVisitor) return;
    isAnimating = true;

    const { id, gender, isForbidden } = currentVisitor;
    const name = animalName(currentVisitor);
    const g = genderLabel(gender);

    const max = isForbidden ? 0 : (gender === 'male' ? currentVisitor.maxMale : currentVisitor.maxFemale);
    const isFull = isForbidden || arkState[id][gender] >= max;

    // 選択が間違っていた → ゲームオーバー
    if (playerWantsToBoard === isFull) {
      el.card.classList.add(playerWantsToBoard ? 'board-in' : 'walk-out');
      playSE('lose');
      const failKey = !playerWantsToBoard ? 'failRoom' : isForbidden ? 'failForbidden' : 'failFull';
      setMessage(t(failKey, name, g), 'error');
      endGame(false);
      return;
    }

    if (playerWantsToBoard) {
      el.card.classList.add('board-in');
      playSE('board');
      setTimeout(() => boardVisitor(id, gender, max, name, g), 400);
    } else {
      el.card.classList.add('walk-out');
      playSE('reject');
      setTimeout(() => {
        setMessage(isForbidden ? t('turnedAwayForbidden', name) : t('turnedAwayFull', name, g), 'success');
        nextVisitor();
      }, 400);
    }
  }

  function boardVisitor(id, gender, max, name, g) {
    const now = ++arkState[id][gender];
    onboardCount++;

    const info = max > 1 ? t('countInfo', now, max) : '';
    setMessage(t('boarded', name, g, info), 'success');
    renderArk();

    if (onboardCount === totalTarget) {
      setMessage(t('allDone'), 'success');
      endGame(true);
    } else {
      nextVisitor();
    }
  }

  function endGame(isWin) {
    isGameOver = true;
    enableButtons(false);

    if (isWin) {
      playSE('win');
      el.body.classList.add('success-bg');
      el.rainbow.style.display = 'block';

      const elapsed = (Date.now() - startTime) / 1000;
      const minutes = Math.floor(elapsed / 60);
      const seconds = (elapsed % 60).toFixed(1);
      el.clearTime.innerHTML = `<div class="clear-time">${t('clearLabel')}: ${t('time', minutes, seconds)}</div>`;
    } else {
      el.body.classList.add('error-bg');
      setTimeout(() => el.ark.classList.add('sinking'), 300);
    }
  }

  // ---------------------------------------------------------
  // 初期化
  // ---------------------------------------------------------
  el.levelBtns.forEach(btn => btn.addEventListener('click', () => changeLevel(Number(btn.dataset.level))));
  el.btnStart.addEventListener('click', () => { GameAudio.init(); startGame(); });
  el.btnBoard.addEventListener('click', () => handleChoice(true));
  el.btnReject.addEventListener('click', () => handleChoice(false));
  el.btnReset.addEventListener('click', resetGame);

  i18n.onChange(refreshLanguage);
  i18n.init($('lang-switch'));
  resetGame();
})();
