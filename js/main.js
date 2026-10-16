// ===== STUDYHUB MAIN JS =====

// Matrix Rain Effect
function initMatrixRain() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = '01アイウエオカキクケコサシスセソタチツテト∑∆πΩ{}[]<>/\\|#$%@!';
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00fff5';
    ctx.font = `${fontSize}px JetBrains Mono, monospace`;
    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }

  setInterval(draw, 50);
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Typing Animation
function initTypingAnimation() {
  const el = document.getElementById('typing-target');
  if (!el) return;
  const texts = [
    'Portal Materi UTS Semester 5',
    'BINUS University — Cyber Security',
    'Reverse Engineering | Blockchain | Forensic | HCI | OS',
    'Belajar cerdas, lulus maksimal 🚀'
  ];
  let textIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = texts[textIdx];
    if (!deleting) {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
    } else {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        textIdx = (textIdx + 1) % texts.length;
      }
    }
    setTimeout(type, deleting ? 40 : 70);
  }
  type();
}

// UTS Countdown
function initCountdown() {
  const el = document.getElementById('countdown-display');
  if (!el) return;
  // Target: next week by default, or fixed date
  const target = new Date();
  target.setDate(target.getDate() + 14);
  target.setHours(8, 0, 0, 0);

  function update() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) { el.textContent = 'UTS DAY!'; return; }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    el.textContent = `${days}h ${hours}j ${mins}m`;
  }
  update();
  setInterval(update, 60000);
}

// Search Filter
function initSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll('.matkul-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.closest('.card-wrap') ?
        card.closest('.card-wrap').style.display = text.includes(q) ? '' : 'none' :
        card.style.display = text.includes(q) ? '' : 'none';
    });
  });
}

// Copy Code Button
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.closest('.code-block').querySelector('pre code');
      if (!pre) return;
      navigator.clipboard.writeText(pre.textContent).then(() => {
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
      });
    });
  });
}

// Scroll To Top
function initScrollTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Mobile Sidebar Toggle
function initSidebarToggle() {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay && overlay.classList.toggle('visible');
  });
  overlay && overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  });
}

// Progress Tracker (localStorage)
function initProgressTracker() {
  document.querySelectorAll('.progress-check').forEach(item => {
    const key = item.dataset.key;
    if (!key) return;
    const stored = localStorage.getItem(`studyhub_${key}`);
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (stored === 'true') {
      checkbox.checked = true;
      item.classList.add('done');
    }
    item.addEventListener('change', () => {
      const checked = checkbox.checked;
      localStorage.setItem(`studyhub_${key}`, checked);
      item.classList.toggle('done', checked);
      updateProgress();
    });
  });
  updateProgress();
}

function updateProgress() {
  const items = document.querySelectorAll('.progress-check');
  if (items.length === 0) return;
  const done = [...items].filter(i => i.querySelector('input').checked).length;
  document.querySelectorAll('.progress-count').forEach(el => {
    el.textContent = `${done}/${items.length}`;
  });
  document.querySelectorAll('.progress-fill[data-dynamic]').forEach(bar => {
    bar.style.width = `${(done / items.length) * 100}%`;
  });
}

// Tabs
function initTabs() {
  document.querySelectorAll('.tab-nav').forEach(nav => {
    nav.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        const parent = nav.closest('.tab-container') || nav.parentElement;
        nav.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        const targetEl = parent.querySelector(`#${target}`);
        if (targetEl) targetEl.classList.add('active');
      });
    });
  });
}

// Toggle Answer
function initToggleAnswers() {
  document.querySelectorAll('.toggle-answer').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.nextElementSibling;
      if (!section) return;
      const isVisible = section.classList.toggle('visible');
      btn.textContent = isVisible ? '🔼 Sembunyikan Jawaban' : '🔽 Lihat Jawaban & Pembahasan';
    });
  });
}

// Card entrance animation
function initCardAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .soal-card, .case-card, .quiz-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
}

// Stat counter animation
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target; clearInterval(timer); return; }
    el.textContent = Math.floor(start);
  }, 16);
}

function initCounterAnimations() {
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseInt(el.dataset.counter);
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
    observer.observe(el);
  });
}

// Keyboard navigation
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && e.ctrlKey) window.scrollBy({ top: -200, behavior: 'smooth' });
    if (e.key === 'ArrowDown' && e.ctrlKey) window.scrollBy({ top: 200, behavior: 'smooth' });
    if (e.key === 'Home' && e.ctrlKey) window.scrollTo({ top: 0, behavior: 'smooth' });
    if (e.key === 'End' && e.ctrlKey) window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
}

// Init all
document.addEventListener('DOMContentLoaded', () => {
  initMatrixRain();
  initTypingAnimation();
  initCountdown();
  initSearch();
  initCopyButtons();
  initScrollTop();
  initSidebarToggle();
  initProgressTracker();
  initTabs();
  initToggleAnswers();
  initCardAnimations();
  initCounterAnimations();
  initKeyboardNav();
});
