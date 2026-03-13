// ═══════════════════════════════════════════
//  V říši divů za displejem — Prototype 2.0
// ═══════════════════════════════════════════

// ─── Character Data ───
const characters = {
  Alex: {
    emoji: '💪',
    color: 'turquoise',
    colorHex: '#7EC8C8',
    bio: '17 yo, chodím do gymu, ale jsem i docela fajn',
    interests: 'Fitness · Zdravá strava · Finance',
    description: 'Alex je v předposledním ročníku střední školy a už se těší, až to bude mít celý za sebou a bude se moct věnovat jeho největší vášni – cvičení. Pravidelně chodí po škole do gymu a chtěl by se živit jako osobní trenér, nebo třeba podnikat ve fitness. Po večerech většinou hraje hry nebo se kouká na anime. Je to obyčejný fajn kluk, který nemá moc problémů, jen ho už občas nebaví ta každodenní šeď. Možná právě říše divů mu rozšíří obzory…',
    cases: ['Alex', 'Alexe', 'Alexovi', 'Alexe', 'Alexi', 'Alexovi', 'Alexem'],
    topics: {
      Looksmaxxing: 300, kartičky: 300,
      PPP: 100,
      mentalhealth: -100, RomanEmpire: -100
    }
  },
  Aloisie: {
    emoji: '🧚',
    color: 'cyan',
    colorHex: '#A8E6E0',
    bio: 'Narozená pro to být vílou, nucená být člověkem. Básnířka, baletka, bohémka a snílek.',
    interests: 'Umění · Spiritualita · Balet',
    description: 'Aloisie byla odmalička svá. Ráda nosí různobarevné oblečení, čte obskurní knížky, píše básně a cvičí balet. Ač skončila na gymplu, tak už ví, že umění je pro ni to pravé. Nemůže se rozhodnout, jestli chce být po škole baletkou, činoherní herečkou nebo snad výtvarnou umělkyní. Říše divů by jí mohla pomoci rozhodnout se, co je pro ni dobré…',
    cases: ['Aloisie', 'Aloisie', 'Aloisii', 'Aloisii', 'Aloisie', 'Aloisii', 'Aloisií'],
    topics: {
      Spiritual: 300, PPP: 300,
      RomanEmpire: 100,
      hustle: -100, Looksmaxxing: -100, kartičky: -100
    }
  },
  Alfréd: {
    emoji: '🎮',
    color: 'red',
    colorHex: '#D98A8A',
    bio: 'Gamer, history nerd, single. Jen ten kdo pochopí, že dějiny se neustále opakují, tak dojde k prozření.',
    interests: 'Historie · Videohry · Vztahové tipy',
    description: 'Alfréd je zapálený gamer a milovník historie. Věří, že pochopení minulosti je klíčem k pochopení přítomnosti. Když zrovna nehraje, tak studuje historické bitvy a strategie. Rád by jednou našel někoho, kdo by jeho vášeň sdílel. Říše divů by mu mohla ukázat něco úplně nového…',
    cases: ['Alfréd', 'Alfréda', 'Alfrédovi', 'Alfréda', 'Alfréde', 'Alfrédovi', 'Alfrédem'],
    topics: {
      RomanEmpire: 300,
      Looksmaxxing: 100, hustle: 100, kartičky: 100,
      Spiritual: -100, PPP: -100
    }
  },
  Alžběta: {
    emoji: '🌍',
    color: 'maroon',
    colorHex: '#C47A8A',
    bio: 'Předsedkyně studentského parlamentu. Chci pomáhat zlepšovat tento svět.',
    interests: 'Aktuální dění · Studijní tipy',
    description: 'Alžběta je přirozená vůdkyně. Jako předsedkyně studentského parlamentu se snaží zlepšovat školu i svět kolem sebe. Zajímá se o aktuální dění, organizuje diskuze a dobrovolničí. Věří, že vzdělání a aktivní přístup mohou změnit svět k lepšímu. Říše divů by jí mohla ukázat, že svět je složitější, než se zdá…',
    cases: ['Alžběta', 'Alžběty', 'Alžbětě', 'Alžbětu', 'Alžběto', 'Alžbětě', 'Alžbětou'],
    topics: {
      hustle: 300, mentalhealth: 300,
      kartičky: 100, PPP: 100, Looksmaxxing: 100,
      Spiritual: -100, RomanEmpire: -100
    }
  }
};

// ─── Posts Bank (Level 1) ───
const postIcons = {
  RomanEmpire: '🏛️',
  Looksmaxxing: '💪',
  PPP: '🥗',
  mentalhealth: '🧠',
  kartičky: '🃏',
  Spiritual: '🌿',
  hustle: '📱'
};

const posts = [
  { id: 1, text: 'Věděli jste, že se ve starověkém Římě myli pomocí olivového oleje????', topic: 'RomanEmpire', tag: '#RomanEmpire' },
  { id: 2, text: 'Moje cvičební rutina', topic: 'Looksmaxxing', tag: '#Looksmaxxing' },
  { id: 3, text: 'Tipy na vyváženou stravu', topic: 'PPP', tag: '#PPP' },
  { id: 4, text: 'Jak pečuji o své mentální zdraví?', topic: 'mentalhealth', tag: '#mentalhealth' },
  { id: 5, text: 'POV: Padla ti fakt dobrá karta v Magimonech', topic: 'kartičky', tag: '#kartičky' },
  { id: 6, text: 'Jak se mi daří napojit zpátky na přírodu', topic: 'Spiritual', tag: '#Spiritual' },
  { id: 7, text: 'Aplikace co vám pomůžou s produktivitou', topic: 'hustle', tag: '#hustle' }
];

// ─── Game State ───
let selectedCharacter = null;
let totalScore = 0;
let currentRound = 0;
let rounds = [];
let roundHistory = [];

// ─── Screen Navigation ───
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

// ─── About Modal ───
function openAbout() {
  document.getElementById('about-modal').classList.add('active');
}
function closeAbout() {
  document.getElementById('about-modal').classList.remove('active');
}

// ─── Character Profile Sidebar ───
function toggleProfile() {
  document.getElementById('profile-sidebar').classList.toggle('active');
}

function updateProfileSidebar() {
  if (!selectedCharacter) return;
  const char = characters[selectedCharacter];
  document.getElementById('profile-avatar').textContent = char.emoji;
  document.getElementById('profile-name').textContent = selectedCharacter;
  document.getElementById('profile-bio').textContent = char.description;
  document.getElementById('profile-interests').textContent = char.interests;
}

// ─── Top Bar ───
function showTopBar() {
  if (!selectedCharacter) return;
  const char = characters[selectedCharacter];
  document.getElementById('top-bar-avatar').textContent = char.emoji;
  document.getElementById('top-bar-name').textContent = selectedCharacter;
  document.getElementById('top-bar').classList.remove('hidden');
}

function updateScoreDisplay() {
  document.getElementById('score-display').textContent = totalScore;
}

// ─── Intro Sequence ───
const introSteps = [
  {
    texts: [
      'Od okamžiku kdy Alenka spadla do králičí nory do říše divů uběhlo již více než 150 let. Tehdy byl svět jiný než ten dnešní. Neexistovala auta, televize, počítače nebo mobily. Cestovat do jiného města byl náročný úkol, natož do jiné země. Dnes můžeme poznat jiný svět během pár dotyků obrazovky.',
      'A dneska už se i divíme jiným věcem než kdysi.'
    ],
    action: 'next'
  },
  {
    texts: [
      'Máš jedinečnou možnost pomoct někomu objevit jeho vlastní říši divů.',
      'Kdo dneska spadne do králičí nory?'
    ],
    action: 'characters'
  }
];

let introStep = 0;

function startIntro() {
  showScreen('intro');
  introStep = 0;
  renderIntroStep();
}

function renderIntroStep() {
  const container = document.getElementById('intro-content');
  container.innerHTML = '';

  const step = introSteps[introStep];

  step.texts.forEach((txt, i) => {
    const p = document.createElement('p');
    p.className = 'intro-text';
    p.textContent = txt;
    container.appendChild(p);

    // Stagger the fade-in
    setTimeout(() => {
      requestAnimationFrame(() => p.classList.add('visible'));
    }, i * 400);
  });

  if (step.action === 'next') {
    const btn = document.createElement('button');
    btn.className = 'btn primary';
    btn.innerHTML = '<span>Další →</span>';
    btn.style.marginTop = '2rem';
    btn.style.maxWidth = '220px';
    btn.style.opacity = '0';
    btn.addEventListener('click', () => {
      introStep++;
      renderIntroStep();
    });
    container.appendChild(btn);
    setTimeout(() => { btn.style.opacity = '1'; btn.style.transition = 'opacity 0.5s ease'; }, step.texts.length * 400 + 300);
  } else {
    const link = document.createElement('a');
    link.className = 'intro-link';
    link.textContent = 'Přejít na výběr postavy →';
    link.style.opacity = '0';
    link.addEventListener('click', () => showScreen('character-select'));
    container.appendChild(link);
    setTimeout(() => { link.style.opacity = '1'; link.style.transition = 'opacity 0.5s ease'; }, step.texts.length * 400 + 300);
  }
}

// ─── Character Selection ───
function buildCharacterCards() {
  const track = document.getElementById('carousel-track');
  track.innerHTML = '';

  Object.keys(characters).forEach(name => {
    const char = characters[name];
    const card = document.createElement('div');
    card.className = 'char-card';
    card.dataset.color = char.color;
    card.onclick = () => selectCharacter(name);

    card.innerHTML = `
      <div class="char-avatar">${char.emoji}</div>
      <div class="char-name">${name}</div>
      <div class="char-bio">${char.bio}</div>
      <div class="char-interests">${char.interests}</div>
    `;

    track.appendChild(card);
  });
}

function scrollCarousel(dir) {
  const track = document.querySelector('.carousel-track');
  track.scrollBy({ left: dir * 240, behavior: 'smooth' });
}

function selectCharacter(name) {
  selectedCharacter = name;
  totalScore = 0;

  // Set character-themed background
  document.body.className = '';
  document.body.classList.add(`char-${name}`);

  // Set up profile & top bar
  updateProfileSidebar();
  showTopBar();
  updateScoreDisplay();

  // Start Level 1 intro
  startLevel1Intro();
}

// ─── Level 1 Intro ───
const level1IntroSteps = [];

function buildLevel1IntroSteps() {
  const char = characters[selectedCharacter];
  const genitive = char.cases[1]; // 2. pád

  level1IntroSteps.length = 0;
  level1IntroSteps.push(
    {
      texts: [
        `Koukám, že ses rozhodl/a pro ${selectedCharacter}. Zajímavá volba.`,
        char.description
      ],
      action: 'next'
    },
    {
      texts: [
        `Ty nyní budeš průvodcem, co této osobě pomůže objevit říši divů! Nejdřív ale budeš muset získat ${genitive} pozornost. Toho dosáhneš pomocí příspěvků na sociálních sítích, jak taky jinak, že.`,
        `Vyber příspěvky, které ${genitive} nejspíše zaujmou.`
      ],
      action: 'play'
    }
  );
}

let level1IntroStep = 0;

function startLevel1Intro() {
  buildLevel1IntroSteps();
  level1IntroStep = 0;
  showScreen('level1-intro');
  renderLevel1IntroStep();
}

function renderLevel1IntroStep() {
  const container = document.getElementById('level1-intro-content');
  container.innerHTML = '';

  const step = level1IntroSteps[level1IntroStep];

  step.texts.forEach((txt, i) => {
    const p = document.createElement('p');
    p.className = 'dialog-text';
    p.textContent = txt;
    container.appendChild(p);

    setTimeout(() => {
      requestAnimationFrame(() => p.classList.add('visible'));
    }, i * 500);
  });

  const btn = document.createElement('button');
  btn.className = 'btn primary';
  btn.style.marginTop = '2rem';
  btn.style.maxWidth = '240px';
  btn.style.opacity = '0';

  if (step.action === 'next') {
    btn.innerHTML = '<span>Další →</span>';
    btn.addEventListener('click', () => {
      level1IntroStep++;
      renderLevel1IntroStep();
    });
  } else {
    btn.innerHTML = '<span>Začít level →</span>';
    btn.addEventListener('click', () => {
      prepareLevel1();
      startNextRound();
    });
  }

  container.appendChild(btn);
  setTimeout(() => { btn.style.opacity = '1'; btn.style.transition = 'opacity 0.5s ease'; }, step.texts.length * 500 + 400);
}

// ─── Level 1 Gameplay ───
function prepareLevel1() {
  // Shuffle posts and create 3 rounds of 2 posts each
  const shuffled = [...posts].sort(() => Math.random() - 0.5);

  rounds = [];
  for (let i = 0; i < 6; i += 2) {
    rounds.push([shuffled[i], shuffled[i + 1]]);
  }

  currentRound = 0;
  roundHistory = [];
}

function startNextRound() {
  if (currentRound >= rounds.length) {
    showResults();
    return;
  }

  showScreen('level1-game');
  const pair = rounds[currentRound];

  document.getElementById('round-indicator').textContent = `Kolo ${currentRound + 1} ze ${rounds.length}`;

  const container = document.getElementById('posts-container');
  container.innerHTML = '';

  pair.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.id = `post-${post.id}`;
    card.onclick = () => selectPost(post);

    card.innerHTML = `
      <div class="post-icon">${postIcons[post.topic] || '📄'}</div>
      <div class="post-text">${post.text}</div>
      <div class="post-hashtag">${post.tag}</div>
    `;

    container.appendChild(card);
  });
}

function selectPost(post) {
  const char = characters[selectedCharacter];
  const points = char.topics[post.topic] || 0;

  // Visual feedback on cards
  const pair = rounds[currentRound];
  pair.forEach(p => {
    const el = document.getElementById(`post-${p.id}`);
    if (p.id === post.id) {
      el.classList.add('selected');
    } else {
      el.classList.add('not-selected');
    }
    el.style.pointerEvents = 'none';
  });

  totalScore += points;
  updateScoreDisplay();

  roundHistory.push({ post, points });

  // Show feedback after a brief pause
  setTimeout(() => showFeedback(post, points), 600);
}

function showFeedback(post, points) {
  showScreen('feedback');

  const container = document.getElementById('feedback-content');
  container.innerHTML = '';

  // Points display
  const pointsEl = document.createElement('div');
  pointsEl.className = 'feedback-points';
  if (points >= 300) {
    pointsEl.classList.add('positive');
    pointsEl.textContent = `+${points}`;
  } else if (points >= 100) {
    pointsEl.classList.add('neutral');
    pointsEl.textContent = `+${points}`;
  } else {
    pointsEl.classList.add('negative');
    pointsEl.textContent = `${points}`;
  }
  container.appendChild(pointsEl);

  // Label
  const label = document.createElement('div');
  label.className = 'feedback-label';
  label.textContent = 'bodů pozornosti';
  container.appendChild(label);

  // Post text
  const postText = document.createElement('div');
  postText.className = 'feedback-post-text';
  postText.textContent = `„${post.text}"`;
  container.appendChild(postText);

  // Total
  const total = document.createElement('div');
  total.className = 'feedback-total';
  total.textContent = `Celkem: ${totalScore} bodů`;
  container.appendChild(total);

  // Next button
  const btn = document.createElement('button');
  btn.className = 'btn primary';
  btn.style.marginTop = '1.5rem';
  btn.style.maxWidth = '220px';

  currentRound++;

  if (currentRound < rounds.length) {
    btn.innerHTML = '<span>Další kolo →</span>';
    btn.addEventListener('click', startNextRound);
  } else {
    btn.innerHTML = '<span>Zobrazit výsledky →</span>';
    btn.addEventListener('click', showResults);
  }

  container.appendChild(btn);
}

// ─── Level 1 Results ───
function showResults() {
  showScreen('level1-results');

  const container = document.getElementById('results-content');
  container.innerHTML = '';

  // Icon
  const icon = document.createElement('div');
  icon.className = 'results-icon';
  icon.textContent = totalScore >= 500 ? '🌟' : totalScore >= 200 ? '✨' : '🔮';
  container.appendChild(icon);

  // Title
  const title = document.createElement('h2');
  title.className = 'results-title';
  title.textContent = 'Level 1 dokončen!';
  container.appendChild(title);

  // Score
  const score = document.createElement('div');
  score.className = 'results-score';
  score.textContent = `${totalScore} bodů`;
  container.appendChild(score);

  // Message
  const message = document.createElement('p');
  message.className = 'results-message';
  const genitive = characters[selectedCharacter].cases[1];

  if (totalScore >= 500) {
    message.textContent = `Skvělá práce! Podařilo se ti perfektně upoutat ${genitive} pozornost. Říši divů máš na dosah!`;
  } else if (totalScore >= 200) {
    message.textContent = `Docela dobré! ${selectedCharacter} si tě všímá. Ještě ale máš co zlepšovat na cestě do říše divů.`;
  } else {
    message.textContent = `Hmm, to nebylo úplně ono. ${selectedCharacter} ti zatím moc pozornosti nevěnuje. Zkus to znova!`;
  }
  container.appendChild(message);

  // Breakdown
  const breakdown = document.createElement('div');
  breakdown.className = 'results-breakdown';

  roundHistory.forEach((entry, i) => {
    const row = document.createElement('div');
    row.className = 'result-row';

    const textEl = document.createElement('span');
    textEl.className = 'result-row-text';
    textEl.textContent = `${entry.post.text}`;

    const pointsEl = document.createElement('span');
    pointsEl.className = 'result-row-points';
    if (entry.points >= 300) {
      pointsEl.classList.add('positive');
      pointsEl.textContent = `+${entry.points}`;
    } else if (entry.points >= 100) {
      pointsEl.classList.add('neutral');
      pointsEl.textContent = `+${entry.points}`;
    } else {
      pointsEl.classList.add('negative');
      pointsEl.textContent = `${entry.points}`;
    }

    row.appendChild(textEl);
    row.appendChild(pointsEl);
    breakdown.appendChild(row);
  });

  container.appendChild(breakdown);

  // Restart button
  const btn = document.createElement('button');
  btn.className = 'btn primary';
  btn.style.marginTop = '1.5rem';
  btn.style.maxWidth = '260px';
  btn.innerHTML = '<span>Hrát znovu od začátku</span>';
  btn.addEventListener('click', () => {
    selectedCharacter = null;
    totalScore = 0;
    document.body.className = '';
    document.getElementById('top-bar').classList.add('hidden');
    showScreen('start');
  });
  container.appendChild(btn);

  // End of prototype note
  const note = document.createElement('p');
  note.className = 'results-message';
  note.style.marginTop = '1rem';
  note.style.fontSize = '0.85rem';
  note.style.fontStyle = 'italic';
  note.textContent = '(Konec prototypu — další levely budou přidány v budoucnu)';
  container.appendChild(note);
}

// ─── Floating Particles ───
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h;
  const particles = [];
  const PARTICLE_COUNT = 50;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  // Color palette for particles
  const colors = [
    [126, 200, 200],  // turquoise
    [168, 230, 224],  // cyan
    [217, 138, 138],  // red pastel
    [196, 122, 138]   // maroon pastel
  ];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.35 + 0.08,
      color
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  draw();
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  showScreen('start');
  buildCharacterCards();
  initParticles();
});
