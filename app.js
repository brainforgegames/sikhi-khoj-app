const QUIZ = Object.freeze([
  {
    topic: ['ਗੁਰਬਾਣੀ ਅਤੇ ਗੁਰਮਤਿ', 'GURBANI & GURMAT'],
    question: ['ਅੰਗ 1 ਉੱਤੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਆਰੰਭ ਕਿਸ ਪੰਕਤੀ ਨਾਲ ਹੁੰਦਾ ਹੈ?', 'Which line opens Sri Guru Granth Sahib Ji on Ang 1?'],
    options: [
      ['ਮੂਲ ਮੰਤਰ', 'The Mool Mantar'],
      ['ਅਰਦਾਸ', 'The Ardas'],
      ['ਸਿੱਖ ਰਹਿਤ ਮਰਯਾਦਾ', 'The Sikh Rehat Maryada']
    ],
    answer: 0,
    explanation: ['ਅੰਗ 1 ਮੂਲ ਮੰਤਰ ਨਾਲ ਆਰੰਭ ਹੁੰਦਾ ਹੈ।', 'Ang 1 opens with the Mool Mantar.']
  },
  {
    topic: ['ਗੁਰੂ ਸਾਹਿਬਾਨ', 'GURU SAHIBAN'],
    question: ['ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਦਾ ਜਨਮ ਕਿੱਥੇ ਹੋਇਆ?', 'Where was Guru Amar Das Ji born?'],
    options: [['ਬਾਸਰਕੇ', 'Basarke'], ['ਖਡੂਰ', 'Khadur'], ['ਕਰਤਾਰਪੁਰ', 'Kartarpur']],
    answer: 0,
    explanation: ['ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਦਾ ਜਨਮ 1479 ਵਿੱਚ ਅਜੋਕੇ ਅੰਮ੍ਰਿਤਸਰ ਜ਼ਿਲ੍ਹੇ ਦੇ ਪਿੰਡ ਬਾਸਰਕੇ ਵਿੱਚ ਹੋਇਆ।', 'Guru Amar Das Ji was born in 1479 at Basarke, in today’s Amritsar district.']
  },
  {
    topic: ['ਖ਼ਾਲਸਾ ਅਤੇ ਰਹਿਤ', 'KHALSA & REHAT'],
    question: ['ਅਨੁਛੇਦ XX ਅਨੁਸਾਰ ਸਾਰੀਆਂ ਸਿੱਖ ਰਸਮਾਂ ਅਤੇ ਸੰਸਕਾਰਾਂ ਦੇ ਜ਼ਰੂਰੀ ਅੰਗ ਕਿਹੜੇ ਹਨ?', 'According to Article XX, what are the essential components of all Sikh rites and ceremonies?'],
    options: [
      ['ਗੁਰਬਾਣੀ ਦਾ ਪਾਠ ਅਤੇ ਅਰਦਾਸ', 'Recitation of Gurbani and the Ardas'],
      ['ਦਾਅਵਤ ਅਤੇ ਸੰਗੀਤ', 'A feast and music'],
      ['ਜਨਮ-ਪੱਤਰੀ ਅਤੇ ਪੁਜਾਰੀ', 'Horoscopes and a priest']
    ],
    answer: 0,
    explanation: ['ਅਨੁਛੇਦ XX ਗੁਰਬਾਣੀ ਦੇ ਪਾਠ ਅਤੇ ਅਰਦਾਸ ਨੂੰ ਸਾਰੀਆਂ ਰਸਮਾਂ ਦੇ ਜ਼ਰੂਰੀ ਅੰਗ ਦੱਸਦਾ ਹੈ।', 'Article XX names recitation of Gurbani and the Ardas as the essential components.']
  },
  {
    topic: ['ਸਿੱਖ ਵਿਰਸਾ ਅਤੇ ਅਸਥਾਨ', 'SIKH HERITAGE & PLACES'],
    question: ['ਸਿੰਗਾਪੁਰ ਦੇ ਨੈਸ਼ਨਲ ਹੈਰੀਟੇਜ ਬੋਰਡ ਅਨੁਸਾਰ, ਉੱਥੋਂ ਦਾ ਪਹਿਲਾ ਗੁਰਦੁਆਰਾ ਕਿਨ੍ਹਾਂ ਦੀ ਸੇਵਾ ਕਰਦਾ ਸੀ?', 'According to Singapore’s National Heritage Board, whom did its first gurdwara serve?'],
    options: [
      ['ਯੂਨੀਵਰਸਿਟੀ ਦੇ ਸਿੱਖ ਵਿਦਿਆਰਥੀ', 'Sikh university students'],
      ['ਪੁਲਿਸ ਵਿੱਚ ਸੇਵਾ ਕਰਦੇ ਸਿੱਖ', 'Sikhs serving in the police'],
      ['ਰੇਲਵੇ ਬਣਾਉਣ ਵਾਲੇ ਸਿੱਖ', 'Sikh railway builders']
    ],
    answer: 1,
    explanation: ['ਪਹਿਲਾ ਗੁਰਦੁਆਰਾ ਪਰਲਜ਼ ਹਿੱਲ ਦੇ ਪੁਲਿਸ ਅਹਾਤੇ ਵਿੱਚ ਸੀ ਅਤੇ ਸਿੱਖ ਪੁਲਿਸ ਦਸਤੇ ਦੀ ਸੇਵਾ ਕਰਦਾ ਸੀ।', 'The first gurdwara stood in the police compound at Pearl’s Hill and served the Sikh police contingent.']
  },
  {
    topic: ['ਸਿੱਖ ਸ਼ਖ਼ਸੀਅਤਾਂ', 'SIKH PERSONALITIES'],
    question: ['ਸਿੱਖ ਧਰਮ ਵਿਸ਼ਵਕੋਸ਼ ਅਨੁਸਾਰ ਭਾਈ ਗੁਰਦਾਸ ਜੀ ਦਾ ਜਨਮ ਕਿੱਥੇ ਹੋਇਆ?', 'According to the Encyclopaedia of Sikhism, where was Bhai Gurdas Ji born?'],
    options: [['ਬਨਾਰਸ', 'Varanasi'], ['ਗੋਇੰਦਵਾਲ', 'Goindval'], ['ਆਗਰਾ', 'Agra']],
    answer: 1,
    explanation: ['ਭਾਈ ਗੁਰਦਾਸ ਜੀ ਦਾ ਜਨਮ 1551 ਵਿੱਚ ਗੋਇੰਦਵਾਲ ਵਿਖੇ ਹੋਇਆ।', 'Bhai Gurdas Ji was born at Goindval in 1551.']
  }
]);

const LANGUAGE_KEY = 'sikhi-khoj-language';
const languageGate = document.querySelector('#language-gate');
const languageSwitch = document.querySelector('#language-switch');
let activeLanguage = 'pa';

function savedLanguage() {
  try {
    const value = localStorage.getItem(LANGUAGE_KEY);
    return value === 'pa' || value === 'en' ? value : null;
  } catch {
    return null;
  }
}

function copy(pair) {
  return pair[activeLanguage === 'pa' ? 0 : 1];
}

function applyLanguage(language, persist = true) {
  activeLanguage = language === 'en' ? 'en' : 'pa';
  document.documentElement.lang = activeLanguage;
  document.documentElement.dataset.language = activeLanguage;
  document.querySelectorAll('[data-pa][data-en]').forEach(element => {
    const value = element.dataset[activeLanguage];
    if (element.hasAttribute('data-html')) element.innerHTML = value;
    else element.textContent = value;
  });
  document.querySelectorAll('[data-placeholder-pa][data-placeholder-en]').forEach(element => {
    element.placeholder = element.dataset[`placeholder${activeLanguage === 'pa' ? 'Pa' : 'En'}`];
  });
  languageSwitch.querySelector('span').textContent = activeLanguage === 'pa' ? 'ਪੰ' : 'EN';
  languageSwitch.querySelector('small').textContent = activeLanguage === 'pa' ? 'EN' : 'ਪੰ';
  languageSwitch.setAttribute('aria-label', activeLanguage === 'pa' ? 'ਭਾਸ਼ਾ ਬਦਲੋ' : 'Change language');
  if (persist) {
    try { localStorage.setItem(LANGUAGE_KEY, activeLanguage); } catch { /* Storage may be unavailable. */ }
  }
  languageGate.classList.remove('is-open');
  languageGate.setAttribute('aria-hidden', 'true');
  renderQuestion();
}

document.querySelectorAll('[data-language-choice]').forEach(button => button.addEventListener('click', () => {
  applyLanguage(button.dataset.languageChoice);
}));

languageSwitch.addEventListener('click', () => {
  languageGate.classList.add('is-open');
  languageGate.removeAttribute('aria-hidden');
  languageGate.querySelector(`[data-language-choice="${activeLanguage}"]`).focus();
});

let current = 0;
let score = 0;
let answered = false;

const card = document.querySelector('#quiz-card');
const counter = document.querySelector('#quiz-counter');
const bar = document.querySelector('#quiz-progress-bar');
const resetButton = document.querySelector('#quiz-reset');

function renderQuestion() {
  answered = false;
  const item = QUIZ[current];
  counter.textContent = activeLanguage === 'pa' ? `ਸਵਾਲ ${current + 1} / ${QUIZ.length}` : `QUESTION ${current + 1} / ${QUIZ.length}`;
  bar.style.width = `${((current + 1) / QUIZ.length) * 100}%`;
  resetButton.hidden = true;
  card.innerHTML = `
    <div class="question-card">
      <span class="question-topic">${copy(item.topic)}</span>
      <h3>${copy(item.question)}</h3>
      <div class="options">
        ${item.options.map((option, index) => `
          <button class="option" type="button" data-option="${index}">
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <strong>${copy(option)}</strong>
          </button>`).join('')}
      </div>
      <div id="quiz-feedback"></div>
    </div>`;
  card.querySelectorAll('.option').forEach(button => button.addEventListener('click', chooseAnswer));
}

function chooseAnswer(event) {
  if (answered) return;
  answered = true;
  const selected = Number(event.currentTarget.dataset.option);
  const item = QUIZ[current];
  if (selected === item.answer) score += 1;
  card.querySelectorAll('.option').forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add('correct');
    if (index === selected && index !== item.answer) button.classList.add('wrong');
  });
  const correct = selected === item.answer;
  document.querySelector('#quiz-feedback').innerHTML = `
    <div class="feedback">
      <b>${correct ? (activeLanguage === 'pa' ? '✓ ਬਿਲਕੁਲ ਠੀਕ!' : '✓ Correct!') : (activeLanguage === 'pa' ? 'ਸਹੀ ਜਵਾਬ ਵੇਖੋ' : 'Learn this one')}</b>
      <p>${copy(item.explanation)}</p>
    </div>
    <button class="button button-primary next-question" type="button">
      <span>${current === QUIZ.length - 1 ? (activeLanguage === 'pa' ? 'ਨਤੀਜਾ ਵੇਖੋ' : 'SEE MY RESULT') : (activeLanguage === 'pa' ? 'ਅਗਲਾ ਸਵਾਲ' : 'NEXT QUESTION')}</span>
    </button>`;
  document.querySelector('.next-question').addEventListener('click', nextQuestion);
}

function nextQuestion() {
  if (current < QUIZ.length - 1) {
    current += 1;
    renderQuestion();
    card.closest('.quiz-shell').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  renderResult();
}

function renderResult() {
  counter.textContent = activeLanguage === 'pa' ? 'ਕੁਇਜ਼ ਪੂਰਾ' : 'QUIZ COMPLETE';
  bar.style.width = '100%';
  resetButton.hidden = false;
  const message = score === 5
    ? ['ਕਮਾਲ! ਪੂਰੇ ਅੰਕ।', 'Excellent — a perfect score.']
    : score >= 3
      ? ['ਬਹੁਤ ਵਧੀਆ!', 'Well done — keep exploring.']
      : ['ਹਰ ਸਵਾਲ ਇੱਕ ਨਵੀਂ ਖੋਜ ਹੈ।', 'Every question is a new discovery.'];
  card.innerHTML = `
    <div class="result-card">
      <div class="result-ring"><div><strong>${score}/${QUIZ.length}</strong><span>${activeLanguage === 'pa' ? 'ਤੁਹਾਡਾ ਸਕੋਰ' : 'YOUR SCORE'}</span></div></div>
      <h3>${copy(message)}</h3>
      <a class="button button-primary" href="#register"><span>${activeLanguage === 'pa' ? 'ਲਾਂਚ ਦੀ ਸੂਚਨਾ ਲਵੋ' : 'JOIN THE LAUNCH LIST'}</span></a>
    </div>`;
}

function resetQuiz() {
  current = 0;
  score = 0;
  renderQuestion();
}

resetButton.addEventListener('click', resetQuiz);
document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' })));

const form = document.querySelector('#registration-form');
const status = document.querySelector('#form-status');
const submit = form.querySelector('button[type="submit"]');
form.elements.startedAt.value = String(Date.now());

function showStatus(type, message) {
  status.className = `form-status ${type}`;
  status.innerHTML = `<b>${message}</b>`;
  status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  status.className = 'form-status';
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const notifyEmail = data.get('notifyEmail') === 'on';
  const notifyWhatsApp = data.get('notifyWhatsApp') === 'on';
  const consent = data.get('consent') === 'on';

  if (name.length < 2) return showStatus('error', copy(['ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਨਾਮ ਲਿਖੋ।', 'Please enter your name.']));
  if (!notifyEmail && !notifyWhatsApp) return showStatus('error', copy(['ਈਮੇਲ ਜਾਂ WhatsApp ਵਿੱਚੋਂ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਚੁਣੋ।', 'Choose at least one notification method.']));
  if (notifyEmail && !email) return showStatus('error', copy(['ਈਮੇਲ ਸੂਚਨਾ ਲਈ ਆਪਣੀ ਈਮੇਲ ਲਿਖੋ।', 'Enter an email address for email updates.']));
  if (notifyWhatsApp && !phone) return showStatus('error', copy(['WhatsApp ਸੂਚਨਾ ਲਈ ਆਪਣਾ ਨੰਬਰ ਲਿਖੋ।', 'Enter a phone number for WhatsApp updates.']));
  if (!consent) return showStatus('error', copy(['ਜਾਰੀ ਰੱਖਣ ਲਈ ਸਹਿਮਤੀ ਲੋੜੀਂਦੀ ਹੈ।', 'Consent is required to continue.']));

  submit.disabled = true;
  submit.querySelector('span').textContent = activeLanguage === 'pa' ? 'ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ…' : 'SENDING…';
  try {
    const response = await fetch(window.SIKHI_KHOJ_CONFIG.registrationEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, email, phone, notifyEmail, notifyWhatsApp, consent,
        website: String(data.get('website') || ''),
        startedAt: Number(data.get('startedAt')),
        language: activeLanguage,
        source: 'prelaunch-site'
      })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.message || 'Registration failed');
    showStatus('success', copy(result.duplicate ? ['ਤੁਸੀਂ ਪਹਿਲਾਂ ਹੀ ਸੂਚੀ ਵਿੱਚ ਹੋ। ਧੰਨਵਾਦ!', 'You are already on the list. Thank you!'] : ['ਧੰਨਵਾਦ! ਲਾਂਚ ਵੇਲੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਸੂਚਿਤ ਕਰਾਂਗੇ।', 'Thank you! We’ll notify you when Sikhi Khoj launches.']));
    form.reset();
    form.elements.startedAt.value = String(Date.now());
  } catch {
    showStatus('error', copy(['ਹੁਣੇ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨਹੀਂ ਹੋ ਸਕੀ। ਕਿਰਪਾ ਕਰਕੇ ਕੁਝ ਸਮੇਂ ਬਾਅਦ ਕੋਸ਼ਿਸ਼ ਕਰੋ।', `We could not register you just now. Please try again, or email ${window.SIKHI_KHOJ_CONFIG.contactEmail}.`]));
  } finally {
    submit.disabled = false;
    submit.querySelector('span').textContent = activeLanguage === 'pa' ? 'ਮੈਨੂੰ ਸੂਚਿਤ ਕਰੋ' : 'NOTIFY ME AT LAUNCH';
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
const initialLanguage = savedLanguage();
applyLanguage(initialLanguage || 'pa', false);
if (!initialLanguage) {
  languageGate.classList.add('is-open');
  languageGate.removeAttribute('aria-hidden');
  languageGate.querySelector('[data-language-choice="pa"]').focus();
}
