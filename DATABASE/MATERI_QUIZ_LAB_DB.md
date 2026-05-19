# FULL CHEATSHEET MYSQL SYNTAX & MATERI KISI-KISI LAB DB

Dokumen ini berisi materi lengkap dengan puluhan contoh kasus *query* (dari yang sangat mendasar hingga sangat kompleks) untuk mempersiapkan diri menghadapi Quiz Lab Database Technology di phpMyAdmin.

---

## 1. SELECT DATA (Mencakup JOIN, Subquery, Agregasi, dll.)
Perintah `SELECT` digunakan untuk mengambil data. Karena sering kali data tersebar di berbagai tabel, `JOIN` dan `Subquery` sangat sering digunakan.

### Basic Select & Filtering (Contoh 1-10)
```sql
-- 1. Mengambil semua data
SELECT * FROM Employees;

-- 2. Mengambil kolom spesifik
SELECT first_name, last_name, email FROM Employees;

-- 3. Alias kolom (AS)
SELECT first_name AS 'Nama Depan', salary AS Gaji FROM Employees;

-- 4. Filtering sederhana dengan WHERE
SELECT * FROM Employees WHERE department_id = 5;

-- 5. Filtering dengan AND / OR
SELECT * FROM Employees WHERE department_id = 5 AND salary > 50000;
SELECT * FROM Employees WHERE department_id = 5 OR department_id = 10;

-- 6. Filtering dengan BETWEEN
SELECT * FROM Employees WHERE salary BETWEEN 40000 AND 60000;

-- 7. Filtering dengan IN (mencari dalam sebuah list)
SELECT * FROM Employees WHERE department_id IN (1, 3, 5, 7);

-- 8. Filtering dengan LIKE (Pattern Matching)
SELECT * FROM Employees WHERE first_name LIKE 'A%'; -- Berawalan A
SELECT * FROM Employees WHERE first_name LIKE '%a'; -- Berakhiran a
SELECT * FROM Employees WHERE first_name LIKE '%an%'; -- Mengandung 'an'
SELECT * FROM Employees WHERE first_name LIKE '_a%'; -- Huruf kedua adalah 'a'

-- 9. Memfilter NULL values
SELECT * FROM Employees WHERE manager_id IS NULL;
SELECT * FROM Employees WHERE manager_id IS NOT NULL;

-- 10. Distinct (Menghilangkan duplikat hasil pencarian)
SELECT DISTINCT department_id FROM Employees;
```

### Aggregate Functions & Group By (Contoh 11-15)
```sql
-- 11. Menghitung total data (COUNT)
SELECT COUNT(*) FROM Employees;
SELECT COUNT(DISTINCT department_id) FROM Employees;

-- 12. Menghitung Total (SUM) dan Rata-rata (AVG)
SELECT SUM(salary) AS Total_Gaji, AVG(salary) AS Rata_Gaji FROM Employees;

-- 13. Nilai Maksimal (MAX) dan Minimal (MIN)
SELECT MAX(salary) AS Gaji_Tertinggi, MIN(salary) AS Gaji_Terendah FROM Employees;

-- 14. GROUP BY (Mengelompokkan data untuk agregasi)
SELECT department_id, COUNT(*) AS Jumlah_Karyawan 
FROM Employees 
GROUP BY department_id;

-- 15. HAVING (Filter untuk GROUP BY - tidak bisa pakai WHERE)
SELECT department_id, AVG(salary) AS Rata_Gaji 
FROM Employees 
GROUP BY department_id 
HAVING AVG(salary) > 50000;
```

### Menggunakan JOIN (Contoh 16-22)
```sql
-- 16. INNER JOIN (Mengambil data yang ada hubungannya di kedua tabel)
SELECT e.first_name, d.department_name
FROM Employees e
INNER JOIN Departments d ON e.department_id = d.department_id;

-- 17. LEFT JOIN (Semua data dari tabel kiri, meskipun tidak ada di kanan)
SELECT e.first_name, d.department_name
FROM Employees e
LEFT JOIN Departments d ON e.department_id = d.department_id;

-- 18. RIGHT JOIN (Semua data dari tabel kanan)
SELECT e.first_name, d.department_name
FROM Employees e
RIGHT JOIN Departments d ON e.department_id = d.department_id;

-- 19. JOIN 3 Tabel
SELECT c.customer_name, o.order_date, p.product_name
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN OrderDetails od ON o.order_id = od.order_id
JOIN Products p ON od.product_id = p.product_id;

-- 20. SELF JOIN (Tabel di-join dengan dirinya sendiri, misal struktur hirarki)
SELECT e.first_name AS Karyawan, m.first_name AS Manager
FROM Employees e
JOIN Employees m ON e.manager_id = m.employee_id;

-- 21. Menggunakan USING (Pengganti ON jika nama kolom sama persis)
SELECT first_name, department_name 
FROM Employees INNER JOIN Departments USING(department_id);

-- 22. FULL OUTER JOIN (Di MySQL tidak ada syntax FULL OUTER JOIN, diakali dengan UNION)
SELECT e.first_name, d.department_name FROM Employees e LEFT JOIN Departments d ON e.department_id = d.department_id
UNION
SELECT e.first_name, d.department_name FROM Employees e RIGHT JOIN Departments d ON e.department_id = d.department_id;
```

### Subqueries (Contoh 23-28)
```sql
-- 23. Subquery di WHERE (Mencari karyawan dengan gaji lebih besar dari rata-rata)
SELECT first_name, salary 
FROM Employees 
WHERE salary > (SELECT AVG(salary) FROM Employees);

-- 24. Subquery dengan IN
SELECT first_name FROM Employees 
WHERE department_id IN (SELECT department_id FROM Departments WHERE location_id = 1700);

-- 25. Subquery di SELECT (Sebagai kolom tambahan)
SELECT first_name, salary, 
  (SELECT AVG(salary) FROM Employees) AS Rata_Seluruh,
  salary - (SELECT AVG(salary) FROM Employees) AS Selisih
FROM Employees;

-- 26. Subquery di FROM (Derived Table)
SELECT max_salary, min_salary
FROM (SELECT MAX(salary) as max_salary, MIN(salary) as min_salary FROM Employees) AS SalaryStats;

-- 27. Subquery berkorelasi (Correlated Subquery)
SELECT first_name, salary, department_id 
FROM Employees e1
WHERE salary > (SELECT AVG(salary) FROM Employees e2 WHERE e1.department_id = e2.department_id);

-- 28. Menggunakan EXISTS / NOT EXISTS
SELECT department_name FROM Departments d
WHERE EXISTS (SELECT 1 FROM Employees e WHERE e.department_id = d.department_id AND salary > 100000);
```

### Advanced SELECT (Contoh 29-33)
```sql
-- 29. CASE WHEN (If-Else logic dalam SQL)
SELECT first_name, salary,
  CASE 
    WHEN salary > 80000 THEN 'Tinggi'
    WHEN salary BETWEEN 50000 AND 80000 THEN 'Sedang'
    ELSE 'Rendah'
  END AS Kategori_Gaji
FROM Employees;

-- 30. LIMIT & OFFSET (Pagination)
SELECT * FROM Employees LIMIT 10; -- 10 data pertama
SELECT * FROM Employees LIMIT 10 OFFSET 20; -- Data urutan 21 sampai 30

-- 31. Concatenation (Menggabungkan string)
SELECT CONCAT(first_name, ' ', last_name) AS Full_Name FROM Employees;

-- 32. String Functions
SELECT UPPER(first_name), LOWER(last_name), LENGTH(first_name), SUBSTRING(first_name, 1, 3) FROM Employees;

-- 33. Date Functions
SELECT order_id, order_date, YEAR(order_date), MONTH(order_date), DATEDIFF(CURDATE(), order_date) AS Hari_Berlalu
FROM Orders;
```

---

## 2. SELECT DATA WITH UNION
`UNION` menggabungkan hasil (rows) dari dua `SELECT`. Syarat mutlak: Jumlah kolom dan urutan tipe datanya harus sama antara query atas dan query bawah.

### Kasus UNION (Contoh 34-42)
```sql
-- 34. UNION Basic (Otomatis membuang duplikat)
SELECT city FROM Customers
UNION
SELECT city FROM Suppliers;

-- 35. UNION ALL (Menyimpan duplikat)
SELECT city FROM Customers
UNION ALL
SELECT city FROM Suppliers;

-- 36. Menambahkan label penanda ke hasil UNION
SELECT 'Customer' AS Role, first_name, email FROM Customers
UNION
SELECT 'Supplier' AS Role, contact_name, email FROM Suppliers
UNION
SELECT 'Employee' AS Role, first_name, email FROM Employees;

-- 37. UNION dengan tipe data yang berbeda (Akan casting otomatis, tapi sebaiknya dihindari)
SELECT id, name FROM Users
UNION
SELECT order_id, status FROM Orders;

-- 38. UNION dengan Kondisi WHERE
SELECT first_name FROM Employees WHERE department_id = 10
UNION
SELECT first_name FROM Employees WHERE salary > 90000;

-- 39. Menggabungkan hasil JOIN dengan UNION
SELECT c.name, 'Punya Order' AS Status FROM Customers c JOIN Orders o ON c.id = o.customer_id
UNION
SELECT c.name, 'Tidak Ada Order' AS Status FROM Customers c LEFT JOIN Orders o ON c.id = o.customer_id WHERE o.id IS NULL;

-- 40. UNION dengan Agregasi
SELECT 'Total Employees', COUNT(*) FROM Employees
UNION
SELECT 'Total Departments', COUNT(*) FROM Departments;

-- 41. UNION dengan Subquery
SELECT id FROM (SELECT id FROM TableA UNION SELECT id FROM TableB) AS Combined WHERE id > 100;

-- 42. UNION untuk mensimulasikan INTERSECT (Data yang ada di kedua tabel)
SELECT a.id FROM TableA a INNER JOIN TableB b ON a.id = b.id;
```

---

## 3. SELECT DATA WITH ORDER BY
Klausa `ORDER BY` selalu berada di paling akhir sebuah query utama.

### Kasus ORDER BY (Contoh 43-52)
```sql
-- 43. Order By Satu Kolom Ascending (Default)
SELECT * FROM Products ORDER BY price; 
SELECT * FROM Products ORDER BY price ASC;

-- 44. Order By Satu Kolom Descending
SELECT * FROM Products ORDER BY price DESC;

-- 45. Order By Berdasarkan Banyak Kolom
-- Mengurutkan berdasarkan kategori (A-Z), jika kategorinya sama, diurutkan berdasarkan harga tertinggi (Z-A)
SELECT * FROM Products ORDER BY category_id ASC, price DESC;

-- 46. Order By berdasarkan angka posisi kolom di SELECT (Jarang disarankan tapi bisa)
SELECT name, price, stock FROM Products ORDER BY 2 DESC; -- Mengurutkan berdasarkan price

-- 47. Order By dengan Alias
SELECT first_name, (salary + bonus) AS Total_Income FROM Employees ORDER BY Total_Income DESC;

-- 48. Order By menggunakan Fungsi Matematika/String
SELECT first_name FROM Employees ORDER BY LENGTH(first_name) DESC; -- Nama paling panjang di atas
SELECT order_date FROM Orders ORDER BY YEAR(order_date) DESC, MONTH(order_date) ASC;

-- 49. Order By dengan CASE WHEN (Custom Sort Logic)
-- Misal ingin mengurutkan role: Admin selalu paling atas, lalu Editor, baru Viewer
SELECT username, role FROM Users
ORDER BY 
  CASE role
    WHEN 'Admin' THEN 1
    WHEN 'Editor' THEN 2
    WHEN 'Viewer' THEN 3
    ELSE 4
  END;

-- 50. Order By dengan Status Null Last (Null ditaruh di paling bawah)
SELECT name, email FROM Users ORDER BY email IS NULL, email ASC;

-- 51. Order By dalam Query UNION (ORDER BY hanya boleh 1 kali di paling bawah)
SELECT name FROM Customers
UNION
SELECT name FROM Suppliers
ORDER BY name DESC;

-- 52. Order By digabungkan dengan LIMIT
SELECT name, price FROM Products ORDER BY price DESC LIMIT 5; -- Top 5 Produk termahal
```

---

## 4. ALTER TABLE
Perintah DDL (Data Definition Language) untuk merubah kerangka / struktur tabel.

### Kasus ALTER TABLE (Contoh 53-70)
```sql
-- 53. Menambahkan satu kolom baru
ALTER TABLE Customers ADD phone_number VARCHAR(20);

-- 54. Menambahkan banyak kolom sekaligus
ALTER TABLE Customers 
ADD date_of_birth DATE, 
ADD membership_level INT;

-- 55. Menambahkan kolom dengan posisi spesifik (FIRST / AFTER)
ALTER TABLE Customers ADD is_active BOOLEAN DEFAULT TRUE AFTER email;
ALTER TABLE Customers ADD id_card VARCHAR(50) FIRST;

-- 56. Mengubah tipe data kolom (MODIFY)
ALTER TABLE Customers MODIFY phone_number VARCHAR(15) NOT NULL;

-- 57. Mengganti nama kolom dan tipenya (CHANGE)
ALTER TABLE Customers CHANGE phone_number contact_number VARCHAR(15);

-- 58. Menghapus (Drop) kolom
ALTER TABLE Customers DROP COLUMN membership_level;

-- 59. Mengubah nama tabel
ALTER TABLE Customers RENAME TO Clients;
-- Atau
RENAME TABLE Customers TO Clients;

-- 60. Menambahkan PRIMARY KEY baru
ALTER TABLE Employees ADD PRIMARY KEY (employee_id);

-- 61. Menambahkan Composite Primary Key (Primary key 2 kolom)
ALTER TABLE OrderDetails ADD PRIMARY KEY (order_id, product_id);

-- 62. Menghapus PRIMARY KEY
ALTER TABLE Employees DROP PRIMARY KEY;

-- 63. Menambahkan AUTO_INCREMENT ke kolom yang sudah ada
ALTER TABLE Employees MODIFY employee_id INT AUTO_INCREMENT;

-- 64. Menyetel ulang nilai AUTO_INCREMENT
ALTER TABLE Employees AUTO_INCREMENT = 1000;

-- 65. Menambahkan FOREIGN KEY
ALTER TABLE Orders 
ADD CONSTRAINT fk_customer_order 
FOREIGN KEY (customer_id) REFERENCES Customers(customer_id) 
ON DELETE CASCADE ON UPDATE CASCADE;

-- 66. Menghapus FOREIGN KEY (Harus tau nama constraint-nya)
ALTER TABLE Orders DROP FOREIGN KEY fk_customer_order;

-- 67. Menambahkan UNIQUE Constraint
ALTER TABLE Users ADD CONSTRAINT uc_email UNIQUE (email);

-- 68. Menghapus UNIQUE Constraint (Drop Index)
ALTER TABLE Users DROP INDEX uc_email;

-- 69. Menambahkan CHECK Constraint (Hanya menerima nilai tertentu)
ALTER TABLE Employees ADD CONSTRAINT chk_salary CHECK (salary >= 3000000);

-- 70. Menghapus CHECK Constraint
ALTER TABLE Employees DROP CHECK chk_salary;
```

---

## 5. CREATE VIEW
Membuat "tabel virtual" untuk menyederhanakan query yang panjang dan kompleks atau menyembunyikan kolom sensitif dari *user* database.

### Kasus CREATE VIEW (Contoh 71-80)
```sql
-- 71. Membuat View sederhana
CREATE VIEW ActiveUsers AS
SELECT id, username, email FROM Users WHERE status = 'Active';

-- 72. Mengambil data dari View (Sama persis seperti select tabel biasa)
SELECT * FROM ActiveUsers;

-- 73. Mengganti View yang sudah ada (OR REPLACE)
CREATE OR REPLACE VIEW ActiveUsers AS
SELECT id, username, email, last_login FROM Users WHERE status = 'Active';

-- 74. Membuat View dari JOIN beberapa tabel (Sangat berguna untuk menyederhanakan reporting)
CREATE VIEW SalesSummary AS
SELECT o.order_id, c.customer_name, p.product_name, od.quantity, od.total_price
FROM Orders o
JOIN Customers c ON o.customer_id = c.id
JOIN OrderDetails od ON o.order_id = od.order_id
JOIN Products p ON od.product_id = p.id;

-- 75. Membuat View dengan agregasi dan GROUP BY
CREATE VIEW DepartmentSalary AS
SELECT department_id, COUNT(*) AS Total_Staff, SUM(salary) AS Total_Expense
FROM Employees
GROUP BY department_id;

-- 76. Mengubah nama kolom di dalam VIEW (Alias)
CREATE VIEW ProductInfo (Kode_Produk, Nama_Barang, Harga_Satuan) AS
SELECT product_id, name, price FROM Products;

-- 77. Menambahkan WITH CHECK OPTION
-- (Mencegah update/insert lewat view jika data tersebut jadi tidak tampil di view)
CREATE VIEW HighIncome AS
SELECT id, name, salary FROM Employees WHERE salary > 10000000
WITH CHECK OPTION;
-- Jika melakukan UPDATE HighIncome SET salary = 5000000, query akan DITOLAK.

-- 78. Membuat View dari View (Nested View)
CREATE VIEW VIP_SalesSummary AS
SELECT * FROM SalesSummary WHERE total_price > 50000000;

-- 79. Menghapus View
DROP VIEW IF EXISTS ActiveUsers;

-- 80. Mengubah kerangka view (Alter View - sama saja dengan CREATE OR REPLACE)
ALTER VIEW ActiveUsers AS SELECT id, email FROM Users;
```

---

## 6. UPDATE DATA
Digunakan untuk mengedit baris tabel yang sudah ada. DML yang paling beresiko jika lupa `WHERE`.

### Kasus UPDATE (Contoh 81-93)
```sql
-- 81. Update 1 Kolom dengan kondisi spesifik
UPDATE Employees SET salary = 6000000 WHERE employee_id = 101;

-- 82. Update Banyak Kolom sekaligus
UPDATE Employees 
SET salary = 7000000, job_title = 'Senior Dev', department_id = 2 
WHERE employee_id = 102;

-- 83. Update menggunakan operator Matematika (Misal: Naik gaji 10%)
UPDATE Employees SET salary = salary + (salary * 0.10) WHERE department_id = 5;

-- 84. Update string dengan fungsi
UPDATE Customers SET email = LOWER(email); -- Mengubah semua email jadi huruf kecil (BAHAYA: Tanpa WHERE, semua kerubah!)

-- 85. Update banyak baris dengan klausa IN
UPDATE Products SET status = 'Out of Stock' WHERE category_id IN (1, 4, 7);

-- 86. Update menggunakan CASE WHEN (Kondisi dinamis dalam satu query update)
UPDATE Employees
SET bonus = CASE
    WHEN performance_rating = 'A' THEN salary * 0.20
    WHEN performance_rating = 'B' THEN salary * 0.10
    ELSE 0
END;

-- 87. Update dengan LIMIT (Hanya mengupdate beberapa data awal yang match)
UPDATE Users SET is_verified = TRUE WHERE email_confirmed = TRUE LIMIT 10;

-- 88. Update dengan ORDER BY dan LIMIT
UPDATE Queue SET status = 'Processing' ORDER BY created_at ASC LIMIT 1;

-- 89. Update menggunakan hasil dari tabel lain (Subquery)
UPDATE Orders 
SET total_amount = (SELECT SUM(price * qty) FROM OrderDetails WHERE order_id = Orders.id)
WHERE status = 'Pending';

-- 90. Update dengan JOIN (MySQL Syntax khusus)
UPDATE Employees e
JOIN Departments d ON e.department_id = d.department_id
SET e.salary = e.salary + 500000
WHERE d.department_name = 'IT';

-- 91. Update dua tabel sekaligus dengan JOIN
UPDATE Inventory inv
JOIN Products p ON inv.product_id = p.id
SET inv.stock = inv.stock - 1, p.total_sold = p.total_sold + 1
WHERE p.id = 99;

-- 92. Mengosongkan data string
UPDATE Users SET address = '' WHERE address IS NULL;

-- 93. Update data DATE
UPDATE Events SET event_date = DATE_ADD(event_date, INTERVAL 7 DAY) WHERE status = 'Postponed';
```

---

## 7. DELETE DATA
Digunakan untuk membuang record dari tabel. Berbeda dengan `DROP` (menghapus objek tabelnya).

### Kasus DELETE (Contoh 94-105)
```sql
-- 94. Delete satu baris
DELETE FROM Customers WHERE customer_id = 505;

-- 95. Delete banyak baris menggunakan IN
DELETE FROM Products WHERE category_id IN (9, 10, 11);

-- 96. Delete dengan kondisi kompleks (AND/OR)
DELETE FROM Users WHERE last_login < '2022-01-01' AND is_active = FALSE;

-- 97. Delete Semua Data (Akan sangat lambat karena mencatat log per baris)
DELETE FROM Log_History;

-- 98. Delete Semua Data dengan Cepat (TRUNCATE - Mereset tabel dan AUTO_INCREMENT, tapi tidak bisa dipakai jika tabel di-referensikan oleh Foreign Key)
TRUNCATE TABLE Log_History;

-- 99. Delete dengan LIMIT
DELETE FROM ErrorLogs WHERE status = 'Resolved' LIMIT 1000;

-- 100. Delete dengan ORDER BY dan LIMIT (Menghapus data paling lama)
DELETE FROM Sessions ORDER BY created_at ASC LIMIT 50;

-- 101. Delete berdasarkan Subquery
DELETE FROM Orders 
WHERE customer_id IN (SELECT id FROM Customers WHERE status = 'Banned');

-- 102. Delete menggunakan JOIN (MySQL Syntax) - Menghapus dari tabel Users saja
DELETE u FROM Users u
JOIN UserRoles ur ON u.role_id = ur.id
WHERE ur.role_name = 'Guest';

-- 103. Delete dari DUA tabel sekaligus menggunakan JOIN
DELETE o, od FROM Orders o
JOIN OrderDetails od ON o.id = od.order_id
WHERE o.status = 'Cancelled';

-- 104. Menghapus data duplikat (Menyisakan ID terkecil) menggunakan Self-Join
DELETE t1 FROM Contacts t1
INNER JOIN Contacts t2 
WHERE t1.id > t2.id AND t1.email = t2.email;

-- 105. Penghapusan berbasis operasi String/Date
DELETE FROM Promotions WHERE end_date < CURDATE();
```
