# 🛡️ StudyHub SOC v2.0 — Portal Materi UTS Semester 5
> **BINUS University — Cyber Security Academic Defense Portal**

StudyHub SOC v2.0 adalah portal pembelajaran web interaktif bertema Security Operations Center (SOC) dan Cyberpunk aesthetic, dirancang khusus untuk mahasiswa Cyber Security dalam menghadapi Ujian Tengah Semester (UTS) Semester 5 dan pelatihan spesialisasi SOC.

---

## ⚡ Fitur Utama

- **Cyberpunk / SOC Terminal Aesthetic:** Palet warna gelap (`#0a0e17`), aksen neon cyan (`#00fff5`), neon green (`#39ff14`), electric blue (`#3b82f6`), purple (`#a855f7`), efek matrix rain canvas, scanlines, dan glitch header.
- **5 Mata Kuliah Inti Semester 5:**
  1. 🔓 **Reverse Engineering:** Arsitektur x86 vs x64, dekompilasi ASM ke C, tabel register, calling convention, dan 10 latihan dekompilasi dengan visualisasi diagram stack memory bergaris.
  2. ⛓️ **Blockchain Technology:** Hashing SHA-256, Merkle Tree, Konsensus (PoW, PoS, PBFT), EVM, dan Cheatsheet Solidity v0.8+ lengkap dengan 10 smart contract compilable.
  3. 🔍 **Computer Forensic & DFIR:** Kerangka kerja investigasi NIST SP 800-86, integritas Chain of Custody ISO/IEC 27037, analisis Volatility 3, dan 10 studi kasus investigasi insiden nyata.
  4. 🧠 **Human-Computer Interaction (HCI):** Prinsip Donald Norman, model konseptual, aspek kognitif (Fitts' Law & Hick's Law), CSCW kolaborasi sosial, 3 level emosional, dan evolusi antarmuka dari CLI ke BCI.
  5. 🖥️ **Operating Systems:** Arsitektur kernel, siklus hidup proses & PCB, multithreading Pthreads, algoritma penjadwalan CPU (Gantt Chart), sinkronisasi IPC, analisis Deadlock Banker's Algorithm, dan 10 program C berstandar POSIX.
- **🛡️ Full Course SOC Only: Windows Log Analysis & Threat Hunting:**
  - Panduan mendalam *Blue Team Fundamentals* berbasis kurikulum Josh Speshock:
  - 21 Windows Core Processes & pemahaman konteks (Parent process, command line, path, user)
  - Windows Event Log Key Channels (Security, System, Application, PowerShell 4104, TaskScheduler)
  - 17 Windows Security Event IDs penting & 15 Sysmon Event IDs (1 hingga 26)
  - Pemetaan Taktik MITRE ATT&CK (Authentication, Execution, Persistence, Evasion, C2)
  - Anatomi Event 4624 (General tab vs Friendly/XML view) & 7-step analysis workflow
  - Open Source Analysis Tools (EvtxECmd, ULogViewer, Hayabusa, Chainsaw, Timeline Explorer)
- **Kuis Interaktif per-Modul:** Uji pemahaman langsung di browser dengan umpan balik benar/salah instan dan penjelasan pembahasan.
- **Progress Tracker (LocalStorage):** Penanda progres target capaian belajar tersimpan otomatis di browser tanpa database.
- **Code Copy Tool:** Salin kode assembly, Solidity, dan C dalam satu klik tombol.
- **Zero Dependencies / Frameworks:** Dibangun murni menggunakan Semantic HTML5, Vanilla CSS kustom (CSS Variables), dan Vanilla JavaScript. Tanpa node_modules, tanpa build step, 100% siap di-deploy ke Cloudflare Pages atau GitHub Pages.

---

## 📁 Struktur Direktori

```
studyhub-main/
├── index.html                   # SOC Dashboard utama & portal navigasi
├── REBUILD_INSTRUCTIONS.md      # Spesifikasi arsitektur proyek
├── README.md                    # Dokumentasi resmi StudyHub SOC
├── css/
│   └── style.css                # Global cyber theme styling & layout
├── js/
│   └── main.js                  # Matrix canvas, search, progress tracker, tabs, nav
├── reverse-engineering/
│   ├── index.html               # Overview modul Reverse Engineering
│   ├── cheatsheet.html          # Assembly x86/x64 instruction cheatsheet
│   ├── soal-latihan.html        # 10 Soal ASM→C lengkap dengan visualisasi stack
│   └── js/
│       └── quiz-re.js           # Kuis interaktif Reverse Engineering
├── blockchain/
│   ├── index.html               # Overview modul Blockchain
│   ├── materi.html              # Materi fundamental Web3, hashing & konsensus
│   ├── solidity-cheatsheet.html # Cheatsheet Solidity & 10 smart contracts
│   └── js/
│       └── quiz-blockchain.js   # Kuis interaktif Blockchain
├── computer-forensic/
│   ├── index.html               # Overview modul Computer Forensic
│   ├── materi.html              # DFIR framework, Chain of Custody & tools
│   ├── study-case.html          # 10 Skenario investigasi forensik bertahap
│   └── js/
│       └── quiz-forensic.js     # Kuis interaktif Computer Forensic
├── hci/
│   ├── index.html               # Overview modul HCI
│   ├── materi.html              # Diktat 6 topik HCI komprehensif
│   └── js/
│       └── quiz-hci.js          # Kuis interaktif HCI
├── operating-system/
│   ├── index.html               # Overview modul Operating Systems
│   ├── materi.html              # 7 Topik teori OS & analisis Gantt chart
│   ├── code-examples.html       # 10 Program C compilable berstandar POSIX
│   └── js/
│       └── quiz-os.js           # Kuis interaktif Operating Systems
└── windows-log-analysis/
    ├── index.html               # SOC Course: Full Windows Log Analysis & Hunting
    └── js/
        └── quiz-windows-logs.js # Kuis interaktif Analisis Log & Sysmon
```

---

## 🚀 Cara Menjalankan Proyek

1. **Jalankan Secara Lokal:**
   Cukup buka berkas `index.html` langsung di browser modern mana pun (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave), atau jalankan local server seperti:
   ```bash
   # Menggunakan Python 3:
   python -m http.server 8080

   # Atau menggunakan ekstensi VS Code Live Server
   ```
   Buka peramban di `http://localhost:8080`.

2. **Deploy ke Cloudflare Pages / GitHub Pages:**
   - Push repository ini ke GitHub / GitLab.
   - Sambungkan ke Cloudflare Pages (Build setting: biarkan kosong / tidak perlu build command, Output directory: root atau `/`).
   - Aplikasi siap diakses online secara global dengan kecepatan maksimal.

---

## 👨‍💻 Kontributor

- **StudyHub v2.0** — Built with 💚 for BINUS Cyber Security
- Hak Cipta & Materi Terstruktur untuk Persiapan Ujian Akademik Mahasiswa
