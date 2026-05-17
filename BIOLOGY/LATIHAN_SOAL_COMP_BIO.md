# 📝 LATIHAN SOAL & PEMBAHASAN — UTS COMPUTATIONAL BIOLOGY

> **Mata Kuliah:** Computational Biology  
> **Program Studi:** Cyber Security — BINUS University  
> **Semester:** 4 | Tahun Akademik 2025/2026  
> **Total Soal:** 50 Soal (Essay + Pilihan Ganda + Studi Kasus)

---

## 📋 DISTRIBUSI SOAL

| Topik | Jumlah Soal | Bobot |
|-------|-------------|-------|
| Central Dogma (Transkripsi & Translasi) | 15 Soal | 40% |
| Mutasi (Silent, Missense, Nonsense) | 10 Soal | 25% |
| Gene Structure & DNA (Exon, Intron) | 5 Soal | 10% |
| Organization of Living Life | 5 Soal | 10% |
| NCBI & Bioinformatics | 8 Soal | 10% |
| Application of Biotechnology | 7 Soal | 5% |

---

# 🧬 BAGIAN 1: CENTRAL DOGMA (15 Soal)

---

### Soal 1 — Transkripsi Dasar

Diberikan **template strand DNA** berikut:

```
3' - TAC GGA CTC ACT - 5'
```

**Pertanyaan:** Tentukan urutan mRNA yang dihasilkan dari proses transkripsi!

### ✅ Jawaban:

```
Template strand (3'→5'):  3' - TAC GGA CTC ACT - 5'
mRNA (5'→3'):             5' - AUG CCU GAG UGA - 3'

Aturan pasangan basa DNA → mRNA:
T → A, A → U, C → G, G → C

Hasil mRNA: 5' - AUG CCU GAG UGA - 3'
```

---

### Soal 2 — Translasi Lengkap

Dari mRNA pada Soal 1, tentukan:
- (a) Kodon-kodon yang terbentuk
- (b) Asam amino yang dihasilkan
- (c) Apakah ada stop codon?

### ✅ Jawaban:

```
mRNA: 5' - AUG CCU GAG UGA - 3'

(a) Kodon:
    AUG | CCU | GAG | UGA

(b) Asam amino:
    AUG = Methionine (Met) — Start Codon
    CCU = Proline (Pro)
    GAG = Glutamic Acid (Glu)
    UGA = STOP (Opal)

(c) Ya, UGA merupakan stop codon.

Protein yang dihasilkan: Met-Pro-Glu (3 asam amino)
```

---

### Soal 3 — Identifikasi Strand

Diberikan double-stranded DNA:

```
Strand A: 5' - ATG CCA GGT TAA - 3'
Strand B: 3' - TAC GGT CCA ATT - 5'
```

**Pertanyaan:** Manakah yang merupakan template strand dan coding strand? Jelaskan!

### ✅ Jawaban:

```
Strand B (3'→5') = TEMPLATE STRAND
→ Karena RNA Polymerase membaca template dari arah 3' → 5'

Strand A (5'→3') = CODING STRAND
→ Karena urutannya IDENTIK dengan mRNA (hanya T diganti U)

Bukti:
Template (Strand B): 3' - TAC GGT CCA ATT - 5'
mRNA:                5' - AUG CCA GGU UAA - 3'
Coding (Strand A):   5' - ATG CCA GGT TAA - 3'

mRNA = Coding strand, tapi T → U ✓
```

---

### Soal 4 — Transkripsi dan Translasi Panjang

Diberikan template strand DNA:

```
3' - TAC AAG CTA GGG ACT CGA ACA ATT - 5'
```

Tentukan: (a) mRNA, (b) protein yang dihasilkan

### ✅ Jawaban:

```
(a) mRNA (5'→3'):
    5' - AUG UUC GAU CCC UGA GCU UGU UAA - 3'

(b) Kodon dan asam amino:
    AUG = Met (Start)
    UUC = Phe (Phenylalanine)
    GAU = Asp (Aspartic Acid)
    CCC = Pro (Proline)
    UGA = STOP

Translasi berhenti di UGA (stop codon).
Protein: Met-Phe-Asp-Pro (4 asam amino)

Catatan: Kodon GCU, UGU, UAA setelah stop codon TIDAK ditranslasi.
```

---

### Soal 5 — Proses Central Dogma

Jelaskan secara urut proses Central Dogma mulai dari DNA hingga terbentuknya protein, termasuk:
- Enzim yang berperan
- Lokasi setiap proses dalam sel
- Perbedaan antara template strand dan coding strand

### ✅ Jawaban:

**1. REPLIKASI (DNA → DNA)**
- **Lokasi:** Nukleus
- **Enzim:** Helicase (membuka helix), Primase (membuat primer), DNA Polymerase III (menambah nukleotida), Ligase (menyambung fragmen Okazaki)
- **Tujuan:** Memperbanyak DNA sebelum sel membelah

**2. TRANSKRIPSI (DNA → mRNA)**
- **Lokasi:** Nukleus
- **Enzim:** RNA Polymerase
- **Template strand** (antisense) = untai yang dibaca oleh RNA Polymerase (arah 3'→5')
- **Coding strand** (sense) = untai yang urutannya identik dengan mRNA (hanya T→U)
- **Proses:** RNA Polymerase membaca template strand, mRNA disintesis arah 5'→3'

**3. RNA PROCESSING (Pre-mRNA → Mature mRNA)**
- **Lokasi:** Nukleus
- **Proses:** 
  - 5' Capping (perlindungan ujung 5')
  - 3' Polyadenylation (ekor poly-A)
  - RNA Splicing (pembuangan intron oleh spliceosome)

**4. TRANSLASI (mRNA → Protein)**
- **Lokasi:** Ribosom (sitoplasma)
- **Komponen:** mRNA (kodon), tRNA (antikodon + asam amino), Ribosom (situs A, P, E)
- **Proses:** 
  - Inisiasi: AUG (start codon), Met-tRNA di situs P
  - Elongasi: tRNA baru di situs A, ikatan peptida, translokasi
  - Terminasi: Stop codon (UAA/UAG/UGA), release factor

---

### Soal 6 — Menentukan Template dari mRNA

Diketahui mRNA berikut:

```
5' - AUG GCA UUU GAC UAG - 3'
```

Tentukan urutan template strand DNA dan coding strand DNA!

### ✅ Jawaban:

```
mRNA (5'→3'):          5' - AUG GCA UUU GAC UAG - 3'

Template strand DNA:   3' - TAC CGT AAA CTG ATC - 5'
(Komplementer mRNA, U→A, A→T, G→C, C→G)

Coding strand DNA:     5' - ATG GCA TTT GAC TAG - 3'
(Identik mRNA, U→T)
```

---

### Soal 7 — Kodon Start dan Stop

Jelaskan peran kodon AUG dan stop codon (UAA, UAG, UGA) dalam translasi!

### ✅ Jawaban:

**Kodon AUG (Start Codon):**
- Mengkode **Methionine (Met)** — asam amino pertama pada setiap protein
- Berfungsi sebagai sinyal untuk **memulai translasi**
- Ribosom mencari AUG pertama pada mRNA (Kozak sequence pada eukariot)
- Met-tRNA inisiator menempati situs P ribosom

**Stop Codon (UAA, UAG, UGA):**
- **TIDAK** mengkode asam amino apapun
- Berfungsi sebagai sinyal untuk **menghentikan translasi**
- Ketika ribosom mencapai stop codon, **release factor** masuk ke situs A
- Protein dilepaskan, ribosom terdisosiasi
- UAA = Ochre, UAG = Amber, UGA = Opal

---

### Soal 8 — RNA Polymerase vs DNA Polymerase

Apa perbedaan RNA Polymerase dan DNA Polymerase?

### ✅ Jawaban:

| Aspek | RNA Polymerase | DNA Polymerase |
|-------|---------------|----------------|
| **Proses** | Transkripsi | Replikasi |
| **Template** | DNA (1 untai) | DNA (2 untai) |
| **Produk** | mRNA (single strand) | DNA (double strand) |
| **Primer** | Tidak perlu primer | Perlu RNA primer |
| **Proofreading** | Tidak ada | Ada (3'→5' exonuclease) |
| **Nukleotida** | rNTP (A, U, G, C) | dNTP (A, T, G, C) |
| **Arah sintesis** | 5' → 3' | 5' → 3' |

---

### Soal 9 — Menghitung Asam Amino

Suatu mRNA memiliki panjang 900 nukleotida (termasuk 5' UTR sepanjang 60 nt, coding region, dan 3' UTR sepanjang 90 nt). Berapa jumlah asam amino pada protein yang dihasilkan?

### ✅ Jawaban:

```
Total mRNA = 900 nt
5' UTR = 60 nt (tidak ditranslasi)
3' UTR = 90 nt (tidak ditranslasi)

Coding region = 900 - 60 - 90 = 750 nt

Jumlah kodon = 750 / 3 = 250 kodon

Dikurangi stop codon (1 kodon): 250 - 1 = 249 kodon

Jadi: 249 asam amino pada protein
(Start codon AUG tetap dihitung karena Met menjadi asam amino pertama)
```

---

### Soal 10 — Degenerasi Kode Genetik

Apa yang dimaksud dengan degenerasi kode genetik? Berikan contoh dan jelaskan signifikansinya terhadap mutasi!

### ✅ Jawaban:

**Definisi:** Degenerasi (redundansi) kode genetik berarti BEBERAPA kodon berbeda dapat mengkode ASAM AMINO yang SAMA.

**Contoh:**
```
Leucine (Leu) dikode oleh 6 kodon:
UUA, UUG, CUU, CUC, CUA, CUG

Glycine (Gly) dikode oleh 4 kodon:
GGU, GGC, GGA, GGG

Methionine (Met) hanya dikode 1 kodon:
AUG
```

**Signifikansi terhadap Mutasi:**
- Degenerasi memberikan **perlindungan** terhadap efek mutasi
- Mutasi pada posisi **ketiga kodon** (wobble position) seringkali **tidak mengubah** asam amino
- Contoh: GGU → GGC (keduanya Glycine) = **Silent mutation**
- Ini menjelaskan mengapa tidak semua mutasi menyebabkan perubahan fenotip

---

### Soal 11 — Central Dogma Reverse

Dalam kasus apa Central Dogma "dibalik"? Jelaskan!

### ✅ Jawaban:

**Reverse Transcription (RNA → DNA):**
- Terjadi pada **retrovirus** (contoh: HIV)
- Enzim: **Reverse Transcriptase**
- Virus RNA membuat salinan DNA (cDNA) dari RNA-nya
- cDNA kemudian diintegrasikan ke dalam genom inang
- Ini adalah "pengecualian" dari Central Dogma klasik

```
Central Dogma Normal:   DNA → RNA → Protein
Reverse Transcription:  RNA → DNA → RNA → Protein
```

**Replikasi RNA (RNA → RNA):**
- Terjadi pada beberapa virus RNA (Influenza, COVID-19)
- Enzim: RNA-dependent RNA Polymerase (RdRp)

---

### Soal 12 — Ribosom dan Situs-situsnya

Jelaskan fungsi situs A, P, dan E pada ribosom!

### ✅ Jawaban:

| Situs | Nama Lengkap | Fungsi |
|-------|-------------|--------|
| **A (Aminoacyl)** | Aminoacyl site | Tempat tRNA baru masuk membawa asam amino |
| **P (Peptidyl)** | Peptidyl site | Tempat tRNA yang membawa rantai polipeptida |
| **E (Exit)** | Exit site | Tempat tRNA kosong keluar dari ribosom |

```
Proses Elongasi:
1. tRNA + AA masuk ke situs A (sesuai kodon mRNA)
2. Ikatan peptida terbentuk: AA di situs P → AA di situs A
3. Translokasi: ribosom bergeser
   - tRNA dari P → E (keluar)
   - tRNA dari A → P (membawa rantai peptida)
   - Situs A kosong, siap menerima tRNA baru
```

---

### Soal 13 — Poliribosom

Apa itu poliribosom (polysome)? Apa keuntungannya?

### ✅ Jawaban:

**Poliribosom (Polysome):** adalah beberapa ribosom yang menempel pada SATU molekul mRNA secara bersamaan, masing-masing melakukan translasi secara independen.

```
5' ─── [Rib1]──[Rib2]──[Rib3]──[Rib4]──[Rib5] ─── 3'
        ↓        ↓        ↓        ↓        ↓
       (short)  (──)   (────)  (──────) (────────) ← protein

Ribosom 1 baru mulai (protein pendek)
Ribosom 5 hampir selesai (protein hampir lengkap)
```

**Keuntungan:**
- **Efisiensi** — Banyak salinan protein diproduksi dari 1 mRNA secara bersamaan
- **Kecepatan** — Produksi protein jauh lebih cepat
- **Ekonomis** — Tidak perlu banyak salinan mRNA

---

### Soal 14 — Post-Translational Modification

Sebutkan 3 modifikasi pasca-translasi yang penting dan fungsinya!

### ✅ Jawaban:

| Modifikasi | Proses | Fungsi |
|-----------|--------|--------|
| **Fosforilasi** | Penambahan gugus fosfat | Aktivasi/inaktivasi protein (signal transduction) |
| **Glikosilasi** | Penambahan gugus gula | Pelipatan protein, stabilitas, cell signaling |
| **Ubiquitinasi** | Penambahan ubiquitin | Penandaan protein untuk degradasi oleh proteasome |

Modifikasi lainnya: asetilasi, metilasi, lipidasi, proteolisis

---

### Soal 15 — Calculating Molecular Weight

Suatu protein terdiri dari 300 asam amino. Perkirakan berat molekul protein tersebut!

### ✅ Jawaban:

```
Rata-rata berat molekul 1 asam amino ≈ 110 Da (Dalton)
(Setelah pembentukan ikatan peptida, air dilepaskan)

Berat molekul protein = 300 × 110 Da = 33,000 Da = 33 kDa

Catatan:
- 1 Da = 1 g/mol
- Protein kecil: < 20 kDa
- Protein sedang: 20-100 kDa
- Protein besar: > 100 kDa
```

---

# 🔬 BAGIAN 2: MUTASI (10 Soal)

---

### Soal 16 — Identifikasi Tipe Mutasi

Perhatikan perubahan mRNA berikut:

**Original:** `5' - AUG GCU UAU GAA UGA - 3'`
**Mutant:**   `5' - AUG GCU UAC GAA UGA - 3'`

Identifikasi tipe mutasi dan jelaskan efeknya!

### ✅ Jawaban:

```
Perubahan: Kodon ke-3, UAU → UAC

Cek asam amino:
UAU = Tyrosine (Tyr)
UAC = Tyrosine (Tyr)

Asam amino TIDAK berubah!
→ Ini adalah SILENT MUTATION

Efek: Tidak ada efek pada protein. Protein tetap sama karena
degenerasi kode genetik (UAU dan UAC sama-sama mengkode Tyr).
```

---

### Soal 17 — Missense Mutation

Perhatikan perubahan mRNA berikut:

**Original:** `5' - AUG GAG CUU AAA UGA - 3'`
**Mutant:**   `5' - AUG GUG CUU AAA UGA - 3'`

Identifikasi tipe mutasi dan berikan contoh penyakit yang terkait!

### ✅ Jawaban:

```
Perubahan: Kodon ke-2, GAG → GUG

GAG = Glutamic Acid (Glu)
GUG = Valine (Val)

Asam amino BERUBAH (Glu → Val)
→ Ini adalah MISSENSE MUTATION

Contoh Penyakit: SICKLE CELL ANEMIA
- Mutasi pada gen β-globin
- Perubahan Glu → Val pada posisi ke-6
- Menyebabkan hemoglobin HbS yang menyebabkan sel darah merah berbentuk sabit
- Sel sabit menyumbat pembuluh darah → nyeri, anemia, kerusakan organ
```

---

### Soal 18 — Nonsense Mutation

Perhatikan perubahan mRNA berikut:

**Original:** `5' - AUG CAG UAU GGA CCC UAA - 3'`
**Mutant:**   `5' - AUG UAG UAU GGA CCC UAA - 3'`

Identifikasi tipe mutasi dan jelaskan dampaknya pada protein!

### ✅ Jawaban:

```
Perubahan: Kodon ke-2, CAG → UAG

CAG = Glutamine (Gln)
UAG = STOP CODON (Amber)

→ Ini adalah NONSENSE MUTATION

Dampak pada protein:
Original: AUG | CAG | UAU | GGA | CCC | UAA
          Met | Gln | Tyr | Gly | Pro | STOP → 5 asam amino

Mutant:   AUG | UAG
          Met | STOP → hanya 1 asam amino!

Protein SANGAT TERPOTONG (truncated):
- Dari 5 AA menjadi hanya 1 AA
- Protein hampir pasti TIDAK FUNGSIONAL
- Ini sering menyebabkan penyakit genetik yang serius
```

---

### Soal 19 — Frameshift Mutation

Perhatikan mRNA berikut. Satu nukleotida **C** disisipkan setelah kodon pertama:

**Original:** `5' - AUG GCU UAU GAA UGA - 3'`
**Mutant:**   `5' - AUG CGC UUA UGA AUG A - 3'`

Jelaskan efeknya!

### ✅ Jawaban:

```
Original: AUG | GCU | UAU | GAA | UGA
          Met | Ala | Tyr | Glu | STOP → 4 asam amino

Setelah insersi C setelah AUG:
Position: AUG C GCU UAU GAA UGA
Reading:  AUG | CGC | UUA | UGA | AUG | A...

Mutant:   AUG | CGC | UUA | UGA
          Met | Arg | Leu | STOP → 3 asam amino, tapi semua BERBEDA!

Ini adalah FRAMESHIFT MUTATION (Insertion):
1. Seluruh reading frame bergeser setelah titik insersi
2. Semua asam amino setelah insersi BERUBAH
3. Protein memiliki urutan yang sama sekali berbeda
4. Stop codon prematur muncul di posisi baru
5. Umumnya protein TIDAK FUNGSIONAL
```

---

### Soal 20 — Deletion Frameshift

Jika dari mRNA original pada soal 19, nukleotida G pada posisi ke-4 dihapus, apa yang terjadi?

### ✅ Jawaban:

```
Original:     AUG GCU UAU GAA UGA
Position:     123 456 789 ...

Hapus G (posisi 4):
              AUG _CU UAU GAA UGA
Reading:      AUG CUU AUG AAU GA...

Mutant:       AUG | CUU | AUG | AAU | GA...
              Met | Leu | Met | Asn | (incomplete)

Frameshift Mutation (Deletion):
- Ala (GCU) → Leu (CUU): berubah total
- Stop codon asli hilang (UGA terpecah)
- Protein terus ditranslasi melewati titik stop asli
- Hasilnya: protein LEBIH PANJANG dan BERBEDA sama sekali
```

---

### Soal 21 — Membandingkan Mutasi

Dari template strand DNA berikut:
```
3' - TAC CGA AAA GCG ACT - 5'
```

Jika terjadi 3 mutasi berbeda pada posisi ke-7 (nukleotida A pertama pada kodon AAA):

(a) A → G
(b) A → T  
(c) A → C

Tentukan tipe mutasi masing-masing!

### ✅ Jawaban:

```
Original template: 3' - TAC CGA AAA GCG ACT - 5'
Original mRNA:     5' - AUG GCU UUU CGC UGA - 3'
                        Met | Ala | Phe | Arg | STOP

(a) Mutasi A→G pada posisi 7:
Template: 3' - TAC CGA GAA GCG ACT - 5'
mRNA:     5' - AUG GCU CUU CGC UGA - 3'
                Met | Ala | Leu | Arg | STOP
UUU (Phe) → CUU (Leu): MISSENSE MUTATION ✓

(b) Mutasi A→T pada posisi 7:
Template: 3' - TAC CGA TAA GCG ACT - 5'
mRNA:     5' - AUG GCU AUU CGC UGA - 3'
                Met | Ala | Ile | Arg | STOP
UUU (Phe) → AUU (Ile): MISSENSE MUTATION ✓

(c) Mutasi A→C pada posisi 7:
Template: 3' - TAC CGA CAA GCG ACT - 5'
mRNA:     5' - AUG GCU GUU CGC UGA - 3'
                Met | Ala | Val | Arg | STOP
UUU (Phe) → GUU (Val): MISSENSE MUTATION ✓

Kesimpulan: Ketiga mutasi menghasilkan MISSENSE karena posisi pertama
kodon sangat kritis (jarang menghasilkan silent mutation).
```

---

### Soal 22 — Mutation dan Penyakit

Jelaskan bagaimana satu mutasi titik dapat menyebabkan penyakit genetic, berikan 3 contoh!

### ✅ Jawaban:

| Penyakit | Gen | Mutasi | Tipe | Efek |
|----------|-----|--------|------|------|
| **Sickle Cell Anemia** | β-globin | GAG→GUG (Glu→Val) | Missense | Sel darah merah berbentuk sabit |
| **Cystic Fibrosis** | CFTR (ΔF508) | Deletion 3 nt | In-frame deletion | Protein salah lipatan, saluran Cl⁻ rusak |
| **Tay-Sachs Disease** | HEXA | Insertion 4 nt | Frameshift → Nonsense | Lipid menumpuk di neuron, kerusakan saraf |

**Mekanisme Umum:**
1. Mutasi mengubah urutan asam amino protein
2. Protein menjadi salah lipatan atau terpotong
3. Protein kehilangan fungsi normalnya
4. Proses biologis terganggu → penyakit

---

### Soal 23 — Wobble Position

Apa yang dimaksud dengan "wobble position" dan mengapa mutasi di posisi ini sering bersifat silent?

### ✅ Jawaban:

**Wobble Position** = posisi **nukleotida ke-3** pada setiap kodon.

**Mengapa sering Silent:**
- Kode genetik bersifat **degenerate** terutama di posisi ke-3
- Banyak asam amino dikode oleh kodon yang hanya berbeda di posisi ke-3

```
Contoh Leucine (Leu):
CUU, CUC, CUA, CUG → semua = Leucine
     ^    ^    ^    ^
     Hanya posisi 3 yang berbeda!

Jadi: CUU → CUC (Silent, keduanya Leu)
      CUU → CUA (Silent, keduanya Leu)
Tapi: CUU → CAU (Missense! Leu → His, posisi 2 berubah)
```

**Kesimpulan:** Mutasi pada posisi pertama = sering Missense, posisi kedua = sangat sering Missense, posisi ketiga (wobble) = sering Silent.

---

### Soal 24 — Mutagen dan Tipe Mutasi

Sebutkan 3 jenis mutagen dan tipe mutasi yang dihasilkannya!

### ✅ Jawaban:

| Mutagen | Mekanisme | Tipe Mutasi |
|---------|-----------|-------------|
| **UV Radiation** | Membentuk thymine dimer (T-T) | Point mutation, transisi |
| **Ethidium Bromide** | Menyisip di antara basa DNA (intercalation) | Insertion → Frameshift |
| **Nitrous Acid (HNO₂)** | Deaminasi C→U (dibaca sebagai T) | Transisi C:G → T:A |
| **5-Bromouracil** | Analog basa (menyerupai T tapi pairing dengan G) | Transisi A:T → G:C |

---

### Soal 25 — DNA Repair

Jelaskan 2 mekanisme perbaikan DNA (DNA repair)!

### ✅ Jawaban:

**1. Mismatch Repair (MMR):**
- Mendeteksi dan memperbaiki basa yang **salah pasang** setelah replikasi
- Enzim: MutS (deteksi), MutL (sinyal), MutH (memotong untai baru)
- Untai baru diidentifikasi berdasarkan **metilasi** (untai lama sudah termetilasi)
- Efisiensi: mengurangi error rate dari 1/10⁷ menjadi 1/10⁹

**2. Nucleotide Excision Repair (NER):**
- Memperbaiki kerusakan besar (misalnya thymine dimer oleh UV)
- Langkah: deteksi → pemotongan 12-13 nt sekitar kerusakan → DNA Polymerase mengisi gap → Ligase menyambung
- Kerusakan pada gen NER menyebabkan **Xeroderma Pigmentosum** (sangat sensitif UV → kanker kulit)

---

# 🧫 BAGIAN 3: GENE STRUCTURE & DNA (5 Soal)

---

### Soal 26 — Exon dan Intron

Suatu gen eukariot memiliki struktur berikut:

```
Exon 1 (200 bp) - Intron 1 (1500 bp) - Exon 2 (350 bp) - Intron 2 (2000 bp) - Exon 3 (150 bp) - Intron 3 (800 bp) - Exon 4 (300 bp)
```

(a) Berapa panjang pre-mRNA?
(b) Berapa panjang mature mRNA?
(c) Berapa maksimum asam amino yang dikode?

### ✅ Jawaban:

```
(a) Pre-mRNA = semua exon + intron
    = 200 + 1500 + 350 + 2000 + 150 + 800 + 300
    = 5,300 bp

(b) Mature mRNA = hanya exon (intron dibuang)
    = 200 + 350 + 150 + 300
    = 1,000 bp

(c) Maksimum asam amino:
    Coding region ≤ 1000 bp (termasuk UTR)
    Asumsi seluruhnya coding: 1000 / 3 = 333 kodon
    Dikurangi stop codon: 332 asam amino (maksimum)
    
    Catatan: Angka sebenarnya lebih kecil karena ada 5' UTR dan 3' UTR
```

---

### Soal 27 — Alternative Splicing

Jelaskan apa itu alternative splicing dan berikan contoh bagaimana satu gen dapat menghasilkan protein berbeda!

### ✅ Jawaban:

**Alternative Splicing:** Proses di mana satu pre-mRNA dapat di-splice dengan cara berbeda menghasilkan mRNA berbeda dan akhirnya protein berbeda.

**Contoh — Gen Calcitonin/CGRP:**
```
Gen memiliki: Exon 1 - Exon 2 - Exon 3 - Exon 4 - Exon 5 - Exon 6

Di sel THYROID:
mRNA: Exon1 - Exon2 - Exon3 - Exon4 → Protein: CALCITONIN
(regulasi kalsium darah)

Di sel NEURON:
mRNA: Exon1 - Exon2 - Exon3 - Exon5 - Exon6 → Protein: CGRP
(neurotransmitter, vasodilator)
```

**Signifikansi:**
- ~20,000 gen manusia menghasilkan ~100,000 protein melalui alternative splicing
- Meningkatkan **proteome diversity** tanpa menambah jumlah gen
- >95% gen multi-exon manusia mengalami alternative splicing

---

### Soal 28 — RNA Splicing Mechanism

Jelaskan mekanisme RNA splicing oleh spliceosome!

### ✅ Jawaban:

**Langkah-langkah:**

1. **Pengenalan Splice Sites:**
   - 5' splice site: **GU** (di awal intron)
   - Branch point: **A** (adenin dalam intron, ~20-50 nt dari 3' end)
   - 3' splice site: **AG** (di akhir intron)

2. **Pembentukan Spliceosome:**
   - snRNP (U1, U2, U4, U5, U6) berkumpul di splice sites
   - U1 mengikat 5' splice site
   - U2 mengikat branch point

3. **Pemotongan Pertama (First transesterification):**
   - 2'-OH dari branch point A menyerang 5' splice site
   - Intron membentuk **lariat structure** (bentuk jerat)
   - Exon 1 terlepas

4. **Pemotongan Kedua (Second transesterification):**
   - 3'-OH dari Exon 1 menyerang 3' splice site
   - Exon 1 dan Exon 2 tersambung
   - Intron lariat dilepaskan dan didegradasi

```
    Exon1 ──GU────────A────AG── Exon2
              5'ss   branch   3'ss
                      ↓
    Exon1 ── Exon2   +   Lariat (intron) → degradasi
```

---

### Soal 29 — Lncoding vs Coding Region

Apa perbedaan antara coding region dan non-coding region dalam genom manusia?

### ✅ Jawaban:

| Aspek | Coding Region | Non-Coding Region |
|-------|--------------|-------------------|
| **Persentase Genom** | ~1.5% | ~98.5% |
| **Fungsi** | Mengkode protein (exon) | Regulasi, struktur, unknown |
| **Komponen** | Exon | Intron, UTR, pseudogene, repetitive DNA |
| **Mutasi** | Sering berdampak langsung | Bisa berdampak pada regulasi |
| **Evolusi** | Relatif conserved | Lebih bervariasi |

**Non-coding region BUKAN "junk DNA"! Fungsinya termasuk:**
1. **Regulatory elements** — Enhancer, silencer, promoter
2. **Non-coding RNA** — miRNA, lncRNA, rRNA, tRNA
3. **Telomere** — Pelindung ujung kromosom
4. **Centromere** — Penting untuk pembelahan sel

---

### Soal 30 — Splice Site Mutation

Jika terjadi mutasi pada 5' splice site (GU → AU), apa konsekuensinya?

### ✅ Jawaban:

```
Normal:   Exon1 ──GU────intron────AG── Exon2
                   ↑ splice site dikenali
Mutant:   Exon1 ──AU────intron────AG── Exon2
                   ↑ splice site TIDAK dikenali!

Konsekuensi:
1. INTRON RETENTION — Intron tidak dibuang, masuk ke mature mRNA
   → Kemungkinan besar mengandung stop codon → protein terpotong

2. EXON SKIPPING — Spliceosome mencari splice site alternatif
   → Exon bisa terlewat → protein kehilangan domain penting

3. CRYPTIC SPLICE SITE — Splice site lain yang mirip digunakan
   → Sebagian intron masuk atau sebagian exon hilang
   → Protein dengan urutan abnormal
```

**Contoh Penyakit:** Mutasi splice site pada gen **β-globin** menyebabkan **β-thalassemia** (anemia berat)

---

# 🌍 BAGIAN 4: ORGANIZATION OF LIVING LIFE (5 Soal)

---

### Soal 31 — Urutan Hierarki

Urutkan dari yang paling kecil ke paling besar:
Organ, Komunitas, Atom, Sistem Organ, Jaringan, Biosfer, Sel, Ekosistem, Molekul, Populasi, Organisme, Organel

### ✅ Jawaban:

```
Atom → Molekul → Organel → Sel → Jaringan → Organ → Sistem Organ 
→ Organisme → Populasi → Komunitas → Ekosistem → Biosfer
```

---

### Soal 32 — Prokariot vs Eukariot

Berikan 5 perbedaan utama antara sel prokariot dan eukariot!

### ✅ Jawaban:

| No | Aspek | Prokariot | Eukariot |
|----|-------|-----------|----------|
| 1 | **Nukleus** | Tidak ada (nukleoid) | Ada, dibungkus membran |
| 2 | **Organel bermembran** | Tidak ada | Ada (mitokondria, RE, Golgi) |
| 3 | **DNA** | Sirkuler, di sitoplasma | Linear, di dalam nukleus |
| 4 | **Ukuran** | Kecil (1-10 μm) | Besar (10-100 μm) |
| 5 | **Ribosom** | 70S (50S + 30S) | 80S (60S + 40S) |
| 6 | **Pembelahan sel** | Binary fission | Mitosis / Meiosis |
| 7 | **Contoh** | Bacteria, Archaea | Hewan, Tumbuhan, Fungi |

---

### Soal 33 — Sel dan Organel

Hubungkan organel berikut dengan fungsinya:
1. Mitokondria
2. Ribosom
3. Retikulum Endoplasma Kasar
4. Aparatus Golgi
5. Lisosom

### ✅ Jawaban:

| Organel | Fungsi | Detail |
|---------|--------|--------|
| **Mitokondria** | Respirasi seluler, produksi ATP | "Pembangkit listrik" sel; mengubah glukosa → ATP melalui fosforilasi oksidatif |
| **Ribosom** | Sintesis protein (translasi) | Membaca mRNA dan merangkai asam amino menjadi protein |
| **RE Kasar** | Sintesis protein yang akan disekresikan | Ribosom menempel pada RE; protein masuk ke lumen RE untuk modifikasi |
| **Aparatus Golgi** | Modifikasi, pengemasan, pengiriman protein | Menerima protein dari RE, menambah gula (glikosilasi), mengirim ke tujuan |
| **Lisosom** | Pencernaan intraseluler | Mengandung enzim hidrolitik (pH ~5); mendegradasi makromolekul dan organel rusak |

---

### Soal 34 — Jaringan pada Manusia

Klasifikasikan jaringan berikut dan berikan contoh lokasinya:
- Jaringan epitel, ikat, otot, saraf

### ✅ Jawaban:

| Jaringan | Sub-tipe | Lokasi | Fungsi |
|----------|----------|--------|--------|
| **Epitel** | Epitel skuamosa | Kulit, mulut | Pelindung, lapisan permukaan |
| | Epitel kolumnar | Usus halus | Absorpsi nutrisi |
| | Epitel kuboid | Ginjal (tubulus) | Sekresi, absorpsi |
| **Ikat** | Tulang | Rangka | Penopang, pelindung |
| | Darah | Pembuluh darah | Transportasi O₂, nutrisi |
| | Lemak | Bawah kulit | Penyimpanan energi, insulasi |
| **Otot** | Otot rangka | Lengan, kaki | Pergerakan volunter |
| | Otot jantung | Jantung | Pemompaan darah (involunter) |
| | Otot polos | Usus, pembuluh darah | Peristaltik (involunter) |
| **Saraf** | Neuron | Otak, sumsum | Transmisi sinyal listrik |
| | Sel glia | Seluruh sistem saraf | Mendukung dan melindungi neuron |

---

### Soal 35 — Emergent Properties

Apa yang dimaksud dengan "emergent properties" dalam konteks organisasi kehidupan?

### ✅ Jawaban:

**Emergent Properties** = sifat-sifat baru yang muncul pada tingkatan organisasi yang lebih tinggi, yang **TIDAK dimiliki** oleh komponen penyusunnya secara individual.

**Contoh:**
1. **Atom** C, H, O, N sendiri tidak hidup → tapi ketika membentuk **sel**, muncul sifat kehidupan
2. **Neuron** individual hanya bisa mengirim sinyal → tapi triliunan neuron bersama membentuk **kesadaran** dan pemikiran
3. **Sel otot** tunggal hanya bisa kontraksi lemah → tapi **jaringan otot** bisa mengangkat beban berat
4. **Molekul H₂O** tunggal tidak basah → tapi kumpulan molekul air bersifat cair dan basah

**Prinsip:** "The whole is greater than the sum of its parts"

---

# 💻 BAGIAN 5: NCBI & BIOINFORMATICS (8 Soal)

---

### Soal 36 — BLAST Alignment

Anda memiliki urutan DNA berikut dan ingin mencari urutan serupa di database NCBI:
```
ATGCCTAAGGTACCGGCTAA
```

(a) Tool BLAST apa yang Anda gunakan?
(b) Bagaimana cara menginterpretasi hasilnya?

### ✅ Jawaban:

**(a) Gunakan BLASTn** (nucleotide BLAST) karena query berupa urutan DNA dan ingin mencari di database DNA.

**(b) Interpretasi Hasil:**

| Parameter | Cara Membaca |
|-----------|-------------|
| **E-value** | Semakin kecil = semakin signifikan. <1e-10 sangat baik |
| **Identity %** | Persentase nukleotida yang cocok. >90% = sangat mirip |
| **Query Cover** | Berapa % query yang ter-align. >80% = baik |
| **Score (bits)** | Skor alignment. Semakin tinggi semakin baik |
| **Accession** | ID urutan di database (untuk referensi) |

**Langkah di NCBI:**
1. Buka blast.ncbi.nlm.nih.gov
2. Pilih "Nucleotide BLAST"
3. Paste urutan di kolom query
4. Pilih database (nr/nt)
5. Klik "BLAST"
6. Analisis hasil berdasarkan E-value dan Identity

---

### Soal 37 — E-value Analysis

Apa arti E-value berikut dan apakah signifikan?

| Hit | E-value |
|-----|---------|
| Hit A | 2e-150 |
| Hit B | 1e-5 |
| Hit C | 0.05 |
| Hit D | 10 |

### ✅ Jawaban:

| Hit | E-value | Interpretasi | Signifikan? |
|-----|---------|-------------|-------------|
| **Hit A** | 2e-150 | Sangat kecil, hampir pasti BUKAN kebetulan | ✅ Sangat signifikan — kemungkinan ortholog |
| **Hit B** | 1e-5 | Kecil, kemungkinan besar bukan kebetulan | ✅ Signifikan — kemungkinan homolog |
| **Hit C** | 0.05 | Mendekati threshold, borderline | ⚠️ Marginal — perlu investigasi lebih lanjut |
| **Hit D** | 10 | Besar, kemungkinan besar KEBETULAN | ❌ Tidak signifikan — abaikan |

**Aturan Umum:**
- E-value < 1e-50 → Sangat yakin homolog
- E-value < 1e-10 → Yakin homolog
- E-value < 0.01 → Mungkin homolog
- E-value > 1 → Kemungkinan kebetulan

---

### Soal 38 — Sequence Alignment

Perhatikan alignment berikut:

```
Query:    1  ATGCCTAAGGTACCG  15
             |||||| ||||||||
Subject:  1  ATGCCTTAAGTACCG  15

(Catatan: ada gap/mismatch pada posisi 7)
```

Hitung: (a) % Identity, (b) % Mismatch

### ✅ Jawaban:

```
Query:   A T G C C T A A G G T A C C G
Subject: A T G C C T T A A G T A C C G
Match:   = = = = = = × × = = = = = = =

Perhatikan lebih teliti alignment:
Query:    ATGCCTAAGGTACCG
Subject:  ATGCCTTAAGTACCG
          |||||| ||||||||

Matching:  13 posisi cocok
Mismatch:  2 posisi tidak cocok (posisi 7-8)
Total:     15 posisi

(a) % Identity = (13/15) × 100% = 86.7%
(b) % Mismatch = (2/15) × 100% = 13.3%
```

---

### Soal 39 — GenBank Entry

Jelaskan informasi apa saja yang terdapat dalam satu entry GenBank!

### ✅ Jawaban:

| Field | Isi | Contoh |
|-------|-----|--------|
| **LOCUS** | Nama & panjang urutan | NM_000518, 626 bp |
| **DEFINITION** | Deskripsi gen/organisme | Homo sapiens hemoglobin subunit beta |
| **ACCESSION** | Nomor unik identifikasi | NM_000518 |
| **VERSION** | Versi entry | NM_000518.5 |
| **ORGANISM** | Spesies asal | Homo sapiens |
| **REFERENCE** | Publikasi terkait | Jurnal, penulis, tahun |
| **FEATURES** | Anotasi biologis | CDS, exon, intron, promoter |
| **ORIGIN** | Urutan nukleotida lengkap | atggtgcatct... |

---

### Soal 40 — Perbedaan BLASTn vs BLASTp

Kapan menggunakan BLASTn dan kapan BLASTp?

### ✅ Jawaban:

| Aspek | BLASTn | BLASTp |
|-------|--------|--------|
| **Query** | Urutan DNA/RNA | Urutan Protein (asam amino) |
| **Database** | DNA/RNA sequences | Protein sequences |
| **Kegunaan** | Cari gen serupa, identifikasi spesies | Cari protein homolog, prediksi fungsi |
| **Sensitivitas** | Lebih rendah (hanya 4 basa) | Lebih tinggi (20 asam amino) |
| **Contoh** | Identifikasi spesies dari sampel DNA | Mencari protein serupa di organisme lain |

**Kapan gunakan BLASTx?**
- Jika punya urutan DNA tapi ingin cari di database PROTEIN
- Query DNA ditranslasi ke 6 reading frame
- berguna untuk gene annotation

---

### Soal 41 — Multiple Sequence Alignment

Apa itu Multiple Sequence Alignment (MSA) dan apa kegunaannya?

### ✅ Jawaban:

**MSA** = alignment LEBIH DARI 2 urutan secara bersamaan untuk menemukan region yang conserved.

```
Contoh MSA dari 4 spesies:
Human:    ATGCCTAAGG-TACCG
Mouse:    ATGCCTAAGG-TACCG  (100% identical)
Chicken:  ATGCCTAAGGATACCG  (1 insertion)
Zebrafish:ATGCCGAAGG-TACCG  (1 mismatch)
Consensus:ATGCC*AAGG TACCG
                 ^conserved regions^
```

**Kegunaan:**
1. **Phylogenetic analysis** — Membangun pohon evolusi
2. **Functional analysis** — Mengidentifikasi region yang conserved (penting secara fungsional)
3. **Protein structure prediction** — Prediksi struktur 3D berdasarkan homologi
4. **Gene annotation** — Mengidentifikasi gen yang belum diketahui

**Tools:** ClustalW, MUSCLE, MAFFT, T-Coffee

---

### Soal 42 — DNA Sequencing

Bandingkan Sanger Sequencing dengan Next-Generation Sequencing (NGS)!

### ✅ Jawaban:

| Aspek | Sanger Sequencing | NGS (mis. Illumina) |
|-------|-------------------|---------------------|
| **Generasi** | 1st generation | 2nd generation |
| **Panjang read** | ~800-1000 bp | 100-300 bp |
| **Throughput** | Rendah (~96 reads) | Sangat tinggi (jutaan reads) |
| **Biaya per base** | Mahal | Murah |
| **Waktu** | Berhari-hari | Berjam-jam |
| **Akurasi per read** | Sangat tinggi (99.99%) | Tinggi (99.9%) |
| **Kegunaan** | Validasi, sequencing gen tunggal | Whole genome, RNA-Seq, metagenomics |
| **Metode** | Chain termination (ddNTP) | Sequencing by synthesis |

---

### Soal 43 — Bioinformatics Pipeline

Jelaskan langkah umum dalam analisis bioinformatika dari raw sequencing data hingga interpretasi biologis!

### ✅ Jawaban:

```
1. RAW DATA → FASTQ files (urutan + quality scores)
           ↓
2. QUALITY CONTROL → Trim adapter, filter low quality reads (FastQC, Trimmomatic)
           ↓
3. ALIGNMENT/MAPPING → Map reads ke reference genome (BWA, Bowtie2)
           ↓
4. VARIANT CALLING → Deteksi SNP, indel, structural variants (GATK, SAMtools)
           ↓
5. ANNOTATION → Anotasi fungsi varian (snpEff, ANNOVAR)
           ↓
6. INTERPRETATION → Analisis biologis & klinis
```

---

# 🌱 BAGIAN 6: APPLICATION OF BIOTECHNOLOGY (7 Soal)

---

### Soal 44 — Insulin Rekombinan

Jelaskan proses pembuatan insulin rekombinan menggunakan teknologi DNA rekombinan!

### ✅ Jawaban:

**Langkah-langkah:**

1. **Isolasi gen insulin** dari sel pankreas manusia
2. **Restriction enzyme** memotong gen insulin dan plasmid vektor
3. **DNA ligase** menyambung gen insulin ke dalam plasmid
4. **Transformasi** — plasmid rekombinan dimasukkan ke bakteri E. coli
5. **Seleksi** — bakteri yang mengandung plasmid diseleksi (antibiotik resistance)
6. **Kultur** — bakteri dikultur dalam bioreaktor besar
7. **Ekspresi** — bakteri memproduksi protein insulin manusia
8. **Purifikasi** — insulin dimurnikan dari kultur bakteri
9. **Quality Control** — pengujian kemurnian dan aktivitas biologis

```
Gen Insulin Manusia → Plasmid E. coli → Kultur Massal → Insulin Murni
```

**Keunggulan vs insulin hewan:**
- Tidak menyebabkan alergi
- Identik dengan insulin manusia
- Produksi dalam jumlah besar
- Lebih murah dalam jangka panjang

---

### Soal 45 — PCR

Jelaskan prinsip dan langkah-langkah PCR (Polymerase Chain Reaction)!

### ✅ Jawaban:

**Prinsip:** Amplifikasi (perbanyakan) fragmen DNA spesifik secara in vitro.

**Komponen:**
- Template DNA (sampel)
- 2 Primer (forward & reverse)
- Taq DNA Polymerase (tahan panas)
- dNTPs (A, T, G, C)
- Buffer & MgCl₂

**3 Langkah per Siklus:**

| Langkah | Suhu | Durasi | Proses |
|---------|------|--------|--------|
| **Denaturasi** | 94-95°C | 30 detik | DNA double strand terpisah |
| **Annealing** | 55-65°C | 30 detik | Primer menempel pada template |
| **Extension** | 72°C | 1 menit | Taq Polymerase memanjangkan DNA |

**Amplifikasi Eksponensial:**
```
Siklus 1:  1 → 2 salinan
Siklus 2:  2 → 4 salinan
Siklus 5:  16 → 32 salinan
Siklus 10: 512 → 1024 salinan
Siklus 30: ~1 miliar salinan!

Formula: 2^n (n = jumlah siklus)
```

---

### Soal 46 — GMO

Apa itu GMO (Genetically Modified Organism)? Berikan contoh dan perdebatannya!

### ✅ Jawaban:

**GMO** = Organisme yang genomnya telah dimodifikasi menggunakan teknologi rekayasa genetika.

| Contoh GMO | Modifikasi | Manfaat |
|-----------|-----------|---------|
| **Bt Cotton** | Gen Cry dari *B. thuringiensis* | Tahan hama serangga |
| **Golden Rice** | Gen fitoena sintase & karoten desaturase | Mengandung vitamin A |
| **Roundup Ready Soybean** | Gen EPSPS | Toleran herbisida glyphosate |
| **AquAdvantage Salmon** | Gen growth hormone | Tumbuh 2x lebih cepat |

**Pro vs Kontra:**

| Pro | Kontra |
|-----|--------|
| Meningkatkan produktivitas pertanian | Kekhawatiran keamanan pangan jangka panjang |
| Mengurangi penggunaan pestisida | Dampak ekologis (gene flow ke tanaman liar) |
| Mengatasi malnutrisi (Golden Rice) | Monopoli perusahaan atas benih |
| Ketahanan terhadap perubahan iklim | Isu etika dan agama |

---

### Soal 47 — CRISPR-Cas9

Jelaskan mekanisme kerja CRISPR-Cas9 dan aplikasinya!

### ✅ Jawaban:

**CRISPR-Cas9** = sistem editing genom yang presisi tinggi.

**Mekanisme:**
1. **Guide RNA (gRNA)** dirancang untuk mengenali urutan DNA target (20 nt)
2. gRNA mengarahkan protein **Cas9** ke lokasi spesifik di genom
3. Cas9 memotong **kedua untai DNA** (double-strand break)
4. Sel memperbaiki potongan melalui:
   - **NHEJ** (Non-Homologous End Joining) → mutasi acak (gene knockout)
   - **HDR** (Homology-Directed Repair) → insersi gen baru (gene knock-in)

**Aplikasi:**

| Bidang | Aplikasi |
|--------|---------|
| **Medis** | Terapi gen untuk sickle cell, β-thalassemia |
| **Pertanian** | Membuat tanaman tahan penyakit tanpa DNA asing |
| **Riset** | Membuat model penyakit di laboratorium |
| **Diagnostik** | SHERLOCK & DETECTR untuk deteksi virus |

---

### Soal 48 — Bioteknologi Konvensional

Sebutkan 5 produk bioteknologi konvensional yang digunakan dalam kehidupan sehari-hari!

### ✅ Jawaban:

| No | Produk | Organisme | Proses |
|----|--------|-----------|--------|
| 1 | **Tempe** | *Rhizopus oligosporus* | Fermentasi kedelai |
| 2 | **Yogurt** | *Lactobacillus, Streptococcus* | Fermentasi susu (laktosa → asam laktat) |
| 3 | **Keju** | *Penicillium, Lactobacillus* | Fermentasi + koagulasi kasein |
| 4 | **Tape** | *Saccharomyces cerevisiae* | Fermentasi pati (singkong/beras ketan) |
| 5 | **Kecap** | *Aspergillus oryzae* | Fermentasi kedelai hitam |

---

### Soal 49 — DNA Fingerprinting

Jelaskan apa itu DNA Fingerprinting dan bagaimana penggunaannya dalam forensik!

### ✅ Jawaban:

**DNA Fingerprinting** = teknik identifikasi individu berdasarkan pola unik pada DNA, khususnya pada daerah **STR (Short Tandem Repeats)**.

**Prinsip:**
- Setiap individu memiliki pola STR yang unik (kecuali kembar identik)
- STR adalah urutan DNA pendek (2-6 bp) yang diulang berkali-kali
- Jumlah pengulangan bervariasi antar individu

**Langkah Forensik:**
1. **Sampel** dikumpulkan (darah, rambut, saliva)
2. DNA **diekstraksi** dari sampel
3. **PCR** memperbanyak STR loci yang spesifik (13-20 loci)
4. **Capillary electrophoresis** memisahkan fragmen berdasarkan ukuran
5. **Profil DNA** dibandingkan dengan tersangka atau database (CODIS)

**Relevansi Cyber Security:**
- Database DNA (CODIS) harus diproteksi dari akses ilegal
- Privacy data genetik menjadi isu cybersecurity
- Chain of custody digital untuk bukti forensik DNA

---

### Soal 50 — Bioethics dan Biotechnology

Diskusikan 3 isu etika yang muncul dari perkembangan bioteknologi modern!

### ✅ Jawaban:

**1. Genetic Privacy & Data Security**
- Data genomik bersifat sangat personal dan tidak bisa diubah
- Risiko: diskriminasi genetik oleh asuransi atau employer
- Contoh: kasus 23andMe data breach — data DNA jutaan orang terexpose
- Regulasi: GINA Act (USA), GDPR (EU) melindungi data genetik

**2. Gene Editing pada Manusia (Germline Editing)**
- CRISPR-Cas9 memungkinkan editing gen pada embrio manusia
- Risiko: "designer babies", eugenics, off-target effects
- Contoh kontroversial: He Jiankui (2018) — mengedit gen CCR5 pada embrio manusia
- Konsensus ilmiah: moratorium editing germline sampai teknologi lebih aman

**3. Biosecurity dan Bioterrorism**
- Synthetic biology memungkinkan pembuatan patogen di lab
- Risiko: pembuatan virus berbahaya oleh aktor jahat
- Relevansi Cyber Security: pengamanan digital lab biomolekular
- Perlu dual-use research framework dan pengawasan ketat

---

# 📌 TIPS UTS

| Strategi | Detail |
|----------|--------|
| **Fokus utama** | Central Dogma (40%) — latih transkripsi & translasi |
| **Hafal** | Tabel kodon, tipe mutasi, urutan organisasi kehidupan |
| **Pahami** | Cara membaca BLAST (E-value, Identity %) |
| **Latih** | Menentukan tipe mutasi dari perubahan nukleotida |
| **Kenali** | Perbedaan exon vs intron, coding vs template strand |

---

> 📝 *50 Soal Latihan + Pembahasan Lengkap — UTS Computational Biology*  
> *StudyHub — Portal Materi Semester 4 — BINUS Cyber Security*  
> *Last Updated: April 2026*
