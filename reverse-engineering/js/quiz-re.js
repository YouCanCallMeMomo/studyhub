// Quiz Data: Reverse Engineering
const quizReData = [
  {
    question: "Manakah register x64 yang digunakan sebagai register accumulator untuk menampung return value fungsi?",
    options: ["RDI", "RAX", "RSP", "RBX"],
    answer: 1,
    explanation: "Register RAX (64-bit) atau EAX (32-bit) secara konvensi arsitektur x86/x64 selalu digunakan untuk mengembalikan nilai fungsi integer atau pointer."
  },
  {
    question: "Instruksi apakah yang ekuivalen fungsinya dengan 'mov rsp, rbp; pop rbp' pada epilog fungsi?",
    options: ["ret", "leave", "nop", "pop rax"],
    answer: 1,
    explanation: "Instruksi 'leave' secara atomik menyalin nilai RBP ke RSP (menghancurkan frame lokal) dan melakukan pop RBP untuk mengembalikan frame pemanggil."
  },
  {
    question: "Pada konvensi System V AMD64 (Linux 64-bit), urutan 3 register pertama yang digunakan untuk passing argumen adalah:",
    options: ["RAX, RBX, RCX", "RDI, RSI, RDX", "RCX, RDX, R8", "RSP, RBP, RIP"],
    answer: 1,
    explanation: "Urutan passing argumen fungsi System V AMD64: RDI (arg 1), RSI (arg 2), RDX (arg 3), RCX (arg 4), R8 (arg 5), R9 (arg 6)."
  },
  {
    question: "Jika compiler mengeksekusi instruksi 'xor eax, eax', apakah tujuan utama dari operasi ini?",
    options: ["Membalikkan semua bit EAX", "Mengosongkan nilai register EAX menjadi 0", "Menghitung modulus nilai", "Mengalikan EAX dengan 2"],
    answer: 1,
    explanation: "'xor reg, reg' menghasilkan 0 pada semua bit dan menghasilkan binary opcode yang jauh lebih kecil serta cepat dibandingkan 'mov eax, 0'."
  },
  {
    question: "Instruksi 'lea rax, [rbp-8]' berbeda dengan 'mov rax, [rbp-8]' karena LEA:",
    options: [
      "Mengambil nilai isi data di alamat [rbp-8]",
      "Menghitung dan memuat alamat memori itu sendiri (&var), bukan datanya",
      "Mengosongkan isi stack di [rbp-8]",
      "Hanya dapat bekerja pada pointer fungsi"
    ],
    answer: 1,
    explanation: "LEA (Load Effective Address) menghitung ekspresi alamat memori dan memuat alamat tersebut ke register tujuan (ekuivalen dengan operator '&' di bahasa C)."
  }
];

function renderQuizRe(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = quizReData.map((item, idx) => `
    <div class="quiz-card">
      <div class="quiz-number">Pertanyaan ${idx + 1} dari ${quizReData.length}</div>
      <div class="quiz-question">${item.question}</div>
      <div class="quiz-options">
        ${item.options.map((opt, optIdx) => `
          <div class="quiz-option" onclick="handleReQuizClick(this, ${idx}, ${optIdx})">
            <span class="option-label">${String.fromCharCode(65 + optIdx)}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="feedback-re-${idx}" style="display:none; margin-top:14px; font-size:13px; color:var(--text-secondary); padding:10px; border-radius:6px; background:rgba(255,255,255,0.02);"></div>
    </div>
  `).join('');
}

function handleReQuizClick(el, qIdx, selectedOpt) {
  const q = quizReData[qIdx];
  const parent = el.closest('.quiz-options');
  parent.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected', 'correct', 'wrong'));
  
  const isCorrect = selectedOpt === q.answer;
  el.classList.add(isCorrect ? 'correct' : 'wrong');
  
  const feedback = document.getElementById(`feedback-re-${qIdx}`);
  if (feedback) {
    feedback.style.display = 'block';
    feedback.innerHTML = `<strong>${isCorrect ? '✅ Benar!' : '❌ Kurang Tepat!'}</strong> ${q.explanation}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuizRe('quiz-re-root');
});
