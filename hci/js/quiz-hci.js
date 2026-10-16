// Quiz Data: Human-Computer Interaction (HCI)
const quizHciData = [
  {
    question: "Dalam prinsip desain Donald Norman, apa perbedaan mendasar antara 'Affordance' dan 'Signifier'?",
    options: [
      "Affordance adalah tombol fisik, sedangkan Signifier adalah ikon digital di layar monitor.",
      "Affordance adalah hubungan properti fisik objek yang memungkinkan aksi (misal: tuas bisa ditarik), sedangkan Signifier adalah tanda/sinyal perseptual yang mengkomunikasikan di mana dan bagaimana aksi harus dilakukan (misal: tulisan 'TARIK').",
      "Affordance digunakan untuk desainer antarmuka CLI, sedangkan Signifier untuk antarmuka GUI.",
      "Affordance adalah umpan balik suara, sedangkan Signifier adalah warna kontras antarmuka."
    ],
    answer: 1,
    explanation: "Menurut Donald Norman (The Design of Everyday Things), affordance merujuk pada potensi tindakan aktual antara pengguna dan objek, sedangkan signifier adalah petunjuk visual, auditori, atau taktil yang secara eksplisit memberitahukan pengguna aksi apa yang dapat dilakukan di bagian tersebut."
  },
  {
    question: "Berdasarkan Fitts' Law, manakah strategi desain antarmuka berikut yang paling efektif untuk meminimalkan waktu penargetan kursor (movement time) bagi pengguna?",
    options: [
      "Menempatkan tombol aksi krusial di bagian tengah layar dengan ukuran sekecil mungkin agar hemat ruang.",
      "Menyebarkan menu secara melingkar di tengah window dengan animasi memutar.",
      "Menempatkan tombol aksi atau menu di sudut dan tepi layar (pinned corners/edges) karena memiliki 'lebar tak terbatas' (infinite width/target).",
      "Membuat semua tombol berukuran sama tanpa memperhatikan jarak tempuh kursor pengguna."
    ],
    answer: 2,
    explanation: "Fitts' Law (T = a + b * log2(2D / W)) menyatakan waktu gerak berbanding lurus dengan jarak (D) dan berbanding terbalik dengan lebar target (W). Pada layar komputer, kursor mouse tertahan di batas tepi/sudut layar sehingga pengguna tidak mungkin meleset (target memiliki infinite width virtual)."
  },
  {
    question: "Kapan desainer UX sebaiknya menerapkan prinsip Hick's Law (waktu reaksi meningkat secara logaritmik terhadap jumlah opsi pilihan)?",
    options: [
      "Saat merancang sistem checkout e-commerce: memecah alur form panjang menjadi langkah-langkah bertahap (multi-step wizard) dan membatasi opsi per layar agar pengguna tidak mengalami kelumpuhan analisis (choice paralysis).",
      "Saat menentukan resolusi warna piksel pada panel LCD monitor pengguna.",
      "Saat mengukur kecepatan transfer throughput paket data TCP/IP di jaringan backend.",
      "Saat membuat database relasional untuk menyimpan identitas pengguna."
    ],
    answer: 0,
    explanation: "Hick's Law (T = b * log2(n + 1)) membuktikan bahwa makin banyak alternatif pilihan yang disajikan sekaligus, makin lama waktu yang dibutuhkan pengguna untuk mengambil keputusan. Progressive disclosure dan pengurangan menu yang berlebihan adalah mitigasi langsung Hick's Law."
  },
  {
    question: "Dalam taksonomi CSCW (Computer-Supported Cooperative Work), aplikasi Google Docs yang digunakan bersama oleh dua orang secara bersamaan di tempat yang berbeda masuk dalam kuadran mana pada 'Time-Space Matrix'?",
    options: [
      "Same Time / Same Place (Synchronous - Colocated)",
      "Different Time / Same Place (Asynchronous - Colocated)",
      "Same Time / Different Place (Synchronous - Remote)",
      "Different Time / Different Place (Asynchronous - Remote)"
    ],
    answer: 2,
    explanation: "Kolaborasi real-time (live editing secara instan) di mana pengguna berada di lokasi geografis terpisah diklasifikasikan sebagai Synchronous - Remote (Same Time / Different Place)."
  },
  {
    question: "Seorang pengguna membeli smartwatch mewah bukan hanya karena fiturnya akurat, melainkan karena merasa bangga, percaya diri, dan status sosialnya terangkat saat memakainya. Tingkatan emosional Donald Norman manakah yang mendominasi pengalaman ini?",
    options: [
      "Visceral Level (Respon sensoris otomatis terhadap rupa fisik produk)",
      "Behavioral Level (Kepuasan fungsi, performa operasional, dan kemudahan navigasi)",
      "Reflective Level (Makna mendalam, rasionalisasi diri, citra diri, dan kebanggaan jangka panjang)",
      "Physiological Level (Refleks motorik denyut nadi pengguna)"
    ],
    answer: 2,
    explanation: "Reflective level adalah tingkatan emosi kognitif tertinggi dalam teori Don Norman yang berkaitan dengan persepsi diri, kebanggaan personal, status sosial, cerita di balik produk, dan makna simbolis bagi pengguna."
  }
];

function renderQuizHci(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = quizHciData.map((item, idx) => `
    <div class="quiz-card">
      <div class="quiz-number">Pertanyaan ${idx + 1} dari ${quizHciData.length}</div>
      <div class="quiz-question">${item.question}</div>
      <div class="quiz-options">
        ${item.options.map((opt, optIdx) => `
          <div class="quiz-option" onclick="handleHciQuizClick(this, ${idx}, ${optIdx})">
            <span class="option-label">${String.fromCharCode(65 + optIdx)}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="feedback-hci-${idx}" style="display:none; margin-top:14px; font-size:13px; color:var(--text-secondary); padding:10px; border-radius:6px; background:rgba(255,255,255,0.02);"></div>
    </div>
  `).join('');
}

function handleHciQuizClick(el, qIdx, selectedOpt) {
  const q = quizHciData[qIdx];
  const parent = el.closest('.quiz-options');
  parent.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected', 'correct', 'wrong'));
  
  const isCorrect = selectedOpt === q.answer;
  el.classList.add(isCorrect ? 'correct' : 'wrong');
  
  const feedback = document.getElementById(`feedback-hci-${qIdx}`);
  if (feedback) {
    feedback.style.display = 'block';
    feedback.innerHTML = `<strong>${isCorrect ? '✅ Jawaban Benar!' : '❌ Jawaban Salah!'}</strong> ${q.explanation}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuizHci('quiz-hci-root');
});
