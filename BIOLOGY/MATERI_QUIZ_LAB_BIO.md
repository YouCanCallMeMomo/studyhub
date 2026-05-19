# FULL CHEATSHEET BIOPYTHON & MATERI KISI-KISI LAB BIOLOGY

Dokumen ini berisi puluhan contoh pemanfaatan Python (khususnya library Biopython, pandas, dan matplotlib) secara mendalam untuk membantu Anda siap menghadapi studi kasus paling kompleks sekalipun saat Quiz Lab Computational Biology.

Pastikan environment Anda sudah menginstall library yang dibutuhkan:
```bash
pip install biopython pandas matplotlib
```

---

## 1. WORKING WITH BIOLOGICAL GENBANK FILES (Import & Read)

```python
from Bio import SeqIO
import pandas as pd

# Kasus 1: Membaca 1 record tunggal dari file FASTA (Asumsi file hanya berisi 1 sequence)
record_fasta = SeqIO.read("single_seq.fasta", "fasta")
print(record_fasta.id)
print(record_fasta.seq)

# Kasus 2: Membaca file FASTA yang berisi banyak sequence (Multifasta) menjadi list
records_list = list(SeqIO.parse("multi_seq.fasta", "fasta"))
print(f"Total Sequences: {len(records_list)}")
print(f"First ID: {records_list[0].id}")

# Kasus 3: Membaca GenBank (.gb) dan mengambil nama organismenya
for record in SeqIO.parse("data.gb", "genbank"):
    print("Organism:", record.annotations.get("organism", "Unknown"))
    print("Taxonomy:", record.annotations.get("taxonomy", []))

# Kasus 4: Menyimpan Fasta ke dalam Dictionary (Berguna untuk akses cepat via ID)
seq_dict = SeqIO.to_dict(SeqIO.parse("multi_seq.fasta", "fasta"))
print(seq_dict["NM_001126.3"].seq)

# Kasus 5: Mengekstrak hanya urutan DNA (string) dari semua record ke dalam list biasa
sequences = [str(rec.seq) for rec in SeqIO.parse("multi_seq.fasta", "fasta")]

# Kasus 6: Membaca fitur-fitur spesifik dari GenBank (Misal: mencari fitur berjenis 'gene' atau 'CDS')
record = SeqIO.read("data.gb", "genbank")
for feature in record.features:
    if feature.type == "gene":
        print(feature.qualifiers.get("gene", ["Unknown"])[0])
        print("Lokasi:", feature.location)

# Kasus 7: Mengkonversi file GenBank ke file FASTA
SeqIO.convert("data.gb", "genbank", "output.fasta", "fasta")

# Kasus 8: Filter sequence berdasar panjangnya (Hanya ambil sequence > 500 bp)
long_seqs = [rec for rec in SeqIO.parse("multi.fasta", "fasta") if len(rec.seq) > 500]
SeqIO.write(long_seqs, "long_seqs.fasta", "fasta")

# Kasus 9: Mengubah data FASTA menjadi Pandas DataFrame
ids = []
seqs = []
lengths = []
for r in SeqIO.parse("multi_seq.fasta", "fasta"):
    ids.append(r.id)
    seqs.append(str(r.seq))
    lengths.append(len(r.seq))
df = pd.DataFrame({"ID": ids, "Sequence": seqs, "Length": lengths})
print(df.head())
```

---

## 2. SEQUENCE MANIPULATION USING PYTHON

```python
from Bio.Seq import Seq

dna = Seq("ATGCGTACGTAGCTAGCTAGCTGATCGATGCTAGCTAGCTAGCTAG")

# Kasus 10: Mendapatkan panjang sequence
print(len(dna))

# Kasus 11: Memotong dari awal (Prefix) dan akhir (Suffix)
print(dna[:10])   # 10 karakter pertama
print(dna[-5:])   # 5 karakter terakhir

# Kasus 12: Memotong sequence (Substring) dengan step
print(dna[0:15:3]) # Ambil karakter dari index 0 s/d 14 dengan lompatan 3 (contoh: Kodon pertama tiap triplet)

# Kasus 13: Menemukan posisi awal substring dalam sequence utama
pos = dna.find("GATC")
print("GATC ditemukan di index:", pos)

# Kasus 14: Menghitung berapa kali pola berulang di dalam sequence utama
count_motif = dna.count("AGC")
print("AGC berulang sebanyak:", count_motif)

# Kasus 15: Concatenation (Menggabungkan 2 atau lebih objek Seq)
seq2 = Seq("TTTTTT")
seq3 = Seq("CCCCCC")
combined = dna + seq2 + seq3

# Kasus 16: Mengubah huruf menjadi kecil/besar (Lower/Upper)
print(dna.lower())

# Kasus 17: Komplemen DNA (A -> T, C -> G)
print("Complement:", dna.complement())

# Kasus 18: Komplemen RNA (A -> U, C -> G)
print("RNA Complement:", dna.complement_rna())

# Kasus 19: Reverse Sequence (Membalikkan string dari belakang)
print("Reversed:", dna[::-1])

# Kasus 20: Reverse Complement (Sangat sering digunakan untuk mencari strand komplemen)
print("Rev Complement:", dna.reverse_complement())

# Kasus 21: Mencari kodon start (ATG) dan mengambil sekuens setelahnya
start_idx = dna.find("ATG")
if start_idx != -1:
    print("Sequence setelah start codon:", dna[start_idx:])
```

---

## 3. SEQUENCE ANALYSIS (Tm, GC, MW, Nucleotide Frequency)

```python
from Bio.Seq import Seq
from Bio.SeqUtils import gc_fraction, molecular_weight, MeltingTemp as mt
from collections import Counter

dna = Seq("ATGCGTACGTAGCTAGCTAGCTGATCGATGCTAGCTAGCTAGCTAG")

# Kasus 22: Menghitung Fraksi GC (0.0 sampai 1.0)
gc_frac = gc_fraction(dna)
print("Fraksi GC:", gc_frac)

# Kasus 23: Menghitung Persentase GC dan AT (%)
gc_percent = gc_frac * 100
at_percent = 100 - gc_percent
print(f"GC %: {gc_percent:.2f}% | AT %: {at_percent:.2f}%")

# Kasus 24: Menghitung Tm menggunakan Rumus Wallace (Hanya akurat untuk oligonukleotida < 14 bp)
tm_wallace = mt.Tm_Wallace(dna[:14])
print("Tm (Wallace):", tm_wallace)

# Kasus 25: Menghitung Tm menggunakan GC Method (Untuk sequence sedang, 14 - 70 bp)
tm_gc = mt.Tm_GC(dna)
print("Tm (GC method):", tm_gc)

# Kasus 26: Menghitung Tm menggunakan Nearest Neighbor Thermodynamics (Sangat presisi)
tm_nn = mt.Tm_NN(dna)
print("Tm (Nearest Neighbor):", tm_nn)

# Kasus 27: Menghitung Berat Molekul (Molecular Weight) untuk Double Stranded DNA
mw_ds = molecular_weight(dna, double_stranded=True)
print("Molecular Weight (Double Stranded):", mw_ds)

# Kasus 28: Menghitung Berat Molekul untuk Single Stranded DNA
mw_ss = molecular_weight(dna, double_stranded=False)
print("Molecular Weight (Single Stranded):", mw_ss)

# Kasus 29: Menghitung Berat Molekul Protein
protein = Seq("MVLSPADKTN")
mw_prot = molecular_weight(protein, seq_type="protein")
print("MW Protein:", mw_prot)

# Kasus 30: Menghitung Frekuensi Basa secara manual
freq_A = dna.count('A')
freq_T = dna.count('T')
freq_C = dna.count('C')
freq_G = dna.count('G')
total = len(dna)
print(f"Freq A: {freq_A} ({freq_A/total*100:.1f}%)")

# Kasus 31: Menghitung Frekuensi menggunakan collections.Counter (Lebih pythonic dan cepat)
frekuensi = Counter(str(dna))
print("Dict Frekuensi:", frekuensi)
```

---

## 4. DNA & mRNA PROTEIN SYNTHESIS

```python
from Bio.Seq import Seq

dna = Seq("ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG")

# Kasus 32: Transkripsi (DNA -> RNA, T berubah jadi U)
rna = dna.transcribe()
print("RNA:", rna)

# Kasus 33: Reverse Transkripsi (RNA -> DNA, U berubah jadi T)
dna_back = rna.back_transcribe()
print("DNA Back:", dna_back)

# Kasus 34: Translasi standar (Dari DNA/RNA menjadi protein menggunakan Standard Table)
protein = dna.translate()
print("Protein:", protein)

# Kasus 35: Translasi dan berhenti otomatis saat bertemu Stop Codon (to_stop=True)
protein_stop = dna.translate(to_stop=True)
print("Protein (Berhenti di stop codon):", protein_stop)

# Kasus 36: Mengganti tabel translasi (Misal: menggunakan Vertebrate Mitochondrial Code - table 2)
prot_mito = dna.translate(table=2)
print("Protein (Mitochondrial):", prot_mito)

# Kasus 37: Mengubah karakter Stop Codon (Default: "*")
prot_custom_stop = dna.translate(stop_symbol="@")
print("Protein (Custom Stop):", prot_custom_stop)

# Kasus 38: Mencari Open Reading Frame (ORF) - Mencari dari start (ATG) sampai stop codon pertama
start_pos = dna.find("ATG")
if start_pos != -1:
    orf_dna = dna[start_pos:]
    protein_orf = orf_dna.translate(to_stop=True)
    print("ORF Translated:", protein_orf)

# Kasus 39: Mentranslasi 3 Reading Frames berbeda (Frame 1, 2, 3)
for frame in range(3):
    print(f"Frame {frame+1}:", dna[frame:].translate())
```

---

## 5. SEQUENCE ALIGNMENT (Local & Global)

```python
from Bio import Align

aligner = Align.PairwiseAligner()
seq1 = "GAACT"
seq2 = "GATCT"

# Kasus 40: Global Alignment (Needleman-Wunsch) - Mencocokkan ujung ke ujung
aligner.mode = 'global'
aligner.match_score = 1.0
aligner.mismatch_score = -2.0
aligner.gap_score = -2.5

alignments_global = aligner.align(seq1, seq2)
print("GLOBAL ALIGNMENT:")
print(alignments_global[0])
print("Score:", alignments_global[0].score)

# Kasus 41: Local Alignment (Smith-Waterman) - Mencari substring yang paling mirip
aligner.mode = 'local'
aligner.match_score = 2.0
aligner.mismatch_score = -1.0
aligner.open_gap_score = -10.0
aligner.extend_gap_score = -0.5

seq_a = "CGTGAATTCAT"
seq_b = "GAATT"
alignments_local = aligner.align(seq_a, seq_b)
print("LOCAL ALIGNMENT:")
print(alignments_local[0])
print("Score:", alignments_local[0].score)

# Kasus 42: Mendapatkan koordinat dari bagian yang tumpang tindih (alignment path)
best_aln = alignments_local[0]
print("Alignment Coordinates:", best_aln.aligned)
```

---

## 6. PLOTTING MENGGUNAKAN MATPLOTLIB

```python
import matplotlib.pyplot as plt
from Bio.Seq import Seq
from Bio.SeqUtils import gc_fraction
from collections import Counter

dna_seq = str(Seq("ATGCGTACGTAGCTAGCTAGCTGATCGATGCTAGCTAGCTAGCTAG"))

# Kasus 43: Bar Chart - Distribusi Basa ACGT
count = Counter(dna_seq)
labels = list(count.keys())
values = list(count.values())

plt.figure(figsize=(6, 4))
plt.bar(labels, values, color=['#3498db', '#e74c3c', '#2ecc71', '#f1c40f'])
plt.title("Distribusi Frekuensi Basa")
plt.xlabel("Basa Nukleotida")
plt.ylabel("Jumlah")
plt.show()

# Kasus 44: Pie Chart - Persentase Basa
plt.figure(figsize=(5, 5))
plt.pie(values, labels=labels, autopct='%1.1f%%', colors=['#3498db', '#e74c3c', '#2ecc71', '#f1c40f'])
plt.title("Komposisi Basa (Pie Chart)")
plt.show()

# Kasus 45: Line Chart - GC Content Sliding Window
window_size = 5
gc_windows = [gc_fraction(dna_seq[i:i+window_size])*100 for i in range(len(dna_seq) - window_size + 1)]

plt.figure(figsize=(10, 4))
plt.plot(range(len(gc_windows)), gc_windows, marker='o', linestyle='-', color='#8e44ad')
plt.title(f"Perubahan GC Content (Window={window_size})")
plt.xlabel("Posisi Awal Window")
plt.ylabel("GC %")
plt.grid(True)
plt.show()

# Kasus 46: Area Chart - AT vs GC Content di sepanjang sekuens (Sliding window)
at_windows = [100 - gc for gc in gc_windows]

plt.figure(figsize=(10, 4))
plt.fill_between(range(len(gc_windows)), gc_windows, color='green', alpha=0.5, label='GC%')
plt.fill_between(range(len(at_windows)), at_windows, color='blue', alpha=0.3, label='AT%')
plt.title("Area Chart: GC vs AT Sliding Window")
plt.xlabel("Posisi")
plt.ylabel("Persentase %")
plt.legend()
plt.show()

# Kasus 47: Histogram - Distribusi panjang dari sekumpulan sequence FASTA
# (Diasumsikan ada list panjang sequences)
lengths = [300, 350, 310, 500, 450, 400, 380, 520, 480, 330] # Data dummy
plt.figure(figsize=(7, 4))
plt.hist(lengths, bins=5, color='teal', edgecolor='black')
plt.title("Distribusi Panjang Sekuens (Histogram)")
plt.xlabel("Panjang Basa (bp)")
plt.ylabel("Jumlah Sequence")
plt.show()
```
