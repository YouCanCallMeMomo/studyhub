# SOAL 4 (25%) — Software Architecture Design

---

## 4.1 Konsep dan Gaya Software Architecture Design

### Apa itu Software Architecture?
Software Architecture adalah **struktur keseluruhan dari sistem software**, yang terdiri dari:
- **Komponen** software (modul, class, service)
- **Properti** yang bisa dilihat dari luar komponen tersebut
- **Hubungan/relasi** antar komponen

> "Arsitektur bukan tentang software, tapi tentang **orang-orang yang membangun software**." — Arsitektur memfasilitasi komunikasi antar stakeholder.

### Mengapa Architecture Penting?
1. **Representasi** yang memungkinkan komunikasi antar stakeholder
2. **Highlight** keputusan desain awal yang berdampak besar ke keseluruhan proyek
3. **Model** yang relatif kecil namun bisa dipahami untuk menjelaskan bagaimana sistem bekerja
4. Memungkinkan **analisis kualitas** sistem sejak dini (sebelum coding)

### Architectural Styles (Gaya Arsitektur)

#### 1. Layered Architecture (Arsitektur Berlapis)
```
┌─────────────────────────┐
│   Presentation Layer    │  ← UI, tampilan ke user
├─────────────────────────┤
│   Business Logic Layer  │  ← aturan bisnis, logika aplikasi
├─────────────────────────┤
│   Data Access Layer     │  ← akses database, CRUD operations
├─────────────────────────┤
│   Database Layer        │  ← penyimpanan data
└─────────────────────────┘
```
- Setiap layer hanya berkomunikasi dengan layer **di atas atau di bawahnya**
- **Kelebihan**: separation of concerns, mudah di-maintain, bisa test per layer
- **Kekurangan**: bisa jadi lambat karena data harus melewati banyak layer
- **Contoh penerapan**: Aplikasi enterprise (ERP, e-Banking)

#### 2. Client-Server Architecture
```
┌──────────┐         ┌──────────┐
│  Client  │ ←─────→ │  Server  │
│  (UI)    │ Request/ │ (Logic + │
│          │ Response │  Data)   │
└──────────┘         └──────────┘
```
- Client mengirim request, server memproses dan mengembalikan response
- **Kelebihan**: sentralisasi data, mudah di-maintain server-side
- **Kekurangan**: server jadi single point of failure, bottleneck jika banyak client
- **Contoh**: Aplikasi web tradisional, email (SMTP/IMAP)

#### 3. Pipe and Filter Architecture
```
Data → [Filter A] → [Filter B] → [Filter C] → Output
          │              │              │
        (transform)   (transform)   (transform)
```
- Data mengalir melalui serangkaian **filter** (komponen pemroses)
- Setiap filter melakukan **transformasi** independen
- **Pipe** menghubungkan output satu filter ke input filter berikutnya
- **Kelebihan**: reusability filter, mudah tambah/ubah filter
- **Kekurangan**: tidak cocok untuk sistem interaktif
- **Contoh**: Compiler (lexer → parser → semantic analyzer → code generator), UNIX pipes

#### 4. Repository Architecture
```
        ┌──────────┐
        │Repository│
        │  (pusat  │
        │   data)  │
        └────┬─────┘
       ┌─────┼─────┐
       ▼     ▼     ▼
    [Comp A][Comp B][Comp C]
```
- Semua komponen mengakses **satu pusat data (repository)** bersama
- **Kelebihan**: konsistensi data, komponen independen
- **Kekurangan**: repository jadi single point of failure, bottleneck
- **Contoh**: IDE (code, error list, symbol table diakses oleh editor, compiler, debugger)

#### 5. Microservices Architecture
```
┌─────────┐  ┌─────────┐  ┌─────────┐
│Service A│  │Service B│  │Service C│
│(User)   │  │(Order)  │  │(Payment)│
│ + DB A  │  │ + DB B  │  │ + DB C  │
└────┬────┘  └────┬────┘  └────┬────┘
     └──────┬─────┴──────┬─────┘
         [API Gateway]
```
- Sistem dipecah menjadi **service-service kecil** yang independen
- Setiap service punya **database sendiri** dan bisa di-deploy terpisah
- Komunikasi via **API (REST/gRPC)** atau message queue
- **Kelebihan**: scalability per service, technology agnostic, fault isolation
- **Kekurangan**: kompleksitas tinggi (network, monitoring, distributed transactions)
- **Contoh**: Netflix, Grab, Gojek

#### 6. Model-View-Controller (MVC)
```
         User Input
              │
              ▼
        ┌───────────┐
        │ Controller │ ← mengelola alur dan logika input
        └─────┬─────┘
         ┌────┴────┐
         ▼         ▼
    ┌────────┐ ┌────────┐
    │ Model  │ │  View  │
    │ (data) │ │(tampil)│
    └────┬───┘ └────────┘
         │         ▲
         └─────────┘
         (update view saat data berubah)
```
- **Model**: data dan business logic
- **View**: tampilan/UI
- **Controller**: menerima input user, mengupdate model, memilih view
- **Kelebihan**: separation of concerns, multiple views untuk satu model
- **Contoh**: Laravel (PHP), Spring MVC (Java), ASP.NET MVC

#### 7. Event-Driven Architecture
- Komponen berkomunikasi melalui **events** (kejadian)
- **Event Producer** mengirim event, **Event Consumer** merespons
- Bisa menggunakan **Event Bus/Message Broker** (Kafka, RabbitMQ)
- **Kelebihan**: loose coupling, asynchronous, scalable
- **Kekurangan**: sulit di-debug, eventual consistency
- **Contoh**: Sistem notifikasi real-time, IoT systems

---

## 4.2 Software Architecture Design Documentation dan Patterns

### Architecture Documentation

#### Mengapa Dokumentasi Arsitektur Penting?
- **Komunikasi**: antar developer, stakeholder, dan tim baru
- **Analisis**: memungkinkan evaluasi kualitas arsitektur
- **Pemeliharaan**: sebagai referensi saat maintenance dan evolusi sistem
- **Keputusan**: mencatat **why** (mengapa arsitektur dipilih), bukan hanya **what**

#### Architectural Views (4+1 View Model — Philippe Kruchten)
```
                 ┌──────────────┐
                 │  Scenarios   │
                 │  (Use Cases) │
                 └──────┬───────┘
         ┌───────┬──────┼──────┬───────┐
         ▼       ▼      ▼      ▼       ▼
    ┌────────┐┌──────┐┌──────┐┌──────────┐
    │Logical ││Process││Devel.││ Physical │
    │ View   ││ View ││ View ││  View    │
    └────────┘└──────┘└──────┘└──────────┘
```

1. **Logical View** — struktur fungsional sistem (class, package, modul)
   - Diagram: Class Diagram, Package Diagram
   - Stakeholder: End-user, analyst

2. **Process View** — perilaku runtime, concurrency, performance
   - Diagram: Activity Diagram, Sequence Diagram
   - Stakeholder: System integrator, performance engineer

3. **Development View** — organisasi kode dan modul
   - Diagram: Component Diagram, Package Diagram
   - Stakeholder: Programmer, software manager

4. **Physical View** — deployment ke hardware/infrastruktur
   - Diagram: Deployment Diagram
   - Stakeholder: System engineer, operator

5. **Scenarios (Use Case View)** — menghubungkan semua view melalui use cases
   - Diagram: Use Case Diagram
   - Stakeholder: Semua

### Architecture Decision Records (ADR)
Dokumen yang mencatat **keputusan arsitektur** beserta konteks dan alasannya:
```
# ADR-001: Menggunakan Microservices Architecture
## Status: Accepted
## Konteks: Sistem perlu scalable untuk jutaan pengguna
## Keputusan: Menggunakan microservices dengan API Gateway
## Alasan: Memungkinkan scaling independen per service
## Konsekuensi: Perlu DevOps matang, monitoring terdistribusi
```

### Design Patterns (Pola Desain)

#### A. Creational Patterns (Pembuatan Objek)

**1. Singleton Pattern**
- Memastikan sebuah class hanya punya **satu instance** di seluruh aplikasi
- Menyediakan global access point ke instance tersebut
- **Contoh penggunaan**: Database connection pool, Logger, Configuration manager
```
class DatabaseConnection {
    private static instance: DatabaseConnection;
    private constructor() {} // private agar tidak bisa di-new dari luar
    
    static getInstance(): DatabaseConnection {
        if (!this.instance) {
            this.instance = new DatabaseConnection();
        }
        return this.instance;
    }
}
```

**2. Factory Method Pattern**
- Mendefinisikan interface untuk membuat objek, tapi **subclass yang menentukan** class mana yang di-instantiate
- **Contoh**: `DocumentFactory` yang bisa membuat `PDFDocument`, `WordDocument`, `ExcelDocument`

**3. Abstract Factory Pattern**
- Menyediakan interface untuk membuat **keluarga objek terkait** tanpa spesifikasi class konkretnya
- **Contoh**: `UIFactory` yang bisa membuat `Button`, `TextField`, `Checkbox` untuk tema "Dark" atau "Light"

#### B. Structural Patterns (Struktur Objek)

**1. Facade Pattern**
- Menyediakan **interface sederhana** untuk subsistem yang kompleks
- **Contoh**: `OrderFacade` yang menyederhanakan proses order (cek stok → hitung harga → proses pembayaran → kirim notifikasi)
```
class OrderFacade {
    placeOrder(item, customer) {
        inventory.checkStock(item);      // subsistem 1
        payment.processPayment(customer); // subsistem 2
        shipping.arrangeDelivery(item);   // subsistem 3
        notification.sendConfirmation();  // subsistem 4
    }
}
```

**2. Adapter Pattern**
- Mengkonversi interface sebuah class menjadi interface lain yang diharapkan client
- **Contoh**: `PaymentAdapter` yang membungkus API payment pihak ketiga agar sesuai dengan interface aplikasi kita

**3. Decorator Pattern**
- Menambah **behavior/responsibility** ke objek secara dinamis tanpa mengubah class-nya
- **Contoh**: `EncryptedStream` (decorator) menambah enkripsi ke `FileStream` (base)

#### C. Behavioral Patterns (Perilaku Objek)

**1. Observer Pattern**
- Mendefinisikan hubungan **one-to-many**: saat satu objek berubah state, semua dependents-nya otomatis dinotifikasi
- **Contoh**: Sistem notifikasi — ketika `Order` berubah status, `EmailService`, `SMSService`, dan `DashboardUI` semua terupdate

**2. Strategy Pattern**
- Mendefinisikan **keluarga algoritma**, masing-masing dienkapsulasi, dan bisa **saling menggantikan**
- **Contoh**: `SortStrategy` bisa `BubbleSort`, `QuickSort`, atau `MergeSort` — dipilih saat runtime

**3. Command Pattern**
- Mengenkapsulasi request sebagai objek, memungkinkan parameterisasi, queuing, dan **undo** operations
- **Contoh**: Undo/Redo di text editor

---

## CONTOH SOAL & JAWABAN — SOAL 4

### Case Study:
> Startup "GoMart" ingin membangun platform **e-commerce marketplace** yang menghubungkan UMKM dengan konsumen. Fitur utama: katalog produk, keranjang belanja, pembayaran (multiple payment gateway), pengiriman (integrasi dengan JNE/J&T/SiCepat), chat antara pembeli-penjual, dan notifikasi real-time. Target awal 10.000 user, tapi diharapkan berkembang menjadi 1 juta user dalam 2 tahun.

**Pertanyaan:**
1. Rekomendasikan architectural style yang tepat untuk GoMart dan jelaskan alasannya! Bandingkan dengan minimal 1 alternatif yang kurang tepat! (10 poin)
2. Terapkan minimal 3 design patterns yang relevan untuk GoMart, jelaskan konteks dan implementasinya! (10 poin)
3. Buatlah Architecture Decision Record (ADR) untuk salah satu keputusan arsitektur utama! (5 poin)

**Jawaban:**

**1. Rekomendasi Architectural Style: Microservices Architecture**

**Alasan pemilihan Microservices:**
- **Skalabilitas independen**: Saat flash sale, service Katalog dan Payment perlu di-scale up, tapi service Chat tidak. Microservices memungkinkan scaling per service.
- **Technology agnostic**: Service Katalog bisa pakai PostgreSQL (relational), service Chat bisa pakai MongoDB (document-based), service Notifikasi bisa pakai Redis (in-memory)
- **Fault isolation**: Jika service Chat down, service Order dan Payment tetap jalan — kritikal untuk e-commerce
- **Independent deployment**: Tim bisa deploy update ke service Payment tanpa mengganggu service lain
- **Target 1 juta user**: Microservices terbukti scalable untuk platform besar (Netflix, Tokopedia)

**Pembagian Services:**
- **User Service**: registrasi, login, profil
- **Product/Catalog Service**: CRUD produk, pencarian, kategori
- **Order Service**: keranjang, checkout, manajemen order
- **Payment Service**: integrasi payment gateway
- **Shipping Service**: integrasi kurir
- **Chat Service**: real-time messaging
- **Notification Service**: email, push notification, SMS

**Perbandingan dengan Monolithic (Layered Architecture):**
| Aspek | Microservices | Monolithic |
|-------|--------------|------------|
| Scalability | Per service ✅ | Seluruh aplikasi ❌ |
| Deployment | Independen ✅ | Seluruh aplikasi ❌ |
| Fault Isolation | Terisolasi ✅ | Satu error bisa crash semua ❌ |
| Kompleksitas Awal | Tinggi ❌ | Rendah ✅ |
| Konsistensi Data | Eventual consistency ⚠️ | ACID langsung ✅ |

**2. Penerapan Design Patterns:**

**A. Facade Pattern — Order Processing**
```
class OrderFacade {
    placeOrder(cart, customer, paymentMethod, shippingAddress) {
        // Menyederhanakan proses kompleks di balik satu method
        productService.validateStock(cart.items);
        priceCalculator.calculateTotal(cart);
        paymentService.processPayment(paymentMethod, total);
        shippingService.createShipment(shippingAddress, cart.items);
        notificationService.sendOrderConfirmation(customer, order);
    }
}
```
**Konteks**: Proses checkout melibatkan banyak service. Facade menyederhanakan interface untuk frontend.

**B. Observer Pattern — Notifikasi Real-time**
```
class OrderStatusSubject {
    private observers = []; // EmailService, PushService, DashboardUI
    
    addObserver(observer) { this.observers.push(observer); }
    
    updateStatus(orderId, newStatus) {
        this.status = newStatus;
        // Otomatis notify semua observers
        this.observers.forEach(obs => obs.update(orderId, newStatus));
    }
}
```
**Konteks**: Saat status order berubah (dibayar → diproses → dikirim → diterima), pembeli, penjual, dan dashboard admin harus dinotifikasi secara otomatis.

**C. Strategy Pattern — Payment Gateway**
```
interface PaymentStrategy {
    processPayment(amount, customerInfo): PaymentResult;
}
class GopayPayment implements PaymentStrategy { ... }
class OVOPayment implements PaymentStrategy { ... }
class BankTransferPayment implements PaymentStrategy { ... }

class PaymentService {
    constructor(private strategy: PaymentStrategy) {}
    
    pay(amount, customer) {
        return this.strategy.processPayment(amount, customer);
    }
}
// Pilih strategy saat runtime berdasarkan pilihan user
```
**Konteks**: GoMart mendukung multiple payment gateway. Strategy pattern memungkinkan penambahan payment method baru tanpa mengubah PaymentService (juga mengikuti OCP).

**3. Architecture Decision Record:**

```
# ADR-001: Menggunakan Microservices Architecture

## Status: Accepted
## Tanggal: 10 April 2026

## Konteks
GoMart adalah platform e-commerce marketplace yang menargetkan
pertumbuhan dari 10.000 ke 1.000.000 user dalam 2 tahun. 
Platform harus menangani beban tidak merata (flash sale pada 
Product & Payment service) dan integrasi dengan banyak pihak 
ketiga (payment gateway, kurir).

## Keputusan
Menggunakan Microservices Architecture dengan API Gateway 
(Kong/AWS API Gateway) sebagai entry point, dan message 
broker (RabbitMQ) untuk komunikasi asynchronous antar service.

## Alasan
1. Skalabilitas independen per service sesuai kebutuhan beban
2. Fault isolation — kegagalan satu service tidak mengganggu yang lain
3. Fleksibilitas teknologi sesuai kebutuhan tiap service
4. Memungkinkan tim bekerja paralel pada service berbeda

## Konsekuensi
- Memerlukan investasi awal di DevOps (CI/CD, container orchestration)
- Perlu monitoring terdistribusi (Prometheus + Grafana)
- Harus menangani distributed transactions (Saga pattern)
- Tim perlu memahami communication patterns (sync REST + async messaging)
```
