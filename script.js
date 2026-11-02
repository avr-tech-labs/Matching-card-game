const gridContainer = document.getElementById('grid-container');
const movesContainer = document.getElementById('moves');
const scoreContainer = document.getElementById('score-display');
const timerContainer = document.getElementById('timer');
const bestScoreContainer = document.getElementById('best-score');
const progressText = document.getElementById('progress-text');
const progressTrack = document.getElementById('progress-track');
const progressFill = document.getElementById('progress-fill');
const messageContainer = document.getElementById('game-message');
const difficultySelect = document.getElementById('difficulty');
const themeSelect = document.getElementById('theme-select');
const hintButton = document.getElementById('hint-btn');
const hintCountContainer = document.getElementById('hint-count');
const freezeButton = document.getElementById('freeze-btn');
const freezeCountContainer = document.getElementById('freeze-count');
const achievementsDisplay = document.getElementById('achievements-display');
const restartButton = document.getElementById('restart-btn');
const soundButton = document.getElementById('sound-btn');
const soundIcon = document.getElementById('sound-icon');
const soundLabel = document.getElementById('sound-label');
const winModal = document.getElementById('win-modal');
const winSummary = document.getElementById('win-summary');
const winStars = document.getElementById('win-stars');
const playAgainButton = document.getElementById('play-again-btn');
const nextLevelButton = document.getElementById('next-level-btn');
const journeyTab = document.getElementById('journey-tab');
const freeplayTab = document.getElementById('freeplay-tab');
const journeyPanel = document.getElementById('journey-panel');
const freeplayPanel = document.getElementById('freeplay-panel');
const levelList = document.getElementById('level-list');
const levelPickerPanel = document.getElementById('level-picker-panel');
const levelPickerToggle = document.getElementById('level-picker-toggle');
const levelPickerLabel = document.getElementById('level-picker-label');
const levelCount = document.getElementById('level-count');
const levelDescription = document.getElementById('level-description');
const progressLabel = document.getElementById('progress-label');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const languageButton = document.getElementById('language-btn');
const dailyStartButton = document.getElementById('daily-start-btn');
const campaignStartButton = document.getElementById('campaign-start-btn');
const freeplayStartButton = document.getElementById('freeplay-start-btn');
const homeButton = document.getElementById('home-btn');
const dailyDateLabel = document.getElementById('daily-date-label');
const dailyStreakDisplay = document.getElementById('daily-streak');
const dailyBestStreakDisplay = document.getElementById('daily-best-streak');
const homeLevelDisplay = document.getElementById('home-level');
const winEyebrow = document.getElementById('win-eyebrow');

const translations = {
    en: {
        soundOn: 'Sound on', soundOff: 'Sound off', switchLanguage: 'తెలుగు',
        pageTitle: 'AVR Tech Labs | Memory Match', statsLabel: 'Daily challenge statistics',
        yourAdventure: 'YOUR ADVENTURE', combo: 'Combo', chooseDifficulty: 'Choose difficulty',
        chooseTheme: 'Choose theme', memoryCards: 'Memory cards', levelsLabel: 'Choose from 500 levels',
        brainBreak: 'A LITTLE BRAIN BREAK', welcomeReady: 'Ready to', welcomeMatch: 'match?',
        welcomeCopy: 'Train your memory, build your streak, and make every move count.',
        dailyChallenge: 'DAILY CHALLENGE', dailyTitle: 'A new puzzle, every day',
        playDaily: "Play today's challenge", currentStreak: 'Current streak', bestStreak: 'Best streak',
        nextLevel: 'Next level', days: 'days', day: 'day', level: 'Level',
        levelJourney: 'Level journey', journeyCopy: '500 levels. One match at a time.',
        freePlay: 'Free play', freeCopy: 'Choose a deck and play your way.',
        backHome: 'Back to home', memoryTitle: 'Memory', matchTitle: 'Match', gameTitle: 'Memory Match',
        gameCopy: 'Match every pair, beat your best score, and unlock 500 levels — or relax in free play.',
        difficulty: 'Difficulty', easy: 'Easy · 8 pairs', medium: 'Medium · 12 pairs', hard: 'Hard · 18 pairs',
        theme: 'Theme', mixedEmojis: 'Mixed Emojis', animals: 'Animals', food: 'Delicious Food',
        nature: 'Nature & Weather', objects: 'Random Objects', hint: 'Hint', freeze: 'Freeze',
        newGame: 'New game', moves: 'Moves', score: 'Score', time: 'Time', best: 'Best',
        pairsFound: 'Pairs found', pickCard: 'Pick any card to get started.',
        footer: 'Take your time. Trust your memory.', brilliant: 'THAT WAS BRILLIANT',
        youDidIt: 'You did it!', replayLevel: 'Replay level', nextLevelButton: 'Next level',
        pairs: 'pairs',
        chooseLevel: 'Choose a level', selected: 'selected', locked: 'locked', completed: 'Completed',
        revealed: 'revealed', hiddenCard: 'Hidden card', matched: 'Matched',
        levelPairs: 'Level {level} · {pairs} pairs', timeLimit: ' · {time} time limit',
        moveBest: '{moves} moves', pointsBest: '{score} pts',
        levelProgress: 'Level progress', niceMatch: 'Nice match! Found {matched} of {total} pairs.',
        comboMessage: '{combo}x combo! Keep it up!', mismatch: 'Not quite — try to remember those cards.',
        peek: 'Quick peek! Remember where the pairs are.', yourTurn: 'Your turn — find a matching pair.',
        frozenMessage: 'Time frozen for 10 seconds!', timerResumed: 'Timer resumed. Keep going!',
        timeUpMessage: 'Time is up. Give it another try!', keepGoing: 'KEEP GOING',
        timeUpTitle: "Time's up!", timeoutSummary: 'Daily challenge over. You found {matched} of {total} pairs in {moves} moves.',
        timeoutLevelSummary: 'Level {level} ran out of time. You found {matched} of {total} pairs in {moves} moves.',
        winSummary: 'You matched all {matched} pairs in {moves} moves {time}.{record}',
        dailyWinSummary: 'Daily challenge complete! {score} points in {time}. Your streak is {streak} {days}.{record}',
        levelWinSummary: 'Level {level} complete! You matched {matched} pairs in {moves} moves {time}.{record} Level {next} is unlocked.',
        allLevelsSummary: 'You conquered all {total} levels! {record}',
        newRecord: ' New personal best!', greatWork: ' All pairs found. Fantastic work!',
        firstVictory: 'First victory', quickThinker: 'Quick thinker', sharpMemory: 'Sharp memory',
        dailyDone: 'Challenge complete · best {score} pts', dailyReady: "Today's challenge · 8 pairs · 90 seconds",
        dailyReadyPlayed: "Today's challenge complete! Play again or keep your streak alive.",
        noRecord: '—', timeLeft: 'Time left', inTime: 'in {time}', withTimeLeft: 'with {time} left',
        tryAgain: 'Try again', playAgain: 'Play again'
    },
    te: {
        soundOn: 'శబ్దం ఆన్', soundOff: 'శబ్దం ఆఫ్', switchLanguage: 'English',
        pageTitle: 'AVR Tech Labs | జ్ఞాపకశక్తి మ్యాచ్', statsLabel: 'రోజువారీ ఛాలెంజ్ గణాంకాలు',
        yourAdventure: 'మీ ప్రయాణం', combo: 'కాంబో', chooseDifficulty: 'కష్టాన్ని ఎంచుకోండి',
        chooseTheme: 'థీమ్ ఎంచుకోండి', memoryCards: 'జ్ఞాపకశక్తి కార్డులు', levelsLabel: '500 స్థాయిల్లో ఎంచుకోండి',
        brainBreak: 'చిన్న మెదడు విరామం', welcomeReady: 'మ్యాచ్ చేయడానికి', welcomeMatch: 'సిద్ధమా?',
        welcomeCopy: 'మీ జ్ఞాపకశక్తికి పదును పెట్టండి, స్ట్రీక్ పెంచుకోండి, ప్రతి కదలికలో గెలవండి.',
        dailyChallenge: 'రోజువారీ ఛాలెంజ్', dailyTitle: 'ప్రతిరోజూ కొత్త పజిల్',
        playDaily: 'ఈరోజు ఛాలెంజ్ ఆడండి', currentStreak: 'ప్రస్తుత స్ట్రీక్', bestStreak: 'అత్యుత్తమ స్ట్రీక్',
        nextLevel: 'తదుపరి స్థాయి', days: 'రోజులు', day: 'రోజు', level: 'స్థాయి',
        levelJourney: 'స్థాయిల ప్రయాణం', journeyCopy: '500 స్థాయిలు. ఒక్కో మ్యాచ్‌తో ముందుకు.',
        freePlay: 'ఫ్రీ ప్లే', freeCopy: 'డెక్ ఎంచుకుని మీకు నచ్చినట్లు ఆడండి.',
        backHome: 'హోమ్‌కు వెళ్ళండి', memoryTitle: 'జ్ఞాపకశక్తి', matchTitle: 'మ్యాచ్', gameTitle: 'జ్ఞాపకశక్తి మ్యాచ్',
        gameCopy: 'జతలను కనుగొనండి, మీ రికార్డును మెరుగుపరచండి, 500 స్థాయిలను దాటండి.',
        difficulty: 'కష్టం', easy: 'సులభం · 8 జతలు', medium: 'మధ్యస్థం · 12 జతలు', hard: 'కష్టం · 18 జతలు',
        theme: 'థీమ్', mixedEmojis: 'మిశ్రమ ఎమోజీలు', animals: 'జంతువులు', food: 'రుచికరమైన ఆహారం',
        nature: 'ప్రకృతి & వాతావరణం', objects: 'వస్తువులు', hint: 'సూచన', freeze: 'టైమర్ ఆపు',
        newGame: 'కొత్త ఆట', moves: 'కదలికలు', score: 'స్కోరు', time: 'సమయం', best: 'రికార్డు',
        pairsFound: 'కనుగొన్న జతలు', pickCard: 'ప్రారంభించడానికి ఏదైనా కార్డును ఎంచుకోండి.',
        footer: 'నిదానంగా ఆడండి. మీ జ్ఞాపకశక్తిని నమ్మండి.', brilliant: 'అద్భుతంగా ఆడారు',
        youDidIt: 'మీరు సాధించారు!', replayLevel: 'మళ్లీ ఆడండి', nextLevelButton: 'తదుపరి స్థాయి',
        pairs: 'జతలు',
        chooseLevel: 'స్థాయిని ఎంచుకోండి', selected: 'ఎంచుకున్నారు', locked: 'లాక్ అయింది', completed: 'పూర్తయింది',
        revealed: 'తెరిచిన కార్డు', hiddenCard: 'దాచిన కార్డు', matched: 'జత కలిసింది',
        levelPairs: 'స్థాయి {level} · {pairs} జతలు', timeLimit: ' · {time} గడువు',
        moveBest: '{moves} కదలికలు', pointsBest: '{score} పాయింట్లు',
        levelProgress: 'స్థాయి పురోగతి', niceMatch: 'చక్కని మ్యాచ్! {total}లో {matched} జతలు కనుగొన్నారు.',
        comboMessage: '{combo}x కాంబో! కొనసాగించండి!', mismatch: 'కుదరలేదు — ఆ కార్డులను గుర్తుంచుకోండి.',
        peek: 'ఒక్కసారి చూడండి! జతల స్థానాలను గుర్తుంచుకోండి.', yourTurn: 'మీ వంతు — జతను కనుగొనండి.',
        frozenMessage: '10 సెకన్ల పాటు టైమర్ ఆగింది!', timerResumed: 'టైమర్ మళ్లీ మొదలైంది. కొనసాగించండి!',
        timeUpMessage: 'సమయం ముగిసింది. మరోసారి ప్రయత్నించండి!', keepGoing: 'ప్రయత్నం కొనసాగించండి',
        timeUpTitle: 'సమయం ముగిసింది!', timeoutSummary: 'రోజువారీ ఛాలెంజ్ ముగిసింది. {total}లో {matched} జతలు, {moves} కదలికల్లో కనుగొన్నారు.',
        timeoutLevelSummary: 'స్థాయి {level} సమయం ముగిసింది. {total}లో {matched} జతలు, {moves} కదలికల్లో కనుగొన్నారు.',
        winSummary: '{matched} జతలను {moves} కదలికల్లో కనుగొన్నారు {time}.{record}',
        dailyWinSummary: 'రోజువారీ ఛాలెంజ్ పూర్తి! {time}లో {score} పాయింట్లు. మీ స్ట్రీక్ {streak} {days}.{record}',
        levelWinSummary: 'స్థాయి {level} పూర్తి! {moves} కదలికల్లో {matched} జతలు {time}.{record} స్థాయి {next} అన్‌లాక్ అయింది.',
        allLevelsSummary: 'మొత్తం {total} స్థాయిలను పూర్తి చేశారు! {record}',
        newRecord: ' కొత్త రికార్డు!', greatWork: ' అన్ని జతలు దొరికాయి. అద్భుతం!',
        firstVictory: 'మొదటి విజయం', quickThinker: 'వేగవంతమైన ఆలోచన', sharpMemory: 'పదునైన జ్ఞాపకశక్తి',
        dailyDone: 'ఛాలెంజ్ పూర్తి · రికార్డు {score} పాయింట్లు', dailyReady: 'ఈరోజు ఛాలెంజ్ · 8 జతలు · 90 సెకన్లు',
        dailyReadyPlayed: 'ఈరోజు ఛాలెంజ్ పూర్తి! మళ్లీ ఆడి మీ స్ట్రీక్‌ను కొనసాగించండి.',
        noRecord: '—', timeLeft: 'మిగిలిన సమయం', inTime: '{time}లో', withTimeLeft: 'ఇంకా {time} సమయం ఉంది',
        tryAgain: 'మళ్లీ ప్రయత్నించండి', playAgain: 'మళ్లీ ఆడండి'
    }
};

const difficulties = {
    easy: { pairs: 8, columns: 4 },
    medium: { pairs: 12, columns: 6 },
    hard: { pairs: 18, columns: 6 }
};
const MAX_LEVELS = 500;
const MAX_PAIRS = 24;
const HINTS_PER_GAME = 3;
const FREEZES_PER_GAME = 1;
const COMBO_TIMEOUT = 3000;
const levels = Array.from({ length: MAX_LEVELS }, (_, index) => {
    const number = index + 1;
    const pairs = Math.min(MAX_PAIRS, 4 + Math.floor(index / 10));
    const type = number % 25 === 0 ? 'speed' : number % 10 === 0 ? 'boss' : 'normal';
    const timeLimit = number >= 61
        ? Math.max(180, 480 - Math.floor((number - 61) * 0.68))
        : null;
    return { number, pairs, timeLimit, type };
});

const emojis = {
    animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🦆', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🪲', '🐞', '🦋', '🐌', '🐢', '🐍', '🦎', '🐙', '🦑', '🦀', '🐠', '🐬', '🐳', '🦈'],
    food: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🥑', '🥕', '🌽', '🍕', '🍔', '🍟', '🌮', '🍿', '🍩', '🍪', '🎂', '🍭', '🍦', '🍧', '🍨', '🍰', '🧁', '🥧', '🍫', '🍬'],
    nature: ['🌵', '🌲', '🌴', '🌳', '🌷', '🌻', '🌼', '🌈', '⭐', '🌙', '☀️', '❄️', '🔥', '🍀', '🍁', '🍂', '🌿', '🌾', '🌱', '🍃', '🎋', '🎍', '☘️', '🪴', '🍄', '🐚', '🌎', '🌍', '🌏', '🌕', '🌖', '🌗', '🌘', '🌑', '🌓', '🌔', '🌚', '🌛'],
    objects: ['⚽', '🏀', '🎾', '🎸', '🎹', '🚀', '🚲', '🎈', '🎁', '💎', '👑', '🎨', '🎯', '🎲', '🧩', '📚', '💡', '🎧', '🛸', '🚕', '🚁', '⛵', '🌍', '🏰', '🪄', '🧸', '🤖', '👻', '🎭', '🧶', '🧵', '🪡', '👜', '💼', '👓', '🕶️', '🪞', '💄', '💍'],
    mixed: [
        '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮',
        '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🦆', '🦉', '🦇', '🐺', '🐗', '🐴',
        '🦄', '🐝', '🪲', '🐞', '🦋', '🐌', '🐢', '🐍', '🦎', '🐙', '🦑', '🦀',
        '🐠', '🐬', '🐳', '🦈', '🐊', '🦓', '🦒', '🦘', '🦬', '🐘', '🦏', '🦛',
        '🐪', '🦚', '🌵', '🌲', '🌴', '🌳', '🌷', '🌻', '🌼', '🌈', '⭐', '🌙',
        '☀️', '❄️', '🔥', '🍀', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓',
        '🫐', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🥑', '🥕', '🌽', '🍕',
        '🍔', '🍟', '🌮', '🍿', '🍩', '🍪', '🎂', '🍭', '⚽', '🏀', '🎾', '🎸',
        '🎹', '🚀', '🚲', '🎈', '🎁', '💎', '👑', '🎨', '🎯', '🎲', '🧩', '📚',
        '💡', '🎧', '🛸', '🚕', '🚁', '⛵', '🌍', '🏰', '🪄', '🧸', '🤖', '👻'
    ]
};

let gameMode = 'journey';
let language = localStorage.getItem('memory-match-language') === 'te' ? 'te' : 'en';
let selectedLevel = 1;
let dailySessionDate = null;
let currentPairs = 0;
let cards = [];
let firstCard = null;
let secondCard = null;
let moves = 0;
let score = 0;
let combo = 0;
let lastMatchTime = 0;
let matchedPairs = 0;
let hintsRemaining = HINTS_PER_GAME;
let freezesRemaining = FREEZES_PER_GAME;
let elapsedSeconds = 0;
let hasStarted = false;
let gameFinished = false;
let gameWasWon = false;
let lastWasNewBest = false;
let lastDailyStreak = 0;
let isFrozen = false;
let lockBoard = false;
let timerInterval = null;
let mismatchTimeout = null;
let hintTimeout = null;
let freezeTimeout = null;
let audioContext = null;
let soundEnabled = localStorage.getItem('memory-match-sound') !== 'false';

function t(key, values = {}) {
    let message = translations[language][key] || translations.en[key] || key;
    Object.entries(values).forEach(([name, value]) => {
        message = message.replaceAll(`{${name}}`, String(value));
    });
    return message;
}

function getDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function seededRandom(seedText) {
    let seed = 2166136261;
    for (const character of seedText) {
        seed ^= character.charCodeAt(0);
        seed = Math.imul(seed, 16777619);
    }
    return () => {
        seed += 0x6D2B79F5;
        let value = seed;
        value = Math.imul(value ^ (value >>> 15), value | 1);
        value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
        return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
}

function updateHomeDashboard() {
    const today = getDateKey();
    const lastCompleted = localStorage.getItem('memory-match-daily-last-date');
    const completedToday = lastCompleted === today;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const streak = lastCompleted === today || lastCompleted === getDateKey(yesterday)
        ? Number(localStorage.getItem('memory-match-daily-streak') || 0)
        : 0;
    const bestStreak = Number(localStorage.getItem('memory-match-daily-best-streak') || 0);
    const dailyBest = getBestScore(`daily-${today}`) || 0;

    dailyDateLabel.textContent = new Intl.DateTimeFormat(language === 'te' ? 'te-IN' : 'en-US', {
        weekday: 'long', month: 'long', day: 'numeric'
    }).format(new Date());
    dailyStreakDisplay.textContent = `${streak} ${streak === 1 ? t('day') : t('days')}`;
    dailyBestStreakDisplay.textContent = `${bestStreak} ${bestStreak === 1 ? t('day') : t('days')}`;
    homeLevelDisplay.textContent = `${t('level')} ${getUnlockedLevel()}`;
    dailyStartButton.querySelector('[data-i18n="playDaily"]').textContent = completedToday
        ? t('dailyDone', { score: dailyBest })
        : t('playDaily');
    dailyStartButton.setAttribute('aria-label', completedToday
        ? t('dailyDone', { score: dailyBest })
        : t('dailyReady'));
    if (!completedToday) {
        dailyDateLabel.textContent = `${dailyDateLabel.textContent} · ${t('dailyReady')}`;
    } else {
        dailyDateLabel.textContent = t('dailyReadyPlayed');
    }
}

function translatePage() {
    document.documentElement.lang = language;
    document.title = t('pageTitle');
    document.querySelectorAll('[data-i18n]').forEach(element => {
        element.textContent = t(element.dataset.i18n);
    });
    document.getElementById('game-modes').setAttribute('aria-label', language === 'te' ? 'ఆట విధానం' : 'Game mode');
    document.querySelector('.home-stats').setAttribute('aria-label', t('statsLabel'));
    difficultySelect.setAttribute('aria-label', t('chooseDifficulty'));
    themeSelect.setAttribute('aria-label', t('chooseTheme'));
    levelPickerToggle.setAttribute('aria-label', t('chooseLevel'));
    levelList.setAttribute('aria-label', t('levelsLabel'));
    gridContainer.setAttribute('aria-label', t('memoryCards'));
    hintButton.title = language === 'te' ? 'అన్ని కార్డులను కాసేపు చూపించు' : 'Reveal all cards';
    freezeButton.title = language === 'te' ? '10 సెకన్ల పాటు టైమర్ ఆపు' : 'Freeze timer for 10 seconds';
    languageButton.textContent = t('switchLanguage');
    languageButton.setAttribute('aria-label', language === 'en' ? 'Switch language to Telugu' : 'భాషను ఇంగ్లీష్‌కు మార్చండి');
    updateSoundControl();
    updateHomeDashboard();
    if (currentPairs) {
        updateProgress();
        updateHintButton();
        updateBestScore();
        if (!gameScreen.hidden) {
            document.getElementById('mode-eyebrow').textContent = gameMode === 'daily' ? t('dailyChallenge') : t('brainBreak');
            document.getElementById('game-subtitle').textContent = gameMode === 'daily'
                ? t('dailyReady')
                : t(gameMode === 'freeplay' ? 'freeCopy' : 'gameCopy');
            if (!gameFinished) messageContainer.textContent = t('yourTurn');
            if (gameMode === 'journey') {
                const currentLevel = levels[selectedLevel - 1];
                levelDescription.textContent = t('levelPairs', { level: selectedLevel, pairs: currentLevel.pairs })
                    + (currentLevel.timeLimit ? t('timeLimit', { time: formatTime(currentLevel.timeLimit) }) : '');
                levelPickerLabel.textContent = `${t('chooseLevel')} · ${selectedLevel} ${t('selected')}`;
            }
        }
        if (!winModal.hidden) {
            winEyebrow.textContent = t(gameWasWon ? 'brilliant' : 'keepGoing');
            document.getElementById('win-title').textContent = t(gameWasWon ? 'youDidIt' : 'timeUpTitle');
            playAgainButton.textContent = gameMode === 'journey'
                ? t('replayLevel')
                : gameMode === 'daily' ? t('playDaily') : t(gameWasWon ? 'playAgain' : 'tryAgain');
            const record = lastWasNewBest ? t('newRecord') : '';
            if (!gameWasWon) {
                winSummary.textContent = gameMode === 'daily'
                    ? t('timeoutSummary', { matched: matchedPairs, total: currentPairs, moves })
                    : t('timeoutLevelSummary', { level: selectedLevel, matched: matchedPairs, total: currentPairs, moves });
            } else if (gameMode === 'daily') {
                winSummary.textContent = t('dailyWinSummary', {
                    score: score.toLocaleString(),
                    time: formatTime(90 - elapsedSeconds),
                    streak: lastDailyStreak,
                    days: lastDailyStreak === 1 ? t('day') : t('days'),
                    record
                });
            } else if (gameMode === 'journey') {
                winSummary.textContent = selectedLevel < MAX_LEVELS
                    ? t('levelWinSummary', {
                        level: selectedLevel, matched: matchedPairs, moves,
                        time: getResultTime(), record, next: selectedLevel + 1
                    })
                    : t('allLevelsSummary', { total: MAX_LEVELS, record });
            } else {
                winSummary.textContent = t('winSummary', {
                    matched: matchedPairs, moves, time: getResultTime(), record
                });
            }
        }
    }
}

function setScreen(screen) {
    const showGame = screen === 'game';
    startScreen.hidden = showGame;
    gameScreen.hidden = !showGame;
    if (!showGame) {
        window.clearInterval(timerInterval);
        window.clearTimeout(mismatchTimeout);
        window.clearTimeout(hintTimeout);
        window.clearTimeout(freezeTimeout);
        timerInterval = null;
        gameFinished = true;
        gameWasWon = won;
        winModal.hidden = true;
    }
}

function launchGame(mode) {
    gameMode = mode;
    if (mode === 'journey') selectedLevel = getUnlockedLevel();

    const isDaily = mode === 'daily';
    const isFreeplay = mode === 'freeplay';
    document.getElementById('game-modes').hidden = isDaily;
    journeyPanel.hidden = isDaily || isFreeplay;
    freeplayPanel.hidden = !isFreeplay;
    journeyTab.classList.toggle('active', !isFreeplay && !isDaily);
    freeplayTab.classList.toggle('active', isFreeplay);
    journeyTab.setAttribute('aria-selected', String(!isFreeplay && !isDaily));
    freeplayTab.setAttribute('aria-selected', String(isFreeplay));
    document.getElementById('mode-eyebrow').textContent = isDaily ? t('dailyChallenge') : t('brainBreak');
    document.getElementById('game-subtitle').textContent = isDaily
        ? t('dailyReady')
        : t(isFreeplay ? 'freeCopy' : 'gameCopy');
    setLevelPickerOpen(false);
    setScreen('game');
    startGame();
}

const savedTheme = localStorage.getItem('memory-match-theme');
if (Object.prototype.hasOwnProperty.call(emojis, savedTheme)) {
    themeSelect.value = savedTheme;
}

function getBestScore(key) {
    const savedScore = Number(localStorage.getItem(`memory-match-best-${key}`));
    return Number.isInteger(savedScore) && savedScore > 0 ? savedScore : null;
}

function getUnlockedLevel() {
    const savedLevel = Number(localStorage.getItem('memory-match-unlocked-level'));
    return Number.isInteger(savedLevel) ? Math.min(MAX_LEVELS, Math.max(1, savedLevel)) : 1;
}

function formatTime(seconds) {
    const safeSeconds = Math.max(0, Math.floor(seconds));
    const minutes = Math.floor(safeSeconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (safeSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
}

function shuffle(items, random = Math.random) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled;
}

function getGameEmojis(pairCount, random = Math.random) {
    const theme = gameMode === 'journey' || gameMode === 'daily' ? 'mixed' : themeSelect.value;
    const deck = [...new Set(emojis[theme])];
    if (gameMode === 'daily') return shuffle(deck, random).slice(0, pairCount);
    const offset = gameMode === 'journey' ? ((selectedLevel - 1) * 11) % deck.length : 0;
    const rotatedDeck = [...deck.slice(offset), ...deck.slice(0, offset)];
    return rotatedDeck.slice(0, pairCount);
}

function updateBestScore() {
    const key = gameMode === 'daily'
        ? `daily-${dailySessionDate || getDateKey()}`
        : gameMode === 'journey' ? `level-${selectedLevel}` : difficultySelect.value;
    const bestScore = getBestScore(key);
    bestScoreContainer.textContent = bestScore
        ? gameMode === 'daily' ? t('pointsBest', { score: bestScore }) : t('moveBest', { moves: bestScore })
        : t('noRecord');
}

function updateProgress() {
    progressText.textContent = `${matchedPairs} / ${currentPairs}`;
    progressTrack.setAttribute('aria-label', gameMode === 'journey'
        ? `${t('level')} ${selectedLevel} ${t('pairsFound').toLowerCase()}`
        : t('pairsFound'));
    progressTrack.setAttribute('aria-valuemax', currentPairs);
    progressTrack.setAttribute('aria-valuenow', matchedPairs);
    progressFill.style.width = `${currentPairs ? (matchedPairs / currentPairs) * 100 : 0}%`;
}

function updateHintButton() {
    hintCountContainer.textContent = hintsRemaining;
    hintButton.disabled = hintsRemaining === 0 || gameFinished || Boolean(firstCard) || lockBoard;
    hintButton.setAttribute('aria-label', language === 'te'
        ? `కార్డులను కాసేపు చూపించు. ${hintsRemaining} సూచనలు మిగిలాయి`
        : `Reveal all cards briefly. ${hintsRemaining} hints remaining`);
}

function updateFreezeButton() {
    freezeCountContainer.textContent = freezesRemaining;
    freezeButton.disabled = freezesRemaining === 0 || !hasStarted || gameFinished;
}

function updateSoundControl() {
    soundButton.setAttribute('aria-pressed', String(soundEnabled));
    soundButton.setAttribute('aria-label', language === 'te'
        ? soundEnabled ? 'శబ్దాన్ని ఆఫ్ చేయండి' : 'శబ్దాన్ని ఆన్ చేయండి'
        : soundEnabled ? 'Turn sound off' : 'Turn sound on');
    soundIcon.textContent = soundEnabled ? '♫' : '♪';
    soundLabel.textContent = soundEnabled ? t('soundOn') : t('soundOff');
}

function renderLevels() {
    const unlockedLevel = getUnlockedLevel();
    const level = levels[selectedLevel - 1];
    levelCount.textContent = `${selectedLevel} / ${MAX_LEVELS}`;
    levelDescription.textContent = t('levelPairs', { level: selectedLevel, pairs: level.pairs })
        + (level.timeLimit ? t('timeLimit', { time: formatTime(level.timeLimit) }) : '');
    levelPickerLabel.textContent = `${t('chooseLevel')} · ${selectedLevel} ${t('selected')}`;
    levelList.replaceChildren();

    levels.forEach(item => {
        const isLocked = item.number > unlockedLevel;
        const bestMoves = getBestScore(`level-${item.number}`);
        const tile = document.createElement('button');
        tile.className = `level-tile ${item.type}`;
        tile.type = 'button';
        tile.disabled = isLocked;
        tile.setAttribute('aria-label', isLocked
            ? `${t('level')} ${item.number}, ${t('locked')}`
            : `${t('level')} ${item.number}, ${item.pairs} ${t('pairs')}${selectedLevel === item.number ? `, ${t('selected')}` : ''}`);
        if (selectedLevel === item.number) {
            tile.classList.add('selected');
            tile.setAttribute('aria-current', 'step');
        }
        if (isLocked) tile.classList.add('locked');
        if (item.number % 100 === 0) tile.classList.add('milestone');
        if (bestMoves) tile.classList.add('completed');

        const number = document.createElement('span');
        number.className = 'level-number';
        number.textContent = isLocked ? '🔒' : String(item.number).padStart(2, '0');
        const pairLabel = document.createElement('span');
        pairLabel.className = 'level-pairs';
        pairLabel.textContent = `${item.pairs} ${t('pairs')}`;
        tile.append(number, pairLabel);

        if (bestMoves) {
            const checkmark = document.createElement('span');
            checkmark.className = 'level-check';
            checkmark.setAttribute('aria-label', 'Completed');
            checkmark.textContent = '✓';
            tile.appendChild(checkmark);
        }
        if (item.type !== 'normal') {
            const badge = document.createElement('span');
            badge.className = 'level-badge';
            badge.setAttribute('aria-hidden', 'true');
            badge.textContent = item.type === 'boss' ? '★' : '⚡';
            tile.appendChild(badge);
        }

        if (!isLocked) {
            tile.addEventListener('click', () => {
                selectedLevel = item.number;
                startGame(true);
                setLevelPickerOpen(false);
            });
        }
        levelList.appendChild(tile);
    });

    levelList.querySelector('.level-tile.selected')?.scrollIntoView({ block: 'nearest' });
}

function setLevelPickerOpen(isOpen) {
    levelPickerPanel.hidden = !isOpen;
    levelPickerToggle.setAttribute('aria-expanded', String(isOpen));
    levelPickerToggle.classList.toggle('is-open', isOpen);
    if (isOpen) renderLevels();
}

function playSound(frequency, duration = 0.12, type = 'sine') {
    if (!soundEnabled || !window.AudioContext) return;
    audioContext = audioContext || new window.AudioContext();
    if (audioContext.state === 'suspended') void audioContext.resume();

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.06, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}

function showFloatingScore(points, target) {
    const bounds = target.getBoundingClientRect();
    const floatingScore = document.createElement('span');
    floatingScore.className = 'floating-score';
    floatingScore.setAttribute('aria-hidden', 'true');
    floatingScore.textContent = `+${points}`;
    floatingScore.style.left = `${bounds.left + bounds.width / 2}px`;
    floatingScore.style.top = `${bounds.top}px`;
    document.body.appendChild(floatingScore);
    window.setTimeout(() => floatingScore.remove(), 1000);
}

function startTimer() {
    if (hasStarted || gameFinished) return;
    hasStarted = true;
    updateFreezeButton();
    timerInterval = window.setInterval(() => {
        if (isFrozen || gameFinished) return;
        const hasCountdown = gameMode === 'daily'
            || (gameMode === 'journey' && levels[selectedLevel - 1].timeLimit);
        if (hasCountdown) {
            elapsedSeconds = Math.max(0, elapsedSeconds - 1);
            if (elapsedSeconds === 0) {
                timerContainer.textContent = formatTime(0);
                finishGame(false);
                return;
            }
        } else {
            elapsedSeconds++;
        }
        timerContainer.textContent = formatTime(elapsedSeconds);
        timerContainer.closest('.stat-card').classList.toggle(
            'timer-warning',
            Boolean(hasCountdown && elapsedSeconds <= 30)
        );
    }, 1000);
}

function freezeTimer() {
    if (!hasStarted || gameFinished || isFrozen || freezesRemaining === 0) return;
    isFrozen = true;
    freezesRemaining--;
    updateFreezeButton();
    timerContainer.classList.add('frozen');
    messageContainer.textContent = t('frozenMessage');
    playSound(880, 0.25, 'square');
    freezeTimeout = window.setTimeout(() => {
        isFrozen = false;
        timerContainer.classList.remove('frozen');
        if (!gameFinished) messageContainer.textContent = t('timerResumed');
    }, 10000);
}

function startGame(focusBoard = false) {
    window.clearInterval(timerInterval);
    window.clearTimeout(mismatchTimeout);
    window.clearTimeout(hintTimeout);
    window.clearTimeout(freezeTimeout);

    const pairCount = gameMode === 'daily'
        ? 8
        : gameMode === 'journey'
            ? levels[selectedLevel - 1].pairs
            : difficulties[difficultySelect.value].pairs;
    const timeLimit = gameMode === 'daily'
        ? 90
        : gameMode === 'journey' ? levels[selectedLevel - 1].timeLimit : null;
    const columns = gameMode === 'daily'
        ? 4
        : gameMode === 'freeplay'
            ? difficulties[difficultySelect.value].columns
            : pairCount >= 21 ? 8 : pairCount >= 13 ? 6 : 4;

    currentPairs = pairCount;
    dailySessionDate = gameMode === 'daily' ? getDateKey() : null;
    const random = gameMode === 'daily' ? seededRandom(dailySessionDate) : Math.random;
    cards = shuffle(getGameEmojis(pairCount, random).flatMap(emoji => [
        { emoji, matched: false },
        { emoji, matched: false }
    ]), random);
    firstCard = null;
    secondCard = null;
    moves = 0;
    score = 0;
    combo = 0;
    lastMatchTime = 0;
    matchedPairs = 0;
    hintsRemaining = HINTS_PER_GAME;
    freezesRemaining = FREEZES_PER_GAME;
    elapsedSeconds = timeLimit || 0;
    hasStarted = false;
    gameFinished = false;
    gameWasWon = false;
    lastWasNewBest = false;
    lastDailyStreak = 0;
    isFrozen = false;
    lockBoard = false;
    timerInterval = null;
    mismatchTimeout = null;
    hintTimeout = null;
    freezeTimeout = null;

    winModal.hidden = true;
    achievementsDisplay.replaceChildren();
    document.getElementById('combo-meter').classList.remove('active');
    document.getElementById('combo-count').textContent = '2x';
    timerContainer.classList.remove('frozen');
    timerContainer.closest('.stat-card').classList.remove('timer-warning');
    timerContainer.closest('.stat-card').querySelector('.stat-label').textContent = timeLimit ? t('timeLeft') : t('time');
    timerContainer.textContent = formatTime(elapsedSeconds);
    movesContainer.textContent = '0';
    scoreContainer.textContent = '0';
    messageContainer.textContent = t('pickCard');
    progressLabel.textContent = gameMode === 'journey' ? t('levelProgress') : t('pairsFound');
    gridContainer.className = `grid-container grid-${columns}`;
    gridContainer.replaceChildren();

    if (gameMode === 'journey') {
        const level = levels[selectedLevel - 1];
        levelCount.textContent = `${selectedLevel} / ${MAX_LEVELS}`;
        levelDescription.textContent = t('levelPairs', { level: selectedLevel, pairs: level.pairs })
            + (level.timeLimit ? t('timeLimit', { time: formatTime(level.timeLimit) }) : '');
        levelPickerLabel.textContent = `${t('chooseLevel')} · ${selectedLevel} ${t('selected')}`;
    }

    updateBestScore();
    updateProgress();
    updateHintButton();
    updateFreezeButton();

    cards.forEach((card, index) => {
        const cardButton = document.createElement('button');
        cardButton.className = 'memory-card';
        cardButton.type = 'button';
        cardButton.dataset.index = String(index);
        cardButton.setAttribute('aria-label', `${t('hiddenCard')} ${index + 1}`);
        cardButton.setAttribute('aria-pressed', 'false');
        cardButton.innerHTML = `
            <span class="card-inner">
                <span class="card-face card-back" aria-hidden="true"><span>✦</span></span>
                <span class="card-face card-front" aria-hidden="true">${card.emoji}</span>
            </span>
        `;
        cardButton.addEventListener('click', flipCard);
        gridContainer.appendChild(cardButton);
    });

    if (focusBoard) gridContainer.querySelector('.memory-card')?.focus();
}

function flipCard(event) {
    const cardElement = event.currentTarget;
    const card = cards[Number(cardElement.dataset.index)];
    if (lockBoard || gameFinished || card.matched || cardElement === firstCard) return;

    startTimer();
    cardElement.classList.add('flipped');
    cardElement.setAttribute('aria-pressed', 'true');
    cardElement.setAttribute('aria-label', `${card.emoji} — ${t('revealed')}`);
    playSound(420);

    if (!firstCard) {
        firstCard = cardElement;
        updateHintButton();
        return;
    }

    secondCard = cardElement;
    moves++;
    movesContainer.textContent = String(moves);
    checkForMatch();
}

function hideCard(cardElement) {
    cardElement.classList.remove('flipped');
    cardElement.setAttribute('aria-pressed', 'false');
    cardElement.setAttribute('aria-label', `${t('hiddenCard')} ${Number(cardElement.dataset.index) + 1}`);
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    updateHintButton();
}

function checkForMatch() {
    const first = cards[Number(firstCard.dataset.index)];
    const second = cards[Number(secondCard.dataset.index)];
    if (first.emoji === second.emoji) {
        first.matched = true;
        second.matched = true;
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        firstCard.disabled = true;
        secondCard.disabled = true;
        firstCard.setAttribute('aria-label', `${t('matched')} ${first.emoji}`);
        secondCard.setAttribute('aria-label', `${t('matched')} ${second.emoji}`);
        matchedPairs++;
        updateProgress();

        const now = Date.now();
        combo = now - lastMatchTime < COMBO_TIMEOUT ? combo + 1 : 1;
        lastMatchTime = now;
        score += 100 * combo;
        scoreContainer.textContent = score.toLocaleString();
        showFloatingScore(100 * combo, secondCard);
        document.getElementById('combo-count').textContent = `${combo}x`;
        document.getElementById('combo-meter').classList.toggle('active', combo > 1);
        messageContainer.textContent = combo > 1
            ? t('comboMessage', { combo })
            : t('niceMatch', { matched: matchedPairs, total: currentPairs });
        playSound(660, 0.16);
        resetTurn();
        if (matchedPairs === currentPairs) finishGame();
        return;
    }

    combo = 0;
    document.getElementById('combo-meter').classList.remove('active');
    lockBoard = true;
    updateHintButton();
    messageContainer.textContent = t('mismatch');
    playSound(190, 0.18, 'triangle');
    mismatchTimeout = window.setTimeout(() => {
        hideCard(firstCard);
        hideCard(secondCard);
        resetTurn();
    }, 850);
}

function showHint() {
    if (lockBoard || gameFinished || firstCard || hintsRemaining === 0 || matchedPairs === currentPairs) return;
    startTimer();
    hintsRemaining--;
    updateHintButton();
    lockBoard = true;
    updateHintButton();
    messageContainer.textContent = t('peek');

    gridContainer.querySelectorAll('.memory-card').forEach(cardElement => {
        const card = cards[Number(cardElement.dataset.index)];
        if (card.matched) return;
        cardElement.classList.add('flipped');
        cardElement.setAttribute('aria-pressed', 'true');
        cardElement.setAttribute('aria-label', `${card.emoji} — ${t('revealed')}`);
    });

    hintTimeout = window.setTimeout(() => {
        gridContainer.querySelectorAll('.memory-card').forEach(cardElement => {
            const card = cards[Number(cardElement.dataset.index)];
            if (!card.matched) hideCard(cardElement);
        });
        lockBoard = false;
        messageContainer.textContent = t('yourTurn');
        updateHintButton();
    }, 1200);
}

function getResultTime() {
    return gameMode === 'journey' && levels[selectedLevel - 1].timeLimit
        ? t('withTimeLeft', { time: formatTime(elapsedSeconds) })
        : t('inTime', { time: formatTime(elapsedSeconds) });
}

function showAchievements() {
    const wins = Number(localStorage.getItem('memory-match-total-wins') || 0) + 1;
    localStorage.setItem('memory-match-total-wins', String(wins));
    const timeTaken = gameMode === 'daily'
        ? 90 - elapsedSeconds
        : gameMode === 'journey' && levels[selectedLevel - 1].timeLimit
            ? levels[selectedLevel - 1].timeLimit - elapsedSeconds
            : elapsedSeconds;
    const unlocked = [
        { id: 'first-win', name: t('firstVictory'), earned: wins === 1 },
        { id: 'quick-match', name: t('quickThinker'), earned: timeTaken <= 60 },
        { id: 'sharp-memory', name: t('sharpMemory'), earned: moves === currentPairs }
    ];

    achievementsDisplay.replaceChildren();
    unlocked.forEach(achievement => {
        const key = `memory-match-achievement-${achievement.id}`;
        if (!achievement.earned || localStorage.getItem(key)) return;
        localStorage.setItem(key, 'true');
        const badge = document.createElement('span');
        badge.className = 'achievement-badge';
        badge.textContent = achievement.name;
        achievementsDisplay.appendChild(badge);
    });
}

function recordDailyCompletion() {
    const challengeDate = dailySessionDate || getDateKey();
    const previousDay = new Date(`${challengeDate}T00:00:00`);
    previousDay.setDate(previousDay.getDate() - 1);
    const previousDateKey = getDateKey(previousDay);
    const lastCompleted = localStorage.getItem('memory-match-daily-last-date');
    let streak = Number(localStorage.getItem('memory-match-daily-streak') || 0);

    if (lastCompleted !== challengeDate) {
        streak = lastCompleted === previousDateKey ? streak + 1 : 1;
        localStorage.setItem('memory-match-daily-streak', String(streak));
        localStorage.setItem('memory-match-daily-last-date', challengeDate);
        const bestStreak = Number(localStorage.getItem('memory-match-daily-best-streak') || 0);
        if (streak > bestStreak) {
            localStorage.setItem('memory-match-daily-best-streak', String(streak));
        }
    }

    updateHomeDashboard();
    return streak;
}

function finishGame(won = true) {
    if (gameFinished) return;
    gameFinished = true;
    window.clearInterval(timerInterval);
    window.clearTimeout(mismatchTimeout);
    window.clearTimeout(hintTimeout);
    window.clearTimeout(freezeTimeout);
    timerInterval = null;
    isFrozen = false;
    timerContainer.classList.remove('frozen');
    updateFreezeButton();
    updateHintButton();

    if (!won) {
        lastWasNewBest = false;
        lockBoard = true;
        messageContainer.textContent = t('timeUpMessage');
        winStars.textContent = '';
        winStars.removeAttribute('aria-label');
        winSummary.textContent = gameMode === 'daily'
            ? t('timeoutSummary', { matched: matchedPairs, total: currentPairs, moves })
            : t('timeoutLevelSummary', { level: selectedLevel, matched: matchedPairs, total: currentPairs, moves });
        nextLevelButton.hidden = true;
        playAgainButton.textContent = gameMode === 'daily' ? t('playDaily') : t('tryAgain');
        winEyebrow.textContent = t('keepGoing');
        document.getElementById('win-title').textContent = t('timeUpTitle');
        winModal.hidden = false;
        playAgainButton.focus();
        return;
    }

    showAchievements();
    winEyebrow.textContent = t('brilliant');
    document.getElementById('win-title').textContent = t('youDidIt');

    const scoreKey = gameMode === 'daily'
        ? `daily-${dailySessionDate || getDateKey()}`
        : gameMode === 'journey' ? `level-${selectedLevel}` : difficultySelect.value;
    const bestScore = getBestScore(scoreKey);
    const isNewBest = gameMode === 'daily'
        ? bestScore === null || score > bestScore
        : bestScore === null || moves < bestScore;
    lastWasNewBest = isNewBest;
    if (isNewBest) {
        localStorage.setItem(`memory-match-best-${scoreKey}`, String(gameMode === 'daily' ? score : moves));
        updateBestScore();
    }

    const dailyStreak = gameMode === 'daily' ? recordDailyCompletion() : 0;
    lastDailyStreak = dailyStreak;
    const recordText = isNewBest ? t('newRecord') : '';
    const stars = moves <= currentPairs * 1.5 ? 3 : moves <= currentPairs * 2.5 ? 2 : 1;
    if (gameMode === 'journey') {
        winStars.textContent = `${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}`;
        winStars.setAttribute('aria-label', language === 'te' ? `3లో ${stars} నక్షత్రాలు` : `${stars} out of 3 stars`);
    } else {
        winStars.textContent = '';
        winStars.removeAttribute('aria-label');
    }
    nextLevelButton.hidden = gameMode !== 'journey' || selectedLevel >= MAX_LEVELS;

    if (gameMode === 'journey') {
        const unlockedLevel = Math.max(getUnlockedLevel(), Math.min(MAX_LEVELS, selectedLevel + 1));
        localStorage.setItem('memory-match-unlocked-level', String(unlockedLevel));
        levelDescription.textContent = t('levelPairs', { level: selectedLevel, pairs: currentPairs })
            + (levels[selectedLevel - 1].timeLimit ? t('timeLimit', { time: formatTime(levels[selectedLevel - 1].timeLimit) }) : '');
        if (!levelPickerPanel.hidden) renderLevels();
        winSummary.textContent = selectedLevel < MAX_LEVELS
            ? t('levelWinSummary', { level: selectedLevel, matched: matchedPairs, moves, time: getResultTime(), record: recordText, next: selectedLevel + 1 })
            : t('allLevelsSummary', { total: MAX_LEVELS, record: recordText });
    } else if (gameMode === 'daily') {
        winSummary.textContent = t('dailyWinSummary', {
            score: score.toLocaleString(),
            time: formatTime(90 - elapsedSeconds),
            streak: dailyStreak,
            days: dailyStreak === 1 ? t('day') : t('days'),
            record: recordText
        });
    } else {
        winSummary.textContent = t('winSummary', {
            matched: matchedPairs,
            moves,
            time: getResultTime(),
            record: recordText
        });
    }

    messageContainer.textContent = t('greatWork');
    playAgainButton.textContent = gameMode === 'journey'
        ? t('replayLevel')
        : gameMode === 'daily' ? t('playDaily') : t('playAgain');
    winModal.hidden = false;
    playAgainButton.focus();
    playSound(660, 0.2);
    window.setTimeout(() => playSound(880, 0.25), 140);
}

soundButton.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('memory-match-sound', String(soundEnabled));
    updateSoundControl();
});
languageButton.addEventListener('click', () => {
    language = language === 'en' ? 'te' : 'en';
    localStorage.setItem('memory-match-language', language);
    translatePage();
});
dailyStartButton.addEventListener('click', () => launchGame('daily'));
campaignStartButton.addEventListener('click', () => launchGame('journey'));
freeplayStartButton.addEventListener('click', () => launchGame('freeplay'));
homeButton.addEventListener('click', () => {
    setScreen('home');
    updateHomeDashboard();
});
hintButton.addEventListener('click', showHint);
freezeButton.addEventListener('click', freezeTimer);
restartButton.addEventListener('click', () => startGame());
playAgainButton.addEventListener('click', () => startGame(true));
levelPickerToggle.addEventListener('click', () => setLevelPickerOpen(levelPickerPanel.hidden));
difficultySelect.addEventListener('change', () => startGame());
themeSelect.addEventListener('change', () => {
    localStorage.setItem('memory-match-theme', themeSelect.value);
    startGame();
});
nextLevelButton.addEventListener('click', () => {
    if (selectedLevel < MAX_LEVELS && selectedLevel < getUnlockedLevel()) {
        selectedLevel++;
        setLevelPickerOpen(false);
        startGame(true);
    }
});

journeyTab.addEventListener('click', () => {
    gameMode = 'journey';
    journeyTab.classList.add('active');
    freeplayTab.classList.remove('active');
    journeyTab.setAttribute('aria-selected', 'true');
    freeplayTab.setAttribute('aria-selected', 'false');
    journeyPanel.hidden = false;
    freeplayPanel.hidden = true;
    document.getElementById('mode-eyebrow').textContent = t('brainBreak');
    document.getElementById('game-subtitle').textContent = t('gameCopy');
    setLevelPickerOpen(false);
    startGame();
});

freeplayTab.addEventListener('click', () => {
    gameMode = 'freeplay';
    freeplayTab.classList.add('active');
    journeyTab.classList.remove('active');
    freeplayTab.setAttribute('aria-selected', 'true');
    journeyTab.setAttribute('aria-selected', 'false');
    freeplayPanel.hidden = false;
    journeyPanel.hidden = true;
    document.getElementById('mode-eyebrow').textContent = t('brainBreak');
    document.getElementById('game-subtitle').textContent = t('freeCopy');
    setLevelPickerOpen(false);
    startGame();
});

winModal.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const focusableButtons = [playAgainButton, nextLevelButton].filter(button => !button.hidden);
    const activeIndex = focusableButtons.indexOf(document.activeElement);
    const nextIndex = event.shiftKey
        ? (activeIndex <= 0 ? focusableButtons.length - 1 : activeIndex - 1)
        : (activeIndex + 1) % focusableButtons.length;
    event.preventDefault();
    focusableButtons[nextIndex].focus();
});

translatePage();
updateHomeDashboard();
