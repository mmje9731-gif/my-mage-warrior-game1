// 🎨 영웅 일러스트 & 아바타 티어별 진화 + 무기 강화 이펙트 렌더러
function getHeroSvg(job, avatarTier) {
  const wLv = typeof state !== "undefined" ? state.weaponLv : 0;

  // 1~2티어는 기본 일러스트, 3~4티어는 각성 일러스트로 자동 진화!
  const heroImages = {
    archer: {
      base: "archer.png",
      awakened: "archer_awakened.png"
    },
    mage: {
      base: "mage.png",
      awakened: "mage_awakened.png"
    },
    paladin: {
      base: "paladin.png",
      awakened: "paladin.awakened.png" // 업로드된 실제 파일명 반영
    }
  };

  const isAwakened = avatarTier >= 3;
  const imgFile = isAwakened ? heroImages[job].awakened : heroImages[job].base;

  // 티어 및 무기 강화에 따른 테두리 & 후광 이펙트
  let frameStyle = "border: 2px solid rgba(255, 255, 255, 0.25);";
  if (avatarTier === 2) {
    frameStyle = "border: 3px solid #ffd54f; box-shadow: 0 0 14px rgba(255, 213, 79, 0.75);";
  } else if (avatarTier === 3) {
    frameStyle = "border: 3px solid #ff9100; box-shadow: 0 0 20px rgba(255, 145, 0, 0.9);";
  } else if (avatarTier >= 4) {
    frameStyle = "border: 3px solid #00e5ff; box-shadow: 0 0 26px rgba(0, 229, 255, 1), inset 0 0 12px rgba(255, 215, 0, 0.6);";
  }

  // 무기 +5강 이상일 경우 신화 무기 불꽃 광채 추가
  if (wLv >= 5) {
    frameStyle += " outline: 2px solid #ff5252; outline-offset: 2px;";
  }

  // 티어 뱃지 & 무기 강화 뱃지 오버레이
  const tierBadge = avatarTier >= 2
    ? `<span style="position:absolute; top:5px; left:5px; background:linear-gradient(135deg,#ffd54f,#ff8f00); color:#1a1a2e; font-size:10px; font-weight:900; padding:2px 6px; border-radius:6px; box-shadow:0 2px 6px rgba(0,0,0,0.6);">
        ${avatarTier === 4 ? "👑 MAX 각성" : avatarTier === 3 ? "🪽 각성" : "👑 왕관"}
       </span>`
    : "";

  const weaponBadge = wLv > 0
    ? `<span style="position:absolute; bottom:5px; right:5px; background:rgba(15,23,42,0.85); color:${wLv >= 5 ? "#ff8a80" : "#ffd54f"}; border:1px solid ${wLv >= 5 ? "#ff5252" : "#ffd54f"}; font-size:10px; font-weight:bold; padding:2px 6px; border-radius:6px;">
        ⚔️ +${wLv}
       </span>`
    : "";

  return `
    <div style="position:relative; width:100%; height:100%; border-radius:14px; overflow:hidden; ${frameStyle}">
      <img src="./${imgFile}" alt="${job}" style="width:100%; height:100%; object-fit:cover; display:block;">
      ${tierBadge}
      ${weaponBadge}
    </div>`;
}

// 👾 8종 몬스터 고화질 일러스트 매핑 (업로드된 실제 파일명 반영)
const monsterImages = {
  slime: "slime.png",
  bat: "bat.png",
  orc: "orc.png",
  ghost: "ghost.png",
  golem: "gelem.png",
  darkmage: "darkmage.png",
  werewolf: "wearwof.png",
  dragon: "dragon.png"
};

function getMonsterHtml(artKey, isBoss) {
  const file = monsterImages[artKey] || "slime.png";
  const bossStyle = isBoss
    ? "border: 3px solid #ff1744; box-shadow: 0 0 22px rgba(255, 23, 68, 0.85);"
    : "border: 2px solid rgba(255, 82, 82, 0.4); box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);";

  return `
    <div style="position:relative; width:100%; height:100%; border-radius:14px; overflow:hidden; ${bossStyle}">
      <img src="./${file}" alt="${artKey}" style="width:100%; height:100%; object-fit:cover; display:block;">
    </div>`;
}

const monsterRoster = [
  { art: "slime", name: "슬라임 킹", baseHp: 110, baseAtk: 11 },
  { art: "bat", name: "어둠의 박쥐왕", baseHp: 125, baseAtk: 13 },
  { art: "orc", name: "숲속의 오크", baseHp: 140, baseAtk: 15 },
  { art: "ghost", name: "유령 해적선장", baseHp: 155, baseAtk: 16 },
  { art: "golem", name: "얼음 골렘", baseHp: 175, baseAtk: 18 },
  { art: "darkmage", name: "어둠의 흑마법사", baseHp: 195, baseAtk: 20 },
  { art: "werewolf", name: "황금 늑대인간", baseHp: 215, baseAtk: 22 },
  { art: "dragon", name: "레드 드래곤", baseHp: 240, baseAtk: 25 }
];

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

// ==========================================
// ⚔️ 게임 상태 & 직업/장비 설정 데이터
// ==========================================
const jobMeta = {
  archer: { title: "바람의 궁수", icon: "🏹", weapons: ["참나무 활", "정령의 장궁", "천공의 황금활"], baseHp: 100, baseAtk: 22 },
  mage: { title: "영어 마법사", icon: "🪄", weapons: ["견습생 지팡이", "아크메이지 스태프", "별빛 현자의 지팡이"], baseHp: 90, baseAtk: 25 },
  paladin: { title: "빛의 성기사", icon: "⚔️", weapons: ["수련용 대검", "기사의 성검", "태양신 엑스칼리버"], baseHp: 120, baseAtk: 20 }
};

function getWeaponName(job, wLv) {
  const list = jobMeta[job].weapons;
  if (wLv >= 5) return list[2];
  if (wLv >= 2) return list[1];
  return list[0];
}

const avatarTiers = [
  { tier: 1, name: "Tier 1 · 초보 모험가 복장", desc: "기본 모험가 의상입니다.", hpBonus: 0, defBonus: 0, cost: 60 },
  { tier: 2, name: "Tier 2 · 황금 왕관 예복", desc: "황금 왕관 뱃지와 황금빛 오라 테두리가 적용됩니다.", hpBonus: 25, defBonus: 2, cost: 120 },
  { tier: 3, name: "Tier 3 · 각성 영웅의 갑주", desc: "각성 일러스트로 진화하며 영웅의 날개가 펼쳐집니다!", hpBonus: 60, defBonus: 5, cost: 200 },
  { tier: 4, name: "Tier 4 · 천사의 날개 성의", desc: "전설의 청색 신성 오라와 최고 등급 능력치가 부여됩니다!", hpBonus: 110, defBonus: 9, cost: 0 }
];

let state = {
  job: "archer",
  grade: "3학년",
  pub: "YBM(최)",
  lesson: "ALL",
  stage: 1,
  gold: 50,
  lv: 1,
  exp: 0,
  maxExp: 100,
  weaponLv: 0,
  avatarTier: 1,
  hp: 100,
  maxHp: 100,
  mp: 100,
  maxMp: 100,
  monsterHp: 110,
  monsterMaxHp: 110,
  monsterAtk: 11,
  monsterRage: 0,
  combo: 0,
  doubleDmg: false,
  currentSkill: "fireball",
  currentWord: null,
  pool: [],
  dex: new Set(),
  wrongNotes: [],
  timerId: null
};

// ==========================================
// 🚀 초기화 및 로비 UI 컨트롤
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
  onGradeChange();
  updateLobbyUI();
});

function selectHero(job) {
  state.job = job;
  document.querySelectorAll(".hero-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`hero-${job}`);
  if (activeBtn) activeBtn.classList.add("active");
  updateLobbyUI();
}

function onGradeChange() {
  const gradeEl = document.getElementById("grade-select");
  const pubEl = document.getElementById("pub-select");
  const lessonEl = document.getElementById("lesson-select");
  if (!gradeEl) return;

  state.grade = gradeEl.value;
  const pubs = publishersByGrade[state.grade] || [];
  pubEl.innerHTML = pubs.map(p => `<option value="${p}">${p}</option>`).join("");
  state.pub = pubEl.value;

  if (lessonEl.options.length === 0) {
    lessonEl.innerHTML = lessonsList.map(l => `<option value="${l.id}">${l.name}</option>`).join("");
  }
  state.lesson = lessonEl.value;
  updateWordPool();
}

function onPubChange() {
  state.pub = document.getElementById("pub-select").value;
}

function onLessonChange() {
  state.lesson = document.getElementById("lesson-select").value;
  updateWordPool();
}

function updateWordPool() {
  const allWords = vocabDict[state.grade] || [];
  state.pool = state.lesson === "ALL"
    ? [...allWords]
    : allWords.filter(item => item.l.includes(state.lesson));

  const countEl = document.getElementById("word-count-info");
  if (countEl) {
    countEl.textContent = `출제 가능 어휘: ${state.pool.length}개`;
  }
}

function updateLobbyUI() {
  const meta = jobMeta[state.job];
  const tierObj = avatarTiers[state.avatarTier - 1];
  const atkBonus = state.weaponLv * 5;
  const wName = getWeaponName(state.job, state.weaponLv);

  document.getElementById("hud-stage").textContent = `STAGE ${state.stage}`;
  document.getElementById("hud-gold").textContent = state.gold;
  document.getElementById("hud-dex").textContent = state.dex.size;

  document.getElementById("lobby-hero-art").innerHTML = getHeroSvg(state.job, state.avatarTier);
  document.getElementById("menu-hero-lv").textContent = state.lv;
  document.getElementById("menu-avatar-tier").textContent = tierObj.name.split(" · ")[1];
  document.getElementById("menu-hero-title").textContent = meta.title;
  document.getElementById("menu-weapon-info").textContent = `${meta.icon} ${wName} (+${state.weaponLv}) · 공격력 +${atkBonus}`;
}

// ==========================================
// ⚔️ 전투 스테이지 진입 및 UI 갱신
// ==========================================
function startGame() {
  if (state.pool.length === 0) {
    alert("출제 가능 어휘가 없습니다. 다른 학년이나 단원을 선택해주세요!");
    return;
  }

  const meta = jobMeta[state.job];
  const tierObj = avatarTiers[state.avatarTier - 1];
  state.maxHp = meta.baseHp + (state.lv - 1) * 15 + tierObj.hpBonus;
  state.hp = state.maxHp;
  state.maxMp = 100;
  state.mp = 100;
  state.combo = 0;
  state.doubleDmg = false;
  state.wrongNotes = [];

  const monIdx = (state.stage - 1) % monsterRoster.length;
  const mon = monsterRoster[monIdx];
  const isBoss = mon.art === "dragon" || state.stage % 4 === 0;
  const loopScale = 1 + Math.floor((state.stage - 1) / monsterRoster.length) * 0.35;

  state.monsterMaxHp = Math.round(mon.baseHp * loopScale);
  state.monsterHp = state.monsterMaxHp;
  state.monsterAtk = Math.round(mon.baseAtk * loopScale);
  state.monsterRage = 0;

  document.getElementById("selector-panel").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  document.getElementById("result-panel").style.display = "none";
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("controls").style.display = "block";
  document.getElementById("battle-log").innerHTML = "";

  const lessonName = state.lesson === "ALL" ? "전체 단원" : state.lesson;
  document.getElementById("current-scope-badge").textContent = `${state.grade} | ${state.pub} | ${lessonName}`;
  document.getElementById("hero-art-box").innerHTML = getHeroSvg(state.job, state.avatarTier);
  document.getElementById("monster-art-box").innerHTML = getMonsterHtml(mon.art, isBoss);
  document.getElementById("monster-name").textContent = `STAGE ${state.stage} · ${mon.name}`;
  document.getElementById("monster-speech").textContent = "덤벼라, 꼬마 영웅!";

  updateBattleBars();
  addLog(`⚔️ STAGE ${state.stage} 시작! 야생의 [${mon.name}]이(가) 나타났다!`);
}

function backToMenu() {
  clearInterval(state.timerId);
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("selector-panel").style.display = "block";
  updateLobbyUI();
}

function updateBattleBars() {
  const meta = jobMeta[state.job];
  const wName = getWeaponName(state.job, state.weaponLv);

  document.getElementById("hud-stage").textContent = `STAGE ${state.stage}`;
  document.getElementById("hud-gold").textContent = state.gold;
  document.getElementById("hud-dex").textContent = state.dex.size;

  document.getElementById("hero-lv-text").textContent = state.lv;
  document.getElementById("hero-title").textContent = meta.title;
  document.getElementById("weapon-tag").textContent = `${meta.icon} ${wName} (+${state.weaponLv})`;

  document.getElementById("mage-hp-text").textContent = state.hp;
  document.getElementById("mage-maxhp-text").textContent = state.maxHp;
  document.getElementById("mage-hp-bar").style.width = `${(state.hp / state.maxHp) * 100}%`;

  document.getElementById("mage-mp-text").textContent = state.mp;
  document.getElementById("mage-maxmp-text").textContent = state.maxMp;
  document.getElementById("mage-mp-bar").style.width = `${(state.mp / state.maxMp) * 100}%`;

  document.getElementById("hero-exp-text").textContent = state.exp;
  document.getElementById("hero-maxexp-text").textContent = state.maxExp;
  document.getElementById("hero-exp-bar").style.width = `${(state.exp / state.maxExp) * 100}%`;

  document.getElementById("warrior-hp-text").textContent = state.monsterHp;
  document.getElementById("warrior-maxhp-text").textContent = state.monsterMaxHp;
  document.getElementById("warrior-hp-bar").style.width = `${(state.monsterHp / state.monsterMaxHp) * 100}%`;

  document.getElementById("warrior-rage-text").textContent = state.monsterRage;
  document.getElementById("warrior-rage-bar").style.width = `${state.monsterRage}%`;

  const comboBadge = document.getElementById("combo-badge");
  const feverBadge = document.getElementById("fever-badge");
  if (state.combo >= 2) {
    comboBadge.style.display = "inline-block";
    comboBadge.textContent = `🔥 ${state.combo} COMBO`;
  } else {
    comboBadge.style.display = "none";
  }

  if (state.combo >= 3) {
    feverBadge.style.display = "inline-block";
    feverBadge.textContent = `🌟 FEVER (공격력 1.5배!)`;
  } else {
    feverBadge.style.display = "none";
  }

  const petIcon = document.getElementById("pet-icon");
  const petName = document.getElementById("pet-name");
  const petLv = document.getElementById("pet-lv");
  petLv.textContent = state.lv;
  if (state.lv >= 5) {
    petIcon.textContent = "🐉";
    petName.textContent = "황금 아기용";
  } else if (state.lv >= 3) {
    petIcon.textContent = "🐣";
    petName.textContent = "용감한 병아리";
  } else {
    petIcon.textContent = "🥚";
    petName.textContent = "신비한 알";
  }
}

function addLog(msg) {
  const logBox = document.getElementById("battle-log");
  const p = document.createElement("div");
  p.textContent = msg;
  logBox.prepend(p);
}

// ==========================================
// 🎯 스킬 사용 및 영어 퀴즈 출제
// ==========================================
function openQuiz(skillType) {
  if (skillType === "meditate") {
    const recover = 40;
    state.mp = Math.min(state.maxMp, state.mp + recover);
    addLog(`✨ 마나 명상으로 MP를 ${recover} 회복했습니다!`);
    updateBattleBars();
    monsterTurn();
    return;
  }

  const mpCost = skillType === "fireball" ? 20 : skillType === "thunder" ? 30 : 25;
  if (state.mp < mpCost) {
    alert(`MP가 부족합니다! (필요 MP: ${mpCost}) '마나 명상'으로 MP를 회복하세요.`);
    return;
  }

  state.mp -= mpCost;
  state.currentSkill = skillType;
  updateBattleBars();

  const target = state.pool[Math.floor(Math.random() * state.pool.length)];
  state.currentWord = target;

  document.getElementById("controls").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("hint-btn").disabled = false;
  document.getElementById("hint-btn").textContent = "🔍 힌트 (20G)";

  const skillNames = {
    fireball: "🔥 기본 공격 퀴즈",
    thunder: "⚡ 필살기 강타 (철자 입력)",
    heal: "💚 치유 마법 퀴즈"
  };
  document.getElementById("quiz-skill-name").textContent = skillNames[skillType];
  document.getElementById("quiz-pos").textContent = `[${target.pos}]`;

  const optionsBox = document.getElementById("quiz-options");
  const spellingBox = document.getElementById("spelling-box");

  if (skillType === "thunder") {
    document.getElementById("quiz-question").textContent = `뜻: "${target.m}" → 영어 철자를 입력하세요!`;
    optionsBox.style.display = "none";
    spellingBox.style.display = "flex";
    const input = document.getElementById("spelling-input");
    input.value = "";
    input.focus();
  } else {
    document.getElementById("quiz-question").textContent = target.w;
    speakCurrentWord();
    spellingBox.style.display = "none";
    optionsBox.style.display = "grid";

    const allGradeWords = vocabDict[state.grade];
    const distractors = allGradeWords
      .filter(item => item.w !== target.w)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const choices = [target, ...distractors].sort(() => Math.random() - 0.5);

    optionsBox.innerHTML = choices
      .map(c => `<button class="option-btn" onclick="checkQuizAnswer('${c.w}')">${c.m}</button>`)
      .join("");
  }

  startQuizTimer(12);
}

function startQuizTimer(seconds) {
  clearInterval(state.timerId);
  const bar = document.getElementById("timer-bar");
  let left = seconds * 10;
  const total = left;
  bar.style.width = "100%";

  state.timerId = setInterval(() => {
    left--;
    bar.style.width = `${(left / total) * 100}%`;
    if (left <= 0) {
      clearInterval(state.timerId);
      handleWrongAnswer("시간 초과!");
    }
  }, 100);
}

function checkQuizAnswer(selectedWord) {
  clearInterval(state.timerId);
  if (selectedWord === state.currentWord.w) {
    handleCorrectAnswer();
  } else {
    handleWrongAnswer(`오답! 정답은 '${state.currentWord.m}'`);
  }
}

function submitSpelling() {
  clearInterval(state.timerId);
  const val = document.getElementById("spelling-input").value.trim().toLowerCase();
  if (val === state.currentWord.w.toLowerCase()) {
    handleCorrectAnswer();
  } else {
    handleWrongAnswer(`오답! 정답 철자는 '${state.currentWord.w}'`);
  }
}

function handleCorrectAnswer() {
  state.combo++;
  state.dex.add(state.currentWord.w);

  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("controls").style.display = "block";

  if (state.currentSkill === "heal") {
    const healAmt = 45 + state.lv * 5;
    state.hp = Math.min(state.maxHp, state.hp + healAmt);
    addLog(`💚 치유 마법 성공! 체력을 ${healAmt} 회복했습니다!`);
    updateBattleBars();
    monsterTurn();
    return;
  }

  const meta = jobMeta[state.job];
  let dmg = meta.baseAtk + state.weaponLv * 5 + (state.lv - 1) * 4;
  if (state.currentSkill === "thunder") dmg = Math.round(dmg * 1.6);
  if (state.job === "mage") dmg += 5;
  if (state.combo >= 3) dmg = Math.round(dmg * 1.5);
  if (state.doubleDmg) {
    dmg *= 2;
    state.doubleDmg = false;
  }

  const critChance = state.job === "archer" ? 0.45 : 0.22;
  const isCrit = Math.random() < critChance;
  if (isCrit) dmg = Math.round(dmg * 1.5);

  state.monsterHp = Math.max(0, state.monsterHp - dmg);
  state.monsterRage = Math.min(100, state.monsterRage + 25);

  addLog(`${isCrit ? "💥 치명타! " : "⚔️ "}정답(${state.currentWord.w})! 몬스터에게 ${dmg} 데미지!`);
  updateBattleBars();

  if (state.monsterHp <= 0) {
    winBattle();
  } else {
    setTimeout(monsterTurn, 500);
  }
}

function handleWrongAnswer(reason) {
  state.combo = 0;
  if (!state.wrongNotes.some(w => w.w === state.currentWord.w)) {
    state.wrongNotes.push(state.currentWord);
  }

  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("controls").style.display = "block";
  addLog(`❌ ${reason}`);
  updateBattleBars();
  setTimeout(monsterTurn, 500);
}

function monsterTurn() {
  if (state.monsterHp <= 0) return;

  const tierObj = avatarTiers[state.avatarTier - 1];
  let dmg = state.monsterAtk;
  let msg = "몬스터의 반격!";

  if (state.monsterRage >= 100) {
    dmg = Math.round(dmg * 1.7);
    state.monsterRage = 0;
    msg = "🔥 몬스터의 분노 폭발 강타!";
    document.getElementById("monster-speech").textContent = "크아앙! 받아라 필살기!";
  }

  dmg -= tierObj.defBonus;
  if (state.job === "paladin") dmg -= 4;
  dmg = Math.max(2, dmg);

  state.hp = Math.max(0, state.hp - dmg);
  addLog(`👾 ${msg} 영웅이 ${dmg}의 피해를 입었습니다.`);
  updateBattleBars();

  if (state.hp <= 0) {
    loseBattle();
  }
}

function winBattle() {
  const goldReward = 35 + state.stage * 10;
  const expReward = 55;
  state.gold += goldReward;
  state.exp += expReward;

  let lvMsg = "";
  if (state.exp >= state.maxExp) {
    state.lv++;
    state.exp -= state.maxExp;
    state.maxExp = Math.round(state.maxExp * 1.2);
    lvMsg = ` 🎉 레벨 업! (Lv.${state.lv})`;
  }

  addLog(`🏆 승리! +${goldReward}G, +${expReward} EXP 획득!${lvMsg}`);
  state.stage++;
  updateBattleBars();

  showResultPanel(true);
}

function loseBattle() {
  addLog(`💀 영웅이 쓰러졌습니다... 로비에서 장비나 아바타를 강화해보세요!`);
  showResultPanel(false);
}

function showResultPanel(isWin) {
  document.getElementById("controls").style.display = "none";
  const resultPanel = document.getElementById("result-panel");
  const notesBox = document.getElementById("wrong-notes-box");
  const restartBtn = document.getElementById("restart-btn");

  resultPanel.style.display = "block";
  restartBtn.textContent = isWin ? `🚀 STAGE ${state.stage} 도전!` : `🔄 현재 스테이지 재도전`;

  if (state.wrongNotes.length > 0) {
    notesBox.innerHTML = `<h4>📝 이번 전투 오답 노트</h4>` +
      state.wrongNotes.map(item => `<div>• <strong>${item.w}</strong> : ${item.m}</div>`).join("");
  } else {
    notesBox.innerHTML = `<h4>✨ 퍼펙트! 틀린 단어가 하나도 없습니다!</h4>`;
  }
}

// ==========================================
// 🔊 TTS 발음, 🔍 힌트, 🎒 퀵 아이템
// ==========================================
function speakCurrentWord() {
  if (!state.currentWord || !("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(state.currentWord.w);
  utter.lang = "en-US";
  utter.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function useHintMagnifier() {
  if (!state.currentWord) return;
  if (state.gold < 20) {
    alert("골드가 부족합니다! (20G 필요)");
    return;
  }
  state.gold -= 20;
  updateBattleBars();

  const btn = document.getElementById("hint-btn");
  btn.disabled = true;
  const w = state.currentWord.w;
  btn.textContent = `💡 첫 글자: '${w[0].toUpperCase()}' (${w.length}글자)`;
}

function buyAndUseItem(type) {
  if (type === "potion") {
    if (state.gold < 30) return alert("골드가 부족합니다! (30G 필요)");
    state.gold -= 30;
    state.hp = Math.min(state.maxHp, state.hp + 45);
    addLog("🧪 체력물약 사용! HP +45 회복!");
  } else if (type === "double") {
    if (state.gold < 40) return alert("골드가 부족합니다! (40G 필요)");
    if (state.doubleDmg) return alert("이미 더블데미지 효과가 적용 중입니다!");
    state.gold -= 40;
    state.doubleDmg = true;
    addLog("📜 더블데미지 주문서 발동! 다음 공격 피해량이 2배가 됩니다!");
  }
  updateBattleBars();
}

// ==========================================
// 🔨 대장간 / 👗 아바타 / 📖 도감 모달 기능
// ==========================================
function openForgeModal() {
  const meta = jobMeta[state.job];
  const cost = 40 + state.weaponLv * 30;
  const grades = ["일반 무기", "고급 무기", "희귀 무기", "영웅 무기", "전설 무기", "신화 무기"];
  const gradeName = grades[Math.min(grades.length - 1, Math.floor(state.weaponLv / 2))];
  const wName = getWeaponName(state.job, state.weaponLv);

  document.getElementById("forge-weapon-icon").textContent = meta.icon;
  document.getElementById("forge-weapon-name").textContent = `${wName} (+${state.weaponLv})`;
  document.getElementById("forge-weapon-grade").textContent = `등급: ${gradeName}`;
  document.getElementById("forge-cur-atk").textContent = state.weaponLv * 5;
  document.getElementById("forge-next-atk").textContent = (state.weaponLv + 1) * 5;
  document.getElementById("forge-cost-text").textContent = cost;

  document.getElementById("forge-modal").style.display = "flex";
}

function closeForgeModal() {
  document.getElementById("forge-modal").style.display = "none";
}

function upgradeWeapon() {
  const cost = 40 + state.weaponLv * 30;
  if (state.gold < cost) {
    alert(`골드가 부족합니다! (필요 골드: ${cost}G)`);
    return;
  }
  state.gold -= cost;
  state.weaponLv++;
  updateLobbyUI();
  updateBattleBars();
  openForgeModal();
}

function openAvatarModal() {
  const cur = avatarTiers[state.avatarTier - 1];
  const next = avatarTiers[state.avatarTier] || null;

  document.getElementById("avatar-modal-art").innerHTML = getHeroSvg(state.job, state.avatarTier);
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
    btn.textContent = "👑 최고 등급 아바타 달성!";
    btn.disabled = true;
  }

  document.getElementById("avatar-modal").style.display = "flex";
}

function closeAvatarModal() {
  document.getElementById("avatar-modal").style.display = "none";
}

function upgradeAvatar() {
  const cur = avatarTiers[state.avatarTier - 1];
  if (state.avatarTier >= avatarTiers.length) return;
  if (state.gold < cur.cost) {
    alert(`골드가 부족합니다! (필요 골드: ${cur.cost}G)`);
    return;
  }
  state.gold -= cur.cost;
  state.avatarTier++;
  updateLobbyUI();
  updateBattleBars();
  openAvatarModal();
}

function openDexModal() {
  const grid = document.getElementById("dex-grid");
  const allWords = Object.values(vocabDict).flat();

  grid.innerHTML = allWords
    .map(item => {
      const unlocked = state.dex.has(item.w);
      return `
        <div class="dex-card ${unlocked ? "unlocked" : "locked"}" onclick="${unlocked ? `speakWordDirect('${item.w}')` : ""}">
          <strong>${unlocked ? item.w : "???"}</strong>
          <small>${unlocked ? item.m : "미획득 단어"}</small>
        </div>`;
    })
    .join("");

  document.getElementById("dex-modal").style.display = "flex";
}

function closeDexModal() {
  document.getElementById("dex-modal").style.display = "none";
}

function speakWordDirect(word) {
  if (!("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = "en-US";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}
