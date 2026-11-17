// 📚 2022 개정 초등 영어 어휘 사전
const vocabDict = {
  "3학년": [
    { w: "apple", m: "사과", pos: "명사", l: ["L1", "L2", "L3"] },
    { w: "banana", m: "바나나", pos: "명사", l: ["L2", "L3", "L4"] },
    { w: "book", m: "책", pos: "명사", l: ["L1", "L2", "L5"] },
    { w: "pencil", m: "연필", pos: "명사", l: ["L2", "L3", "L5"] },
    { w: "bag", m: "가방", pos: "명사", l: ["L2", "L4"] },
    { w: "dog", m: "개", pos: "명사", l: ["L3", "L4", "L6"] },
    { w: "cat", m: "고양이", pos: "명사", l: ["L3", "L4", "L6"] },
    { w: "bird", m: "새", pos: "명사", l: ["L4", "L6"] },
    { w: "fish", m: "물고기", pos: "명사", l: ["L4", "L6"] },
    { w: "red", m: "빨간색", pos: "형용사/명사", l: ["L5", "L6", "L7"] },
    { w: "blue", m: "파란색", pos: "형용사/명사", l: ["L5", "L6", "L7"] },
    { w: "yellow", m: "노란색", pos: "형용사/명사", l: ["L5", "L6", "L7"] },
    { w: "green", m: "초록색", pos: "형용사/명사", l: ["L5", "L7"] },
    { w: "happy", m: "행복한", pos: "형용사", l: ["L1", "L7", "L8"] },
    { w: "sad", m: "슬픈", pos: "형용사", l: ["L7", "L8"] },
    { w: "big", m: "큰", pos: "형용사", l: ["L6", "L8", "L9"] },
    { w: "small", m: "작은", pos: "형용사", l: ["L6", "L8", "L9"] },
    { w: "run", m: "달리다", pos: "동사", l: ["L8", "L9", "L10"] },
    { w: "jump", m: "뛰다, 점프하다", pos: "동사", l: ["L8", "L9", "L10"] },
    { w: "swim", m: "수영하다", pos: "동사", l: ["L9", "L10", "L11"] },
    { w: "dance", m: "춤추다", pos: "동사", l: ["L9", "L10", "L11"] },
    { w: "mother", m: "어머니", pos: "명사", l: ["L10", "L11", "L12"] },
    { w: "father", m: "아버지", pos: "명사", l: ["L10", "L11", "L12"] },
    { w: "sister", m: "여자 형제", pos: "명사", l: ["L11", "L12"] },
    { w: "brother", m: "남자 형제", pos: "명사", l: ["L11", "L12"] },
    { w: "water", m: "물", pos: "명사", l: ["L3", "L7", "L11"] },
    { w: "milk", m: "우유", pos: "명사", l: ["L3", "L7", "L12"] },
    { w: "bread", m: "빵", pos: "명사", l: ["L4", "L8", "L12"] },
    { w: "sun", m: "태양, 해", pos: "명사", l: ["L5", "L9", "L11"] },
    { w: "star", m: "별", pos: "명사", l: ["L6", "L10", "L12"] }
  ],
  "4학년": [
    { w: "morning", m: "아침", pos: "명사", l: ["L1", "L2", "L3"] },
    { w: "afternoon", m: "오후", pos: "명사", l: ["L1", "L2", "L3"] },
    { w: "evening", m: "저녁", pos: "명사", l: ["L1", "L2"] },
    { w: "teacher", m: "선생님", pos: "명사", l: ["L1", "L3", "L4"] },
    { w: "student", m: "학생", pos: "명사", l: ["L1", "L3", "L4"] },
    { w: "friend", m: "친구", pos: "명사", l: ["L1", "L2", "L5"] },
    { w: "sunny", m: "화창한, 맑은", pos: "형용사", l: ["L3", "L4", "L5"] },
    { w: "rainy", m: "비가 오는", pos: "형용사", l: ["L3", "L4", "L5"] },
    { w: "cloudy", m: "흐린", pos: "형용사", l: ["L3", "L4", "L5"] },
    { w: "windy", m: "바람이 부는", pos: "형용사", l: ["L4", "L5"] },
    { w: "breakfast", m: "아침 식사", pos: "명사", l: ["L5", "L6", "L7"] },
    { w: "lunch", m: "점심 식사", pos: "명사", l: ["L5", "L6", "L7"] },
    { w: "dinner", m: "저녁 식사", pos: "명사", l: ["L5", "L6", "L7"] },
    { w: "school", m: "학교", pos: "명사", l: ["L2", "L6", "L8"] },
    { w: "home", m: "집", pos: "명사/부사", l: ["L2", "L6", "L8"] },
    { w: "soccer", m: "축구", pos: "명사", l: ["L7", "L8", "L9"] },
    { w: "baseball", m: "야구", pos: "명사", l: ["L7", "L8", "L9"] },
    { w: "basketball", m: "농구", pos: "명사", l: ["L7", "L8", "L9"] },
    { w: "hungry", m: "배고픈", pos: "형용사", l: ["L8", "L9", "L10"] },
    { w: "thirsty", m: "목마른", pos: "형용사", l: ["L8", "L9", "L10"] },
    { w: "tired", m: "피곤한", pos: "형용사", l: ["L9", "L10", "L11"] },
    { w: "watch", m: "손목시계 / 보다", pos: "명사/동사", l: ["L10", "L11", "L12"] },
    { w: "umbrella", m: "우산", pos: "명사", l: ["L10", "L11", "L12"] },
    { w: "gloves", m: "장갑", pos: "명사", l: ["L11", "L12"] },
    { w: "clean", m: "깨끗한 / 청소하다", pos: "형용사/동사", l: ["L11", "L12"] },
    { w: "help", m: "돕다", pos: "동사", l: ["L9", "L11", "L12"] }
  ],
  "5학년": [
    { w: "country", m: "나라, 국가", pos: "명사", l: ["L1", "L2", "L3"] },
    { w: "favorite", m: "가장 좋아하는", pos: "형용사", l: ["L2", "L3", "L4"] },
    { w: "subject", m: "과목, 주제", pos: "명사", l: ["L2", "L3", "L4"] },
    { w: "science", m: "과학", pos: "명사", l: ["L2", "L3", "L4"] },
    { w: "math", m: "수학", pos: "명사", l: ["L2", "L3", "L4"] },
    { w: "music", m: "음악", pos: "명사", l: ["L2", "L3", "L5"] },
    { w: "museum", m: "박물관", pos: "명사", l: ["L4", "L5", "L6"] },
    { w: "library", m: "도서관", pos: "명사", l: ["L4", "L5", "L6"] },
    { w: "hospital", m: "병원", pos: "명사", l: ["L4", "L5", "L6"] },
    { w: "straight", m: "똑바로, 곧장", pos: "부사/형용사", l: ["L5", "L6", "L7"] },
    { w: "between", m: "~ 사이에", pos: "전치사", l: ["L5", "L6", "L7"] },
    { w: "behind", m: "~ 뒤에", pos: "전치사", l: ["L5", "L6", "L7"] },
    { w: "season", m: "계절", pos: "명사", l: ["L7", "L8", "L9"] },
    { w: "spring", m: "봄", pos: "명사", l: ["L7", "L8", "L9"] },
    { w: "summer", m: "여름", pos: "명사", l: ["L7", "L8", "L9"] },
    { w: "autumn", m: "가을", pos: "명사", l: ["L7", "L8", "L9"] },
    { w: "winter", m: "겨울", pos: "명사", l: ["L7", "L8", "L9"] },
    { w: "vacation", m: "방학, 휴가", pos: "명사", l: ["L8", "L9", "L10"] },
    { w: "visit", m: "방문하다", pos: "동사", l: ["L8", "L9", "L10"] },
    { w: "travel", m: "여행하다", pos: "동사/명사", l: ["L9", "L10", "L11"] },
    { w: "delicious", m: "맛있는", pos: "형용사", l: ["L10", "L11", "L12"] },
    { w: "expensive", m: "비싼", pos: "형용사", l: ["L10", "L11", "L12"] },
    { w: "cheap", m: "값싼", pos: "형용사", l: ["L10", "L11", "L12"] },
    { w: "future", m: "미래", pos: "명사", l: ["L11", "L12"] },
    { w: "scientist", m: "과학자", pos: "명사", l: ["L11", "L12"] }
  ],
  "6학년": [
    { w: "grade", m: "학년, 성적", pos: "명사", l: ["L1", "L2", "L3"] },
    { w: "festival", m: "축제", pos: "명사", l: ["L1", "L2", "L3"] },
    { w: "headache", m: "두통", pos: "명사", l: ["L2", "L3", "L4"] },
    { w: "stomachache", m: "복통", pos: "명사", l: ["L2", "L3", "L4"] },
    { w: "fever", m: "열, 발열", pos: "명사", l: ["L2", "L3", "L4"] },
    { w: "medicine", m: "약, 의학", pos: "명사", l: ["L2", "L3", "L4"] },
    { w: "exercise", m: "운동하다, 운동", pos: "동사/명사", l: ["L3", "L4", "L5"] },
    { w: "healthy", m: "건강한", pos: "형용사", l: ["L3", "L4", "L5"] },
    { w: "habit", m: "습관", pos: "명사", l: ["L4", "L5", "L6"] },
    { w: "direction", m: "방향, 지시", pos: "명사", l: ["L5", "L6", "L7"] },
    { w: "corner", m: "모퉁이", pos: "명사", l: ["L5", "L6", "L7"] },
    { w: "across", m: "~을 가로질러, 건너편에", pos: "전치사/부사", l: ["L5", "L6", "L7"] },
    { w: "concert", m: "음악회, 콘서트", pos: "명사", l: ["L6", "L7", "L8"] },
    { w: "volunteer", m: "자원봉사자, 자원하다", pos: "명사/동사", l: ["L7", "L8", "L9"] },
    { w: "environment", m: "환경", pos: "명사", l: ["L8", "L9", "L10"] },
    { w: "recycle", m: "재활용하다", pos: "동사", l: ["L8", "L9", "L10"] },
    { w: "energy", m: "에너지", pos: "명사", l: ["L8", "L9", "L10"] },
    { w: "protect", m: "보호하다", pos: "동사", l: ["L9", "L10", "L11"] },
    { w: "earth", m: "지구, 땅", pos: "명사", l: ["L9", "L10", "L11"] },
    { w: "culture", m: "문화", pos: "명사", l: ["L10", "L11", "L12"] },
    { w: "tradition", m: "전통", pos: "명사", l: ["L10", "L11", "L12"] },
    { w: "important", m: "중요한", pos: "형용사", l: ["L10", "L11", "L12"] },
    { w: "together", m: "함께", pos: "부사", l: ["L11", "L12"] },
    { w: "memory", m: "기억, 추억", pos: "명사", l: ["L11", "L12"] },
    { w: "graduate", m: "졸업하다", pos: "동사", l: ["L11", "L12"] }
  ]
};

const publishersByGrade = {
  "3학년": ["YBM(최)", "YBM(김)", "천재(함)", "천재(김)", "천재(이)", "미래엔", "동아", "아이스크림"],
  "4학년": ["YBM(최)", "YBM(김)", "천재(함)", "천재(김)", "천재(이)", "미래엔", "동아", "아이스크림"],
  "5학년": ["YBM(최)", "YBM(김)", "천재(함)", "천재(김)", "천재(이)", "미래엔", "동아", "아이스크림", "비상"],
  "6학년": ["YBM(최)", "YBM(김)", "천재(함)", "천재(김)", "천재(이)", "미래엔", "동아", "아이스크림", "비상"]
};

const lessonsList = [
  { id: "ALL", name: "전체 단원 (전 범위 복습)" },
  { id: "L1", name: "Lesson 1 (1학기 1단원)" },
  { id: "L2", name: "Lesson 2 (1학기 2단원)" },
  { id: "L3", name: "Lesson 3 (1학기 3단원)" },
  { id: "L4", name: "Lesson 4 (1학기 4단원)" },
  { id: "L5", name: "Lesson 5 (1학기 5단원)" },
  { id: "L6", name: "Lesson 6 (1학기 6단원)" },
  { id: "L7", name: "Lesson 7 (2학기 7단원)" },
  { id: "L8", name: "Lesson 8 (2학기 8단원)" },
  { id: "L9", name: "Lesson 9 (2학기 9단원)" },
  { id: "L10", name: "Lesson 10 (2학기 10단원)" },
  { id: "L11", name: "Lesson 11 (2학기 11단원)" },
  { id: "L12", name: "Lesson 12 (2학기 12단원)" }
];

// 학년별 보스 몬스터 설정
const monstersByGrade = {
  "3학년": { avatar: "🟢", name: "슬라임 킹", maxHp: 110 },
  "4학년": { avatar: "👹", name: "숲속의 오크", maxHp: 130 },
  "5학년": { avatar: "❄️", name: "얼음 골렘", maxHp: 150 },
  "6학년": { avatar: "🐉", name: "레드 드래곤", maxHp: 170 }
};

// 영웅 직업 데이터
const heroJobs = {
  mage: { avatar: "🧙‍♀️", title: "영어 마법사" },
  archer: { avatar: "🏹", title: "바람의 궁수" },
  paladin: { avatar: "🛡️", title: "빛의 성기사" }
};

// 동료 펫 진화 단계
const petStages = [
  { icon: "🥚", name: "신비한 알", dmg: 0 },
  { icon: "🐣", name: "아기 병아리", dmg: 4 },
  { icon: "🐲", name: "아기 드래곤", dmg: 8 },
  { icon: "🦄", name: "전설의 유니콘", dmg: 14 }
];

let selectedHero = "mage";
let activeQuizPool = [];
let mage = { hp: 100, maxHp: 100, mp: 100, maxMp: 100 };
let warrior = { hp: 130, maxHp: 130, rage: 0, maxRage: 100 };
let isGameOver = false;
let currentSkill = null;
let currentQuiz = null;

// 재미 요소 상태 변수
let gold = 50;
let comboCount = 0;
let feverTurns = 0;
let doubleDamageActive = false;
let petExp = 0;
let wrongWords = [];
let collectedWords = JSON.parse(localStorage.getItem('elem_rpg_dex') || '[]');
let questionStartTime = 0;
let timerInterval = null;

function selectHero(job) {
  selectedHero = job;
  document.querySelectorAll('.hero-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`hero-${job}`).classList.add('active');
}

function initSelectors() {
  onGradeChange();
  updateDexUI();
}

function onGradeChange() {
  const grade = document.getElementById('grade-select').value;
  const pubSelect = document.getElementById('pub-select');
  pubSelect.innerHTML = '';

  publishersByGrade[grade].forEach(pub => {
    const opt = document.createElement('option');
    opt.value = pub;
    opt.innerText = pub;
    pubSelect.appendChild(opt);
  });

  onPubChange();
}

function onPubChange() {
  const lessonSelect = document.getElementById('lesson-select');
  lessonSelect.innerHTML = '';

  lessonsList.forEach(ls => {
    const opt = document.createElement('option');
    opt.value = ls.id;
    opt.innerText = ls.name;
    lessonSelect.appendChild(opt);
  });

  onLessonChange();
}

function onLessonChange() {
  const grade = document.getElementById('grade-select').value;
  const lesson = document.getElementById('lesson-select').value;
  const allGradeWords = vocabDict[grade] || [];

  if (lesson === "ALL") {
    activeQuizPool = allGradeWords;
  } else {
    const filtered = allGradeWords.filter(item => item.l.includes(lesson));
    activeQuizPool = filtered.length > 0 ? filtered : allGradeWords;
  }

  document.getElementById('word-count-info').innerText = `출제 가능 어휘: ${activeQuizPool.length}개`;
}

function startGame() {
  const grade = document.getElementById('grade-select').value;
  const pub = document.getElementById('pub-select').value;
  const lessonText = document.getElementById('lesson-select').selectedOptions[0].text;
  const monsterInfo = monstersByGrade[grade];
  const heroInfo = heroJobs[selectedHero];

  document.getElementById('current-scope-badge').innerText = `${grade} | ${pub} | ${lessonText}`;
  document.getElementById('hero-avatar').innerText = heroInfo.avatar;
  document.getElementById('hero-title').innerText = heroInfo.title;

  document.getElementById('monster-avatar').innerText = monsterInfo.avatar;
  document.getElementById('monster-name').innerText = monsterInfo.name;
  document.getElementById('warrior-maxhp-text').innerText = monsterInfo.maxHp;
  setMonsterSpeech("덤벼라, 꼬마 영웅!");

  document.getElementById('selector-panel').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';

  mage = { hp: 100, maxHp: 100, mp: 100, maxMp: 100 };
  warrior = { hp: monsterInfo.maxHp, maxHp: monsterInfo.maxHp, rage: 0, maxRage: 100 };
  isGameOver = false;
  comboCount = 0;
  feverTurns = 0;
  doubleDamageActive = false;
  wrongWords = [];

  document.querySelector('.game-container').classList.remove('fever-active');
  document.getElementById('battle-log').innerHTML = '';
  document.getElementById('controls').style.display = 'block';
  document.getElementById('quiz-box').style.display = 'none';
  document.getElementById('result-panel').style.display = 'none';
  updateUI();
  log(`⚔️ [${grade} - ${pub}] ${monsterInfo.name}이(가) 나타났습니다!`);
}

function backToMenu() {
  clearInterval(timerInterval);
  document.querySelector('.game-container').classList.remove('fever-active');
  document.getElementById('game-screen').style.display = 'none';
  document.getElementById('selector-panel').style.display = 'block';
  updateDexUI();
}

function setMonsterSpeech(text) {
  document.getElementById('monster-speech').innerText = text;
}

function getPetStage() {
  const lv = Math.min(4, Math.floor(petExp / 3) + 1);
  return { lv, ...petStages[lv - 1] };
}

function updateUI() {
  document.getElementById('mage-hp-text').innerText = mage.hp;
  document.getElementById('mage-hp-bar').style.width = (mage.hp / mage.maxHp * 100) + '%';
  document.getElementById('mage-mp-text').innerText = mage.mp;
  document.getElementById('mage-mp-bar').style.width = (mage.mp / mage.maxMp * 100) + '%';

  document.getElementById('warrior-hp-text').innerText = warrior.hp;
  document.getElementById('warrior-hp-bar').style.width = (warrior.hp / warrior.maxHp * 100) + '%';
  document.getElementById('warrior-rage-text').innerText = warrior.rage;
  document.getElementById('warrior-rage-bar').style.width = (warrior.rage / warrior.maxRage * 100) + '%';

  document.getElementById('gold-text').innerText = gold;

  const pet = getPetStage();
  document.getElementById('pet-icon').innerText = pet.icon;
  document.getElementById('pet-name').innerText = pet.name;
  document.getElementById('pet-lv').innerText = pet.lv;

  const comboBadge = document.getElementById('combo-badge');
  if (comboCount >= 2) {
    comboBadge.style.display = 'inline-block';
    comboBadge.innerText = `🔥 ${comboCount} COMBO`;
  } else {
    comboBadge.style.display = 'none';
  }

  const feverBadge = document.getElementById('fever-badge');
  const container = document.querySelector('.game-container');
  if (feverTurns > 0) {
    feverBadge.style.display = 'inline-block';
    feverBadge.innerText = `🌟 FEVER (${feverTurns}턴 남음)`;
    container.classList.add('fever-active');
  } else {
    feverBadge.style.display = 'none';
    container.classList.remove('fever-active');
  }
}

function triggerShake(cardId) {
  const card = document.getElementById(cardId);
  card.classList.remove('shake');
  void card.offsetWidth;
  card.classList.add('shake');
}

function speakWord(wordText) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(wordText);
    utter.lang = 'en-US';
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  }
}

function speakCurrentWord() {
  if (currentQuiz && currentQuiz.targetWord) {
    speakWord(currentQuiz.targetWord.w);
  }
}

function log(message) {
  const logBox = document.getElementById('battle-log');
  logBox.innerHTML = `<div>${message}</div>` + logBox.innerHTML;
}

// 미니 상점 아이템 구매 및 사용
function buyAndUseItem(type) {
  if (isGameOver) return;
  if (type === 'potion') {
    if (gold < 30) return alert('골드가 부족합니다! (필요: 30G)');
    if (mage.hp >= mage.maxHp) return alert('이미 체력이 가득 찼습니다!');
    gold -= 30;
    mage.hp = Math.min(mage.maxHp, mage.hp + 40);
    log(`🧪 <b>체력 물약</b>을 마셔 HP가 40 회복되었습니다!`);
    updateUI();
  } else if (type === 'double') {
    if (gold < 40) return alert('골드가 부족합니다! (필요: 40G)');
    if (doubleDamageActive) return alert('이미 더블 공격 주문서가 적용되어 있습니다!');
    gold -= 40;
    doubleDamageActive = true;
    log(`📜 <b>더블 공격 주문서</b> 발동! 다음 공격 데미지가 2배가 됩니다!`);
    updateUI();
  }
}

// 힌트 돋보기 (오답 2개 지우기)
function useHintMagnifier() {
  if (!currentQuiz || currentQuiz.type !== 'choice') return alert('객관식 문제에서만 사용할 수 있습니다!');
  if (gold < 20) return alert('골드가 부족합니다! (필요: 20G)');

  const buttons = Array.from(document.querySelectorAll('#quiz-options button'));
  const wrongButtons = buttons.filter((btn, idx) => idx !== currentQuiz.answer && !btn.disabled);
  if (wrongButtons.length < 2) return alert('이미 힌트를 사용했습니다!');

  gold -= 20;
  wrongButtons.sort(() => 0.5 - Math.random()).slice(0, 2).forEach(btn => {
    btn.disabled = true;
    btn.innerText = "❌ (힌트로 제거됨)";
  });
  updateUI();
}

function generateQuestion(skill) {
  const grade = document.getElementById('grade-select').value;
  const allGradeWords = vocabDict[grade];
  const target = activeQuizPool[Math.floor(Math.random() * activeQuizPool.length)];

  if (skill === 'thunder') {
    return {
      type: 'spelling',
      targetWord: target,
      q: `뜻: "${target.m}" → 영어 철자를 입력하세요!`,
      pos: `[${target.pos} / ${target.w.length}글자]`
    };
  }

  const wrongPool = allGradeWords.filter(item => item.w !== target.w);
  const shuffledWrong = wrongPool.sort(() => 0.5 - Math.random()).slice(0, 3);
  const options = [target.m, ...shuffledWrong.map(item => item.m)].sort(() => 0.5 - Math.random());
  const answerIdx = options.indexOf(target.m);

  return {
    type: 'choice',
    targetWord: target,
    q: `'${target.w}'의 뜻으로 알맞은 것은?`,
    pos: `[${target.pos}]`,
    options: options,
    answer: answerIdx
  };
}

function startSpeedTimer() {
  clearInterval(timerInterval);
  questionStartTime = Date.now();
  const bar = document.getElementById('timer-bar');
  bar.style.width = '100%';

  timerInterval = setInterval(() => {
    const elapsed = (Date.now() - questionStartTime) / 1000;
    const remainRatio = Math.max(0, 1 - elapsed / 5);
    bar.style.width = (remainRatio * 100) + '%';
    if (remainRatio <= 0) clearInterval(timerInterval);
  }, 100);
}

function openQuiz(skill) {
  if (isGameOver) return;

  const isFree = feverTurns > 0;
  if (!isFree) {
    if (skill === 'fireball' && mage.mp < 20) return alert('마나가 부족합니다! (필요 MP: 20)');
    if (skill === 'thunder' && mage.mp < 30) return alert('마나가 부족합니다! (필요 MP: 30)');
    if (skill === 'heal' && mage.mp < 25) return alert('마나가 부족합니다! (필요 MP: 25)');
  }

  currentSkill = skill;
  currentQuiz = generateQuestion(skill);

  const skillNames = {
    fireball: '🔥 파이어볼 영창 퀴즈',
    thunder: '⚡ 썬더 스트라이크 (스펠링 필살기!)',
    heal: '💚 힐링 영창 퀴즈',
    meditate: '✨ 마나 회복 명상 퀴즈'
  };

  document.getElementById('quiz-skill-name').innerText = skillNames[skill];
  document.getElementById('quiz-pos').innerText = currentQuiz.pos;
  document.getElementById('quiz-question').innerText = currentQuiz.q;

  const optionsDiv = document.getElementById('quiz-options');
  const spellingBox = document.getElementById('spelling-box');
  const hintBtn = document.getElementById('hint-btn');

  if (currentQuiz.type === 'spelling') {
    optionsDiv.style.display = 'none';
    spellingBox.style.display = 'flex';
    hintBtn.style.display = 'none';
    const input = document.getElementById('spelling-input');
    input.value = '';
    setTimeout(() => input.focus(), 50);
  } else {
    spellingBox.style.display = 'none';
    optionsDiv.style.display = 'grid';
    hintBtn.style.display = 'inline-block';
    optionsDiv.innerHTML = '';
    currentQuiz.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.innerText = `${idx + 1}. ${opt}`;
      btn.onclick = () => submitAnswer(idx);
      optionsDiv.appendChild(btn);
    });
    speakWord(currentQuiz.targetWord.w);
  }

  document.getElementById('controls').style.display = 'none';
  document.getElementById('quiz-box').style.display = 'block';
  startSpeedTimer();
}

function submitAnswer(selectedIdx) {
  clearInterval(timerInterval);
  const elapsedSec = (Date.now() - questionStartTime) / 1000;
  document.getElementById('quiz-box').style.display = 'none';
  document.getElementById('controls').style.display = 'block';

  if (selectedIdx === currentQuiz.answer) {
    handleCorrectAnswer(elapsedSec <= 5);
  } else {
    handleWrongAnswer();
  }
}

function submitSpelling() {
  const userText = document.getElementById('spelling-input').value.trim().toLowerCase();
  if (!userText) return;

  clearInterval(timerInterval);
  const elapsedSec = (Date.now() - questionStartTime) / 1000;
  document.getElementById('quiz-box').style.display = 'none';
  document.getElementById('controls').style.display = 'block';

  if (userText === currentQuiz.targetWord.w.toLowerCase()) {
    speakWord(currentQuiz.targetWord.w);
    handleCorrectAnswer(elapsedSec <= 7);
  } else {
    handleWrongAnswer();
  }
}

function registerToDex(wordObj) {
  if (!collectedWords.some(item => item.w === wordObj.w)) {
    collectedWords.push(wordObj);
    localStorage.setItem('elem_rpg_dex', JSON.stringify(collectedWords));
    updateDexUI();
  }
}

function updateDexUI() {
  document.getElementById('collection-summary').innerText = `📖 도감 수집: ${collectedWords.length}개`;
  const btn = document.getElementById('dex-count-btn');
  if (btn) btn.innerText = collectedWords.length;
}

function handleCorrectAnswer(isSpeedCrit) {
  comboCount++;
  gold += 10;
  const prevLv = getPetStage().lv;
  petExp++;
  const newPet = getPetStage();

  registerToDex(currentQuiz.targetWord);

  if (newPet.lv > prevLv) {
    log(`🎉 <b>축하합니다! 펫이 [${newPet.icon} ${newPet.name}](으)로 진화했습니다!</b>`);
  }

  if (comboCount === 5) {
    feverTurns = 2;
    log(`🌟 <b>5연속 정답! 피버 타임 발동! 2턴간 마나 소모 0!</b>`);
  }

  setMonsterSpeech("으악! 네 영어 실력이 너무 강하다!");
  log(`⭕ <b>정답!</b> (${currentQuiz.targetWord.w} = ${currentQuiz.targetWord.m}) [+10G]`);
  executeSkill(currentSkill, isSpeedCrit);
}

function handleWrongAnswer() {
  comboCount = 0;
  feverTurns = 0;
  const target = currentQuiz.targetWord;
  if (!wrongWords.some(item => item.w === target.w)) {
    wrongWords.push(target);
  }
  setMonsterSpeech("크크크! 스펠링과 뜻을 헷갈렸군!");
  log(`❌ <b>오답!</b> 정답은 <b>${target.w} (${target.m})</b> 입니다.`);
  if (currentSkill === 'fireball') mage.mp = Math.max(0, mage.mp - 10);
  if (currentSkill === 'thunder') mage.mp = Math.max(0, mage.mp - 15);
  if (currentSkill === 'heal') mage.mp = Math.max(0, mage.mp - 10);
  updateUI();
  setTimeout(warriorTurn, 600);
}

function executeSkill(skill, isSpeedCrit) {
  const isFree = feverTurns > 0;
  if (feverTurns > 0) feverTurns--;

  const comboBonus = comboCount >= 2 ? (comboCount - 1) * 4 : 0;
  const mageJobBonus = selectedHero === 'mage' ? 5 : 0;
  const critChance = selectedHero === 'archer' ? 0.45 : 0.2;
  const isCrit = isSpeedCrit || Math.random() < critChance;

  let baseDmg = 0;
  if (skill === 'fireball') {
    if (!isFree) mage.mp -= 20;
    baseDmg = Math.floor(Math.random() * 10) + 18 + comboBonus + mageJobBonus;
  } else if (skill === 'thunder') {
    if (!isFree) mage.mp -= 30;
    baseDmg = Math.floor(Math.random() * 14) + 32 + comboBonus + mageJobBonus;
  } else if (skill === 'heal') {
    if (!isFree) mage.mp -= 25;
    const heal = 35 + comboBonus;
    mage.hp = Math.min(mage.maxHp, mage.hp + heal);
    log(`💚 치유 마법 성공! 체력을 <b>${heal}</b> 회복했습니다.`);
  } else if (skill === 'meditate') {
    mage.mp = Math.min(mage.maxMp, mage.mp + 40);
    log(`✨ 깊은 명상으로 마나를 <b>40</b> 회복했습니다.`);
  }

  if (baseDmg > 0) {
    if (isCrit) baseDmg = Math.floor(baseDmg * 1.5);
    if (doubleDamageActive) {
      baseDmg *= 2;
      doubleDamageActive = false;
    }
    warrior.hp = Math.max(0, warrior.hp - baseDmg);
    warrior.rage = Math.min(100, warrior.rage + 25);
    triggerShake('warrior-card');
    log(`${skill === 'thunder' ? '⚡' : '🔥'} 적에게 <b>${baseDmg}</b>의 피해! ${isSpeedCrit ? '⚡<b>SPEED CRITICAL!</b>' : (isCrit ? '💥<b>치명타!</b>' : '')}`);
  }

  // 동료 펫 추가 공격
  const pet = getPetStage();
  if (pet.dmg > 0 && warrior.hp > 0) {
    warrior.hp = Math.max(0, warrior.hp - pet.dmg);
    log(`${pet.icon} 동료 <b>${pet.name}</b>의 추가 공격! <b>${pet.dmg}</b> 데미지!`);
  }

  updateUI();
  if (checkWinner()) return;
  setTimeout(warriorTurn, 650);
}

function warriorTurn() {
  if (isGameOver) return;

  triggerShake('mage-card');
  const defenseBonus = selectedHero === 'paladin' ? 4 : 0;

  if (warrior.rage >= 100) {
    warrior.rage = 0;
    const dmg = Math.max(5, 36 - defenseBonus);
    mage.hp = Math.max(0, mage.hp - dmg);
    setMonsterSpeech("받아라! 나의 필살기!");
    log(`💥 몬스터의 분노 폭발! <b>${dmg}</b>의 강력한 피해를 입었습니다!`);
  } else {
    const rawDmg = Math.floor(Math.random() * 10) + 12;
    const dmg = Math.max(4, rawDmg - defenseBonus);
    mage.hp = Math.max(0, mage.hp - dmg);
    warrior.rage = Math.min(100, warrior.rage + 20);
    log(`⚔️ 몬스터의 반격! <b>${dmg}</b>의 피해를 입었습니다.`);
  }

  updateUI();
  checkWinner();
}

function checkWinner() {
  if (warrior.hp <= 0) {
    gold += 50;
    setMonsterSpeech("끄아악... 네 영어 실력에 졌다...");
    log(`🎉 <b>승리! 보상으로 +50G를 획득했습니다!</b>`);
    endGame();
    return true;
  }
  if (mage.hp <= 0) {
    setMonsterSpeech("하하하! 단어를 더 외우고 다시 오너라!");
    log(`💀 <b>패배... 아래 오답 노트를 복습하고 다시 도전하세요!</b>`);
    endGame();
    return true;
  }
  return false;
}

function endGame() {
  isGameOver = true;
  updateUI();
  document.getElementById('controls').style.display = 'none';
  document.getElementById('quiz-box').style.display = 'none';
  document.getElementById('result-panel').style.display = 'block';

  const notesBox = document.getElementById('wrong-notes-box');
  if (wrongWords.length === 0) {
    notesBox.innerHTML = `<h4>🏆 퍼펙트 클리어! 틀린 단어가 하나도 없습니다!</h4>`;
  } else {
    const listHtml = wrongWords.map(item => `<li><b>${item.w}</b> : ${item.m} (${item.pos})</li>`).join('');
    notesBox.innerHTML = `<h4>📝 오늘의 오답 복습 노트 (${wrongWords.length}개)</h4><ul>${listHtml}</ul>`;
  }
}

// 단어 도감 열기/닫기
function openDexModal() {
  const grid = document.getElementById('dex-grid');
  if (collectedWords.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; color:#a8b2d1;">아직 수집한 단어가 없습니다. 퀴즈를 맞혀 도감을 채워보세요!</p>`;
  } else {
    grid.innerHTML = collectedWords.map(item => `
      <div class="dex-card" onclick="speakWord('${item.w}')" style="cursor:pointer;" title="클릭하면 발음 재생">
        <b>${item.w} 🔊</b>
        <span>${item.m}</span>
      </div>
    `).join('');
  }
  document.getElementById('dex-modal').style.display = 'flex';
}

function closeDexModal() {
  document.getElementById('dex-modal').style.display = 'none';
}

initSelectors();
