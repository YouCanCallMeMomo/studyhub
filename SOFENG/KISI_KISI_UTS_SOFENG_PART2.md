# SOAL 2 (15%) — Design Concepts & Requirements Engineering

---

## 2.1 Design Concepts

### Apa itu Software Design?
Proses **mentranslasikan requirements menjadi representasi software** yang bisa dikonstruksi. Design mencakup:
- **Data/Class Design** — transformasi model analisis menjadi class dan data structures
- **Architectural Design** — struktur keseluruhan sistem
- **Interface Design** — komunikasi antar komponen, user, dan sistem eksternal
- **Component-level Design** — detail prosedural setiap komponen

### Prinsip-Prinsip Design Fundamental

#### 1. Abstraction
- **Procedural Abstraction**: menyembunyikan detail langkah-langkah dalam sebuah named function
  - Contoh: `openDoor()` — tidak perlu tahu mekanismenya
- **Data Abstraction**: menyembunyikan detail data di balik interface
  - Contoh: class `Door` dengan atribut dan method, tanpa perlu tahu representasi internal

#### 2. Modularity
Membagi software menjadi **modul-modul** yang:
- Independently addressable (bisa diakses sendiri)
- Setiap modul punya fungsi tertentu
- **Optimal number of modules**: tidak terlalu sedikit (terlalu kompleks) dan tidak terlalu banyak (integration cost tinggi)

#### 3. Information Hiding
Setiap modul menyembunyikan **internal details** dari modul lain:
- Modul hanya diakses melalui **well-defined interface**
- Mengurangi side effects saat modifikasi
- Contoh: private attributes dalam class, hanya diakses via getter/setter

#### 4. Separation of Concerns
- Membagi masalah besar menjadi **sub-masalah yang lebih kecil**
- Setiap concern ditangani secara independen
- Hasil: complexity lebih manageable, easier maintenance

#### 5. Coupling & Cohesion

**Cohesion** (seberapa erat hubungan elemen **dalam** satu modul):
| Level | Tipe | Keterangan | Kualitas |
|-------|------|------------|----------|
| Tinggi | Functional | Semua elemen berkontribusi pada satu fungsi | ✅ Terbaik |
| | Sequential | Output satu elemen = input elemen berikutnya | ✅ Baik |
| | Communicational | Elemen beroperasi pada data yang sama | ✅ Baik |
| | Procedural | Elemen harus dieksekusi dalam urutan tertentu | ⚠️ Cukup |
| | Temporal | Elemen dikelompokkan karena dieksekusi di waktu sama | ⚠️ Cukup |
| | Logical | Elemen melakukan hal serupa tapi berbeda logika | ❌ Buruk |
| Rendah | Coincidental | Elemen tidak berhubungan sama sekali | ❌ Terburuk |

**Coupling** (seberapa erat ketergantungan **antar** modul):
| Level | Tipe | Keterangan | Kualitas |
|-------|------|------------|----------|
| Rendah | Data | Komunikasi melalui parameter data sederhana | ✅ Terbaik |
| | Stamp | Komunikasi melalui data structure | ✅ Baik |
| | Control | Satu modul mengirim flag/control ke modul lain | ⚠️ Cukup |
| | External | Modul terkait pada format data/protokol eksternal | ⚠️ Cukup |
| | Common | Modul berbagi global data | ❌ Buruk |
| Tinggi | Content | Satu modul langsung modifikasi isi modul lain | ❌ Terburuk |

> **Prinsip**: High Cohesion + Low Coupling = Good Design ✅

#### 6. Refactoring
- Mengubah struktur internal software **tanpa mengubah external behavior**
- Tujuan: simplify design, reduce complexity, improve readability
- Contoh: extract method, rename variable, decompose conditional

#### 7. Design Patterns
Solusi terbukti untuk masalah desain yang berulang:
- **Creational**: Singleton, Factory, Builder
- **Structural**: Adapter, Facade, Decorator
- **Behavioral**: Observer, Strategy, Command

---

## 2.2 Requirements Engineering

### Apa itu Requirements Engineering?
Proses **menentukan, mendokumentasikan, dan memelihara requirements** untuk sistem software.

### 7 Langkah Requirements Engineering

#### 1. Inception (Permulaan)
- Identifikasi stakeholders
- Establish basic understanding of the problem
- Pertanyaan kunci: Siapa yang membutuhkan? Siapa yang akan menggunakan?

#### 2. Elicitation (Pengumpulan)
- **Menggali requirements** dari stakeholders
- Teknik: interviews, questionnaires, observation, workshops, brainstorming, prototyping
- **Tantangan**: 
  - Scope problem (boundary tidak jelas)
  - Understanding problem (customer tidak yakin apa yang diinginkan)
  - Volatility problem (requirements berubah-ubah)

#### 3. Elaboration (Pengembangan)
- Memperluas dan memperinci requirements yang sudah dikumpulkan
- Membuat analysis model
- Identifikasi data objects, relationships, functions

#### 4. Negotiation (Negosiasi)
- Menyelesaikan **konflik** antar stakeholders
- Prioritaskan requirements
- Assess cost-benefit setiap requirement
- Teknik: win-win approach

#### 5. Specification (Spesifikasi)
- **Mendokumentasikan** requirements secara formal
- Bisa berupa: written document, graphical models, use cases, user stories, mathematical specification
- **SRS (Software Requirements Specification)** — dokumen formal requirement

#### 6. Validation (Validasi)
- Memeriksa apakah requirements **benar dan lengkap**
- Review: consistency, completeness, ambiguity, correctness
- Teknik: requirements review, prototyping, test-case generation

#### 7. Management (Pengelolaan)
- **Mengelola perubahan** requirements sepanjang proyek
- Requirements traceability
- Change control process

### Tipe Requirements

**Functional Requirements:**
- Apa yang sistem **harus lakukan**
- Contoh: "Sistem harus memungkinkan user untuk login menggunakan email dan password"

**Non-Functional Requirements:**
- **Kualitas** dan **constraint** sistem
- Kategori (FURPS+):
  - **Performance**: response time < 2 detik
  - **Security**: data terenkripsi AES-256
  - **Usability**: user baru bisa menggunakan dalam 10 menit
  - **Reliability**: uptime 99.9%
  - **Scalability**: support 10.000 concurrent users

---

## CONTOH SOAL & JAWABAN — SOAL 2

### Case Study:
> Sebuah rumah sakit ingin membangun **Sistem Informasi Rekam Medis Elektronik (SIRME)**. Sistem ini harus digunakan oleh dokter, perawat, dan admin. Data pasien sangat sensitif. Stakeholder utama adalah Direktur RS, Kepala IT, dan perwakilan dokter & perawat. Saat ini, proses rekam medis masih manual menggunakan kertas.

**Pertanyaan:**
1. Lakukan requirements elicitation: identifikasi minimal 5 functional dan 3 non-functional requirements! (7 poin)
2. Jelaskan bagaimana design concept "Information Hiding" dan "Separation of Concerns" diterapkan dalam SIRME! (8 poin)

**Jawaban:**

**1. Requirements Elicitation:**

**Functional Requirements:**
1. Sistem harus memungkinkan dokter **mencatat diagnosis dan resep** pasien secara digital
2. Sistem harus memungkinkan perawat **mencatat vital signs** (tekanan darah, suhu, nadi) pasien
3. Sistem harus memungkinkan admin **mendaftarkan pasien baru** dan mengelola jadwal dokter
4. Sistem harus menyediakan **riwayat medis lengkap** pasien yang bisa diakses oleh dokter yang berwenang
5. Sistem harus memungkinkan **pencetakan resep otomatis** berdasarkan input dokter

**Non-Functional Requirements:**
1. **Security**: Data rekam medis harus terenkripsi (AES-256) dan setiap akses harus dicatat dalam audit log (karena data pasien sangat sensitif)
2. **Performance**: Response time untuk pencarian data pasien harus < 3 detik, bahkan untuk database 100.000+ pasien
3. **Usability**: Interface harus cukup intuitif sehingga dokter dan perawat yang minim pengalaman IT dapat menggunakan sistem dalam 30 menit training

**2. Penerapan Design Concepts:**

**Information Hiding pada SIRME:**
- **Modul Autentikasi**: menyembunyikan algoritma enkripsi password dan logika role-based access control. Modul lain hanya memanggil `authenticate(username, password)` tanpa tahu detail proses verifikasi
- **Modul Rekam Medis**: menyembunyikan detail penyimpanan data (apakah SQL, NoSQL, atau encrypted storage). Modul lain mengakses melalui interface `getPatientRecord(patientId)` 
- **Manfaat**: Jika algoritma enkripsi perlu diubah dari AES-128 ke AES-256, hanya modul autentikasi yang dimodifikasi, tanpa memengaruhi modul lain

**Separation of Concerns pada SIRME:**
- **Concern 1 - Patient Management**: Pendaftaran, data demografis, jadwal → ditangani modul Patient
- **Concern 2 - Clinical Records**: Diagnosis, resep, vital signs → ditangani modul Clinical
- **Concern 3 - Authentication & Authorization**: Login, role management → ditangani modul Security
- **Concern 4 - Reporting**: Laporan statistik, audit trail → ditangani modul Report
- Setiap concern bisa dikembangkan, ditest, dan dimaintain **secara independen**
