// Quiz Data: Windows Log Analysis & Blue Team SOC
const quizWindowsLogsData = [
  {
    question: "Pada Windows Security Event ID 4624 (Successful Logon), jika nilai field 'LogonType' bernilai 10, jenis sesi login apakah yang baru saja terbentuk?",
    options: [
      "Interactive Logon (pengguna login langsung secara fisik di depan keyboard & monitor lokal).",
      "Network Logon (akses share folder SMB atau otentikasi jaringan tanpa interaksi desktop).",
      "RemoteInteractive / Terminal Services (pengguna login jarak jauh via Remote Desktop Protocol / RDP).",
      "Service Logon (layanan Windows Service yang distart oleh sistem operasi di background)."
    ],
    answer: 2,
    explanation: "Logon Type 10 secara spesifik merepresentasikan 'RemoteInteractive' (login RDP / Terminal Server). Tipe 2 adalah Interactive (lokal fisik), Tipe 3 adalah Network (SMB/RPC), dan Tipe 5 adalah Service."
  },
  {
    question: "Dalam prinsip analisis 'Context is Everything' untuk Windows Core Processes, manakah anomali proses berikut yang paling kuat mengindikasikan adanya Living-Off-the-Land (LOLBin) attack atau penyamaran malware?",
    options: [
      "Proses 'services.exe' memiliki parent process 'wininit.exe' dan berjalan dari 'C:\\Windows\\System32'.",
      "Proses 'svchost.exe' memiliki parent process 'cmd.exe', berjalan dari folder 'C:\\Users\\Public\\Downloads', dan dijalankan dengan akun user biasa.",
      "Proses 'explorer.exe' dijalankan oleh user interaktif dan memiliki child process 'chrome.exe'.",
      "Proses 'lsass.exe' berjalan sebagai akun NT AUTHORITY\\SYSTEM di 'C:\\Windows\\System32'."
    ],
    answer: 1,
    explanation: "Normalnya, 'svchost.exe' hanya boleh memiliki parent process 'services.exe', wajib berada di 'C:\\Windows\\System32', dan berjalan dengan akun SYSTEM atau Network/Local Service. Jika svchost.exe muncul dari C:\\Users\\... dengan parent cmd.exe, itu adalah malware yang menyamar (process masquerading)."
  },
  {
    question: "Sysmon Event ID berapakah yang paling krusial dipantau oleh SOC Analyst untuk mendeteksi teknik Credential Dumping pada memori LSASS (seperti penggunaan Mimikatz atau procdump)?",
    options: [
      "Sysmon Event ID 1 (Process Create)",
      "Sysmon Event ID 3 (Network Connection)",
      "Sysmon Event ID 10 (ProcessAccess - mendeteksi proses mencurigakan yang membuka handle ke lsass.exe)",
      "Sysmon Event ID 22 (DNS Query)"
    ],
    answer: 2,
    explanation: "Sysmon Event ID 10 merekam 'ProcessAccess'. Ketika tools penyerang (misal Mimikatz atau Taskmgr) mencoba membaca memori LSASS untuk mengekstrak hash NTLM atau tiket Kerberos, Sysmon Event ID 10 akan mencatat TargetImage 'lsass.exe' dengan GrantedAccess spesifik (seperti 0x1010 atau 0x1FFFFF)."
  },
  {
    question: "Mengapa analis SOC dan detection engineer sangat membutuhkan 'XML View' dari Windows Event Log dibandingkan hanya melihat 'Friendly View' di Event Viewer?",
    options: [
      "Karena XML View secara otomatis memblokir koneksi IP penyerang.",
      "Karena XML View menyajikan raw schema-based data berstruktur pasti (EventData name/value pairs) yang esensial untuk penulisan rule SIEM, query XPath filter, parsing otomasi Python/PowerShell, dan deteksi akurat.",
      "Karena Friendly View tidak menampilkan tanggal dan jam insiden.",
      "Karena XML View hanya bisa dibuka jika komputer terkoneksi ke internet."
    ],
    answer: 1,
    explanation: "XML View menyediakan data mentah yang terstruktur rapi ke dalam node <System> dan <EventData>. Nama field eksak (seperti TargetUserName, LogonType, CommandLine) sangat diperlukan untuk pembuatan query SIEM (Splunk, Elastic, Sentinel) dan aturan Sigma."
  },
  {
    question: "Dalam alur investigasi berstandar open-source yang direkomendasikan Josh Speshock, alat apakah yang memanfaatkan rules berbasis Sigma untuk memindai berkas EVTX dalam jumlah besar dan secara otomatis menyusun kronologi insiden?",
    options: [
      "Notepad++",
      "Hayabusa dan Chainsaw",
      "Windows Calculator",
      "Paint 3D"
    ],
    answer: 1,
    explanation: "Hayabusa dan Chainsaw adalah open-source threat-hunting tools berkinerja tinggi yang mengevaluasi rules Sigma terhadap log EVTX untuk mendeteksi logons anomali, eksekusi LOLBins, persisten, dan membangun timeline investigasi secara cepat."
  }
];

function renderQuizWindowsLogs(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = quizWindowsLogsData.map((item, idx) => `
    <div class="quiz-card">
      <div class="quiz-number">Pertanyaan ${idx + 1} dari ${quizWindowsLogsData.length}</div>
      <div class="quiz-question">${item.question}</div>
      <div class="quiz-options">
        ${item.options.map((opt, optIdx) => `
          <div class="quiz-option" onclick="handleWindowsLogsQuizClick(this, ${idx}, ${optIdx})">
            <span class="option-label">${String.fromCharCode(65 + optIdx)}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="feedback-winlog-${idx}" style="display:none; margin-top:14px; font-size:13px; color:var(--text-secondary); padding:10px; border-radius:6px; background:rgba(255,255,255,0.02);"></div>
    </div>
  `).join('');
}

function handleWindowsLogsQuizClick(el, qIdx, selectedOpt) {
  const q = quizWindowsLogsData[qIdx];
  const parent = el.closest('.quiz-options');
  parent.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected', 'correct', 'wrong'));
  
  const isCorrect = selectedOpt === q.answer;
  el.classList.add(isCorrect ? 'correct' : 'wrong');
  
  const feedback = document.getElementById(`feedback-winlog-${qIdx}`);
  if (feedback) {
    feedback.style.display = 'block';
    feedback.innerHTML = `<strong>${isCorrect ? '✅ Jawaban Benar!' : '❌ Jawaban Salah!'}</strong> ${q.explanation}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuizWindowsLogs('quiz-winlog-root');
});
