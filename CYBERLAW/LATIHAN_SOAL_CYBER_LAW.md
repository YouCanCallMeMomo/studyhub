# 📝 LATIHAN SOAL & PEMBAHASAN — UTS CYBER LAW

> **Mata Kuliah:** Cyber Law  
> **Program Studi:** Cyber Security — BINUS University  
> **Semester:** 4 | Tahun Akademik 2025/2026  
> **Total Soal:** 30 Soal (Essay + Studi Kasus + Analisis)

---

## 📋 DISTRIBUSI SOAL

| Topik | Jumlah Soal |
|-------|-------------|
| Urgensi Pengaturan Hukum Cyber | 7 Soal |
| Model Peraturan Hukum Cyber Indonesia | 8 Soal |
| Kebebasan Ekspresi vs Privasi | 8 Soal |
| Studi Kasus (Analisis Pasal) | 7 Soal |

---

# ⚖️ BAGIAN 1: URGENSI PENGATURAN HUKUM CYBER (7 Soal)

---

### Soal 1 — Alasan Hukum Khusus

Jelaskan minimal 3 alasan mengapa perkembangan teknologi menuntut pengaturan yang khusus di ruang cyber!

### ✅ Jawaban:

**1. Sifat unik ruang cyber (cyberspace):**
- Ruang cyber bersifat **borderless** (tanpa batas wilayah) sehingga kejahatan bisa lintas negara
- Pelaku bisa anonim, sulit diidentifikasi
- Data bersifat **intangible** (tidak berwujud) — konsep "pencurian" dalam KUHP konvensional tidak sepenuhnya applicable untuk data digital

**2. Keterbatasan hukum konvensional:**
- KUHP Pasal 362 mengatur pencurian "barang" — data digital bukan "barang" dalam pengertian konvensional
- Hukum acara pidana (KUHAP) tidak mengatur tentang bukti elektronik dan digital forensic
- Konsep yurisdiksi teritorial tidak cocok untuk kejahatan yang bersifat borderless

**3. Munculnya tipe kejahatan baru:**
- Hacking, phishing, ransomware, DDoS, identity theft, cyberbullying adalah kejahatan yang **belum ada** sebelum era digital
- Tidak ada pasal dalam KUHP yang secara spesifik mengatur perbuatan-perbuatan ini
- Diperlukan definisi hukum baru untuk aktivitas di ruang cyber

**4. Kebutuhan ekonomi digital:**
- E-commerce memerlukan pengakuan hukum atas transaksi elektronik dan tanda tangan digital
- Fintech dan cryptocurrency memerlukan kerangka regulasi yang jelas
- Investasi asing memerlukan **legal certainty** di bidang digital

---

### Soal 2 — Hukum Konvensional vs Hukum Cyber

Apa perbedaan mendasar antara hukum konvensional (KUHP) dan hukum cyber (UU ITE) dalam menangani kejahatan?

### ✅ Jawaban:

| Aspek | KUHP (Konvensional) | UU ITE (Hukum Cyber) |
|-------|---------------------|---------------------|
| **Objek Kejahatan** | Barang berwujud (fisik) | Data/informasi elektronik (digital) |
| **Bukti** | Bukti fisik (surat, saksi, keterangan) | Bukti elektronik (log file, screenshot, metadata) |
| **Yurisdiksi** | Teritorial (wilayah NKRI) | Dapat menjangkau perbuatan di luar negeri yang berakibat di Indonesia |
| **Pelaku** | Identitas biasanya jelas | Bisa anonim (IP address, akun palsu) |
| **Tempat Kejadian** | Lokasi fisik yang jelas | Cyberspace — tidak memiliki lokasi fisik |
| **Waktu** | Real-time atau ada saksi | Bisa terjadi otomatis (scheduled attack) |
| **Dampak** | Terbatas pada lokasi | Bisa berskala global, jutaan korban |

---

### Soal 3 — Bukti Digital

Mengapa bukti digital memerlukan penanganan khusus dibandingkan bukti konvensional? Jelaskan!

### ✅ Jawaban:

Bukti digital memerlukan penanganan khusus karena:

**1. Mudah dimanipulasi/dihapus:**
- Log file bisa diubah, screenshot bisa diedit
- Metadata bisa dimodifikasi
- Berbeda dengan bukti fisik (sidik jari, surat) yang lebih sulit dipalsukan

**2. Memerlukan keahlian khusus (Digital Forensics):**
- Perlu tools khusus: FTK, EnCase, Autopsy
- Diperlukan hash verification (MD5/SHA) untuk memastikan integritas bukti
- Ahli forensik digital diperlukan sebagai saksi ahli di pengadilan

**3. Chain of Custody yang ketat:**
- Setiap akses terhadap bukti digital harus tercatat
- Bukti harus di-image (clone) sebelum dianalisis — original tidak boleh dimodifikasi
- Jika chain of custody terputus, bukti bisa **tidak diterima** pengadilan

**4. Volume besar:**
- Satu hard drive bisa berisi terabytes data
- Perlu teknik filtering dan keyword search yang efisien
- Analisis bisa memakan waktu berminggu-minggu

**Dasar Hukum:** UU ITE Pasal 5 ayat (1) mengakui informasi dan dokumen elektronik sebagai alat bukti yang sah.

---

### Soal 4 — Kejahatan Cyber Baru

Sebutkan dan jelaskan 5 tipe kejahatan cyber yang tidak bisa dijangkau oleh KUHP konvensional!

### ✅ Jawaban:

| No | Kejahatan | Penjelasan | Mengapa KUHP Tidak Cukup |
|----|-----------|-----------|--------------------------|
| 1 | **Hacking / Unauthorized Access** | Mengakses sistem komputer tanpa izin | KUHP tidak mengenal konsep "memasuki" sistem digital |
| 2 | **Phishing** | Membuat website/email palsu untuk mencuri data | Penipuan digital memiliki modus yang berbeda dari penipuan konvensional |
| 3 | **Ransomware** | Mengenkripsi data korban, meminta tebusan | KUHP tidak mengatur "penguncian" data elektronik |
| 4 | **DDoS Attack** | Melumpuhkan server/website dengan traffic berlebihan | Tidak ada tindakan fisik — serangan dilakukan secara remote |
| 5 | **Identity Theft** | Mencuri identitas digital seseorang | KUHP mengatur pemalsuan dokumen fisik, bukan identitas online |

---

### Soal 5 — Cyberspace dan Yurisdiksi

Jelaskan tantangan yurisdiksi dalam penegakan hukum cyber!

### ✅ Jawaban:

**Tantangan Yurisdiksi:**

1. **Multi-jurisdiksi:** Satu serangan cyber bisa melibatkan pelaku di negara A, server di negara B, dan korban di negara C. Hukum negara mana yang berlaku?

2. **Contoh kasus:** Hacker di Rusia meretas website bank Indonesia yang server-nya di Singapura:
   - Indonesia: korban ada di Indonesia (asas nasional pasif)
   - Rusia: pelaku ada di Rusia (asas teritorial)
   - Singapura: server berada di Singapura

3. **Solusi dalam UU ITE:**
   - **Pasal 2 UU ITE:** UU ITE berlaku untuk setiap orang yang melakukan perbuatan hukum di bidang TI yang berakibat hukum di wilayah Indonesia dan/atau di luar Indonesia yang **merugikan kepentingan Indonesia**
   - Ini adalah pendekatan **effects doctrine** (dampak di Indonesia = yurisdiksi Indonesia)

4. **Kerjasama Internasional:**
   - Budapest Convention on Cybercrime
   - Mutual Legal Assistance Treaty (MLAT)
   - INTERPOL Cybercrime Unit
   - ASEAN Cybersecurity Cooperation

---

### Soal 6 — Perlindungan Hak Digital

Sebutkan 4 hak fundamental yang perlu dilindungi di era digital dan tantangannya!

### ✅ Jawaban:

| Hak | Dasar Hukum | Tantangan di Era Digital |
|-----|-------------|--------------------------|
| **Hak Privasi** | Pasal 28G UUD 1945 | Data pribadi dikumpulkan secara masif oleh platform digital (surveillance capitalism) |
| **Kebebasan Berekspresi** | Pasal 28E UUD 1945 | Batasan antara kritik sah dan pencemaran nama baik online kabur |
| **Hak atas Informasi** | Pasal 28F UUD 1945 | Disinformasi/hoax menyebar cepat, sulit membedakan fakta dan opini |
| **Hak atas Keamanan** | Pasal 28G UUD 1945 | Infrastruktur kritis (listrik, perbankan) rentan serangan cyber |

---

### Soal 7 — Ekonomi Digital dan Hukum

Mengapa ekonomi digital memerlukan regulasi cyber yang jelas? Berikan 3 contoh!

### ✅ Jawaban:

1. **E-Commerce:**
   - Kontrak jual-beli online perlu **keabsahan hukum** (Pasal 17-22 UU ITE)
   - Tanda tangan elektronik perlu pengakuan hukum untuk transaksi yang sah
   - Konsumen online perlu perlindungan dari fraud (PP 80/2019)

2. **Fintech (Financial Technology):**
   - P2P lending memerlukan regulasi **perlindungan data nasabah** (OJK + UU PDP)
   - E-wallet/payment gateway perlu **lisensi dan pengawasan** Bank Indonesia
   - Tanpa regulasi, risiko pencucian uang dan penipuan tinggi

3. **Startup & Platform Digital:**
   - Investor memerlukan **legal certainty** sebelum berinvestasi
   - Platform seperti Tokopedia, Gojek perlu kerangka hukum untuk tanggung jawab platform (PSE)
   - Data pengguna yang dikumpulkan platform perlu dilindungi (UU PDP)

---

# 📜 BAGIAN 2: MODEL PERATURAN HUKUM CYBER INDONESIA (8 Soal)

---

### Soal 8 — UU ITE Pasal 30

Jelaskan secara detail isi Pasal 30 UU ITE dan berikan contoh penerapannya!

### ✅ Jawaban:

**Pasal 30 UU ITE — Akses Ilegal:**

| Ayat | Isi | Contoh | Sanksi |
|------|-----|--------|--------|
| **(1)** | Mengakses Komputer/Sistem Elektronik milik orang lain **tanpa hak** | Seseorang login ke akun email orang lain menggunakan password yang didapat secara ilegal | Penjara maks 6 tahun, denda maks Rp600 juta |
| **(2)** | Mengakses dengan tujuan untuk **memperoleh** Informasi/Dokumen Elektronik | Hacker mengakses database perusahaan untuk mencuri data nasabah | Penjara maks 7 tahun, denda maks Rp700 juta |
| **(3)** | Mengakses dengan **melanggar/menerobos/menjebol** sistem pengamanan | Hacker menggunakan SQL injection untuk menembus firewall dan mengambil data | Penjara maks 8 tahun, denda maks Rp800 juta |

**Gradasi:** Semakin berat perbuatannya (dari sekedar akses → memperoleh data → membobol keamanan), semakin berat sanksinya.

---

### Soal 9 — UU PDP

Jelaskan prinsip-prinsip utama UU Pelindungan Data Pribadi (UU No. 27 Tahun 2022)!

### ✅ Jawaban:

| No | Prinsip | Penjelasan | Contoh Penerapan |
|----|---------|-----------|------------------|
| 1 | **Consent (Persetujuan)** | Data hanya boleh diproses dengan persetujuan subjek data | Aplikasi harus menampilkan consent form sebelum mengumpulkan data |
| 2 | **Purpose Limitation** | Data hanya digunakan untuk tujuan yang sudah diinformasikan | Data KTP untuk verifikasi tidak boleh dipakai untuk marketing |
| 3 | **Data Minimization** | Hanya mengumpulkan data yang benar-benar diperlukan | Aplikasi delivery tidak perlu meminta data agama |
| 4 | **Accuracy** | Data harus akurat dan di-update | Perusahaan wajib memperbarui data jika subjek memberitahu perubahan |
| 5 | **Storage Limitation** | Data tidak boleh disimpan lebih lama dari yang diperlukan | Data pelamar kerja yang ditolak harus dihapus setelah periode tertentu |
| 6 | **Integrity & Confidentiality** | Data harus dilindungi dari akses ilegal/kebocoran | Implementasi enkripsi, access control, audit logging |
| 7 | **Accountability** | Pengendali data bertanggung jawab dan bisa membuktikan compliance | Perusahaan harus menunjuk DPO dan membuat ROPA |

---

### Soal 10 — Perbedaan UU ITE dan UU PDP

Apa perbedaan fokus antara UU ITE dan UU PDP?

### ✅ Jawaban:

| Aspek | UU ITE (No. 11/2008 jo. 19/2016) | UU PDP (No. 27/2022) |
|-------|----------------------------------|---------------------|
| **Fokus Utama** | Kejahatan cyber dan transaksi elektronik | Perlindungan data pribadi |
| **Pendekatan** | Penegakan hukum (law enforcement) | Perlindungan hak (rights-based) |
| **Subjek** | Pelaku kejahatan cyber | Pengendali & prosesor data |
| **Objek** | Sistem & informasi elektronik | Data pribadi individu |
| **Sanksi** | Pidana (penjara + denda) | Pidana + denda administratif |
| **Inspirasi** | Budapest Convention | GDPR (EU) |
| **Data Pribadi** | Hanya 1 pasal (Pasal 26) | Seluruh UU (76 pasal) |
| **DPO** | Tidak diatur | Wajib untuk pengendali data tertentu |
| **Notifikasi Breach** | Tidak wajib | Wajib 3x24 jam (Pasal 46) |

---

### Soal 11 — Pasal 27 UU ITE

Jelaskan kontroversi seputar Pasal 27 ayat 3 UU ITE dan bagaimana revisi mengatasinya!

### ✅ Jawaban:

**Pasal 27 ayat (3) UU ITE:**
*"Setiap orang dengan sengaja dan tanpa hak mendistribusikan dan/atau mentransmisikan dan/atau membuat dapat diaksesnya Informasi Elektronik dan/atau Dokumen Elektronik yang memiliki muatan penghinaan dan/atau pencemaran nama baik."*

**Kontroversi:**

| Masalah | Penjelasan |
|---------|-----------|
| **"Pasal karet"** | Rumusan pasal terlalu luas, bisa ditafsirkan secara subjektif |
| **Criminalization of speech** | Digunakan untuk membungkam kritik sah |
| **Delik biasa** (sebelum revisi) | Polisi bisa menyelidiki tanpa harus ada pengaduan korban |
| **Hukuman tidak proporsional** | Maks 6 tahun penjara — lebih berat dari KUHP Pasal 310 |
| **Chilling effect** | Masyarakat takut berekspresi di media sosial |

**Kasus Terkenal:** Prita Mulyasari, Baiq Nuril, Florence Sihombing

**Revisi UU ITE (UU 1/2024):**

| Perubahan | Detail |
|-----------|--------|
| **Delik aduan** | Berubah dari delik biasa → delik aduan (harus ada pengaduan korban) |
| **Mengacu KUHP** | Definisi pencemaran nama baik mengacu pada KUHP Pasal 310-311 |
| **Pengecualian** | Kritik terhadap kepentingan publik dikecualikan |
| **Restorative justice** | Mendorong mediasi sebelum pemidanaan |
| **Sanksi diperjelas** | Paling lama 2 tahun penjara dan/atau denda Rp400 juta |

---

### Soal 12 — Transaksi Elektronik

Apa saja syarat keabsahan transaksi elektronik menurut UU ITE?

### ✅ Jawaban:

Berdasarkan Pasal 17-22 UU ITE:

| Syarat | Penjelasan |
|--------|-----------|
| **Kesepakatan para pihak** | Adanya offer dan acceptance secara elektronik |
| **Kecakapan hukum** | Para pihak harus cakap hukum (dewasa, tidak di bawah pengampuan) |
| **Objek tertentu** | Barang/jasa yang diperjualbelikan harus jelas |
| **Kausa halal** | Tidak melanggar hukum, kesusilaan, atau ketertiban umum |
| **Itikad baik** | Para pihak harus beritikad baik (Pasal 17 ayat 2) |

**Tambahan untuk Transaksi Elektronik:**
- **Tanda tangan elektronik** diakui sebagai alat bukti (Pasal 11)
- **Sertifikat elektronik** yang diterbitkan oleh CA (Certificate Authority) yang diakui
- **Kontrak elektronik** mengikat para pihak (Pasal 18)

---

### Soal 13 — PP 71/2019 (PSTE)

Apa kewajiban Penyelenggara Sistem Elektronik (PSE) berdasarkan PP 71/2019?

### ✅ Jawaban:

| Kewajiban | Detail |
|-----------|--------|
| **Pendaftaran PSE** | PSE wajib mendaftar ke Kominfo (PSE Publik dan Privat) |
| **Keamanan Sistem** | Menerapkan security measures sesuai best practice |
| **Data Center** | PSE strategis wajib menempatkan data center di Indonesia |
| **Audit** | Melakukan security audit berkala |
| **Incident Response** | Memiliki prosedur penanganan insiden |
| **Transparansi** | Menginformasikan syarat dan ketentuan kepada pengguna |
| **Moderasi Konten** | Menurunkan konten yang melanggar hukum dalam 4x24 jam setelah diminta |

---

### Soal 14 — Pendekatan Hukum Cyber

Jelaskan perbedaan antara Command & Control, Self-Regulation, dan Co-Regulation dalam konteks hukum cyber!

### ✅ Jawaban:

| Pendekatan | Aktor Utama | Mekanisme | Contoh di Indonesia |
|-----------|-------------|-----------|---------------------|
| **Command & Control** | Pemerintah | Regulasi langsung, mandatory | UU ITE, UU PDP — pelanggaran = sanksi pidana |
| **Self-Regulation** | Industri/Platform | Aturan internal, voluntary | Community Guidelines YouTube, ToS Twitter/X |
| **Co-Regulation** | Pemerintah + Industri | Kolaborasi, kerangka bersama | PSE registration — pemerintah set standar, industri implement |

**Indonesia menggunakan campuran ketiga pendekatan:**
- **UU ITE & UU PDP** = Command & Control (wajib, ada sanksi)
- **ToS/Privacy Policy platform** = Self-Regulation
- **PP 71/2019** = Co-Regulation (pemerintah set framework, PSE implement)

---

### Soal 15 — Hierarki Regulasi

Gambarkan hierarki peraturan hukum cyber di Indonesia dari yang tertinggi!

### ✅ Jawaban:

```
1. UUD 1945
   - Pasal 28E (kebebasan berekspresi)
   - Pasal 28F (hak atas informasi)
   - Pasal 28G (hak atas perlindungan)
   - Pasal 28J (pembatasan hak)
        ↓
2. Undang-Undang (UU)
   - UU ITE (No. 11/2008 jo. No. 19/2016 jo. No. 1/2024)
   - UU PDP (No. 27/2022)
   - UU Telekomunikasi (No. 36/1999)
   - KUHP Baru (UU 1/2023)
        ↓
3. Peraturan Pemerintah (PP)
   - PP 71/2019 (PSTE)
   - PP 80/2019 (e-commerce)
        ↓
4. Peraturan Menteri (Permen)
   - Permenkominfo No. 5/2020 (PSE Privat)
   - Permenkominfo No. 20/2016 (Data Pribadi)
        ↓
5. Peraturan Lembaga
   - POJK (untuk fintech)
   - Peraturan BI (untuk e-money)
```

---

# 🗽 BAGIAN 3: KEBEBASAN EKSPRESI VS PRIVASI (8 Soal)

---

### Soal 16 — Dasar Hukum

Jelaskan dasar hukum kebebasan berekspresi dan hak privasi dalam konstitusi Indonesia!

### ✅ Jawaban:

**Kebebasan Berekspresi:**
| Pasal UUD 1945 | Isi |
|-----------------|-----|
| **Pasal 28E ayat (2)** | *Setiap orang berhak atas kebebasan meyakini kepercayaan, menyatakan pikiran dan sikap, sesuai dengan hati nuraninya* |
| **Pasal 28E ayat (3)** | *Setiap orang berhak atas kebebasan berserikat, berkumpul, dan mengeluarkan pendapat* |
| **Pasal 28F** | *Setiap orang berhak untuk berkomunikasi dan memperoleh informasi untuk mengembangkan pribadi dan lingkungan sosialnya, serta berhak untuk mencari, memperoleh, memiliki, menyimpan, mengolah, dan menyampaikan informasi dengan menggunakan segala jenis saluran yang tersedia* |

**Hak Privasi:**
| Pasal UUD 1945 | Isi |
|-----------------|-----|
| **Pasal 28G ayat (1)** | *Setiap orang berhak atas perlindungan diri pribadi, keluarga, kehormatan, martabat, dan harta benda yang di bawah kekuasaannya, serta berhak atas rasa aman dan perlindungan dari ancaman ketakutan untuk berbuat atau tidak berbuat sesuatu yang merupakan hak asasi* |

**Pembatasan:**
| Pasal UUD 1945 | Isi |
|-----------------|-----|
| **Pasal 28J ayat (2)** | *Dalam menjalankan hak dan kebebasannya, setiap orang wajib tunduk kepada pembatasan yang ditetapkan dengan undang-undang...* |

---

### Soal 17 — Kasus Prita Mulyasari

Analisis kasus Prita Mulyasari dari perspektif kebebasan ekspresi dan perlindungan reputasi!

### ✅ Jawaban:

**Kronologi:**
1. 2008: Prita menulis email keluhan tentang pelayanan RS Omni International
2. Email tersebar di internet/mailing list
3. RS Omni menggugat Prita: Pasal 27(3) UU ITE (pencemaran nama baik) + Pasal 310 KUHP
4. PN Tangerang: Prita divonis 6 bulan penjara (percobaan)
5. MA: Prita **DIBEBASKAN** (2012)

**Analisis Dua Perspektif:**

| Perspektif | Argumen |
|-----------|---------|
| **Pro Kebebasan Ekspresi** | Prita menyampaikan keluhan sebagai **hak konsumen** (UU 8/1999). Email bersifat private (bukan publikasi massal). Keluhan factual bukan pencemaran. MA setuju dengan perspektif ini. |
| **Pro Perlindungan Reputasi** | RS Omni merasa reputasinya dirugikan. Email tersebar luas tanpa kontrol. Nama RS disebut secara spesifik. |

**Putusan MA — Keseimbangan:**
- Keluhan konsumen yang **bonafide** (berdasarkan pengalaman nyata) dilindungi hukum
- Harus dibedakan antara **kritik yang sah** dan **pencemaran yang sengaja**
- Konteks, niat, dan fakta menjadi pertimbangan penting

---

### Soal 18 — Right to be Forgotten

Apa yang dimaksud dengan "Right to be Forgotten" dan bagaimana penerapannya di Indonesia?

### ✅ Jawaban:

**Definisi:** Hak seseorang untuk meminta penghapusan informasi pribadi yang sudah tidak relevan, tidak akurat, atau berlebihan dari internet/database.

**Dasar Hukum Indonesia:**
- UU ITE Pasal 26 ayat (3): *"Setiap penyelenggara sistem elektronik wajib menghapus informasi elektronik dan/atau dokumen elektronik yang tidak relevan yang berada di bawah kendalinya atas permintaan orang yang bersangkutan."*
- UU PDP Pasal 8: Subjek data berhak meminta penghapusan data pribadi

**Contoh Penerapan:**
1. Seseorang yang pernah dituduh kriminal tapi dibebaskan berhak meminta Google menghapus berita tersebut dari search results
2. Mantan narapidana yang sudah menjalani hukuman berhak meminta penghapusan data kriminalnya

**Batasan:**
- Tidak berlaku untuk **kepentingan publik** (pejabat publik)
- Tidak berlaku untuk **kebutuhan penelitian** dan **kebebasan pers**
- Tidak berlaku untuk **kewajiban hukum** (misalnya data untuk proses pengadilan)

---

### Soal 19 — Hate Speech Online

Bagaimana hukum Indonesia mengatur hate speech di ruang cyber?

### ✅ Jawaban:

**Regulasi:**

| Pasal | Isi | Sanksi |
|-------|-----|--------|
| **UU ITE Pasal 28 ayat (2)** | Menyebarkan informasi yang ditujukan untuk menimbulkan rasa kebencian berdasarkan SARA | Maks 6 tahun penjara, denda maks Rp1 miliar |
| **KUHP Pasal 156** | Menyatakan peracaran kebencian terhadap golongan | Maks 4 tahun penjara |
| **SE Kapolri No. 6/2015** | Panduan penanganan hate speech oleh kepolisian | Pencegahan preventif |

**Elemen Hate Speech Online:**
1. **Sengaja** — dilakukan dengan kesadaran dan niat
2. **Menyebarkan** — mendistribusikan melalui media elektronik
3. **Menimbulkan kebencian** — ditujukan untuk memecah belah
4. **Berdasarkan SARA** — Suku, Agama, Ras, Antargolongan

**Keseimbangan dengan Kebebasan Ekspresi:**
- Kritik terhadap kebijakan/ide **≠** hate speech
- Hate speech yang dimaksud = yang ditujukan untuk **dehumanisasi** dan **inciting violence**
- Pengadilan harus mempertimbangkan konteks, niat, dan dampak

---

### Soal 20 — Hoax vs Kebebasan Pers

Bagaimana hukum membedakan antara hoax dan kebebasan pers?

### ✅ Jawaban:

| Aspek | Hoax (Dilarang) | Kebebasan Pers (Dilindungi) |
|-------|-----------------|---------------------------|
| **Definisi** | Informasi bohong yang sengaja disebarkan | Pemberitaan berdasarkan prinsip jurnalistik |
| **Niat** | Menyesatkan publik, merugikan pihak tertentu | Memberikan informasi untuk kepentingan publik |
| **Verifikasi** | Tidak diverifikasi, sering dipalsukan | Melalui proses verifikasi (cover both sides) |
| **Sumber** | Anonim atau tidak jelas | Jelas, bisa dipertanggungjawabkan |
| **Dasar Hukum** | UU ITE Pasal 28(1) — ancaman 6 tahun | UU Pers No. 40/1999 — melindungi kebebasan pers |
| **Contoh** | "Vaksin COVID mengandung chip 5G" | Artikel investigasi tentang korupsi |

**Hak Jawab:** Jika seseorang merasa dirugikan oleh berita pers, UU Pers Pasal 5 memberikan hak jawab — bukan otomatis pemidanaan.

---

### Soal 21 — Content Moderation

Jelaskan perdebatan seputar content moderation oleh platform digital!

### ✅ Jawaban:

| Pro Content Moderation | Kontra Content Moderation |
|----------------------|-------------------------|
| Melindungi pengguna dari konten berbahaya | Berpotensi menjadi **sensor** terselubung |
| Mencegah penyebaran hoax & hate speech | Platform menjadi **arbiter of truth** yang tidak dipilih |
| Mematuhi hukum lokal (UU ITE) | **Over-blocking** — konten sah ikut terhapus |
| Menciptakan lingkungan online yang aman | **Bias algoritma** dalam moderasi otomatis |
| Melindungi anak-anak dari konten dewasa | Mengurangi **marketplace of ideas** |

**Regulasi di Indonesia:**
- PP 71/2019: PSE wajib menurunkan konten yang melanggar dalam **4x24 jam** setelah diminta
- Permenkominfo 5/2020: PSE Privat asing wajib mendaftar ke Kominfo
- UU ITE revisi: platform wajib memiliki **community guidelines** dan mekanisme banding

---

### Soal 22 — Data Breach Notification

Jelaskan kewajiban notifikasi data breach berdasarkan UU PDP!

### ✅ Jawaban:

Berdasarkan **UU PDP Pasal 46:**

| Aspek | Kewajiban |
|-------|-----------|
| **Siapa** | Pengendali Data Pribadi |
| **Kapan** | Paling lambat **3 x 24 jam** setelah terjadinya kebocoran |
| **Kepada Siapa** | 1. Subjek data (orang yang datanya bocor) 2. Lembaga pengawas (Badan PDP) |
| **Isi Notifikasi** | Data apa yang bocor, kapan terjadinya, upaya pemulihan, kontak penanggung jawab |

**Sanksi jika tidak melakukan notifikasi:**
- Sanksi administratif: teguran tertulis, penghentian sementara, penghapusan data, denda administratif hingga **2% dari pendapatan tahunan**
- Sanksi pidana jika terbukti sengaja menyembunyikan kebocoran

---

### Soal 23 — Whistleblowing Digital

Bagaimana hukum melindungi whistleblower digital di Indonesia?

### ✅ Jawaban:

**Perlindungan Whistleblower:**

| Regulasi | Perlindungan |
|----------|-------------|
| **UU 31/2014 tentang Perlindungan Saksi dan Korban** | Identitas dilindungi, bisa mendapat relokasi |
| **UU 30/2002 tentang KPK** | Perlindungan untuk pelapor korupsi |
| **PP 57/2003** | Whistleblower tidak bisa dituntut pidana atas laporannya |

**Tantangan di Era Digital:**
1. **Kanal pelaporan** — Whistleblower sering menggunakan media sosial karena tidak percaya jalur resmi
2. **Batasan hukum** — Jika whistleblower merilis data sensitif ke publik (bukan ke otoritas), bisa dijerat UU ITE Pasal 32
3. **Kasus Baiq Nuril** — Korban yang merekam bukti pelecehan justru dihukum
4. **Dilema:** Melindungi whistleblower vs melindungi data pribadi

**Solusi ideal:**
- Memperkuat secure reporting channels (seperti aplikasi WBS)
- Memberikan imunitas bagi whistleblower yang beritikad baik
- Revisi UU ITE agar tidak menjerat whistleblower

---

# 🔍 BAGIAN 4: STUDI KASUS — ANALISIS PASAL (7 Soal)

---

### Soal 24 — Kasus Hacking Website Pemerintah

**Skenario:** B melakukan SQL injection untuk meretas website resmi instansi pemerintah dan mengubah tampilan halaman utama (defacement). B melakukan ini "untuk kesenangan" dan tidak mengambil data apapun.

**Pertanyaan:** Pasal apa yang dilanggar dan apa sanksinya?

### ✅ Jawaban:

**Pasal yang Dilanggar:**

| Pasal | Penerapan | Sanksi |
|-------|-----------|--------|
| **Pasal 30 ayat (3) UU ITE** | B **menjebol sistem pengamanan** website menggunakan SQL injection | Maks 8 tahun penjara, denda maks Rp800 juta |
| **Pasal 32 ayat (1) UU ITE** | B **mengubah** informasi pada website (defacement = mengubah tampilan) | Maks 8 tahun penjara, denda maks Rp2 miliar |
| **Pasal 33 UU ITE** | B **mengganggu** Sistem Elektronik milik pemerintah | Maks 10 tahun penjara, denda maks Rp10 miliar |
| **Pasal 52 ayat (3) UU ITE** | Karena yang diretas adalah **sistem pemerintah/pelayanan publik**, hukuman diperberat **2/3** | Tambahan 2/3 dari ancaman pidana |

**Total ancaman:** Dengan pemberatan Pasal 52(3), hukuman bisa mencapai **lebih dari 10 tahun penjara**.

**Catatan:** Meskipun B tidak mengambil data, tindakan defacement sudah merupakan pelanggaran Pasal 30 dan 32. Niat "iseng" tidak menghapus pertanggungjawaban pidana.

---

### Soal 25 — Kasus Doxing

**Skenario:** C berselisih dengan D di media sosial. C kemudian mengumpulkan dan mempublikasikan data pribadi D (alamat rumah, nomor telepon, foto KTP, nama anggota keluarga) di Twitter/X, sehingga D mendapat teror dan ancaman dari netizen.

**Pertanyaan:** Analisis pasal-pasal yang dilanggar!

### ✅ Jawaban:

| Pasal | Penerapan | Sanksi |
|-------|-----------|--------|
| **Pasal 26 UU ITE** | C menyebarkan data pribadi D **tanpa persetujuan** | Hak menggugat ganti rugi (perdata) |
| **Pasal 27 ayat (3) UU ITE** | Jika publikasi bertujuan pencemaran nama baik | Maks 4 tahun penjara (revisi), denda maks Rp750 juta |
| **Pasal 29 UU ITE** | Jika D merasa terancam akibat teror yang muncul | Maks 12 tahun penjara |
| **Pasal 65 UU PDP** | Mengungkapkan/menggunakan data pribadi secara melawan hukum | Maks 5 tahun penjara, denda Rp5 miliar |
| **Pasal 67 UU PDP** | Mengumpulkan data pribadi tanpa consent | Maks 5 tahun penjara |

**Doxing adalah tindakan yang melanggar BANYAK pasal sekaligus** — ini menunjukkan pentingnya perlindungan data pribadi di era digital.

---

### Soal 26 — Kasus Ransomware

**Skenario:** E menyebarkan ransomware ke jaringan sebuah rumah sakit, mengenkripsi seluruh data pasien, dan meminta tebusan 10 Bitcoin. Rumah sakit tidak bisa mengakses rekam medis selama 3 hari.

**Pertanyaan:** Analisis pelanggaran hukum E!

### ✅ Jawaban:

| Pasal | Penerapan | Sanksi |
|-------|-----------|--------|
| **Pasal 30 ayat (3) UU ITE** | E menerobos sistem keamanan rumah sakit | Maks 8 tahun + pemberatan |
| **Pasal 32 ayat (1) UU ITE** | E **mengubah** data (enkripsi = membuat data tidak bisa diakses) | Maks 8 tahun |
| **Pasal 33 UU ITE** | E **mengganggu** sistem elektronik rumah sakit selama 3 hari | Maks 10 tahun |
| **Pasal 34 UU ITE** | E memproduksi/menggunakan **perangkat** (ransomware) untuk kejahatan | Maks 10 tahun |
| **Pasal 27 ayat (4) UU ITE** | E melakukan **pemerasan** (meminta tebusan) secara elektronik | Maks 6 tahun |
| **Pasal 36 UU ITE** | Perbuatan E **mengakibatkan kerugian** bagi rumah sakit dan pasien | Maks 12 tahun, denda Rp12 miliar |
| **Pasal 52 ayat (3) UU ITE** | Rumah sakit = **pelayanan publik** → pemberatan 2/3 | Hukuman + 2/3 |
| **UU PDP** | Data pasien = **data pribadi spesifik** (kesehatan) | Maks 6 tahun |
| **KUHP Pasal 368** | Pemerasan/pengancaman | Maks 9 tahun |

**Ini kasus yang SANGAT BERAT** — ancaman hukuman bisa mencapai belasan tahun penjara!

---

### Soal 27 — Kasus Phishing

**Skenario:** F membuat website palsu yang mirip dengan website bank BCA (klikbca.com). F menyebarkan link melalui SMS ke ribuan orang. 50 orang memasukkan username dan password, yang kemudian digunakan F untuk mentransfer uang mereka.

**Pertanyaan:** Pasal apa saja yang dilanggar?

### ✅ Jawaban:

| Pasal | Penerapan |
|-------|-----------|
| **Pasal 35 UU ITE** | F melakukan **manipulasi/pemalsuan** informasi elektronik (website palsu) untuk mengelabui |
| **Pasal 36 UU ITE** | Tindakan F **mengakibatkan kerugian** finansial bagi 50 korban |
| **Pasal 30 ayat (2) UU ITE** | F **memperoleh** informasi (username/password) melalui cara melawan hukum |
| **Pasal 28 ayat (1) UU ITE** | F menyebarkan **berita bohong** yang menyesatkan — SMS berisi link palsu |
| **Pasal 65 UU PDP** | F mengumpulkan dan menggunakan **data pribadi** (credential) tanpa consent |
| **KUHP Pasal 378** | **Penipuan** — menggerakkan orang untuk menyerahkan barang (uang) |
| **KUHP Pasal 263** | **Pemalsuan** — membuat website palsu yang meniru bank resmi |

---

### Soal 28 — Kasus Cyberbullying

**Skenario:** G (usia 17 tahun) mem-posting video memalukan temannya H di Instagram tanpa izin, disertai caption yang menghina. Video tersebar luas dan H mengalami depresi.

**Pertanyaan:** Analisis dari perspektif hukum!

### ✅ Jawaban:

| Aspek | Analisis |
|-------|---------|
| **Pasal 27 ayat (3) UU ITE** | G melakukan pencemaran nama baik melalui media elektronik |
| **Pasal 27 ayat (1) UU ITE** | Jika video mengandung konten asusila |
| **Pasal 26 UU ITE** | Menyebarkan informasi (video) pribadi tanpa persetujuan H |
| **UU PDP** | Video = data pribadi (biometrik wajah) yang disebarkan tanpa consent |
| **UU 35/2014 tentang Perlindungan Anak** | Jika H masih di bawah 18 tahun, ada pemberatan |

**Aspek Khusus (Pelaku Anak):**
- G berusia 17 tahun → termasuk **anak** menurut UU 11/2012 tentang Sistem Peradilan Pidana Anak
- Proses hukum mengutamakan **diversi** (penyelesaian di luar peradilan)
- Hukuman penjara = **ultimum remedium** (pilihan terakhir)
- Maksimal hukuman = **1/2 dari maksimal dewasa**

---

### Soal 29 — Kasus Karyawan Internal

**Skenario (Kasus UTS):** Si A bekerja sebagai IT staff di perusahaan. A masih memiliki akses meski sudah resign. A mengcopy data dan mempublikasikannya, menyatakan "Perusahaan X bocor". Perusahaan mengalami kerugian.

**Pertanyaan:** Jelaskan secara komprehensif semua aspek hukum kasus ini!

### ✅ Jawaban:

**I. PELANGGARAN A:**

| Regulasi | Pasal | Penerapan |
|----------|-------|-----------|
| **UU ITE** | Pasal 30 (1) | Akses **tanpa hak** — sudah resign |
| **UU ITE** | Pasal 30 (2) | Tujuan **memperoleh data** |
| **UU ITE** | Pasal 32 (2) | **Memindahkan** data ke sistem lain |
| **UU ITE** | Pasal 36 | Mengakibatkan **kerugian** |
| **UU PDP** | Pasal 65 | Mengungkapkan data pribadi secara ilegal |
| **KUHP** | Pasal 322 | Membocorkan **rahasia jabatan** |

**II. KELALAIAN PERUSAHAAN:**
- Tidak mencabut akses A setelah resign (melanggar PP 71/2019 tentang kewajiban keamanan PSE)
- Tidak memiliki proper offboarding procedure
- Namun: kelalaian perusahaan TIDAK menghapus pertanggungjawaban pidana A

**III. UPAYA HUKUM PERUSAHAAN:**

| Jalur | Tindakan |
|-------|----------|
| **Pidana** | Laporan polisi → digital forensic → dakwaan UU ITE |
| **Perdata** | Gugatan PMH → ganti rugi materiil + imateriil |
| **Administratif** | Laporan Kominfo (takedown konten), laporan BSSN, notifikasi breach ke subjek data |

---

### Soal 30 — Kasus Komprehensif: Social Engineering

**Skenario:** I berpura-pura menjadi petugas Bank BNI melalui telepon. I mengatakan bahwa rekening J ada masalah dan meminta J memberikan OTP yang dikirim via SMS. J memberikan OTP tersebut. I menggunakan OTP untuk mentransfer Rp50 juta dari rekening J.

**Pertanyaan:** 
(a) Pasal apa yang dilanggar I?
(b) Apakah J ikut bertanggung jawab?
(c) Apa tanggung jawab bank?

### ✅ Jawaban:

**(a) Pasal yang Dilanggar I:**

| Pasal | Penerapan |
|-------|-----------|
| **Pasal 35 UU ITE** | Manipulasi informasi (berpura-pura jadi petugas bank) |
| **Pasal 36 UU ITE** | Mengakibatkan kerugian Rp50 juta |
| **Pasal 28 ayat (1) UU ITE** | Menyebarkan berita bohong (mengaku petugas bank) |
| **Pasal 30 ayat (2) UU ITE** | Memperoleh akses ke rekening J menggunakan OTP |
| **Pasal 65 UU PDP** | Menggunakan data pribadi J (OTP, rekening) secara ilegal |
| **KUHP Pasal 378** | Penipuan klasik |
| **KUHP Pasal 363** | Pencurian dengan tipu daya |

**(b) Tanggung Jawab J:**
- J **TIDAK** bertanggung jawab secara pidana — J adalah **korban** social engineering
- Namun, J mungkin dianggap **berkontribusi terhadap kerugiannya** (contributory negligence) dalam konteks perdata
- Bank biasanya memiliki disclaimer bahwa nasabah tidak boleh memberikan OTP

**(c) Tanggung Jawab Bank:**
- Bank wajib menerapkan **security measures** yang memadai (PP 71/2019)
- Bank wajib **mengedukasi nasabah** tentang risiko social engineering
- Bank bisa dimintai pertanggungjawaban jika **sistem keamanannya** tidak memadai
- Bank wajib membantu proses **investigasi dan pemblokiran rekening** pelaku
- Berdasarkan POJK, bank wajib memiliki **customer complaint handling mechanism**

---

# 📌 TIPS MENJAWAB SOAL UTS CYBER LAW

| Tips | Detail |
|------|--------|
| **Selalu sebutkan pasal** | Jawaban tanpa menyebut pasal = kurang lengkap |
| **Gunakan terminologi hukum** | "tanpa hak", "melawan hukum", "mengakibatkan kerugian" |
| **Analisis multi-aspek** | Pidana + Perdata + Administratif |
| **Sertakan sanksi** | Setiap pasal ada sanksinya — sebutkan! |
| **Hubungkan dengan fakta** | Setiap fakta harus dikaitkan dengan pasal spesifik |
| **Berikan contoh** | Terutama untuk soal tentang keseimbangan hak |

---

> 📝 *30 Soal Latihan + Pembahasan Lengkap — UTS Cyber Law*  
> *StudyHub — Portal Materi Semester 4 — BINUS Cyber Security*  
> *Last Updated: April 2026*
