// ==========================================
// 🔊 Web Audio API 효과음 생성기
// ==========================================
const audioCtx = typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext)
  ? new (window.AudioContext || window.webkitAudioContext)()
  : null;

function playSfx(type) {
  if (!audioCtx) return;
  if (audioCtx.state === "suspended") audioCtx.resume();

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  const now = audioCtx.currentTime;

  if (type === "hit") {
    osc.type = "triangle";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.15);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.start(now);
    osc.stop(now + 0.15);
  } else if (type === "crit") {
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(540, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.3);
    gain.gain.setValueAtTime(0.32, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  } else if (type === "hurt") {
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.linearRampToValueAtTime(65, now + 0.22);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
    osc.start(now);
    osc.stop(now + 0.22);
  } else if (type === "heal") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.start(now);
    osc.stop(now + 0.25);
  } else if (type === "win") {
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = "triangle";
      o.connect(g);
      g.connect(audioCtx.destination);
      o.frequency.setValueAtTime(freq, now + i * 0.09);
      g.gain.setValueAtTime(0.18, now + i * 0.09);
      g.gain.exponentialRampToValueAtTime(0.01, now + i * 0.09 + 0.25);
      o.start(now + i * 0.09);
      o.stop(now + i * 0.09 + 0.25);
    });
  }
}

// 💥 타격감 애니메이션 & 데미지 숫자 팝업
function triggerHitEffect(targetBoxId, text, color) {
  const box = document.getElementById(targetBoxId);
  if (!box) return;

  box.style.transition = "transform 0.06s";
  box.style.transform = "translateX(-8px) scale(0.96)";
  setTimeout(() => (box.style.transform = "translateX(8px) scale(1.03)"), 60);
  setTimeout(() => (box.style.transform = "translateX(0) scale(1)"), 130);

  const dmgEl = document.createElement("div");
  dmgEl.textContent = text;
  dmgEl.style.cssText = `
    position:absolute; top:30%; left:50%; transform:translate(-50%, -50%);
    color:${color}; font-size:22px; font-weight:900; text-shadow:0 2px 8px #000;
    pointer-events:none; z-index:50; transition:all 0.75s ease-out; opacity:1;
  `;
  box.style.position = "relative";
  box.appendChild(dmgEl);

  requestAnimationFrame(() => {
    dmgEl.style.top = "-10%";
    dmgEl.style.opacity = "0";
  });
  setTimeout(() => dmgEl.remove(), 780);
}

// 🎨 스테이지 테마 배경 & 위기 비네팅 연출
function applyStageAtmosphere(monArt, isBoss) {
  const themes = {
    slime: "radial-gradient(circle at top, #134e4a 0%, #0f172a 75%)",
    bat: "radial-gradient(circle at top, #3b0764 0%, #0f172a 75%)",
    orc: "radial-gradient(circle at top, #14532d 0%, #0f172a 75%)",
    ghost: "radial-gradient(circle at top, #164e63 0%, #090d16 75%)",
    golem: "radial-gradient(circle at top, #1e3a8a 0%, #090d16 75%)",
    darkmage: "radial-gradient(circle at top, #4c1d95 0%, #090d16 75%)",
    werewolf: "radial-gradient(circle at top, #78350f 0%, #090d16 75%)",
    dragon: "radial-gradient(circle at top, #7f1d1d 0%, #090d16 75%)"
  };
  document.body.style.transition = "background 0.8s ease";
  document.body.style.background = themes[monArt] || themes.slime;

  // 보스 경고 배너 표시
  let banner = document.getElementById("boss-warning-banner");
  if (!banner) {
    banner = document.createElement("div");
    banner.id = "boss-warning-banner";
    const gameScreen = document.getElementById("game-screen");
    if (gameScreen) gameScreen.prepend(banner);
  }
  if (isBoss) {
    banner.style.cssText = `
      background: linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.85), transparent);
      color: #fef08a; font-weight: 900; text-align: center; padding: 6px;
      margin-bottom: 8px; letter-spacing: 1.5px; font-size: 13px; border-radius: 8px;
      text-shadow: 0 1px 4px #000;
    `;
    banner.textContent = "⚠️ BOSS BATTLE · 강력한 보스 몬스터 출현!";
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }
}

function updateDangerVignette() {
  const isDanger = state.hp > 0 && state.hp <= state.maxHp * 0.25;
  document.body.style.boxShadow = isDanger
    ? "inset 0 0 55px rgba(239, 68, 68, 0.75)"
    : "none";
}

// ==========================================
// 🎨 영웅 & 몬스터 고화질 일러스트 렌더러
// ==========================================
function getHeroSvg(job, avatarTier) {
  const wLv = typeof state !== "undefined" ? state.weaponLv : 0;
  const isFever = typeof state !== "undefined" && state.combo >= 3;

  const heroImages = {
    archer: { base: "archer.png", awakened: "archer_awakened.png" },
    mage: { base: "mage.png", awakened: "mage_awakened.png" },
    paladin: { base: "paladin.png", awakened: "paladin.awakened.png" }
  };

  const isAwakened = avatarTier >= 3;
  const imgFile = isAwakened ? heroImages[job].awakened : heroImages[job].base;

  let frameStyle = "border: 2px solid rgba(255, 255, 255, 0.25);";
  if (avatarTier === 2) {
    frameStyle = "border: 3px solid #ffd54f; box-shadow: 0 0 14px rgba(255, 213, 79, 0.75);";
  } else if (avatarTier === 3) {
    frameStyle = "border: 3px solid #ff9100; box-shadow: 0 0 20px rgba(255, 145, 0, 0.9);";
  } else if (avatarTier >= 4) {
    frameStyle = "border: 3px solid #00e5ff; box-shadow: 0 0 26px rgba(0, 229, 255, 1), inset 0 0 12px rgba(255, 215, 0, 0.6);";
  }

  if (isFever) {
    frameStyle = "border: 3px solid #fde047; box-shadow: 0 0 28px #f59e0b, 0 0 12px #fef08a;";
  } else if (wLv >= 5) {
    frameStyle += " outline: 2px solid #ff5252; outline-offset: 2px;";
  }

  const tierBadge = avatarTier >= 2
    ? `<span style="position:absolute; top:5px; left:5px; background:linear-gradient(135deg,#ffd54f,#ff8f00); color:#1a1a2e; font-size:10px; font-weight:900; padding:2px 6px; border-radius:6px; box-shadow:0 2px 6px rgba(0,0,0,0.6);">
        ${avatarTier === 4 ? "👑 MAX 각성" : avatarTier === 3 ? "🪽 각성" : "👑 왕관"}
       </span>`
    : "";

  const weaponBadge = wLv > 0
    ? `<span style="position:absolute; bottom:5px; right:5px; background:rgba(15,23,42,0.85); color:${wLv >= 5 ? "#ff8a80" : "#ffd54f"}; border:1px solid ${wLv >= 5 ? "#ff5252" : "#ffd54f"}; font-size:10px; font-weight:bold; padding:2px 6px; border-radius:6px;">
        ⚔️ +${wLv}${wLv >= 5 ? " 🔥" : wLv >= 3 ? " ✨" : ""}
       </span>`
    : "";

  return `
    <div style="position:relative; width:100%; height:100%; border-radius:14px; overflow:hidden; ${frameStyle}">
      <img src="./${imgFile}" alt="${job}" style="width:100%; height:100%; object-fit:cover; display:block;">
      ${tierBadge}
      ${weaponBadge}
    </div>`;
}

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

function getMonsterHtml(artKey, isBoss, intentType) {
  const file = monsterImages[artKey] || "slime.png";
  let borderStyle = isBoss
    ? "border: 3px solid #ff1744; box-shadow: 0 0 22px rgba(255, 23, 68, 0.85);"
    : "border: 2px solid rgba(255, 82, 82, 0.45); box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);";

  if (intentType === "guard") {
    borderStyle = "border: 3px solid #40c4ff; box-shadow: 0 0 20px rgba(64, 196, 255, 0.9);";
  } else if (intentType === "charge") {
    borderStyle = "border: 3px solid #ff9100; box-shadow: 0 0 24px rgba(255, 145, 0, 1);";
  }

  const statusTag = intentType === "guard"
    ? `<span style="position:absolute; top:5px; right:5px; background:#0277bd; color:#fff; font-size:10px; font-weight:bold; padding:2px 6px; border-radius:6px;">🛡️ 방어태세</span>`
    : intentType === "charge"
      ? `<span style="position:absolute; top:5px; right:5px; background:#d50000; color:#fff; font-size:10px; font-weight:bold; padding:2px 6px; border-radius:6px;">🔥 필살준비</span>`
      : "";

  return `
    <div style="position:relative; width:100%; height:100%; border-radius:14px; overflow:hidden; ${borderStyle}">
      <img src="./${file}" alt="${artKey}" style="width:100%; height:100%; object-fit:cover; display:block;">
      ${statusTag}
    </div>`;
}

const monsterRoster = [
  { art: "slime", name: "슬라임 킹", baseHp: 135, baseAtk: 14, trait: "체력 50% 이하 시 자가 재생(+20 HP)" },
  { art: "bat", name: "어둠의 박쥐왕", baseHp: 155, baseAtk: 16, trait: "공격 시 피해량의 50% 흡혈" },
  { art: "orc", name: "숲속의 오크", baseHp: 180, baseAtk: 19, trait: "체력이 낮을수록 공격력 대폭 상승" },
  { art: "ghost", name: "유령 해적선장", baseHp: 200, baseAtk: 21, trait: "공격 시 영웅 MP 10 강탈" },
  { art: "golem", name: "얼음 골렘", baseHp: 235, baseAtk: 23, trait: "빙결 오라: 퀴즈 제한시간 8초로 단축" },
  { art: "darkmage", name: "어둠의 흑마법사", baseHp: 260, baseAtk: 26, trait: "암흑 저주: 방어막과 마나 흡수를 병행" },
  { art: "werewolf", name: "황금 늑대인간", baseHp: 295, baseAtk: 29, trait: "광란의 발톱: 높은 확률로 2연속 공격" },
  { art: "dragon", name: "레드 드래곤", baseHp: 350, baseAtk: 34, trait: "용의 위압감: 브레스 차징 & 화상 피해" }
];

// 🏺 로그라이크 유물(축복) 풀
const relicPool = [
  { id: "vampire", icon: "🧛", name: "흡혈의 송곳니", desc: "정답을 맞출 때마다 HP +10 회복" },
  { id: "mana_spring", icon: "💧", name: "마나 샘물", desc: "2콤보 이상 달성 시 MP +15 추가 회복" },
  { id: "sage_glasses", icon: "👓", name: "현자의 안경", desc: "퀴즈 제한시간 +3초 & 힌트 비용 10G로 할인" },
  { id: "berserker", icon: "💢", name: "광전사의 문장", desc: "HP가 45% 이하일 때 공격력 1.6배 증가" },
  { id: "gold_pouch", icon: "💰", name: "황금 탐욕 주머니", desc: "전투 승리 시 획득 골드 +30G 추가" },
  { id: "crit_ring", icon: "💍", name: "매의 눈 반지", desc: "치명타 확률 +20% 및 치명타 피해량 증가" },
  { id: "iron_heart", icon: "🛡️", name: "강철 심장", desc: "최대 HP +40 즉시 증가 및 받는 피해 -3" },
  { id: "spell_master", icon: "📖", name: "대현자의 마도서", desc: "철자 필살기(⚡) 데미지 +35% 추가 상승" }
];

// 🏅 칭호(업적) 정의
const titleAchievements = [
  { id: "combo10", name: "🔥 연승의 달인", check: s => s.maxCombo >= 10 },
  { id: "dragon_slayer", name: "🐉 드래곤 슬레이어", check: s => s.dragonKilled },
  { id: "scholar", name: "📖 걸어다니는 사전", check: s => s.dex.size >= 25 },
  { id: "awakened", name: "👑 각성한 전설", check: s => s.avatarTier >= 4 },
  { id: "rookie", name: "🌱 견습 모험가", check: () => true }
];

function getActiveTitle() {
  const found = titleAchievements.find(t => t.check(state));
  return found ? found.name : "🌱 견습 모험가";
}

// 📚 2022 개정 초등 영어 어휘 사전 (예문 포함)
const vocabDict = {
  "3학년": [
    { w: "apple", m: "사과", pos: "명사", ex: "I eat a sweet _____ every day.", l: ["L1", "L2", "L3"] },
    { w: "banana", m: "바나나", pos: "명사", ex: "A monkey likes a yellow _____.", l: ["L2", "L3", "L4"] },
    { w: "book", m: "책", pos: "명사", ex: "Open your English _____, please.", l: ["L1", "L2", "L5"] },
    { w: "pencil", m: "연필", pos: "명사", ex: "I write my name with a _____.", l: ["L2", "L3", "L5"] },
    { w: "bag", m: "가방", pos: "명사", ex: "Put your books in your _____.", l: ["L2", "L4"] },
    { w: "dog", m: "개", pos: "명사", ex: "The cute _____ barks loudly.", l: ["L3", "L4", "L6"] },
    { w: "cat", m: "고양이", pos: "명사", ex: "The sleepy _____ likes milk.", l: ["L3", "L4", "L6"] },
    { w: "bird", m: "새", pos: "명사", ex: "A small _____ is singing in the tree.", l: ["L4", "L6"] },
    { w: "fish", m: "물고기", pos: "명사", ex: "A colorful _____ swims in the water.", l: ["L4", "L6"] },
    { w: "red", m: "빨간색", pos: "형용사/명사", ex: "Strawberries and apples are _____.", l: ["L5", "L6", "L7"] },
    { w: "blue", m: "파란색", pos: "형용사/명사", ex: "Look at the clear _____ sky!", l: ["L5", "L6", "L7"] },
    { w: "yellow", m: "노란색", pos: "형용사/명사", ex: "The bright sun is _____.", l: ["L5", "L6", "L7"] },
    { w: "green", m: "초록색", pos: "형용사/명사", ex: "The leaves on the tree are _____.", l: ["L5", "L7"] },
    { w: "happy", m: "행복한", pos: "형용사", ex: "I am so _____ on my birthday!", l: ["L1", "L7", "L8"] },
    { w: "sad", m: "슬픈", pos: "형용사", ex: "Don't cry. Why are you _____?", l: ["L7", "L8"] },
    { w: "big", m: "큰", pos: "형용사", ex: "An elephant is a very _____ animal.", l: ["L6", "L8", "L9"] },
    { w: "small", m: "작은", pos: "형용사", ex: "An ant is very _____.", l: ["L6", "L8", "L9"] },
    { w: "run", m: "달리다", pos: "동사", ex: "Cheetahs can _____ very fast.", l: ["L8", "L9", "L10"] },
    { w: "jump", m: "뛰다, 점프하다", pos: "동사", ex: "Rabbits can _____ very high.", l: ["L8", "L9", "L10"] },
    { w: "swim", m: "수영하다", pos: "동사", ex: "Let's _____ in the pool this summer.", l: ["L9", "L10", "L11"] },
    { w: "dance", m: "춤추다", pos: "동사", ex: "We sing and _____ to the music.", l: ["L9", "L10", "L11"] },
    { w: "mother", m: "어머니", pos: "명사", ex: "My _____ cooks delicious food.", l: ["L10", "L11", "L12"] },
    { w: "father", m: "아버지", pos: "명사", ex: "My _____ drives me to school.", l: ["L10", "L11", "L12"] },
    { w: "sister", m: "여자 형제", pos: "명사", ex: "My little _____ is five years old.", l: ["L11", "L12"] },
    { w: "brother", m: "남자 형제", pos: "명사", ex: "I play soccer with my _____.", l: ["L11", "L12"] },
    { w: "water", m: "물", pos: "명사", ex: "Drink plenty of clean _____.", l: ["L3", "L7", "L11"] },
    { w: "milk", m: "우유", pos: "명사", ex: "I drink a glass of _____ every morning.", l: ["L3", "L7", "L12"] },
    { w: "bread", m: "빵", pos: "명사", ex: "I eat toast and _____ for breakfast.", l: ["L4", "L8", "L12"] },
    { w: "sun", m: "태양, 해", pos: "명사", ex: "The _____ rises in the morning.", l: ["L5", "L9", "L11"] },
    { w: "star", m: "별", pos: "명사", ex: "Twinkle, twinkle, little _____.", l: ["L6", "L10", "L12"] }
  ],
  "4학년": [
    { w: "morning", m: "아침", pos: "명사", ex: "Good _____! Did you sleep well?", l: ["L1", "L2", "L3"] },
    { w: "afternoon", m: "오후", pos: "명사", ex: "We play soccer in the _____.", l: ["L1", "L2", "L3"] },
    { w: "evening", m: "저녁", pos: "명사", ex: "My family eats dinner in the _____.", l: ["L1", "L2"] },
    { w: "teacher", m: "선생님", pos: "명사", ex: "Our English _____ is very kind.", l: ["L1", "L3", "L4"] },
    { w: "student", m: "학생", pos: "명사", ex: "I am an elementary school _____.", l: ["L1", "L3", "L4"] },
    { w: "friend", m: "친구", pos: "명사", ex: "She is my best _____ at school.", l: ["L1", "L2", "L5"] },
    { w: "sunny", m: "화창한, 맑은", pos: "형용사", ex: "It is bright and _____ today.", l: ["L3", "L4", "L5"] },
    { w: "rainy", m: "비가 오는", pos: "형용사", ex: "Take your umbrella on a _____ day.", l: ["L3", "L4", "L5"] },
    { w: "cloudy", m: "흐린", pos: "형용사", ex: "There are many clouds. It is _____.", l: ["L3", "L4", "L5"] },
    { w: "windy", m: "바람이 부는", pos: "형용사", ex: "Let's fly a kite on a _____ day.", l: ["L4", "L5"] },
    { w: "breakfast", m: "아침 식사", pos: "명사", ex: "I eat eggs and bread for _____.", l: ["L5", "L6", "L7"] },
    { w: "lunch", m: "점심 식사", pos: "명사", ex: "It's 12 o'clock. Time for _____!", l: ["L5", "L6", "L7"] },
    { w: "dinner", m: "저녁 식사", pos: "명사", ex: "We have bulgogi for _____ tonight.", l: ["L5", "L6", "L7"] },
    { w: "school", m: "학교", pos: "명사", ex: "I study and meet friends at _____.", l: ["L2", "L6", "L8"] },
    { w: "home", m: "집", pos: "명사/부사", ex: "School is over. Let's go _____.", l: ["L2", "L6", "L8"] },
    { w: "soccer", m: "축구", pos: "명사", ex: "Kick the ball! I love playing _____.", l: ["L7", "L8", "L9"] },
    { w: "baseball", m: "야구", pos: "명사", ex: "Hit the ball with a _____ bat.", l: ["L7", "L8", "L9"] },
    { w: "basketball", m: "농구", pos: "명사", ex: "Shoot the ball into the _____ hoop.", l: ["L7", "L8", "L9"] },
    { w: "hungry", m: "배고픈", pos: "형용사", ex: "My stomach growls. I am _____.", l: ["L8", "L9", "L10"] },
    { w: "thirsty", m: "목마른", pos: "형용사", ex: "I want some cold water. I am _____.", l: ["L8", "L9", "L10"] },
    { w: "tired", m: "피곤한", pos: "형용사", ex: "Go to bed early when you are _____.", l: ["L9", "L10", "L11"] },
    { w: "watch", m: "손목시계 / 보다", pos: "명사/동사", ex: "What time is it? Look at your _____.", l: ["L10", "L11", "L12"] },
    { w: "umbrella", m: "우산", pos: "명사", ex: "It's raining! Open your _____.", l: ["L10", "L11", "L12"] },
    { w: "gloves", m: "장갑", pos: "명사", ex: "Wear warm _____ on your hands.", l: ["L11", "L12"] },
    { w: "clean", m: "깨끗한 / 청소하다", pos: "형용사/동사", ex: "Let's _____ our classroom together.", l: ["L11", "L12"] },
    { w: "help", m: "돕다", pos: "동사", ex: "Can I _____ you carry that box?", l: ["L9", "L11", "L12"] }
  ],
  "5학년": [
    { w: "country", m: "나라, 국가", pos: "명사", ex: "Where are you from? Which _____?", l: ["L1", "L2", "L3"] },
    { w: "favorite", m: "가장 좋아하는", pos: "형용사", ex: "What is your _____ subject?", l: ["L2", "L3", "L4"] },
    { w: "subject", m: "과목, 주제", pos: "명사", ex: "English is my favorite school _____.", l: ["L2", "L3", "L4"] },
    { w: "science", m: "과학", pos: "명사", ex: "We do fun experiments in _____ class.", l: ["L2", "L3", "L4"] },
    { w: "math", m: "수학", pos: "명사", ex: "I solve number puzzles in _____ class.", l: ["L2", "L3", "L4"] },
    { w: "music", m: "음악", pos: "명사", ex: "We play the recorder in _____ class.", l: ["L2", "L3", "L5"] },
    { w: "museum", m: "박물관", pos: "명사", ex: "We saw dinosaur bones at the _____.", l: ["L4", "L5", "L6"] },
    { w: "library", m: "도서관", pos: "명사", ex: "Be quiet and read books in the _____.", l: ["L4", "L5", "L6"] },
    { w: "hospital", m: "병원", pos: "명사", ex: "Doctors and nurses work at the _____.", l: ["L4", "L5", "L6"] },
    { w: "straight", m: "똑바로, 곧장", pos: "부사/형용사", ex: "Go _____ two blocks and turn left.", l: ["L5", "L6", "L7"] },
    { w: "between", m: "~ 사이에", pos: "전치사", ex: "The bank is _____ the post office and school.", l: ["L5", "L6", "L7"] },
    { w: "behind", m: "~ 뒤에", pos: "전치사", ex: "The cat is hiding _____ the curtain.", l: ["L5", "L6", "L7"] },
    { w: "season", m: "계절", pos: "명사", ex: "Spring, summer, fall, winter: four _____s.", l: ["L7", "L8", "L9"] },
    { w: "spring", m: "봄", pos: "명사", ex: "Cherry blossoms bloom in _____.", l: ["L7", "L8", "L9"] },
    { w: "summer", m: "여름", pos: "명사", ex: "It is very hot in _____.", l: ["L7", "L8", "L9"] },
    { w: "autumn", m: "가을", pos: "명사", ex: "Leaves turn red and yellow in _____.", l: ["L7", "L8", "L9"] },
    { w: "winter", m: "겨울", pos: "명사", ex: "We can make a snowman in _____.", l: ["L7", "L8", "L9"] },
    { w: "vacation", m: "방학, 휴가", pos: "명사", ex: "What will you do during summer _____?", l: ["L8", "L9", "L10"] },
    { w: "visit", m: "방문하다", pos: "동사", ex: "I will _____ my grandparents in Busan.", l: ["L8", "L9", "L10"] },
    { w: "travel", m: "여행하다", pos: "동사/명사", ex: "I want to _____ around the world.", l: ["L9", "L10", "L11"] },
    { w: "delicious", m: "맛있는", pos: "형용사", ex: "This bibimbap tastes really _____!", l: ["L10", "L11", "L12"] },
    { w: "expensive", m: "비싼", pos: "형용사", ex: "That diamond ring is too _____.", l: ["L10", "L11", "L12"] },
    { w: "cheap", m: "값싼", pos: "형용사", ex: "This pencil is only 500 won. It's _____.", l: ["L10", "L11", "L12"] },
    { w: "future", m: "미래", pos: "명사", ex: "What do you want to be in the _____?", l: ["L11", "L12"] },
    { w: "scientist", m: "과학자", pos: "명사", ex: "I want to be a great _____ and invent robots.", l: ["L11", "L12"] }
  ],
  "6학년": [
    { w: "grade", m: "학년, 성적", pos: "명사", ex: "I am in the sixth _____ now.", l: ["L1", "L2", "L3"] },
    { w: "festival", m: "축제", pos: "명사", ex: "Our school _____ is next Friday.", l: ["L1", "L2", "L3"] },
    { w: "headache", m: "두통", pos: "명사", ex: "My head hurts. I have a bad _____.", l: ["L2", "L3", "L4"] },
    { w: "stomachache", m: "복통", pos: "명사", ex: "I ate too much ice cream. I have a _____.", l: ["L2", "L3", "L4"] },
    { w: "fever", m: "열, 발열", pos: "명사", ex: "Your forehead is hot. You have a _____.", l: ["L2", "L3", "L4"] },
    { w: "medicine", m: "약, 의학", pos: "명사", ex: "Take this _____ and get some rest.", l: ["L2", "L3", "L4"] },
    { w: "exercise", m: "운동하다, 운동", pos: "동사/명사", ex: "You should _____ regularly to stay fit.", l: ["L3", "L4", "L5"] },
    { w: "healthy", m: "건강한", pos: "형용사", ex: "Eat vegetables to keep your body _____.", l: ["L3", "L4", "L5"] },
    { w: "habit", m: "습관", pos: "명사", ex: "Brushing your teeth is a good _____.", l: ["L4", "L5", "L6"] },
    { w: "direction", m: "방향, 지시", pos: "명사", ex: "Follow the sign in the right _____.", l: ["L5", "L6", "L7"] },
    { w: "corner", m: "모퉁이", pos: "명사", ex: "Turn right at the _____ of the street.", l: ["L5", "L6", "L7"] },
    { w: "across", m: "~을 가로질러, 건너편에", pos: "전치사/부사", ex: "The bakery is _____ from the park.", l: ["L5", "L6", "L7"] },
    { w: "concert", m: "음악회, 콘서트", pos: "명사", ex: "We played violins at the school _____.", l: ["L6", "L7", "L8"] },
    { w: "volunteer", m: "자원봉사자, 자원하다", pos: "명사/동사", ex: "I work as a _____ at the animal shelter.", l: ["L7", "L8", "L9"] },
    { w: "environment", m: "환경", pos: "명사", ex: "We must save energy to protect the _____.", l: ["L8", "L9", "L10"] },
    { w: "recycle", m: "재활용하다", pos: "동사", ex: "Please _____ paper, cans, and plastic bottles.", l: ["L8", "L9", "L10"] },
    { w: "energy", m: "에너지", pos: "명사", ex: "Turn off the lights to save _____.", l: ["L8", "L9", "L10"] },
    { w: "protect", m: "보호하다", pos: "동사", ex: "Plant more trees to _____ our planet.", l: ["L9", "L10", "L11"] },
    { w: "earth", m: "지구, 땅", pos: "명사", ex: "We all live together on planet _____.", l: ["L9", "L10", "L11"] },
    { w: "culture", m: "문화", pos: "명사", ex: "Let's learn about Korean traditional _____.", l: ["L10", "L11", "L12"] },
    { w: "tradition", m: "전통", pos: "명사", ex: "Hanbok is part of our beautiful _____.", l: ["L10", "L11", "L12"] },
    { w: "important", m: "중요한", pos: "형용사", ex: "Helping each other is very _____.", l: ["L10", "L11", "L12"] },
    { w: "together", m: "함께", pos: "부사", l: ["L11", "L12"], ex: "We can solve any problem _____." },
    { w: "memory", m: "기억, 추억", pos: "명사", l: ["L11", "L12"], ex: "Our school trip is a wonderful _____." },
    { w: "graduate", m: "졸업하다", pos: "동사", l: ["L11", "L12"], ex: "We will _____ from elementary school soon." }
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
// ⚔️ 게임 상태 & 자동 저장(localStorage)
// ==========================================
const jobMeta = {
  archer: { title: "바람의 궁수", icon: "🏹", weapons: ["참나무 활", "정령의 장궁", "천공의 황금활"], baseHp: 100, baseAtk: 21 },
  mage: { title: "영어 마법사", icon: "🪄", weapons: ["견습생 지팡이", "아크메이지 스태프", "별빛 현자의 지팡이"], baseHp: 90, baseAtk: 24 },
  paladin: { title: "빛의 성기사", icon: "⚔️", weapons: ["수련용 대검", "기사의 성검", "태양신 엑스칼리버"], baseHp: 120, baseAtk: 19 }
};

function getWeaponName(job, wLv) {
  const list = jobMeta[job].weapons;
  if (wLv >= 5) return list[2];
  if (wLv >= 2) return list[1];
  return list[0];
}

const avatarTiers = [
  { tier: 1, name: "Tier 1 · 초보 모험가 복장", desc: "기본 모험가 의상입니다.", hpBonus: 0, defBonus: 0, cost: 60 },
  { tier: 2, name: "Tier 2 · 황금 왕관 예복", desc: "황금 왕관 뱃지와 황금빛 오라 테두리가 적용됩니다.", hpBonus: 25, defBonus: 3, cost: 120 },
  { tier: 3, name: "Tier 3 · 각성 영웅의 갑주", desc: "각성 일러스트로 진화하며 영웅의 날개가 펼쳐집니다!", hpBonus: 65, defBonus: 6, cost: 200 },
  { tier: 4, name: "Tier 4 · 천사의 날개 성의", desc: "전설의 청색 신성 오라와 최고 등급 능력치가 부여됩니다!", hpBonus: 120, defBonus: 10, cost: 0 }
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
  mp: 60,
  maxMp: 100,
  monsterHp: 135,
  monsterMaxHp: 135,
  monsterAtk: 14,
  monsterRage: 0,
  monsterIntent: "attack",
  monsterStunned: false,
  combo: 0,
  maxCombo: 0,
  dragonKilled: false,
  doubleDmg: false,
  currentSkill: "fireball",
  quizMode: "normal", // 'normal' | 'listening' | 'cloze' | 'spelling'
  currentWord: null,
  isCursedWord: false,
  isGoblinEvent: false,
  pool: [],
  dex: new Set(),
  cursedWords: [],
  relics: [],
  wrongNotes: [],
  timerId: null,
  timeLeftRatio: 1
};

function hasRelic(id) {
  return state.relics.includes(id);
}

function saveProgress() {
  try {
    const data = {
      job: state.job,
      stage: state.stage,
      gold: state.gold,
      lv: state.lv,
      exp: state.exp,
      maxExp: state.maxExp,
      weaponLv: state.weaponLv,
      avatarTier: state.avatarTier,
      maxCombo: state.maxCombo,
      dragonKilled: state.dragonKilled,
      dex: Array.from(state.dex),
      cursedWords: state.cursedWords,
      relics: state.relics
    };
    localStorage.setItem("vocab_rpg_save_v2", JSON.stringify(data));
  } catch (e) {}
}

function loadProgress() {
  try {
    const raw = localStorage.getItem("vocab_rpg_save_v2") || localStorage.getItem("vocab_rpg_save_v1");
    if (!raw) return;
    const data = JSON.parse(raw);
    state.job = data.job || "archer";
    state.stage = data.stage || 1;
    state.gold = data.gold ?? 50;
    state.lv = data.lv || 1;
    state.exp = data.exp || 0;
    state.maxExp = data.maxExp || 100;
    state.weaponLv = data.weaponLv || 0;
    state.avatarTier = data.avatarTier || 1;
    state.maxCombo = data.maxCombo || 0;
    state.dragonKilled = !!data.dragonKilled;
    state.dex = new Set(data.dex || []);
    state.cursedWords = data.cursedWords || [];
    state.relics = data.relics || [];
  } catch (e) {}
}

// ==========================================
// 🚀 초기화 및 로비 UI 컨트롤
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  document.querySelectorAll(".hero-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`hero-${state.job}`);
  if (activeBtn) activeBtn.classList.add("active");

  onGradeChange();
  updateLobbyUI();
});

function selectHero(job) {
  state.job = job;
  document.querySelectorAll(".hero-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`hero-${job}`);
  if (activeBtn) activeBtn.classList.add("active");
  saveProgress();
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
  const titleBadge = getActiveTitle();

  document.getElementById("hud-stage").textContent = `STAGE ${state.stage}`;
  document.getElementById("hud-gold").textContent = state.gold;
  document.getElementById("hud-dex").textContent = state.dex.size;

  document.getElementById("lobby-hero-art").innerHTML = getHeroSvg(state.job, state.avatarTier);
  document.getElementById("menu-hero-lv").textContent = state.lv;
  document.getElementById("menu-avatar-tier").textContent = `${tierObj.name.split(" · ")[1]} · ${titleBadge}`;
  document.getElementById("menu-hero-title").textContent = meta.title;
  document.getElementById("menu-weapon-info").textContent = `${meta.icon} ${wName} (+${state.weaponLv}) · 공격력 +${atkBonus}`;
}

// ==========================================
// ⚔️ 전투 스테이지 진입 및 유물 바 렌더링
// ==========================================
function renderRelicRibbon() {
  let bar = document.getElementById("active-relics-bar");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "active-relics-bar";
    const logBox = document.getElementById("battle-log");
    if (logBox && logBox.parentNode) {
      logBox.parentNode.insertBefore(bar, logBox);
    }
  }

  if (state.relics.length === 0) {
    bar.style.display = "none";
    return;
  }

  bar.style.cssText = `
    display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0;
    padding: 6px 8px; background: rgba(15, 23, 42, 0.65);
    border: 1px solid rgba(255, 213, 79, 0.3); border-radius: 10px;
  `;

  bar.innerHTML = state.relics
    .map(id => {
      const r = relicPool.find(item => item.id === id);
      if (!r) return "";
      return `<span title="${r.desc}" style="background:rgba(255,213,79,0.15); border:1px solid #ffd54f; color:#fef08a; font-size:11px; padding:2px 7px; border-radius:6px; cursor:help;">${r.icon} ${r.name}</span>`;
    })
    .join("");
}

function getCurrentMonster() {
  const monIdx = (state.stage - 1) % monsterRoster.length;
  return monsterRoster[monIdx];
}

function decideNextMonsterIntent() {
  const roll = Math.random();
  if (state.monsterRage >= 80) {
    state.monsterIntent = "charge";
  } else if (roll < 0.25) {
    state.monsterIntent = "guard";
  } else if (roll < 0.50) {
    state.monsterIntent = "special";
  } else if (roll < 0.70 && state.stage >= 2) {
    state.monsterIntent = "charge";
  } else {
    state.monsterIntent = "attack";
  }
  updateMonsterSpeech();
}

function updateMonsterSpeech() {
  const mon = getCurrentMonster();
  const speechEl = document.getElementById("monster-speech");
  const isBoss = mon.art === "dragon" || state.stage % 4 === 0;
  document.getElementById("monster-art-box").innerHTML = getMonsterHtml(mon.art, isBoss, state.monsterIntent);

  if (state.monsterStunned) {
    speechEl.innerHTML = `<span style="color:#ffd54f;">💫 기절함! (다음 턴 행동 불가)</span>`;
    return;
  }

  if (state.monsterIntent === "charge") {
    speechEl.innerHTML = `<span style="color:#ff5252; font-weight:bold;">🔥 [예고] 필살 강타 준비! (⚡철자 필살기로 기절 가능!)</span>`;
  } else if (state.monsterIntent === "guard") {
    speechEl.innerHTML = `<span style="color:#40c4ff; font-weight:bold;">🛡️ [예고] 방어 태세! (피해 75% 감소 · 명상 추천)</span>`;
  } else if (state.monsterIntent === "special") {
    speechEl.innerHTML = `<span style="color:#ea80fc; font-weight:bold;">🌀 [예고] 특수기 예정! (${mon.trait})</span>`;
  } else {
    speechEl.innerHTML = `<span style="color:#e2e8f0;">⚔️ [예고] 일반 공격 준비 (예상 피해: ~${state.monsterAtk})</span>`;
  }
}

function startGame() {
  if (state.pool.length === 0) {
    alert("출제 가능 어휘가 없습니다. 다른 학년이나 단원을 선택해주세요!");
    return;
  }

  const meta = jobMeta[state.job];
  const tierObj = avatarTiers[state.avatarTier - 1];
  const relicHp = hasRelic("iron_heart") ? 40 : 0;

  state.maxHp = meta.baseHp + (state.lv - 1) * 15 + tierObj.hpBonus + relicHp;
  state.hp = state.maxHp;
  state.maxMp = 100;
  state.mp = 60;
  state.combo = 0;
  state.doubleDmg = false;
  state.wrongNotes = [];
  state.monsterStunned = false;

  const mon = getCurrentMonster();
  const isBoss = mon.art === "dragon" || state.stage % 4 === 0;
  const scale = 1 + (state.stage - 1) * 0.18;

  state.monsterMaxHp = Math.round(mon.baseHp * scale);
  state.monsterHp = state.monsterMaxHp;
  state.monsterAtk = Math.round(mon.baseAtk * (1 + (state.stage - 1) * 0.14));
  state.monsterRage = 0;

  document.getElementById("selector-panel").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  document.getElementById("result-panel").style.display = "none";
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("controls").style.display = "block";
  document.getElementById("battle-log").innerHTML = "";

  applyStageAtmosphere(mon.art, isBoss);
  renderRelicRibbon();

  const lessonName = state.lesson === "ALL" ? "전체 단원" : state.lesson;
  document.getElementById("current-scope-badge").textContent = `${state.grade} | ${state.pub} | ${lessonName}`;
  document.getElementById("hero-art-box").innerHTML = getHeroSvg(state.job, state.avatarTier);
  document.getElementById("monster-name").textContent = `STAGE ${state.stage} · ${mon.name}`;

  decideNextMonsterIntent();
  updateBattleBars();
  addLog(`⚔️ STAGE ${state.stage} 시작! [${mon.name}] 등장!`);
}

function backToMenu() {
  clearInterval(state.timerId);
  document.body.style.background = "";
  document.body.style.boxShadow = "none";
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
  document.getElementById("hero-title").textContent = `${meta.title} (${getActiveTitle()})`;
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

  // 피버 상태일 때 영웅 일러스트 황금 테두리 갱신
  document.getElementById("hero-art-box").innerHTML = getHeroSvg(state.job, state.avatarTier);
  updateDangerVignette();

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
    feverBadge.textContent = `🌟 FEVER (1.4배)`;
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
// 🎯 스킬 사용 및 다채로운 영어 퀴즈 출제 (듣기 / 예문 / 철자)
// ==========================================
function openQuiz(skillType) {
  if (skillType === "meditate") {
    const recover = 45;
    state.mp = Math.min(state.maxMp, state.mp + recover);
    playSfx("heal");
    addLog(`✨ 마나 명상으로 MP를 +${recover} 회복했습니다!`);
    updateBattleBars();
    setTimeout(monsterTurn, 400);
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

  state.isCursedWord = false;
  state.isGoblinEvent = false;
  let target = null;

  if (state.cursedWords.length > 0 && Math.random() < 0.4) {
    const cursedW = state.cursedWords[0];
    target = state.pool.find(item => item.w === cursedW) || vocabDict[state.grade].find(item => item.w === cursedW);
    if (target) state.isCursedWord = true;
  }

  if (!target) {
    target = state.pool[Math.floor(Math.random() * state.pool.length)];
  }
  state.currentWord = target;

  if (!state.isCursedWord && Math.random() < 0.15) {
    state.isGoblinEvent = true;
  }

  document.getElementById("controls").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";

  const hintCost = hasRelic("sage_glasses") ? 10 : 20;
  const hintBtn = document.getElementById("hint-btn");
  hintBtn.disabled = false;
  hintBtn.textContent = `🔍 힌트 (${hintCost}G)`;

  // 퀴즈 모드 결정: thunder -> spelling / 일반 -> normal, listening(25%), cloze(25%)
  if (skillType === "thunder") {
    state.quizMode = "spelling";
  } else {
    const r = Math.random();
    if (r < 0.25) state.quizMode = "listening";
    else if (r < 0.50 && target.ex) state.quizMode = "cloze";
    else state.quizMode = "normal";
  }

  const modeLabels = {
    normal: "🔥 기본 공격 퀴즈",
    listening: "🎧 원어민 듣기 평가 (적중 시 치명타율 2배!)",
    cloze: "📝 영어 예문 빈칸 완성 (적중 시 피해 +20%!)",
    spelling: "⚡ 필살기 강타 (철자 입력)"
  };

  let headerText = skillType === "heal" ? "💚 치유 마법 퀴즈" : modeLabels[state.quizMode];
  if (state.isCursedWord) headerText = `💀 [복수전] 저주받은 단어! (정답 시 +40G)`;
  if (state.isGoblinEvent) headerText = `💰 [돌발!] 보물 고블린 난입! (빠른 정답 시 +100G!)`;

  document.getElementById("quiz-skill-name").textContent = headerText;
  document.getElementById("quiz-pos").textContent = `[${target.pos}]`;

  const optionsBox = document.getElementById("quiz-options");
  const spellingBox = document.getElementById("spelling-box");
  const qEl = document.getElementById("quiz-question");

  if (state.quizMode === "spelling") {
    qEl.textContent = `뜻: "${target.m}" → 영어 철자 입력!`;
    optionsBox.style.display = "none";
    spellingBox.style.display = "flex";
    const input = document.getElementById("spelling-input");
    input.value = "";
    input.focus();
  } else {
    spellingBox.style.display = "none";
    optionsBox.style.display = "grid";

    if (state.quizMode === "listening") {
      qEl.innerHTML = `🔊 <strong>소리를 듣고 뜻을 고르세요!</strong> <button onclick="speakCurrentWord()" style="margin-left:6px; padding:3px 8px; border-radius:6px; border:none; background:#38bdf8; color:#0f172a; font-weight:bold; cursor:pointer;">다시 듣기</button>`;
      speakCurrentWord();
    } else if (state.quizMode === "cloze") {
      qEl.innerHTML = `<div style="font-size:15px; color:#fef08a;">"${target.ex}"</div><div style="font-size:12px; color:#94a3b8; margin-top:4px;">빈칸에 들어갈 단어의 뜻은?</div>`;
    } else {
      qEl.textContent = target.w;
      speakCurrentWord();
    }

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

  const mon = getCurrentMonster();
  let limitSec = mon.art === "golem" ? 8 : 11;
  if (hasRelic("sage_glasses")) limitSec += 3;
  startQuizTimer(limitSec);
}

function startQuizTimer(seconds) {
  clearInterval(state.timerId);
  const bar = document.getElementById("timer-bar");
  let left = seconds * 10;
  const total = left;
  state.timeLeftRatio = 1;
  bar.style.width = "100%";

  state.timerId = setInterval(() => {
    left--;
    state.timeLeftRatio = Math.max(0, left / total);
    bar.style.width = `${state.timeLeftRatio * 100}%`;
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
  if (state.combo > state.maxCombo) state.maxCombo = state.combo;
  state.dex.add(state.currentWord.w);

  let bonusGoldMsg = "";
  if (state.isCursedWord) {
    state.cursedWords = state.cursedWords.filter(w => w !== state.currentWord.w);
    state.gold += 40;
    bonusGoldMsg += " 💀 [복수 성공! +40G]";
  }
  if (state.isGoblinEvent) {
    state.gold += 100;
    bonusGoldMsg += " 💰 [보물 고블린 처치! +100G]";
  }

  if (hasRelic("vampire")) {
    state.hp = Math.min(state.maxHp, state.hp + 10);
  }
  if (hasRelic("mana_spring") && state.combo >= 2) {
    state.mp = Math.min(state.maxMp, state.mp + 15);
  }

  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("controls").style.display = "block";

  if (state.currentSkill === "heal") {
    const healAmt = 50 + state.lv * 6;
    state.hp = Math.min(state.maxHp, state.hp + healAmt);
    playSfx("heal");
    triggerHitEffect("hero-art-box", `+${healAmt} HP`, "#4ecca3");
    addLog(`💚 치유 마법 성공! 체력을 +${healAmt} 회복했습니다!${bonusGoldMsg}`);
    saveProgress();
    updateBattleBars();
    setTimeout(monsterTurn, 450);
    return;
  }

  const meta = jobMeta[state.job];
  let dmg = meta.baseAtk + state.weaponLv * 5 + (state.lv - 1) * 4;

  // 무기 +5강 특수 시너지: 화염 추가 피해 +12
  if (state.weaponLv >= 5) dmg += 12;

  if (state.currentSkill === "thunder") {
    dmg = Math.round(dmg * (hasRelic("spell_master") ? 2.0 : 1.65));
  }
  if (state.quizMode === "cloze") dmg = Math.round(dmg * 1.2);
  if (state.job === "mage") dmg += 5;
  if (state.combo >= 3) dmg = Math.round(dmg * 1.4);
  if (hasRelic("berserker") && state.hp <= state.maxHp * 0.45) {
    dmg = Math.round(dmg * 1.6);
  }

  const isFast = state.timeLeftRatio >= 0.65;
  if (isFast) dmg = Math.round(dmg * 1.35);

  if (state.doubleDmg) {
    dmg *= 2;
    state.doubleDmg = false;
  }

  let critChance = state.job === "archer" ? 0.45 : 0.22;
  if (state.quizMode === "listening") critChance *= 2;
  if (hasRelic("crit_ring")) critChance += 0.20;
  const isCrit = Math.random() < critChance;
  if (isCrit) {
    dmg = Math.round(dmg * (hasRelic("crit_ring") ? 1.8 : 1.5));
    // 무기 +3강 특수 시너지: 치명타 적중 시 MP +8 회복
    if (state.weaponLv >= 3) {
      state.mp = Math.min(state.maxMp, state.mp + 8);
    }
  }

  let guardMsg = "";
  if (state.monsterIntent === "guard" && state.currentSkill !== "thunder") {
    dmg = Math.max(3, Math.round(dmg * 0.25));
    guardMsg = " (🛡️ 방어 태세로 피해 감소!)";
  } else if (state.monsterIntent === "guard" && state.currentSkill === "thunder") {
    guardMsg = " (⚡ 필살기로 방어 관통!)";
  }

  let stunMsg = "";
  if (state.monsterIntent === "charge" && state.currentSkill === "thunder") {
    state.monsterStunned = true;
    state.monsterRage = 0;
    stunMsg = " 💥 [BREAK!] 적의 필살기 차징을 끊고 기절시켰습니다!";
  }

  state.monsterHp = Math.max(0, state.monsterHp - dmg);
  state.monsterRage = Math.min(100, state.monsterRage + 25);

  playSfx(isCrit || stunMsg ? "crit" : "hit");
  triggerHitEffect("monster-art-box", `${isCrit ? "💥 " : "-"}${dmg}!`, isCrit ? "#ffea00" : "#ff5252");

  const tags = [
    state.quizMode === "listening" ? "🎧듣기" : "",
    isFast ? "⚡신속" : "",
    isCrit ? "💥치명타" : ""
  ].filter(Boolean).join(" ");
  addLog(`⚔️ ${tags ? `[${tags}] ` : ""}정답(${state.currentWord.w})! ${dmg} 데미지!${guardMsg}${stunMsg}${bonusGoldMsg}`);

  saveProgress();
  updateBattleBars();

  if (state.monsterHp <= 0) {
    winBattle();
  } else {
    setTimeout(monsterTurn, 550);
  }
}

function handleWrongAnswer(reason) {
  state.combo = 0;
  if (!state.wrongNotes.some(w => w.w === state.currentWord.w)) {
    state.wrongNotes.push(state.currentWord);
  }
  if (!state.cursedWords.includes(state.currentWord.w)) {
    state.cursedWords.push(state.currentWord.w);
  }

  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("controls").style.display = "block";
  state.monsterRage = Math.min(100, state.monsterRage + 30);
  addLog(`❌ ${reason} (이 단어는 다음 복수전에 등장합니다!)`);
  saveProgress();
  updateBattleBars();
  setTimeout(monsterTurn, 500);
}

// ==========================================
// 👾 몬스터 턴 실행
// ==========================================
function monsterTurn() {
  if (state.monsterHp <= 0) return;

  if (state.monsterStunned) {
    state.monsterStunned = false;
    addLog(`💫 몬스터가 기절에서 깨어나며 턴을 넘겼습니다!`);
    decideNextMonsterIntent();
    updateBattleBars();
    return;
  }

  const mon = getCurrentMonster();
  const tierObj = avatarTiers[state.avatarTier - 1];
  let dmg = state.monsterAtk;
  let logText = "";

  if (mon.art === "orc" && state.monsterHp < state.monsterMaxHp * 0.5) {
    dmg = Math.round(dmg * 1.35);
  }

  if (state.monsterIntent === "guard") {
    state.monsterRage = Math.min(100, state.monsterRage + 25);
    if (mon.art === "slime") {
      const heal = 22;
      state.monsterHp = Math.min(state.monsterMaxHp, state.monsterHp + heal);
      logText = `🛡️ [${mon.name}]이(가) 방어 태세를 유지하며 체력을 +${heal} 재생했습니다!`;
    } else {
      logText = `🛡️ [${mon.name}]이(가) 단단히 방어하며 힘을 비축합니다!`;
    }
    addLog(logText);
    decideNextMonsterIntent();
    updateBattleBars();
    return;
  }

  if (state.monsterIntent === "charge") {
    dmg = Math.round(dmg * 1.85);
    state.monsterRage = 0;
    logText = `🔥 [${mon.name}]의 필살 강타 폭발!`;
  } else if (state.monsterIntent === "special") {
    if (mon.art === "slime") {
      const heal = 25;
      state.monsterHp = Math.min(state.monsterMaxHp, state.monsterHp + heal);
      dmg = Math.round(dmg * 0.8);
      logText = `🟢 [슬라임 분열 재생] 체력 +${heal} 회복 후 점액 공격!`;
    } else if (mon.art === "bat") {
      const drain = Math.round(dmg * 0.6);
      state.monsterHp = Math.min(state.monsterMaxHp, state.monsterHp + drain);
      logText = `🦇 [흡혈 송곳니] 영웅을 물고 체력을 +${drain} 흡수!`;
    } else if (mon.art === "ghost" || mon.art === "darkmage") {
      state.mp = Math.max(0, state.mp - 15);
      logText = `🌀 [영혼 마나 흡수] 영웅의 MP를 15 빼앗았습니다!`;
    } else if (mon.art === "werewolf") {
      dmg = Math.round(dmg * 1.45);
      logText = `🐺 [광란의 2연속 할퀴기] 날카로운 연속 공격!`;
    } else if (mon.art === "dragon") {
      dmg = Math.round(dmg * 1.5);
      state.monsterRage = Math.min(100, state.monsterRage + 40);
      logText = `🐉 [작열의 화염 숨결] 영웅에게 화상 피해!`;
    } else {
      dmg = Math.round(dmg * 1.25);
      logText = `❄️ [${mon.name}]의 특수 강타!`;
    }
  } else {
    logText = `👾 [${mon.name}]의 공격!`;
  }

  dmg -= tierObj.defBonus;
  if (state.job === "paladin") dmg -= 4;
  if (hasRelic("iron_heart")) dmg -= 3;
  dmg = Math.max(3, dmg);

  state.hp = Math.max(0, state.hp - dmg);
  playSfx("hurt");
  triggerHitEffect("hero-art-box", `-${dmg}`, "#ff1744");
  addLog(`${logText} 영웅이 ${dmg}의 피해를 입었습니다.`);

  if (state.hp <= 0) {
    updateBattleBars();
    loseBattle();
    return;
  }

  decideNextMonsterIntent();
  updateBattleBars();
}

// ==========================================
// 🏆 전투 승리 & 떠돌이 상인 & 로그라이크 유물 선택
// ==========================================
function winBattle() {
  playSfx("win");
  const mon = getCurrentMonster();
  if (mon.art === "dragon") state.dragonKilled = true;

  const relicGold = hasRelic("gold_pouch") ? 30 : 0;
  const goldReward = 45 + state.stage * 12 + relicGold;
  const expReward = 60;
  state.gold += goldReward;
  state.exp += expReward;

  let lvMsg = "";
  if (state.exp >= state.maxExp) {
    state.lv++;
    state.exp -= state.maxExp;
    state.maxExp = Math.round(state.maxExp * 1.2);
    lvMsg = ` 🎉 레벨 업! (Lv.${state.lv})`;
  }

  const clearedStage = state.stage;
  addLog(`🏆 승리! +${goldReward}G, +${expReward} EXP 획득!${lvMsg}`);
  state.stage++;
  saveProgress();
  updateBattleBars();

  showResultPanel(true, clearedStage);
}

function loseBattle() {
  addLog(`💀 영웅이 쓰러졌습니다... 대장간에서 무기를 강화하거나 아바타를 진화시켜 보세요!`);
  saveProgress();
  showResultPanel(false, state.stage);
}

function showResultPanel(isWin, clearedStage) {
  document.getElementById("controls").style.display = "none";
  const resultPanel = document.getElementById("result-panel");
  const notesBox = document.getElementById("wrong-notes-box");
  const restartBtn = document.getElementById("restart-btn");

  resultPanel.style.display = "block";
  restartBtn.textContent = isWin ? `🚀 STAGE ${state.stage} 도전!` : `🔄 현재 스테이지 재도전`;

  let html = "";

  // 3스테이지마다 떠돌이 고블린 상인 이벤트 등장!
  if (isWin && clearedStage % 3 === 0) {
    html += `
      <div id="merchant-box" style="margin-bottom:14px; padding:12px; background:rgba(56,189,248,0.12); border:1px solid #38bdf8; border-radius:12px;">
        <h4 style="margin:0 0 8px 0; color:#38bdf8;">⛺ 떠돌이 고블린 상인 조우! (보유 골드: <span id="merch-gold">${state.gold}</span>G)</h4>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:8px;">
          <button onclick="buyMerchantItem('fullheal')" style="padding:8px; background:#0f172a; border:1px solid #4ecca3; border-radius:8px; color:#fff; cursor:pointer;">
            💖 <strong>영약 마시기 (30G)</strong><br><small style="color:#94a3b8;">다음 전투 체력 완전 회복</small>
          </button>
          <button onclick="buyMerchantItem('forge')" style="padding:8px; background:#0f172a; border:1px solid #fbbf24; border-radius:8px; color:#fff; cursor:pointer;">
            🔨 <strong>특가 무기 제련 (60G)</strong><br><small style="color:#94a3b8;">무기 강화 +1 즉시 상승</small>
          </button>
          <button onclick="buyMerchantItem('relic')" style="padding:8px; background:#0f172a; border:1px solid #c084fc; border-radius:8px; color:#fff; cursor:pointer;">
            🎁 <strong>미지의 유물 상자 (80G)</strong><br><small style="color:#94a3b8;">랜덤 고대 유물 1개 획득</small>
          </button>
        </div>
      </div>`;
  }

  // 승리 시 보유하지 않은 유물 3개 중 1개 선택 UI 표시
  if (isWin) {
    const available = relicPool.filter(r => !hasRelic(r.id)).sort(() => Math.random() - 0.5).slice(0, 3);
    if (available.length > 0) {
      html += `
        <div id="relic-choice-box" style="margin-bottom:14px; padding:12px; background:rgba(255,213,79,0.1); border:1px solid #ffd54f; border-radius:12px;">
          <h4 style="margin:0 0 8px 0; color:#ffd54f;">🏺 승리 보상: 고대 유물 1개를 선택하세요!</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:8px;">
            ${available.map(r => `
              <button onclick="pickRelic('${r.id}')" style="padding:10px; background:#1e293b; border:1px solid #64748b; border-radius:10px; color:#fff; cursor:pointer; text-align:left;">
                <div style="font-size:16px;">${r.icon} <strong>${r.name}</strong></div>
                <div style="font-size:11px; color:#cbd5e1; margin-top:4px;">${r.desc}</div>
              </button>
            `).join("")}
          </div>
        </div>`;
    }
  }

  if (state.wrongNotes.length > 0) {
    html += `<h4>📝 이번 전투 오답 노트 (다음 판 복수전 등장!)</h4>` +
      state.wrongNotes.map(item => `<div>• <strong>${item.w}</strong> : ${item.m}</div>`).join("");
  } else {
    html += `<h4>✨ 퍼펙트! 틀린 단어가 하나도 없습니다!</h4>`;
  }

  notesBox.innerHTML = html;
}

function buyMerchantItem(type) {
  if (type === "fullheal") {
    if (state.gold < 30) return alert("골드가 부족합니다! (30G 필요)");
    state.gold -= 30;
    state.hp = state.maxHp;
    playSfx("heal");
    alert("💖 상인의 특제 영약으로 체력이 가득 찼습니다!");
  } else if (type === "forge") {
    if (state.gold < 60) return alert("골드가 부족합니다! (60G 필요)");
    state.gold -= 60;
    state.weaponLv++;
    playSfx("win");
    alert(`🔨 무기 강화 성공! 현재 무기: +${state.weaponLv}강`);
  } else if (type === "relic") {
    if (state.gold < 80) return alert("골드가 부족합니다! (80G 필요)");
    const unowned = relicPool.filter(r => !hasRelic(r.id));
    if (unowned.length === 0) return alert("이미 모든 고대 유물을 보유하고 있습니다!");
    state.gold -= 80;
    const picked = unowned[Math.floor(Math.random() * unowned.length)];
    state.relics.push(picked.id);
    playSfx("win");
    renderRelicRibbon();
    alert(`🎁 [${picked.icon} ${picked.name}] 획득! (${picked.desc})`);
  }
  const gEl = document.getElementById("merch-gold");
  if (gEl) gEl.textContent = state.gold;
  saveProgress();
  updateBattleBars();
}

function pickRelic(id) {
  if (!hasRelic(id)) {
    state.relics.push(id);
    saveProgress();
    renderRelicRibbon();
  }
  const r = relicPool.find(item => item.id === id);
  const box = document.getElementById("relic-choice-box");
  if (box && r) {
    box.innerHTML = `<div style="color:#4ecca3; font-weight:bold;">✅ [${r.icon} ${r.name}] 유물을 획득했습니다! (${r.desc})</div>`;
  }
}

// ==========================================
// 🔊 TTS 발음, 🔍 50:50 및 철자 힌트, 🎒 퀵 아이템
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
  const hintCost = hasRelic("sage_glasses") ? 10 : 20;
  if (state.gold < hintCost) {
    alert(`골드가 부족합니다! (${hintCost}G 필요)`);
    return;
  }
  state.gold -= hintCost;
  saveProgress();
  updateBattleBars();

  const btn = document.getElementById("hint-btn");
  btn.disabled = true;
  const w = state.currentWord.w;

  if (state.quizMode === "spelling") {
    const masked = w
      .split("")
      .map((ch, idx) => (idx === 0 || idx === w.length - 1 || idx % 2 === 0 ? ch : "_"))
      .join(" ");
    btn.textContent = `💡 철자 힌트: ${masked}`;
  } else {
    const optionBtns = Array.from(document.querySelectorAll("#quiz-options .option-btn"));
    const wrongBtns = optionBtns.filter(b => b.textContent.trim() !== state.currentWord.m);
    wrongBtns
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)
      .forEach(b => {
        b.disabled = true;
        b.style.opacity = "0.25";
        b.style.textDecoration = "line-through";
      });
    btn.textContent = `💡 오답 2개 제거 완료!`;
  }
}

function buyAndUseItem(type) {
  if (type === "potion") {
    if (state.gold < 30) return alert("골드가 부족합니다! (30G 필요)");
    state.gold -= 30;
    state.hp = Math.min(state.maxHp, state.hp + 50);
    playSfx("heal");
    triggerHitEffect("hero-art-box", "+50 HP", "#4ecca3");
    addLog("🧪 체력물약 사용! HP +50 즉시 회복!");
  } else if (type === "double") {
    if (state.gold < 40) return alert("골드가 부족합니다! (40G 필요)");
    if (state.doubleDmg) return alert("이미 더블데미지 효과가 적용 중입니다!");
    state.gold -= 40;
    state.doubleDmg = true;
    addLog("📜 더블데미지 주문서 발동! 다음 공격 피해량이 2배가 됩니다!");
  }
  saveProgress();
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
  const synergyText = state.weaponLv >= 5
    ? "🔥 특수옵션: 치명타 MP+8 & 화염 추가피해 +12"
    : state.weaponLv >= 3
      ? "✨ 특수옵션: 치명타 적중 시 MP +8 회복"
      : "💡 +3강 달성 시 치명타 MP회복 해금!";

  document.getElementById("forge-weapon-icon").textContent = meta.icon;
  document.getElementById("forge-weapon-name").textContent = `${wName} (+${state.weaponLv})`;
  document.getElementById("forge-weapon-grade").textContent = `등급: ${gradeName} | ${synergyText}`;
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
  playSfx("win");
  saveProgress();
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
  playSfx("win");
  saveProgress();
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
