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
const analytics = window.SIKHI_KHOJ_ANALYTICS || { event() {} };
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
  if (quizComplete) renderResult();
  else renderQuestion();
  if (formPending) setSendingLabel();
}

document.querySelectorAll('[data-language-choice]').forEach(button => button.addEventListener('click', () => {
  const selectionContext = savedLanguage() ? 'switcher' : 'initial';
  applyLanguage(button.dataset.languageChoice);
  analytics.event('web_language_selected', { language: activeLanguage, selection_context: selectionContext });
}));

languageSwitch.addEventListener('click', () => {
  languageGate.classList.add('is-open');
  languageGate.removeAttribute('aria-hidden');
  languageGate.querySelector(`[data-language-choice="${activeLanguage}"]`).focus();
});

let current = 0;
let score = 0;
let answered = false;
let selectedAnswer = null;
let quizComplete = false;
let formPending = false;
let quizStarted = false;

const card = document.querySelector('#quiz-card');
const counter = document.querySelector('#quiz-counter');
const bar = document.querySelector('#quiz-progress-bar');
const resetButton = document.querySelector('#quiz-reset');

function renderQuestion() {
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
  if (answered) renderAnswer();
}

function chooseAnswer(event) {
  if (answered) return;
  if (!quizStarted) {
    quizStarted = true;
    analytics.event('web_quiz_started', { language: activeLanguage, question_count: QUIZ.length });
  }
  answered = true;
  const selected = Number(event.currentTarget.dataset.option);
  const item = QUIZ[current];
  if (selected === item.answer) score += 1;
  selectedAnswer = selected;
  renderAnswer();
}

function renderAnswer() {
  const selected = selectedAnswer;
  const item = QUIZ[current];
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
  if (!answered || quizComplete) return;
  if (current < QUIZ.length - 1) {
    current += 1;
    answered = false;
    selectedAnswer = null;
    renderQuestion();
    card.closest('.quiz-shell').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  quizComplete = true;
  analytics.event('web_quiz_completed', { language: activeLanguage, score, question_count: QUIZ.length });
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
      <a class="button button-primary" href="https://play.google.com/store/apps/details?id=com.brainforgegames.sikhikhoj"><span>${activeLanguage === 'pa' ? 'Google Play ਤੋਂ ਐਪ ਲਵੋ' : 'Get it on Google Play'}</span></a>
    </div>`;
}

function resetQuiz() {
  analytics.event('web_quiz_restarted', { language: activeLanguage, previous_score: score });
  current = 0;
  score = 0;
  answered = false;
  selectedAnswer = null;
  quizComplete = false;
  quizStarted = false;
  renderQuestion();
}

resetButton.addEventListener('click', resetQuiz);
document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' })));

const form = document.querySelector('#registration-form');
const status = document.querySelector('#form-status');
const submit = form.querySelector('button[type="submit"]');
let formStarted = false;
form.elements.startedAt.value = String(Date.now());

form.addEventListener('input', () => {
  if (formStarted) return;
  formStarted = true;
  analytics.event('web_registration_started', { language: activeLanguage });
}, { once: true });

function showStatus(type, message) {
  status.className = `form-status ${type}`;
  status.textContent = message;
  status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

const REQUEST_TIMEOUT_MS = 15000;
function setSendingLabel() {
  submit.querySelector('span').textContent = copy(['ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ…', 'SENDING…']);
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (formPending) return;
  for (const field of Object.values(form.elements)) {
    field.removeAttribute?.('aria-invalid');
    field.removeAttribute?.('aria-describedby');
  }
  status.className = 'form-status';
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const notifyEmail = data.get('notifyEmail') === 'on';
  const notifyWhatsApp = data.get('notifyWhatsApp') === 'on';
  const consent = data.get('consent') === 'on';
  const notificationMethod = notifyEmail && notifyWhatsApp ? 'email_and_whatsapp' : notifyEmail ? 'email' : notifyWhatsApp ? 'whatsapp' : 'none';

  function reject(reason, message) {
    analytics.event('web_registration_validation_error', { language: activeLanguage, reason });
    showStatus('error', message);
    const field = form.elements[({ whatsapp: 'phone', notification_method: 'notifyEmail' })[reason] || reason];
    field?.setAttribute('aria-invalid', 'true');
    field?.setAttribute('aria-describedby', 'form-status');
    field?.focus();
  }
  if (name.length < 2) return reject('name', copy(['ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਨਾਮ ਲਿਖੋ।', 'Please enter your name.']));
  if (!notifyEmail && !notifyWhatsApp) return reject('notification_method', copy(['ਈਮੇਲ ਜਾਂ WhatsApp ਵਿੱਚੋਂ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਚੁਣੋ।', 'Choose at least one notification method.']));
  if (notifyEmail && (!email || email.length > 160 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) return reject('email', copy(['ਈਮੇਲ ਸੂਚਨਾ ਲਈ ਸਹੀ ਈਮੇਲ ਪਤਾ ਲਿਖੋ।', 'Enter a valid email address for email updates.']));
  const phoneDigits = phone.replace(/\D/g, '');
  if (notifyWhatsApp && (!/^\+?[0-9 ()-]+$/.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15 || phone.length > 24)) return reject('whatsapp', copy(['WhatsApp ਲਈ ਸਹੀ ਨੰਬਰ ਲਿਖੋ (7–15 ਅੰਕ); ਦੇਸ਼ ਦਾ ਕੋਡ ਵੀ ਸ਼ਾਮਲ ਕਰੋ।', 'Enter a valid WhatsApp number (7–15 digits); include your country code.']));
  if (!consent) return reject('consent', copy(['ਜਾਰੀ ਰੱਖਣ ਲਈ ਸਹਿਮਤੀ ਲੋੜੀਂਦੀ ਹੈ।', 'Consent is required to continue.']));

  formPending = true;
  submit.disabled = true;
  setSendingLabel();
  analytics.event('web_registration_submitted', { language: activeLanguage, notification_method: notificationMethod });
  const controller = new AbortController();
  let timeout;
  let timedOut = false;
  try {
    const request = async () => {
      const response = await fetch(window.SIKHI_KHOJ_CONFIG.registrationEndpoint, {
        method: 'POST',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, ...(notifyEmail ? { email } : {}), ...(notifyWhatsApp ? { phone } : {}), notifyEmail, notifyWhatsApp, consent,
          website: String(data.get('website') || ''),
          startedAt: Number(data.get('startedAt')),
          language: activeLanguage,
          source: 'prelaunch-site'
        })
      });
      const result = await response.json();
      if (!response.ok || !result || typeof result !== 'object' || Array.isArray(result)) throw new Error('Registration failed');
      return result;
    };
    const result = await Promise.race([request(), new Promise((_, reject) => {
      timeout = setTimeout(() => {
        timedOut = true;
        controller.abort();
        reject(new Error('Request timed out'));
      }, REQUEST_TIMEOUT_MS);
    })]);
    analytics.event('web_registration_success', { language: activeLanguage, notification_method: notificationMethod, duplicate: Boolean(result.duplicate) });
    showStatus('success', copy(result.duplicate ? ['ਤੁਸੀਂ ਪਹਿਲਾਂ ਹੀ ਸੂਚੀ ਵਿੱਚ ਹੋ। ਧੰਨਵਾਦ!', 'You are already on the list. Thank you!'] : ['ਧੰਨਵਾਦ! iOS ਉੱਤੇ ਉਪਲਬਧ ਹੋਣ ਵੇਲੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਸੂਚਿਤ ਕਰਾਂਗੇ।', 'Thank you! We’ll notify you when Sikhi Khoj is available on iOS.']));
    form.reset();
    form.elements.startedAt.value = String(Date.now());
  } catch {
    analytics.event('web_registration_error', { language: activeLanguage, reason: timedOut ? 'timeout' : 'network_or_backend' });
    showStatus('error', copy([`ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਦੀ ਪੁਸ਼ਟੀ ਨਹੀਂ ਹੋ ਸਕੀ। ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਇੱਥੇ ਹੀ ਹੈ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ ਜਾਂ ${window.SIKHI_KHOJ_CONFIG.contactEmail} ਤੇ ਈਮੇਲ ਕਰੋ। ਜੇ ਬੇਨਤੀ ਪਹੁੰਚ ਗਈ ਸੀ, ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰਨ ਤੇ ਪਹਿਲਾਂ ਹੀ ਸੂਚੀ ਵਿੱਚ ਹੋਣ ਦਾ ਸੁਨੇਹਾ ਆ ਸਕਦਾ ਹੈ।`, `We could not confirm your registration. Your details are still here. Please retry, or email ${window.SIKHI_KHOJ_CONFIG.contactEmail}. If your request reached us, retrying may show you are already on the list.`]));
  } finally {
    clearTimeout(timeout);
    formPending = false;
    submit.disabled = false;
    submit.querySelector('span').textContent = activeLanguage === 'pa' ? 'ਮੈਨੂੰ ਸੂਚਿਤ ਕਰੋ' : 'REQUEST AN iOS ALERT';
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
