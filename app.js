const scholarships = [
  {
    id: 'pragati',
    short: 'P',
    logo: 'marigold',
    title: 'Pragati Scholarship for Girls',
    body: 'AICTE · Government of India',
    portal: 'https://www.aicte-india.org/schemes/students-development-schemes',
    amount: '₹50,000',
    period: '/ year',
    deadline: '2026-11-27T23:59:00+05:30',
    category: ['government', 'women', 'merit'],
    tags: ['Women in STEM', 'Engineering'],
    match: 96,
    why: 'Your course, gender, income, and 8.5 GPA line up with this scheme’s strongest fit signals.',
    award: 'Up to ₹50,000 / year',
    bodyName: 'All India Council for Technical Education',
    renewal: 'Renewable each year while you remain enrolled and maintain the academic threshold.',
    rules: ['Female student', 'Technical degree', 'Income ≤ ₹8L'],
    docs: [
      { name: 'Income Certificate', type: 'Verified', complete: true },
      { name: 'Caste Certificate', type: 'Uploaded', complete: true },
      { name: 'Marksheets', type: 'Uploaded', complete: true },
      { name: 'Bonafide Letter', type: 'Add document', complete: false },
      { name: 'Bank details', type: 'Add document', complete: false }
    ]
  },
  {
    id: 'epass',
    short: 'T',
    logo: 'sage',
    title: 'Telangana ePASS Post-Matric',
    body: 'Telangana Government · State support',
    portal: 'https://telanganaepass.cgg.gov.in/',
    amount: '₹35,000',
    period: ' tuition aid',
    deadline: '2026-12-04T23:59:00+05:30',
    category: ['government', 'need'],
    tags: ['Telangana', 'BC students'],
    match: 92,
    why: 'Your domicile, BC category, and family income make you a strong state-support match.',
    award: 'Tuition + maintenance aid',
    bodyName: 'Telangana ePASS Welfare Department',
    renewal: 'Renewal is tied to continued enrolment and an updated income certificate.',
    rules: ['Telangana domicile', 'BC / SC / ST', 'Income ≤ ₹2.5L'],
    docs: [
      { name: 'Income Certificate', type: 'Verified', complete: true },
      { name: 'Caste Certificate', type: 'Uploaded', complete: true },
      { name: 'Marksheets', type: 'Uploaded', complete: false },
      { name: 'Bonafide Letter', type: 'Add document', complete: false }
    ]
  },
  {
    id: 'nsp',
    short: 'N',
    logo: 'coral',
    title: 'NSP Post-Matric Scholarship',
    body: 'Ministry of Social Justice · Government',
    portal: 'https://scholarships.gov.in/',
    amount: '₹20,000',
    period: ' support',
    deadline: '2026-12-12T23:59:00+05:30',
    category: ['government', 'need'],
    tags: ['BC students', 'Post-matric'],
    match: 88,
    why: 'Your category and income are comfortably inside the post-matric support thresholds.',
    award: 'Up to ₹20,000 support',
    bodyName: 'National Scholarship Portal',
    renewal: 'Renew annually through the National Scholarship Portal with a current marksheet.',
    rules: ['BC category', 'Income ≤ ₹2.5L', 'Post-matric study'],
    docs: [
      { name: 'Income Certificate', type: 'Verified', complete: true },
      { name: 'Caste Certificate', type: 'Uploaded', complete: true },
      { name: 'Marksheets', type: 'Uploaded', complete: false },
      { name: 'Bonafide Letter', type: 'Add document', complete: false }
    ]
  },
  {
    id: 'reliance',
    short: 'R',
    logo: 'lavender',
    title: 'Reliance Foundation Scholarship',
    body: 'Reliance Foundation · Private',
    portal: 'https://www.reliancefoundation.org/education',
    amount: '₹2,00,000',
    period: ' total',
    deadline: '2026-12-27T23:59:00+05:30',
    category: ['merit', 'need'],
    tags: ['Merit-based', 'All India'],
    match: 84,
    why: 'Your academic score clears the merit bar, while your income keeps this opportunity meaningful.',
    award: 'Up to ₹2,00,000 total',
    bodyName: 'Reliance Foundation',
    renewal: 'Award continues across the degree subject to academic progress and conduct.',
    rules: ['GPA ≥ 7.5', 'Income ≤ ₹15L', 'Undergraduate'],
    docs: [
      { name: 'Income Certificate', type: 'Verified', complete: true },
      { name: 'Marksheets', type: 'Uploaded', complete: true },
      { name: 'Bonafide Letter', type: 'Add document', complete: false }
    ]
  },
  {
    id: 'sitaram',
    short: 'S',
    logo: 'white',
    title: 'Sitaram Jindal Foundation',
    body: 'SJF · Merit + need-based',
    portal: 'https://www.sitaramjindalfoundation.org/',
    amount: '₹36,000',
    period: ' / year',
    deadline: '2027-01-14T23:59:00+05:30',
    category: ['merit', 'need'],
    tags: ['Merit-based', 'Need-based'],
    match: 81,
    why: 'Your GPA and income fit the foundation’s student support criteria.',
    award: 'Up to ₹36,000 / year',
    bodyName: 'Sitaram Jindal Foundation',
    renewal: 'Renewable with proof of continued study and academic performance.',
    rules: ['GPA ≥ 7.5', 'Income ≤ ₹4.5L', 'Full-time student'],
    docs: [
      { name: 'Income Certificate', type: 'Verified', complete: true },
      { name: 'Marksheets', type: 'Uploaded', complete: true },
      { name: 'Bonafide Letter', type: 'Add document', complete: false }
    ]
  },
  {
    id: 'mi',
    short: 'M',
    logo: 'sage',
    title: 'Mi Scholarship for Women',
    body: 'Mi India · Women in STEM',
    portal: 'https://www.mi.com/in/service/support/scholarship.html',
    amount: '₹50,000',
    period: ' award',
    deadline: '2027-02-05T23:59:00+05:30',
    category: ['women', 'merit'],
    tags: ['Women in STEM', 'Private'],
    match: 79,
    why: 'Your engineering degree and academic record unlock this women-focused technology award.',
    award: '₹50,000 award',
    bodyName: 'Mi India',
    renewal: 'One-time award with a mentorship opportunity for selected students.',
    rules: ['Female student', 'STEM degree', 'GPA ≥ 7.0'],
    docs: [
      { name: 'Marksheets', type: 'Uploaded', complete: true },
      { name: 'Bonafide Letter', type: 'Add document', complete: false },
      { name: 'Identity proof', type: 'Add document', complete: false }
    ]
  }
];

const state = {
  selected: 'pragati',
  activeFilter: 'all',
  documents: {},
  bookmarks: new Set(['pragati', 'reliance'])
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function getScholarship(id = state.selected) {
  return scholarships.find((scheme) => scheme.id === id) || scholarships[0];
}

function getProfile() {
  return {
    category: $('#category')?.value || 'BC',
    gender: $('#gender')?.value || 'female',
    income: Number($('#income')?.value || 150000),
    gpa: Number($('#gpa')?.value || 8.5),
    state: $('#state')?.value || 'Telangana',
    degree: $('#degree')?.value || 'Engineering'
  };
}

function calculateMatch(scheme) {
  const profile = getProfile();
  let score = scheme.match;
  if (scheme.id === 'pragati') {
    if (profile.gender !== 'female') score -= 17;
    if (profile.degree !== 'Engineering') score -= 12;
    if (profile.income > 800000) score -= 10;
    if (profile.gpa < 6.5) score -= 8;
  }
  if (scheme.id === 'epass') {
    if (profile.state !== 'Telangana') score -= 15;
    if (profile.category !== 'BC') score -= 15;
    if (profile.income > 250000) score -= 10;
  }
  if (scheme.id === 'nsp') {
    if (!['BC', 'SC', 'ST'].includes(profile.category)) score -= 15;
    if (profile.income > 250000) score -= 12;
  }
  if (scheme.id === 'reliance') {
    if (profile.gpa < 7.5) score -= 15;
    if (profile.income > 1500000) score -= 8;
    if (profile.degree !== 'Engineering') score -= 3;
  }
  if (scheme.id === 'sitaram') {
    if (profile.gpa < 7.5) score -= 12;
    if (profile.income > 450000) score -= 9;
  }
  if (scheme.id === 'mi') {
    if (profile.gender !== 'female') score -= 17;
    if (profile.degree !== 'Engineering') score -= 12;
    if (profile.gpa < 7) score -= 8;
  }
  return Math.max(0, Math.min(99, score));
}

function countdown(deadline) {
  const distance = new Date(deadline).getTime() - Date.now();
  if (distance <= 0) return 'CLOSED';
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  if (days > 0) return `${days} day${days === 1 ? '' : 's'} left`;
  return `${hours} hours left`;
}

function countdownShort(deadline) {
  const distance = new Date(deadline).getTime() - Date.now();
  if (distance <= 0) return 'CLOSED';
  const days = Math.max(0, Math.floor(distance / 86400000));
  return days > 0 ? `${String(days).padStart(2, '0')} DAYS` : 'TODAY';
}

function formatMoney(value) {
  return `₹${Number(value || 0).toLocaleString('en-IN')}`;
}

function showToast(message) {
  const toast = $('#toast');
  $('p', toast).textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('show'), 2700);
}

function switchTab(tabName) {
  $$('[data-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.panel === tabName));
  $$('[data-tab]').forEach((control) => control.classList.toggle('active', control.dataset.tab === tabName));
  const menu = $('.mobile-menu');
  const toggle = $('.menu-toggle');
  if (menu) menu.classList.remove('open');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

async function initBackground() {
  const canvas = $('#canvas');
  if (!canvas) return;
  try {
    const module = await import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');
    const TubesCursor = module.default || module;
    TubesCursor(canvas, {
      tubes: {
        colors: ['#ff008a', '#8b5cf6', '#3b82f6', '#ffffff'],
        lights: { intensity: 50, colors: ['#ff008a', '#8b5cf6', '#3b82f6', '#ffffff'] }
      }
    });
  } catch (error) {
    document.body.classList.add('background-fallback');
  }
}

function renderScholarships() {
  const grid = $('#scholarship-grid');
  grid.innerHTML = scholarships.map((scheme, index) => {
    const isHidden = state.activeFilter !== 'all' && !scheme.category.includes(state.activeFilter);
    const isSelected = state.selected === scheme.id;
    const countdownText = countdownShort(scheme.deadline);
    const match = calculateMatch(scheme);
    const isBookmarked = state.bookmarks.has(scheme.id);
    return `
      <article class="scholarship-card reveal ${isHidden ? 'hidden' : ''}" data-scheme="${scheme.id}" style="--card-index:${index}">
        <div class="scholarship-top"><span class="scheme-logo ${scheme.logo}">${scheme.short}</span><div class="card-actions"><span class="countdown-badge ${countdownText === 'CLOSED' ? 'safe' : ''}">${countdownText}</span><button class="save-scheme ${isBookmarked ? 'saved' : ''}" type="button" data-bookmark="${scheme.id}" aria-label="${isBookmarked ? 'Remove bookmark' : 'Bookmark'} ${scheme.title}" aria-pressed="${isBookmarked}">${isBookmarked ? '★' : '☆'}</button></div></div>
        <h3>${scheme.title}</h3>
        <p>${scheme.body}</p>
        <div class="card-tags">${scheme.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
        <div class="scholarship-bottom"><span class="award-amount">${scheme.amount}<small>${scheme.period}</small></span><span class="match-stamp">${match}%<small>match</small></span></div>
        ${isSelected ? '<span class="selected-card-line"></span>' : ''}
      </article>`;
  }).join('');

  $$('.scholarship-card').forEach((card) => {
    card.addEventListener('click', () => {
      state.selected = card.dataset.scheme;
      renderScholarships();
      renderDetail();
      switchTab('documents');
    });
  });
  $$('.save-scheme').forEach((button) => button.addEventListener('click', (event) => {
    event.stopPropagation();
    const id = button.dataset.bookmark;
    if (state.bookmarks.has(id)) state.bookmarks.delete(id);
    else state.bookmarks.add(id);
    renderScholarships();
    $('#bookmark-count').textContent = String(state.bookmarks.size).padStart(2, '0');
    showToast(state.bookmarks.has(id) ? 'Saved to your Bookmarked lane.' : 'Removed from your Bookmarked lane.');
  }));
  observeReveals();
  const visibleMatches = scholarships.filter((scheme) => calculateMatch(scheme) >= 70 && (state.activeFilter === 'all' || scheme.category.includes(state.activeFilter)));
  $('#match-count').textContent = String(visibleMatches.length).padStart(2, '0');
}

function renderDetail() {
  const scheme = getScholarship();
  const detail = $('#scheme-detail');
  detail.innerHTML = `
    <div class="detail-top"><div class="detail-brand"><span class="detail-logo">${scheme.short}</span><div><span>${scheme.body}</span><strong>Official scheme profile</strong></div></div><a class="detail-open-link" href="${scheme.portal}" target="_blank" rel="noreferrer">Official portal ↗</a></div>
    <h3>${scheme.title}</h3>
    <p class="detail-subtitle">${scheme.why}</p>
    <div class="detail-highlights"><div class="detail-highlight"><span>Award amount</span><strong>${scheme.award}</strong></div><div class="detail-highlight"><span>Closes in</span><strong>${countdown(scheme.deadline)}</strong></div><div class="detail-highlight"><span>Administered by</span><strong>${scheme.bodyName}</strong></div></div>
    <div class="detail-body-grid"><div class="detail-body"><h4>Why you matched</h4><div class="rule-list">${scheme.rules.map((rule) => `<span>✓ ${rule}</span>`).join('')}</div></div><div class="detail-body"><h4>Renewal conditions</h4><p>${scheme.renewal}</p></div></div>`;
  renderDocuments(scheme);
}

function documentKey(scheme, doc) {
  return `${scheme.id}:${doc.name}`;
}

function renderDocuments(scheme) {
  const docs = scheme.docs.map((doc) => {
    const key = documentKey(scheme, doc);
    const complete = state.documents[key] ?? doc.complete;
    return { ...doc, complete, key };
  });
  const completeCount = docs.filter((doc) => doc.complete).length;
  const total = docs.length;
  $('#readiness-count').textContent = `${completeCount}/${total}`;
  $('#readiness-meter-fill').style.width = `${(completeCount / total) * 100}%`;
  $('#readiness-copy').textContent = completeCount === total ? 'Everything this scheme needs is ready to go.' : `${completeCount} core document${completeCount === 1 ? ' is' : 's are'} in shape. ${total - completeCount} more to gather.`;
  $('#document-list').innerHTML = docs.map((doc) => `<div class="document-row"><button class="document-toggle ${doc.complete ? 'complete' : ''}" type="button" data-document="${doc.key}" aria-label="Toggle ${doc.name}">${doc.complete ? '✓' : ''}</button><p>${doc.name}</p><small>${doc.complete ? doc.type : 'Tap to mark ready'}</small></div>`).join('');
  $$('.document-toggle').forEach((button) => button.addEventListener('click', () => {
    state.documents[button.dataset.document] = !button.classList.contains('complete');
    renderDocuments(getScholarship());
  }));
}

function updateCountdowns() {
  $$('.countdown-badge').forEach((badge, index) => {
    badge.textContent = countdownShort(scholarships[index].deadline);
  });
  if ($('#scheme-detail')) renderDetail();
}

function updateCalculator() {
  const tuition = Number($('#tuition').value || 0);
  const contribution = Number($('#contribution').value || 0);
  const gap = Math.max(tuition - contribution, 0);
  $('#gap-result').textContent = formatMoney(gap);
}

function refreshProfile() {
  const income = Number($('#income').value || 0);
  const gpa = Number($('#gpa').value || 0);
  const isHighFit = income <= 250000 && gpa >= 8;
  renderScholarships();
  renderDetail();
  const count = scholarships.filter((scheme) => calculateMatch(scheme) >= 70).length;
  $('#match-count').textContent = String(count).padStart(2, '0');
  showToast(isHighFit ? 'Profile refreshed — six strong fits found.' : `${count} strong fits found — your shortlist is updated.`);
}

function observeReveals() {
  const items = $$('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  if (!window.revealObserver) {
    window.revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px' });
  }
  items.forEach((item) => window.revealObserver.observe(item));
}

function bindEvents() {
  $('#profile-form').addEventListener('submit', (event) => {
    event.preventDefault();
    refreshProfile();
    switchTab('matches');
  });

  $$('[data-tab]').forEach((control) => control.addEventListener('click', () => switchTab(control.dataset.tab)));
  $('.menu-toggle').addEventListener('click', () => {
    const menu = $('.mobile-menu');
    const toggle = $('.menu-toggle');
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  $$('.filter-pill').forEach((button) => button.addEventListener('click', () => {
    state.activeFilter = button.dataset.filter;
    $$('.filter-pill').forEach((pill) => pill.classList.toggle('active', pill === button));
    renderScholarships();
  }));

  $('#tuition').addEventListener('input', updateCalculator);
  $('#contribution').addEventListener('input', updateCalculator);
  $('#send-alert').addEventListener('click', () => showToast('Test nudge sent — check your imaginary WhatsApp.'));

  $$('[data-toast]').forEach((button) => button.addEventListener('click', () => showToast(button.dataset.toast)));
  $$('.language-option').forEach((button) => button.addEventListener('click', () => {
    $$('.language-option').forEach((option) => option.classList.toggle('active', option === button));
  }));

  $('.lane-action').addEventListener('click', (event) => {
    event.stopPropagation();
    event.currentTarget.textContent = 'Moved to applied ✓';
    event.currentTarget.style.color = '#67e8a5';
    $('#bookmark-count').textContent = '01';
    showToast('Pragati moved to Applied. Nice momentum.');
  });
}

function init() {
  renderScholarships();
  renderDetail();
  updateCalculator();
  bindEvents();
  observeReveals();
  updateCountdowns();
  switchTab('dashboard');
  initBackground();
  setInterval(updateCountdowns, 60000);
}

document.addEventListener('DOMContentLoaded', init);
