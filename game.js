// 🎨 판타지 캐릭터 & 몬스터 고화질 SVG 일러스트 모음
const svgArt = {
  archer: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- 망토 -->
      <path d="M35 55 L20 105 L100 105 L85 55 Z" fill="#1b5e20"/>
      <!-- 몸통 -->
      <rect x="44" y="55" width="32" height="40" rx="8" fill="#2e7d32"/>
      <rect x="44" y="75" width="32" height="7" fill="#5d4037"/>
      <rect x="56" y="74" width="8" height="9" fill="#ffd54f"/>
      <!-- 얼굴 -->
      <circle cx="60" cy="40" r="18" fill="#ffe0b2"/>
      <!-- 금발 머리카락 -->
      <path d="M40 38 Q42 18 60 18 Q78 18 80 38 Q72 28 60 30 Q48 28 40 38 Z" fill="#fbc02d"/>
      <!-- 궁수 모자 (깃털 달린 후드) -->
      <path d="M38 34 L60 12 L82 34 Z" fill="#388e3c"/>
      <path d="M75 22 Q92 10 95 25 Q82 26 75 22 Z" fill="#ff5252"/>
      <!-- 눈 -->
      <circle cx="53" cy="41" r="2.5" fill="#1a1a2e"/>
      <circle cx="67" cy="41" r="2.5" fill="#1a1a2e"/>
      <path d="M56 48 Q60 51 64 48" stroke="#d84315" stroke-width="2" fill="none"/>
      <!-- 거대한 활과 화살 -->
      <path d="M88 18 Q115 60 88 102" stroke="#8d6e63" stroke-width="5" fill="none" stroke-linecap="round"/>
      <line x1="88" y1="18" x2="88" y2="102" stroke="#e0e0e0" stroke-width="1.5"/>
      <line x1="65" y1="60" x2="112" y2="60" stroke="#ffd54f" stroke-width="3"/>
      <polygon points="116,60 106,55 106,65" fill="#4ecca3"/>
    </svg>`,
  mage: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- 로브 -->
      <path d="M38 55 L25 105 L95 105 L82 55 Z" fill="#311b92"/>
      <path d="M52 55 L60 105 L68 55 Z" fill="#7e57c2"/>
      <!-- 얼굴 -->
      <circle cx="60" cy="42" r="17" fill="#ffe0b2"/>
      <!-- 마법사 고깔모자 -->
      <path d="M30 34 L90 34 L60 6 Z" fill="#4527a0"/>
      <ellipse cx="60" cy="34" rx="34" ry="6" fill="#5e35b1"/>
      <polygon points="60,16 62,22 68,22 63,26 65,31 60,28 55,31 57,26 52,22 58,22" fill="#ffd54f"/>
      <!-- 눈 -->
      <circle cx="54" cy="43" r="2.5" fill="#1a1a2e"/>
      <circle cx="66" cy="43" r="2.5" fill="#1a1a2e"/>
      <!-- 마법 지팡이 -->
      <line x1="94" y1="25" x2="94" y2="105" stroke="#8d6e63" stroke-width="5" stroke-linecap="round"/>
      <circle cx="94" cy="22" r="9" fill="#00e5ff"/>
      <circle cx="94" cy="22" r="4" fill="#ffffff"/>
    </svg>`,
  paladin: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- 갑옷 -->
      <rect x="40" y="54" width="40" height="46" rx="8" fill="#90a4ae"/>
      <path d="M40 54 L60 72 L80 54" fill="#cfd8dc"/>
      <!-- 투구와 얼굴 -->
      <circle cx="60" cy="38" r="18" fill="#ffe0b2"/>
      <path d="M40 36 Q40 14 60 14 Q80 14 80 36 L75 30 L60 34 L45 30 Z" fill="#78909c"/>
      <rect x="57" y="10" width="6" height="14" fill="#ffca28"/>
      <!-- 눈 -->
      <circle cx="53" cy="40" r="2.5" fill="#1a1a2e"/>
      <circle cx="67" cy="40" r="2.5" fill="#1a1a2e"/>
      <!-- 황금 방패 -->
      <path d="M18 55 L42 55 L42 82 Q30 98 18 82 Z" fill="#1565c0" stroke="#ffd54f" stroke-width="3"/>
      <!-- 성검 -->
      <rect x="90" y="25" width="7" height="55" fill="#e0f7fa"/>
      <rect x="82" y="78" width="23" height="6" fill="#ffd54f"/>
      <rect x="91" y="84" width="5" height="14" fill="#5d4037"/>
    </svg>`,
  slime: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- 슬라임 몸통 -->
      <path d="M20 92 Q15 42 60 36 Q105 42 100 92 Q80 104 60 104 Q40 104 20 92 Z" fill="#00e676"/>
      <path d="M32 52 Q42 42 55 44" stroke="#b9f6ca" stroke-width="5" stroke-linecap="round" fill="none"/>
      <!-- 왕관 -->
      <polygon points="42,36 46,18 54,28 60,15 66,28 74,18 78,36" fill="#ffd54f" stroke="#ff8f00" stroke-width="2"/>
      <!-- 눈과 입 -->
      <circle cx="46" cy="66" r="6" fill="#1a1a2e"/>
      <circle cx="48" cy="64" r="2" fill="#ffffff"/>
      <circle cx="74" cy="66" r="6" fill="#1a1a2e"/>
      <circle cx="76" cy="64" r="2" fill="#ffffff"/>
      <path d="M50 80 Q60 90 70 80" stroke="#1a1a2e" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>`,
  orc: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- 오크 몸통 -->
      <rect x="30" y="58" width="60" height="46" rx="12" fill="#558b2f"/>
      <path d="M35 62 L85 95 M85 62 L35 95" stroke="#4e342e" stroke-width="8"/>
      <!-- 얼굴 -->
      <rect x="38" y="24" width="44" height="38" rx="10" fill="#689f38"/>
      <!-- 뿔 & 송곳니 -->
      <polygon points="38,32 24,18 42,24" fill="#eceff1"/>
      <polygon points="82,32 96,18 78,24" fill="#eceff1"/>
      <polygon points="46,54 49,44 52,54" fill="#ffffff"/>
      <polygon points="68,54 71,44 74,54" fill="#ffffff"/>
      <!-- 눈 -->
      <circle cx="50" cy="38" r="4" fill="#ff1744"/>
      <circle cx="70" cy="38" r="4" fill="#ff1744"/>
      <!-- 거대 몽둥이 -->
      <path d="M95 95 L108 30 L116 32 L102 97 Z" fill="#6d4c41"/>
    </svg>`,
  golem: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- 얼음 바위 몸체 -->
      <polygon points="35,45 85,45 98,98 22,98" fill="#4fc3f7" stroke="#0288d1" stroke-width="3"/>
      <polygon points="42,18 78,18 85,45 35,45" fill="#81d4fa" stroke="#0288d1" stroke-width="3"/>
      <!-- 얼음 결정 -->
      <polygon points="28,45 14,25 38,38" fill="#e1f5fe"/>
      <polygon points="92,45 106,25 82,38" fill="#e1f5fe"/>
      <!-- 빛나는 눈 -->
      <rect x="46" y="28" width="10" height="5" fill="#ffea00"/>
      <rect x="64" y="28" width="10" height="5" fill="#ffea00"/>
      <path d="M48 65 L60 75 L72 65" stroke="#01579b" stroke-width="4" fill="none"/>
    </svg>`,
  dragon: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- 날개 -->
      <path d="M35 55 L8 25 L25 68 Z" fill="#b71c1c"/>
      <path d="M85 55 L112 25 L95 68 Z" fill="#b71c1c"/>
      <!-- 드래곤 몸통 -->
      <path d="M38 52 L28 104 L92 104 L82 52 Z" fill="#d32f2f"/>
      <path d="M48 60 L44 104 L76 104 L72 60 Z" fill="#ffb300"/>
      <!-- 머리 & 뿔 -->
      <rect x="40" y="22" width="40" height="34" rx="10" fill="#e53935"/>
      <polygon points="42,24 30,6 50,22" fill="#ffd54f"/>
      <polygon points="78,24 90,6 70,22" fill="#ffd54f"/>
      <!-- 불꽃 눈 & 입 -->
      <circle cx="50" cy="36" r="4" fill="#ffea00"/>
      <circle cx="70" cy="36" r="4" fill="#ffea00"/>
      <path d="M48 47 L54 43 L60 47 L66 43 L72 47" stroke="#ffffff" stroke-width="2.5" fill="none"/>
    </svg>`
};

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

const monstersByGrade = {
  "3학년": { art: "slime", name: "슬라임 킹", maxHp: 110 },
  "4학년": { art: "orc", name: "숲속의 오크", maxHp: 135 },
  "5학년": { art: "golem", name: "얼음 골렘", maxHp: 160 },
  "6학년": { art: "dragon", name: "레드 드래곤", maxHp: 185 }
};

const heroJobs = {
  mage: {
    art: "mage",
    title: "영어 마법사",
    weapons: ["견습생의 지팡이", "불꽃의 마도팡이", "현자의 별빛 지팡이", "천공의 아크스태프", "전설의 드래곤 지팡이"]
  },
  archer: {
    art: "archer",
    title: "바람의 궁수",
    weapons: ["참나무 활", "질풍의 장궁", "은빛 달의 활", "태양의 불꽃활", "전설의 신궁 아폴론"]
  },
  paladin: {
    art: "paladin",
    title: "빛의 성기사",
    weapons: ["강철 대검", "수호자의 성검", "사자왕의 황금검", "천상의 빛의 검", "전설의 엑스칼리버"]
  }
};

const petStages = [
  { icon: "🥚", name: "신비한 알", dmg: 0 },
  { icon: "🐣", name: "아기 병아리", dmg: 4 },
  { icon: "🐲", name: "아기 드래곤", dmg: 9 },
  { icon: "🦄", name: "전설의 유니콘", dmg: 15 }
];

// 영구 성장 데이터 (localStorage 연동)
let saveState = JSON.parse(localStorage.getItem('elem_rpg_save_v2') || 'null') || {
  gold: 50,
  heroLv: 1,
  heroExp: 0,
  weaponLv: 0,
  petExp: 0
};

function persistSave() {
  localStorage.setItem('elem_rpg_save_v2', JSON.stringify(saveState));
}

let selectedHero = "archer";
let activeQuizPool = [];
let mage = { hp: 100, maxHp: 100, mp: 100, maxMp: 100 };
let warrior = { hp: 110, maxHp: 110, rage: 0, maxRage: 100 };
let isGameOver = false;
let currentSkill = null;
let currentQuiz = null;

let comboCount = 0;
let feverTurns = 0;
let doubleDamageActive = false;
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
  // 메뉴 미리보기 캐릭터 SVG 삽입
  document.getElementById('preview-mage').innerHTML = svgArt.mage;
  document.getElementById('preview-archer').innerHTML = svgArt.archer;
  document.getElementById('preview-paladin').innerHTML = svgArt.paladin;
  selectHero('archer');
  onGradeChange();
  updateMenuStats();
}

function updateMenuStats() {
  document.getElementById('menu-hero-lv').innerText = saveState.heroLv;
  document.getElementById('menu-weapon-lv').innerText = saveState.weaponLv;
  document.getElementById('menu-gold-info').innerText = `💰 보유 골드: ${saveState.gold}G`;
  document.getElementById('collection-summary').innerText = `📖 도감 수집: ${collectedWords.length}개`;
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

function getHeroMaxStats() {
  return {
    maxHp: 100 + (saveState.heroLv - 1) * 15,
    maxMp: 100 + (saveState.heroLv - 1) * 10,
    maxExp: saveState.heroLv * 100
  };
}

function getWeaponName() {
  const list = heroJobs[selectedHero].weapons;
  const idx = Math.min(list.length - 1, Math.floor(saveState.weaponLv / 2));
  return `${list[idx]} (+${saveState.weaponLv})`;
}

function getForgeCost() {
  return 40 + saveState.weaponLv * 25;
}

function startGame() {
  const grade = document.getElementById('grade-select').value;
  const pub = document.getElementById('pub-select').value;
  const lessonText = document.getElementById('lesson-select').selectedOptions[0].text;
  const monsterInfo = monstersByGrade[grade];
  const heroInfo = heroJobs[selectedHero];
  const stats = getHeroMaxStats();

  document.getElementById('current-scope-badge').innerText = `${grade} | ${pub} | ${lessonText}`;
  document.getElementById('hero-art-box').innerHTML = svgArt[heroInfo.art];
  document.getElementById('hero-title').innerText = heroInfo.title;

  document.getElementById('monster-art-box').innerHTML = svgArt[monsterInfo.art];
  document.getElementById('monster-name').innerText = monsterInfo.name;
  document.getElementById('warrior-maxhp-text').innerText = monsterInfo.maxHp;
  setMonsterSpeech("덤벼라, 꼬마 영웅!");

  document.getElementById('selector-panel').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';

  mage = { hp: stats.maxHp, maxHp: stats.maxHp, mp: stats.maxMp, maxMp: stats.maxMp };
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
  log(`⚔️ [Lv.${saveState.heroLv} ${heroInfo.title}] 출격! ${monsterInfo.name}과(와) 대결합니다!`);
}

function backToMenu() {
  clearInterval(timerInterval);
  document.querySelector('.game-container').classList.remove('fever-active');
  document.getElementById('game-screen').style.display = 'none';
  document.getElementById('selector-panel').style.display = 'block';
  updateMenuStats();
}

function setMonsterSpeech(text) {
  document.getElementById('monster-speech').innerText = text;
}

function getPetStage() {
  const lv = Math.min(4, Math.floor(saveState.petExp / 3) + 1);
  return { lv, ...petStages[lv - 1] };
}

function updateUI() {
  const stats = getHeroMaxStats();
  mage.maxHp = stats.maxHp;
  mage.maxMp = stats.maxMp;

  document.getElementById('hero-lv-text').innerText = saveState.heroLv;
  document.getElementById('weapon-tag').innerText = `⚔️ ${getWeaponName()}`;
  document.getElementById('forge-cost-text').innerText = getForgeCost();

  document.getElementById('mage-hp-text').innerText = mage.hp;
  document.getElementById('mage-maxhp-text').innerText = mage.maxHp;
  document.getElementById('mage-hp-bar').style.width = (mage.hp / mage.maxHp * 100) + '%';

  document.getElementById('mage-mp-text').innerText = mage.mp;
  document.getElementById('mage-maxmp-text').innerText = mage.maxMp;
  document.getElementById('mage-mp-bar').style.width = (mage.mp / mage.maxMp * 100) + '%';

  document.getElementById('hero-exp-text').innerText = saveState.heroExp;
  document.getElementById('hero-maxexp-text').innerText = stats.maxExp;
  document.getElementById('hero-exp-bar').style.width = (saveState.heroExp / stats.maxExp * 100) + '%';

  document.getElementById('warrior-hp-text').innerText = warrior.hp;
  document.getElementById('warrior-hp-bar').style.width = (warrior.hp / warrior.maxHp * 100) + '%';
  document.getElementById('warrior-rage-text').innerText = warrior.rage;
  document.getElementById('warrior-rage-bar').style.width = (warrior.rage / warrior.maxRage * 100) + '%';

  document.getElementById('gold-text').innerText = saveState.gold;
  document.getElementById('dex-count-btn').innerText = collectedWords.length;

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

// 경험치 획득 및 레벨업 처리
function gainHeroExp(amount) {
  saveState.heroExp += amount;
  let maxExp = getHeroMaxStats().maxExp;
  while (saveState.heroExp >= maxExp) {
    saveState.heroExp -= maxExp;
    saveState.heroLv++;
    const newStats = getHeroMaxStats();
    mage.maxHp = newStats.maxHp;
    mage.maxMp = newStats.maxMp;
    mage.hp = mage.maxHp;
    mage.mp = mage.maxMp;
    maxExp = newStats.maxExp;
    log(`🎊 <b>LEVEL UP! 영웅이 Lv.${saveState.heroLv}로 성장했습니다! (최대 HP/MP 상승 & 완전 회복!)</b>`);
  }
  persistSave();
}

// 대장간 무기 업그레이드
function upgradeWeapon() {
  const cost = getForgeCost();
  if (saveState.gold < cost) {
    return alert(`무기 강화 골드가 부족합니다! (필요: ${cost}G / 보유: ${saveState.gold}G)`);
  }
  saveState.gold -= cost;
  saveState.weaponLv++;
  persistSave();
  log(`🔨 <b>대장간 강화 성공! [${getWeaponName()}]이(가) 되었습니다! (기본 공격력 +${saveState.weaponLv * 4})</b>`);
  updateUI();
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

function buyAndUseItem(type) {
  if (isGameOver) return;
  if (type === 'potion') {
    if (saveState.gold < 30) return alert('골드가 부족합니다! (필요: 30G)');
    if (mage.hp >= mage.maxHp) return alert('이미 체력이 가득 찼습니다!');
    saveState.gold -= 30;
    mage.hp = Math.min(mage.maxHp, mage.hp + 45);
    persistSave();
    log(`🧪 <b>체력 물약</b>을 마셔 HP가 45 회복되었습니다!`);
    updateUI();
  } else if (type === 'double') {
    if (saveState.gold < 40) return alert('골드가 부족합니다! (필요: 40G)');
    if (doubleDamageActive) return alert('이미 더블 공격 주문서가 적용되어 있습니다!');
    saveState.gold -= 40;
    doubleDamageActive = true;
    persistSave();
    log(`📜 <b>더블 공격 주문서</b> 발동! 다음 공격 데미지가 2배가 됩니다!`);
    updateUI();
  }
}

function useHintMagnifier() {
  if (!currentQuiz || currentQuiz.type !== 'choice') return alert('객관식 문제에서만 사용할 수 있습니다!');
  if (saveState.gold < 20) return alert('골드가 부족합니다! (필요: 20G)');

  const buttons = Array.from(document.querySelectorAll('#quiz-options button'));
  const wrongButtons = buttons.filter((btn, idx) => idx !== currentQuiz.answer && !btn.disabled);
  if (wrongButtons.length < 2) return alert('이미 힌트를 사용했습니다!');

  saveState.gold -= 20;
  persistSave();
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
    fireball: '🔥 기본 공격 퀴즈',
    thunder: '⚡ 필살기 (스펠링 입력!)',
    heal: '💚 치유 마법 퀴즈',
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
  }
}

function handleCorrectAnswer(isSpeedCrit) {
  comboCount++;
  saveState.gold += 15;
  const prevLv = getPetStage().lv;
  saveState.petExp++;
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
  log(`⭕ <b>정답!</b> (${currentQuiz.targetWord.w} = ${currentQuiz.targetWord.m}) [+15G / +25 EXP]`);
  gainHeroExp(25);
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
  const weaponBonus = saveState.weaponLv * 4;
  const critChance = selectedHero === 'archer' ? 0.45 : 0.2;
  const isCrit = isSpeedCrit || Math.random() < critChance;

  let baseDmg = 0;
  if (skill === 'fireball') {
    if (!isFree) mage.mp -= 20;
    baseDmg = Math.floor(Math.random() * 10) + 18 + comboBonus + mageJobBonus + weaponBonus;
  } else if (skill === 'thunder') {
    if (!isFree) mage.mp -= 30;
    baseDmg = Math.floor(Math.random() * 14) + 32 + comboBonus + mageJobBonus + weaponBonus;
  } else if (skill === 'heal') {
    if (!isFree) mage.mp -= 25;
    const heal = 35 + comboBonus + (saveState.heroLv - 1) * 5;
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
    log(`${skill === 'thunder' ? '⚡' : '🔥'} 적에게 <b>${baseDmg}</b>의 피해! (무기 보너스 +${weaponBonus}) ${isSpeedCrit ? '⚡<b>SPEED CRITICAL!</b>' : (isCrit ? '💥<b>치명타!</b>' : '')}`);
  }

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
    saveState.gold += 60;
    setMonsterSpeech("끄아악... 네 영어 실력에 졌다...");
    log(`🎉 <b>승리! 보상으로 +60G와 +50 EXP를 획득했습니다!</b>`);
    gainHeroExp(50);
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
  persistSave();
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
