# 🎯 KISI-KISI UAS SOFTWARE ENGINEERING
**Format:** Study Case 100% | Durasi: 120 Menit  
**Semester 4 — BINUS University Cyber Security**

---

## 📊 BOBOT MATERI UAS

| # | Topik | Bobot |
|---|-------|-------|
| 1 | System Analysis & Risk Identification | 20% |
| 2 | Testing & Quality Engineering | 25% |
| 3 | DevOps, GitHub & Deployment | 20% |
| 4 | Reliability, Security & Maintenance | 20% |
| 5 | Metrics, Ethics & Improvement Strategy | 15% |

> **PENTING:** Semua soal berbentuk **studi kasus** — tidak ada soal pilihan ganda. Kamu akan diberi skenario nyata dan diminta menganalisa, mengidentifikasi, memberikan rekomendasi, dan menjelaskan trade-off.

---

# 📌 BAGIAN 1: SYSTEM ANALYSIS & RISK IDENTIFICATION (20%)

## 1.1 Konsep Dasar Risk Management dalam Software Engineering

**Risk** = kemungkinan terjadinya suatu kejadian yang dapat mempengaruhi tujuan proyek (jadwal, biaya, kualitas, scope).

### Komponen Risk:
- **Likelihood** → seberapa besar kemungkinan risiko terjadi (Low / Medium / High)
- **Impact** → seberapa besar dampak jika risiko terjadi (Low / Medium / High / Critical)
- **Risk Exposure** = Likelihood × Impact
- **Risk Owner** → siapa yang bertanggung jawab mengelola risiko tersebut

---

## 1.2 Risk Identification

### Teknik Identifikasi Risiko:
| Teknik | Penjelasan |
|--------|------------|
| **Brainstorming** | Tim mendiskusikan potensi risiko bersama |
| **Checklist** | Menggunakan daftar risiko umum di proyek sejenis |
| **SWOT Analysis** | Mengidentifikasi risiko dari Weakness & Threats |
| **Root Cause Analysis** | Mencari penyebab akar dari potensi kegagalan |
| **Assumption Analysis** | Mempertanyakan asumsi-asumsi yang dibuat dalam proyek |

### Kategori Risiko dalam Software Engineering:
| Kategori | Contoh |
|----------|--------|
| **Technical Risk** | Teknologi baru belum dikuasai tim, arsitektur tidak scalable |
| **Schedule Risk** | Estimasi waktu terlalu optimis, dependensi antar tim |
| **Resource Risk** | Developer kunci resign, anggaran terpotong |
| **Requirements Risk** | Requirement berubah, stakeholder tidak jelas |
| **External Risk** | Regulasi berubah, vendor tidak deliver tepat waktu |
| **Security Risk** | Data breach, unauthorized access, misconfiguration |

---

## 1.3 Risk Response Strategies

> **Ini yang paling sering muncul di soal studi kasus!**

| Strategi | Kapan Digunakan | Contoh |
|----------|-----------------|--------|
| **Accept** | Impact rendah atau biaya mitigasi > dampak risiko; risiko diterima secara sadar | "Kami menerima risiko bahwa UI tidak sempurna di browser lama karena user segmen itu < 2%" |
| **Avoid** | Risiko terlalu tinggi, ubah rencana untuk menghilangkan risiko | "Ganti teknologi X yang belum proven dengan teknologi Y yang sudah matang" |
| **Mitigate** | Kurangi likelihood atau impact agar risiko berada di level yang dapat ditoleransi | "Tambah automated testing untuk mengurangi kemungkinan bug lolos ke production" |
| **Transfer** | Pindahkan dampak risiko ke pihak lain | "Gunakan asuransi, SLA vendor, atau outsourcing bagian berisiko" |

### 📝 Cara Menjawab Soal Risk Response di Studi Kasus:
```
1. Identifikasi risiko secara spesifik (bukan generik!)
2. Sebutkan strategi: Accept / Avoid / Mitigate / Transfer
3. Jelaskan MENGAPA strategi itu dipilih (context dari soal)
4. Jelaskan BAGAIMANA implementasinya secara konkret
```

**Contoh Jawaban:**
> *Skenario: Sistem e-commerce baru menggunakan payment gateway third-party yang belum terintegrasi sebelumnya.*
>
> **Risiko:** Integrasi payment gateway gagal saat go-live → transaksi tidak dapat diproses.  
> **Strategi: Mitigate**  
> **Alasan:** Risiko ini memiliki impact critical (revenue loss, reputasi) dan likelihood medium karena belum ada pengalaman sebelumnya.  
> **Implementasi:** Lakukan sandbox testing selama 3 minggu, buat fallback mechanism ke payment method alternatif, dan adakan UAT khusus untuk payment flow sebelum launch.

---

## 1.4 Risk dengan Kondisi Tidak Langsung (Indirect Risk)

Dalam studi kasus, sering diberikan **2 kondisi** dan diminta mengidentifikasi **1 risiko yang tidak langsung (indirect)** dari keduanya.

### Logika Indirect Risk:
- **Risiko Direct** → langsung terlihat dari kondisi yang diberikan
- **Risiko Indirect** → muncul sebagai *efek samping* atau *konsekuensi lanjutan* dari kondisi tersebut

**Contoh:**
> *Kondisi A: Tim development terdiri dari freelancer yang bekerja remote*  
> *Kondisi B: Tidak ada code review process yang formal*
>
> **Direct Risk dari A:** Komunikasi tim tidak efektif  
> **Direct Risk dari B:** Kode berkualitas rendah  
> **Indirect Risk (dari kombinasi A+B):** Knowledge tidak terdokumentasi — jika seorang freelancer berhenti, tidak ada yang memahami kode yang ia tulis karena tidak ada review process dan tidak ada knowledge transfer. Ini menciptakan **bus factor** yang sangat tinggi.

---

## 1.5 Risk Prioritization

Ketika diberikan **keterbatasan (limitation)** seperti anggaran terbatas, waktu terbatas, atau sumber daya terbatas — risiko perlu diprioritaskan.

### Framework Prioritisasi: Risk Matrix

```
         IMPACT
         Low    Medium   High   Critical
L  High  | Med  | High  | Very | Extreme |
I        |      |       | High |         |
K Medium | Low  | Med   | High | Very    |
E        |      |       |      | High    |
L Low    | Low  | Low   | Med  | High    |
I
H
O
O
D
```

### Langkah Prioritisasi dengan Limitation:
1. **Hitung Risk Score** = Likelihood × Impact (skala 1-5 atau Low/Med/High)
2. **Urutkan** dari Risk Score tertinggi
3. **Pertimbangkan Feasibility** — dengan resource terbatas, pilih mitigasi yang paling cost-effective
4. **Fokus pada showstopper** — risiko yang jika terjadi bisa menghentikan seluruh proyek

---

## 1.6 Trade-off Analysis

**Trade-off** = kondisi di mana memilih satu keuntungan berarti mengorbankan keuntungan lain.

### Trade-off Umum dalam Software Engineering:

| Trade-off | Sisi A | Sisi B |
|-----------|--------|--------|
| **Speed vs Quality** | Rilis cepat ke market | Kualitas kode lebih baik, lebih sedikit bug |
| **Cost vs Feature** | Fitur lengkap sesuai keinginan | Biaya proyek meningkat |
| **Security vs UX** | Sistem lebih aman (auth ketat, MFA) | User experience lebih friction |
| **Scalability vs Simplicity** | Arsitektur kompleks tapi scalable | Arsitektur sederhana tapi sulit berkembang |
| **Automation vs Flexibility** | Proses ter-automated, cepat | Kurang fleksibel untuk kasus khusus |
| **Documentation vs Speed** | Dokumentasi lengkap | Memperlambat development |

### 📝 Cara Menjawab Soal Trade-off:
```
"Trade-off yang terjadi adalah [A] vs [B].
Dengan memilih [A], keuntungannya adalah [...] namun konsekuensinya adalah [...].
Dalam konteks [skenario soal], trade-off ini justified karena [alasan spesifik]."
```

---

# 📌 BAGIAN 2: TESTING & QUALITY ENGINEERING (25%)

## 2.1 Software Testing Fundamentals

### Tujuan Testing:
- Menemukan **defect/bug** sebelum sampai ke user
- Memverifikasi bahwa software memenuhi **requirements**
- Memvalidasi bahwa software sesuai dengan **kebutuhan user**
- Memberikan **kepercayaan** kepada stakeholder tentang kualitas sistem

### Levels of Testing:

| Level | Dilakukan Oleh | Fokus | Tools |
|-------|---------------|-------|-------|
| **Unit Testing** | Developer | Fungsi/method individual | JUnit, pytest, Jest |
| **Integration Testing** | Developer / QA | Interaksi antar komponen/module | Postman, REST Assured |
| **System Testing** | QA Team | Sistem secara keseluruhan | Selenium, Cypress |
| **Acceptance Testing (UAT)** | Client / End User | Apakah sistem sesuai kebutuhan bisnis | Manual |

---

## 2.2 Types of Testing

### Functional Testing:
| Tipe | Penjelasan |
|------|------------|
| **Black Box Testing** | Pengujian tanpa melihat internal code; hanya input-output |
| **White Box Testing** | Pengujian dengan melihat internal code (path, branch, condition) |
| **Regression Testing** | Memastikan fitur lama tidak rusak setelah perubahan baru |
| **Smoke Testing** | Quick sanity check — apakah build bisa berjalan? |
| **Sanity Testing** | Verifikasi perbaikan bug spesifik sudah bekerja |

### Non-Functional Testing:
| Tipe | Penjelasan |
|------|------------|
| **Performance Testing** | Seberapa cepat sistem merespons |
| **Load Testing** | Bagaimana sistem berperilaku di bawah load normal |
| **Stress Testing** | Bagaimana sistem berperilaku di bawah load ekstrem |
| **Security Testing** | Apakah sistem rentan terhadap serangan |
| **Usability Testing** | Seberapa mudah sistem digunakan |
| **Compatibility Testing** | Apakah sistem berjalan di berbagai environment |

---

## 2.3 Test-Driven Development (TDD)

**TDD** = menulis test SEBELUM menulis kode implementasi.

### Siklus TDD (Red-Green-Refactor):
```
1. RED    → Tulis test yang GAGAL (karena kode belum ada)
2. GREEN  → Tulis kode MINIMUM agar test lulus
3. REFACTOR → Perbaiki kode tanpa mengubah behavior (test harus tetap lulus)
```

**Keuntungan TDD:**
- Kode lebih testable by design
- Dokumentasi hidup (test = spesifikasi)
- Lebih percaya diri saat refactoring
- Mengurangi bug secara signifikan

**Kelemahan TDD:**
- Membutuhkan waktu lebih lama di awal
- Butuh skill untuk menulis test yang baik
- Tidak cocok untuk semua jenis proyek (exploration, R&D)

---

## 2.4 Code Quality Metrics

### Metrik Kualitas Kode:

| Metrik | Penjelasan | Target Ideal |
|--------|------------|-------------|
| **Code Coverage** | % kode yang dieksekusi oleh test | > 80% |
| **Cyclomatic Complexity** | Jumlah path independen dalam kode | < 10 per fungsi |
| **Technical Debt** | Biaya untuk memperbaiki kode yang "shortcuts" | Rendah |
| **Bug Density** | Jumlah bug per 1000 baris kode | < 1 |
| **Code Duplication** | % kode yang duplikat | < 5% |
| **Maintainability Index** | Seberapa mudah kode di-maintain (0-100) | > 20 |

### Tools Quality Engineering:
| Tool | Fungsi |
|------|--------|
| **SonarQube** | Static code analysis, code smell, security vulnerabilities |
| **JaCoCo** | Java code coverage |
| **ESLint** | JavaScript linting |
| **pytest-cov** | Python code coverage |
| **Checkmarx** | Security-focused static analysis |

---

## 2.5 Quality Assurance vs Quality Control

| Aspek | Quality Assurance (QA) | Quality Control (QC) |
|-------|----------------------|---------------------|
| **Fokus** | Proses | Produk |
| **Pendekatan** | Preventive | Detective |
| **Timing** | Selama development | Setelah produk selesai |
| **Tujuan** | Mencegah defect | Menemukan defect |
| **Contoh** | Code review, standar coding | Testing, inspection |

---

## 2.6 Defect Life Cycle

```
New → Assigned → Open → Fixed → Retest → Verified → Closed
                              ↓
                           Reopen (jika masih ada)
```

### Severity vs Priority:
| | Severity Tinggi | Severity Rendah |
|-|-----------------|-----------------|
| **Priority Tinggi** | System crash yang terjadi di halaman utama | Typo di judul halaman utama |
| **Priority Rendah** | Data corruption yang sangat jarang terjadi | UI alignment yang sedikit off di device jarang dipakai |

---

# 📌 BAGIAN 3: DEVOPS, GITHUB & DEPLOYMENT (20%)

## 3.1 DevOps Principles

**DevOps** = budaya dan praktik yang menyatukan Development dan Operations untuk mempercepat delivery software dengan kualitas tinggi.

### 3 Cara DevOps (The Three Ways):
1. **Flow** → Percepat aliran kerja dari Dev ke Ops ke Customer (eliminate waste)
2. **Feedback** → Perkuat feedback loop untuk deteksi masalah lebih cepat
3. **Continual Learning** → Budaya belajar dari kegagalan dan eksperimen

### CALMS Framework:
| Huruf | Singkatan | Penjelasan |
|-------|-----------|------------|
| **C** | Culture | Kolaborasi Dev & Ops, shared responsibility |
| **A** | Automation | Otomasi build, test, deploy |
| **L** | Lean | Eliminasi waste, fokus pada value |
| **M** | Measurement | Ukur segala sesuatu (DORA metrics) |
| **S** | Sharing | Berbagi pengetahuan dan tools |

---

## 3.2 CI/CD Pipeline

### Continuous Integration (CI):
- Developer **push code** ke shared repository (GitHub) secara sering
- Setiap push **memicu build dan automated test** otomatis
- Jika ada yang gagal, developer segera tahu dan perbaiki
- **Tujuan:** Mendeteksi integration error lebih awal

### Continuous Delivery (CD - Delivery):
- Kode yang lulus CI **siap di-deploy** ke environment staging kapan saja
- Deploy ke production memerlukan **persetujuan manual**
- Setiap build adalah kandidat release yang valid

### Continuous Deployment (CD - Deployment):
- Setiap kode yang lulus semua test **otomatis di-deploy ke production**
- Tidak ada persetujuan manual
- Membutuhkan test coverage dan monitoring yang sangat solid

### Pipeline Stages:
```
[Code Commit] → [Build] → [Unit Test] → [Integration Test] 
      → [Code Quality Check] → [Security Scan] 
          → [Deploy to Staging] → [Acceptance Test] 
              → [Deploy to Production] → [Monitor]
```

---

## 3.3 GitHub Workflows & Actions

### GitHub Actions Concepts:
| Konsep | Penjelasan |
|--------|------------|
| **Workflow** | Automated process yang dikonfigurasi via YAML file |
| **Event** | Trigger yang menjalankan workflow (push, PR, schedule) |
| **Job** | Kumpulan steps yang berjalan di satu runner |
| **Step** | Task individual dalam job (run command atau use action) |
| **Runner** | Server yang menjalankan job (GitHub-hosted atau self-hosted) |
| **Action** | Reusable unit of code untuk melakukan task spesifik |

### Contoh Workflow Sederhana:
```yaml
name: CI Pipeline
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Tests
        run: pytest --cov=. --cov-report=xml
      - name: SonarQube Scan
        uses: sonarqube-action@v1
```

### Branching Strategies:
| Strategy | Penjelasan | Cocok Untuk |
|----------|------------|-------------|
| **GitFlow** | Branch main, develop, feature, release, hotfix | Proyek dengan release terjadwal |
| **GitHub Flow** | Branch main + feature branch | Web app, continuous deployment |
| **Trunk-based** | Semua developer commit ke main (trunk) langsung | Tim kecil, very high CI/CD maturity |

---

## 3.4 Deployment Strategies

| Strategi | Penjelasan | Risiko | Rollback |
|----------|------------|--------|----------|
| **Big Bang** | Deploy semua sekaligus ke semua user | Tinggi | Sulit |
| **Rolling** | Deploy bertahap instance per instance | Medium | Moderat |
| **Blue-Green** | 2 environment identik, switch traffic | Rendah | Sangat Mudah |
| **Canary** | Deploy ke sebagian kecil user dulu | Sangat Rendah | Mudah |
| **Feature Flags** | Fitur ada di kode tapi aktif/nonaktif via config | Sangat Rendah | Instant |

### Blue-Green Deployment (Detail):
```
Blue Environment (v1 - Production Live)
       ↕ Load Balancer
Green Environment (v2 - New Version)

Langkah:
1. Deploy v2 ke Green (Blue masih live)
2. Test Green → semua OK
3. Switch traffic dari Blue ke Green
4. Blue menjadi standby (rollback instant jika ada masalah)
```

### Canary Deployment (Detail):
```
95% traffic → Old Version (stable)
 5% traffic → Canary Version (new)

Monitor metrics di Canary:
- Error rate, latency, business metrics
- Jika OK → naikkan persentase traffic secara bertahap
- Jika ada masalah → route 100% ke Old Version (rollback)
```

---

## 3.5 Infrastructure as Code (IaC)

**IaC** = Mengelola dan menyediakan infrastruktur melalui kode (bukan manual configuration).

| Tool | Penjelasan |
|------|------------|
| **Terraform** | IaC multi-cloud (AWS, GCP, Azure) |
| **Ansible** | Configuration management dan deployment |
| **Docker** | Containerization aplikasi |
| **Kubernetes (K8s)** | Container orchestration |
| **Helm** | Package manager untuk Kubernetes |

### Container vs VM:
| Aspek | Container (Docker) | Virtual Machine |
|-------|-------------------|-----------------|
| **Startup Time** | Detik | Menit |
| **Resource** | Ringan (share OS kernel) | Berat (OS sendiri) |
| **Isolasi** | Process-level | Hardware-level |
| **Portability** | Sangat tinggi | Moderat |

---

# 📌 BAGIAN 4: RELIABILITY, SECURITY & MAINTENANCE (20%)

## 4.1 Software Reliability

**Reliability** = probabilitas software beroperasi tanpa failure dalam periode waktu dan kondisi tertentu.

### Key Reliability Metrics:
| Metrik | Singkatan | Penjelasan |
|--------|-----------|------------|
| **Mean Time To Failure** | MTTF | Rata-rata waktu hingga sistem mengalami failure |
| **Mean Time To Repair** | MTTR | Rata-rata waktu untuk memperbaiki failure |
| **Mean Time Between Failures** | MTBF | MTTF + MTTR = rata-rata interval antar failure |
| **Availability** | - | MTBF / (MTBF + MTTR) × 100% |

### SLA & Uptime Target:
| SLA | Downtime per Tahun | Contoh Sistem |
|-----|--------------------|---------------|
| 99% (2 nines) | ~3.65 hari | Internal tools |
| 99.9% (3 nines) | ~8.76 jam | SaaS bisnis |
| 99.99% (4 nines) | ~52.6 menit | Finansial, kesehatan |
| 99.999% (5 nines) | ~5.26 menit | Telekomunikasi, militer |

---

## 4.2 Fault Tolerance & Resilience Patterns

| Pattern | Penjelasan | Contoh |
|---------|------------|--------|
| **Redundancy** | Duplikasi komponen kritis | Multiple server, database replica |
| **Failover** | Otomatis beralih ke sistem backup | Active-passive cluster |
| **Circuit Breaker** | Hentikan request ke service yang gagal sementara | Netflix Hystrix |
| **Retry with Backoff** | Coba ulang request dengan jeda yang meningkat | Retry setelah 1s, 2s, 4s... |
| **Bulkhead** | Isolasi resource untuk mencegah kegagalan menyebar | Thread pool isolation |
| **Health Check** | Monitor status service secara periodik | /health endpoint |

---

## 4.3 Software Maintenance Types

| Tipe | Penjelasan | % Waktu Maintenance |
|------|------------|---------------------|
| **Corrective** | Perbaiki bug yang ditemukan setelah release | 20% |
| **Adaptive** | Adaptasi ke environment baru (OS update, API change) | 25% |
| **Perfective** | Tambah fitur baru atau tingkatkan performa | 50% |
| **Preventive** | Refactoring, dokumentasi, update dependency | 5% |

### Technical Debt:
**Technical debt** = biaya implisit dari pekerjaan rework yang diperlukan di masa depan karena shortcut yang diambil sekarang.

**Jenis Technical Debt:**
- **Deliberate** → sadar memilih shortcut demi kecepatan (bisa acceptable jika ada rencana bayar)
- **Inadvertent** → tidak sengaja, karena kurangnya pengetahuan atau skill
- **Bit rot** → kode yang dulunya baik tapi menjadi buruk karena perubahan sekitar

---

## 4.4 Security in Software Engineering

### Security Principles (CIA Triad + lebih):
| Prinsip | Penjelasan |
|---------|------------|
| **Confidentiality** | Data hanya bisa diakses oleh yang berwenang |
| **Integrity** | Data tidak bisa dimodifikasi tanpa otorisasi |
| **Availability** | Sistem tersedia ketika dibutuhkan |
| **Authentication** | Verifikasi identitas user |
| **Authorization** | Kontrol akses berdasarkan hak yang diberikan |
| **Non-repudiation** | Tidak bisa menyangkal tindakan yang sudah dilakukan |

### Secure Development Lifecycle (SDL):
```
Requirements → Design → Implementation → Testing → Deployment → Operations
     ↓              ↓           ↓              ↓           ↓            ↓
  Security      Threat      Secure         Security    Security    Security
Requirements   Modeling    Coding         Testing     Hardening   Monitoring
```

### OWASP Top 10 (Ringkasan):
1. Broken Access Control
2. Cryptographic Failures
3. Injection (SQL, NoSQL, OS)
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable & Outdated Components
7. Identification & Authentication Failures
8. Software & Data Integrity Failures
9. Security Logging & Monitoring Failures
10. Server-Side Request Forgery (SSRF)

---

# 📌 BAGIAN 5: METRICS, ETHICS & IMPROVEMENT STRATEGY (15%)

## 5.1 Software Engineering Metrics

### DORA Metrics (DevOps Research and Assessment):
| Metrik | Elite Performer | High | Medium | Low |
|--------|----------------|------|--------|-----|
| **Deployment Frequency** | On-demand (beberapa kali/hari) | Sekali/hari–seminggu | Seminggu–sebulan | Sebulan–6 bulan |
| **Lead Time for Changes** | < 1 jam | 1 hari – 1 minggu | 1 minggu – 1 bulan | > 6 bulan |
| **Change Failure Rate** | 0-15% | 16-30% | 16-30% | 46-60% |
| **Time to Restore Service** | < 1 jam | < 1 hari | 1 hari – 1 minggu | > 6 bulan |

### Productivity Metrics:
| Metrik | Penjelasan |
|--------|------------|
| **Velocity** | Jumlah story points yang diselesaikan per sprint (Agile) |
| **Throughput** | Jumlah fitur/task yang selesai per periode |
| **Cycle Time** | Waktu dari mulai coding hingga deploy ke production |
| **Lead Time** | Waktu dari request hingga delivery |
| **WIP (Work in Progress)** | Jumlah task yang sedang dikerjakan bersamaan |

---

## 5.2 Software Engineering Ethics

### ACM/IEEE Code of Ethics (8 Prinsip Utama):
1. **Public** → Bertindak demi kepentingan publik
2. **Client & Employer** → Bertindak demi kepentingan client/employer sejalan dengan public interest
3. **Product** → Pastikan produk memenuhi standar profesional tertinggi
4. **Judgment** → Jaga integritas dan independensi dalam professional judgment
5. **Management** → Promote pendekatan etis dalam management
6. **Profession** → Tingkatkan integritas dan reputasi profesi
7. **Colleagues** → Fair dan supportif terhadap rekan kerja
8. **Self** → Terus belajar dan kembangkan diri

### Ethical Issues dalam Software Engineering:
| Isu | Contoh Skenario | Respons Etis |
|-----|-----------------|--------------|
| **Privacy** | Mengumpulkan data user lebih dari yang diperlukan | Minimal data collection, transparansi |
| **IP & Copyright** | Copy-paste kode tanpa lisensi yang sesuai | Gunakan open source yang compliant |
| **Whistleblowing** | Menemukan sistem yang membahayakan publik | Laporkan ke stakeholder yang tepat |
| **Algorithmic Bias** | Algoritma yang mendiskriminasi kelompok tertentu | Fairness testing, diverse data |
| **Dark Patterns** | UI yang menipu user untuk keuntungan bisnis | Desain yang transparan dan jujur |

---

## 5.3 Continuous Improvement Strategies

### PDCA Cycle (Plan-Do-Check-Act):
```
PLAN  → Identifikasi masalah, analisis root cause, rencanakan perubahan
DO    → Implementasikan perubahan dalam skala kecil
CHECK → Ukur hasil, bandingkan dengan target
ACT   → Jika berhasil → standarisasi; Jika gagal → mulai ulang
```

### Retrospective (Agile Improvement):
**Format "Start-Stop-Continue":**
- **Start** → Apa yang belum dilakukan tapi harus dimulai?
- **Stop** → Apa yang dilakukan tapi tidak memberikan value, harus dihentikan?
- **Continue** → Apa yang berjalan baik dan harus dilanjutkan?

### Post-Mortem Analysis:
Dilakukan setelah incident/failure untuk belajar tanpa menyalahkan individu.

**Komponen Post-Mortem:**
1. Timeline kejadian
2. Root cause analysis (5 Whys)
3. Impact assessment
4. Action items untuk mencegah recurrence
5. Lessons learned

---

## 📝 TIPS MENGERJAKAN SOAL STUDI KASUS

### Framework Umum Menjawab Studi Kasus:

**SKIM → Analisa → Struktur → Tulis**

1. **SKIM soal** (2 menit): Baca semua soal, pahami konteks skenario secara keseluruhan
2. **Analisa** (per sub-soal): Identifikasi kata kunci, hubungkan dengan konsep yang relevan
3. **Struktur jawaban**: Buat poin-poin sebelum menulis
4. **Tulis dengan konteks**: Selalu hubungkan jawaban dengan skenario soal, jangan jawaban generik

### Kata Kunci yang Sering Muncul:
| Kata Kunci di Soal | Artinya Kamu Harus... |
|--------------------|----------------------|
| "Identifikasi risiko" | Sebutkan minimal 3 risiko dengan kategorinya |
| "Rekomendasikan strategi" | Pilih + Justifikasi + Detail implementasi |
| "Analisa trade-off" | Sebutkan 2 sisi, jelaskan konsekuensi masing-masing |
| "Prioritaskan" | Buat ranking dengan justifikasi (likelihood × impact) |
| "Jelaskan bagaimana" | Berikan langkah-langkah konkret, bukan konsep abstrak |

---

*📅 Dibuat untuk persiapan UAS Software Engineering — Semester 4 BINUS Cyber Security*
