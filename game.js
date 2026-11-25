const GUIDE_HIDE_STORAGE_KEY = "eng_rpg_hide_guide_v1";

const HERO_DATA = {
  archer: {
    id: "archer",
    title: "바람의 궁수",
    icon: "🏹",
    baseImg: "archer.png",
    awakenedImg: "archer_awakened.png",
    weaponName: "참나무 활",
    baseHp: 100,
    baseMp: 100,
    critChance: 0.36,
    skillBonus: 0,
    dmgReduction: 0,
    desc: "치명타 확률 2배"
  },
  mage: {
    id: "mage",
    title: "영어 마법사",
    icon: "🧙‍♀️",
    baseImg: "mage.png",
    awakenedImg: "mage_awakened.png",
    weaponName: "지혜의 지팡이",
    baseHp: 95,
    baseMp: 120,
    critChance: 0.18,
    skillBonus: 5,
    dmgReduction: 0,
    desc: "스킬 공격력 +5"
  },
  paladin: {
    id: "paladin",
    title: "빛의 성기사",
    icon: "🛡️",
    baseImg: "paladin.png",
    awakenedImg: "paladin.awakened.png",
    weaponName: "수호의 검",
    baseHp: 120,
    baseMp: 95,
    critChance: 0.18,
    skillBonus: 0,
    dmgReduction: 4,
    desc: "받는 피해 -4 감소"
  }
};

const AVATAR_TIERS = [
  {
    tier: 1,
    name: "Tier 1 · 초보 모험가 복장",
    desc: "기본 모험가 의상입니다.",
    hpBonus: 0,
    defBonus: 0,
    cost: 60,
    awakened: false
  },
  {
    tier: 2,
    name: "Tier 2 · 숙련된 수호자 로브",
    desc: "마력과 방어력이 깃든 훈련복입니다.",
    hpBonus: 25,
    defBonus: 2,
    cost: 110,
    awakened: false
  },
  {
    tier: 3,
    name: "Tier 3 · 각성한 빛의 영웅 갑옷",
    desc: "영웅의 각성 외형이 해금되는 최상급 의상입니다!",
    hpBonus: 55,
    defBonus: 5,
    cost: 0,
    awakened: true
  }
];

const MONSTER_POOL = [
  { name: "슬라임 킹", img: "slime.png", hp: 105, atk: 12, gold: 28, exp: 35, line: "출렁출렁! 단어 퀴즈 맞출 수 있겠어?" },
  { name: "동굴 박쥐", img: "bat.png", hp: 125, atk: 14, gold: 34, exp: 42, line: "끼이익! 발음 잘 듣고 맞춰봐!" },
  { name: "숲속 오크", img: "orc.png", hp: 150, atk: 17, gold: 42, exp: 50, line: "크르릉! 내 방패를 뚫어보아라!" },
  { name: "바위 골렘", img: "gelem.png", hp: 180, atk: 19, gold: 52, exp: 60, line: "쿵쿵! 단단한 바위처럼 버텨주마!" },
  { name: "그림자 유령", img: "ghost.png", hp: 205, atk: 22, gold: 62, exp: 70, line: "스산하다... 철자 입력도 완벽할까?" },
  { name: "어둠의 늑대인간", img: "wearwof.png", hp: 235, atk: 25, gold: 74, exp: 82, line: "아우우! 콤보를 이어갈 수 있을까?" },
  { name: "타락한 흑마법사", img: "darkmage.png", hp: 270, atk: 28, gold: 90, exp: 96, line: "어둠의 주문 앞에 무릎 꿇어라!" },
  { name: "고대 드래곤", img: "dragon.png", hp: 320, atk: 32, gold: 120, exp: 120, line: "크와아아! 진정한 영어 용사를 시험하겠다!" }
];

const VOCAB_BANK = {
  "3학년": {
    "YBM(최)": {
      "Lesson 1. Hello!": [
        { en: "hello", ko: "안녕", pos: "감탄사" },
        { en: "hi", ko: "안녕 (친근한 인사)", pos: "감탄사" },
        { en: "name", ko: "이름", pos: "명사" },
        { en: "bye", ko: "잘 가", pos: "감탄사" },
        { en: "good", ko: "좋은", pos: "형용사" },
        { en: "morning", ko: "아침", pos: "명사" }
      ],
      "Lesson 2. What's This?": [
        { en: "book", ko: "책", pos: "명사" },
        { en: "pen", ko: "펜", pos: "명사" },
        { en: "bag", ko: "가방", pos: "명사" },
        { en: "desk", ko: "책상", pos: "명사" },
        { en: "chair", ko: "의자", pos: "명사" },
        { en: "ruler", ko: "자", pos: "명사" }
      ],
      "Lesson 3. I Like Apples": [
        { en: "apple", ko: "사과", pos: "명사" },
        { en: "banana", ko: "바나나", pos: "명사" },
        { en: "orange", ko: "오렌지", pos: "명사" },
        { en: "grape", ko: "포도", pos: "명사" },
        { en: "like", ko: "좋아하다", pos: "동사" },
        { en: "milk", ko: "우유", pos: "명사" }
      ]
    },
    "천재(함)": {
      "Lesson 1. Nice to Meet You": [
        { en: "meet", ko: "만나다", pos: "동사" },
        { en: "friend", ko: "친구", pos: "명사" },
        { en: "thank", ko: "고마워하다", pos: "동사" },
        { en: "you", ko: "너, 당신", pos: "대명사" },
        { en: "my", ko: "나의", pos: "대명사" },
        { en: "school", ko: "학교", pos: "명사" }
      ],
      "Lesson 2. Sit Down, Please": [
        { en: "sit", ko: "앉다", pos: "동사" },
        { en: "stand", ko: "서다", pos: "동사" },
        { en: "open", ko: "열다", pos: "동사" },
        { en: "close", ko: "닫다", pos: "동사" },
        { en: "please", ko: "제발, ~해 주세요", pos: "부사" },
        { en: "door", ko: "문", pos: "명사" }
      ]
    }
  },
  "4학년": {
    "YBM(최)": {
      "Lesson 1. I'm Happy": [
        { en: "happy", ko: "행복한", pos: "형용사" },
        { en: "sad", ko: "슬픈", pos: "형용사" },
        { en: "hungry", ko: "배고픈", pos: "형용사" },
        { en: "tired", ko: "피곤한", pos: "형용사" },
        { en: "angry", ko: "화난", pos: "형용사" },
        { en: "fine", ko: "기분이 좋은", pos: "형용사" }
      ],
      "Lesson 2. What Time Is It?": [
        { en: "time", ko: "시간", pos: "명사" },
        { en: "clock", ko: "시계", pos: "명사" },
        { en: "seven", ko: "일곱", pos: "수사" },
        { en: "eight", ko: "여덟", pos: "수사" },
        { en: "nine", ko: "아홉", pos: "수사" },
        { en: "lunch", ko: "점심식사", pos: "명사" }
      ]
    },
    "동아(출)": {
      "Lesson 1. It's a Pencil": [
        { en: "pencil", ko: "연필", pos: "명사" },
        { en: "eraser", ko: "지우개", pos: "명사" },
        { en: "box", ko: "상자", pos: "명사" },
        { en: "map", ko: "지도", pos: "명사" },
        { en: "ball", ko: "공", pos: "명사" },
        { en: "doll", ko: "인형", pos: "명사" }
      ],
      "Lesson 2. Do You Like Dogs?": [
        { en: "dog", ko: "개", pos: "명사" },
        { en: "cat", ko: "고양이", pos: "명사" },
        { en: "bird", ko: "새", pos: "명사" },
        { en: "fish", ko: "물고기", pos: "명사" },
        { en: "rabbit", ko: "토끼", pos: "명사" },
        { en: "bear", ko: "곰", pos: "명사" }
      ]
    }
  },
  "5학년": {
    "YBM(최)": {
      "Lesson 1. How Do You Feel?": [
        { en: "feel", ko: "느끼다", pos: "동사" },
        { en: "cold", ko: "추운, 감기", pos: "형용사/명사" },
        { en: "sick", ko: "아픈", pos: "형용사" },
        { en: "sleepy", ko: "졸린", pos: "형용사" },
        { en: "drink", ko: "마시다", pos: "동사" },
        { en: "water", ko: "물", pos: "명사" }
      ],
      "Lesson 2. It's Under the Table": [
        { en: "under", ko: "~ 아래에", pos: "전치사" },
        { en: "table", ko: "탁자", pos: "명사" },
        { en: "bed", ko: "침대", pos: "명사" },
        { en: "behind", ko: "~ 뒤에", pos: "전치사" },
        { en: "next", ko: "다음의, 옆의", pos: "형용사" },
        { en: "window", ko: "창문", pos: "명사" }
      ]
    },
    "천재(함)": {
      "Lesson 1. He Is My Brother": [
        { en: "brother", ko: "남자 형제", pos: "명사" },
        { en: "sister", ko: "여자 형제", pos: "명사" },
        { en: "father", ko: "아버지", pos: "명사" },
        { en: "mother", ko: "어머니", pos: "명사" },
        { en: "tall", ko: "키가 큰", pos: "형용사" },
        { en: "kind", ko: "친절한", pos: "형용사" }
      ]
    }
  },
  "6학년": {
    "YBM(최)": {
      "Lesson 1. What Grade Are You In?": [
        { en: "grade", ko: "학년", pos: "명사" },
        { en: "sixth", ko: "여섯 번째의", pos: "서수" },
        { en: "class", ko: "학급, 수업", pos: "명사" },
        { en: "teacher", ko: "선생님", pos: "명사" },
        { en: "student", ko: "학생", pos: "명사" },
        { en: "favorite", ko: "가장 좋아하는", pos: "형용사" }
      ],
      "Lesson 2. I Can Swim": [
        { en: "swim", ko: "수영하다", pos: "동사" },
        { en: "dance", ko: "춤추다", pos: "동사" },
        { en: "sing", ko: "노래하다", pos: "동사" },
        { en: "cook", ko: "요리하다", pos: "동사" },
        { en: "ride", ko: "타다", pos: "동사" },
        { en: "bike", ko: "자전거", pos: "명사" }
      ]
    },
    "동아(출)": {
      "Lesson 1. Where Is the Post Office?": [
        { en: "post", ko: "우편", pos: "명사" },
        { en: "office", ko: "사무실, 관청", pos: "명사" },
        { en: "bank", ko: "은행", pos: "명사" },
        { en: "park", ko: "공원", pos: "명사" },
        { en: "straight", ko: "곧장", pos: "부사" },
        { en: "turn", ko: "돌다", pos: "동사" }
      ]
    }
  }
};

const state = {
  heroId: "archer",
  heroLv: 1,
  heroExp: 0,
  heroMaxExp: 100,
  gold: 50,
  stage: 1,
  weaponLv: 0,
  avatarTierIndex: 0,
  petLv: 1,
  combo: 0,
  feverMp: 0,
  doubleDamageActive: false,
  dex: [],
  wrongNotes: [],
  inBattle: false,
  heroHp: 100,
  heroMaxHp: 100,
  heroMp: 100,
  heroMaxMp: 100,
  monster: null,
  monsterHp: 105,
  monsterMaxHp: 105,
  monsterRage: 0,
  currentSkill: null,
  currentWord: null,
  hintUsedThisQuestion: false,
  timerInterval: null,
  timeLeft: 100
};

function getHeroConfig() {
  return HERO_DATA[state.heroId] || HERO_DATA.archer;
}

function getAvatarConfig() {
  return AVATAR_TIERS[state.avatarTierIndex] || AVATAR_TIERS[0];
}

function getWeaponAtkBonus() {
  return state.weaponLv * 5;
}

function getWeaponUpgradeCost() {
  return 40 + state.weaponLv * 25;
}

function getComputedMaxHp() {
  const hero = getHeroConfig();
  const avatar = getAvatarConfig();
  return hero.baseHp + (state.heroLv - 1) * 12 + avatar.hpBonus;
}

function getComputedMaxMp() {
  const hero = getHeroConfig();
  return hero.baseMp + (state.heroLv - 1) * 8;
}

function getHeroImageSrc() {
  const hero = getHeroConfig();
  const avatar = getAvatarConfig();
  return avatar.awakened ? hero.awakenedImg : hero.baseImg;
}

function renderCharacterVisual(containerId, imgSrc, altText, fallbackEmoji) {
  const box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = `<img src="${imgSrc}" alt="${altText}" style="max-height:82px;max-width:100%;object-fit:contain;" onerror="this.outerHTML='<span style=\\'font-size:2.6rem;\\'>${fallbackEmoji}</span>'">`;
}

function getSelectedWords() {
  const grade = document.getElementById("grade-select")?.value;
  const pub = document.getElementById("pub-select")?.value;
  const lesson = document.getElementById("lesson-select")?.value;
  const list = VOCAB_BANK?.[grade]?.[pub]?.[lesson];
  if (Array.isArray(list) && list.length > 0) return list;

  // 선택 단원이 비어 있을 경우 학년 전체 단어 fallback
  const gradeObj = VOCAB_BANK?.[grade] || {};
  const fallback = [];
  Object.values(gradeObj).forEach((pubObj) => {
    Object.values(pubObj).forEach((words) => {
      if (Array.isArray(words)) fallback.push(...words);
    });
  });
  return fallback;
}

function updateWordCountInfo() {
  const words = getSelectedWords();
  const infoEl = document.getElementById("word-count-info");
  if (infoEl) {
    infoEl.textContent = `출제 가능 어휘: ${words.length}개`;
  }
}

function onGradeChange() {
  const grade = document.getElementById("grade-select")?.value;
  const pubSelect = document.getElementById("pub-select");
  if (!pubSelect) return;

  const pubs = Object.keys(VOCAB_BANK[grade] || {});
  pubSelect.innerHTML = pubs.map((p) => `<option value="${p}">${p}</option>`).join("");
  onPubChange();
}

function onPubChange() {
  const grade = document.getElementById("grade-select")?.value;
  const pub = document.getElementById("pub-select")?.value;
  const lessonSelect = document.getElementById("lesson-select");
  if (!lessonSelect) return;

  const lessons = Object.keys(VOCAB_BANK?.[grade]?.[pub] || {});
  lessonSelect.innerHTML = lessons.map((l) => `<option value="${l}">${l}</option>`).join("");
  updateWordCountInfo();
}

function onLessonChange() {
  updateWordCountInfo();
}

function selectHero(heroId) {
  if (!HERO_DATA[heroId]) return;
  state.heroId = heroId;
  document.querySelectorAll(".hero-btn").forEach((btn) => btn.classList.remove("active"));
  document.getElementById(`hero-${heroId}`)?.classList.add("active");
  syncAllUI();
}

function syncAllUI() {
  const hero = getHeroConfig();
  const avatar = getAvatarConfig();
  const atkBonus = getWeaponAtkBonus();
  const maxHp = getComputedMaxHp();
  const maxMp = getComputedMaxMp();

  document.getElementById("hud-stage").textContent = `STAGE ${state.stage}`;
  document.getElementById("hud-gold").textContent = state.gold;
  document.getElementById("hud-dex").textContent = state.dex.length;

  document.getElementById("menu-hero-lv").textContent = state.heroLv;
  document.getElementById("menu-avatar-tier").textContent = avatar.name;
  document.getElementById("menu-hero-title").textContent = hero.title;
  document.getElementById("menu-weapon-info").textContent = `${hero.icon} ${hero.weaponName} (+${state.weaponLv}) · 공격력 +${atkBonus}`;
  renderCharacterVisual("lobby-hero-art", getHeroImageSrc(), hero.title, hero.icon);

  document.getElementById("hero-lv-text").textContent = state.heroLv;
  document.getElementById("hero-title").textContent = hero.title;
  document.getElementById("weapon-tag").textContent = `${hero.icon} ${hero.weaponName} (+${state.weaponLv})`;
  renderCharacterVisual("hero-art-box", getHeroImageSrc(), hero.title, hero.icon);

  const curHp = state.inBattle ? Math.min(state.heroHp, maxHp) : maxHp;
  const curMp = state.inBattle ? Math.min(state.heroMp, maxMp) : maxMp;
  state.heroMaxHp = maxHp;
  state.heroMaxMp = maxMp;
  if (!state.inBattle) {
    state.heroHp = maxHp;
    state.heroMp = maxMp;
  }

  document.getElementById("mage-hp-text").textContent = Math.max(0, curHp);
  document.getElementById("mage-maxhp-text").textContent = maxHp;
  document.getElementById("mage-hp-bar").style.width = `${Math.max(0, Math.min(100, (curHp / maxHp) * 100))}%`;

  document.getElementById("mage-mp-text").textContent = Math.max(0, curMp);
  document.getElementById("mage-maxmp-text").textContent = maxMp;
  document.getElementById("mage-mp-bar").style.width = `${Math.max(0, Math.min(100, (curMp / maxMp) * 100))}%`;

  document.getElementById("hero-exp-text").textContent = state.heroExp;
  document.getElementById("hero-maxexp-text").textContent = state.heroMaxExp;
  document.getElementById("hero-exp-bar").style.width = `${Math.max(0, Math.min(100, (state.heroExp / state.heroMaxExp) * 100))}%`;

  document.getElementById("pet-lv").textContent = state.petLv;
  document.getElementById("pet-icon").textContent = state.petLv >= 3 ? "🐉" : state.petLv === 2 ? "🐣" : "🥚";
  document.getElementById("pet-name").textContent = state.petLv >= 3 ? "황금 드래곤 펫" : state.petLv === 2 ? "꼬마 정령" : "신비한 알";

  if (state.monster) {
    document.getElementById("monster-name").textContent = `STAGE ${state.stage} · ${state.monster.name}`;
    document.getElementById("warrior-hp-text").textContent = Math.max(0, state.monsterHp);
    document.getElementById("warrior-maxhp-text").textContent = state.monsterMaxHp;
    document.getElementById("warrior-hp-bar").style.width = `${Math.max(0, Math.min(100, (state.monsterHp / state.monsterMaxHp) * 100))}%`;
    document.getElementById("warrior-rage-text").textContent = Math.min(100, state.monsterRage);
    document.getElementById("warrior-rage-bar").style.width = `${Math.min(100, state.monsterRage)}%`;
    renderCharacterVisual("monster-art-box", state.monster.img, state.monster.name, "👾");
  }

  const comboEl = document.getElementById("combo-badge");
  if (comboEl) {
    comboEl.style.display = state.combo >= 2 ? "inline-block" : "none";
    comboEl.textContent = `🔥 ${state.combo} COMBO`;
  }

  const feverEl = document.getElementById("fever-badge");
  if (feverEl) {
    feverEl.style.display = state.feverMp > 0 ? "inline-block" : "none";
    feverEl.textContent = `🌟 FEVER (MP ${state.feverMp})`;
  }

  updateWordCountInfo();
}

function appendBattleLog(msg) {
  const logBox = document.getElementById("battle-log");
  if (!logBox) return;
  const line = document.createElement("div");
  line.textContent = `• ${msg}`;
  logBox.prepend(line);
}

function startGame() {
  const words = getSelectedWords();
  if (!words || words.length === 0) {
    alert("선택한 단원에 출제할 단어가 없어요. 다른 학년이나 단원을 골라주세요!");
    return;
  }

  const grade = document.getElementById("grade-select").value;
  const pub = document.getElementById("pub-select").value;
  const lesson = document.getElementById("lesson-select").value;

  const baseMonster = MONSTER_POOL[(state.stage - 1) % MONSTER_POOL.length];
  const stageScale = 1 + (state.stage - 1) * 0.18;

  state.monster = { ...baseMonster };
  state.monsterMaxHp = Math.round(baseMonster.hp * stageScale);
  state.monsterHp = state.monsterMaxHp;
  state.monsterRage = 0;
  state.inBattle = true;
  state.combo = 0;
  state.feverMp = 0;
  state.doubleDamageActive = false;
  state.wrongNotes = [];

  state.heroMaxHp = getComputedMaxHp();
  state.heroMaxMp = getComputedMaxMp();
  state.heroHp = state.heroMaxHp;
  state.heroMp = state.heroMaxMp;

  document.getElementById("current-scope-badge").textContent = `${grade} | ${pub} | ${lesson}`;
  document.getElementById("monster-speech").textContent = baseMonster.line;
  document.getElementById("selector-panel").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result-panel").style.display = "none";
  document.getElementById("controls").style.display = "block";
  document.getElementById("battle-log").innerHTML = "";

  appendBattleLog(`STAGE ${state.stage} 시작! '${state.monster.name}'이(가) 나타났습니다.`);
  syncAllUI();
}

function backToMenu() {
  clearQuizTimer();
  state.inBattle = false;
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("selector-panel").style.display = "block";
  syncAllUI();
}

function clearQuizTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function startQuizTimer() {
  clearQuizTimer();
  state.timeLeft = 100;
  const bar = document.getElementById("timer-bar");
  if (bar) bar.style.width = "100%";

  state.timerInterval = setInterval(() => {
    state.timeLeft -= 2;
    if (bar) bar.style.width = `${Math.max(0, state.timeLeft)}%`;
    if (state.timeLeft <= 0) {
      clearQuizTimer();
      handleWrongAnswer(state.currentWord, "시간 초과!");
    }
  }, 240);
}

function speakCurrentWord() {
  const word = state.currentWord?.en;
  if (!word || !("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = "en-US";
  utter.rate = 0.92;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function openQuiz(skillType) {
  if (!state.inBattle) return;

  const mpCosts = {
    fireball: 20,
    thunder: 30,
    heal: 25,
    meditate: 0
  };
  const cost = mpCosts[skillType] ?? 0;

  if (state.heroMp < cost) {
    appendBattleLog("MP가 부족해요! '마나 명상'을 사용해 MP를 채워보세요.");
    return;
  }

  const words = getSelectedWords();
  if (!words.length) return;

  state.heroMp -= cost;
  state.currentSkill = skillType;
  state.currentWord = words[Math.floor(Math.random() * words.length)];
  state.hintUsedThisQuestion = false;

  const skillLabels = {
    fireball: "🔥 기본 공격 퀴즈 (단어 뜻 고르기)",
    thunder: "⚡ 필살기 강타 퀴즈 (철자 입력)",
    heal: "💚 치유 마법 퀴즈 (단어 뜻 고르기)",
    meditate: "✨ 마나 명상 퀴즈 (단어 뜻 고르기)"
  };

  document.getElementById("quiz-skill-name").textContent = skillLabels[skillType] || "퀴즈";
  document.getElementById("quiz-pos").textContent = `[${state.currentWord.pos || "단어"}]`;
  document.getElementById("quiz-question").textContent =
    skillType === "thunder"
      ? `"${state.currentWord.ko}"에 알맞은 영어 철자를 입력하세요!`
      : `"${state.currentWord.en}"의 뜻은 무엇일까요?`;

  const optionsBox = document.getElementById("quiz-options");
  const spellingBox = document.getElementById("spelling-box");
  const inputEl = document.getElementById("spelling-input");

  if (skillType === "thunder") {
    optionsBox.style.display = "none";
    spellingBox.style.display = "flex";
    inputEl.value = "";
    inputEl.focus();
  } else {
    spellingBox.style.display = "none";
    optionsBox.style.display = "grid";

    const distractors = words
      .filter((w) => w.ko !== state.currentWord.ko)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((w) => w.ko);

    const pool = ["사과", "학교", "친구", "물", "책", "노래"];
    while (distractors.length < 3) {
      const sample = pool[Math.floor(Math.random() * pool.length)];
      if (sample !== state.currentWord.ko && !distractors.includes(sample)) {
        distractors.push(sample);
      }
    }

    const choices = [state.currentWord.ko, ...distractors].sort(() => Math.random() - 0.5);
    optionsBox.innerHTML = "";
    choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = choice;
      btn.onclick = () => {
        clearQuizTimer();
        if (choice === state.currentWord.ko) {
          handleCorrectAnswer();
        } else {
          handleWrongAnswer(state.currentWord, `선택한 뜻: ${choice}`);
        }
      };
      optionsBox.appendChild(btn);
    });
  }

  document.getElementById("quiz-box").style.display = "block";
  startQuizTimer();
  syncAllUI();
}

function submitSpelling() {
  if (!state.currentWord) return;
  const inputEl = document.getElementById("spelling-input");
  const typed = (inputEl?.value || "").trim().toLowerCase();
  const answer = state.currentWord.en.trim().toLowerCase();

  clearQuizTimer();
  if (typed === answer) {
    handleCorrectAnswer();
  } else {
    handleWrongAnswer(state.currentWord, `입력한 철자: ${typed || "(빈칸)"}`);
  }
}

function useHintMagnifier() {
  if (!state.currentWord || state.hintUsedThisQuestion) return;
  if (state.gold < 20) {
    appendBattleLog("골드가 부족해요! (힌트는 20G 필요)");
    return;
  }

  state.gold -= 20;
  state.hintUsedThisQuestion = true;
  const en = state.currentWord.en;
  const firstLetter = en.charAt(0).toUpperCase();
  appendBattleLog(`🔍 힌트 사용! 첫 글자는 '${firstLetter}'이고 총 ${en.length}글자예요. (뜻: ${state.currentWord.ko})`);
  syncAllUI();
}

function unlockDexWord(wordObj) {
  if (!wordObj) return;
  const exists = state.dex.some((item) => item.en === wordObj.en);
  if (!exists) {
    state.dex.push({ en: wordObj.en, ko: wordObj.ko, pos: wordObj.pos || "단어" });
  }
}

function gainExpAndGold(expGain, goldGain) {
  state.gold += goldGain;
  state.heroExp += expGain;
  while (state.heroExp >= state.heroMaxExp) {
    state.heroExp -= state.heroMaxExp;
    state.heroLv += 1;
    state.heroMaxExp = Math.round(state.heroMaxExp * 1.25);
    state.heroMaxHp = getComputedMaxHp();
    state.heroMaxMp = getComputedMaxMp();
    state.heroHp = state.heroMaxHp;
    state.heroMp = state.heroMaxMp;
    appendBattleLog(`🎉 레벨 업! 영웅이 Lv.${state.heroLv}이(가) 되었습니다!`);
  }
}

function handleCorrectAnswer() {
  const hero = getHeroConfig();
  const word = state.currentWord;
  state.combo += 1;
  if (state.combo >= 3) {
    state.feverMp = 2;
  }
  unlockDexWord(word);
  gainExpAndGold(14, 10 + Math.min(15, state.combo * 2));

  document.getElementById("quiz-box").style.display = "none";

  if (state.currentSkill === "heal") {
    const healAmt = 30 + hero.skillBonus;
    state.heroHp = Math.min(state.heroMaxHp, state.heroHp + healAmt);
    appendBattleLog(`💚 정답! '${word.en}'(${word.ko})을 맞혀 HP를 +${healAmt} 회복했습니다!`);
  } else if (state.currentSkill === "meditate") {
    const mpGain = 40 + hero.skillBonus;
    state.heroMp = Math.min(state.heroMaxMp, state.heroMp + mpGain);
    appendBattleLog(`✨ 정답! '${word.en}'(${word.ko})을 맞혀 MP를 +${mpGain} 회복했습니다!`);
  } else {
    const baseDmg = state.currentSkill === "thunder" ? 36 : 22;
    const isCrit = Math.random() < hero.critChance;
    const critMult = isCrit ? 1.5 : 1;
    const feverMult = state.feverMp > 0 ? 1.25 : 1;
    const doubleMult = state.doubleDamageActive ? 2 : 1;

    const totalDmg = Math.round(
      (baseDmg + getWeaponAtkBonus() + hero.skillBonus + state.petLv * 3) * critMult * feverMult * doubleMult
    );

    state.doubleDamageActive = false;
    if (state.feverMp > 0) state.feverMp -= 1;
    state.monsterHp = Math.max(0, state.monsterHp - totalDmg);
    state.monsterRage = Math.min(100, state.monsterRage + 15);

    appendBattleLog(
      `⚔️ 정답! '${word.en}'(${word.ko})! ${isCrit ? "치명타! " : ""}${state.monster.name}에게 ${totalDmg} 데미지를 입혔습니다!`
    );
  }

  syncAllUI();

  if (state.monsterHp <= 0) {
    onStageVictory();
  } else {
    monsterCounterAttack();
  }
}

function handleWrongAnswer(wordObj, reasonText) {
  state.combo = 0;
  if (wordObj && !state.wrongNotes.some((w) => w.en === wordObj.en)) {
    state.wrongNotes.push({ en: wordObj.en, ko: wordObj.ko, reason: reasonText });
  }
  document.getElementById("quiz-box").style.display = "none";
  appendBattleLog(`❌ 아쉬워요! (${reasonText}) 정답은 '${wordObj?.en || ""}' (${wordObj?.ko || ""})입니다.`);
  syncAllUI();
  monsterCounterAttack();
}

function monsterCounterAttack() {
  if (!state.inBattle || !state.monster) return;
  const hero = getHeroConfig();
  const avatar = getAvatarConfig();

  const rawDmg = state.monster.atk + Math.floor(state.stage * 1.5);
  const finalDmg = Math.max(4, rawDmg - hero.dmgReduction - avatar.defBonus);
  state.heroHp = Math.max(0, state.heroHp - finalDmg);
  state.monsterRage = Math.max(0, state.monsterRage - 20);

  document.getElementById("monster-speech").textContent = `${finalDmg} 데미지 공격! 다음엔 어쩔래?`;
  appendBattleLog(`👾 ${state.monster.name}의 반격! 영웅이 ${finalDmg} 피해를 입었습니다.`);
  syncAllUI();

  if (state.heroHp <= 0) {
    onStageDefeat();
  }
}

function renderWrongNotesPanel(titleMsg, nextBtnLabel) {
  document.getElementById("controls").style.display = "none";
  const panel = document.getElementById("result-panel");
  const notesBox = document.getElementById("wrong-notes-box");
  const restartBtn = document.getElementById("restart-btn");

  restartBtn.textContent = nextBtnLabel;
  if (state.wrongNotes.length === 0) {
    notesBox.innerHTML = `<h4>${titleMsg}</h4><p>완벽해요! 이번 전투에서 틀린 단어가 없습니다.</p>`;
  } else {
    const itemsHtml = state.wrongNotes
      .map((n) => `<li><strong>${n.en}</strong> — ${n.ko} <small>(${n.reason})</small></li>`)
      .join("");
    notesBox.innerHTML = `<h4>${titleMsg}</h4><p>📝 오답노트 복습:</p><ul>${itemsHtml}</ul>`;
  }
  panel.style.display = "block";
}

function onStageVictory() {
  clearQuizTimer();
  state.inBattle = false;
  const rewardGold = state.monster.gold;
  const rewardExp = state.monster.exp;
  gainExpAndGold(rewardExp, rewardGold);
  state.stage += 1;
  appendBattleLog(`🏆 승리! +${rewardGold}G, +${rewardExp} EXP를 획득하고 STAGE ${state.stage}로 향합니다!`);
  syncAllUI();
  renderWrongNotesPanel("🎉 스테이지 클리어!", "🚀 다음 스테이지 도전!");
}

function onStageDefeat() {
  clearQuizTimer();
  state.inBattle = false;
  appendBattleLog("💫 체력이 모두 떨어졌어요! 오답노트를 복습하고 다시 도전해 보세요.");
  syncAllUI();
  renderWrongNotesPanel("🛡️ 아쉽게 패배했어요!", "🔄 다시 도전하기!");
}

function buyAndUseItem(itemType) {
  if (!state.inBattle) {
    appendBattleLog("전투 중에만 퀵 아이템을 사용할 수 있어요.");
    return;
  }
  if (itemType === "potion") {
    if (state.gold < 30) {
      appendBattleLog("골드가 부족해요! (체력물약 30G)");
      return;
    }
    state.gold -= 30;
    state.heroHp = Math.min(state.heroMaxHp, state.heroHp + 45);
    appendBattleLog("🧪 체력물약 사용! HP를 +45 회복했습니다.");
  } else if (itemType === "double") {
    if (state.gold < 40) {
      appendBattleLog("골드가 부족해요! (더블데미지 40G)");
      return;
    }
    state.gold -= 40;
    state.doubleDamageActive = true;
    appendBattleLog("📜 더블데미지 활성화! 다음 공격 스킬 데미지가 2배가 됩니다.");
  }
  syncAllUI();
}

/* 🔨 대장간 모달 */
function openForgeModal() {
  const hero = getHeroConfig();
  const curAtk = getWeaponAtkBonus();
  const nextAtk = (state.weaponLv + 1) * 5;
  const cost = getWeaponUpgradeCost();

  document.getElementById("forge-weapon-icon").textContent = hero.icon;
  document.getElementById("forge-weapon-name").textContent = `${hero.weaponName} (+${state.weaponLv})`;
  document.getElementById("forge-weapon-grade").textContent =
    state.weaponLv >= 5 ? "등급: 전설의 성물" : state.weaponLv >= 2 ? "등급: 빛나는 강화 무기" : "등급: 일반 무기";
  document.getElementById("forge-cur-atk").textContent = curAtk;
  document.getElementById("forge-next-atk").textContent = nextAtk;
  document.getElementById("forge-cost-text").textContent = cost;
  document.getElementById("forge-modal").style.display = "flex";
}

function closeForgeModal() {
  document.getElementById("forge-modal").style.display = "none";
}

function upgradeWeapon() {
  const cost = getWeaponUpgradeCost();
  if (state.gold < cost) {
    alert(`골드가 부족해요! ${cost}G가 필요합니다.`);
    return;
  }
  state.gold -= cost;
  state.weaponLv += 1;
  syncAllUI();
  openForgeModal();
}

/* 👗 아바타 모달 */
function openAvatarModal() {
  const cur = getAvatarConfig();
  const next = AVATAR_TIERS[state.avatarTierIndex + 1];

  document.getElementById("avatar-modal-art").innerHTML =
    `<img src="${getHeroImageSrc()}" alt="${cur.name}" style="max-height:76px;object-fit:contain;" onerror="this.outerHTML='<span>${getHeroConfig().icon}</span>'">`;
  document.getElementById("avatar-tier-name").textContent = cur.name;
  document.getElementById("avatar-tier-desc").textContent = cur.desc;
  document.getElementById("av-cur-hp").textContent = cur.hpBonus;
  document.getElementById("av-cur-def").textContent = cur.defBonus;

  const nextBox = document.getElementById("av-next-box");
  const btn = document.getElementById("avatar-upgrade-btn");

  if (next) {
    nextBox.style.display = "block";
    document.getElementById("av-next-hp").textContent = next.hpBonus;
    document.getElementById("av-next-def").textContent = next.defBonus;
    document.getElementById("avatar-cost-text").textContent = cur.cost;
    btn.disabled = false;
  } else {
    nextBox.style.display = "none";
    btn.textContent = "👑 최고 단계 아바타 달성!";
    btn.disabled = true;
  }

  document.getElementById("avatar-modal").style.display = "flex";
}

function closeAvatarModal() {
  document.getElementById("avatar-modal").style.display = "none";
}

function upgradeAvatar() {
  const cur = getAvatarConfig();
  const next = AVATAR_TIERS[state.avatarTierIndex + 1];
  if (!next) return;

  if (state.gold < cur.cost) {
    alert(`골드가 부족해요! ${cur.cost}G가 필요합니다.`);
    return;
  }

  state.gold -= cur.cost;
  state.avatarTierIndex += 1;
  state.heroMaxHp = getComputedMaxHp();
  state.heroHp = state.heroMaxHp;
  syncAllUI();
  openAvatarModal();
}

/* 📖 단어 도감 모달 */
function openDexModal() {
  const grid = document.getElementById("dex-grid");
  if (!grid) return;

  if (state.dex.length === 0) {
    grid.innerHTML = "<p style='text-align:center;color:#64748b;'>아직 수집한 단어가 없어요. 퀴즈를 맞히면 도감에 등록됩니다!</p>";
  } else {
    grid.innerHTML = state.dex
      .map(
        (item) => `
        <button type="button" onclick="speakDexWord('${item.en.replace(/'/g, "\\'")}')" style="display:flex;justify-content:space-between;align-items:center;width:100%;margin-bottom:8px;padding:10px 14px;border-radius:12px;border:1px solid #cbd5e1;background:#f8fafc;cursor:pointer;font-weight:700;">
          <span>🔊 <strong>${item.en}</strong> <small style="color:#64748b;">[${item.pos}]</small></span>
          <span style="color:#1d4ed8;">${item.ko}</span>
        </button>`
      )
      .join("");
  }

  document.getElementById("dex-modal").style.display = "flex";
}

function speakDexWord(word) {
  if (!word || !("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = "en-US";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function closeDexModal() {
  document.getElementById("dex-modal").style.display = "none";
}

/* ❓ 게임방법 모달 & 10초 체험 */
function openGuideModal() {
  const modal = document.getElementById("guide-modal");
  const checkbox = document.getElementById("guide-hide-checkbox");
  if (!modal) return;

  if (checkbox) {
    checkbox.checked = localStorage.getItem(GUIDE_HIDE_STORAGE_KEY) === "true";
  }

  resetGuideDemo();
  modal.style.display = "flex";
}

function closeGuideModal() {
  const modal = document.getElementById("guide-modal");
  const checkbox = document.getElementById("guide-hide-checkbox");

  if (checkbox) {
    localStorage.setItem(GUIDE_HIDE_STORAGE_KEY, checkbox.checked ? "true" : "false");
  }

  if (modal) {
    modal.style.display = "none";
  }
}

function handleGuideBackdropClick(event) {
  if (event.target && event.target.id === "guide-modal") {
    closeGuideModal();
  }
}

function resetGuideDemo() {
  const resultEl = document.getElementById("guide-demo-result");
  const buttons = document.querySelectorAll(".mini-choice-btn");

  buttons.forEach((btn) => {
    btn.classList.remove("is-correct", "is-wrong");
  });

  if (resultEl) {
    resultEl.textContent = "정답을 맞히면 이렇게 공격 스킬이 나가요!";
    resultEl.style.color = "#5c3c00";
  }
}

function checkGuideDemo(clickedBtn, isCorrect) {
  const resultEl = document.getElementById("guide-demo-result");
  const buttons = document.querySelectorAll(".mini-choice-btn");

  buttons.forEach((btn) => {
    btn.classList.remove("is-correct", "is-wrong");
  });

  if (isCorrect) {
    clickedBtn.classList.add("is-correct");
    if (resultEl) {
      resultEl.textContent = '🎉 정답! "apple"은 사과예요. 몬스터에게 25 데미지 공격!';
      resultEl.style.color = "#1b5e20";
    }
  } else {
    clickedBtn.classList.add("is-wrong");
    if (resultEl) {
      resultEl.textContent = '💪 아쉽지만 괜찮아요! "apple"의 뜻을 다시 눌러 볼까요?';
      resultEl.style.color = "#9b2226";
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("guide-modal");
    if (modal && modal.style.display === "flex") {
      closeGuideModal();
    }
  }
});

window.addEventListener("DOMContentLoaded", function () {
  onGradeChange();
  syncAllUI();

  const hideGuide = localStorage.getItem(GUIDE_HIDE_STORAGE_KEY) === "true";
  if (!hideGuide) {
    openGuideModal();
  }
});
