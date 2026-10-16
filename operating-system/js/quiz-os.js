// Quiz Data: Operating Systems (OS)
const quizOsData = [
  {
    question: "Manakah komponen memori berikut yang dibagi bersama (shared) di antara beberapa thread yang berada dalam satu proses yang sama?",
    options: [
      "Program Counter (PC) dan Call Stack",
      "Koleksi Register CPU dan Stack Pointer",
      "Heap Memory, Data Segment (variabel global), dan File Descriptor yang terbuka",
      "Thread ID dan Thread Local Storage (TLS)"
    ],
    answer: 2,
    explanation: "Semua thread dalam satu proses saling berbagi Address Space proses tersebut: Code/Text segment, Data segment (variabel statis/global), Heap memory, dan sumber daya sistem operasi (seperti file terbuka). Namun, setiap thread memiliki Register CPU, Program Counter, dan Call Stack tersendiri."
  },
  {
    question: "Manakah di bawah ini yang BUKAN merupakan salah satu dari 4 kondisi Coffman yang mutlak diperlukan agar deadlock dapat terjadi?",
    options: [
      "Mutual Exclusion (Sumber daya hanya dapat digunakan oleh satu proses pada satu waktu)",
      "Hold and Wait (Proses menahan minimal satu sumber daya sambil menunggu sumber daya lain)",
      "Preemptive Scheduling (Sistem operasi secara paksa mencabut sumber daya dari proses sebelum selesai)",
      "Circular Wait (Terdapat rantai proses {P0, P1, ..., Pn} di mana P0 menunggu P1, dan Pn menunggu P0)"
    ],
    answer: 2,
    explanation: "Kondisi Coffman ketiga adalah 'No Preemption' (sumber daya TIDAK dapat diambil secara paksa dari proses yang menahannya hingga dilepaskan secara sukarela). Jika sistem mengizinkan 'Preemption', maka deadlock tidak akan terjadi."
  },
  {
    question: "Diketahui 3 proses tiba pada waktu t=0: P1 (Burst Time = 24ms), P2 (Burst Time = 3ms), P3 (Burst Time = 3ms). Jika dijadwalkan dengan algoritma SJF (Shortest Job First) non-preemptive, berapakah rata-rata waktu tunggu (Average Waiting Time)?",
    options: [
      "17.0 ms",
      "3.0 ms",
      "6.0 ms",
      "30.0 ms"
    ],
    answer: 1,
    explanation: "Urutan eksekusi SJF: P2 (0-3ms), disusul P3 (3-6ms), lalu P1 (6-30ms). Waktu tunggu P2 = 0ms; waktu tunggu P3 = 3ms; waktu tunggu P1 = 6ms. Rata-rata waktu tunggu = (0 + 3 + 6) / 3 = 9 / 3 = 3.0 ms."
  },
  {
    question: "Dalam sinkronisasi proses menggunakan Counting Semaphore `S`, apa yang terjadi secara internal saat suatu thread memanggil fungsi primitif `wait(S)` atau `sem_wait(&S)`?",
    options: [
      "Nilai S dinaikkan 1. Jika S > 0, proses diblokir.",
      "Nilai S dikurangi 1. Jika nilai S menjadi negatif (< 0), proses yang memanggil akan diblokir dan masuk ke antrean tunggu.",
      "Semua thread yang tertidur akan dibangunkan secara serempak.",
      "Sistem melakukan context switch dan me-restart proses dari baris main()."
    ],
    answer: 1,
    explanation: "Definisi standar operasi wait(S): nilai S didekrementasi (S--). Jika nilai S < 0, berarti sumber daya sedang habis terpakai dan proses penyeru dimasukkan ke antrean proses yang diblokir (waiting queue) hingga ada yang memanggil signal(S)."
  },
  {
    question: "Mengapa algoritma Banker (Banker's Algorithm karya Dijkstra) diklasifikasikan sebagai strategi 'Deadlock Avoidance' dan bukan 'Deadlock Prevention'?",
    options: [
      "Karena algoritma Banker mematikan komputer jika memori penuh.",
      "Karena algoritma Banker secara dinamis memeriksa status alokasi sumber daya setiap kali ada permintaan, memastikan bahwa sistem selalu berada dalam 'Safe State' (terdapat Safe Sequence yang menjamin seluruh proses dapat tuntas tanpa deadlock).",
      "Karena algoritma Banker secara statis menghilangkan salah satu dari 4 kondisi Coffman pada saat proses di-compile.",
      "Karena algoritma Banker mendeteksi deadlock setelah deadlock benar-benar terjadi lalu melakukan rollback transaksi."
    ],
    answer: 1,
    explanation: "Deadlock Avoidance (seperti Banker's Algorithm) bekerja secara dinamis saat runtime dengan menolak permintaan alokasi jika alokasi tersebut membawa sistem ke dalam 'Unsafe State'. Sebaliknya, Deadlock Prevention membatasi cara pemesanan sumber daya secara statis untuk menggagalkan salah satu kondisi Coffman."
  }
];

function renderQuizOs(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = quizOsData.map((item, idx) => `
    <div class="quiz-card">
      <div class="quiz-number">Pertanyaan ${idx + 1} dari ${quizOsData.length}</div>
      <div class="quiz-question">${item.question}</div>
      <div class="quiz-options">
        ${item.options.map((opt, optIdx) => `
          <div class="quiz-option" onclick="handleOsQuizClick(this, ${idx}, ${optIdx})">
            <span class="option-label">${String.fromCharCode(65 + optIdx)}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="feedback-os-${idx}" style="display:none; margin-top:14px; font-size:13px; color:var(--text-secondary); padding:10px; border-radius:6px; background:rgba(255,255,255,0.02);"></div>
    </div>
  `).join('');
}

function handleOsQuizClick(el, qIdx, selectedOpt) {
  const q = quizOsData[qIdx];
  const parent = el.closest('.quiz-options');
  parent.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected', 'correct', 'wrong'));
  
  const isCorrect = selectedOpt === q.answer;
  el.classList.add(isCorrect ? 'correct' : 'wrong');
  
  const feedback = document.getElementById(`feedback-os-${qIdx}`);
  if (feedback) {
    feedback.style.display = 'block';
    feedback.innerHTML = `<strong>${isCorrect ? '✅ Jawaban Benar!' : '❌ Jawaban Salah!'}</strong> ${q.explanation}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuizOs('quiz-os-root');
});
