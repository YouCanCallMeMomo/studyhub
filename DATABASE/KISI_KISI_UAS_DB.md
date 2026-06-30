# KISI-KISI & LATIHAN SOAL UAS — DATABASE TECHNOLOGY (BINUS)
> Format UAS: **40% Essay** · **60% Studi Kasus (SQL)** · Total ~10–12 Soal
> Basis: Database **Toko Online** (5 tabel: customers, produk, kategori, orders, order_items)

---

## SAMPLE DATABASE: TOKO ONLINE

### DDL — Create Tables
```sql
CREATE TABLE kategori (
  kategori_id   INT PRIMARY KEY AUTO_INCREMENT,
  nama_kategori VARCHAR(100) NOT NULL
);

CREATE TABLE produk (
  produk_id    INT PRIMARY KEY AUTO_INCREMENT,
  nama_produk  VARCHAR(200) NOT NULL,
  harga        DECIMAL(12,2) NOT NULL,
  stok         INT NOT NULL DEFAULT 0,
  kategori_id  INT,
  FOREIGN KEY (kategori_id) REFERENCES kategori(kategori_id)
);

CREATE TABLE customers (
  customer_id INT PRIMARY KEY AUTO_INCREMENT,
  nama        VARCHAR(100) NOT NULL,
  email       VARCHAR(150) UNIQUE NOT NULL,
  kota        VARCHAR(50),
  tgl_daftar  DATE DEFAULT (CURDATE())
);

CREATE TABLE orders (
  order_id    INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT NOT NULL,
  tanggal     DATE NOT NULL,
  total_harga DECIMAL(12,2),
  status      ENUM('PENDING','COMPLETED','CANCELLED') DEFAULT 'PENDING',
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE order_items (
  order_item_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id      INT NOT NULL,
  produk_id     INT NOT NULL,
  qty           INT NOT NULL,
  harga_satuan  DECIMAL(12,2) NOT NULL,
  FOREIGN KEY (order_id)   REFERENCES orders(order_id),
  FOREIGN KEY (produk_id)  REFERENCES produk(produk_id)
);
```

### Data Dummy
| kategori_id | nama_kategori |
|---|---|
| 1 | Elektronik |
| 2 | Fashion |
| 3 | Olahraga |

| produk_id | nama_produk | harga | stok | kategori_id |
|---|---|---|---|---|
| 101 | Keyboard Mekanik | 450000 | 20 | 1 |
| 102 | Mouse Wireless | 150000 | 35 | 1 |
| 103 | Kemeja Flanel | 180000 | 50 | 2 |
| 104 | Sepatu Lari | 620000 | 15 | 3 |
| 105 | Headphone BT | 380000 | 10 | 1 |

| customer_id | nama | kota |
|---|---|---|
| 1 | Dewi Lestari | Jakarta |
| 2 | Rangga Pratama | Bandung |
| 3 | Sinta Wulandari | Surabaya |
| 4 | Budi Santoso | Jakarta |
| 5 | Arief Wijaya | Surabaya |

| order_id | customer_id | tanggal | total_harga | status |
|---|---|---|---|---|
| 1001 | 1 | 2026-05-01 | 600000 | COMPLETED |
| 1002 | 2 | 2026-05-03 | 180000 | COMPLETED |
| 1003 | 1 | 2026-05-10 | 620000 | PENDING |
| 1004 | 4 | 2026-05-12 | 1200000 | COMPLETED |
| 1005 | 3 | 2026-05-14 | 380000 | COMPLETED |
| 1006 | 4 | 2026-05-20 | 450000 | CANCELLED |
| 1007 | 5 | 2026-05-22 | 760000 | PENDING |

| order_item_id | order_id | produk_id | qty | harga_satuan |
|---|---|---|---|---|
| 1 | 1001 | 101 | 1 | 450000 |
| 2 | 1001 | 102 | 1 | 150000 |
| 3 | 1002 | 103 | 1 | 180000 |
| 4 | 1003 | 104 | 1 | 620000 |
| 5 | 1004 | 101 | 2 | 450000 |
| 6 | 1004 | 102 | 2 | 150000 |
| 7 | 1005 | 105 | 1 | 380000 |
| 8 | 1007 | 101 | 1 | 450000 |
| 9 | 1007 | 104 | 1 | 310000 |

---

## BAGIAN A — ESSAY (40%)

---

### SOAL 1 — Aggregate Function & GROUP BY/HAVING (Essay)

**Soal:**
Jelaskan urutan eksekusi klausa-klausa SQL berikut secara berurutan: `FROM`, `JOIN`, `WHERE`, `GROUP BY`, `HAVING`, `SELECT`, `ORDER BY`, `LIMIT`. Kemudian, berikan contoh kasus di mana seseorang bisa keliru menggunakan `WHERE` alih-alih `HAVING`, dan jelaskan mengapa query tersebut akan error.

**Pembahasan:**

Urutan eksekusi SQL (bukan urutan penulisan):
1. **FROM / JOIN** — Database menentukan tabel mana yang dipakai dan melakukan join
2. **WHERE** — Menyaring baris *mentah* (sebelum dikelompokkan); **tidak bisa** pakai aggregate function di sini
3. **GROUP BY** — Mengelompokkan baris hasil WHERE
4. **HAVING** — Menyaring *kelompok* hasil GROUP BY; **bisa** pakai aggregate function
5. **SELECT** — Memilih kolom yang ditampilkan (alias baru lahir di sini)
6. **ORDER BY** — Mengurutkan hasil (bisa pakai alias yang lahir di SELECT)
7. **LIMIT / OFFSET** — Membatasi jumlah baris yang dikembalikan

**Contoh Keliru:**
```sql
-- ❌ SALAH — SUM() belum tersedia saat WHERE dieksekusi
SELECT customer_id, SUM(total_harga)
FROM orders
WHERE SUM(total_harga) > 500000   -- ERROR: Invalid use of group function
GROUP BY customer_id;

-- ✅ BENAR — Gunakan HAVING setelah GROUP BY
SELECT customer_id, SUM(total_harga) AS total_belanja
FROM orders
GROUP BY customer_id
HAVING SUM(total_harga) > 500000;
```

**Aturan penentu:** kalau kondisi melibatkan hasil perhitungan banyak baris → **HAVING**. Kalau kondisi hanya mengacu pada nilai kolom individual per baris → **WHERE**.

---

### SOAL 2 — Subquery (Essay)

**Soal:**
Jelaskan perbedaan antara **Correlated Subquery** dan **Non-Correlated Subquery**. Berikan masing-masing satu contoh query SQL menggunakan database Toko Online, dan analisis mana yang lebih efisien dari sisi performa database — serta kapan sebaiknya masing-masing digunakan.

**Pembahasan:**

| | Non-Correlated | Correlated |
|---|---|---|
| Referensi outer query | Tidak ada | Ada (pakai kolom tabel luar) |
| Dieksekusi | 1 kali saja | Sekali per baris tabel luar |
| Performa | Lebih cepat | Lebih lambat (O(n)) |
| Bisa di-cache | Ya | Tidak |

**Contoh Non-Correlated:**
```sql
-- Produk yang harganya di atas rata-rata seluruh produk
-- Subquery di dalam dieksekusi SEKALI, hasilnya (342000) di-cache
SELECT nama_produk, harga
FROM produk
WHERE harga > (SELECT AVG(harga) FROM produk);
-- Subquery AVG(harga) dieksekusi 1x, tidak bergantung pada baris luar
```

**Contoh Correlated:**
```sql
-- Customer yang total belanjanya di atas rata-rata semua customer
-- Subquery di dalam dieksekusi ULANG untuk tiap baris di tabel customers
SELECT c.nama
FROM customers c
WHERE (
  SELECT SUM(o.total_harga) 
  FROM orders o 
  WHERE o.customer_id = c.customer_id  -- <-- referensi ke outer query
    AND o.status = 'COMPLETED'
) > (
  SELECT AVG(total_per_c) FROM (
    SELECT customer_id, SUM(total_harga) AS total_per_c
    FROM orders WHERE status = 'COMPLETED'
    GROUP BY customer_id
  ) sub
);
```

**Rekomendasi:** Gunakan **Non-Correlated** bila memungkinkan. Ganti **Correlated** dengan JOIN + GROUP BY untuk dataset besar karena jauh lebih efisien.

---

### SOAL 3 — Trigger (Essay)

**Soal:**
Jelaskan perbedaan timing `BEFORE` dan `AFTER` pada trigger MySQL. Berikan contoh skenario nyata dari sistem toko online di mana Anda **wajib** menggunakan `BEFORE` dan satu skenario di mana Anda **wajib** menggunakan `AFTER`. Jelaskan konsekuensi jika timing dipilih salah.

**Pembahasan:**

| Aspek | BEFORE | AFTER |
|---|---|---|
| Waktu eksekusi | Sebelum data disimpan ke tabel | Setelah data berhasil disimpan |
| Bisa ubah NEW.value | Ya (`SET NEW.kolom = ...`) | Tidak |
| Tujuan utama | Validasi & modifikasi data sebelum masuk | Aksi turunan (update tabel lain, logging) |
| Bisa pakai SIGNAL | Ya, untuk tolak insert | Ya (tapi data sudah masuk) |

**Skenario WAJIB BEFORE — Validasi Stok:**
```sql
-- Kita HARUS pakai BEFORE karena ingin MENCEGAH data invalid masuk
-- Kalau pakai AFTER, order_items sudah terlanjur tersimpan, baru ditolak → inkonsisten

DELIMITER $$
CREATE TRIGGER trg_validasi_stok_before
BEFORE INSERT ON order_items
FOR EACH ROW
BEGIN
  DECLARE stok_sekarang INT;
  SELECT stok INTO stok_sekarang FROM produk WHERE produk_id = NEW.produk_id;
  
  IF stok_sekarang IS NULL THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Produk tidak ditemukan';
  END IF;
  
  IF NEW.qty <= 0 THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Qty harus lebih dari 0';
  END IF;
  
  IF NEW.qty > stok_sekarang THEN
    SIGNAL SQLSTATE '45000' 
    SET MESSAGE_TEXT = 'Stok tidak mencukupi';
  END IF;
END$$
DELIMITER ;
```

**Skenario WAJIB AFTER — Update Stok Otomatis:**
```sql
-- Kita HARUS pakai AFTER karena:
-- 1. Kita perlu ID yang baru di-insert (NEW.order_item_id) sudah valid
-- 2. Baris harus sudah benar-benar tersimpan sebelum kita update tabel lain

DELIMITER $$
CREATE TRIGGER trg_kurangi_stok_after
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
  UPDATE produk 
  SET stok = stok - NEW.qty
  WHERE produk_id = NEW.produk_id;
END$$
DELIMITER ;
```

**Konsekuensi Salah Timing:**
- `AFTER` untuk validasi → data sudah terlanjur masuk, SIGNAL akan membatalkan transaksi tapi meninggalkan state yang ambigu
- `BEFORE` untuk logging ke tabel log → ID baru belum tentu ada (AUTO_INCREMENT belum di-assign), bisa menyebabkan log dengan referensi yang salah

---

### SOAL 4 — SQL Transaction & ACID (Essay)

**Soal:**
Seorang developer menulis kode proses checkout tanpa membungkusnya dalam SQL Transaction. Analisis apa yang bisa terjadi jika server tiba-tiba mati setelah UPDATE stok berhasil tapi sebelum INSERT orders selesai. Hubungkan analisis tersebut dengan properti ACID mana yang dilanggar. Kemudian tulis implementasi yang benar menggunakan Transaction dengan error handling.

**Pembahasan:**

**Skenario Tanpa Transaction:**
```
Langkah 1: UPDATE produk SET stok = stok - 1 WHERE produk_id = 104; ✅ BERHASIL
           → stok berkurang dari 15 → 14
[SERVER MATI]
Langkah 2: INSERT INTO orders ...  ← TIDAK PERNAH DIEKSEKUSI
Langkah 3: INSERT INTO order_items ... ← TIDAK PERNAH DIEKSEKUSI
```

**ACID yang Dilanggar:**
- ❌ **Atomicity** — Operasi tidak diperlakukan sebagai satu unit; hanya sebagian yang berhasil
- ❌ **Consistency** — Database jatuh ke state tidak valid: stok berkurang tapi order tidak ada
- ✅ **Isolation** — Tidak relevan di sini (tidak ada operasi concurrent)
- ✅ **Durability** — Yang sudah di-commit memang persisten, tapi masalahnya di Atomicity

**Implementasi Benar dengan Transaction:**
```sql
-- Prosedur checkout yang aman dengan transaction + error handling
DELIMITER $$

CREATE PROCEDURE sp_checkout(
  IN p_customer_id  INT,
  IN p_produk_id    INT,
  IN p_qty          INT
)
BEGIN
  DECLARE v_harga     DECIMAL(12,2);
  DECLARE v_stok      INT;
  DECLARE v_order_id  INT;
  DECLARE v_total     DECIMAL(12,2);
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
    RESIGNAL;  -- lempar kembali error ke pemanggil
  END;

  -- Ambil harga & stok, kunci baris dengan FOR UPDATE (hindari race condition)
  SELECT harga, stok INTO v_harga, v_stok
  FROM produk
  WHERE produk_id = p_produk_id
  FOR UPDATE;

  -- Validasi stok
  IF v_stok < p_qty THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Stok tidak cukup';
  END IF;

  SET v_total = v_harga * p_qty;

  START TRANSACTION;

    -- 1. Kurangi stok
    UPDATE produk
    SET stok = stok - p_qty
    WHERE produk_id = p_produk_id;

    -- 2. Buat order baru
    INSERT INTO orders (customer_id, tanggal, total_harga, status)
    VALUES (p_customer_id, CURDATE(), v_total, 'PENDING');
    
    SET v_order_id = LAST_INSERT_ID();

    -- 3. Catat order item
    INSERT INTO order_items (order_id, produk_id, qty, harga_satuan)
    VALUES (v_order_id, p_produk_id, p_qty, v_harga);

  COMMIT;
END$$

DELIMITER ;

-- Cara pakai:
CALL sp_checkout(3, 104, 1);
```

---

## BAGIAN B — STUDI KASUS / SQL CODING (60%)

---

### SOAL 5 — Aggregate + JOIN + GROUP BY + HAVING (Studi Kasus)

**Soal:**
Tampilkan **nama kategori** beserta:
- Jumlah produk dalam kategori tersebut (`jumlah_produk`)
- Rata-rata harga produk dalam kategori tersebut (`rata_harga`)
- Produk termahal dalam kategori (`harga_max`)

Hanya tampilkan kategori yang **rata-rata harganya di atas 300.000** dan **memiliki minimal 2 produk**. Urutkan dari rata-rata harga tertinggi.

**Jawaban:**
```sql
SELECT
  k.nama_kategori,
  COUNT(p.produk_id)   AS jumlah_produk,
  AVG(p.harga)         AS rata_harga,
  MAX(p.harga)         AS harga_max
FROM kategori k
JOIN produk p ON p.kategori_id = k.kategori_id
GROUP BY k.kategori_id, k.nama_kategori
HAVING AVG(p.harga) > 300000
   AND COUNT(p.produk_id) >= 2
ORDER BY rata_harga DESC;
```

**Penjelasan query:**
| Klausa | Fungsi |
|---|---|
| `JOIN produk` | Gabungkan kategori dengan produknya (INNER JOIN, hanya kategori yang punya produk) |
| `GROUP BY k.kategori_id, k.nama_kategori` | Kelompokkan per kategori agar fungsi aggregate dihitung per-kategori |
| `COUNT(p.produk_id)` | Hitung jumlah produk di tiap kategori |
| `AVG(p.harga)` | Rata-rata harga produk per kategori |
| `HAVING AVG(...) > 300000 AND COUNT(...) >= 2` | Filter setelah agregasi — tidak bisa pakai WHERE |
| `ORDER BY rata_harga DESC` | Alias dari SELECT bisa dipakai di ORDER BY |

**Hasil dengan data dummy:**
> Elektronik: 3 produk, rata-rata ~326.667, max 450.000 ✅ (muncul)
> Olahraga: 1 produk → tidak muncul (jumlah < 2)
> Fashion: 1 produk → tidak muncul (jumlah < 2)

---

### SOAL 6 — Multi-Table JOIN + Subquery + Aggregate (Studi Kasus)

**Soal:**
Tampilkan daftar customer beserta:
- Total uang yang sudah dibelanjakan (hanya order COMPLETED)
- Jumlah order COMPLETED
- Produk terakhir yang dibeli (nama produknya)
- Bandingkan total belanja mereka dengan rata-rata total belanja semua customer

Urutkan dari total belanja terbesar.

**Jawaban:**
```sql
SELECT
  c.nama,
  c.kota,
  COUNT(DISTINCT o.order_id)            AS jumlah_order,
  SUM(oi.qty * oi.harga_satuan)         AS total_belanja,
  (SELECT AVG(total_per_c)
   FROM (
     SELECT SUM(oi2.qty * oi2.harga_satuan) AS total_per_c
     FROM orders o2
     JOIN order_items oi2 ON o2.order_id = oi2.order_id
     WHERE o2.status = 'COMPLETED'
     GROUP BY o2.customer_id
   ) avg_sub)                           AS rata_rata_semua,
  SUM(oi.qty * oi.harga_satuan) - 
  (SELECT AVG(total_per_c)
   FROM (
     SELECT SUM(oi2.qty * oi2.harga_satuan) AS total_per_c
     FROM orders o2
     JOIN order_items oi2 ON o2.order_id = oi2.order_id
     WHERE o2.status = 'COMPLETED'
     GROUP BY o2.customer_id
   ) avg_sub)                           AS selisih_dari_rata
FROM customers c
JOIN orders o ON o.customer_id = c.customer_id
  AND o.status = 'COMPLETED'
JOIN order_items oi ON oi.order_id = o.order_id
GROUP BY c.customer_id, c.nama, c.kota
ORDER BY total_belanja DESC;
```

**Penjelasan query:**
- **JOIN ganda**: Dari customers → orders (filter COMPLETED) → order_items agar bisa hitung qty × harga_satuan
- **Scalar subquery di SELECT**: Dua kali dipakai untuk rata-rata dan selisih — ini adalah *non-correlated scalar subquery* yang dieksekusi sekali dan hasilnya dipakai berulang
- **SUM(qty × harga_satuan)** vs `total_harga` di tabel orders: lebih akurat karena dihitung dari detail item, bukan angka denormalisasi

---

### SOAL 7 — Subquery dengan NOT EXISTS & IN (Studi Kasus)

**Soal:**
Dalam dua query terpisah:

a) Tampilkan produk yang **belum pernah dipesan sama sekali** (gunakan NOT EXISTS)  
b) Tampilkan customer yang **pernah membeli produk dari kategori Elektronik** (gunakan IN bertingkat)

**Jawaban — bagian (a):**
```sql
-- a) Produk yang belum pernah dipesan — NOT EXISTS
SELECT p.produk_id, p.nama_produk, p.stok
FROM produk p
WHERE NOT EXISTS (
  SELECT 1
  FROM order_items oi
  WHERE oi.produk_id = p.produk_id   -- referensi ke outer: ini correlated subquery
);
```

**Penjelasan (a):**
- `SELECT 1` tidak berarti "pilih angka 1" — ini shorthand untuk "cek ada baris atau tidak"; nilai 1 dibuang, yang penting ada/tidaknya baris
- `NOT EXISTS` berhenti segera setelah menemukan 1 baris yang cocok → lebih efisien dari `NOT IN` ketika kolom referensi bisa NULL
- `NOT IN` + NULL bisa memberikan hasil kosong yang tidak terduga (karena `produk_id NOT IN (1, 2, NULL)` selalu FALSE)

**Jawaban — bagian (b):**
```sql
-- b) Customer yang membeli produk Elektronik — IN bertingkat
SELECT DISTINCT c.nama, c.email
FROM customers c
WHERE c.customer_id IN (
  SELECT o.customer_id
  FROM orders o
  WHERE o.order_id IN (
    SELECT oi.order_id
    FROM order_items oi
    WHERE oi.produk_id IN (
      SELECT p.produk_id
      FROM produk p
      WHERE p.kategori_id = (
        SELECT k.kategori_id
        FROM kategori k
        WHERE k.nama_kategori = 'Elektronik'
      )
    )
  )
);
```

**Penjelasan (b):**
Ini adalah rantai IN bertingkat 4 level — dari customer_id → order_id → produk_id → kategori_id. Meski benar secara logika, di dunia nyata ini lebih efisien ditulis dengan JOIN:
```sql
-- Versi JOIN yang lebih efisien (hasilnya sama):
SELECT DISTINCT c.nama, c.email
FROM customers c
JOIN orders o       ON o.customer_id = c.customer_id
JOIN order_items oi ON oi.order_id = o.order_id
JOIN produk p       ON p.produk_id = oi.produk_id
JOIN kategori k     ON k.kategori_id = p.kategori_id
WHERE k.nama_kategori = 'Elektronik';
```

---

### SOAL 8 — Trigger Kompleks (Studi Kasus)

**Soal:**
Rancang sebuah **trigger** yang bekerja saat order di-`UPDATE` dan statusnya berubah dari `PENDING` menjadi `CANCELLED`. Trigger harus:
1. Mengembalikan stok semua produk yang ada di `order_items` terkait
2. Mencatat perubahan ke tabel `order_log` (yang harus Anda definisikan strukturnya terlebih dahulu)

**Jawaban:**
```sql
-- Langkah 1: Buat tabel log terlebih dahulu
CREATE TABLE order_log (
  log_id      INT PRIMARY KEY AUTO_INCREMENT,
  order_id    INT NOT NULL,
  aksi        VARCHAR(50),
  keterangan  TEXT,
  waktu       DATETIME DEFAULT CURRENT_TIMESTAMP,
  old_status  VARCHAR(20),
  new_status  VARCHAR(20)
);

-- Langkah 2: Buat trigger AFTER UPDATE pada tabel orders
DELIMITER $$

CREATE TRIGGER trg_restore_stok_on_cancel
AFTER UPDATE ON orders
FOR EACH ROW
BEGIN
  -- Hanya proses jika status berubah dari PENDING ke CANCELLED
  IF OLD.status = 'PENDING' AND NEW.status = 'CANCELLED' THEN
    
    -- 1. Kembalikan stok semua produk di order ini
    UPDATE produk p
    JOIN order_items oi ON p.produk_id = oi.produk_id
    SET p.stok = p.stok + oi.qty
    WHERE oi.order_id = NEW.order_id;
    
    -- 2. Catat ke log
    INSERT INTO order_log (order_id, aksi, keterangan, old_status, new_status)
    VALUES (
      NEW.order_id,
      'CANCEL_RESTOCK',
      CONCAT('Order dibatalkan, stok dikembalikan. Total refund: ', NEW.total_harga),
      OLD.status,
      NEW.status
    );
    
  END IF;
END$$

DELIMITER ;

-- Test trigger:
UPDATE orders SET status = 'CANCELLED' WHERE order_id = 1003;
-- Stok produk_id 104 harus naik dari 14 → 15

-- Cek hasilnya:
SELECT * FROM order_log;
SELECT produk_id, stok FROM produk WHERE produk_id = 104;
```

**Penjelasan:**
- Digunakan `AFTER UPDATE` karena kita bereaksi *setelah* data order berhasil diubah
- `OLD.status` dan `NEW.status` adalah pseudo-records yang merujuk ke nilai sebelum dan sesudah UPDATE
- `UPDATE ... JOIN` dipakai untuk update produk berdasarkan order_items terkait dalam satu operasi — lebih efisien dari cursor atau loop
- Kondisi `IF OLD.status = 'PENDING' AND NEW.status = 'CANCELLED'` penting agar trigger tidak jalan jika status tidak berubah seperti yang diharapkan

---

### SOAL 9 — Transaction dengan SAVEPOINT (Studi Kasus)

**Soal:**
Skenario: Toko online menerima **bulk order** dari 2 customer sekaligus dalam satu batch transaksi. Jika order customer pertama gagal (stok habis), hanya order customer pertama yang dibatalkan — order customer kedua tetap dilanjutkan. Implementasikan menggunakan SAVEPOINT.

**Jawaban:**
```sql
START TRANSACTION;

-- ============================================
-- ORDER CUSTOMER 1: Budi (customer_id=4) 
-- Beli Sepatu Lari (produk_id=104), qty=20 ← stok hanya 15, pasti GAGAL
-- ============================================
SAVEPOINT sp_order_budi;

UPDATE produk SET stok = stok - 20 WHERE produk_id = 104 AND stok >= 20;

-- Cek apakah update berhasil (ROW_COUNT() = 0 berarti stok tidak cukup)
-- Di stored procedure kita bisa cek dengan IF ROW_COUNT() = 0
-- Di sini kita simulasikan gagal → rollback ke savepoint

ROLLBACK TO SAVEPOINT sp_order_budi;
-- Order Budi dibatalkan, semua perubahan sejak sp_order_budi dikembalikan

-- ============================================
-- ORDER CUSTOMER 2: Arief (customer_id=5)
-- Beli Headphone (produk_id=105), qty=1 ← stok 10, harusnya aman
-- ============================================
SAVEPOINT sp_order_arief;

UPDATE produk 
SET stok = stok - 1 
WHERE produk_id = 105 AND stok >= 1;

INSERT INTO orders (customer_id, tanggal, total_harga, status)
VALUES (5, CURDATE(), 380000, 'PENDING');

INSERT INTO order_items (order_id, produk_id, qty, harga_satuan)
VALUES (LAST_INSERT_ID(), 105, 1, 380000);

-- Order Arief sukses → commit
COMMIT;

-- Cek akhir:
SELECT produk_id, stok FROM produk WHERE produk_id IN (104, 105);
-- produk 104: stok tetap 15 (karena rollback)
-- produk 105: stok berkurang jadi 9
```

**Penjelasan:**
- `SAVEPOINT nama` membuat checkpoint di tengah transaksi
- `ROLLBACK TO SAVEPOINT nama` membatalkan hanya sampai checkpoint tersebut, bukan membatalkan seluruh transaksi
- `RELEASE SAVEPOINT nama` menghapus checkpoint (opsional, otomatis hilang saat COMMIT/ROLLBACK penuh)
- Setelah `ROLLBACK TO SAVEPOINT`, transaksi masih aktif dan bisa dilanjutkan
- Pattern ini berguna untuk **batch processing** di mana sebagian item boleh gagal tanpa membatalkan seluruh batch

---

### SOAL 10 — Correlated Subquery Kompleks (Studi Kasus)

**Soal:**
Tampilkan setiap produk beserta **ranking penjualannya** dalam kategori yang sama. Produk dengan total qty terjual terbanyak dalam kategorinya mendapat rank 1.

**Jawaban:**
```sql
-- Pendekatan 1: Correlated Subquery (tanpa window function)
SELECT
  p.nama_produk,
  k.nama_kategori,
  COALESCE(SUM(oi.qty), 0)    AS total_terjual,
  (
    SELECT COUNT(DISTINCT p2.produk_id) + 1
    FROM produk p2
    LEFT JOIN order_items oi2 ON p2.produk_id = oi2.produk_id
    WHERE p2.kategori_id = p.kategori_id
      AND COALESCE((SELECT SUM(qty) FROM order_items WHERE produk_id = p2.produk_id), 0)
          > COALESCE(SUM(oi.qty), 0)
  ) AS rank_dalam_kategori
FROM produk p
JOIN kategori k ON p.kategori_id = k.kategori_id
LEFT JOIN order_items oi ON p.produk_id = oi.produk_id
GROUP BY p.produk_id, p.nama_produk, k.nama_kategori, p.kategori_id
ORDER BY k.nama_kategori, rank_dalam_kategori;

-- Pendekatan 2: Menggunakan RANK() Window Function (MySQL 8.0+)
SELECT
  p.nama_produk,
  k.nama_kategori,
  COALESCE(SUM(oi.qty), 0) AS total_terjual,
  RANK() OVER (
    PARTITION BY p.kategori_id
    ORDER BY COALESCE(SUM(oi.qty), 0) DESC
  ) AS rank_dalam_kategori
FROM produk p
JOIN kategori k ON p.kategori_id = k.kategori_id
LEFT JOIN order_items oi ON p.produk_id = oi.produk_id
GROUP BY p.produk_id, p.nama_produk, k.nama_kategori, p.kategori_id
ORDER BY k.nama_kategori, rank_dalam_kategori;
```

**Penjelasan:**
- `RANK()` adalah **window function** yang memberi nomor urut berdasarkan ORDER BY dalam PARTITION — tidak menggabungkan baris seperti GROUP BY
- `PARTITION BY kategori_id` artinya ranking di-reset tiap ganti kategori
- `COALESCE(SUM(oi.qty), 0)` menangani produk yang belum pernah terjual (LEFT JOIN menghasilkan NULL)
- Pendekatan correlated subquery lebih panjang dan lambat tapi bisa dipakai di MySQL versi lama

---

### SOAL 11 — Stored Procedure + Transaction (Studi Kasus Bonus)

**Soal:**
Buat **stored procedure** bernama `sp_transfer_stok` yang memindahkan sejumlah stok dari satu produk ke produk lain (misalnya ketika produk digabung atau diganti). Procedure harus:
- Menerima parameter: `produk_dari`, `produk_ke`, `jumlah`
- Validasi stok sumber mencukupi
- Menggunakan transaction untuk menjamin atomicity

**Jawaban:**
```sql
DELIMITER $$

CREATE PROCEDURE sp_transfer_stok(
  IN p_dari  INT,   -- produk_id sumber
  IN p_ke    INT,   -- produk_id tujuan
  IN p_jml   INT    -- jumlah stok yang dipindah
)
BEGIN
  DECLARE v_stok_dari  INT DEFAULT 0;
  DECLARE v_stok_ke    INT DEFAULT 0;
  
  -- EXIT HANDLER: jika ada SQL error, otomatis rollback
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
    RESIGNAL;
  END;
  
  -- Validasi parameter
  IF p_jml <= 0 THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Jumlah transfer harus > 0';
  END IF;
  
  IF p_dari = p_ke THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Produk sumber dan tujuan tidak boleh sama';
  END IF;
  
  -- Ambil stok dengan penguncian baris (FOR UPDATE mencegah race condition)
  START TRANSACTION;
  
    SELECT stok INTO v_stok_dari FROM produk WHERE produk_id = p_dari FOR UPDATE;
    SELECT stok INTO v_stok_ke   FROM produk WHERE produk_id = p_ke   FOR UPDATE;
    
    -- Cek produk ada
    IF v_stok_dari IS NULL THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Produk sumber tidak ditemukan';
    END IF;
    IF v_stok_ke IS NULL THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Produk tujuan tidak ditemukan';
    END IF;
    
    -- Cek stok mencukupi
    IF v_stok_dari < p_jml THEN
      SIGNAL SQLSTATE '45000' 
      SET MESSAGE_TEXT = 'Stok sumber tidak mencukupi untuk transfer';
    END IF;
    
    -- Lakukan transfer
    UPDATE produk SET stok = stok - p_jml WHERE produk_id = p_dari;
    UPDATE produk SET stok = stok + p_jml WHERE produk_id = p_ke;
    
    -- Log ke order_log (repurpose untuk aksi admin)
    INSERT INTO order_log (order_id, aksi, keterangan, old_status, new_status)
    VALUES (0, 'TRANSFER_STOK', 
            CONCAT('Transfer ', p_jml, ' unit dari produk #', p_dari, ' ke produk #', p_ke),
            CONCAT('Stok sebelum: ', v_stok_dari),
            CONCAT('Stok setelah: ', v_stok_dari - p_jml));
  
  COMMIT;
  
  -- Return hasil
  SELECT 
    p_dari AS produk_dari,
    p_ke   AS produk_ke,
    p_jml  AS jumlah_transfer,
    'SUCCESS' AS status_transfer;
END$$

DELIMITER ;

-- Cara pakai:
CALL sp_transfer_stok(101, 102, 5);
-- 5 unit Keyboard Mekanik dipindahkan ke Mouse Wireless
```

---

### SOAL 12 — View + Query Kompleks (Studi Kasus)

**Soal:**
Buat sebuah **VIEW** bernama `v_laporan_penjualan` yang merangkum penjualan per produk per bulan. VIEW harus memuat: nama produk, kategori, bulan, tahun, total qty terjual, total revenue. Setelah membuat VIEW, tulis query untuk menampilkan **produk dengan revenue tertinggi per bulan di setiap kategori**.

**Jawaban:**
```sql
-- Langkah 1: Buat VIEW
CREATE VIEW v_laporan_penjualan AS
SELECT
  p.produk_id,
  p.nama_produk,
  k.nama_kategori,
  MONTH(o.tanggal)              AS bulan,
  YEAR(o.tanggal)               AS tahun,
  SUM(oi.qty)                   AS total_qty_terjual,
  SUM(oi.qty * oi.harga_satuan) AS total_revenue
FROM produk p
JOIN kategori k     ON p.kategori_id = k.kategori_id
JOIN order_items oi ON p.produk_id = oi.produk_id
JOIN orders o       ON oi.order_id = o.order_id
WHERE o.status IN ('COMPLETED', 'PENDING')  -- exclude CANCELLED
GROUP BY p.produk_id, p.nama_produk, k.nama_kategori, MONTH(o.tanggal), YEAR(o.tanggal);

-- Langkah 2: Query produk revenue tertinggi per bulan per kategori
SELECT
  v.nama_kategori,
  v.bulan,
  v.tahun,
  v.nama_produk       AS produk_terlaris,
  v.total_revenue     AS revenue_tertinggi,
  v.total_qty_terjual
FROM v_laporan_penjualan v
WHERE v.total_revenue = (
  -- Correlated subquery: cari revenue max dalam bulan+kategori yang sama
  SELECT MAX(v2.total_revenue)
  FROM v_laporan_penjualan v2
  WHERE v2.nama_kategori = v.nama_kategori
    AND v2.bulan = v.bulan
    AND v2.tahun = v.tahun
)
ORDER BY v.tahun DESC, v.bulan DESC, v.nama_kategori;
```

**Penjelasan VIEW:**
- VIEW adalah tabel virtual — tidak menyimpan data, hanya menyimpan query-nya
- Keuntungan: menyederhanakan query kompleks, reusable, bisa dijadikan layer abstraksi
- `CREATE OR REPLACE VIEW` untuk update view tanpa drop manual
- Correlated subquery di query akhir: mencari `MAX(revenue)` dalam partisi yang sama (kategori + bulan + tahun) — equivalent ke `RANK() = 1` dengan window function

---

## RINGKASAN POLA SOAL UAS BINUS

| Tipe Soal | Poin Kunci yang Dinilai |
|---|---|
| **WHERE vs HAVING** | Urutan eksekusi SQL, contoh kasus konkret |
| **Subquery** | Bedakan correlated vs non-correlated, kapan pakai EXISTS vs IN |
| **Trigger** | Pilih BEFORE vs AFTER, gunakan SIGNAL, handle NEW/OLD |
| **Transaction** | Sebutkan ACID, konteks atomicity, pakai SAVEPOINT untuk partial rollback |
| **JOIN kompleks** | 3+ tabel, filter yang tepat, GROUP BY benar |
| **Stored Procedure** | Parameter IN/OUT, DECLARE handler, error handling |
| **Window Function** | RANK, ROW_NUMBER, PARTITION BY (MySQL 8.0+) |
| **VIEW** | Buat abstraksi, query dari view |

---

*Dokumen ini merupakan materi persiapan UAS Database Technology — BINUS University*  
*Dibuat berdasarkan kisi-kisi UAS: Aggregate Function, Subquery, Trigger, SQL Transaction, ERD, Sample DB*
