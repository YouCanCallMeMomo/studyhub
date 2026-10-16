// Quiz Data: Computer Forensic & DFIR
const quizForensicData = [
  {
    question: "Sesuai RFC 3227 (Order of Volatility), manakah urutan akuisisi data bukti digital yang benar dari yang paling mudah menguap?",
    options: [
      "Hard Disk Drive -> RAM -> CPU Registers -> Log SIEM Jarak Jauh",
      "CPU Registers & Cache -> RAM & Koneksi Aktif -> File Swap / Pagefile -> Hard Disk Drive -> Backup Tapes",
      "Kaset Pita Backup -> Hard Disk -> RAM -> CPU",
      "Routing Table -> Hard Disk -> Cache CPU -> Flashdisk"
    ],
    answer: 1,
    explanation: "RFC 3227 menetapkan prioritas akuisisi: register dan cache CPU memiliki usia paling pendek (mikrodetik), disusul RAM, virtual memory, non-volatile storage (disk), dan arsip jarak jauh."
  },
  {
    question: "Apakah fungsi utama dari Hardware Write Blocker saat menghubungkan hard disk tersangka ke komputer analisis forensik?",
    options: [
      "Mencegah virus menginfeksi komputer investigator",
      "Menghapus malware di hard disk tersangka secara otomatis",
      "Meneruskan sinyal baca (Read) tetapi memblokir seluruh perintah tulis (Write) agar integritas bukti tidak berubah",
      "Mempercepat proses hashing SHA-256 hingga dua kali lipat"
    ],
    answer: 2,
    explanation: "Write blocker menjamin bahwa disk bukti original tidak akan mengalami modifikasi data atau perubahan timestamp MACB walau 1 bit sekalipun selama proses pembacaan dan imaging."
  },
  {
    question: "Di dalam sistem berkas Windows NTFS, atribut waktu file manakah yang sering dimanipulasi oleh penyerang dalam teknik 'Timestomping'?",
    options: [
      "$STANDARD_INFORMATION",
      "$FILE_NAME",
      "$BadClust",
      "$Bitmap"
    ],
    answer: 0,
    explanation: "API Windows standar (seperti SetFileTime) hanya memodifikasi atribut $STANDARD_INFORMATION. Investigator dapat mendeteksi manipulasi ini dengan membandingkannya terhadap atribut $FILE_NAME."
  },
  {
    question: "Plugin Volatility 3 manakah yang secara spesifik digunakan untuk mendeteksi memory code injection (seperti shellcode atau DLL injection yang tersembunyi)?",
    options: [
      "windows.info",
      "windows.malfind",
      "windows.netscan",
      "windows.filescan"
    ],
    answer: 1,
    explanation: "'windows.malfind' memindai halaman memori proses yang memiliki izin eksekusi sekaligus tulis (PAGE_EXECUTE_READWRITE) yang tidak didukung file biner di disk, mendeteksi injeksi malware."
  },
  {
    question: "Mengapa smartphone tersangka yang ditemukan menyala sebaiknya segera dimasukkan ke dalam 'Faraday Bag'?",
    options: [
      "Agar baterai smartphone tidak meledak",
      "Memblokir semua sinyal elektromagnetik (seluler, WiFi, Bluetooth, GPS) guna mencegah remote wipe atau pengubahan data dari jarak jauh",
      "Mematikan sistem operasi Android secara otomatis",
      "Menghapus passcode PIN layar kunci"
    ],
    answer: 1,
    explanation: "Faraday Bag memutus konektivitas nirkabel secara fisik sehingga pelaku tidak dapat mengirimkan perintah penghancuran data (Remote Factory Reset) ke ponsel yang sedang diamankan."
  }
];

function renderQuizForensic(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = quizForensicData.map((item, idx) => `
    <div class="quiz-card">
      <div class="quiz-number">Pertanyaan ${idx + 1} dari ${quizForensicData.length}</div>
      <div class="quiz-question">${item.question}</div>
      <div class="quiz-options">
        ${item.options.map((opt, optIdx) => `
          <div class="quiz-option" onclick="handleForensicQuizClick(this, ${idx}, ${optIdx})">
            <span class="option-label">${String.fromCharCode(65 + optIdx)}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="feedback-cf-${idx}" style="display:none; margin-top:14px; font-size:13px; color:var(--text-secondary); padding:10px; border-radius:6px; background:rgba(255,255,255,0.02);"></div>
    </div>
  `).join('');
}

function handleForensicQuizClick(el, qIdx, selectedOpt) {
  const q = quizForensicData[qIdx];
  const parent = el.closest('.quiz-options');
  parent.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected', 'correct', 'wrong'));
  
  const isCorrect = selectedOpt === q.answer;
  el.classList.add(isCorrect ? 'correct' : 'wrong');
  
  const feedback = document.getElementById(`feedback-cf-${qIdx}`);
  if (feedback) {
    feedback.style.display = 'block';
    feedback.innerHTML = `<strong>${isCorrect ? '✅ Jawaban Benar!' : '❌ Jawaban Salah!'}</strong> ${q.explanation}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuizForensic('quiz-forensic-root');
});
