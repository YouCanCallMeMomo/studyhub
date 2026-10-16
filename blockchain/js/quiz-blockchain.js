// Quiz Data: Blockchain Technology
const quizBcData = [
  {
    question: "Manakah sifat kriptografi hashing yang menjamin bahwa perubahan 1 bit saja pada input akan mengubah lebih dari separuh nilai hash output?",
    options: ["Pre-image Resistance", "Avalanche Effect", "Merkle Proof", "Collision Uniformity"],
    answer: 1,
    explanation: "Avalanche effect (efek longsoran) memastikan perubahan mikroskopis pada data masukan menghasilkan string hash yang sama sekali berbeda dan tidak dapat diprediksi."
  },
  {
    question: "Bagaimanakah seorang klien SPV (Simplified Payment Verification) memvalidasi bahwa suatu transaksi ada di dalam blok tanpa mengunduh seluruh isi transaksi?",
    options: [
      "Mengunduh seluruh blockchain dari genesis block",
      "Menggunakan Merkle Path (jalur hash cabang) menuju Merkle Root yang ada di header blok",
      "Meminta private key milik miner",
      "Menjalankan brute-force SHA-256 terhadap nonce"
    ],
    answer: 1,
    explanation: "SPV client hanya memerlukan Block Header dan sederet hash tetangga (Merkle Path) berukuran logaritmik O(log N) untuk membuktikan integritas transaksi ke Merkle Root."
  },
  {
    question: "Pada Solidity v0.8+, lokasi memori (data location) manakah yang bersifat read-only, dialokasikan untuk parameter fungsi eksternal, dan paling hemat gas?",
    options: ["storage", "memory", "calldata", "stack"],
    answer: 2,
    explanation: "'calldata' adalah area memori sementara yang immutable (tidak dapat dimodifikasi) yang menyimpan payload transaksi asli, menjadikannya pilihan paling efisien gas."
  },
  {
    question: "Serangan 'The DAO Hack' (2016) yang memicu perpecahan Ethereum dan Ethereum Classic disebabkan oleh kerentanan:",
    options: ["Integer Underflow", "Reentrancy Attack", "Front-running sandwich", "51% Hashrate Takeover"],
    answer: 1,
    explanation: "Reentrancy terjadi karena kontrak mentransfer dana sebelum memperbarui state saldo pengirim, memungkinkan attacker memanggil fungsi tarik dana secara berulang-ulang."
  },
  {
    question: "Mekanisme EIP-1559 di jaringan Ethereum memperkenalkan 'Base Fee' yang memiliki karakteristik unik yaitu:",
    options: [
      "Diberikan 100% kepada validator pembuat blok",
      "Dihanguskan (burned) secara permanen dari sirkulasi suplai ETH",
      "Diberikan kepada penemu bug smart contract",
      "Ditransfer kembali ke dompet pengirim"
    ],
    answer: 1,
    explanation: "Di bawah EIP-1559, Base Fee dihitung secara algoritmik per blok dan di-burn permanen, memberikan efek deflasi terhadap total suplai Ether."
  }
];

function renderQuizBlockchain(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = quizBcData.map((item, idx) => `
    <div class="quiz-card">
      <div class="quiz-number">Pertanyaan ${idx + 1} dari ${quizBcData.length}</div>
      <div class="quiz-question">${item.question}</div>
      <div class="quiz-options">
        ${item.options.map((opt, optIdx) => `
          <div class="quiz-option" onclick="handleBcQuizClick(this, ${idx}, ${optIdx})">
            <span class="option-label">${String.fromCharCode(65 + optIdx)}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="feedback-bc-${idx}" style="display:none; margin-top:14px; font-size:13px; color:var(--text-secondary); padding:10px; border-radius:6px; background:rgba(255,255,255,0.02);"></div>
    </div>
  `).join('');
}

function handleBcQuizClick(el, qIdx, selectedOpt) {
  const q = quizBcData[qIdx];
  const parent = el.closest('.quiz-options');
  parent.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected', 'correct', 'wrong'));
  
  const isCorrect = selectedOpt === q.answer;
  el.classList.add(isCorrect ? 'correct' : 'wrong');
  
  const feedback = document.getElementById(`feedback-bc-${qIdx}`);
  if (feedback) {
    feedback.style.display = 'block';
    feedback.innerHTML = `<strong>${isCorrect ? '✅ Tepat Sekali!' : '❌ Jawaban Salah!'}</strong> ${q.explanation}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuizBlockchain('quiz-blockchain-root');
});
