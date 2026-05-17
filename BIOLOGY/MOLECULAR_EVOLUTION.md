# 🧬 MATERI MOLECULAR EVOLUTION

> **Mata Kuliah:** Computational Biology (SCIE6062001)
> **Program Studi:** Cyber Security — BINUS University
> **Semester:** 4 | Tahun Akademik 2025/2026
> **Dosen:** Asysta Amalia Pasaribu, S.Si., M.Si.
> **Departemen:** Statistics, School of Computer Science, Binus University

---

## 📋 DAFTAR ISI

1. [Sejarah Kehidupan di Bumi](#1-sejarah-kehidupan-di-bumi)
2. [Teori Evolusi](#2-teori-evolusi)
3. [Filogenika & Pohon Filogenetik](#3-filogenika--pohon-filogenetik)
4. [Seleksi Penanda Molekuler](#4-seleksi-penanda-molekuler)
5. [Penyelarasan Urutan Berganda](#5-penyelarasan-urutan-berganda)
6. [Model Evolusi](#6-model-evolusi)
7. [Konstruksi Pohon Filogenetik (UPGMA)](#7-konstruksi-pohon-filogenetik-upgma)
8. [Contoh Soal UPGMA](#8-contoh-soal-upgma)

---

# 1. SEJARAH KEHIDUPAN DI BUMI

## 1.1 Asal Usul Kehidupan

Para ilmuwan mengusulkan skenario bahwa kehidupan di bumi berasal dari mikroorganisme yang hidup **3,5 miliar tahun yang lalu**. Proses kimia dan fisika menghasilkan sel-sel sederhana melalui **empat tahap utama**:

| Tahap | Deskripsi |
|-------|-----------|
| **1. Sintesis Abiotik** | Pembentukan non-hidup molekul organik kecil (asam amino, basa nitrogen) |
| **2. Penggabungan Makromolekul** | Molekul kecil bergabung membentuk protein dan asam nukleat |
| **3. Pembentukan Protocel** | Pengemasan molekul ke dalam protocel (tetesan bermembran) |
| **4. Replikasi Diri** | Munculnya molekul yang dapat mereplikasi diri → pewarisan sifat |

### Key Evolutionary Events:
- **Revolusi Oksigen** — fotosintesis menghasilkan O₂ bebas
- **Asal usul Eukariota** — organisme bersel dengan nukleus
- **Organisme Multiseluler Pertama**
- **Kolonisasi Daratan oleh Eukariota Besar**
- **Asal Usul Tetrapoda** (vertebrata berkaki empat)
- **Kepunahan Massal Permian**

---

## 1.2 Sintesis Abiotik Makromolekul

Molekul organik kecil saja tidak cukup untuk munculnya kehidupan. Diperlukan **makromolekul** (enzim, protein, asam nukleat) untuk replikasi diri.

**Pencapaian ilmiah penting:**
- Studi **2016**: Sintesis abiotik basa purin RNA (Adenin & Guanin) dapat terjadi secara spontan dari prekursor sederhana
- Studi **2009**: Sintesis basa Sitosin (C) dan Urasil (U) berhasil dilakukan

---

## 1.3 Protocells (Protosel)

**Syarat dasar organisme hidup:**
- Mampu melakukan **reproduksi**
- Mampu melakukan **metabolisme (pengolahan energi)**

**Vesikel abiotik** — kompartemen berisi cairan yang dikelilingi struktur mirip membran — dapat menunjukkan:
- Reproduksi dan metabolisme sederhana
- Pemeliharaan lingkungan kimia internal yang berbeda dari lingkungan sekitar

> **Catatan:** Vesikel dapat terbentuk secara spontan ketika **lipid** atau molekul organik lainnya ditambahkan ke air.

---

## 1.4 Self-Replicating RNA (RNA yang Mereplikasi Diri)

Materi genetik pertama kemungkinan besar adalah **RNA** (bukan DNA).

**Alasan RNA dipilih sebagai "kandidat pertama":**
1. RNA memainkan **peran sentral** dalam sintesis protein
2. RNA dapat berfungsi sebagai **katalis** seperti enzim (**Ribozim**)
3. RNA untai tunggal memiliki **bentuk 3D spesifik** berdasarkan urutan nukleotida

**Proses evolusi awal:**
```
RNA katalitik dalam protosel → Dapat mereplikasi diri
         ↓
Tumbuh, membelah, meneruskan RNA ke "anak"
         ↓
RNA menyediakan template untuk DNA
         ↓
DNA untai ganda (lebih stabil) = tempat penyimpanan informasi genetik
```

---

## 1.5 Sejarah Geologi Bumi

### Pembagian Era Geologi:

| Eon | Durasi | Peristiwa Utama |
|-----|--------|-----------------|
| **Hadean** | ~4 miliar tahun lalu | Bumi terbentuk |
| **Archean** | 3.5–2.5 miliar tahun lalu | Prokariota pertama, stromatolit |
| **Proterozoikum** | 2.5 miliar–538 juta tahun lalu | Revolusi oksigen, eukariota awal |
| **Fanerozoikum** | ~538 juta tahun lalu–sekarang | Era hewan multiseluler |

### Eon Fanerozoikum dibagi menjadi 3 era:
- **Paleozoikum** — Ledakan Kambrium, hewan pertama di daratan
- **Mesozoikum** — Era dinosaurus
- **Senozoikum** — Era mamalia (saat ini)

---

## 1.6 Organisme Bersel Satu Pertama

**Bukti paling awal:** Stromatolit fosil dari **3,5 miliar tahun lalu** — batuan berlapis yang terbentuk dari prokariota yang mengikat lapisan sedimen.

### Revolusi Fotosintesis & Oksigen:
Ketika fotosintesis oksigenik pertama berevolusi (pada prokariota mirip **sianobakteri**):
1. O₂ bebas dihasilkan dan larut di air
2. O₂ bereaksi dengan unsur-unsur terlarut
3. O₂ "menguap" dan memasuki atmosfer
4. **"Revolusi Oksigen"** → dampak besar pada kehidupan (beberapa organisme mati, sebagian beradaptasi)

---

## 1.7 Eukariota Pertama & Endosimbiosis

Sel eukariotik memiliki organisasi **lebih kompleks** dari prokariotik:

| Sel Prokariotik | Sel Eukariotik |
|-----------------|----------------|
| Tidak memiliki selubung nuklir | Memiliki selubung nuklir |
| Tidak memiliki mitokondria | Memiliki mitokondria |
| Tidak memiliki RE | Memiliki retikulum endoplasma |

**Teori Endosimbiosis:** Organisme anaerob mendapat manfaat dari **endosimbion** yang bisa memanfaatkan oksigen (cikal bakal mitokondria dan kloroplas).

---

## 1.8 Ledakan Kambrium

> "Banyak filum hewan masa kini tiba-tiba muncul dalam fosil yang terbentuk **535–525 juta tahun yang lalu**."

**Fenomena ini disebut Ledakan Kambrium.**

- Spons, cnidaria (anemon laut), moluska (siput, kerang) sudah muncul di akhir Proterozoikum
- Hewan berasal sekitar **700 juta tahun lalu**, tetap kecil selama >100 juta tahun
- Diversifikasi **eksplosif** terjadi di periode Kambrium

---

# 2. TEORI EVOLUSI

## 2.1 Definisi Evolusi Biologis

> **Evolusi biologis** secara sederhana didefinisikan sebagai **keturunan dengan modifikasi**.

**Skala Modifikasi:**
| Skala | Contoh |
|-------|--------|
| **Berskala kecil** | Perubahan dalam urutan gen/protein |
| **Berskala besar** | Spesiasi (terbentuknya spesies baru) |

Setelah kehidupan muncul sekitar **3,6 miliar tahun lalu**, kehidupan berevolusi — semua organisme hidup saat ini merupakan keturunan dari nenek moyang yang sama.

---

# 3. FILOGENIKA & POHON FILOGENETIK

## 3.1 Pengertian Filogenika

**Filogenetika** adalah studi tentang **filogeni** — studi tentang hubungan evolusi di antara berbagai organisme dan populasi.

**Prinsip dasar:**
- Kesamaan antar organisme disebabkan oleh **keturunan dari nenek moyang yang sama**
- Informasi **urutan DNA** dan protein digunakan untuk merekonstruksi sejarah evolusi

---

## 3.2 Pohon Filogenetik

**Pohon filogenetik** (pohon evolusi / kladogram / dendrogram) adalah **representasi diagramatik** dari hubungan evolusi antar berbagai takson.

### Komponen Pohon Filogenetik:

| Komponen | Definisi |
|----------|----------|
| **Node (Simpul)** | Titik percabangan → mewakili nenek moyang bersama |
| **Cabang (Branch)** | Garis penghubung antara dua simpul |
| **Terminal Node (Daun)** | Unit Taksonomi Operasional (OTU) — ujung percabangan |
| **Topologi** | Pola percabangan pohon secara keseluruhan |

### OTU (Operational Taxonomic Unit):
- Objek aktual yang dibandingkan
- Dapat berupa: **spesies, populasi, atau sekuens gen**

---

## 3.3 Asumsi di Balik Pohon Filogenetik

1. **Homolog** — Urutan-urutan yang dibandingkan bersifat homolog (memiliki nenek moyang yang sama)
2. **Divergensi seiring waktu** — Urutan berevolusi dan menyimpang dari nenek moyang seiring waktu
3. **Independensi Posisi** — Setiap posisi dalam urutan berevolusi secara independen

> **Kualitas penyelarasan** sangat penting untuk rekonstruksi pohon filogenetik yang andal!

---

# 4. SELEKSI PENANDA MOLEKULER

## 4.1 Penanda Molekuler dalam Filogenetik

**Penanda molekuler** adalah informasi biologis yang digunakan untuk menyimpulkan hubungan evolusi antar taksa.

### Protein vs Asam Nukleat:

| Aspek | Sekuens Protein | Sekuens Asam Nukleat |
|-------|-----------------|----------------------|
| **Keadaan karakter** | Lebih banyak (20 asam amino) | Lebih sedikit (4 nukleotida) |
| **Saturasi** | Lebih lambat mencapai saturasi | Lebih cepat jenuh |
| **Informasi** | Lebih kaya informasi filogenetik | Dapat kehilangan sinyal untuk organisme jauh |

> **Rekomendasi:** Saat menggunakan sekuens pengkodean, sebaiknya gunakan **sekuens protein** untuk merekonstruksi pohon filogenetik yang lebih andal.

---

# 5. PENYELARASAN URUTAN BERGANDA

## 5.1 Multiple Sequence Alignment (MSA)

**Penyelarasan sekuens** merupakan langkah **terpenting** dalam membangun pohon filogenetik yang dapat diandalkan.

### Fungsi MSA:
- Mengidentifikasi **blok residu yang terlestarikan** (conserved blocks)
- Menunjukkan posisi yang berevolusi secara konsisten

### Ciri Penyelarasan yang Baik:
- Memiliki **sedikit celah (gaps)** 
- Celah yang pendek
- Residu konservatif teridentifikasi jelas

> **Catatan:** Celah (gap) menunjukkan urutan yang diperkirakan mengalami **insersi atau delesi** selama evolusi.

---

# 6. MODEL EVOLUSI

## 6.1 Definisi Model Evolusi

> *"Model evolusi dari data sekuens adalah model substitusi nukleotida atau asam amino serta divergensi sekuens yang diakibatkannya."*

**Fungsi Model:**
- Menyederhanakan kompleksitas proses mutasi biologis
- Mengubah ke dalam pola yang dapat **dijelaskan dan diprediksi** menggunakan parameter terbatas

### Jenis Model Substitusi:

| Model | Deskripsi | Kompleksitas |
|-------|-----------|--------------|
| **JC69 (Jukes-Cantor)** | Semua substitusi memiliki probabilitas sama | Sederhana |
| **K80 (Kimura 2-parameter)** | Membedakan transisi dan transversi | Menengah |
| **HKY85** | Frekuensi basa berbeda + transisi/transversi | Lebih kompleks |
| **GTR (General Time Reversible)** | Parameter paling lengkap | Paling kompleks |

---

# 7. KONSTRUKSI POHON FILOGENETIK (UPGMA)

## 7.1 Metode Pembangunan Pohon Filogenetik

Metode untuk membangun pohon filogenetik diklasifikasikan menjadi **dua jenis utama**:

### A. Distance-Based (Berbasis Jarak)
- **UPGMA** (Unweighted Pair Group Method with Arithmetic Mean)
- **Neighbor-Joining (NJ)**

### B. Character-Based (Berbasis Karakter)
- **Maximum Parsimony (MP)**
- **Maximum Likelihood (ML)**
- **Bayesian Inference**

---

## 7.2 UPGMA (Unweighted Pair Group Method with Arithmetic Mean)

**UPGMA** adalah metode berbasis jarak yang paling sederhana untuk membangun pohon filogenetik.

### Langkah-Langkah UPGMA:

| Langkah | Deskripsi |
|---------|-----------|
| **1. Align** | Sejajarkan dan beri nama sekuens |
| **2. Compare** | Bandingkan sekuens menggunakan pairwise alignment |
| **3. Count Mismatch** | Hitung jumlah mismatch dan catat dalam tabel matriks |
| **4. Complete Matrix** | Lengkapi tabel dengan membandingkan semua sekuens |
| **5. Find Lowest** | Cari nilai terendah untuk menentukan grup pertama |
| **6. Arithmetic Mean** | Hitung rata-rata aritmatika step by step dan bangun pohon |

---

### Aturan Penting UPGMA:
1. Nilai terendah → dua sekuens yang **paling baru berdivergensi** (paling dekat hubungannya)
2. Setelah grup pertama ditentukan, **matriks diperbarui**
3. Kelompok baru diperlakukan sebagai satu entitas dengan nilai rata-rata
4. Proses diulang hingga semua sekuens tergabung

---

# 8. CONTOH SOAL UPGMA

## 8.1 Soal: Bangun Pohon Filogenetik dari 5 Sekuens

**Diketahui 5 sekuens DNA (A, B, C, D, E):**

```
A : ATCGATCG
B : GTAGACGA
C : ACCGTACG
D : TCAGTCAG
E : GCCTACAG
```

---

## 8.2 Langkah 1: Hitung Mismatch Pairwise

### Pasangan A vs B:
```
A : A T C G A T C G
B : G T A G A C G A
      ✓ ✗ ✗ ✓ ✗ ✗ ✗
Mismatch = 5
```

### Pasangan A vs C:
```
A : A T C G A T C G
C : A C C G T A C G
      ✓ ✗ ✓ ✓ ✗ ✗ ✓ ✓
Mismatch = 3
```

### Matriks Jarak Lengkap:

|   | A | B | C | D | E |
|---|---|---|---|---|---|
| **A** | 0 | 5 | 3 | 6 | 6 |
| **B** | 5 | 0 | 6 | 5 | 5.5 |
| **C** | 3 | 6 | 0 | 7 | 5 |
| **D** | 6 | 5 | 7 | 0 | 5 |
| **E** | 6 | 5.5 | 5 | 5 | 0 |

---

## 8.3 Langkah 2: Temukan Nilai Terendah → Grup Pertama

**Nilai terendah = 3** (pasangan **A dan C**)

→ **A dan C** adalah yang **paling berdekatan** (paling baru berdivergensi)
→ A dan C dikelompokkan menjadi **(AC)**

---

## 8.4 Langkah 3: Update Matriks (AC sebagai satu unit)

Nilai baru dihitung dengan **rata-rata aritmatika**:

```
(AC) vs B = (A-B + C-B) / 2 = (5 + 6) / 2 = 5.5
(AC) vs D = (A-D + C-D) / 2 = (6 + 7) / 2 = 6.5
(AC) vs E = (A-E + C-E) / 2 = (6 + 5) / 2 = 5.5
```

### Matriks Baru:

|      | (AC) | B | D | E |
|------|------|---|---|---|
| **(AC)** | 0 | 5.5 | 6.5 | 5.5 |
| **B**    | 5.5 | 0 | 5 | 5.5 |
| **D**    | 6.5 | 5 | 0 | 5 |
| **E**    | 5.5 | 5.5 | 5 | 0 |

---

## 8.5 Langkah 4: Temukan Nilai Terendah Berikutnya

**Nilai terendah = 5** (pasangan **D dan E**)

→ **D dan E** dikelompokkan menjadi **(DE)**

---

## 8.6 Langkah 5: Update Matriks Lagi

```
(DE) vs (AC) = (D-AC + E-AC) / 2 = (6.5 + 5.5) / 2 = 6
(DE) vs B    = (D-B + E-B) / 2   = (5 + 5.5) / 2   = 5.25
```

### Matriks Baru:

|       | (AC) | (DE) | B |
|-------|------|------|---|
| **(AC)**  | 0 | 6 | 5.5 |
| **(DE)**  | 6 | 0 | 5.25 |
| **B**     | 5.5 | 5.25 | 0 |

---

## 8.7 Langkah 6: Finalkan Pohon

**Nilai terendah = 5.25** (B terhadap **DE**), lalu gabungkan semua.

> B memiliki nilai 6 terhadap AC dan 5.25 terhadap DE  
> → B **lebih dekat** ke (DE) daripada ke (AC)

### Pohon Filogenetik Final:

```
         ┌── A
      ┌──┤
      │  └── C
──────┤
      │     ┌── E
      │  ┌──┤
      └──┤  └── D
         │
         └── B
```

---

## 8.8 Interpretasi Hasil

| Hubungan | Makna |
|----------|-------|
| **A dan C** paling dekat | A dan C berdivergensi paling baru, paling banyak kesamaan |
| **E dan D** sangat dekat | E dan D adalah pasangan kedua terdekat |
| **B** lebih dekat ke (ED) dari (AC) | B memiliki lebih banyak kesamaan dengan E dan D daripada dengan A dan C |

> **Kesimpulan:** Pohon filogenetik menunjukkan bahwa A-C adalah pasangan paling berkerabat, diikuti E-D, sedangkan B merupakan outgroup terdekat dari grup E-D.

---

# 📌 RINGKASAN MATERI

| No | Topik | Konsep Kunci |
|----|-------|--------------|
| 1 | **Asal Usul Kehidupan** | 4 tahap: Sintesis Abiotik → Makromolekul → Protocel → RNA replikasi diri |
| 2 | **Revolusi Oksigen** | Fotosintesis sianobakteri → O₂ bebas → dampak besar pada kehidupan |
| 3 | **Eukariota** | Endosimbiosis → mitokondria & kloroplas berasal dari prokariot simbiosis |
| 4 | **Ledakan Kambrium** | 535-525 juta tahun lalu → diversifikasi hewan secara eksplosif |
| 5 | **Teori Evolusi** | Keturunan dengan modifikasi — skala kecil (gen) hingga besar (spesiasi) |
| 6 | **Pohon Filogenetik** | Diagram hubungan evolusi — node, cabang, OTU, topologi |
| 7 | **Penanda Molekuler** | Protein lebih baik dari DNA untuk filogenetik organisme jauh |
| 8 | **Model Evolusi** | JC69, K80, HKY85, GTR — menyederhanakan pola substitusi |
| 9 | **UPGMA** | Metode distance-based: cari mismatch → matriks → nilai terkecil → grup → rata-rata |

---

## 💡 Contoh Soal Cepat

**Soal:** Diberikan 3 sekuens:
```
X : ATCG
Y : ATGG
Z : GCGG
```
Tentukan pasangan yang paling berkerabat!

**Jawaban:**
```
X vs Y: mismatch = 1 (posisi ke-3: C→G)
X vs Z: mismatch = 2 (posisi ke-1: A→G, posisi ke-3: C→G)
Y vs Z: mismatch = 1 (posisi ke-1: A→G)

Pasangan X-Y dan Y-Z masing-masing memiliki mismatch = 1
→ X dan Y paling berkerabat (atau Y dan Z sama dekatnya)
→ Dalam UPGMA, keduanya akan dikelompokkan pertama
```

---

> 📚 **Referensi:**
> - Lisa A. Urry, Michael L. Cain, et al. *Campbell Biology 12th Edition*, Pearson (Chapter 4)
> - Choudhuri, S. (2014). *Bioinformatics for Beginners: Genes, Genomes, Molecular Evolution, Databases and Analytical Tools*. Elsevier. ISBN 978-0124104716 (Chapter 8)

---

*📘 StudyHub — Portal Materi Semester 4 — BINUS Cyber Security*  
*Materi: Molecular Evolution | Last Updated: May 2026*
