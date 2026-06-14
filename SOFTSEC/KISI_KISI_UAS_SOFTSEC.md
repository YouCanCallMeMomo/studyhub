# 🛡️ KISI-KISI UAS SOFTWARE SECURITY
**Format:** Study Case 100% | Semester 4 — BINUS University Cyber Security**

---

## 📊 FORMAT UJIAN

> Semua soal berbentuk **studi kasus (100%)**. Terdiri dari **3 Case** dengan masing-masing sub-pertanyaan. Kamu akan diberi skenario sistem nyata dan diminta menganalisa dari perspektif **software security**.

---

# 🔴 CASE 1 — Risk Analysis & Risk Response

## Struktur Soal Case 1:
- **a.** Identifikasi risiko dari kondisi yang diberikan → pilih strategi (Accept / Avoid / Mitigate / Transfer)
- **b.** Dari 2 kondisi yang diberikan → identifikasi **1 risiko indirect** (bukan yang langsung terlihat)
- **c.** Diberikan suatu **limitation** → prioritaskan risiko-risiko tersebut
- **d.** Analisa **trade-off** yang terjadi

---

## MATERI PENDUKUNG CASE 1

### 1A. Risk Identification & Response Strategies

**Risk** dalam Software Security = kondisi/kejadian yang dapat menyebabkan kerugian pada **aset** sistem (data, reputasi, finansial, operasional).

#### Komponen Analisa Risiko:
| Komponen | Penjelasan |
|----------|------------|
| **Threat (Ancaman)** | Potensi penyebab insiden keamanan (attacker, human error, natural) |
| **Vulnerability** | Kelemahan yang bisa dieksploitasi oleh threat |
| **Asset** | Yang dilindungi (data, sistem, reputasi, finansial) |
| **Impact** | Konsekuensi jika risiko terjadi |
| **Likelihood** | Kemungkinan risiko terjadi |
| **Risk** = Threat × Vulnerability × Impact |

---

#### Strategi Risk Response (Wajib Hafal + Contoh):

| Strategi | Kapan? | Ciri-ciri | Contoh Konteks Security |
|----------|--------|-----------|------------------------|
| **ACCEPT** | Impact rendah / cost mitigasi > dampak | Risiko diterima secara sadar dan terdokumentasi | "Kami menerima risiko brute force pada admin panel internal karena hanya diakses dari VPN dengan whitelist IP — kemungkinan serangan sangat rendah" |
| **AVOID** | Risiko terlalu tinggi, bisa dieliminasi dengan ubah desain | Menghilangkan aktivitas/fitur yang menciptakan risiko | "Kami memutuskan tidak menyimpan data kartu kredit sama sekali — gunakan tokenisasi via payment gateway agar PCI-DSS scope tidak berlaku" |
| **MITIGATE** | Risiko tidak bisa dihindari tapi bisa dikurangi | Kurangi likelihood atau impact | "Implementasi MFA, rate limiting, dan monitoring login untuk mengurangi risiko credential stuffing" |
| **TRANSFER** | Risiko bisa dipindahkan ke pihak lain | Asuransi siber, SLA vendor, outsourcing | "Gunakan asuransi siber untuk menanggung kerugian finansial jika terjadi data breach" |

---

#### 📝 Template Menjawab Sub-soal A:

```
RISIKO YANG DIIDENTIFIKASI:
- Risiko: [Nama risiko spesifik]
- Threat: [Siapa/apa yang mengancam]
- Vulnerability: [Kelemahan yang bisa dieksploitasi]
- Potential Impact: [Konsekuensi jika terjadi] (Low/Medium/High/Critical)
- Likelihood: [Low/Medium/High]

STRATEGI RESPONS: [Accept / Avoid / Mitigate / Transfer]

JUSTIFIKASI:
[Mengapa strategi ini dipilih dalam konteks skenario soal]

IMPLEMENTASI KONKRET:
[Langkah-langkah spesifik yang dilakukan]
```

**Contoh Jawaban A:**
> *Skenario: Aplikasi fintech menyimpan data KTP dan rekening bank user dalam database yang sama dengan data transaksi, tanpa enkripsi at-rest.*
>
> **Risiko:** Data breach yang mengekspos data PII (KTP, rekening) dan data transaksi secara bersamaan  
> **Threat:** External attacker via SQL injection atau insider threat  
> **Vulnerability:** Tidak ada enkripsi at-rest, database tidak tersegmentasi  
> **Impact:** Critical — data finansial dan identitas ratusan ribu user terekspos; potensi denda OJK, class action, kehilangan kepercayaan  
> **Likelihood:** Medium — aplikasi fintech adalah target bernilai tinggi  
>
> **Strategi: MITIGATE**  
> **Justifikasi:** Menghindari (avoid) penyimpanan data tidak feasible karena data ini wajib ada secara regulasi. Transfer ke asuransi saja tidak cukup karena reputasi tidak bisa diasuransikan.  
> **Implementasi:** (1) Enkripsi AES-256 untuk data PII at-rest, (2) Segregasi database — pisahkan PII dari data transaksi, (3) Implementasi column-level encryption untuk field sensitif, (4) Database access control berbasis principle of least privilege

---

### 1B. Indirect Risk dari 2 Kondisi

**Indirect Risk** = risiko yang tidak langsung terlihat dari satu kondisi, tapi muncul sebagai **efek gabungan** atau **konsekuensi lanjutan** dari kombinasi 2 kondisi yang diberikan.

#### Cara Berpikir Indirect Risk:
```
Kondisi A ──┐
             ├──→ [Direct Risk A] ──┐
             │                      ├──→ INDIRECT RISK
Kondisi B ──┘                      │    (tidak terlihat jelas dari A atau B sendiri)
             ├──→ [Direct Risk B] ──┘
```

#### Contoh Pasangan Kondisi → Indirect Risk:

**Contoh 1:**
> *Kondisi A: Sistem menggunakan third-party library yang sudah tidak di-maintain*  
> *Kondisi B: Tidak ada proses patching yang terjadwal*
>
> **Direct Risk A:** Vulnerability di library tidak di-patch  
> **Direct Risk B:** Bahkan vulnerability yang diketahui tidak di-address  
> **INDIRECT RISK:** Supply chain attack yang persistent — attacker dapat mengeksploitasi vulnerability lama yang sudah publik (misalnya di CVE database) yang tidak pernah di-patch, dan karena librarynya tidak di-maintain, tidak akan pernah ada patch resmi → sistem secara permanen rentan

**Contoh 2:**
> *Kondisi A: Log aktivitas user disimpan tanpa enkripsi*  
> *Kondisi B: Developer memiliki akses penuh ke production database*
>
> **Direct Risk A:** Log bisa dibaca unauthorized pihak  
> **Direct Risk B:** Insider threat dari developer  
> **INDIRECT RISK:** Privacy violation yang tidak terdeteksi — developer dapat secara diam-diam memonitor aktivitas spesifik user (kompetitor, eksekutif, mantan pacar) menggunakan akses legitimate mereka ke log, tanpa meninggalkan jejak yang mudah dideteksi → pelanggaran privasi yang sistemik dan tersembunyi

**Contoh 3:**
> *Kondisi A: Sistem tidak memiliki rate limiting pada API endpoint*  
> *Kondisi B: Error message menampilkan stack trace dan detail database*
>
> **Direct Risk A:** Brute force, DDoS, enumeration attacks  
> **Direct Risk B:** Information disclosure — attacker tahu struktur sistem  
> **INDIRECT RISK:** Automated targeted attack — attacker menggunakan informasi dari error message (nama tabel, struktur query) untuk membuat automated attack yang presisi dan efisien, tanpa terkena rate limiting → serangan SQL injection yang sangat targeted dan sulit terdeteksi

---

#### 📝 Template Menjawab Sub-soal B:

```
KONDISI YANG DIBERIKAN:
- Kondisi A: [...]
- Kondisi B: [...]

RISIKO LANGSUNG (untuk konteks):
- Direct dari A: [...]
- Direct dari B: [...]

RISIKO TIDAK LANGSUNG (INDIRECT RISK):
Nama: [Nama risiko indirect]
Mekanisme: [Bagaimana kombinasi A+B menciptakan risiko ini]
Kenapa ini INDIRECT: [Jelaskan bahwa risiko ini tidak muncul dari A saja atau B saja, 
                       tapi dari interaksi/kombinasi keduanya]
Impact: [Konsekuensi spesifik]
```

---

### 1C. Risk Prioritization dengan Limitation

Ketika ada **keterbatasan** (anggaran terbatas, tim kecil, waktu mendesak) → kamu harus **memprioritaskan** mana risiko yang ditangani lebih dulu.

#### Risk Priority Matrix:

| | **Impact: Low** | **Impact: Medium** | **Impact: High** | **Impact: Critical** |
|-|-----------------|-------------------|------------------|---------------------|
| **Likelihood: High** | Medium | High | Very High | **EXTREME** |
| **Likelihood: Medium** | Low | Medium | High | **Very High** |
| **Likelihood: Low** | Very Low | Low | Medium | **High** |

**Priority:** Extreme → Very High → High → Medium → Low

#### Kriteria Prioritas (dengan Limitation):
1. **Showstopper first** — risiko yang jika terjadi bisa menghentikan operasi bisnis sepenuhnya
2. **Regulasi & Compliance** — risiko yang bisa mengakibatkan denda atau penutupan oleh regulator
3. **Cost-effectiveness** — dengan resource terbatas, pilih mitigasi yang memberikan risk reduction terbesar
4. **Quick wins** — risiko dengan mitigasi mudah dan murah tapi punya dampak besar → lakukan duluan

---

#### 📝 Template Menjawab Sub-soal C:

```
LIMITATION YANG DIBERIKAN: [Budget X / Tim hanya Y orang / Waktu Z minggu]

DAFTAR RISIKO (dari sub-soal sebelumnya):
| No | Risiko | Likelihood | Impact | Risk Score | Feasibility Mitigasi |
|----|--------|-----------|--------|-----------|---------------------|
| 1  | ...    | H/M/L     | ...    | ...       | Mudah/Sedang/Sulit  |
| 2  | ...    | ...       | ...    | ...       | ...                 |

PRIORITAS (berurutan):
1. [Risiko tertinggi] — alasan: [Risk score + justifikasi kontekstual]
2. [Risiko kedua] — alasan: [...]
3. [Risiko ketiga] — alasan: [...]

RISIKO YANG DI-DEFER (dengan limitation ini):
[Risiko yang sengaja ditunda] — alasan: [Cost tinggi tapi risk score lebih rendah dari yang diprioritaskan]
```

---

### 1D. Trade-off Analysis

**Trade-off** dalam Security = setiap keputusan keamanan ada konsekuensi yang harus dikorbankan.

#### Trade-off Umum dalam Software Security:

| Trade-off | Security Side | Opposite Side |
|-----------|--------------|--------------|
| **Security vs UX** | MFA wajib, session timeout pendek, CAPTCHA | Pengalaman user lebih lancar, tanpa friction |
| **Security vs Performance** | Enkripsi semua data, validasi setiap input | Latency lebih tinggi, resource lebih banyak |
| **Security vs Cost** | Audit reguler, penetration testing, tools premium | Biaya operasional lebih rendah |
| **Security vs Flexibility** | Strict access control, IP whitelisting | Tim bisa bekerja dari mana saja lebih mudah |
| **Security vs Speed-to-market** | SDL yang lengkap, security review di setiap sprint | Rilis lebih cepat, lebih banyak fitur per periode |
| **Transparency vs Security** | Error message informatif untuk debugging | Meminimalkan information disclosure ke attacker |

---

#### 📝 Template Menjawab Sub-soal D:

```
TRADE-OFF YANG TERJADI: [Nama trade-off, misalnya "Security vs User Experience"]

SISI SECURITY:
[Keputusan/implementasi security yang dipilih]
→ Manfaat: [...]
→ Konsekuensi yang dikorbankan: [...]

SISI YANG DIKORBANKAN:
[Apa yang berkurang/terdampak negatif]
→ Impact terhadap [user/performa/bisnis]: [...]

JUSTIFIKASI TRADE-OFF INI:
"Dalam konteks [skenario soal], trade-off ini acceptable/justified karena:
1. [Alasan 1 — kontekstual]
2. [Alasan 2 — bisnis/regulasi]"

APAKAH ADA CARA MEMINIMALKAN TRADE-OFF?
[Teknik/pendekatan yang bisa mengurangi sacrifice di sisi lain, misalnya:
"Progressive security" — MFA hanya untuk aksi sensitif, bukan setiap login]
```

---

# 🟡 CASE 2 — Asset Identification, Threat Analysis & Trade-off Recommendation

## Struktur Soal Case 2:
- **a.** Identifikasi **asset** dan **security objectives** — berikan contoh asset konkret dan jelaskan
- **b.** Analisa suatu **ancaman (threat)**
- **c.** Rekomendasikan **trade-off**

---

## MATERI PENDUKUNG CASE 2

### 2A. Asset Identification & Security Objectives

> ⚠️ **PERHATIAN PENTING:** Soal meminta kamu memberikan **contoh asset yang konkret dan jelaskan** — JANGAN hanya menyebutkan ulang kata-kata dari soal atau hal yang terlalu abstrak.

#### Kategori Asset dalam Sistem Software:

| Kategori Asset | Contoh Konkret |
|---------------|----------------|
| **Data Asset** | Database record user (nama, email, password hash), log transaksi, PII, intellectual property |
| **Software Asset** | Source code, algoritma proprietary, konfigurasi sistem, API keys |
| **Hardware Asset** | Server, load balancer, HSM (Hardware Security Module) |
| **Human Asset** | Developer dengan akses root, security team, admin database |
| **Reputational Asset** | Brand trust, kepercayaan user, sertifikasi keamanan (ISO 27001) |
| **Financial Asset** | Revenue stream, aset finansial yang dikelola sistem (e-wallet balance) |
| **Operational Asset** | Availability sistem, SLA, business continuity |

#### Security Objectives per Asset:

| Asset | Objective Utama | Penjelasan |
|-------|----------------|------------|
| **Data PII User** | Confidentiality + Integrity | Hanya authorized pihak yang bisa baca; data tidak boleh dimodifikasi tanpa otorisasi |
| **Sistem Pembayaran** | Availability + Integrity | Harus selalu tersedia; transaksi tidak boleh dimanipulasi |
| **Source Code** | Confidentiality | Tidak boleh bocor ke kompetitor atau publik |
| **Log Audit** | Integrity + Non-repudiation | Log tidak boleh dimanipulasi; bisa dijadikan bukti |
| **API Keys / Credentials** | Confidentiality | Tidak boleh terekspos, dirotasi secara berkala |

---

#### 📝 Template Menjawab Sub-soal A:

```
ASSET YANG DIIDENTIFIKASI:

1. [Nama Asset — spesifik, bukan generik]
   Kategori: [Data/Software/Human/Reputational/Financial/Operational]
   Deskripsi: [Apa asset ini secara konkret dalam konteks sistem di soal]
   Security Objective: [Confidentiality / Integrity / Availability / Authentication / dst]
   Alasan Objective: [Mengapa objective ini yang paling kritikal untuk asset ini]

2. [Nama Asset Kedua]
   ...

3. [Nama Asset Ketiga]
   ...

CATATAN: Setiap asset harus dijelaskan mengapa ia adalah asset, bukan sekadar 
         disebutkan ulang dari soal.
```

**Contoh Jawaban:**
> *Skenario: Sistem mobile banking dengan fitur transfer, top-up, dan riwayat transaksi*
>
> **Asset 1: Database Riwayat Transaksi User**  
> Kategori: Data Asset  
> Deskripsi: Berisi seluruh record transfer, top-up, dan penarikan beserta timestamp, nominal, dan rekening tujuan untuk setiap user. Dalam konteks mobile banking ini, database mencakup jutaan record transaksi yang merepresentasikan seluruh aktivitas finansial nasabah.  
> Security Objective: **Confidentiality + Integrity**  
> Alasan: Data transaksi bersifat sangat sensitif secara finansial dan pribadi (tahu ke mana uang dikirim = tahu pola hidup). Integritas kritikal karena manipulasi record bisa menyebabkan pencurian dana atau dispute yang tidak terbukti.
>
> **Asset 2: API Key Integrasi Core Banking**  
> Kategori: Software Asset  
> Deskripsi: Credential yang digunakan mobile banking untuk berkomunikasi dengan sistem core banking untuk memverifikasi saldo dan memproses transaksi.  
> Security Objective: **Confidentiality**  
> Alasan: Jika API key ini bocor, attacker bisa langsung berinteraksi dengan core banking API seolah-olah adalah sistem legitimate → bisa mengeksekusi transaksi palsu.

---

### 2B. Threat Analysis

#### Threat Modeling Framework — STRIDE:

| Threat | Singkatan | Target | Contoh |
|--------|-----------|--------|--------|
| **Spoofing** | S | Authentication | Attacker berpura-pura jadi user legitimate |
| **Tampering** | T | Integrity | Modifikasi data dalam transit atau at-rest |
| **Repudiation** | R | Non-repudiation | User menyangkal sudah melakukan transaksi |
| **Information Disclosure** | I | Confidentiality | Data sensitif bocor ke pihak tidak berwenang |
| **Denial of Service** | D | Availability | Sistem tidak bisa diakses legitimate user |
| **Elevation of Privilege** | E | Authorization | User biasa mendapat akses admin |

---

#### Struktur Analisa Ancaman:

```
ANCAMAN: [Nama ancaman — spesifik]

DESKRIPSI ANCAMAN:
[Apa ancaman ini dan bagaimana cara kerjanya]

ATTACK VECTOR:
[Jalur/metode yang digunakan attacker untuk mengeksekusi ancaman]

KONDISI YANG MEMUNGKINKAN:
[Vulnerability atau kondisi sistem yang membuat ancaman ini bisa terjadi]

DAMPAK (IMPACT):
- Confidentiality: [Terdampak / Tidak]
- Integrity: [Terdampak / Tidak]
- Availability: [Terdampak / Tidak]
- Finansial: [...]
- Reputasi: [...]

LIKELIHOOD: [Low / Medium / High]
Alasan: [Mengapa kemungkinannya segitu dalam konteks skenario]

SEVERITY KESELURUHAN: [Low / Medium / High / Critical]
```

---

#### Contoh Analisa Ancaman Common:

**SQL Injection:**
```
Ancaman: SQL Injection Attack pada endpoint pencarian produk
Attack Vector: HTTP parameter yang tidak di-sanitize
Kondisi: Input validation tidak ada, query menggunakan string concatenation
Impact: Information Disclosure (seluruh database), Tampering (update/delete data)
Likelihood: High (tools otomatis seperti sqlmap banyak tersedia)
Severity: Critical
```

**Credential Stuffing:**
```
Ancaman: Credential Stuffing pada endpoint login
Attack Vector: Database breach dari layanan lain → coba di sistem ini
Kondisi: Tidak ada rate limiting, tidak ada MFA, password reuse oleh user
Impact: Account Takeover → Spoofing + Financial Loss
Likelihood: High (billions of credentials tersedia di dark web)
Severity: High
```

**Man-in-the-Middle (MITM):**
```
Ancaman: MITM pada komunikasi mobile app ke API
Attack Vector: Attacker di jaringan yang sama (public WiFi) intercept traffic
Kondisi: TLS tidak diimplementasikan dengan benar, atau certificate pinning tidak ada
Impact: Tampering + Information Disclosure (data transaksi, token session)
Likelihood: Medium
Severity: High
```

---

### 2C. Trade-off Recommendation

Sama seperti Case 1D, tapi fokus pada **rekomendasi** — kamu diminta menyarankan satu pendekatan dengan menyadari ada yang harus dikorbankan.

#### 📝 Template Menjawab Sub-soal C:

```
KONTEKS TRADE-OFF:
[Ringkasan situasi dari Case 2 — asset dan ancaman yang ada]

OPSI YANG DIREKOMENDASIKAN:
[Rekomendasikan satu langkah konkret untuk mengatasi ancaman yang dianalisa di 2B]

TRADE-OFF YANG TERJADI:
- Yang DIDAPAT: [Peningkatan keamanan spesifik]
- Yang DIKORBANKAN: [UX, performa, cost, fleksibilitas — pilih yang relevan]

JUSTIFIKASI REKOMENDASI:
"Rekomendasi ini justified karena dalam konteks [skenario], 
[alasan kenapa benefit > sacrifice dalam situasi ini]"

CARA MEMINIMALKAN SACRIFICE:
[Teknik untuk mengurangi dampak negatif dari trade-off, 
misalnya: "Implementasikan adaptive authentication — MFA hanya triggered 
saat login dari device baru atau lokasi tidak familiar"]
```

---

# 🔵 CASE 3 — Weakness, Attack Scenario & Mitigation

## Struktur Soal Case 3:
- **a.** Identifikasi **kelemahan sistem** dari salah satu fitur yang diberikan
- **b.** Analisa bagaimana **serangan bisa terjadi** pada kondisi tertentu
- **c.** Analisa sesuatu untuk **reduce risk di insiden masa depan**
- **d.** **Mitigasi** dari perspektif software security

---

## MATERI PENDUKUNG CASE 3

### 3A. Identifying System Weakness

#### Framework untuk Identifikasi Weakness:

**1. OWASP Top 10 sebagai Checklist:**

| Weakness | Tanda-tandanya di Sistem | Contoh |
|----------|--------------------------|--------|
| **Broken Access Control** | User bisa akses resource orang lain dengan mengubah URL/parameter | `/api/user/123/data` → ganti ke `/api/user/456/data` dan tetap dapat datanya |
| **Cryptographic Failures** | Data sensitif disimpan/dikirim tanpa enkripsi atau enkripsi lemah | Password di-hash MD5, data kartu disimpan plaintext |
| **Injection** | Input user langsung digunakan dalam query/command | `SELECT * FROM users WHERE name='` + userInput + `'` |
| **Insecure Design** | Desain tidak memperhitungkan security by design | Tidak ada rate limiting di endpoint reset password |
| **Security Misconfiguration** | Konfigurasi default, debug mode aktif di production | Stack trace muncul di error response |
| **Vulnerable Components** | Library outdated dengan CVE yang sudah diketahui | Log4Shell (CVE-2021-44228) |
| **Auth Failures** | Session tidak expire, password policy lemah | Session token tidak expire setelah logout |
| **SSRF** | Server melakukan request ke URL yang ditentukan user | `fetch(req.body.url)` tanpa validasi |

---

#### 📝 Template Menjawab Sub-soal A:

```
FITUR YANG DIANALISA: [Nama fitur dari soal]

WEAKNESS YANG DIIDENTIFIKASI:
1. [Nama Kelemahan — spesifik]
   Kategori OWASP: [Broken Access Control / Injection / dst]
   Deskripsi: [Jelaskan kelemahan ini secara teknis dalam konteks fitur]
   Root Cause: [Mengapa kelemahan ini ada — design flaw / implementation flaw / config]
   
2. [Nama Kelemahan Kedua]
   ...

SEVERITY ASSESSMENT:
[Weakness mana yang paling berbahaya dan mengapa]
```

**Contoh:**
> *Fitur: Fitur "Transfer Dana" pada aplikasi e-wallet*
>
> **Weakness 1: Missing Authorization Check pada Level Transaksi**  
> Kategori: Broken Access Control  
> Deskripsi: Endpoint `/api/transfer` hanya memvalidasi bahwa user sudah login (authentication), tapi tidak memvalidasi bahwa nomor rekening sumber dalam request body benar-benar milik user yang sedang login (authorization). User yang login sebagai A bisa mengirim request dengan account_from milik user B.  
> Root Cause: Implementation flaw — developer hanya mengecek JWT valid, tidak mengecek ownership.
>
> **Weakness 2: Tidak Ada Limit Transaksi Per Waktu**  
> Kategori: Insecure Design  
> Deskripsi: Tidak ada rate limiting atau limit jumlah transaksi per menit/jam. Jika akun dikompromis, attacker bisa drain seluruh saldo dalam hitungan detik.  
> Root Cause: Security tidak dipertimbangkan di tahap desain fitur.

---

### 3B. Attack Scenario Analysis

Soal akan memberikan kondisi tertentu (`bila...`) dan kamu diminta menganalisa bagaimana serangan bisa terjadi.

#### Framework Analisa Serangan:

**PASTA (Process for Attack Simulation and Threat Analysis):**
1. **Define objectives** — tujuan attacker
2. **Define technical scope** — sistem yang ditarget
3. **Application decomposition** — identifikasi entry point dan data flow
4. **Threat analysis** — threat actor dan attack vector
5. **Vulnerability analysis** — kelemahan yang dieksploitasi
6. **Attack modeling** — bagaimana serangan terjadi step-by-step
7. **Risk/impact analysis** — dampak jika berhasil

---

#### 📝 Template Menjawab Sub-soal B:

```
KONDISI YANG DIBERIKAN: "Bila [kondisi dari soal]..."

SERANGAN YANG MUNGKIN TERJADI:
Nama Serangan: [Nama spesifik, misal: Insecure Direct Object Reference (IDOR) Attack]

STEP-BY-STEP BAGAIMANA SERANGAN TERJADI:
1. [Langkah pertama attacker — reconnaissance / initial access]
2. [Langkah kedua — eksploitasi kelemahan]
3. [Langkah ketiga — eskalasi / lateral movement]
4. [Langkah akhir — impact / data exfiltration]

PRASYARAT SERANGAN BERHASIL:
- [Kondisi 1 yang harus terpenuhi]
- [Kondisi 2 yang harus terpenuhi]

MENGAPA KONDISI DARI SOAL MEMBUAT SERANGAN INI MUNGKIN:
[Jelaskan secara spesifik bagaimana kondisi "bila..." yang diberikan 
menjadi enabler/facilitator serangan ini]

DAMPAK JIKA BERHASIL:
[Apa yang bisa didapat/dirusak attacker]
```

**Contoh:**
> *Kondisi dari soal: "Bila sistem logging tidak mencatat IP address dan waktu setiap request API..."*
>
> **Serangan: Slow-Burn Account Enumeration + Credential Stuffing**
>
> Step 1: Attacker memiliki 10 juta pasang email:password dari breach database lain  
> Step 2: Attacker menjalankan credential stuffing secara sangat lambat — 1 request per menit per akun, dari ribuan IP berbeda (botnet)  
> Step 3: Karena tidak ada log IP + timestamp → tidak ada pattern yang bisa dideteksi oleh security monitoring  
> Step 4: Setelah berhasil akses ke 500 akun dalam 2 minggu, attacker drain saldo semua akun secara bersamaan  
>
> **Mengapa kondisi ini jadi enabler:** Tanpa logging IP dan timestamp, tidak bisa dibuat alert rule seperti "jika 1 IP mencoba > 10 login gagal dalam 5 menit → block". Serangan tersembunyi selama berbulan-bulan.

---

### 3C. Reduce Future Risk — Analysis

Soal akan meminta kamu menganalisa sesuatu (bisa berupa: proses, kebijakan, monitoring, atau arsitektur) untuk **mengurangi risiko insiden serupa di masa depan**.

#### Pendekatan yang Relevan:

| Pendekatan | Penjelasan | Kapan Digunakan |
|------------|------------|-----------------|
| **Post-Mortem / Root Cause Analysis** | Analisa mendalam kenapa insiden terjadi | Setelah insiden terjadi |
| **Threat Modeling** | Identifikasi ancaman di tahap desain | Sebelum develop fitur |
| **Security Audit** | Review menyeluruh terhadap konfigurasi dan kode | Berkala / setelah perubahan besar |
| **Penetration Testing** | Simulasi serangan untuk temukan vulnerability | Sebelum launch / berkala |
| **Security Monitoring** | SIEM, anomaly detection, real-time alerting | Continuous |
| **Security Training** | Awareness training untuk developer dan staff | Ongoing |

#### 5 Whys Technique (untuk Root Cause):
```
Insiden: [Deskripsi insiden]
Why 1: Mengapa insiden terjadi? → [Jawaban]
Why 2: Mengapa [jawaban 1] terjadi? → [Jawaban]
Why 3: Mengapa [jawaban 2] terjadi? → [Jawaban]
Why 4: Mengapa [jawaban 3] terjadi? → [Jawaban]
Why 5: Mengapa [jawaban 4] terjadi? → [Root Cause]

Action: Address ROOT CAUSE, bukan symptom
```

---

#### 📝 Template Menjawab Sub-soal C:

```
ANALISA UNTUK REDUCE FUTURE RISK:

ASPEK YANG DIANALISA: [Process / Monitoring / Architecture / Policy]

KONDISI SAAT INI (masalah):
[Apa yang tidak ada atau tidak berfungsi dengan baik berdasarkan skenario]

ROOT CAUSE (mengapa insiden bisa terjadi):
[Gunakan 5 Whys atau langsung ke root cause]

REKOMENDASI PERBAIKAN:
1. [Perubahan konkret #1]
   Dampak: [Bagaimana ini reduce risk]
   
2. [Perubahan konkret #2]
   Dampak: [...]

METRIK UNTUK MENGUKUR KEBERHASILAN:
[Bagaimana kita tahu improvement ini berhasil? Contoh: MTTD menurun dari X hari ke Y jam]
```

---

### 3D. Mitigation — Software Security Perspective

Mitigasi dari perspektif **software security** berarti langkah-langkah yang dilakukan pada level **kode, arsitektur, dan proses development** — bukan hanya network/infrastruktur.

#### Lapisan Mitigasi Software Security:

**1. Secure Coding Practices:**
| Teknik | Penjelasan | Contoh |
|--------|------------|--------|
| **Input Validation** | Validasi semua input dari user sebelum diproses | Whitelist validation, regex, length check |
| **Output Encoding** | Encode output sebelum ditampilkan | HTML encoding untuk cegah XSS |
| **Parameterized Query** | Gunakan prepared statement bukan string concat | `SELECT * FROM users WHERE id = ?` |
| **Principle of Least Privilege** | Berikan akses minimum yang diperlukan | Service account hanya bisa SELECT, tidak INSERT |
| **Fail Secure** | Jika ada error → default ke deny, bukan allow | Exception handler tidak expose data sensitif |
| **Secure Defaults** | Konfigurasi default harus aman | Debug mode off, error detail tersembunyi |

**2. Security Architecture:**
| Teknik | Penjelasan |
|--------|------------|
| **Defense in Depth** | Berlapis-lapis kontrol keamanan; satu lapisan gagal → lapisan lain masih ada |
| **Zero Trust** | "Never trust, always verify" — verifikasi setiap request meski dari internal network |
| **Separation of Duties** | Pisahkan hak akses agar tidak ada satu entity yang bisa melakukan semua aksi berbahaya |
| **Secure by Design** | Security dipertimbangkan sejak tahap desain, bukan sebagai afterthought |

**3. Security Testing (SAST & DAST):**
| Tipe | Tool | Kapan |
|------|------|-------|
| **SAST** (Static Application Security Testing) | SonarQube, Checkmarx, Semgrep | Setiap commit / CI pipeline |
| **DAST** (Dynamic Application Security Testing) | OWASP ZAP, Burp Suite | Sebelum release / berkala |
| **SCA** (Software Composition Analysis) | Snyk, Dependabot | Setiap PR / mingguan |

---

#### 📝 Template Menjawab Sub-soal D:

```
MITIGASI DARI PERSPEKTIF SOFTWARE SECURITY:

SECURE CODING LEVEL:
1. [Teknik #1] 
   Implementasi: [Bagaimana implementasinya secara konkret dalam kode/arsitektur]
   Mengatasi: [Weakness mana di soal yang ini mitigasi]

2. [Teknik #2]
   ...

ARCHITECTURE LEVEL:
1. [Perubahan arsitektur]
   Implementasi: [...]
   Mengatasi: [...]

PROCESS LEVEL (SDLC):
1. [Perubahan ke development process]
   Contoh: Tambahkan security review checklist sebelum setiap PR di-merge
   
MONITORING & DETECTION:
1. [Apa yang perlu di-monitor]
   Alert rule: [Contoh alert yang perlu dibuat]

PRIORITAS IMPLEMENTASI:
1. [Mitigasi tercepat dan paling impactful — quick win]
2. [Mitigasi jangka menengah]
3. [Mitigasi jangka panjang]
```

---

# 🗺️ RINGKASAN FRAMEWORK MENJAWAB — CHEATSHEET

## Quick Reference per Sub-soal:

```
CASE 1a → Risk + [Accept/Avoid/Mitigate/Transfer] + MENGAPA + BAGAIMANA
CASE 1b → Indirect Risk = bukan A saja, bukan B saja, tapi KOMBINASI A+B
CASE 1c → Priority = Risk Score (Likelihood × Impact) + Feasibility dalam constraint
CASE 1d → Trade-off = Sisi A vs Sisi B + Mana yang dipilih + Mengapa justified

CASE 2a → Asset = KONKRET + Security Objective = MENGAPA objective itu
CASE 2b → Threat = STRIDE + Step-by-step attack scenario + Impact
CASE 2c → Recommendation + Trade-off yang disadari + Cara minimize sacrifice

CASE 3a → Weakness = OWASP Category + Root Cause (Design/Implementation/Config)
CASE 3b → Attack = "Bila kondisi X → step 1 → 2 → 3 → Impact"
CASE 3c → Future Risk Reduction = Root Cause + Systematic Fix + Metrics
CASE 3d → Mitigation = Secure Coding + Architecture + Process + Detection
```

---

## ⚠️ KESALAHAN UMUM YANG HARUS DIHINDARI:

| ❌ Jangan Lakukan | ✅ Yang Benar |
|------------------|--------------|
| Jawaban generik tidak terhubung ke skenario soal | Selalu quote/referensikan kondisi spesifik dari soal |
| Hanya sebut nama teknik tanpa jelaskan implementasi | Jelaskan BAGAIMANA diterapkan dalam konteks soal |
| Asset = hal yang disebutkan ulang dari soal | Asset = entitas konkret dengan nilai yang bisa hilang/rusak |
| Trade-off = sebutkan satu sisi saja | Trade-off = KEDUA sisi + mana yang dipilih + alasan |
| Indirect risk = direct risk biasa | Indirect risk = risk yang hanya muncul dari KOMBINASI kondisi |
| Mitigasi = sebutkan nama tools saja | Mitigasi = teknik + implementasi konkret + apa yang diatasi |

---

*📅 Dibuat untuk persiapan UAS Software Security — Semester 4 BINUS Cyber Security*
