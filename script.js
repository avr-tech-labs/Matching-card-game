const gridContainer = document.getElementById('grid-container');
const movesContainer = document.getElementById('moves');
const timerContainer = document.getElementById('timer');
const bestScoreContainer = document.getElementById('best-score');
const progressText = document.getElementById('progress-text');
const progressTrack = document.getElementById('progress-track');
const progressFill = document.getElementById('progress-fill');
const messageContainer = document.getElementById('game-message');
const difficultySelect = document.getElementById('difficulty');
const hintButton = document.getElementById('hint-btn');
const hintCountContainer = document.getElementById('hint-count');
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
const levelCount = document.getElementById('level-count');
const levelDescription = document.getElementById('level-description');
const progressLabel = document.getElementById('progress-label');

const difficulties = {
    easy: { pairs: 8, columns: 4 },
    medium: { pairs: 12, columns: 4 },
    hard: { pairs: 18, columns: 6 }
};
const MAX_LEVELS = 500;
const MAX_PAIRS = 50;
const levels = Array.from({ length: MAX_LEVELS }, (_, index) => {
    const number = index + 1;
    const pairs = Math.min(MAX_PAIRS, 4 + Math.floor(index / 10));
    const timeLimit = number >= 61
        ? Math.max(180, 480 - Math.floor((number - 61) * 0.68))
        : null;
    return { number, pairs, timeLimit };
});
const emojis = [
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯',
    '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🦆', '🦉',
    '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🪲', '🐞', '🦋', '🐌',
    '🐢', '🐍', '🦎', '🐙', '🦑', '🦀', '🐠', '🐬', '🐳', '🦈',
    '🐊', '🦓', '🦒', '🦘', '🦬', '🐘', '🦏', '🦛', '🐪', '🦚',
    '🌵', '🌲', '🌴', '🌳', '🌷', '🌻', '🌼', '🌈', '⭐', '🌙',
    '☀️', '❄️', '🔥', '🍀', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉',
    '🍇', '🍓', '🫐', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅',
    '🥑', '🥕', '🌽', '🍕', '🍔', '🍟', '🌮', '🍿', '🍩', '🍪',
    '🎂', '🍭', '⚽', '🏀', '🎾', '🎸', '🎹', '🚀', '🚲', '🎈',
    '🎁', '💎', '👑', '🎨', '🎯', '🎲', '🧩', '📚', '💡', '🎧',
    '🛸', '🚕', '🚁', '⛵', '🌍', '🏰', '🪄', '🧸', '🤖', '👻'
];
const HINTS_PER_GAME = 3;

let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;
let hintsRemaining = HINTS_PER_GAME;
let elapsedSeconds = 0;
let timerInterval = null;
let mismatchTimeout = null;
let hintTimeout = null;
let hasStarted = false;
let soundEnabled = true;
let audioContext = null;
let gameMode = 'journey';
let selectedLevel = getUnlockedLevel();
let currentPairs = levels[0].pairs;

function getBestScore(key) {
    const savedScore = Number(localStorage.getItem(`memory-match-best-${key}`));
    return Number.isInteger(savedScore) && savedScore > 0 ? savedScore : null;
}

function updateBestScore() {
    const scoreKey = gameMode === 'journey' ? `level-${selectedLevel}` : difficultySelect.value;
    const bestScore = getBestScore(scoreKey);
    bestScoreContainer.textContent = bestScore ? `${bestScore} moves` : '—';
}

function getUnlockedLevel() {
    const savedLevel = Number(localStorage.getItem('memory-match-unlocked-level'));
    return Number.isInteger(savedLevel) ? Math.min(MAX_LEVELS, Math.max(1, savedLevel)) : 1;
}

function renderLevels() {
    const unlockedLevel = getUnlockedLevel();
    levelCount.textContent = `${selectedLevel} / ${MAX_LEVELS}`;
    const level = levels[selectedLevel - 1];
    levelDescription.textContent = `Level ${selectedLevel} · ${level.pairs} pairs${level.timeLimit ? ` · ${formatTime(level.timeLimit)} time limit` : ''} · ${unlockedLevel} unlocked`;
    levelList.innerHTML = '';

    levels.forEach((level, index) => {
        const levelNumber = index + 1;
        const isLocked = levelNumber > unlockedLevel;
        const tile = document.createElement('button');
        tile.className = 'level-tile';
        tile.type = 'button';
        tile.disabled = isLocked;
        tile.setAttribute('aria-label', isLocked
            ? `Level ${levelNumber}, locked`
            : `Level ${levelNumber}, ${level.pairs} pairs${selectedLevel === levelNumber ? ', selected' : ''}`);
        tile.setAttribute('aria-current', selectedLevel === levelNumber ? 'step' : 'false');
        if (selectedLevel === levelNumber) tile.classList.add('selected');
        if (isLocked) tile.classList.add('locked');
        if (levelNumber % 100 === 0) tile.classList.add('milestone');

        const bestMoves = Number(localStorage.getItem(`memory-match-best-level-${levelNumber}`));
        if (bestMoves > 0) tile.classList.add('completed');
        tile.innerHTML = `
            <span class="level-number">${isLocked ? '🔒' : levelNumber.toString().padStart(2, '0')}</span>
            <span class="level-pairs">${level.pairs} pairs${level.timeLimit ? ` · ${Math.floor(level.timeLimit / 60)}m` : ''}</span>
            ${bestMoves > 0 ? '<span class="level-check" aria-label="Completed">✓</span>' : ''}
        `;
        if (!isLocked) {
            tile.addEventListener('click', () => {
                selectedLevel = levelNumber;
                startGame();
            });
        }
        levelList.appendChild(tile);
    });

    const selectedTile = levelList.querySelector('.level-tile.selected');
    if (selectedTile) selectedTile.scrollIntoView({ block: 'nearest' });
}

function shuffle(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled;
}

function getGameEmojis(pairs) {
    const levelOffset = gameMode === 'journey' ? (selectedLevel - 1) * 11 : 0;
    const startIndex = levelOffset % emojis.length;
    return Array.from({ length: pairs }, (_, index) => emojis[(startIndex + index) % emojis.length]);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
}

function getResultTime() {
    return gameMode === 'journey' && levels[selectedLevel - 1].timeLimit
        ? `with ${formatTime(elapsedSeconds)} left`
        : `in ${formatTime(elapsedSeconds)}`;
}

function startTimer() {
    if (hasStarted) return;
    hasStarted = true;
    timerInterval = window.setInterval(() => {
        if (gameMode === 'journey' && levels[selectedLevel - 1].timeLimit) {
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
            Boolean(gameMode === 'journey' && levels[selectedLevel - 1].timeLimit && elapsedSeconds <= 30)
        );
    }, 1000);
}

function playSound(frequency, duration = 0.12, type = 'sine') {
    if (!soundEnabled || !window.AudioContext) return;
    audioContext = audioContext || new window.AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.08, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}

function updateProgress() {
    progressText.textContent = `${matchedPairs} / ${currentPairs}`;
    progressTrack.setAttribute('aria-label', gameMode === 'journey' ? `Level ${selectedLevel} pairs found` : 'Pairs found');
    progressTrack.setAttribute('aria-valuemax', currentPairs);
    progressTrack.setAttribute('aria-valuenow', matchedPairs);
    progressFill.style.width = `${(matchedPairs / currentPairs) * 100}%`;
}

function updateHintButton() {
    hintCountContainer.textContent = hintsRemaining;
    hintButton.disabled = hintsRemaining === 0;
    hintButton.setAttribute('aria-label', `Reveal all cards briefly. ${hintsRemaining} hints remaining`);
}

function startGame() {
    const returnFocusToCards = !winModal.hidden;
    window.clearInterval(timerInterval);
    window.clearTimeout(mismatchTimeout);
    window.clearTimeout(hintTimeout);

    const pairs = gameMode === 'journey'
        ? levels[selectedLevel - 1].pairs
        : difficulties[difficultySelect.value].pairs;
    const levelTimeLimit = gameMode === 'journey' ? levels[selectedLevel - 1].timeLimit : null;
    const columns = pairs >= 33 ? 10 : pairs >= 21 ? 8 : pairs >= 13 ? 6 : 4;
    currentPairs = pairs;
    cards = shuffle(getGameEmojis(pairs).flatMap(emoji => [
        { emoji, matched: false },
        { emoji, matched: false }
    ]));
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    moves = 0;
    matchedPairs = 0;
    hintsRemaining = HINTS_PER_GAME;
    elapsedSeconds = levelTimeLimit || 0;
    hasStarted = false;
    timerInterval = null;
    mismatchTimeout = null;
    hintTimeout = null;

    winModal.hidden = true;
    gridContainer.className = `grid-container grid-${columns}`;
    gridContainer.innerHTML = '';
    movesContainer.textContent = moves;
    timerContainer.textContent = formatTime(elapsedSeconds);
    timerContainer.closest('.stat-card').classList.remove('timer-warning');
    messageContainer.textContent = 'Pick any card to get started.';
    progressLabel.textContent = gameMode === 'journey' ? 'Level progress' : 'Pairs found';
    timerContainer.closest('.stat-card').querySelector('.stat-label').textContent = levelTimeLimit ? 'Time left' : 'Time';
    if (gameMode === 'journey') renderLevels();
    updateBestScore();
    updateProgress();
    updateHintButton();

    cards.forEach((card, index) => {
        const cardButton = document.createElement('button');
        cardButton.className = 'memory-card';
        cardButton.type = 'button';
        cardButton.dataset.index = index;
        cardButton.setAttribute('aria-label', `Hidden card ${index + 1}`);
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
    if (returnFocusToCards) gridContainer.querySelector('.memory-card').focus();
}

function flipCard(event) {
    const cardElement = event.currentTarget;
    const card = cards[Number(cardElement.dataset.index)];
    if (lockBoard || card.matched || cardElement === firstCard) return;

    startTimer();
    cardElement.classList.add('flipped');
    cardElement.setAttribute('aria-pressed', 'true');
    cardElement.setAttribute('aria-label', `Card ${card.emoji}, revealed`);
    playSound(420);

    if (!firstCard) {
        firstCard = cardElement;
        return;
    }

    secondCard = cardElement;
    moves++;
    movesContainer.textContent = moves;
    checkForMatch();
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
        matchedPairs++;
        updateProgress();
        messageContainer.textContent = `Nice match! ${matchedPairs} ${matchedPairs === 1 ? 'pair' : 'pairs'} found.`;
        playSound(660, 0.18);
        resetTurn();
        if (matchedPairs === currentPairs) finishGame();
        return;
    }

    lockBoard = true;
    messageContainer.textContent = 'Not quite — try to remember those cards.';
    playSound(190, 0.18, 'triangle');
    mismatchTimeout = window.setTimeout(() => {
        hideCard(firstCard);
        hideCard(secondCard);
        resetTurn();
    }, 850);
}

function hideCard(cardElement) {
    cardElement.classList.remove('flipped');
    cardElement.setAttribute('aria-pressed', 'false');
    cardElement.setAttribute('aria-label', `Hidden card ${Number(cardElement.dataset.index) + 1}`);
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function showHint() {
    if (lockBoard || hintsRemaining === 0 || matchedPairs === currentPairs) return;
    startTimer();
    hintsRemaining--;
    updateHintButton();
    lockBoard = true;
    messageContainer.textContent = 'Quick peek! Remember where the pairs are.';

    gridContainer.querySelectorAll('.memory-card').forEach(cardElement => {
        const card = cards[Number(cardElement.dataset.index)];
        if (card.matched) return;
        cardElement.classList.add('flipped');
        cardElement.setAttribute('aria-pressed', 'true');
        cardElement.setAttribute('aria-label', `Card ${card.emoji}, revealed by hint`);
    });

    hintTimeout = window.setTimeout(() => {
        gridContainer.querySelectorAll('.memory-card').forEach(cardElement => {
            const card = cards[Number(cardElement.dataset.index)];
            if (!card.matched) hideCard(cardElement);
        });
        lockBoard = false;
        messageContainer.textContent = 'Your turn — find a matching pair.';
    }, 1200);
}

function finishGame(won = true) {
    window.clearInterval(timerInterval);
    timerInterval = null;
    if (!won) {
        lockBoard = true;
        messageContainer.textContent = 'Time is up. Give it another try!';
        winStars.textContent = '';
        winSummary.textContent = `Level ${selectedLevel} ran out of time. You found ${matchedPairs} of ${currentPairs} pairs in ${moves} moves.`;
        nextLevelButton.hidden = true;
        playAgainButton.textContent = 'Try again';
        winModal.querySelector('.win-dialog .eyebrow').textContent = 'KEEP GOING';
        document.getElementById('win-title').textContent = "Time's up!";
        winModal.hidden = false;
        playAgainButton.focus();
        return;
    }

    winModal.querySelector('.win-dialog .eyebrow').textContent = 'THAT WAS BRILLIANT';
    document.getElementById('win-title').textContent = 'You did it!';
    const scoreKey = gameMode === 'journey' ? `level-${selectedLevel}` : difficultySelect.value;
    const bestScore = getBestScore(scoreKey);
    const isNewBest = bestScore === null || moves < bestScore;
    if (isNewBest) {
        localStorage.setItem(`memory-match-best-${scoreKey}`, moves);
        updateBestScore();
    }

    const stars = moves <= currentPairs * 1.5 ? 3 : moves <= currentPairs * 2.5 ? 2 : 1;
    const hasNextLevel = gameMode === 'journey' && selectedLevel < levels.length;
    nextLevelButton.innerHTML = 'Next level <span aria-hidden="true">→</span>';
    if (gameMode === 'journey') {
        localStorage.setItem('memory-match-unlocked-level', Math.max(getUnlockedLevel(), Math.min(levels.length, selectedLevel + 1)));
        renderLevels();
        winStars.textContent = `${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}`;
        winStars.setAttribute('aria-label', `${stars} out of 3 stars`);
        nextLevelButton.hidden = !hasNextLevel;
        if (hasNextLevel) {
            winSummary.textContent = `Level ${selectedLevel} complete! You matched ${matchedPairs} pairs in ${moves} moves ${getResultTime()}. ${isNewBest ? 'New personal best! ' : ''}Level ${selectedLevel + 1} is unlocked.`;
        } else {
            winSummary.textContent = `You conquered all ${MAX_LEVELS} levels! You matched ${matchedPairs} pairs in ${moves} moves ${getResultTime()}. ${isNewBest ? 'New personal best!' : 'You are a true memory master!'}`;
            nextLevelButton.hidden = true;
        }
    } else {
        winStars.textContent = '';
        nextLevelButton.hidden = true;
        winSummary.textContent = `You matched all ${matchedPairs} pairs in ${moves} moves ${getResultTime()}.${isNewBest ? ' That is your new best!' : ''}`;
    }

    messageContainer.textContent = 'All pairs found. Fantastic work!';
    playAgainButton.textContent = gameMode === 'journey' ? 'Replay level' : 'Play again';
    winModal.hidden = false;
    playAgainButton.focus();
    playSound(660, 0.2);
    window.setTimeout(() => playSound(880, 0.3), 140);
}

soundButton.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundButton.setAttribute('aria-pressed', String(soundEnabled));
    soundButton.setAttribute('aria-label', soundEnabled ? 'Turn sound off' : 'Turn sound on');
    soundIcon.textContent = soundEnabled ? '♫' : '♪';
    soundLabel.textContent = soundEnabled ? 'Sound on' : 'Sound off';
});
hintButton.addEventListener('click', showHint);
restartButton.addEventListener('click', startGame);
playAgainButton.addEventListener('click', startGame);
nextLevelButton.addEventListener('click', () => {
    if (selectedLevel < levels.length && selectedLevel < getUnlockedLevel()) {
        selectedLevel++;
        renderLevels();
        startGame();
    }
});
difficultySelect.addEventListener('change', () => {
    updateBestScore();
    startGame();
});
journeyTab.addEventListener('click', () => {
    gameMode = 'journey';
    journeyTab.classList.add('active');
    freeplayTab.classList.remove('active');
    journeyTab.setAttribute('aria-selected', 'true');
    freeplayTab.setAttribute('aria-selected', 'false');
    journeyPanel.hidden = false;
    freeplayPanel.hidden = true;
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
    startGame();
});
winModal.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
        const focusableButtons = [playAgainButton, nextLevelButton].filter(button => !button.hidden);
        const activeIndex = focusableButtons.indexOf(document.activeElement);
        event.preventDefault();
        focusableButtons[(activeIndex + 1) % focusableButtons.length].focus();
    }
});

renderLevels();
startGame();
