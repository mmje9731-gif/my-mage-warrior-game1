// 🎨 영웅 아바타(티어별 외형 진화) & 8종 몬스터 SVG 일러스트 생성기
function getHeroSvg(job, avatarTier) {
  // 아바타 티어에 따라 황금 오라, 왕관, 날개 장식이 추가됨!
  const aura = avatarTier >= 3 ? `<circle cx="60" cy="60" r="54" fill="none" stroke="#ffd54f" stroke-width="3" stroke-dasharray="6 4"/>` : "";
  const wings = avatarTier >= 4 ? `
    <path d="M25 62 Q4 35 12 72 Q22 70 30 78 Z" fill="#fff9c4" stroke="#ffd54f" stroke-width="2"/>
    <path d="M95 62 Q116 35 108 72 Q98 70 90 78 Z" fill="#fff9c4" stroke="#ffd54f" stroke-width="2"/>` : "";
  const crown = avatarTier >= 2 ? `<polygon points="48,14 52,4 60,11 68,4 72,14" fill="#ffd54f" stroke="#ff8f00" stroke-width="1.5"/>` : "";

  if (job === "archer") {
    const cloakColor = avatarTier >= 3 ? "#00695c" : (avatarTier === 2 ? "#2e7d32" : "#1b5e20");
    const trimColor = avatarTier >= 2 ? "#ffd54f" : "#5d4037";
    return `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        ${aura}${wings}
        <path d="M35 55 L20 105 L100 105 L85 55 Z" fill="${cloakColor}"/>
        <rect x="44" y="55" width="32" height="40" rx="8" fill="#388e3c" stroke="${trimColor}" stroke-width="2"/>
        <rect x="44" y="75" width="32" height="7" fill="${trimColor}"/>
        <circle cx="60" cy="40" r="18" fill="#ffe0b2"/>
        <path d="M40 38 Q42 18 60 18 Q78 18 80 38 Q72 28 60 30 Q48 28 40 38 Z" fill="#fbc02d"/>
        <path d="M38 34 L60 12 L82 34 Z" fill="#2e7d32"/>
        ${crown}
        <circle cx="53" cy="41" r="2.5" fill="#1a1a2e"/>
        <circle cx="67" cy="41" r="2.5" fill="#1a1a2e"/>
        <path d="M88 18 Q115 60 88 102" stroke="${avatarTier >= 3 ? '#ffd54f' : '#8d6e63'}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <line x1="88" y1="18" x2="88" y2="102" stroke="#e0e0e0" stroke-width="1.5"/>
        <line x1="65" y1="60" x2="112" y2="60" stroke="#ffd54f" stroke-width="3"/>
        <polygon points="116,60 106,55 106,65" fill="#4ecca3"/>
      </svg>`;
  } else if (job === "mage") {
    const robeColor = avatarTier >= 3 ? "#4a148c" : (avatarTier === 2 ? "#311b92" : "#283593");
    return `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        ${aura}${wings}
        <path d="M38 55 L25 105 L95 105 L82 55 Z" fill="${robeColor}"/>
        <path d="M52 55 L60 105 L68 55 Z" fill="${avatarTier >= 2 ? '#ffd54f' : '#7e57c2'}"/>
        <circle cx="60" cy="42" r="17" fill="#ffe0b2"/>
        <path d="M30 34 L90 34 L60 6 Z" fill="#5e35b1"/>
        <ellipse cx="60" cy="34" rx="34" ry="6" fill="#7e57c2"/>
        ${crown}
        <circle cx="54" cy="43" r="2.5" fill="#1a1a2e"/>
        <circle cx="66" cy="43" r="2.5" fill="#1a1a2e"/>
        <line x1="94" y1="25" x2="94" y2="105" stroke="${avatarTier >= 3 ? '#ffd54f' : '#8d6e63'}" stroke-width="5" stroke-linecap="round"/>
        <circle cx="94" cy="22" r="10" fill="${avatarTier >= 3 ? '#ff4081' : '#00e5ff'}"/>
        <circle cx="94" cy="22" r="4" fill="#ffffff"/>
      </svg>`;
  } else {
    const armorColor = avatarTier >= 3 ? "#ffd54f" : (avatarTier === 2 ? "#b0bec5" : "#78909c");
    return `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        ${aura}${wings}
        <rect x="40" y="54" width="40" height="46" rx="8" fill="${armorColor}"/>
        <path d="M40 54 L60 72 L80 54" fill="#eceff1"/>
        <circle cx="60" cy="38" r="18" fill="#ffe0b2"/>
        <path d="M40 36 Q40 14 60 14 Q80 14 80 36 L75 30 L60 34 L45 30 Z" fill="${armorColor}"/>
        ${crown}
        <circle cx="53" cy="40" r="2.5" fill="#1a1a2e"/>
        <circle cx="67" cy="40" r="2.5" fill="#1a1a2e"/>
        <path d="M18 55 L42 55 L42 82 Q30 98 18 82 Z" fill="#1565c0" stroke="#ffd54f" stroke-width="3"/>
        <rect x="90" y="25" width="7" height="55" fill="#e0f7fa"/>
        <rect x="82" y="78" width="23" height="6" fill="#ffd54f"/>
      </svg>`;
  }
}

const monsterSvg = {
  slime: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M20 92 Q15 42 60 36 Q105 42 100 92 Q80 104 60 104 Q40 104 20 92 Z" fill="#00e676"/><path d="M32 52 Q42 42 55 44" stroke="#b9f6ca" stroke-width="5" stroke-linecap="round" fill="none"/><polygon points="42,36 46,18 54,28 60,15 66,28 74,18 78,36" fill="#ffd54f" stroke="#ff8f00" stroke-width="2"/><circle cx="46" cy="66" r="6" fill="#1a1a2e"/><circle cx="74" cy="66" r="6" fill="#1a1a2e"/><path d="M50 80 Q60 90 70 80" stroke="#1a1a2e" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
  bat: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M38 58 Q10 30 6 65 Q22 65 26 78 Q34 70 40 75 Z" fill="#6a1b9a"/><path d="M82 58 Q110 30 114 65 Q98 65 94 78 Q86 70 80 75 Z" fill="#6a1b9a"/><circle cx="60" cy="64" r="24" fill="#4a148c"/><polygon points="42,46 38,24 54,42" fill="#4a148c"/><polygon points="78,46 82,24 66,42" fill="#4a148c"/><circle cx="51" cy="60" r="5" fill="#ffea00"/><circle cx="69" cy="60" r="5" fill="#ffea00"/><polygon points="52,72 55,81 58,72" fill="#ffffff"/><polygon points="62,72 65,81 68,72" fill="#ffffff"/></svg>`,
  orc: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="58" width="60" height="46" rx="12" fill="#558b2f"/><path d="M35 62 L85 95 M85 62 L35 95" stroke="#4e342e" stroke-width="8"/><rect x="38" y="24" width="44" height="38" rx="10" fill="#689f38"/><polygon points="38,32 24,18 42,24" fill="#eceff1"/><polygon points="82,32 96,18 78,24" fill="#eceff1"/><circle cx="50" cy="38" r="4" fill="#ff1744"/><circle cx="70" cy="38" r="4" fill="#ff1744"/><path d="M95 95 L108 30 L116 32 L102 97 Z" fill="#6d4c41"/></svg>`,
  ghost: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M32 95 Q32 35 60 35 Q88 35 88 95 L78 86 L69 96 L60 86 L51 96 L42 86 Z" fill="#b2ebf2" opacity="0.9"/><path d="M26 38 L94 38 L78 16 L42 16 Z" fill="#263238"/><rect x="42" y="33" width="36" height="5" fill="#ffd54f"/><circle cx="50" cy="58" r="6" fill="#1a1a2e"/><line x1="63" y1="53" x2="77" y2="63" stroke="#ff5252" stroke-width="3"/><ellipse cx="60" cy="74" rx="7" ry="9" fill="#1a1a2e"/></svg>`,
  golem: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="35,45 85,45 98,98 22,98" fill="#4fc3f7" stroke="#0288d1" stroke-width="3"/><polygon points="42,18 78,18 85,45 35,45" fill="#81d4fa" stroke="#0288d1" stroke-width="3"/><rect x="46" y="28" width="10" height="5" fill="#ffea00"/><rect x="64" y="28" width="10" height="5" fill="#ffea00"/><path d="M48 65 L60 75 L72 65" stroke="#01579b" stroke-width="4" fill="none"/></svg>`,
  darkmage: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M34 55 L20 105 L100 105 L86 55 Z" fill="#212121"/><path d="M48 55 L60 105 L72 55 Z" fill="#b71c1c"/><circle cx="60" cy="42" r="16" fill="#37474f"/><path d="M26 35 L94 35 L60 6 Z" fill="#1a1a2e" stroke="#ff5252" stroke-width="2"/><circle cx="53" cy="42" r="3.5" fill="#ff1744"/><circle cx="67" cy="42" r="3.5" fill="#ff1744"/><line x1="24" y1="22" x2="24" y2="105" stroke="#4e342e" stroke-width="5"/><circle cx="24" cy="20" r="9" fill="#d500f9"/></svg>`,
  werewolf: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="34" y="56" width="52" height="48" rx="14" fill="#5d4037"/><polygon points="36,38 30,14 50,30" fill="#4e342e"/><polygon points="84,38 90,14 70,30" fill="#4e342e"/><circle cx="60" cy="42" r="20" fill="#6d4c41"/><circle cx="50" cy="35" r="3.5" fill="#ffea00"/><circle cx="70" cy="35" r="3.5" fill="#ffea00"/><path d="M50 53 L54 58 L58 53 L62 58 L66 53 L70 58" stroke="#ffffff" stroke-width="2" fill="none"/></svg>`,
  dragon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M35 55 L8 25 L25 68 Z" fill="#b71c1c"/><path d="M85 55 L112 25 L95 68 Z" fill="#b71c1c"/><path d="M38 52 L28 104 L92 104 L82 52 Z" fill="#d32f2f"/><path d="M48 60 L44 104 L76 104 L72 60 Z" fill="#ffb300"/><rect x="40" y="22" width="40" height="34" rx="10" fill="#e53935"/><polygon points="42,24 30,6 50,22" fill="#ffd54f"/><polygon points="78,24 90,6 70,22" fill="#ffd54f"/><circle cx="50" cy="36" r="4" fill="#ffea00"/><circle cx="70" cy="36" r="4" fill="#ffea00"/></svg>`
};

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
// ⚔️ 게임 상태 관리 및 메인 로직
// ==========================================
const gameState = {
  job: "warrior",
  grade: "3학년",
  publisher: "YBM(최)",
  lesson: "ALL",
  level: 1,
  exp: 0,
  hp: 100,
  maxHp: 100,
  atk: 25,
  stage: 0,
  monsterHp: 110,
  monsterMaxHp: 110,
  monsterAtk: 11,
  currentPool: [],
  currentWord: null
};

document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll("select");
  const gradeSelect = document.getElementById("grade-select") || selects[0];
  const pubSelect = document.getElementById("publisher-select") || selects[1];
  const lessonSelect = document.getElementById("lesson-select") || selects[2];

  // 1. 직업 선택 카드 클릭 이벤트 연결
  const jobCards = document.querySelectorAll(".job-card, [data-job]");
  jobCards.forEach((card) => {
    card.addEventListener("click", () => {
      jobCards.forEach((c) => c.classList.remove("selected", "active"));
      card.classList.add("selected", "active");

      const jobAttr = card.getAttribute("data-job") || card.textContent;
      if (jobAttr.includes("archer") || jobAttr.includes("궁수")) {
        gameState.job = "archer";
        gameState.maxHp = 100;
        gameState.atk = 30;
      } else if (jobAttr.includes("mage") || jobAttr.includes("마법사")) {
        gameState.job = "mage";
        gameState.maxHp = 85;
        gameState.atk = 38;
      } else {
        gameState.job = "warrior";
        gameState.maxHp = 130;
        gameState.atk = 24;
      }
      gameState.hp = gameState.maxHp;
    });
  });

  // 2. 학년 -> 출판사 & 단원 드롭다운 연동
  function getGradeKey() {
    if (!gradeSelect) return "3학년";
    const val = gradeSelect.value;
    return Object.keys(publishersByGrade).find((k) => val.includes(k)) || "3학년";
  }

  function refreshPublishersAndLessons() {
    const gradeKey = getGradeKey();
    gameState.grade = gradeKey;

    if (pubSelect) {
      const pubs = publishersByGrade[gradeKey] || [];
      pubSelect.innerHTML = pubs.map((p) => `<option value="${p}">${p}</option>`).join("");
      gameState.publisher = pubSelect.value;
    }

    if (lessonSelect && lessonSelect.options.length === 0) {
      lessonSelect.innerHTML = lessonsList.map((l) => `<option value="${l.id}">${l.name}</option>`).join("");
    }

    updateFilteredWords();
  }

  // 3. 선택된 학년/단원에 따른 출제 가능 어휘 계산 및 화면 표시
  function updateFilteredWords() {
    const gradeKey = getGradeKey();
    const lessonId = lessonSelect ? lessonSelect.value || "ALL" : "ALL";
    gameState.lesson = lessonId;

    const allWords = vocabDict[gradeKey] || [];
    gameState.currentPool =
      lessonId === "ALL"
        ? [...allWords]
        : allWords.filter((item) => item.l.includes(lessonId));

    // 출제 가능 어휘 숫자 업데이트 (ID가 있거나 텍스트에 '출제 가능 어휘'가 포함된 요소 자동 탐색)
    const countEl = document.getElementById("vocab-count");
    if (countEl) {
      countEl.textContent = gameState.currentPool.length;
    } else {
      document.querySelectorAll("p, div, span").forEach((el) => {
        if (el.children.length === 0 && el.textContent.includes("출제 가능 어휘:")) {
          el.textContent = `출제 가능 어휘: ${gameState.currentPool.length}개`;
        }
      });
    }
  }

  if (gradeSelect) gradeSelect.addEventListener("change", refreshPublishersAndLessons);
  if (pubSelect) pubSelect.addEventListener("change", () => (gameState.publisher = pubSelect.value));
  if (lessonSelect) lessonSelect.addEventListener("change", updateFilteredWords);

  // 초기 드롭다운 즉시 세팅
  refreshPublishersAndLessons();

  // 4. [모험 출발하기!] 버튼 클릭 이벤트 연결
  const startBtn =
    document.getElementById("start-btn") ||
    Array.from(document.querySelectorAll("button")).find((b) => b.textContent.includes("모험 출발"));

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      if (gameState.currentPool.length === 0) {
        alert("선택한 단원에 출제할 어휘가 없습니다. 다른 단원을 선택해주세요!");
        return;
      }
      startBattleScreen();
    });
  }
});

// ==========================================
// 🏟️ 전투 화면 렌더링 및 퀴즈 진행
// ==========================================
function startBattleScreen() {
  const setupScreen = document.getElementById("setup-screen") || document.querySelector(".setup-container");
  let battleScreen = document.getElementById("battle-screen");

  if (setupScreen) setupScreen.style.display = "none";

  // index.html에 battle-screen이 미리 없다면 동적으로 생성
  if (!battleScreen) {
    battleScreen = document.createElement("div");
    battleScreen.id = "battle-screen";
    battleScreen.style.cssText =
      "max-width:700px; margin:20px auto; padding:24px; background:#16213e; color:#fff; border-radius:16px; text-align:center; font-family:sans-serif; box-shadow:0 8px 24px rgba(0,0,0,0.4);";
    document.body.appendChild(battleScreen);
  }
  battleScreen.style.display = "block";

  loadStage(0);
}

function loadStage(stageIndex) {
  gameState.stage = stageIndex % monsterRoster.length;
  const mon = monsterRoster[gameState.stage];
  const scale = 1 + Math.floor(stageIndex / monsterRoster.length) * 0.3;

  gameState.monsterMaxHp = Math.round(mon.baseHp * scale);
  gameState.monsterHp = gameState.monsterMaxHp;
  gameState.monsterAtk = Math.round(mon.baseAtk * scale);

  nextQuestion();
}

function nextQuestion() {
  const pool = gameState.currentPool;
  const target = pool[Math.floor(Math.random() * pool.length)];
  gameState.currentWord = target;

  // 오답 보기 3개 추출
  const allGradeWords = vocabDict[gameState.grade];
  const distractors = allGradeWords
    .filter((item) => item.w !== target.w)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const choices = [target, ...distractors].sort(() => Math.random() - 0.5);
  renderBattleUI(choices);
}

function renderBattleUI(choices) {
  const battleScreen = document.getElementById("battle-screen");
  const mon = monsterRoster[gameState.stage];
  const tier = Math.min(4, Math.floor((gameState.level - 1) / 2) + 1);

  battleScreen.innerHTML = `
    <div style="display:flex; justify-content:space-between; margin-bottom:16px; font-size:14px; color:#ffd54f;">
      <span>📚 ${gameState.grade} · ${gameState.publisher} (${gameState.lesson})</span>
      <span>⭐ Lv.${gameState.level} (EXP: ${gameState.exp}/100)</span>
    </div>

    <div style="display:flex; justify-content:space-around; align-items:center; background:#0f3460; padding:20px; border-radius:12px; margin-bottom:20px;">
      <div style="width:42%;">
        <div style="width:110px; height:110px; margin:0 auto;">${getHeroSvg(gameState.job, tier)}</div>
        <div style="font-weight:bold; margin-top:8px;">용사 (Lv.${gameState.level})</div>
        <div style="background:#333; height:12px; border-radius:6px; overflow:hidden; margin-top:6px;">
          <div style="width:${Math.max(0, (gameState.hp / gameState.maxHp) * 100)}%; background:#4ecca3; height:100%;"></div>
        </div>
        <div style="font-size:12px; margin-top:4px;">HP: ${gameState.hp} / ${gameState.maxHp}</div>
      </div>

      <div style="font-size:24px; font-weight:bold; color:#e94560;">VS</div>

      <div style="width:42%;">
        <div style="width:110px; height:110px; margin:0 auto;">${monsterSvg[mon.art]}</div>
        <div style="font-weight:bold; margin-top:8px; color:#ff8a80;">${mon.name}</div>
        <div style="background:#333; height:12px; border-radius:6px; overflow:hidden; margin-top:6px;">
          <div style="width:${Math.max(0, (gameState.monsterHp / gameState.monsterMaxHp) * 100)}%; background:#e94560; height:100%;"></div>
        </div>
        <div style="font-size:12px; margin-top:4px;">HP: ${gameState.monsterHp} / ${gameState.monsterMaxHp}</div>
      </div>
    </div>

    <div id="battle-log" style="min-height:24px; color:#ffd54f; font-size:14px; margin-bottom:12px;">
      단어의 뜻을 맞춰 몬스터를 공격하세요!
    </div>

    <div style="background:#1a1a2e; padding:20px; border-radius:12px; margin-bottom:16px;">
      <div style="font-size:13px; color:#a2a8d3;">[${gameState.currentWord.pos}]</div>
      <div style="font-size:32px; font-weight:bold; letter-spacing:1px; margin:8px 0;">${gameState.currentWord.w}</div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
      ${choices
        .map(
          (c) => `
        <button class="quiz-choice-btn" data-word="${c.w}" style="padding:14px; font-size:16px; font-weight:bold; border:none; border-radius:10px; background:#e94560; color:#fff; cursor:pointer;">
          ${c.m}
        </button>
      `
        )
        .join("")}
    </div>
  `;

  document.querySelectorAll(".quiz-choice-btn").forEach((btn) => {
    btn.addEventListener("click", () => handleAnswer(btn.getAttribute("data-word")));
  });
}

function handleAnswer(selectedWord) {
  const logEl = document.getElementById("battle-log");
  const isCorrect = selectedWord === gameState.currentWord.w;

  if (isCorrect) {
    const dmg = gameState.atk + Math.floor(Math.random() * 8);
    gameState.monsterHp = Math.max(0, gameState.monsterHp - dmg);
    logEl.textContent = `⚔️ 정답! ${monsterRoster[gameState.stage].name}에게 ${dmg}의 데미지를 입혔습니다!`;

    if (gameState.monsterHp === 0) {
      gameState.exp += 50;
      if (gameState.exp >= 100) {
        gameState.level += 1;
        gameState.exp -= 100;
        gameState.maxHp += 20;
        gameState.hp = gameState.maxHp;
        gameState.atk += 5;
        alert(`🎉 레벨 업! Lv.${gameState.level} 달성! 능력치와 외형이 진화합니다!`);
      } else {
        alert(`🏆 ${monsterRoster[gameState.stage].name} 처치 성공! 다음 몬스터가 등장합니다.`);
      }
      loadStage(gameState.stage + 1);
      return;
    }
  } else {
    gameState.hp = Math.max(0, gameState.hp - gameState.monsterAtk);
    logEl.textContent = `💥 오답! 정답은 '${gameState.currentWord.m}'입니다. (-${gameState.monsterAtk} HP)`;

    if (gameState.hp === 0) {
      alert("💀 영웅이 쓰러졌습니다... 처음 화면으로 돌아갑니다.");
      location.reload();
      return;
    }
  }

  setTimeout(nextQuestion, 800);
}
