# STUDYHUB REBUILD INSTRUCTIONS
# Baca file ini dengan seksama lalu eksekusi semua langkah.

## LANGKAH 1: HAPUS SEMUA FILE LAMA
Hapus SEMUA directory dan file yang ada (BIOLOGY, CYBERLAW, DATABASE, SERVER_NETWORK_ADMIN, SOFENG, SOFTSEC, index.html, presentation.html, quiz_biology.js, quiz_cyberlaw.js, quiz_sna.js, quiz_sofeng.js, quiz_softsec.js, README.MD). Buat dari NOL.

## LANGKAH 2: DESIGN — SUPER CYBER / SOC THEME
- Background gelap (#0a0e17), efek matrix rain/particle subtle di background
- Warna: Neon cyan (#00fff5), neon green (#39ff14), electric blue (#3b82f6), purple (#a855f7)
- Font: JetBrains Mono (code), Inter/Plus Jakarta Sans (body) dari Google Fonts
- Glassmorphism cards (backdrop-filter: blur, border neon subtle)
- Glow effects, typing/glitch animation header, pulse indicators
- SOC dashboard-style navigation sidebar
- Terminal-style elements (blinking cursor, scanline)
- Emoji cyber: 🔒🛡️💀🖥️⚡🔍🧬

## LANGKAH 3: STRUKTUR FOLDER
```
studyhub-main/
├── index.html (Dashboard utama SOC-style)
├── css/style.css (Global cyber theme)
├── js/main.js (Animations, nav, search, progress tracker)
├── reverse-engineering/
│   ├── index.html (Landing materi RE)
│   ├── cheatsheet.html (Assembly x86/x64 cheatsheet)
│   ├── soal-latihan.html (10 soal ASM→C + stack memory visual)
│   └── js/quiz-re.js
├── blockchain/
│   ├── index.html
│   ├── materi.html (Fundamental blockchain)
│   ├── solidity-cheatsheet.html (Cheatsheet + 10 contoh code)
│   └── js/quiz-blockchain.js
├── computer-forensic/
│   ├── index.html
│   ├── materi.html (DFIR, Chain of Custody)
│   ├── study-case.html (10 study case + jawaban detail)
│   └── js/quiz-forensic.js
├── hci/
│   ├── index.html
│   ├── materi.html (6 topik HCI detail)
│   └── js/quiz-hci.js
├── operating-system/
│   ├── index.html
│   ├── materi.html (7 topik OS)
│   ├── code-examples.html (10 contoh code C)
│   └── js/quiz-os.js
└── README.md
```

## LANGKAH 4: DASHBOARD (index.html)
- Header: "StudyHub" glitch effect, subtitle "Portal Materi UTS Semester 4 — BINUS Cyber Security"
- Stats bar: 5 Mata Kuliah, total dokumen, UTS countdown
- Grid cards untuk 5 matkul, setiap card clickable ke halaman masing-masing:
  1. 🔓 Reverse Engineering — Assembly x86/x64, ASM→C
  2. ⛓️ Blockchain — Fundamental + Solidity
  3. 🔍 Computer Forensic — DFIR, Chain of Custody, Study Case
  4. 🧠 HCI — Interaction Design, Cognitive Aspects
  5. 🖥️ Operating System — Process, Thread, Deadlock
- Footer: "StudyHub v2.0 — Built with 💚 for BINUS Cyber Security"

## LANGKAH 5A: REVERSE ENGINEERING 🔓
### cheatsheet.html:
- Tabel register x86 vs x64 (EAX/RAX, EBX/RBX, ECX/RCX, dll)
- Instruksi: MOV, ADD, SUB, MUL, DIV, PUSH, POP, CALL, RET, CMP, JMP, JE, JNE, JG, JL, LEA, dll
- Calling convention: cdecl (32-bit) vs System V AMD64 / Microsoft x64
- Stack frame layout (EBP/RBP)

### soal-latihan.html:
- 5 soal x86 (32-bit) + 5 soal x64 (64-bit) translate assembly ke C
- SETIAP SOAL WAJIB:
  1. Kode assembly lengkap (syntax highlighted)
  2. Step-by-step dari AWAL (identifikasi, bukan langsung nama variable)
  3. VISUALISASI STACK MEMORY — tabel bergaris (rbp-4, rbp-8, dll) setiap langkah
  4. Penjelasan setiap instruksi
  5. Hasil kode C final
- Variasi soal: if-else, loop, function call, array, pointer, struct
- Stack memory format tabel:
  | Address | Value |
  | rbp-4 | 0x00000005 (x) |
  | rbp-8 | 0x0000000A (y) |

## LANGKAH 5B: BLOCKCHAIN ⛓️
### materi.html:
- Blockchain basics, hashing SHA-256, Merkle Tree
- Consensus: PoW, PoS, DPoS, PBFT
- Mining, Smart Contract, Ethereum architecture
- DeFi basics, Security vulnerabilities

### solidity-cheatsheet.html:
- Cheatsheet: tipe data, visibility, modifiers, events, inheritance, error handling, storage/memory/calldata
- 10 contoh code Solidity (simple token, voting, crowdfunding, auction, multi-sig, ERC-20, NFT ERC-721, staking, DAO, escrow)
- Penjelasan detail per-function setiap code

## LANGKAH 5C: COMPUTER FORENSIC 🔍
### materi.html:
- Digital Forensics, DFIR framework, Chain of Custody (definisi, prosedur, form)
- Evidence Collection & Preservation, Tools (Autopsy, FTK, EnCase, Volatility, Wireshark)
- File System/Memory/Network Forensics, Anti-forensics, Legal aspects

### study-case.html:
- 10 study case, setiap case:
  1. Skenario insiden
  2. Pertanyaan investigator
  3. Jawaban step-by-step: Initial Response → Evidence ID → Collection (imaging, hashing) → Chain of Custody → Analysis → Findings/Timeline → Reporting
  4. Tools setiap step + expected artifacts
- Kasus: Ransomware, Data exfiltration, Insider threat, Phishing, Web server hack, SQLi, Crypto theft, USB attack, Email forensic, Mobile forensic

## LANGKAH 5D: HCI 🧠
### materi.html (6 topik detail):
1. Interaction Design — prinsip, goals, visibility, feedback, constraint, consistency, affordance, UCD
2. Conceptualizing Interaction — conceptual models, metaphors, interaction types, paradigms
3. Cognitive Aspects — attention, perception, memory, learning, mental models, cognitive load, Fitts' Law, Hick's Law
4. Social Interaction — collaboration, CSCW, online communities
5. Emotional Interaction — Don Norman 3 levels (visceral, behavioral, reflective), affective computing
6. Interface Types — CLI, GUI, NUI, VUI, AR/VR, tangible, wearable, BCI

## LANGKAH 5E: OPERATING SYSTEM 🖥️
### materi.html (7 topik):
1. Introduction to OS — definisi, fungsi, tipe, structure (monolithic/microkernel/hybrid), system calls
2. Processes — concept, state diagram, PCB, fork/exec, termination
3. Threads — vs process, multithreading models, pthreads
4. Scheduling — FCFS, SJF, Priority, Round Robin, Multilevel Queue + contoh Gantt chart
5. Multiple Processor — SMP, multicore, load balancing, NUMA
6. Synchronization & IPC — race condition, mutex, semaphore, monitor, producer-consumer, readers-writers, dining philosophers
7. Deadlock — 4 conditions, resource allocation graph, prevention, avoidance (Banker's algo), detection, recovery

### code-examples.html (10 code C):
1. Fork & Process Creation
2. Wait & Process Sync
3. Pipe (IPC)
4. Shared Memory
5. Thread Creation (pthread)
6. Mutex
7. Semaphore
8. Producer-Consumer
9. Reader-Writer
10. Dining Philosophers
- Setiap code: compilable, penjelasan per-line, expected output, syntax highlighted

## LANGKAH 6: FITUR TAMBAHAN
- Dark mode only, responsive/mobile-friendly
- Search di dashboard (filter matkul)
- Progress tracker (localStorage) — mark "sudah dipelajari"
- Code copy button setiap code block
- Smooth transitions, scroll-to-top, breadcrumb navigation
- Print-friendly styling
- Keyboard navigation (arrow keys)

## LANGKAH 7: TECH REQUIREMENTS
- Pure HTML + CSS + Vanilla JS — NO framework, NO build tools
- Highlight.js atau Prism.js dari CDN untuk syntax highlighting
- Google Fonts (Inter, JetBrains Mono, Plus Jakarta Sans)
- Emoji/SVG inline untuk icons (no external images)
- Semua link internal BENAR
- Deploy-ready Cloudflare Pages (static only)
- Semantic HTML5, CSS Variables, mobile-first responsive

## PENTING:
- Konten LENGKAP dan DETAIL — ini untuk UTS, bukan placeholder
- Kode assembly dan C harus BENAR secara teknis
- Solidity code VALID syntax
- Study case forensic REALISTIS
- Navigasi antar halaman HARUS berfungsi
