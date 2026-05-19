# Materi Quiz Lab Database Technology (MySQL)

Di kuis ini, semua pengujian akan berfokus pada eksekusi command SQL (Query) di dalam phpMyAdmin (MySQL). Berikut adalah panduan command SQL, sintaks, dan contoh kasus untuk masing-masing kriteria.

---

## 1. Select Data (Bobot: 20)
Mengambil atau menampilkan data dari dalam satu atau lebih tabel.
```sql
-- Mengambil semua kolom
SELECT * FROM Mahasiswa;

-- Mengambil kolom spesifik
SELECT NIM, Nama_Lengkap FROM Mahasiswa;

-- Mengambil data dengan kondisi (Filter)
SELECT NIM, Nama_Lengkap FROM Mahasiswa WHERE Jurusan = 'Cyber Security';

-- Mengambil data dengan kondisi menggunakan operator AND / OR
SELECT * FROM Mahasiswa WHERE Jurusan = 'Cyber Security' AND IPK > 3.5;
```

---

## 2. Select Data with Union (Bobot: 20)
Menggabungkan hasil dari dua atau lebih pernyataan `SELECT` ke dalam satu hasil set.
- `UNION` secara otomatis menghapus duplikat.
- Jika ingin memasukkan semua baris termasuk duplikat, gunakan `UNION ALL`.
- **Syarat**: Jumlah kolom dan tipe datanya harus sama.

```sql
-- Menampilkan nama dari tabel Mahasiswa dan tabel Dosen dalam satu list
SELECT Nama FROM Mahasiswa
UNION
SELECT Nama_Dosen FROM Dosen;

-- Menampilkan semua nama termasuk yang duplikat (jika ada yang namanya sama)
SELECT Nama FROM Mahasiswa
UNION ALL
SELECT Nama_Dosen FROM Dosen;
```

---

## 3. Select Data with Order By (Bobot: 10)
Mengurutkan data hasil *query*, baik secara menaik (*ascending/ASC*) maupun menurun (*descending/DESC*).

```sql
-- Mengurutkan nama mahasiswa sesuai abjad (A-Z)
SELECT * FROM Mahasiswa ORDER BY Nama_Lengkap ASC;

-- Mengurutkan IPK mahasiswa dari yang tertinggi ke terendah (Z-A)
SELECT * FROM Mahasiswa ORDER BY IPK DESC;

-- Mengurutkan berdasarkan banyak kolom (Misal: Jurusan A-Z, lalu IPK tertinggi)
SELECT * FROM Mahasiswa ORDER BY Jurusan ASC, IPK DESC;
```

---

## 4. Alter Table (Bobot: 10)
Digunakan untuk mengubah struktur tabel yang sudah dibuat, seperti menambah kolom, menghapus kolom, atau memodifikasi tipe data kolom.

```sql
-- Menambahkan kolom baru ke tabel
ALTER TABLE Mahasiswa ADD Alamat VARCHAR(255);

-- Memodifikasi tipe data dari kolom yang sudah ada
ALTER TABLE Mahasiswa MODIFY Alamat TEXT;

-- Mengganti nama kolom (Change Column) di MySQL
ALTER TABLE Mahasiswa CHANGE Alamat Alamat_Lengkap TEXT;

-- Menghapus kolom dari tabel
ALTER TABLE Mahasiswa DROP COLUMN Alamat_Lengkap;
```

---

## 5. Create View (Bobot: 20)
Membuat *virtual table* berdasarkan hasil eksekusi *query*. Data di dalam View tidak disimpan secara fisik, melainkan diambil dari tabel asli setiap kali View dipanggil.

```sql
-- Membuat View
CREATE VIEW View_Mahasiswa_Berprestasi AS
SELECT NIM, Nama_Lengkap, IPK 
FROM Mahasiswa 
WHERE IPK >= 3.5;

-- Menggunakan / Memanggil View
SELECT * FROM View_Mahasiswa_Berprestasi;

-- Menghapus View
DROP VIEW View_Mahasiswa_Berprestasi;
```

---

## 6. Update Data (Bobot: 10)
Digunakan untuk mengubah isi record atau baris data yang sudah ada di dalam tabel.
> **Peringatan**: Selalu gunakan klausa `WHERE`. Jika tidak, semua baris di tabel akan berubah!

```sql
-- Mengubah nilai IPK untuk mahasiswa dengan NIM tertentu
UPDATE Mahasiswa 
SET IPK = 3.9, Jurusan = 'Cyber Security'
WHERE NIM = '2602010101';
```

---

## 7. Delete Data (Bobot: 10)
Digunakan untuk menghapus record atau baris data dari tabel.
> **Peringatan**: Selalu gunakan klausa `WHERE`. Jika tidak, tabel akan menjadi kosong sepenuhnya!

```sql
-- Menghapus baris untuk mahasiswa dengan NIM tertentu
DELETE FROM Mahasiswa 
WHERE NIM = '2602010101';
```
