/* =========================================================
   BIBLE TASTE GAMES - 共通 多言語(i18n)ヘルパー
   言語コード: ja(日本語) / kana(ひらがな) / en(English)
   選んだ言語は localStorage に保存され、ゲーム間で引き継がれる

   使い方:
     const i18n = I18n.create({ ja: {...}, kana: {...}, en: {...} });
     i18n.init(document.getElementById('lang-switch')); // ボタン生成 + HTML反映
     i18n.t('key', arg0, arg1);   // 値が関数なら呼び出し、文字列なら {0} {1} を置換
     i18n.onChange(() => {...});  // 言語変更時の追加処理

   HTML 側:  data-i18n="key"       → textContent を差し替え
             data-i18n-html="key"  → innerHTML を差し替え
   ========================================================= */
const I18n = (() => {
  const LANGS = [
    { code: 'ja',   label: '日本語' },
    { code: 'kana', label: 'ひらがな' },
    { code: 'en',   label: 'English' }
  ];
  const STORAGE_KEY = 'bibleGames.lang';

  function loadSaved() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function save(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* 保存不可でも動作継続 */ }
  }

  function create(dict) {
    let lang = loadSaved();
    if (!dict[lang]) lang = 'ja';
    const listeners = [];
    let switchEl = null;

    function t(key, ...args) {
      const v = (dict[lang] && dict[lang][key]) ?? dict.ja[key] ?? '';
      if (typeof v === 'function') return v(...args);
      return args.reduce((s, a, i) => s.replaceAll(`{${i}}`, a), v);
    }

    function apply() {
      document.documentElement.lang = lang === 'en' ? 'en' : 'ja';
      document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
      document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
      if (switchEl) {
        switchEl.querySelectorAll('.lang-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.lang === lang);
        });
      }
    }

    function set(next) {
      if (!dict[next]) return;
      lang = next;
      save(lang);
      apply();
      listeners.forEach(cb => cb(lang));
    }

    function mountSwitch(el) {
      switchEl = el;
      el.classList.add('lang-switch');
      el.innerHTML = LANGS
        .map(l => `<button type="button" class="lang-btn" data-lang="${l.code}">${l.label}</button>`)
        .join('');
      el.addEventListener('click', e => {
        const btn = e.target.closest('.lang-btn');
        if (btn) set(btn.dataset.lang);
      });
    }

    function init(el) {
      if (el) mountSwitch(el);
      apply();
    }

    return { t, set, init, apply, onChange: cb => listeners.push(cb), get lang() { return lang; } };
  }

  return { create, LANGS };
})();
