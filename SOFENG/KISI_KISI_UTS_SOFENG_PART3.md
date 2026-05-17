# SOAL 3 (15%) — Requirements Modeling & UML, Software Design Principles

---

## 3.1 Requirements Modeling and UML

### Apa itu Requirements Modeling?
Proses membuat **representasi visual** dari requirements untuk memahami sistem yang akan dibangun. Model membantu:
- Mengklarifikasi requirements yang ambigu
- Menemukan inkonsistensi
- Berkomunikasi dengan stakeholder

### UML (Unified Modeling Language)
Standar notasi visual untuk memodelkan sistem software. Diagram UML penting:

#### A. Use Case Diagram
Menggambarkan **interaksi aktor dengan sistem** — siapa melakukan apa.

**Komponen:**
- **Actor**: pengguna atau sistem eksternal (stick figure)
- **Use Case**: fungsi sistem (ellipse)
- **System Boundary**: batasan sistem (rectangle)
- **Relationships**:
  - **Association**: garis lurus aktor → use case
  - **Include**: use case A **selalu** membutuhkan use case B (`<<include>>`)
  - **Extend**: use case B **opsional** memperluas use case A (`<<extend>>`)
  - **Generalization**: inheritance antar aktor atau antar use case

**Contoh — Sistem E-Commerce:**
```
Actor: Customer, Admin
Use Cases: Browse Products, Add to Cart, Checkout, 
           Process Payment (<<include>> dari Checkout),
           Apply Coupon (<<extend>> dari Checkout),
           Manage Products (Admin)
```

#### B. Activity Diagram
Menggambarkan **workflow/alur proses** — langkah-langkah aktivitas.

**Komponen:**
- **Initial Node**: titik mulai (filled circle)
- **Activity/Action**: proses (rounded rectangle)
- **Decision Node**: percabangan kondisi (diamond)
- **Fork/Join**: parallel activities (thick bar)
- **Final Node**: titik akhir (circle with ring)
- **Swimlanes**: partisi per role/aktor

#### C. Class Diagram
Menggambarkan **struktur statis** — class, atribut, method, dan relasi.

**Komponen Class:**
```
┌──────────────────┐
│    ClassName      │
├──────────────────┤
│ - attribute1: Type│  (- private, + public, # protected)
│ - attribute2: Type│
├──────────────────┤
│ + method1(): Type │
│ + method2(): Type │
└──────────────────┘
```

**Relationships:**
| Relasi | Simbol | Keterangan | Contoh |
|--------|--------|------------|--------|
| Association | ─── | Hubungan umum | Student ─── Course |
| Aggregation | ◇── | "has-a" (weak) | Department ◇── Professor |
| Composition | ◆── | "has-a" (strong) | House ◆── Room |
| Inheritance | △── | "is-a" | Dog △── Animal |
| Dependency | - - -> | Satu class bergantung sementara | Controller - - -> Service |

**Multiplicity:**
- `1` — tepat satu
- `0..1` — nol atau satu
- `*` atau `0..*` — nol atau lebih
- `1..*` — satu atau lebih
- `n..m` — antara n sampai m

#### D. Sequence Diagram
Menggambarkan **interaksi objek** dalam urutan waktu.

**Komponen:**
- **Object/Actor**: kotak di atas lifeline
- **Lifeline**: garis putus-putus vertikal
- **Message**: panah horizontal (synchronous: →, asynchronous: ──>)
- **Activation bar**: rectangle di lifeline (menunjukkan objek aktif)
- **Return message**: panah putus-putus ← 
- **Alt/Loop/Opt fragments**: untuk conditional dan looping

#### E. State Diagram
Menggambarkan **state transitions** sebuah objek sepanjang lifecycle-nya.

**Komponen:**
- **State**: rounded rectangle
- **Transition**: arrow dengan event/condition/action
- **Initial/Final state**: filled circle / bullseye

**Contoh — Order State:**
```
[Created] → Payment Received → [Paid] → Shipped → [Shipped] → Delivered → [Delivered]
                                  ↓ Cancelled
                              [Cancelled]
```

---

## 3.2 Software Design Principles

### SOLID Principles

#### S — Single Responsibility Principle (SRP)
> "A class should have only **one reason to change**."

- Setiap class hanya bertanggung jawab atas **satu concern**
- ❌ Bad: class `Employee` yang handle data karyawan DAN generate report DAN save to database
- ✅ Good: `Employee` (data), `EmployeeReportGenerator` (report), `EmployeeRepository` (database)

#### O — Open/Closed Principle (OCP)
> "Software entities should be **open for extension**, but **closed for modification**."

- Tambah fitur baru **tanpa** mengubah kode yang sudah ada
- Gunakan **abstraction** dan **polymorphism**
- ✅ Good: gunakan interface `Shape` dengan method `area()`, tambah class baru `Triangle` tanpa ubah kode lama

#### L — Liskov Substitution Principle (LSP)
> "Objects of a superclass should be **replaceable** with objects of its subclasses **without breaking** the application."

- Subclass harus bisa menggantikan parent class tanpa error
- ❌ Bad: `Square` extends `Rectangle` tapi `setWidth()` behavior berbeda
- ✅ Good: gunakan interface `Shape` yang diimplementasi oleh `Rectangle` dan `Square` secara terpisah

#### I — Interface Segregation Principle (ISP)
> "Clients should not be forced to depend on interfaces they **do not use**."

- Buat interface yang **spesifik** daripada satu interface besar
- ❌ Bad: interface `Worker` dengan method `work()`, `eat()`, `sleep()` — robot tidak perlu `eat()` dan `sleep()`
- ✅ Good: `Workable` (work()), `Eatable` (eat()), `Sleepable` (sleep())

#### D — Dependency Inversion Principle (DIP)
> "High-level modules should not depend on low-level modules. Both should depend on **abstractions**."

- Depend pada **interface/abstract class**, bukan concrete implementation
- ❌ Bad: `NotificationService` langsung depend pada `EmailSender`
- ✅ Good: `NotificationService` depend pada interface `MessageSender`, yang diimplementasi oleh `EmailSender`, `SMSSender`, dll.

### DRY — Don't Repeat Yourself
- Setiap piece of knowledge harus punya **satu representasi** dalam sistem
- Hindari copy-paste code → gunakan functions, inheritance, composition

### KISS — Keep It Simple, Stupid
- Design sesederhana mungkin
- Jangan over-engineer jika solusi simpel sudah cukup

### YAGNI — You Aren't Gonna Need It
- Jangan implementasi fitur sampai benar-benar dibutuhkan
- Hindari speculative generality

---

## CONTOH SOAL & JAWABAN — SOAL 3

### Case Study:
> Anda diminta merancang sistem **Perpustakaan Digital** untuk kampus. Sistem memungkinkan mahasiswa meminjam buku digital, dosen mengupload materi, dan admin mengelola katalog. Buku yang dipinjam memiliki batas waktu 14 hari dan bisa diperpanjang 1x.

**Pertanyaan:**
1. Buatlah Use Case Diagram untuk sistem ini, identifikasi minimal 3 aktor dan 8 use cases! (7 poin)
2. Tunjukkan penerapan minimal 3 prinsip SOLID dalam perancangan class diagram sistem ini! (8 poin)

**Jawaban:**

**1. Use Case Diagram:**

**Actors:**
- **Mahasiswa** (primary user)
- **Dosen** (content provider)
- **Admin** (system manager)
- **Sistem Notifikasi** (secondary actor)

**Use Cases:**
1. Login (semua aktor)
2. Search Buku (Mahasiswa, Dosen)
3. Pinjam Buku Digital (Mahasiswa)
4. Perpanjang Peminjaman (Mahasiswa) — `<<extend>>` dari Pinjam Buku
5. Kembalikan Buku (Mahasiswa)
6. Upload Materi (Dosen)
7. Kelola Katalog Buku (Admin)
8. Kelola User (Admin)
9. Kirim Notifikasi Jatuh Tempo — `<<include>>` dari Pinjam Buku → Sistem Notifikasi
10. Lihat Riwayat Peminjaman (Mahasiswa)

**2. Penerapan SOLID:**

**SRP (Single Responsibility):**
```
class Book           → hanya menyimpan data buku (title, author, ISBN)
class LoanService    → hanya mengelola logika peminjaman
class NotificationService → hanya mengirim notifikasi
class BookRepository → hanya mengurus persistence/database buku
```
Setiap class hanya punya satu alasan untuk berubah.

**OCP (Open/Closed):**
```
interface NotificationChannel {
    send(message, recipient)
}
class EmailNotification implements NotificationChannel { ... }
class PushNotification implements NotificationChannel { ... }
// Tambah WhatsAppNotification TANPA ubah kode NotificationService
```
NotificationService terbuka untuk extension (channel baru) tapi tertutup untuk modification.

**DIP (Dependency Inversion):**
```
// High-level module
class LoanService {
    constructor(bookRepo: BookRepository, notifier: NotificationChannel) // depend on abstraction
}
// Low-level modules
class SQLBookRepository implements BookRepository { ... }
class MongoBookRepository implements BookRepository { ... }
```
LoanService (high-level) tidak depend langsung pada SQLBookRepository (low-level), tapi pada interface BookRepository (abstraction).
