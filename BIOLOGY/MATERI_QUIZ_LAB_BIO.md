# Materi Quiz Lab Computational Biology (Python)

Pada kuis ini, pengerjaan berfokus penuh pada **Python Environment** yang dilengkapi dengan *library* Biologi Komputasi, terutama **Biopython**, **Pandas**, dan **Matplotlib**. Berikut adalah panduan *code* Python untuk setiap kriteria kuis.

> **Persiapan di Python**:
> Pastikan library Biopython sudah diinstall (`pip install biopython`).

---

## 1. Working With Biological GenBank Files (Bobot: 15)
### a) Import File & Read Sequence In (fasta/gb) Format
Membaca file `.fasta` dan `.gb` (GenBank) dan mengekstrak informasinya.

```python
from Bio import SeqIO

# 1. Membaca file FASTA
# SeqIO.parse akan me-return iterator dari semua record yang ada di file
print("=== FASTA FILE ===")
for record in SeqIO.parse("sequence.fasta", "fasta"):
    print("ID:", record.id)
    print("Sequence Length:", len(record.seq))
    print("Sequence:", record.seq) # Menampilkan sekuensnya

# 2. Membaca file GenBank (.gb)
print("\n=== GENBANK FILE ===")
for record in SeqIO.parse("sequence.gb", "genbank"):
    print("ID:", record.id)
    print("Name:", record.name)
    print("Description:", record.description)
    print("Sequence:", record.seq)
```

---

## 2. Sequence Manipulation Using Python (Bobot: 15)
Memanipulasi string sekuens biologi menggunakan object `Seq` dari Biopython.

```python
from Bio.Seq import Seq

my_seq = Seq("GATCGATGGGCCTATATAGGATCGAAAATCGC")

# Slicing (Memotong sekuens) seperti list pada Python
print("Karakter indeks 4 s/d 11:", my_seq[4:12])

# Concatenation (Menggabungkan sekuens)
seq2 = Seq("ATGC")
combined_seq = my_seq + seq2
print("Combined Seq:", combined_seq)

# Complement & Reverse Complement
print("Complement:", my_seq.complement())
print("Reverse Complement:", my_seq.reverse_complement())
```

---

## 3. Sequence Analysis (Bobot: 30)

```python
from Bio.Seq import Seq
from Bio.SeqUtils import gc_fraction, molecular_weight, MeltingTemp as mt

my_seq = Seq("GATCGATGGGCCTATATAGGATCGAAAATCGC")

# a) Determine GC / AT Content
# Fungsi gc_fraction() me-return desimal, kalikan 100 untuk persentase.
gc_content = gc_fraction(my_seq) * 100
at_content = 100 - gc_content

print(f"GC Content: {gc_content:.2f}%")
print(f"AT Content: {at_content:.2f}%")


# b) Determine Melting Temperature (Tm)
# Menggunakan Wallace rule, cocok untuk sekuens DNA pendek
tm_val = mt.Tm_Wallace(my_seq)
print(f"Melting Temperature (Tm): {tm_val:.2f} C")


# c) Determine Molecular Weight
mw = molecular_weight(my_seq)
print(f"Molecular Weight: {mw:.2f}")


# d) Finding Nucleotides Base Frequency
# Menggunakan method count() dari objek Seq
freq = {
    'A': my_seq.count('A'),
    'T': my_seq.count('T'),
    'C': my_seq.count('C'),
    'G': my_seq.count('G')
}
print("Nucleotides Frequency:", freq)
```

---

## 4. DNA & mRNA Protein Synthesis (Bobot: 10)
### Transcription & Translation

```python
from Bio.Seq import Seq

# Sekuens DNA (Coding strand)
coding_dna = Seq("ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG")

# 1. Transcription (DNA ke mRNA)
# Proses ini mengganti basa T (Thymine) menjadi U (Uracil)
messenger_rna = coding_dna.transcribe()
print("mRNA Sequence:", messenger_rna)

# 2. Translation (mRNA ke Asam Amino / Protein)
protein = messenger_rna.translate()
print("Protein Sequence:", protein)

# Bisa juga langsung translate dari DNA (akan memanggil transcribe() di latar belakang)
protein_direct = coding_dna.translate()
print("Protein dari DNA:", protein_direct)

# Jika ingin stop translation di stop codon pertama, tambahkan to_stop=True
# protein_stop = coding_dna.translate(to_stop=True)
```

---

## 5. Find Sequence Alignment & Similarities (Bobot: 15)
Menggunakan module `PairwiseAligner` untuk mendapatkan skor alignment.

```python
from Bio import Align

# Inisialisasi Aligner
aligner = Align.PairwiseAligner()

# Setting Mode (Global atau Local)
aligner.mode = 'global' # atau 'local' (Smith-Waterman)

# Setting Scoring
aligner.match_score = 1.0
aligner.mismatch_score = -1.0
aligner.open_gap_score = -2.0
aligner.extend_gap_score = -0.5

seq1 = "GAACT"
seq2 = "GATCT"

# Eksekusi Alignment
alignments = aligner.align(seq1, seq2)

# Mengambil alignment dengan score tertinggi
best_alignment = alignments[0]
print("Best Alignment Score:", best_alignment.score)

# Menampilkan secara visual
print(best_alignment)
```

---

## 6. Plotting (Bobot: 15)
Membuat visualisasi grafik dari data biologi menggunakan `matplotlib`.

```python
import matplotlib.pyplot as plt
from Bio.Seq import Seq

my_seq = Seq("GATCGATGGGCCTATATAGGATCGAAAATCGC")

# --- PLOTTING FREKUENSI NUKLEOTIDA (BAR CHART) ---
bases = ['A', 'T', 'C', 'G']
counts = [my_seq.count('A'), my_seq.count('T'), my_seq.count('C'), my_seq.count('G')]

plt.figure(figsize=(6, 4))
plt.bar(bases, counts, color=['blue', 'red', 'green', 'orange'])
plt.title("Nucleotide Frequency")
plt.xlabel("Bases")
plt.ylabel("Frequency (count)")
plt.show()

# --- PLOTTING GC CONTENT BERDASARKAN SLIDING WINDOW (LINE CHART) ---
from Bio.SeqUtils import gc_fraction

seq_str = str(my_seq)
window_size = 5
gc_values = []

# Menghitung GC content untuk setiap potongan window
for i in range(len(seq_str) - window_size + 1):
    sub_seq = seq_str[i:i+window_size]
    gc_values.append(gc_fraction(sub_seq) * 100)

plt.figure(figsize=(8, 4))
plt.plot(gc_values, marker='o', color='purple')
plt.title("GC Content Sliding Window (Size=5)")
plt.xlabel("Window Position")
plt.ylabel("GC %")
plt.grid(True)
plt.show()
```
