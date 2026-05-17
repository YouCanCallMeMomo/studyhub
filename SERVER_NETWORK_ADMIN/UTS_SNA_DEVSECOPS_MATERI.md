# 📘 MATERI UTS — Server Network Administration (DevSecOps)

> **Mata Kuliah:** Server Network Administration  
> **Program Studi:** Cyber Security — BINUS University  
> **Semester:** 4 | Tahun Akademik 2025/2026  
> **Disusun untuk:** Ujian Tengah Semester (UTS)

---

## 📋 DAFTAR ISI

1. [Istilah Kunci DevSecOps](#1-istilah-kunci-devsecops)
2. [Strategi Menjawab Soal UTS](#2-strategi-menjawab-soal-uts)
3. [Study Case Latihan + Pembahasan Lengkap](#3-study-case-latihan--pembahasan-lengkap)
4. [Study Case Latihan 2 + Pembahasan](#4-study-case-latihan-2--pembahasan)
5. [Ringkasan Quick Reference](#5-ringkasan-quick-reference)

---

# 1. ISTILAH KUNCI DEVSECOPS

> Istilah-istilah berikut disampaikan dosen sebagai bantu jawab (not mandatory, but will help). **Pahami setiap istilah agar bisa langsung digunakan dalam jawaban study case.**

---

## 1.1 Trunk-Based Development

### Definisi
**Trunk-based development (TBD)** adalah strategi branching dimana semua developer melakukan commit langsung ke satu branch utama (disebut **trunk** atau `main`), dengan **short-lived feature branches** yang di-merge dalam **hitungan jam, bukan hari/minggu**.

### Perbandingan dengan Git Flow

| Aspek | Trunk-Based Development | Git Flow |
|-------|------------------------|----------|
| **Jumlah branch** | 1 trunk + short-lived feature branches | main, develop, feature/*, release/*, hotfix/* |
| **Lifetime feature branch** | < 1 hari (beberapa jam) | Bisa > 1 minggu |
| **Merge frequency** | Sangat sering (multiple times/day) | Jarang (saat fitur selesai) |
| **Merge conflict** | Minimal (karena sering merge) | Sering & besar |
| **CI/CD compatibility** | Sangat cocok untuk CI/CD pipeline | Lebih kompleks |
| **Risk** | Butuh testing yang kuat karena langsung ke trunk | Risiko merge conflict tinggi |

### Bagaimana TBD Bekerja

```
Developer A ──┐
Developer B ──┤──▶ trunk (main) ──▶ CI Pipeline ──▶ Deploy
Developer C ──┘       ▲
                      │
              Short-lived feature branch
              (max beberapa jam, lalu merge)
```

### Kenapa Relevan untuk DevSecOps?

1. **Continuous Integration** menjadi alami — semua kode selalu di-merge ke trunk
2. **Security scanning** selalu berjalan terhadap kode terbaru (trunk)
3. **Merge conflicts berkurang** → lebih sedikit human error → lebih sedikit vulnerability
4. **Deployment lebih sering & incremental** → blast radius lebih kecil jika ada masalah

### Syarat TBD Berjalan Baik

| Syarat | Penjelasan |
|--------|-----------|
| **Automated testing yang kuat** | Unit test, integration test, security test harus otomatis |
| **Feature flags** | Fitur yang belum selesai disembunyikan via feature toggle, bukan branch terpisah |
| **CI pipeline yang cepat** | Build + test harus < 10 menit agar developer tidak menunggu lama |
| **Code review** | Tetap wajib, bahkan untuk perubahan kecil (pair programming atau PR review) |

### 💡 Contoh Soal

**Soal:** Developer di perusahaan Anda menggunakan long-lived feature branches (rata-rata 2 minggu). Setiap kali merge, sering terjadi conflict dan bug. Apa yang salah dan bagaimana memperbaikinya?

**Jawaban:** Masalahnya adalah **branch divergence** — feature branch terlalu lama terpisah dari trunk sehingga kode diverge jauh. Solusinya: beralih ke **trunk-based development** di mana developer menggunakan short-lived branches (< 1 hari) dan merge sering ke trunk. Didukung oleh **feature flags** untuk fitur yang belum selesai dan **automated CI pipeline** yang menjalankan test suite setiap kali ada merge ke trunk.

---

## 1.2 Maven

### Definisi
**Maven** adalah **build automation tool** dan **dependency management** untuk proyek **Java/JVM**. Maven menggunakan file `pom.xml` (Project Object Model) untuk mendefinisikan konfigurasi proyek, dependencies, dan build lifecycle.

### Fungsi Utama Maven

| Fungsi | Penjelasan |
|--------|-----------|
| **Dependency Management** | Otomatis download library dari Maven Central Repository |
| **Build Automation** | Compile, test, package (JAR/WAR) dalam satu command |
| **Standardized Project Structure** | Semua project Maven punya struktur folder yang sama |
| **Plugin System** | Extensible melalui plugin (test, report, security scan) |

### Maven Build Lifecycle

```
mvn validate  →  mvn compile  →  mvn test  →  mvn package  →  mvn verify  →  mvn install  →  mvn deploy
    │                │              │             │               │               │               │
    └─ Validasi    Compile       Jalankan     Buat JAR/WAR    Jalankan       Install ke       Deploy ke
       POM         source code   unit test    file            integration    local repo       remote repo
                                                               test
```

### Contoh `pom.xml`

```xml
<project>
    <groupId>com.nusacloud</groupId>
    <artifactId>erp-platform</artifactId>
    <version>2.1.0</version>
    
    <dependencies>
        <!-- Spring Boot -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>3.2.0</version>
        </dependency>
        
        <!-- Testing -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>5.10.0</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <!-- SonarQube Plugin -->
            <plugin>
                <groupId>org.sonarsource.scanner.maven</groupId>
                <artifactId>sonar-maven-plugin</artifactId>
                <version>3.10.0</version>
            </plugin>
        </plugins>
    </build>
</project>
```

### Relevansi di DevSecOps

- **SCA scanning** memeriksa `pom.xml` untuk menemukan dependencies dengan CVE
- **SAST tools** (SonarQube) terintegrasi sebagai Maven plugin
- Maven bisa menjalankan **security test** sebagai bagian dari build lifecycle
- `mvn dependency-check:check` → menjalankan OWASP Dependency-Check

---

## 1.3 npm (Node Package Manager)

### Definisi
**npm** adalah **dependency manager** dan **build tool** untuk ekosistem **JavaScript/Node.js**. npm menggunakan file `package.json` untuk mendefinisikan dependencies dan scripts.

### Fungsi Utama npm

| Fungsi | Penjelasan |
|--------|-----------|
| **Dependency Management** | Install library dari npm Registry |
| **Script Runner** | Menjalankan build, test, lint, dll. via `npm run` |
| **Version Management** | Semantic versioning (semver) |
| **Lock File** | `package-lock.json` memastikan reproducible builds |

### Perbandingan Maven vs npm

| Aspek | Maven (Java) | npm (JavaScript) |
|-------|-------------|-----------------|
| **Config file** | `pom.xml` | `package.json` |
| **Lock file** | - | `package-lock.json` |
| **Registry** | Maven Central | npm Registry |
| **Install command** | `mvn install` | `npm install` |
| **Run test** | `mvn test` | `npm test` |
| **Build** | `mvn package` | `npm run build` |
| **Security audit** | `mvn dependency-check:check` | `npm audit` |

### Contoh `package.json`

```json
{
    "name": "nusacloud-frontend",
    "version": "2.1.0",
    "scripts": {
        "build": "vite build",
        "test": "jest --coverage",
        "lint": "eslint src/",
        "audit:fix": "npm audit fix",
        "security:check": "snyk test"
    },
    "dependencies": {
        "react": "^18.2.0",
        "axios": "^1.6.0"
    },
    "devDependencies": {
        "jest": "^29.7.0",
        "eslint": "^8.56.0"
    }
}
```

### Relevansi di DevSecOps

- **`npm audit`** — built-in security checker, memindai vulnerabilities di dependencies
- **`npm audit fix`** — otomatis patch vulnerability yang bisa diperbaiki
- **Snyk / OWASP Dependency-Check** memeriksa `package.json` dan `package-lock.json`
- **Lock file penting** → tanpa lock file, versi dependency bisa berubah antar build → inconsistency & potential vulnerabilities

---

## 1.4 JUnit dan Jest

### Definisi

| Framework | Bahasa | Kegunaan |
|-----------|--------|----------|
| **JUnit** | Java | Unit testing framework untuk Java/Kotlin |
| **Jest** | JavaScript | Unit testing framework untuk JavaScript/TypeScript/React |

### Mengapa Unit Testing Penting di DevSecOps?

1. **Menangkap bug SEBELUM deployment** — Shift Left principle
2. **Security unit tests** — test khusus untuk validasi input, authentication, authorization
3. **Regression prevention** — memastikan fix tidak memperkenalkan bug baru
4. **CI/CD gate** — pipeline harus FAIL jika unit test gagal → mencegah kode bermasalah masuk production

### Contoh JUnit (Java)

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class UserServiceTest {

    @Test
    void testPasswordMustBeStrong() {
        UserService service = new UserService();
        // Password lemah harus ditolak
        assertThrows(WeakPasswordException.class, () -> {
            service.createUser("admin", "123");  // terlalu pendek
        });
    }
    
    @Test
    void testSQLInjectionPrevention() {
        UserService service = new UserService();
        // Input berbahaya harus di-sanitize
        String maliciousInput = "'; DROP TABLE users; --";
        User result = service.findUser(maliciousInput);
        assertNull(result);  // harus return null, bukan crash
    }
    
    @Test
    void testUnauthorizedAccessDenied() {
        UserService service = new UserService();
        User regularUser = new User("hafis", Role.USER);
        // User biasa tidak boleh akses admin endpoint
        assertThrows(AccessDeniedException.class, () -> {
            service.deleteAllUsers(regularUser);
        });
    }
}
```

### Contoh Jest (JavaScript)

```javascript
const { validateInput, sanitizeSQL } = require('./security');

describe('Security Tests', () => {
    test('should reject SQL injection input', () => {
        const maliciousInput = "'; DROP TABLE users; --";
        expect(validateInput(maliciousInput)).toBe(false);
    });
    
    test('should sanitize XSS payload', () => {
        const xssPayload = '<script>alert("hack")</script>';
        const sanitized = sanitizeSQL(xssPayload);
        expect(sanitized).not.toContain('<script>');
    });
    
    test('should enforce password policy', () => {
        expect(() => createUser('admin', '123')).toThrow('Password too weak');
    });
    
    test('should return 401 for unauthenticated requests', async () => {
        const response = await request(app).get('/api/admin').set('Authorization', '');
        expect(response.status).toBe(401);
    });
});
```

### Pipeline Integration

```yaml
# Jenkinsfile
stage('Unit Tests') {
    parallel {
        stage('Backend - JUnit') {
            steps {
                sh 'mvn test'  // Jalankan JUnit tests
                junit 'target/surefire-reports/*.xml'  // Publish results
            }
        }
        stage('Frontend - Jest') {
            steps {
                sh 'npm test -- --coverage'  // Jalankan Jest + coverage
            }
        }
    }
    post {
        failure {
            error("Unit tests FAILED — build dihentikan!")
        }
    }
}
```

---

## 1.5 SonarQube

### Definisi
**SonarQube** adalah platform **code quality and security analysis** yang melakukan **SAST (Static Application Security Testing)**. SonarQube menganalisis source code tanpa menjalankannya untuk menemukan bugs, code smells, dan **security vulnerabilities**.

### Apa yang Dicek SonarQube?

| Kategori | Contoh Temuan |
|----------|--------------|
| **Bugs** | Null pointer dereference, infinite loops, resource leaks |
| **Vulnerabilities** | SQL Injection, XSS, Hardcoded credentials, Insecure crypto |
| **Code Smells** | Duplicated code, over-complex methods, unused variables |
| **Security Hotspots** | Kode yang MUNGKIN bermasalah dan perlu review manual |
| **Coverage** | Persentase kode yang tercakup oleh unit test |

### Quality Gate

SonarQube menggunakan **Quality Gate** — sekumpulan kondisi yang harus dipenuhi agar kode dianggap "layak":

```
┌─────────────────────────────────────────────────────┐
│              SONARQUBE QUALITY GATE                   │
│                                                       │
│  ✅ Coverage > 80%             → PASS                │
│  ✅ Duplicated Lines < 3%      → PASS                │
│  ❌ Security Vulnerabilities = 0 Critical → FAIL     │
│  ✅ Code Smells < 10 (new)     → PASS                │
│  ❌ Security Hotspots reviewed  → FAIL               │
│                                                       │
│  RESULT: ❌ FAILED — Pipeline BLOCKED                 │
│  (Harus fix critical vulnerability dulu)             │
└─────────────────────────────────────────────────────┘
```

### Pipeline Integration

```yaml
stage('SAST - SonarQube') {
    steps {
        withSonarQubeEnv('sonar-server') {
            sh 'mvn sonar:sonar'  // Java project
            // atau
            sh 'npx sonar-scanner'  // JavaScript project
        }
    }
}
stage('Quality Gate') {
    steps {
        waitForQualityGate abortPipeline: true
        // Pipeline BERHENTI jika Quality Gate GAGAL
    }
}
```

### Relevansi di UTS

- SonarQube = **SAST tool** utama yang paling sering muncul dalam study case
- Jika study case menyebutkan "tidak ada code quality check" → **sarankan SonarQube**
- Quality Gate = **security gate** yang memblokir kode berbahaya masuk pipeline

---

## 1.6 Internal Harbor Registry

### Definisi
**Harbor** adalah **open-source container image registry** yang menyediakan fitur keamanan enterprise-grade. Berbeda dengan Docker Hub (public), Harbor biasanya di-deploy secara **internal/private** di infrastruktur perusahaan.

### Mengapa Harbor, Bukan Docker Hub?

| Aspek | Docker Hub (Public) | Harbor (Internal/Private) |
|-------|-------------------|--------------------------|
| **Lokasi** | Cloud (internet) | On-premise / internal network |
| **Access Control** | Terbatas | RBAC, LDAP/AD integration |
| **Vulnerability Scanning** | Opsional (paid) | **Built-in** (Trivy/Clair integration) |
| **Image Signing** | Docker Content Trust | **Cosign / Notary** built-in |
| **Compliance** | Sulit mengontrol | Full control, audit log |
| **Replication** | N/A | Replication antar registry |
| **Garbage Collection** | Otomatis | Configurable |

### Fitur Keamanan Harbor

| Fitur | Penjelasan |
|-------|-----------|
| **Automated Vulnerability Scanning** | Setiap image yang di-push otomatis di-scan oleh Trivy |
| **Policy Enforcement** | Bisa **block deployment** image yang memiliki CVE Critical/High |
| **Image Signing** | Memastikan image tidak di-tamper (Content Trust) |
| **RBAC** | Role-Based Access Control per project |
| **Audit Logs** | Semua aktivitas tercatat (siapa push/pull image kapan) |
| **Immutable Tags** | Tag tidak bisa di-overwrite (prevent image replacement attack) |

### Alur Kerja dengan Harbor

```
Developer → Build Docker Image → Push ke Harbor Registry
                                        │
                                   ┌────▼─────┐
                                   │  Harbor   │
                                   │  scans    │
                                   │  image    │
                                   │  (Trivy)  │
                                   └────┬─────┘
                                        │
                               ┌────────┴────────┐
                               │                 │
                          CVE Found?         No CVE
                               │                 │
                          ❌ BLOCK            ✅ ALLOW
                          deployment         pull to production
```

### Relevansi di UTS

- Jika study case menyebutkan "Docker image di-push tanpa scanning" → **sarankan Harbor dengan built-in Trivy scanning**
- Jika company menggunakan public registry → **sarankan migrasi ke internal Harbor** untuk kontrol penuh
- Harbor = jawaban untuk: container security, image integrity, access control registry

---

## 1.7 Blue-Green Deployment

### Definisi
**Blue-Green Deployment** adalah strategi deployment di mana terdapat **dua environment production yang identik**:
- **Blue** = environment yang sedang aktif (live traffic)
- **Green** = environment yang berisi versi baru (idle, siap di-test)

Setelah Green di-test dan divalidasi, traffic dialihkan dari Blue → Green. Blue menjadi standby (rollback ready).

### Bagaimana Blue-Green Bekerja

```
  SEBELUM DEPLOYMENT:
  ┌─────────────────┐          ┌─────────────────┐
  │   BLUE (v1.0)   │ ← LIVE  │  GREEN (empty)   │
  │   Active Traffic │          │  Standby          │
  └─────────────────┘          └─────────────────┘

  DEPLOY VERSI BARU KE GREEN:
  ┌─────────────────┐          ┌─────────────────┐
  │   BLUE (v1.0)   │ ← LIVE  │  GREEN (v2.0)    │  ← Deploy & Test disini
  │   Active Traffic │          │  Testing...       │
  └─────────────────┘          └─────────────────┘

  SWITCH TRAFFIC:
  ┌─────────────────┐          ┌─────────────────┐
  │   BLUE (v1.0)   │          │  GREEN (v2.0)    │  ← LIVE
  │   Standby        │  → LIVE │  Active Traffic   │
  └─────────────────┘          └─────────────────┘

  JIKA ADA MASALAH → ROLLBACK INSTANT:
  ┌─────────────────┐          ┌─────────────────┐
  │   BLUE (v1.0)   │ ← LIVE  │  GREEN (v2.0)    │
  │   Active Traffic │          │  Rollback!        │
  └─────────────────┘          └─────────────────┘
```

### Perbandingan Deployment Strategies

| Strategy | Downtime | Rollback Speed | Resource Cost | Risk |
|----------|----------|---------------|---------------|------|
| **Recreate** | ❌ Ada downtime | Lambat (redeploy) | Rendah (1 env) | Tinggi |
| **Rolling Update** | ✅ Zero downtime | Sedang | Sedang | Sedang |
| **Blue-Green** | ✅ Zero downtime | ⚡ Instant | Tinggi (2x env) | Rendah |
| **Canary** | ✅ Zero downtime | Cepat | Sedang | Rendah |

### Relevansi di DevSecOps

1. **Zero downtime** — Service tidak terganggu saat deployment
2. **Instant rollback** — Jika versi baru punya vulnerability/bug → switch kembali ke Blue dalam detik
3. **Safe testing** — Versi baru bisa di-test di Green environment tanpa pengaruh ke user
4. **Compliance** — Bisa menjalankan DAST/penetration test di Green sebelum switch traffic

### 💡 Contoh Soal

**Soal:** Perusahaan Anda menggunakan strategi "recreate deployment" — seluruh server di-shutdown, update, lalu start lagi. Ini menyebabkan 30 menit downtime setiap deployment. Apa improvement yang bisa dilakukan?

**Jawaban:** Beralih ke **Blue-Green Deployment**. Siapkan dua environment identik. Deploy versi baru ke environment Green, jalankan testing (smoke test, DAST). Jika OK, alihkan traffic ke Green. Jika ada masalah, rollback instant ke Blue. Hasilnya: **zero downtime** dan rollback instan < 1 menit.

---

# 2. STRATEGI MENJAWAB SOAL UTS

## Format Soal UTS

Berdasarkan kisi-kisi dosen, soal UTS berupa **Study Case** dengan **beberapa insiden/kejadian**, lalu ada **4 pertanyaan**:

| No | Tipe Pertanyaan | Apa yang Diminta |
|----|-----------------|-----------------|
| 1 | **Identify weakness & propose improvement** | Temukan kelemahan dari insiden #1, lalu usulkan perbaikan |
| 2 | **Identify weakness & propose improvement** | Temukan kelemahan dari insiden #2 (beda insiden) |
| 3 | **Identify weakness & propose improvement** | Temukan kelemahan dari insiden #3 (beda insiden) |
| 4 | **Identify missing process** | Identifikasi proses apa yang seharusnya ada tapi HILANG |

## Template Jawaban

### Untuk Soal "Identify Weakness & Propose Improvement":

```
WEAKNESS: [Sebutkan kelemahan spesifik]
├── WHY: Mengapa ini kelemahan? Jelaskan risiko/dampaknya
├── EVIDENCE: Kutip bagian case yang jadi bukti kelemahan
├── IMPROVEMENT: [Sebutkan perbaikan]
│   ├── TOOL: [Sebutkan tools spesifik]
│   ├── HOW: [Bagaimana implementasinya]
│   └── BENEFIT: [Apa manfaatnya]
└── LINK KE DEVSECOPS: Hubungkan ke prinsip/istilah (SonarQube, Harbor, dll.)
```

### Untuk Soal "Identify Missing Process":

```
MISSING PROCESS: [Apa proses yang hilang]
├── WHY IMPORTANT: Mengapa proses ini kritis?
├── HOW IT WOULD HELP: Bagaimana proses ini mencegah insiden?
├── IMPLEMENTATION: 
│   ├── STEPS: Langkah implementasi
│   ├── TOOLS: Tools yang digunakan
│   └── EXAMPLE: Contoh output jika proses dijalankan
└── WITHOUT THIS PROCESS: Apa yang terjadi sudah terbukti di case
```

## Tips Menjawab

| # | Tips | Detail |
|---|------|--------|
| 1 | **Selalu sebutkan TOOLS spesifik** | Bukan "scanning tool" tapi **SonarQube**, **Trivy**, **Harbor** |
| 2 | **Hubungkan dengan istilah kunci** | Gunakan trunk-based development, Maven/npm, JUnit/Jest, dll. |
| 3 | **Jelaskan WHY bukan hanya WHAT** | Bukan "harus pakai SonarQube" tapi "SonarQube melakukan SAST yang bisa mendeteksi SQL injection pada kode sebelum deployment" |
| 4 | **Gunakan prinsip DevSecOps** | Shift Left, Defense in Depth, Zero Trust, Least Privilege |
| 5 | **Satu weakness → satu improvement** | Jangan gabungkan multiple weakness dalam satu jawaban |
| 6 | **Berikan contoh konkret** | Pipeline YAML, konfigurasi, command line |

---

# 3. STUDY CASE LATIHAN + PEMBAHASAN LENGKAP

---

## 📋 STUDY CASE 1: PT. NusaTech Solutions

### Latar Belakang

**PT. NusaTech Solutions** adalah perusahaan fintech yang mengembangkan platform pembayaran digital untuk 200+ merchant di Indonesia. Platform ini menangani:
- Data kartu kredit nasabah
- Transaksi keuangan real-time
- Data KYC (Know Your Customer) — foto KTP, selfie, data pribadi

### Arsitektur Saat Ini

**Tech Stack:**
- **Backend:** Java (Spring Boot), di-build menggunakan **Maven**
- **Frontend:** React.js, dependencies dikelola oleh **npm**
- **Testing:** **JUnit** (backend) dan **Jest** (frontend)
- **CI/CD:** Jenkins + Docker
- **Registry:** Docker Hub (public registry)
- **Deployment:** Recreate strategy (shutdown → update → restart)

### Pipeline CI/CD Saat Ini

```
Developer ──▶ GitHub (feature branch, merge setelah 1-2 minggu)
                │
                ▼
          Jenkins Build
          ├── mvn compile (backend)
          ├── npm run build (frontend)
          ├── Docker image build
          └── Push ke Docker Hub (public)
                │
                ▼
          Deploy langsung ke Production
          (recreate strategy, 20 menit downtime)
```

### Detail Masalah:
- Developer menggunakan **long-lived feature branches** (1-2 minggu sebelum merge)
- **Tidak ada automated testing** di pipeline (JUnit dan Jest ada tapi tidak dijalankan di CI)
- Build menggunakan `mvn compile` tapi **tidak menjalankan `mvn test`**
- Frontend di-build tapi **`npm test` dan `npm audit` tidak dijalankan**
- Docker image di-push ke **Docker Hub public** tanpa vulnerability scanning
- Deployment menggunakan **recreate strategy** → downtime setiap deployment
- **Tidak ada SonarQube** atau code quality check
- **Tidak ada staging environment** — langsung deploy ke production

---

### 🚨 INSIDEN YANG TERJADI

#### Insiden 1: Dependency Vulnerability Exploit
Pada **5 Maret 2026**, serangan terjadi melalui vulnerability di library `log4j` versi lama yang masih digunakan di `pom.xml`. Attacker mengeksploitasi **CVE-2021-44228 (Log4Shell)** untuk mendapatkan Remote Code Execution (RCE) di production server. Data 50.000 nasabah bocor.

**Root cause:** `mvn test` dan **SCA scanning** tidak dijalankan di pipeline. Versi `log4j` yang vulnerable sudah ada di `pom.xml` selama 8 bulan tanpa ada yang menyadari.

#### Insiden 2: Malicious Container Image
Pada **12 Maret 2026**, ditemukan bahwa Docker image yang digunakan di production mengandung **cryptocurrency miner** yang tersembunyi. Image ini sudah berjalan selama 3 minggu, mengonsumsi CPU dan memperlambat platform.

**Root cause:** Docker image di-push ke **Docker Hub public** tanpa scanning. Attacker melakukan **typosquatting** pada base image — developer tidak sengaja menggunakan `node:18-slim` palsu dari publisher yang mirip (bukan official).

#### Insiden 3: Failed Deployment & Extended Downtime
Pada **20 Maret 2026**, deployment versi baru gagal total. React frontend crash karena incompatible dependency version. **Recreate deployment** sudah menshutdown server lama, tapi versi baru tidak bisa start. **Total downtime: 4 jam** — 200+ merchant tidak bisa memproses pembayaran.

**Root cause:** Tidak ada **staging environment** untuk testing. `npm test` (Jest) tidak dijalankan di pipeline — jika dijalankan, crash ini akan terdeteksi sebelum deployment. Tidak ada rollback strategy (recreate deployment = tidak bisa rollback instant).

---

## PERTANYAAN & JAWABAN

---

### Pertanyaan 1: Identify Weakness & Propose Improvement (Insiden 1)

**Soal:** Berdasarkan Insiden 1 (Dependency Vulnerability Exploit), identifikasi kelemahan pipeline dan usulkan perbaikan!

### ✅ JAWABAN:

**WEAKNESS: Tidak ada SCA (Software Composition Analysis) dan automated testing di pipeline**

| Aspek | Detail |
|-------|--------|
| **Kelemahan** | Pipeline menjalankan `mvn compile` tapi **TIDAK menjalankan `mvn test`** dan **TIDAK ada SCA scanning**. Dependency di `pom.xml` (Maven) tidak pernah dicek terhadap database CVE. |
| **Bukti dari Case** | Library `log4j` versi vulnerable ada di `pom.xml` selama 8 bulan tanpa terdeteksi |
| **Risiko** | Attacker bisa mengeksploitasi known vulnerability (Log4Shell) untuk RCE → data breach 50.000 nasabah |

**IMPROVEMENT:**

**1. Tambahkan SCA scanning di pipeline:**

```yaml
stage('SCA Scan - Backend') {
    steps {
        // Maven dependency check
        sh 'mvn org.owasp:dependency-check-maven:check'
        // Snyk scan
        sh 'snyk test --file=pom.xml --severity-threshold=high'
        // BLOCK jika ada critical CVE
        script {
            def report = readJSON file: 'target/dependency-check-report.json'
            if (report.dependencies.any { it.vulnerabilities?.any { v -> v.severity == 'CRITICAL' } }) {
                error("CRITICAL CVE ditemukan di dependencies! Build BLOCKED.")
            }
        }
    }
}

stage('SCA Scan - Frontend') {
    steps {
        sh 'npm audit --audit-level=high'    // Built-in npm audit
        sh 'snyk test --file=package.json'   // Snyk scan
    }
}
```

**2. Jalankan unit test yang sudah ada:**

```yaml
stage('Unit Tests') {
    parallel {
        stage('Backend - JUnit') {
            steps { sh 'mvn test' }  // Jalankan JUnit
        }
        stage('Frontend - Jest') {
            steps { sh 'npm test -- --coverage --watchAll=false' }  // Jalankan Jest
        }
    }
}
```

**3. Tambahkan SAST dengan SonarQube:**

```yaml
stage('SAST - SonarQube') {
    steps {
        withSonarQubeEnv('sonar-server') {
            sh 'mvn sonar:sonar'
        }
        waitForQualityGate abortPipeline: true  // BLOCK jika Quality Gate FAIL
    }
}
```

**BENEFIT:** SCA scanning akan mendeteksi `log4j` vulnerability di `pom.xml` → build BLOCKED → data breach tidak terjadi. JUnit/Jest test menangkap bug sebelum deploy. SonarQube mendeteksi code vulnerabilities (SQL injection, XSS, dll.).

---

### Pertanyaan 2: Identify Weakness & Propose Improvement (Insiden 2)

**Soal:** Berdasarkan Insiden 2 (Malicious Container Image), identifikasi kelemahan dan usulkan perbaikan!

### ✅ JAWABAN:

**WEAKNESS: Menggunakan Docker Hub public tanpa container image scanning**

| Aspek | Detail |
|-------|--------|
| **Kelemahan** | Docker image di-push ke **Docker Hub public** tanpa vulnerability scanning. Base image dipull dari public registry tanpa verifikasi (typosquatting attack). |
| **Bukti dari Case** | Developer menggunakan `node:18-slim` palsu dari publisher mirip, mengandung crypto miner |
| **Risiko** | Supply chain attack — malicious code masuk pipeline tanpa terdeteksi, berjalan 3 minggu |

**IMPROVEMENT:**

**1. Migrasi ke Internal Harbor Registry:**

| Konfigurasi | Detail |
|-------------|--------|
| **Deploy Harbor** | Self-hosted di internal network perusahaan |
| **Enable Trivy Scanner** | Built-in vulnerability scanning untuk setiap image |
| **Policy: Block Vulnerable Images** | Image dengan CVE Critical/High TIDAK BISA di-pull |
| **Image Signing** | Enable Cosign/Notary untuk image integrity |
| **RBAC** | Role-based access — developer hanya bisa push, tidak bisa modify policies |
| **Immutable Tags** | Tag tidak bisa di-overwrite (prevent replacement attack) |

**2. Pipeline image scanning:**

```yaml
stage('Container Security') {
    steps {
        // Build Docker image
        sh 'docker build -t harbor.nusatech.internal/erp/backend:${BUILD_NUMBER} .'
        
        // Scan image sebelum push ke Harbor
        sh 'trivy image --severity HIGH,CRITICAL --exit-code 1 harbor.nusatech.internal/erp/backend:${BUILD_NUMBER}'
        
        // Push ke internal Harbor (bukan Docker Hub public)
        sh 'docker push harbor.nusatech.internal/erp/backend:${BUILD_NUMBER}'
    }
}
```

**3. Whitelist base images:**

```dockerfile
# ✅ HANYA gunakan base image dari internal Harbor (sudah diverifikasi)
FROM harbor.nusatech.internal/base-images/node:18-slim

# ❌ JANGAN pull langsung dari Docker Hub public
# FROM node:18-slim  ← Bisa kena typosquatting!
```

**BENEFIT:** Harbor memberikan control penuh atas image registry. Built-in Trivy scanning akan mendeteksi crypto miner di image. Image signing mencegah tampering. Typosquatting tidak mungkin terjadi karena base image diambil dari internal trusted registry.

---

### Pertanyaan 3: Identify Weakness & Propose Improvement (Insiden 3)

**Soal:** Berdasarkan Insiden 3 (Failed Deployment & Extended Downtime), identifikasi kelemahan dan usulkan perbaikan!

### ✅ JAWABAN:

**WEAKNESS: Recreate deployment tanpa staging environment dan tanpa rollback strategy**

| Aspek | Detail |
|-------|--------|
| **Kelemahan** | Deployment menggunakan **recreate strategy** (shutdown lama, start baru) + TIDAK ADA staging → langsung ke production. Tidak ada rollback plan. |
| **Bukti dari Case** | Deploy gagal → server lama sudah di-shutdown → versi baru crash → 4 jam downtime, 200+ merchant terdampak |
| **Risiko** | Setiap deployment adalah "big bang" — jika gagal, tidak ada fallback. Downtime = kehilangan revenue |

**IMPROVEMENT:**

**1. Implementasi Blue-Green Deployment:**

```
┌─────────────────┐          ┌─────────────────┐
│   BLUE (v1.0)   │ ← LIVE  │  GREEN (v2.0)    │
│   Aktif serving  │          │  Deploy + Test   │
│   200+ merchants │          │  DAST scanning   │
└─────────────────┘          └─────────────────┘
                                     │
                              Testing OK? ──▶ Switch traffic ke GREEN
                              Testing FAIL? ──▶ Green di-rollback, Blue tetap live
```

**Benefits:**
- **Zero downtime** — Traffic tidak pernah terputus
- **Instant rollback** — Jika v2.0 bermasalah, switch kembali ke Blue (< 1 menit)
- **Safe testing** — Test di Green tanpa pengaruh ke user

**2. Tambahkan Staging Environment:**

```yaml
stage('Deploy to Staging') {
    steps {
        sh 'kubectl apply -f k8s/staging/ --namespace staging'
        // Tunggu pod ready
        sh 'kubectl rollout status deployment/erp-backend --namespace staging'
    }
}

stage('Staging Tests') {
    steps {
        // Smoke test
        sh 'curl -f http://staging.nusatech.internal/health || exit 1'
        // DAST scan
        sh 'zap-cli quick-scan http://staging.nusatech.internal'
        // Integration test
        sh 'npm run test:integration'
    }
}

stage('Deploy to Production - Blue/Green') {
    when { expression { currentBuild.result == 'SUCCESS' } }
    steps {
        sh 'kubectl apply -f k8s/production-green/'
        // Validate green
        sh 'curl -f http://green.nusatech.internal/health || exit 1'
        // Switch traffic
        sh 'kubectl patch service erp-frontend -p \'{"spec":{"selector":{"version":"green"}}}\''
    }
}
```

**3. Jalankan Jest dan JUnit test SEBELUM deploy:**

```yaml
stage('Pre-Deploy Tests') {
    parallel {
        stage('Jest') {
            steps { sh 'npm test -- --watchAll=false' }
        }
        stage('JUnit') {
            steps { sh 'mvn test' }
        }
    }
    post {
        failure {
            error("Tests FAILED — deployment CANCELLED!")
        }
    }
}
```

**BENEFIT:** Blue-Green Deployment mengeliminasi downtime. Staging environment menangkap incompatible dependencies sebelum production. Jest dan JUnit test mendeteksi crash sebelum deploy. Rollback instant jika ada masalah.

---

### Pertanyaan 4: Identify Missing Process

**Soal:** Identifikasi satu proses yang hilang dari pipeline PT. NusaTech Solutions dan jelaskan bagaimana proses ini bisa mencegah insiden!

### ✅ JAWABAN:

## Missing Process: **Continuous Integration dengan Trunk-Based Development + Automated Security Gates**

### Apa Prosesnya?

Pipeline PT. NusaTech saat ini **TIDAK memiliki Continuous Integration yang sebenarnya**. Meskipun ada Jenkins, pipeline hanya menjalankan `mvn compile` dan `npm run build` — tanpa test, tanpa security scanning, tanpa quality gates.

Selain itu, developer menggunakan **long-lived feature branches** (1-2 minggu) yang menyebabkan merge conflicts dan divergence dari trunk.

### Proses yang Seharusnya Ada:

**Trunk-Based Development + Full CI Pipeline dengan Security Gates:**

```
Developer ──▶ Short-lived branch (< 1 hari) ──▶ Pull Request
                                                      │
                                              ┌───────▼────────┐
                                              │  CI Pipeline    │
                                              │  (Automated)    │
                                              ├─────────────────┤
                                              │ 1. mvn test     │  ← JUnit (Security Tests)
                                              │ 2. npm test     │  ← Jest (Security Tests)
                                              │ 3. SonarQube    │  ← SAST (Quality Gate)
                                              │ 4. mvn dep-check│  ← SCA (Maven deps)
                                              │ 5. npm audit    │  ← SCA (npm deps)
                                              │ 6. Trivy scan   │  ← Container scan
                                              │ 7. GitLeaks     │  ← Secret detection
                                              └───────┬─────────┘
                                                      │
                                              ALL PASS? ──▶ Merge ke trunk
                                              ANY FAIL? ──▶ Block merge, notify developer
```

### Bagaimana Ini Mencegah Ketiga Insiden:

| Insiden | Tanpa CI | Dengan CI |
|---------|----------|-----------|
| **#1: Log4Shell** | `pom.xml` tidak di-scan, vulnerability 8 bulan | **SCA scan** (`mvn dependency-check:check`) mendeteksi CVE di `pom.xml` → build BLOCKED |
| **#2: Malicious Image** | Docker image tidak di-scan | **Trivy + Harbor** scan image → crypto miner terdeteksi → deploy BLOCKED |
| **#3: Failed Deploy** | Jest/JUnit tidak dijalankan | **Jest test** mendeteksi incompatible dependency → merge BLOCKED sebelum sampai ke deployment |

### Kenapa Trunk-Based Development Penting:

1. **Short-lived branches** → setiap merge kecil → CI scan berjalan lebih sering → vulnerability ditemukan lebih cepat
2. **Frequent integration** → merge conflict berkurang → kode lebih stabil
3. **Feature flags** → fitur yang belum selesai disembunyikan, bukan di-branch terpisah
4. **Setiap commit ke trunk = full security scan** → nothing skips the pipeline

### Implementasi:

```yaml
# Complete Jenkinsfile — CI Pipeline dengan Security Gates
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        
        stage('Secret Detection') {
            steps {
                sh 'gitleaks detect --source=. --report-format=json'
            }
        }
        
        stage('Unit Tests') {
            parallel {
                stage('JUnit') { steps { sh 'mvn test' } }
                stage('Jest')  { steps { sh 'npm test -- --coverage --watchAll=false' } }
            }
        }
        
        stage('SAST - SonarQube') {
            steps {
                withSonarQubeEnv('sonar') { sh 'mvn sonar:sonar' }
                waitForQualityGate abortPipeline: true
            }
        }
        
        stage('SCA') {
            parallel {
                stage('Maven Deps') { steps { sh 'mvn dependency-check:check' } }
                stage('npm Deps')   { steps { sh 'npm audit --audit-level=high' } }
            }
        }
        
        stage('Container Build & Scan') {
            steps {
                sh 'docker build -t harbor.nusatech.internal/erp:${BUILD_NUMBER} .'
                sh 'trivy image --severity HIGH,CRITICAL --exit-code 1 harbor.nusatech.internal/erp:${BUILD_NUMBER}'
                sh 'docker push harbor.nusatech.internal/erp:${BUILD_NUMBER}'
            }
        }
        
        stage('Deploy Staging') {
            steps { sh 'kubectl apply -f k8s/staging/' }
        }
        
        stage('DAST') {
            steps { sh 'zap-cli quick-scan http://staging.nusatech.internal' }
        }
        
        stage('Deploy Production - Blue/Green') {
            when { branch 'main' }
            steps {
                sh 'kubectl apply -f k8s/production-green/'
                sh 'kubectl patch svc erp -p \'{"spec":{"selector":{"version":"green"}}}\''
            }
        }
    }
    
    post {
        failure { slackSend channel: '#security-alerts', message: "Pipeline FAILED: ${env.JOB_NAME}" }
    }
}
```

**Tanpa proses CI yang proper, semua insiden terjadi. Dengan CI + TBD + Security Gates, semua insiden bisa dicegah.**

---

# 4. STUDY CASE LATIHAN 2 + PEMBAHASAN

---

## 📋 STUDY CASE 2: PT. KodeSejahtera

### Latar Belakang

**PT. KodeSejahtera** adalah startup e-health yang mengembangkan platform telemedicine untuk 50 rumah sakit di Indonesia. Platform menangani:
- Rekam medis elektronik pasien
- Video consultation doctor-patient
- Resep digital
- Data asuransi kesehatan

### Arsitektur

**Tech Stack:**
- **Backend:** Node.js (Express), dependencies via **npm**
- **Frontend:** React.js, tested with **Jest**
- **CI/CD:** GitHub Actions
- **Registry:** GitHub Container Registry (ghcr.io) — public visibility
- **Code Analysis:** Tidak ada
- **Deployment:** Rolling Update ke Kubernetes cluster

### Pipeline Saat Ini

```
Developer ──▶ Feature Branch (2-3 minggu) ──▶ PR Review (1 reviewer) ──▶ Merge
                                                                            │
                                                                            ▼
                                                                     GitHub Actions
                                                                     ├── npm install
                                                                     ├── npm run build
                                                                     ├── docker build
                                                                     └── docker push (ghcr.io, public)
                                                                            │
                                                                            ▼
                                                                     kubectl apply (production)
                                                                     (rolling update)
```

### Detail:
- Feature branches bertahan 2-3 minggu, sering konflik saat merge
- PR review hanya 1 orang (sering di-merge tanpa review mendalam)
- **`npm test` tidak dijalankan** di pipeline (hanya `npm run build`)
- **`npm audit` tidak pernah dijalankan**
- Tidak ada **SonarQube** atau SAST tool
- Docker image di-push ke **public** ghcr.io
- Tidak ada **staging environment**
- Secrets disimpan di GitHub repository secrets (OK), tapi beberapa hardcoded di `.env` yang ter-commit

---

### 🚨 INSIDEN

#### Insiden 1: XSS Attack via Unvalidated Input
Attacker menemukan XSS vulnerability di fitur chat telemedicine. Kode React tidak melakukan input sanitization. Attacker menyisipkan `<script>` tag di pesan chat yang mencuri session token dokter. 5 akun dokter ter-compromise, rekam medis 1.200 pasien diakses.

**Root cause:** Tidak ada SAST tool (SonarQube) yang mengecek kode. Jest test tersedia tapi tidak dijalankan di CI — test yang ada termasuk test input validation yang seharusnya menangkap XSS.

#### Insiden 2: Leaked API Key di Git History
Researcher menemukan **Stripe API Key** (payment gateway) di public Docker image. Key tersebut pernah di-hardcode di `.env` file yang ter-commit ke repo, meskipun sudah dihapus dari versi terbaru — key masih ada di **Git history**.

**Root cause:** Tidak ada secret scanning (GitLeaks/TruffleHog). File `.env` pernah ter-commit. Docker image di-push ke public registry sehingga siapa saja bisa pull dan inspect.

#### Insiden 3: Deployment Conflict
Dua feature branches yang berbeda memodifikasi database schema yang sama. Saat di-merge berturutan, terjadi migration conflict. Rolling update berhasil deploy versi baru tapi database schema tidak konsisten → **data corruption** pada 300 rekam medis.

**Root cause:** Long-lived feature branches (2-3 minggu) menyebabkan **divergence**. Tidak ada integration test di pipeline. Hanya 1 reviewer yang sering terlewat memeriksa database migration conflict.

---

### Pertanyaan 1: Identify Weakness & Propose Improvement (Insiden 1)

### ✅ JAWABAN:

**WEAKNESS: Tidak ada SAST (SonarQube) dan Jest test tidak dijalankan di CI**

| Aspek | Detail |
|-------|--------|
| **Kelemahan** | Pipeline hanya menjalankan `npm run build` tanpa `npm test` (Jest). Tidak ada SonarQube untuk mendeteksi security vulnerability di source code. |
| **Bukti** | XSS vulnerability ada di kode React. Jest test yang sudah ada TERMASUK input validation test — tapi tidak pernah dijalankan di CI. |
| **Dampak** | 5 akun dokter compromise, 1.200 rekam medis diakses |

**IMPROVEMENT:**

1. **Jalankan Jest di pipeline:**
```yaml
- name: Run Jest Tests
  run: npm test -- --coverage --watchAll=false
  # Pipeline FAIL jika test gagal (termasuk input validation test)
```

2. **Tambahkan SonarQube SAST:**
```yaml
- name: SonarQube Scan
  uses: sonarqube-scan-action@v2
  env:
    SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
    
- name: Quality Gate
  uses: sonarqube-quality-gate-action@v1
  # Pipeline BLOCKED jika ada critical security vulnerability
```

SonarQube akan mendeteksi **XSS vulnerability pattern** (`dangerouslySetInnerHTML`, unescaped user input) dan memblokir build.

---

### Pertanyaan 2: Identify Weakness & Propose Improvement (Insiden 2)

### ✅ JAWABAN:

**WEAKNESS: Tidak ada secret detection dan menggunakan public container registry**

| Aspek | Detail |
|-------|--------|
| **Kelemahan** | Tidak ada GitLeaks/TruffleHog untuk mendeteksi secrets di code/history. Container image dipush ke public registry. |
| **Bukti** | Stripe API Key ditemukan di Docker image. `.env` pernah ter-commit dengan secrets. |

**IMPROVEMENT:**

1. **Secret detection di pipeline:**
```yaml
- name: Secret Scan - GitLeaks
  uses: gitleaks/gitleaks-action@v2
  # Scan kode DAN git history untuk hardcoded secrets
```

2. **Migrasi ke Internal Harbor Registry:**
- Deploy Harbor internal, enable Trivy scanning
- Set image visibility = **private**
- Enable immutable tags dan image signing

3. **Git history cleanup:**
```bash
# Hapus secrets dari git history menggunakan BFG
bfg --replace-text passwords.txt repo.git
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

---

### Pertanyaan 3: Identify Weakness & Propose Improvement (Insiden 3)

### ✅ JAWABAN:

**WEAKNESS: Long-lived feature branches tanpa integration testing**

| Aspek | Detail |
|-------|--------|
| **Kelemahan** | Feature branches 2-3 minggu menyebabkan divergence. Hanya 1 reviewer. Tidak ada integration test di pipeline. |
| **Bukti** | Dua branch memodifikasi schema yang sama → migration conflict → data corruption |

**IMPROVEMENT:**

1. **Beralih ke Trunk-Based Development:**
- Short-lived branches (< 1 hari)
- Merge sering ke trunk → conflict kecil dan mudah di-resolve
- Feature flags untuk fitur belum selesai

2. **Tambahkan integration test + database migration test:**
```yaml
- name: Integration Tests
  run: |
    docker-compose -f docker-compose.test.yml up -d
    npm run test:integration
    npm run test:migration  # Test database migration consistency
```

3. **Minimum 2 reviewer untuk PR:**
```yaml
# .github/CODEOWNERS
*.js @senior-dev-team
migrations/* @dba-team @senior-dev-team  # Migration files WAJIB di-review DBA
```

---

### Pertanyaan 4: Identify Missing Process

### ✅ JAWABAN:

## Missing Process: **Automated Security Quality Gates di Seluruh Pipeline**

Pipeline PT. KodeSejahtera TIDAK memiliki **security gate** di tahap manapun. Kode bisa masuk ke production tanpa dicek keamanannya sama sekali.

### Proses yang Harus Ada:

```
PR Created → Gate 1: Secret Scan (GitLeaks)
                │
           Gate 2: Unit Test + Security Test (Jest)
                │
           Gate 3: SAST (SonarQube Quality Gate)
                │
           Gate 4: SCA (npm audit + Snyk)
                │
           Gate 5: Container Scan (Trivy via Harbor)
                │
           Gate 6: Deploy Staging + DAST (OWASP ZAP)
                │
           Gate 7: Manual Approval (security team sign-off)
                │
           ALL PASS → Deploy Production (Blue-Green)
           ANY FAIL → Block deployment, notify team
```

### Bagaimana Ini Mencegah Ketiga Insiden:

| Insiden | Gate yang Mencegah |
|---------|-------------------|
| **#1 XSS** | Gate 2 (Jest menangkap input validation failure) + Gate 3 (SonarQube mendeteksi XSS pattern) |
| **#2 API Key leak** | Gate 1 (GitLeaks mendeteksi Stripe key di code) + Gate 5 (Harbor private, bukan public) |
| **#3 Deployment conflict** | Gate 2 (Integration test mendeteksi migration conflict) + Trunk-Based Development mencegah long divergence |

**Tanpa security gates, pipeline hanya "assembly line tanpa quality control" — apapun yang masuk, keluar ke production.**

---

# 5. RINGKASAN QUICK REFERENCE

## Istilah → Kapan Digunakan di Jawaban

| Istilah | Gunakan Ketika Case Menyebutkan... |
|---------|-----------------------------------|
| **Trunk-Based Development** | Long-lived branches, merge conflicts, infrequent integration |
| **Maven** | Java/Spring Boot project, `pom.xml`, backend dependencies |
| **npm** | Node.js/React project, `package.json`, frontend dependencies |
| **JUnit** | Java unit testing, backend test yang tidak dijalankan |
| **Jest** | JavaScript/React unit testing, frontend test yang tidak dijalankan |
| **SonarQube** | Tidak ada code quality check, tidak ada SAST, tidak ada security scanning kode |
| **Harbor Registry** | Docker Hub public, no image scanning, supply chain attack, typosquatting |
| **Blue-Green Deployment** | Downtime saat deploy, no rollback, recreate strategy |

## Tools Quick Map

```
┌──────────────────────────────────────────────────────────────────┐
│ PROBLEM → TOOL                                                    │
├───────────────────────────────┬──────────────────────────────────┤
│ Kode tidak dicek keamanannya │ SonarQube (SAST)                 │
│ Dependencies punya CVE       │ npm audit / mvn dependency-check │
│ Secrets hardcoded di kode    │ GitLeaks / TruffleHog            │
│ Docker image tak di-scan     │ Trivy + Harbor Registry          │
│ Downtime saat deploy         │ Blue-Green Deployment            │
│ Merge conflicts parah        │ Trunk-Based Development          │
│ Unit test tidak dijalankan   │ JUnit (Java) / Jest (JavaScript) │
│ No code quality gate         │ SonarQube Quality Gate           │
│ No staging environment       │ Staging + DAST (OWASP ZAP)      │
│ No secret management         │ HashiCorp Vault                  │
└───────────────────────────────┴──────────────────────────────────┘
```

## Template Jawaban Cepat

### Untuk "Identify Weakness":
> **Weakness:** [Apa kelemahannya — spesifik]
> **Evidence:** [Bukti dari case — kutip fakta]  
> **Impact:** [Dampak insiden yang terjadi]

### Untuk "Propose Improvement":
> **Solution:** [Apa solusinya]  
> **Tool:** [SonarQube / Trivy / Harbor / dll.]  
> **How:** [Bagaimana implementasi — sertakan contoh pipeline YAML jika bisa]  
> **Benefit:** [Bagaimana ini mencegah insiden]

### Untuk "Identify Missing Process":
> **Missing:** [Proses apa yang hilang]  
> **Why Important:** [Mengapa kritis]  
> **Implementation:** [Langkah + tools]  
> **Prevention:** [Bagaimana setiap insiden bisa dicegah]

---

> 📝 *Dokumen ini disusun berdasarkan kisi-kisi UTS Server Network Administration Semester 4 BINUS University.*
>
> **Tips Ujian:**
> - Hafal 7 istilah kunci dan kapan menggunakannya
> - Selalu sebutkan **TOOLS SPESIFIK** (SonarQube, Trivy, Harbor, dll.)
> - Gunakan **template jawaban** agar jawaban terstruktur
> - Hubungkan setiap weakness → improvement → tool → benefit
> - Untuk "missing process": jelaskan bagaimana SETIAP insiden bisa dicegah

---

*📘 StudyHub — Portal Materi Semester 4 — BINUS Cyber Security*  
*Last Updated: April 2026*
