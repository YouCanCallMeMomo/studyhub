# 📘 MATERI UTS COMPUTATIONAL BIOLOGY

> **Mata Kuliah:** Computational Biology  
> **Program Studi:** Cyber Security — BINUS University  
> **Semester:** 4 | Tahun Akademik 2025/2026  
> **Disusun untuk:** Ujian Tengah Semester (UTS)

---

## 📋 DAFTAR ISI

1. [Central Dogma of Molecular Biology (40%)](#1-central-dogma-of-molecular-biology-40)
2. [Mutation — Silent, Missense, Nonsense](#2-mutation--silent-missense-nonsense)
3. [Gene Structure & DNA — Exon, Intron](#3-gene-structure--dna--exon-intron)
4. [Organization of Living Life](#4-organization-of-living-life)
5. [Bioinformatics & NCBI Database](#5-bioinformatics--ncbi-database)
6. [Application of Biotechnology in Daily Life](#6-application-of-biotechnology-in-daily-life)

---

# 1. CENTRAL DOGMA OF MOLECULAR BIOLOGY (40%)

## 1.1 Pengertian Central Dogma

**Central Dogma** adalah konsep fundamental dalam biologi molekuler yang menjelaskan aliran informasi genetik dalam sistem biologis. Konsep ini pertama kali dikemukakan oleh **Francis Crick** pada tahun **1958**.

### Aliran Informasi Genetik:

```
DNA  →  RNA  →  Protein
     (Transkripsi)  (Translasi)
```

| Proses | Dari | Ke | Enzim Utama | Lokasi |
|--------|------|----|-------------|--------|
| **Replikasi** | DNA | DNA | DNA Polymerase | Nukleus |
| **Transkripsi** | DNA | mRNA | RNA Polymerase | Nukleus |
| **Translasi** | mRNA | Protein | Ribosom | Sitoplasma (Ribosom) |

## 1.2 Replikasi DNA

Replikasi DNA adalah proses penggandaan molekul DNA. Bersifat **semi-konservatif** — setiap untai baru mengandung satu untai lama dan satu untai baru.

### Langkah-langkah Replikasi:
1. **Inisiasi** — Helicase membuka double helix di *origin of replication*
2. **Elongasi** — DNA Polymerase menambahkan nukleotida baru (arah 5' → 3')
   - *Leading strand*: sintesis kontinu
   - *Lagging strand*: sintesis diskontinu (Okazaki fragments)
3. **Terminasi** — Ligase menyambung fragmen-fragmen Okazaki

### Enzim-enzim Penting:
| Enzim | Fungsi |
|-------|--------|
| **Helicase** | Membuka double helix DNA |
| **Primase** | Membuat RNA primer |
| **DNA Polymerase III** | Menambahkan nukleotida baru |
| **DNA Polymerase I** | Mengganti RNA primer dengan DNA |
| **Ligase** | Menyambung fragmen Okazaki |
| **Topoisomerase** | Mengurangi tegangan supercoil |

## 1.3 Transkripsi (DNA → mRNA)

Transkripsi adalah proses penyalinan informasi genetik dari DNA ke mRNA.

### Tahapan Transkripsi:

**1. Inisiasi:**
- RNA Polymerase mengenali dan mengikat **promoter** (TATA Box pada posisi -25 hingga -30)
- Transcription factors membantu RNA Polymerase mengikat promoter
- DNA double helix terbuka membentuk **transcription bubble**

**2. Elongasi:**
- RNA Polymerase membaca **template strand** DNA (3' → 5')
- mRNA disintesis dengan arah **5' → 3'**
- Pasangan basa: `A-U, T-A, G-C, C-G`

**3. Terminasi:**
- RNA Polymerase mencapai **terminator sequence**
- mRNA dilepaskan dari template DNA

### Perbedaan Template Strand vs Coding Strand:

| | Template Strand | Coding Strand |
|---|---|---|
| **Dibaca oleh** | RNA Polymerase | - |
| **Arah** | 3' → 5' | 5' → 3' |
| **Hubungan dgn mRNA** | Komplementer | Identik (kecuali T → U) |

### Contoh Transkripsi:
```
Template Strand (3'→5'):  3' - T A C G G A T C C A T T - 5'
Coding Strand (5'→3'):    5' - A T G C C T A G G T A A - 3'
mRNA (5'→3'):             5' - A U G C C U A G G U A A - 3'
```

## 1.4 Translasi (mRNA → Protein)

Translasi adalah proses penerjemahan kode genetik pada mRNA menjadi urutan asam amino (protein).

### Komponen Translasi:
- **mRNA** — membawa kode genetik (kodon)
- **tRNA** — membawa asam amino, memiliki **antikodon**
- **Ribosom** — tempat terjadinya translasi (memiliki situs A, P, E)

### Kodon dan Asam Amino:

| Kodon | Asam Amino | Keterangan |
|-------|-----------|------------|
| **AUG** | Metionin (Met) | **Start codon** |
| **UAA** | - | Stop codon (Ochre) |
| **UAG** | - | Stop codon (Amber) |
| **UGA** | - | Stop codon (Opal) |
| UUU | Phenylalanine (Phe) | |
| UUC | Phenylalanine (Phe) | |
| GGU, GGC, GGA, GGG | Glycine (Gly) | Degenerasi kodon |
| CGA, CGG, CGU, CGC, AGA, AGG | Arginine (Arg) | 6 kodon |

### Tahapan Translasi:

**1. Inisiasi:**
- Ribosom kecil (40S) mengikat mRNA
- Menemukan **start codon AUG**
- tRNA pembawa Met menempati situs P
- Ribosom besar (60S) bergabung

**2. Elongasi:**
- tRNA baru masuk ke situs A (sesuai kodon)
- **Ikatan peptida** terbentuk antara asam amino
- Ribosom bergeser (translokasi): A → P → E
- tRNA kosong keluar dari situs E

**3. Terminasi:**
- Ribosom mencapai **stop codon** (UAA, UAG, UGA)
- **Release factor** masuk ke situs A
- Protein dilepaskan, ribosom terdisosiasi

### Contoh Translasi Lengkap:

```
mRNA:     5' - AUG CCU AGG UAA - 3'
Kodon:         AUG | CCU | AGG | UAA
Asam Amino:    Met | Pro | Arg | STOP

Protein: Met-Pro-Arg (3 asam amino)
```

## 1.5 Post-Transcriptional Modification (RNA Processing)

Sebelum mRNA keluar dari nukleus, mRNA melalui proses modifikasi:

1. **5' Capping** — Penambahan 7-methylguanosine cap di ujung 5'
   - Melindungi mRNA dari degradasi
   - Membantu ribosom mengenali mRNA

2. **3' Polyadenylation** — Penambahan ekor poly-A (50-250 adenin)
   - Meningkatkan stabilitas mRNA
   - Membantu ekspor dari nukleus

3. **RNA Splicing** — Pembuangan intron dan penyambungan exon
   - Dilakukan oleh **spliceosome**
   - **Alternative splicing** menghasilkan protein berbeda dari satu gen

---

### 💡 CONTOH SOAL — Central Dogma

**Soal 1:** Diberikan template strand DNA berikut:
```
3' - TAC AAG CTG ACT GAC UAA - 5'
```
Tentukan: (a) mRNA, (b) urutan asam amino yang dihasilkan.

**Jawaban:**
```
(a) mRNA (5'→3'): AUG UUC GAC UGA CUG AUU
(b) Kodon:         AUG | UUC | GAC | UGA
    Asam Amino:    Met | Phe | Asp | STOP

Protein: Met-Phe-Asp (3 asam amino)
```
*Catatan: UGA adalah stop codon, translasi berhenti di sini.*

**Soal 2:** Apabila nukleotida pada posisi ke-4 dari template strand DNA (A) diganti menjadi T, apa yang terjadi?

**Jawaban:**
```
Original template:   3' - TAC AAG CTG ... - 5'
mRNA original:       5' - AUG UUC GAC ... - 3'
Kodon ke-2: UUC → Phe

Mutasi (A→T):        3' - TAC TAG CTG ... - 5'
mRNA mutant:         5' - AUG AUC GAC ... - 3'
Kodon ke-2: AUC → Ile (Isoleucine)

Ini adalah MISSENSE MUTATION karena asam amino berubah dari Phe → Ile
```

---

# 2. MUTATION — Silent, Missense, Nonsense

## 2.1 Pengertian Mutasi

**Mutasi** adalah perubahan permanen dalam urutan nukleotida DNA. Mutasi dapat terjadi secara **spontan** (kesalahan replikasi) atau **terinduksi** (oleh mutagen seperti radiasi UV, bahan kimia).

## 2.2 Tipe-Tipe Mutasi Titik (Point Mutation)

### A. Silent Mutation (Mutasi Diam)

| Aspek | Penjelasan |
|-------|-----------|
| **Definisi** | Perubahan nukleotida yang TIDAK mengubah asam amino |
| **Penyebab** | Degenerasi kode genetik (beberapa kodon mengkode asam amino yang sama) |
| **Efek pada protein** | Tidak ada perubahan |
| **Contoh** | GGU → GGC (keduanya mengkode **Glycine**) |

```
DNA Original:     TAC GGA CCC
mRNA Original:    AUG CCU GGG → Met-Pro-Gly

DNA Mutant:       TAC GGG CCC
mRNA Mutant:      AUG CCC GGG → Met-Pro-Gly  ← SAMA! (Silent)
```

### B. Missense Mutation (Mutasi Salah Arti)

| Aspek | Penjelasan |
|-------|-----------|
| **Definisi** | Perubahan nukleotida yang mengubah SATU asam amino menjadi asam amino LAIN |
| **Efek pada protein** | Protein mungkin fungsional atau tidak, tergantung posisi |
| **Subtipe** | Conservative (sifat AA mirip) vs Non-conservative (sifat AA berbeda) |
| **Contoh klasik** | Sickle Cell Anemia: GAG → GUG (Glu → Val) |

```
DNA Original:     TAC GAA CCC
mRNA Original:    AUG CUU GGG → Met-Leu-Gly

DNA Mutant:       TAC GAG CCC
mRNA Mutant:      AUG CUC GGG → Met-Leu-Gly  ← Ini Silent karena CUU & CUC = Leu

DNA Mutant 2:     TAC GTA CCC
mRNA Mutant 2:    AUG CAU GGG → Met-His-Gly  ← Ini MISSENSE (Leu → His)
```

**Contoh Nyata — Sickle Cell Anemia:**
```
Normal:  ... GAG ... → Glutamic Acid (Glu) — HbA
Mutant:  ... GUG ... → Valine (Val)        — HbS

Perubahan 1 asam amino ini menyebabkan sel darah merah berbentuk sabit!
```

### C. Nonsense Mutation (Mutasi Tak Bermakna)

| Aspek | Penjelasan |
|-------|-----------|
| **Definisi** | Perubahan nukleotida yang mengubah kodon asam amino menjadi **STOP CODON** |
| **Efek pada protein** | Protein **terpotong** (truncated protein) — biasanya TIDAK fungsional |
| **Stop codons** | UAA, UAG, UGA |
| **Contoh** | CAG (Gln) → UAG (STOP) |

```
DNA Original:     TAC GAA GTC CCA ATT
mRNA Original:    AUG CUU CAG GGU UAA
Protein:          Met-Leu-Gln-Gly-STOP (4 asam amino)

DNA Mutant:       TAC GAA ATC CCA ATT
mRNA Mutant:      AUG CUU UAG GGU UAA
Protein:          Met-Leu-STOP (TERPOTONG! Hanya 2 asam amino)
```

## 2.3 Mutasi Lainnya

### Frameshift Mutation
Terjadi karena **insertion** (penyisipan) atau **deletion** (penghapusan) nukleotida yang BUKAN kelipatan 3.

```
Original:  AUG | CUU | CAG | GGU | UAA
Protein:   Met | Leu | Gln | Gly | STOP

Insertion (sisip U setelah AUG):
           AUG | UCU | UCA | GGG | UUA | A...
Protein:   Met | Ser | Ser | Gly | Leu | ...

→ Seluruh reading frame bergeser! Protein sangat berbeda.
```

### Tabel Ringkasan Mutasi:

| Tipe Mutasi | Perubahan | Efek pada Protein | Severity |
|-------------|-----------|-------------------|----------|
| **Silent** | Kodon berubah, AA sama | Tidak ada efek | Rendah |
| **Missense** | Kodon berubah, AA berbeda | Bisa ringan-berat | Sedang |
| **Nonsense** | Kodon → Stop codon | Protein terpotong | Tinggi |
| **Frameshift** | Insertion/Deletion | Seluruh urutan berubah | Sangat Tinggi |

---

### 💡 CONTOH SOAL — Mutasi

**Soal 1:** Perhatikan mRNA berikut:
```
Original mRNA: 5' - AUG GCU UAC GAA UGA - 3'
```
Jika nukleotida ke-7 (U pada kodon UAC) berubah menjadi A, tipe mutasi apa yang terjadi?

**Jawaban:**
```
Original:  AUG | GCU | UAC | GAA | UGA
           Met | Ala | Tyr | Glu | STOP

Mutant:    AUG | GCU | AAC | GAA | UGA
           Met | Ala | Asn | Glu | STOP

UAC (Tyr) → AAC (Asn) = asam amino BERUBAH
→ Ini adalah MISSENSE MUTATION
```

**Soal 2:** Jika kodon GAA pada mRNA di atas berubah menjadi UAA, apa yang terjadi?

**Jawaban:**
```
Original:  AUG | GCU | UAC | GAA | UGA
           Met | Ala | Tyr | Glu | STOP (4 AA)

Mutant:    AUG | GCU | UAC | UAA |
           Met | Ala | Tyr | STOP (3 AA — terpotong!)

GAA (Glu) → UAA (STOP)
→ Ini adalah NONSENSE MUTATION
→ Protein kehilangan 1 asam amino, kemungkinan tidak fungsional
```

---

# 3. GENE STRUCTURE & DNA — Exon, Intron

## 3.1 Struktur Gen Eukariot

Gen pada organisme eukariot memiliki struktur yang lebih kompleks dibandingkan prokariot:

```
5' ─── [Promoter] ─── [Exon 1] ─── [Intron 1] ─── [Exon 2] ─── [Intron 2] ─── [Exon 3] ─── 3'
         ↑                                                                            ↑
      TATA Box                                                                   Terminator
```

### Komponen Struktur Gen:

| Komponen | Fungsi | Keterangan |
|----------|--------|------------|
| **Promoter** | Tempat RNA Polymerase mengikat | TATA Box, CAAT Box |
| **Exon** | Bagian gen yang **dikode** menjadi protein | "EXpressed" |
| **Intron** | Bagian gen yang **TIDAK dikode** | "INtervening sequence" |
| **5' UTR** | Untranslated Region di ujung 5' | Regulasi translasi |
| **3' UTR** | Untranslated Region di ujung 3' | Stabilitas mRNA |
| **Terminator** | Sinyal penghentian transkripsi | Polyadenylation signal |

## 3.2 Exon vs Intron

| Aspek | Exon | Intron |
|-------|------|--------|
| **Definisi** | Bagian gen yang diekspresikan | Bagian gen yang tidak diekspresikan |
| **Keberadaan di mRNA** | ✅ Ada di mature mRNA | ❌ Dibuang saat RNA splicing |
| **Mengkode protein** | ✅ Ya | ❌ Tidak |
| **Persentase di genom** | ~1.5% dari total genom manusia | ~25% dari total genom manusia |
| **Fungsi** | Membawa informasi untuk protein | Regulasi gen, alternative splicing |

## 3.3 RNA Splicing

RNA Splicing adalah proses pembuangan intron dari pre-mRNA dan penyambungan exon.

```
Pre-mRNA:    5'cap ─ [Exon1] ─ [Intron1] ─ [Exon2] ─ [Intron2] ─ [Exon3] ─ AAAA 3'
                         ↓           ↕           ↓           ↕          ↓
Mature mRNA: 5'cap ─ [Exon1] ─ [Exon2] ─ [Exon3] ─ AAAA 3'
                     (Intron dibuang, exon disambung)
```

### Mekanisme Splicing:
1. **Spliceosome** (kompleks snRNP) mengenali **splice sites**
2. **5' splice site**: GU (di awal intron)
3. **3' splice site**: AG (di akhir intron)
4. **Branch point**: A (adenin) di dalam intron
5. Intron dipotong membentuk **lariat structure** dan didegradasi
6. Exon-exon disambung

### Alternative Splicing

Satu gen bisa menghasilkan BEBERAPA protein berbeda melalui alternative splicing:

```
Gen X memiliki Exon 1, 2, 3, 4

Protein A: Exon1 - Exon2 - Exon3 - Exon4    (include semua)
Protein B: Exon1 - Exon2 - Exon4             (skip Exon3)
Protein C: Exon1 - Exon3 - Exon4             (skip Exon2)
```

> **Fun Fact:** Gen manusia rata-rata memiliki ~8 exon. Melalui alternative splicing, ~20,000 gen manusia bisa menghasilkan ~100,000 protein berbeda!

## 3.4 Mana yang Menjadi Protein?

**Hanya EXON yang menjadi protein.** Intron TIDAK dikode menjadi protein.

Proses lengkap:
```
DNA (Gen lengkap: Exon + Intron)
    ↓ Transkripsi
Pre-mRNA (masih mengandung intron)
    ↓ RNA Processing (Splicing, Capping, Polyadenylation)
Mature mRNA (hanya exon)
    ↓ Translasi
PROTEIN
```

---

### 💡 CONTOH SOAL — Gene Structure

**Soal 1:** Suatu gen memiliki struktur berikut:
```
Exon 1 (300 bp) - Intron 1 (1200 bp) - Exon 2 (450 bp) - Intron 2 (800 bp) - Exon 3 (250 bp)
```
Berapa panjang mature mRNA (dalam bp, tidak termasuk UTR)?

**Jawaban:**
```
Mature mRNA = Exon 1 + Exon 2 + Exon 3
            = 300 + 450 + 250
            = 1000 bp

Intron TIDAK termasuk karena sudah dibuang saat splicing.

Jumlah asam amino yang dikode = 1000 / 3 = ~333 asam amino
(dikurangi start dan stop codon)
```

**Soal 2:** Jelaskan mengapa intron penting meskipun tidak mengkode protein!

**Jawaban:**
1. **Alternative Splicing** — Memungkinkan satu gen menghasilkan beberapa protein berbeda
2. **Regulasi Ekspresi Gen** — Beberapa intron mengandung regulatory elements (enhancer/silencer)
3. **Evolusi** — Exon shuffling memungkinkan penciptaan protein baru
4. **Proteksi** — Intron berfungsi sebagai "buffer" yang melindungi exon dari mutasi
5. **miRNA** — Beberapa intron menghasilkan microRNA yang mengatur ekspresi gen lain

---

# 4. ORGANIZATION OF LIVING LIFE

## 4.1 Hierarki Organisasi Kehidupan

Kehidupan terorganisir dalam tingkatan hierarkis dari yang paling sederhana hingga paling kompleks:

```
Atom → Molekul → Organel → Sel → Jaringan → Organ → Sistem Organ → Organisme → Populasi → Komunitas → Ekosistem → Biosfer
```

### Tabel Detail Setiap Tingkatan:

| No | Tingkatan | Definisi | Contoh |
|----|-----------|----------|--------|
| 1 | **Atom** | Unit terkecil materi | C, H, O, N, P, S |
| 2 | **Molekul** | Gabungan 2+ atom | H₂O, DNA, Glukosa, ATP |
| 3 | **Organel** | Struktur fungsional dalam sel | Mitokondria, Ribosom, Nukleus |
| 4 | **Sel** | Unit terkecil kehidupan | Neuron, Eritrosit, Sel Epitel |
| 5 | **Jaringan** | Kumpulan sel sejenis | Jaringan Epitel, Otot, Saraf |
| 6 | **Organ** | Kumpulan jaringan berbeda | Jantung, Paru-paru, Otak |
| 7 | **Sistem Organ** | Kumpulan organ yang bekerja sama | Sistem Kardiovaskular, Respirasi |
| 8 | **Organisme** | Individu makhluk hidup | Manusia, Pohon, Bakteri |
| 9 | **Populasi** | Kumpulan organisme sejenis | Populasi harimau Sumatera |
| 10 | **Komunitas** | Kumpulan berbagai populasi | Komunitas hutan tropis |
| 11 | **Ekosistem** | Komunitas + lingkungan abiotik | Ekosistem danau, padang rumput |
| 12 | **Biosfer** | Seluruh ekosistem di Bumi | Seluruh permukaan Bumi |

## 4.2 Sel — Unit Dasar Kehidupan

### Prokariot vs Eukariot:

| Aspek | Prokariot | Eukariot |
|-------|-----------|----------|
| **Nukleus** | Tidak ada (nukleoid) | Ada (membran nukleus) |
| **Organel bermembran** | Tidak ada | Ada (mitokondria, RE, dll) |
| **DNA** | Sirkuler, di sitoplasma | Linear, di nukleus |
| **Ukuran** | 1-10 μm | 10-100 μm |
| **Contoh** | Bakteri, Archaea | Hewan, Tumbuhan, Fungi |
| **Intron** | Sangat jarang | Umum ditemukan |

### Organel Penting dan Fungsinya:

| Organel | Fungsi | Analogi |
|---------|--------|---------|
| **Nukleus** | Pusat kontrol, menyimpan DNA | "Otak" sel |
| **Ribosom** | Sintesis protein | "Pabrik" protein |
| **Mitokondria** | Produksi energi (ATP) — respirasi seluler | "Pembangkit listrik" |
| **Retikulum Endoplasma** | RE Kasar: sintesis protein, RE Halus: sintesis lipid | "Jalur distribusi" |
| **Aparatus Golgi** | Modifikasi, pengemasan, pengiriman protein | "Kantor pos" |
| **Lisosom** | Pencernaan intraseluler | "Tukang bersih-bersih" |
| **Kloroplas** | Fotosintesis (hanya tumbuhan) | "Panel surya" |

## 4.3 Jaringan pada Hewan

| Jaringan | Fungsi | Contoh Lokasi |
|----------|--------|---------------|
| **Epitel** | Pelindung, absorpsi, sekresi | Kulit, lapisan usus |
| **Ikat (Connective)** | Penghubung, penopang | Tulang, darah, lemak |
| **Otot** | Pergerakan | Jantung, lengan, usus |
| **Saraf** | Komunikasi sinyal | Otak, sumsum tulang |

---

### 💡 CONTOH SOAL — Organization of Life

**Soal 1:** Urutkan tingkatan organisasi kehidupan berikut dari yang paling sederhana ke kompleks:
Komunitas, Sel, Molekul, Organ, Ekosistem, Jaringan, Atom, Organisme, Sistem Organ

**Jawaban:**
```
Atom → Molekul → Sel → Jaringan → Organ → Sistem Organ → Organisme → Komunitas → Ekosistem
```

**Soal 2:** Jelaskan mengapa sel disebut sebagai unit terkecil kehidupan!

**Jawaban:**
- Sel adalah unit struktural dan fungsional terkecil yang memiliki **semua ciri-ciri kehidupan**:
  1. **Metabolisme** — Sel dapat melakukan reaksi kimia (katabolisme & anabolisme)
  2. **Reproduksi** — Sel dapat membelah diri (mitosis/meiosis)
  3. **Homeostasis** — Sel menjaga keseimbangan internal melalui membran sel
  4. **Respons terhadap stimulus** — Sel dapat merespon sinyal dari luar
  5. **Pertumbuhan** — Sel dapat bertambah ukuran dan jumlah
- Atom dan molekul saja TIDAK memiliki ciri-ciri kehidupan ini

---

# 5. BIOINFORMATICS & NCBI DATABASE

## 5.1 Pengertian Bioinformatika

**Bioinformatika** adalah bidang interdisipliner yang menggabungkan **biologi, ilmu komputer, matematika, dan statistika** untuk menganalisis dan menginterpretasikan data biologis.

### Cabang Utama:

| Cabang | Fokus | Contoh Aplikasi |
|--------|-------|-----------------|
| **Genomics** | Studi seluruh genom organisme | DNA sequencing, genome assembly |
| **Proteomics** | Studi seluruh protein dalam sel | Identifikasi protein, struktur 3D |
| **Transcriptomics** | Studi seluruh RNA dalam sel | RNA-Seq, ekspresi gen |
| **Metabolomics** | Studi seluruh metabolit dalam sel | Analisis metabolit |

## 5.2 NCBI (National Center for Biotechnology Information)

**NCBI** adalah pusat data bioinformatika terbesar di dunia, bagian dari NIH (National Institutes of Health) USA.

### Database-Database Penting di NCBI:

| Database | Isi | URL |
|----------|-----|-----|
| **GenBank** | Urutan DNA/RNA dari seluruh organisme | ncbi.nlm.nih.gov/genbank |
| **PubMed** | Jurnal dan artikel ilmiah biomedis | pubmed.ncbi.nlm.nih.gov |
| **BLAST** | Tool alignment urutan DNA/protein | blast.ncbi.nlm.nih.gov |
| **Gene** | Informasi gen spesifik | ncbi.nlm.nih.gov/gene |
| **Protein** | Database urutan protein | ncbi.nlm.nih.gov/protein |
| **SRA** | Sequence Read Archive — raw sequencing data | ncbi.nlm.nih.gov/sra |

## 5.3 BLAST — Sequence Alignment

**BLAST** (Basic Local Alignment Search Tool) digunakan untuk mencari kesamaan/kemiripan antara urutan DNA atau protein.

### Jenis BLAST:

| Tipe BLAST | Query | Database | Kegunaan |
|------------|-------|----------|----------|
| **BLASTn** | DNA | DNA | Cari urutan DNA serupa |
| **BLASTp** | Protein | Protein | Cari protein serupa |
| **BLASTx** | DNA (ditranslasikan) | Protein | Gene annotation |
| **tBLASTn** | Protein | DNA (ditranslasikan) | Cari gen pengkode protein |
| **tBLASTx** | DNA (ditranslasikan) | DNA (ditranslasikan) | Perbandingan genom |

### Cara Membaca Hasil BLAST:

| Parameter | Arti | Nilai Ideal |
|-----------|------|-------------|
| **E-value** | Expected number of chance alignments | Semakin kecil semakin baik (< 0.01) |
| **Identity (%)** | Persentase kesamaan urutan | Semakin tinggi = semakin mirip |
| **Query Cover (%)** | Berapa % query yang ter-align | Semakin tinggi semakin baik |
| **Score (bits)** | Skor alignment | Semakin tinggi semakin baik |
| **Gaps** | Jumlah celah dalam alignment | Semakin sedikit semakin baik |

### Contoh Hasil Alignment:

```
Query:    1  ATGCCTTAGGCTAAGCCTAAG  21
             ||||||| |||||||| ||||
Subject:  1  ATGCCTTGGGCTAAGCGTAAG  21

Identity: 19/21 (90.5%)
Gaps: 0/21 (0%)
E-value: 2e-05
```

### Interpretasi E-value:
- **E-value < 1e-50** → Sangat signifikan (homolog pasti)
- **E-value < 1e-10** → Signifikan (kemungkinan homolog)
- **E-value < 0.01** → Mungkin signifikan
- **E-value > 1** → Tidak signifikan (kebetulan)

## 5.4 DNA Sequencing

### Metode Sequencing:

| Generasi | Metode | Panjang Read | Kecepatan | Biaya |
|----------|--------|--------------|-----------|-------|
| **1st Gen** | Sanger Sequencing | ~1000 bp | Lambat | Mahal |
| **2nd Gen (NGS)** | Illumina, Ion Torrent | 100-300 bp | Cepat | Murah |
| **3rd Gen** | PacBio, Oxford Nanopore | 10,000-100,000 bp | Sangat cepat | Menengah |

## 5.5 Genotyping

**Genotyping** adalah proses menentukan variasi genetik (genotype) pada individu tertentu.

- **SNP Genotyping** — Mendeteksi Single Nucleotide Polymorphism
- **Microarray** — Chip DNA untuk mendeteksi ribuan SNP sekaligus
- **Whole Genome Sequencing** — Membaca seluruh genom

---

### 💡 CONTOH SOAL — Bioinformatics & NCBI

**Soal 1:** Anda melakukan BLAST dan mendapatkan hasil berikut:
```
Hit 1: Identity 98%, E-value 2e-89, Query Cover 100%
Hit 2: Identity 45%, E-value 3e-12, Query Cover 78%
Hit 3: Identity 30%, E-value 0.5, Query Cover 55%
```
Manakah yang paling relevan dan mengapa?

**Jawaban:**
- **Hit 1** adalah yang paling relevan karena:
  1. **Identity 98%** — Urutan sangat mirip (hampir identik)
  2. **E-value 2e-89** — Sangat signifikan (sangat kecil, bukan kebetulan)
  3. **Query Cover 100%** — Seluruh query ter-align
- Hit 1 kemungkinan besar merupakan **ortholog** atau gen yang sama dari spesies berbeda
- Hit 3 dengan E-value 0.5 kurang signifikan dan mungkin hanya kebetulan

**Soal 2:** Jelaskan perbedaan antara Genomics, Proteomics, dan Transcriptomics!

**Jawaban:**

| Aspek | Genomics | Proteomics | Transcriptomics |
|-------|----------|------------|-----------------|
| **Objek studi** | DNA/Genom | Protein | RNA/Transkrip |
| **Representasi** | Informasi genetik | Produk fungsional | Ekspresi gen |
| **Metode** | DNA Sequencing, GWAS | Mass Spectrometry, 2D-PAGE | RNA-Seq, Microarray |
| **Database** | GenBank, Ensembl | UniProt, PDB | GEO, ArrayExpress |
| **Bersifat** | Statis | Dinamis | Dinamis |

---

# 6. APPLICATION OF BIOTECHNOLOGY IN DAILY LIFE

## 6.1 Pengertian Bioteknologi

**Bioteknologi** adalah pemanfaatan organisme hidup atau produk biologis untuk menghasilkan produk atau proses yang bermanfaat bagi manusia.

### Bioteknologi Konvensional vs Modern:

| Aspek | Konvensional | Modern |
|-------|-------------|--------|
| **Teknik** | Fermentasi, persilangan | Rekayasa genetika, kloning |
| **Organisme** | Utuh (whole organism) | Tingkat molekuler (DNA) |
| **Contoh** | Tempe, yogurt, keju | Insulin rekombinan, GMO, terapi gen |
| **Waktu** | Sudah ribuan tahun | Sejak ~1970-an |

## 6.2 Aplikasi Bioteknologi Modern

### A. Bidang Kesehatan/Medis

| Aplikasi | Penjelasan | Contoh |
|----------|-----------|--------|
| **Insulin Rekombinan** | Gen insulin manusia disisipkan ke bakteri E. coli | Humulin untuk diabetes |
| **Vaksin Rekombinan** | Protein virus diproduksi oleh organisme lain | Vaksin Hepatitis B |
| **Terapi Gen** | Memperbaiki gen yang rusak/bermutasi | Terapi untuk cystic fibrosis |
| **Antibodi Monoklonal** | Antibodi spesifik untuk target tertentu | Terapi kanker (Herceptin) |
| **Diagnostik DNA** | PCR untuk deteksi penyakit | COVID-19 PCR test |

### B. Bidang Pertanian

| Aplikasi | Penjelasan | Contoh |
|----------|-----------|--------|
| **Tanaman GMO** | Tanaman dengan gen asing yang disisipkan | Bt Cotton (tahan hama) |
| **Golden Rice** | Padi dengan gen penghasil beta-karoten | Mengatasi defisiensi Vitamin A |
| **Tanaman tahan herbisida** | Gen toleransi herbisida | Roundup Ready soybean |

### C. Bidang Industri

| Aplikasi | Penjelasan | Contoh |
|----------|-----------|--------|
| **Bioetanol** | Bahan bakar dari fermentasi biomassa | Etanol dari tebu |
| **Enzim industri** | Enzim dari mikroorganisme | Enzim pencuci (protease) |
| **Bioplastik** | Plastik biodegradable dari PHA | Pengganti plastik konvensional |

### D. Bidang Forensik & Cyber Security

| Aplikasi | Penjelasan | Relevansi |
|----------|-----------|-----------|
| **DNA Fingerprinting** | Identifikasi individu dari sampel DNA | Forensik kriminal |
| **DNA Database (CODIS)** | Database profil DNA kriminal | Law enforcement |
| **Metagenomics** | Analisis DNA dari sampel lingkungan | Environmental monitoring |

## 6.3 Teknologi Kunci dalam Bioteknologi Modern

### PCR (Polymerase Chain Reaction)
- Teknik untuk **memperbanyak** (amplifikasi) fragmen DNA tertentu
- Menghasilkan jutaan salinan DNA dari sampel sangat kecil
- Digunakan dalam: diagnostik, forensik, kloning

```
Siklus PCR:
1. Denaturasi (95°C) — DNA double strand terpisah
2. Annealing (55-65°C) — Primer mengikat template
3. Extension (72°C) — Taq Polymerase memanjangkan DNA

Setiap siklus menggandakan jumlah DNA:
1 → 2 → 4 → 8 → 16 → 32 → ... → 2^n (n = jumlah siklus)
Setelah 30 siklus: 2^30 ≈ 1 miliar salinan!
```

### Teknologi DNA Rekombinan
1. **Restriction enzyme** memotong DNA di urutan spesifik
2. **DNA ligase** menyambung DNA dari sumber berbeda
3. **Vector** (plasmid) membawa DNA asing ke dalam sel inang
4. Sel inang (E. coli) memproduksi protein yang dikode gen asing

### CRISPR-Cas9
- Sistem **editing genom** yang revolusioner
- Dapat **memotong, menambah, atau mengubah** urutan DNA dengan presisi tinggi
- Aplikasi: terapi gen, pembuatan model penyakit, pertanian

---

### 💡 CONTOH SOAL — Biotechnology

**Soal 1:** Berikan 3 contoh aplikasi bioteknologi di kehidupan sehari-hari dan jelaskan prinsip ilmiahnya!

**Jawaban:**

1. **Insulin Rekombinan untuk Diabetes**
   - *Prinsip:* Gen insulin manusia diisolasi dan disisipkan ke dalam plasmid bakteri E. coli menggunakan teknologi DNA Rekombinan
   - *Bakteri dikultur* dalam bioreaktor, memproduksi insulin dalam jumlah besar
   - Ini menggantikan insulin dari pankreas babi/sapi yang bisa menyebabkan alergi

2. **PCR Test COVID-19**
   - *Prinsip:* Teknik Polymerase Chain Reaction memperbanyak RNA virus SARS-CoV-2
   - RNA virus dikonversi ke DNA (RT-PCR), lalu diamplifikasi
   - Jika gen virus terdeteksi setelah amplifikasi, hasilnya positif

3. **Tempe (Bioteknologi Konvensional)**
   - *Prinsip:* Fermentasi kedelai oleh jamur *Rhizopus oligosporus*
   - Jamur menghasilkan enzim protease yang memecah protein kedelai
   - Protein menjadi lebih mudah dicerna, kandungan vitamin B12 meningkat

**Soal 2:** Bagaimana bioteknologi relevan dengan bidang Cyber Security?

**Jawaban:**
- **Bioinformatics Security** — Data genomik pasien merupakan data sensitif yang perlu dilindungi (biodata privacy)
- **DNA Database Security** — Database DNA forensik (CODIS) harus diamankan dari unauthorized access
- **Biosecurity** — Ancaman bio-terrorism memerlukan security framework khusus
- **Synthetic Biology** — Regulasi dan monitoring pembuatan organisme sintetis memerlukan cybersecurity
- **Digital DNA Storage** — DNA digunakan sebagai media penyimpanan data digital yang perlu diproteksi

---

# 📌 RINGKASAN KISI-KISI UTS

| No | Topik | Bobot | Poin Kunci |
|----|-------|-------|------------|
| 1 | **Central Dogma** | **40%** | Transkripsi, Translasi, Kodon → AA |
| 2 | **Mutasi** | **30%** | Silent, Missense, Nonsense, Frameshift |
| 3 | **Gene Structure** | Bagian Soal 2 | Exon (dikode), Intron (tidak dikode) |
| 4 | **Organization of Life** | 1 Soal | Atom → Molekul → Sel → ... → Biosfer |
| 5 | **NCBI / BLAST** | 1 Soal | Alignment, E-value, Identity % |
| 6 | **Biotechnology** | 1 Soal | Aplikasi biotek di kehidupan |

---

> 📝 *Dokumen ini disusun berdasarkan kisi-kisi UTS Computational Biology Semester 4 BINUS University. Semua materi telah disesuaikan dengan topik yang akan diujikan.*
>
> **Tips Belajar:**
> - Fokus utama pada **Central Dogma (40%)** — pastikan bisa mengerjakan soal transkripsi dan translasi
> - Latih kemampuan menentukan **tipe mutasi** dari perubahan nukleotida
> - Hafal urutan **organisasi kehidupan** dan contoh setiap tingkatan
> - Pahami cara membaca hasil **BLAST** (E-value, Identity, Query Cover)

---

*📘 StudyHub — Portal Materi Semester 4 — BINUS Cyber Security*  
*Last Updated: April 2026*
