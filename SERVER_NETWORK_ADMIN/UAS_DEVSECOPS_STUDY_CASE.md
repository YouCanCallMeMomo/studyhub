# 📘 UAS Server Network Administration — DevSecOps Study Case

## Mata Kuliah: Server Network Administration
## Universitas: BINUS University — Cyber Security Program
## Jenis Ujian: UAS (Ujian Akhir Semester)
## Topik: DevSecOps Pipeline Security

---

# BAGIAN A: PENJELASAN MATERI DEVSECOPS

## Apa Itu DevSecOps?

**DevSecOps** adalah evolusi dari DevOps yang mengintegrasikan **Security (Sec)** ke dalam setiap tahap siklus pengembangan perangkat lunak. Filosofi utamanya adalah **"Shift Left"** — menggeser aktivitas keamanan ke tahap paling awal dalam pipeline, bukan menunggu hingga akhir deployment.

### Perbandingan: DevOps vs DevSecOps

| Aspek | DevOps | DevSecOps |
|-------|--------|-----------|
| **Fokus** | Speed & Automation | Speed, Automation & Security |
| **Security** | Ditambahkan di akhir (afterthought) | Terintegrasi di setiap tahap |
| **Testing** | Functional & Performance | Functional, Performance & Security |
| **Tanggung Jawab** | Dev + Ops | Dev + Sec + Ops (semua bertanggung jawab atas keamanan) |
| **Pipeline** | CI/CD | CI/CD dengan Security Gates |
| **Kultur** | Kolaborasi Dev & Ops | Kolaborasi Dev, Sec & Ops |

### Tahapan Pipeline DevSecOps

```
┌─────────┐   ┌─────────┐   ┌─────────┐   ┌──────────┐   ┌──────────┐   ┌───────────┐
│  PLAN   │──▶│  CODE   │──▶│  BUILD  │──▶│   TEST   │──▶│  DEPLOY  │──▶│  MONITOR  │
│         │   │         │   │         │   │          │   │          │   │           │
│-Threat  │   │-IDE     │   │-SAST    │   │-DAST     │   │-Container│   │-SIEM      │
│ Modeling│   │ Plugin  │   │-SCA     │   │-IAST     │   │ Scanning │   │-IDS/IPS   │
│-Risk    │   │-Pre-    │   │-License │   │-Pen Test │   │-IaC Scan │   │-Runtime   │
│ Assess  │   │ commit  │   │ Check   │   │-Fuzzing  │   │-Config   │   │ Protection│
│         │   │ hooks   │   │         │   │          │   │ Audit    │   │           │
└─────────┘   └─────────┘   └─────────┘   └──────────┘   └──────────┘   └───────────┘
```

---

## Tools DevSecOps yang Wajib Diketahui

### 1. SAST (Static Application Security Testing)
**Definisi:** Menganalisis source code tanpa menjalankan aplikasi untuk menemukan kerentanan keamanan.

| Tool | Deskripsi | Lisensi |
|------|-----------|---------|
| **SonarQube** | Code quality & security analysis platform | Community (Free) / Enterprise |
| **Semgrep** | Lightweight, customizable, sangat cepat | Open Source |
| **Checkmarx** | Enterprise-grade SAST dengan deep data-flow analysis | Commercial |
| **Snyk Code** | Developer-friendly, real-time feedback di IDE | Freemium |
| **CodeQL (GitHub)** | Native integration untuk pengguna GitHub | Free for OSS |

**Cara Kerja SAST:**
```
Source Code ──▶ SAST Engine ──▶ Abstract Syntax Tree (AST)
                                       │
                                       ▼
                               Pattern Matching
                                       │
                                       ▼
                           Vulnerability Report
                           (SQL Injection, XSS, 
                            Buffer Overflow, etc.)
```

**Contoh Temuan SAST:**
```python
# ❌ VULNERABLE - SQL Injection
query = "SELECT * FROM users WHERE id = " + user_input
cursor.execute(query)

# ✅ SECURE - Parameterized Query
query = "SELECT * FROM users WHERE id = %s"
cursor.execute(query, (user_input,))
```

---

### 2. SCA (Software Composition Analysis)
**Definisi:** Mengidentifikasi kerentanan dalam library open-source dan dependencies.

| Tool | Deskripsi | Lisensi |
|------|-----------|---------|
| **Snyk** | Leader di SCA, developer-first approach | Freemium |
| **Trivy** | Lightweight, multi-purpose (SCA + Container + IaC) | Open Source |
| **OWASP Dependency-Check** | Scanning dependencies terhadap CVE database | Open Source |
| **Dependabot (GitHub)** | Auto-generate PR untuk update dependencies | Free |

**Cara Kerja SCA:**
```
Project Dependencies ──▶ SCA Engine ──▶ Cross-reference CVE/NVD Database
(package.json, pom.xml,                         │
 requirements.txt, etc.)                        ▼
                                      Vulnerability Report
                                      (CVE-2021-44228 Log4Shell,
                                       CVE-2023-XXXXX, etc.)
```

---

### 3. DAST (Dynamic Application Security Testing)
**Definisi:** Menguji aplikasi yang sedang berjalan dengan mensimulasikan serangan dari luar.

| Tool | Deskripsi | Lisensi |
|------|-----------|---------|
| **OWASP ZAP** | Industry-standard open-source DAST | Open Source |
| **Burp Suite** | Professional-grade web security testing | Community (Free) / Pro |
| **Nikto** | Web server vulnerability scanner | Open Source |
| **Nuclei** | Template-based vulnerability scanner | Open Source |

**Cara Kerja DAST:**
```
                    ┌─────────────────┐
                    │  Running App    │
                    │  (Staging/QA)   │
                    └────────▲────────┘
                             │
                    HTTP Requests (Attack Payloads)
                             │
                    ┌────────┴────────┐
                    │   DAST Engine   │
                    │  (OWASP ZAP,    │
                    │   Burp Suite)   │
                    └────────┬────────┘
                             │
                    Analyze Responses
                             │
                    ┌────────▼────────┐
                    │  Report: XSS,   │
                    │  CSRF, Broken   │
                    │  Auth, etc.     │
                    └─────────────────┘
```

---

### 4. Container & Image Scanning
**Definisi:** Mendeteksi kerentanan dalam container images (Docker, Kubernetes).

| Tool | Deskripsi | Lisensi |
|------|-----------|---------|
| **Trivy** | All-in-one scanner (container, IaC, SCA) | Open Source |
| **Aqua Security** | Enterprise container security platform | Commercial |
| **Grype** | Container image vulnerability scanner | Open Source |
| **Docker Scout** | Native Docker security scanning | Freemium |

---

### 5. Infrastructure as Code (IaC) Scanning
**Definisi:** Memindai konfigurasi infrastruktur (Terraform, Kubernetes YAML, CloudFormation) untuk menemukan miskonfigurasi keamanan.

| Tool | Deskripsi | Lisensi |
|------|-----------|---------|
| **Checkov** | Policy-as-code untuk Terraform, K8s, CloudFormation | Open Source |
| **Terrascan** | IaC compliance & security scanner | Open Source |
| **tfsec** | Terraform-specific security scanner | Open Source |
| **KICS** | Keeping Infrastructure as Code Secure | Open Source |

---

### 6. Secret Management & Detection
**Definisi:** Mendeteksi dan mengelola secrets (API keys, passwords, tokens) agar tidak bocor di repository.

| Tool | Deskripsi | Lisensi |
|------|-----------|---------|
| **GitLeaks** | Scanning repo untuk hardcoded secrets | Open Source |
| **TruffleHog** | Deteksi secrets di Git history | Open Source |
| **HashiCorp Vault** | Enterprise secret management | Open Source / Enterprise |
| **AWS Secrets Manager** | Cloud-native secret management | Pay-per-use |

**Contoh Secret Leak:**
```python
# ❌ BERBAHAYA - API Key hardcoded di source code
API_KEY = "sk-proj-abc123def456ghi789"
DATABASE_PASSWORD = "SuperSecret123!"

# ✅ AMAN - Menggunakan environment variables
import os
API_KEY = os.environ.get("API_KEY")
DATABASE_PASSWORD = os.environ.get("DB_PASSWORD")
```

---

### 7. Monitoring & Runtime Protection
**Definisi:** Memantau aplikasi dan infrastruktur secara real-time saat sudah berjalan di production.

| Tool | Deskripsi | Lisensi |
|------|-----------|---------|
| **Splunk** | Enterprise SIEM & log management | Commercial |
| **ELK Stack** | Elasticsearch, Logstash, Kibana | Open Source |
| **Prometheus + Grafana** | Metrics monitoring & visualization | Open Source |
| **Falco** | Runtime security for Kubernetes | Open Source |
| **Wazuh** | Open-source SIEM & XDR | Open Source |

---

# BAGIAN B: STUDY CASE — UJIAN

---

## 📋 STUDY CASE: Insiden Keamanan di PT. NusaCloud Technologies

### Latar Belakang Perusahaan

**PT. NusaCloud Technologies** adalah perusahaan teknologi di Indonesia yang menyediakan **platform cloud-based Enterprise Resource Planning (ERP)** untuk lebih dari 500 perusahaan di Asia Tenggara. Sistem ERP mereka menangani data sensitif termasuk:
- Data keuangan perusahaan klien
- Informasi karyawan (gaji, NIK, alamat)
- Data transaksi bisnis
- Laporan pajak dan audit

### Arsitektur Pipeline CI/CD yang Digunakan (SEBELUM Insiden)

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  Developer   │    │   GitHub     │    │   Jenkins    │    │   Docker     │    │  Production  │
│  Push Code   │──▶ │  Repository  │──▶ │  Build &     │──▶ │  Registry    │──▶ │  Server      │
│  (No Review) │    │  (Public)    │    │  Compile     │    │  (No Scan)   │    │  (AWS EC2)   │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
                                               │
                                        [No Security Testing]
                                        [No Code Review]
                                        [Shared Admin Credentials]
                                        [No Audit Logging]
```

### Detail Pipeline:
1. **Code Stage:** Developer push langsung ke branch `main` tanpa pull request atau code review
2. **Build Stage:** Jenkins server melakukan build otomatis, **tidak ada SAST atau SCA scanning**
3. **Registry Stage:** Docker image di-push ke private registry **tanpa vulnerability scanning**
4. **Deploy Stage:** Automated deployment ke production server **tanpa DAST testing**
5. **Monitoring:** Hanya basic uptime monitoring (Ping), **tidak ada security monitoring/SIEM**

### Informasi Tambahan:
- Jenkins server menggunakan **credentials admin yang di-share** ke semua developer (15 orang)
- **API keys dan database passwords di-hardcode** dalam source code
- **Tidak ada branch protection rules** di GitHub repository
- **Tidak ada threat modeling** dilakukan saat perencanaan fitur baru
- Semua developer memiliki **akses root** ke production server
- **Tidak ada backup strategy** yang teratur
- **Build environment sama persis** dengan production (tidak ada staging/QA)

---

### 🚨 INSIDEN YANG TERJADI

Pada **15 Maret 2026**, tim security PT. NusaCloud menerima laporan dari salah satu klien bahwa data keuangan mereka muncul di dark web forum. Setelah investigasi selama 2 minggu, ditemukan fakta-fakta berikut:

#### Timeline Insiden:
| Tanggal | Kejadian |
|---------|----------|
| **1 Januari 2026** | Seorang mantan developer (yang di-resign bulan November 2025) masih memiliki akses ke GitHub repository dan Jenkins server karena tidak ada revocation akses |
| **10 Januari 2026** | Mantan developer tersebut login ke Jenkins menggunakan shared admin credentials yang masih valid |
| **15 Januari 2026** | Attacker memodifikasi Jenkinsfile (pipeline configuration) dan menambahkan **backdoor** berupa reverse shell yang ter-embed dalam Docker image |
| **16 Januari – 14 Maret 2026** | Setiap kali build berjalan, backdoor secara otomatis ter-deploy ke production. Attacker menggunakan backdoor untuk **exfiltrate** data secara perlahan (slow exfiltration via DNS tunneling) |
| **15 Maret 2026** | Data klien muncul di dark web, insiden terdeteksi |

#### Dampak Insiden:
- **380 perusahaan** klien terdampak kebocoran data
- **2.5 juta record** data karyawan dan keuangan bocor  
- **Kerugian finansial** diperkirakan Rp 45 Miliar (denda regulasi, kompensasi klien, biaya recovery)
- **Reputasi perusahaan** hancur, 120 klien memutuskan kontrak
- **Regulasi:** PT. NusaCloud dikenai sanksi oleh Kementerian Kominfo atas pelanggaran UU PDP (Perlindungan Data Pribadi)

#### Root Cause Analysis:
1. **No Access Revocation** — Mantan karyawan masih memiliki akses
2. **Shared Credentials** — Tidak ada accountability individual
3. **No Pipeline Integrity Check** — Perubahan Jenkinsfile tidak diaudit
4. **No Security Scanning** — Backdoor dalam Docker image tidak terdeteksi
5. **No Security Monitoring** — DNS tunneling exfiltration tidak terdeteksi selama 2 bulan
6. **No Code Review** — Modifikasi pipeline tidak memerlukan approval

---

# SOAL UJIAN (5 Parts)

---

## SOAL 1: Analisis Risiko Pipeline yang Tidak Berubah (20 Poin)

**Pertanyaan:**
Berdasarkan insiden yang terjadi di PT. NusaCloud Technologies, jelaskan secara detail **mengapa sangat berbahaya** jika pipeline CI/CD mereka tetap digunakan tanpa perubahan. Identifikasi minimal **5 risiko kritikal** yang akan terus mengancam perusahaan, dan jelaskan bagaimana masing-masing risiko tersebut dapat dieksploitasi oleh threat actor.

---

### ✅ JAWABAN SOAL 1:

Jika pipeline CI/CD PT. NusaCloud tetap digunakan tanpa perubahan, perusahaan akan menghadapi **multiple attack vectors** yang sangat berbahaya. Berikut 5 risiko kritikal beserta analisisnya:

### Risiko 1: Supply Chain Attack via Build Pipeline (Critical)

**Penjelasan:**
Pipeline saat ini tidak memiliki **integrity verification** pada build process. Jenkinsfile (pipeline configuration) dapat dimodifikasi oleh siapa saja yang memiliki akses tanpa approval atau audit trail.

**Bagaimana Dieksploitasi:**
- Attacker (internal/external) dapat memodifikasi build script untuk menyisipkan malicious code
- Mirip dengan **serangan SolarWinds (2020)** di mana attacker menyisipkan malware SUNBURST ke dalam build process
- Dalam kasus SolarWinds, malware SUNSPOT memantau proses MSBuild dan mengganti source code saat kompilasi, lalu mengembalikan ke versi asli setelah build selesai
- Karena kode berbahaya disuntikkan saat build, binary yang dihasilkan **ter-sign secara legitimate**, membuat deteksi sangat sulit

**Dampak Potensial:**
- Setiap deployment ke production akan membawa malware
- Semua klien yang menggunakan sistem akan terinfeksi
- Deteksi bisa memakan waktu berbulan-bulan (dalam kasus SolarWinds: 14 bulan)

### Risiko 2: Insider Threat Tanpa Accountability (High)

**Penjelasan:**
Penggunaan **shared admin credentials** untuk Jenkins berarti tidak ada cara untuk mengetahui **siapa** yang melakukan tindakan tertentu. Ini melanggar prinsip **Non-Repudiation** dan **Least Privilege**.

**Bagaimana Dieksploitasi:**
- Setiap orang dari 15 developer bisa melakukan perubahan malicious tanpa bisa dilacak
- Mantan karyawan yang masih memiliki credentials bisa login kapan saja
- Tidak ada **audit trail** yang meaningful karena semua aktivitas tercatat sebagai "admin"
- Prinsip **Zero Trust** dilanggar total

**Dampak Potensial:**
- Serangan insider yang sama bisa terulang
- Investigasi forensik menjadi sangat sulit karena tidak bisa menentukan pelaku
- Semua developer menjadi suspect, merusak kepercayaan tim

### Risiko 3: Credential Exposure via Hardcoded Secrets (High)

**Penjelasan:**
API keys dan database passwords yang di-hardcode dalam source code menciptakan **single point of compromise**. Jika source code bocor (melalui GitHub, insider, atau backup yang tidak terenkripsi), semua credentials terekspos.

**Bagaimana Dieksploitasi:**
- Attacker yang mendapat akses ke repository bisa langsung mengakses database production
- **Tools seperti GitLeaks atau TruffleHog** bisa otomatis mendeteksi secrets di public repositories
- Bahkan jika secrets dihapus dari kode, mereka masih ada di **Git history** (git log)
- Rotasi credentials menjadi sangat sulit karena hardcoded di banyak tempat

**Dampak Potensial:**
- Direct access ke database berisi data 500+ perusahaan klien
- Potensi data breach yang lebih masif dari insiden sebelumnya
- Pelanggaran UU PDP yang berulang dengan denda lebih berat

### Risiko 4: Undetected Vulnerabilities in Dependencies & Container Images (High)

**Penjelasan:**
Tanpa **SCA scanning** dan **container image scanning**, aplikasi bisa menggunakan library dengan kerentanan yang sudah diketahui publik (known CVE).

**Bagaimana Dieksploitasi:**
- Contoh nyata: **Log4Shell (CVE-2021-44228)** — kerentanan di library Log4j yang memungkinkan Remote Code Execution (RCE)
- Attacker bisa scan aplikasi target, mendeteksi versi library yang vulnerable, dan menggunakan exploit yang sudah tersedia publik
- Docker image yang tidak di-scan bisa berisi Outdated OS packages dengan kerentanan yang diketahui

**Dampak Potensial:**
- Remote Code Execution di production server
- Lateral movement ke sistem internal lainnya
- Cryptocurrency mining, ransomware, atau data exfiltration

### Risiko 5: Blind Spot — Tidak Ada Security Monitoring (Critical)

**Penjelasan:**
Hanya menggunakan basic uptime monitoring berarti perusahaan **buta terhadap serangan yang sedang terjadi**. Tidak ada SIEM, IDS/IPS, atau anomaly detection.

**Bagaimana Dieksploitasi:**
- Attacker bisa melakukan **slow exfiltration** (seperti DNS tunneling dalam insiden ini) tanpa terdeteksi
- **Dwell time** (waktu attacker berada dalam sistem tanpa terdeteksi) rata-rata global adalah **204 hari** (Mandiant M-Trends 2023)
- Tanpa log yang proper, **incident response** menjadi reaktif bukan proaktif

**Dampak Potensial:**
- Serangan berjalan berbulan-bulan tanpa terdeteksi (seperti yang terjadi: 2 bulan)
- Data terus bocor selama serangan berlangsung
- Forensic investigation menjadi sangat sulit tanpa log yang lengkap

---

## SOAL 2: Perbaikan yang Dapat Dilakukan (20 Poin)

**Pertanyaan:**
Sebutkan dan jelaskan secara detail **apa saja yang dapat diperbaiki** dari pipeline CI/CD PT. NusaCloud Technologies. Untuk setiap perbaikan, sebutkan **tools spesifik** yang dapat digunakan dan **bagaimana implementasinya** dalam pipeline.

---

### ✅ JAWABAN SOAL 2:

### Perbaikan 1: Implementasi Access Control & Identity Management

**Masalah:** Shared credentials, no access revocation
**Solusi:**

| Aspek | Implementasi |
|-------|-------------|
| **Individual Accounts** | Setiap developer harus memiliki akun personal di Jenkins dengan password unik |
| **Multi-Factor Authentication (MFA)** | Wajibkan MFA untuk akses Jenkins, GitHub, dan production server |
| **Role-Based Access Control (RBAC)** | Bagi akses sesuai peran: Dev (read/build), Lead (merge/deploy), Admin (config) |
| **Automated Offboarding** | Saat karyawan resign, akses otomatis dicabut melalui Identity Provider (IdP) |
| **Principle of Least Privilege** | Developer tidak boleh memiliki akses root ke production |

**Tools:**
- **Keycloak** atau **Okta** — Identity and Access Management (IAM)
- **HashiCorp Vault** — Centralized secret management
- **GitHub Branch Protection Rules** — Mencegah direct push ke main
- **Jenkins Role-Based Strategy Plugin** — RBAC untuk Jenkins

```yaml
# Contoh: GitHub Branch Protection Rules
branch_protection:
  branch: main
  rules:
    - require_pull_request: true
    - required_approvals: 2
    - require_signed_commits: true
    - restrict_push: 
        - role: maintainer
    - require_status_checks:
        - ci/security-scan
        - ci/code-review
```

---

### Perbaikan 2: Integrasi Security Scanning dalam Pipeline

**Masalah:** Tidak ada SAST, SCA, DAST, atau container scanning
**Solusi:**

#### a) SAST (Static Application Security Testing)
**Tool: SonarQube + Semgrep**

```yaml
# Contoh: Jenkins Pipeline dengan SAST
stage('SAST Scan') {
    steps {
        // SonarQube Analysis
        sh 'sonar-scanner -Dsonar.projectKey=nusacloud-erp'
        
        // Semgrep Scan
        sh 'semgrep scan --config=auto --severity=ERROR --json > semgrep-results.json'
        
        // Quality Gate: Gagalkan build jika ada critical findings
        waitForQualityGate abortPipeline: true
    }
}
```

**Kapan dijalankan:** Setiap kali ada push atau pull request
**Apa yang dicek:** SQL Injection, XSS, Command Injection, Insecure Deserialization, dll.

#### b) SCA (Software Composition Analysis)
**Tool: Snyk + OWASP Dependency-Check**

```yaml
stage('SCA Scan') {
    steps {
        // Snyk dependency scan
        sh 'snyk test --severity-threshold=high --json > snyk-results.json'
        
        // OWASP Dependency Check
        sh 'dependency-check --project nusacloud --scan ./src --format JSON'
        
        // Block jika ada CVE critical/high
        script {
            def results = readJSON file: 'snyk-results.json'
            if (results.vulnerabilities.any { it.severity == 'critical' }) {
                error("Critical vulnerability found in dependencies!")
            }
        }
    }
}
```

**Kapan dijalankan:** Setiap build + scheduled weekly scan
**Apa yang dicek:** Known CVEs di library yang digunakan (npm, pip, maven, dll.)

#### c) Container Image Scanning
**Tool: Trivy**

```yaml
stage('Container Scan') {
    steps {
        sh 'trivy image --severity HIGH,CRITICAL --exit-code 1 nusacloud-erp:${BUILD_NUMBER}'
    }
}
```

**Kapan dijalankan:** Setelah Docker image di-build, sebelum push ke registry
**Apa yang dicek:** Vulnerable OS packages, misconfigured Dockerfile, embedded secrets

#### d) DAST (Dynamic Application Security Testing)
**Tool: OWASP ZAP**

```yaml
stage('DAST Scan') {
    steps {
        // Deploy ke staging environment dulu
        sh 'docker-compose -f docker-compose.staging.yml up -d'
        
        // Jalankan OWASP ZAP scan
        sh '''
            zap-cli quick-scan --self-contained \
            --start-options "-config api.disablekey=true" \
            -l Informational \
            http://staging.nusacloud.internal:8080
        '''
        
        // Generate report
        sh 'zap-cli report -o zap-report.html -f html'
    }
}
```

**Kapan dijalankan:** Setelah deploy ke staging, sebelum deploy ke production
**Apa yang dicek:** Runtime vulnerabilities (XSS, CSRF, broken authentication, dll.)

---

### Perbaikan 3: Secret Management

**Masalah:** Hardcoded secrets di source code
**Solusi:**

**Tool: HashiCorp Vault + GitLeaks**

```yaml
# Langkah 1: Pre-commit hook untuk detect secrets
stage('Secret Detection') {
    steps {
        sh 'gitleaks detect --source=. --report-format=json --report-path=gitleaks-report.json'
        script {
            def report = readJSON file: 'gitleaks-report.json'
            if (report.size() > 0) {
                error("SECRETS DETECTED IN CODE! Build blocked.")
            }
        }
    }
}

# Langkah 2: Inject secrets dari Vault saat runtime
stage('Deploy') {
    steps {
        withVault(
            configuration: [vaultUrl: 'https://vault.nusacloud.internal'],
            vaultSecrets: [
                [path: 'secret/nusacloud/db', secretValues: [
                    [envVar: 'DB_PASSWORD', vaultKey: 'password'],
                    [envVar: 'DB_HOST', vaultKey: 'host']
                ]],
                [path: 'secret/nusacloud/api', secretValues: [
                    [envVar: 'API_KEY', vaultKey: 'key']
                ]]
            ]
        ) {
            sh 'docker run -e DB_PASSWORD -e API_KEY nusacloud-erp:${BUILD_NUMBER}'
        }
    }
}
```

---

### Perbaikan 4: Implementasi Code Review & Approval Workflow

**Masalah:** Direct push ke main tanpa review
**Solusi:**

- **Mandatory Pull Request** — Semua perubahan harus melalui PR
- **Minimum 2 Approvers** — Minimal 2 reviewer yang meng-approve kode
- **Automated Security Review** — Bot yang otomatis menjalankan security scan pada PR
- **Signed Commits** — GPG signed commits untuk memastikan keaslian kode

---

### Perbaikan 5: Security Monitoring & Incident Response

**Masalah:** Hanya basic uptime monitoring
**Solusi:**

**Tools:**
- **Wazuh** — Open-source SIEM untuk log aggregation dan threat detection
- **ELK Stack (Elasticsearch + Logstash + Kibana)** — Log management dan visualization
- **Falco** — Runtime security monitoring untuk Kubernetes/containers
- **Prometheus + Grafana** — Metrics monitoring

**Implementasi:**
```yaml
# Centralized Logging Architecture
┌─────────────┐    ┌────────────┐    ┌───────────────┐    ┌─────────────┐
│ Application │    │  Logstash  │    │ Elasticsearch │    │   Kibana    │
│    Logs     │──▶ │  (Collect  │──▶ │   (Store &    │──▶ │ (Visualize  │
│             │    │  & Parse)  │    │    Index)     │    │  & Alert)   │
└─────────────┘    └────────────┘    └───────────────┘    └─────────────┘
                                                                │
                                                    ┌───────────▼──────────┐
                                                    │   Alert Rules:       │
                                                    │   - Unusual DNS      │
                                                    │   - Failed logins    │
                                                    │   - Data exfil       │
                                                    │   - Pipeline changes │
                                                    └──────────────────────┘
```

---

## SOAL 3: Redesign Pipeline (20 Poin)

**Pertanyaan:**
Redesign pipeline CI/CD PT. NusaCloud Technologies dengan mengintegrasikan prinsip DevSecOps secara menyeluruh. Gambarkan pipeline baru beserta **setiap stage, tools yang digunakan, dan security gates** yang harus dilalui sebelum deployment ke production.

---

### ✅ JAWABAN SOAL 3:

### Pipeline CI/CD Baru — DevSecOps Integrated

```
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║                          PT. NusaCloud — DevSecOps Pipeline                              ║
╠══════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                          ║
║  ┌──────────────┐                                                                        ║
║  │   STAGE 1    │   PLAN & DESIGN                                                        ║
║  │  🔒 Threat   │   ─ Threat Modeling (STRIDE/DREAD)                                     ║
║  │   Modeling   │   ─ Security Requirements Definition                                   ║
║  │              │   ─ Risk Assessment per Feature                                        ║
║  │  Tools:      │   ─ Microsoft Threat Modeling Tool / OWASP Threat Dragon                ║
║  └──────┬───────┘                                                                        ║
║         │                                                                                ║
║         ▼                                                                                ║
║  ┌──────────────┐                                                                        ║
║  │   STAGE 2    │   CODE & COMMIT                                                        ║
║  │  🔒 Secure   │   ─ IDE Security Plugins (SonarLint, Snyk IDE)                         ║
║  │   Coding     │   ─ Pre-commit Hooks:                                                  ║
║  │              │      • GitLeaks (secret detection)                                     ║
║  │  Gates:      │      • Semgrep (quick SAST)                                            ║
║  │  - No secrets│   ─ Signed Commits (GPG)                                               ║
║  │  - Lint pass │   ─ Branch Protection: NO direct push to main                          ║
║  └──────┬───────┘                                                                        ║
║         │                                                                                ║
║         ▼                                                                                ║
║  ┌──────────────┐                                                                        ║
║  │   STAGE 3    │   PULL REQUEST & CODE REVIEW                                           ║
║  │  🔒 Peer     │   ─ Mandatory 2 Reviewer Approval                                     ║
║  │   Review     │   ─ Automated Security Review Bot                                      ║
║  │              │   ─ PR Template: Security Checklist                                    ║
║  │  Gates:      │                                                                        ║
║  │  - 2 approve │   Tools: GitHub Advanced Security, CodeQL                              ║
║  │  - Sec check │                                                                        ║
║  └──────┬───────┘                                                                        ║
║         │                                                                                ║
║         ▼                                                                                ║
║  ┌──────────────┐                                                                        ║
║  │   STAGE 4    │   BUILD & SECURITY SCAN                                                ║
║  │  🔒 CI Build │   ─ Compile & Build Application                                       ║
║  │   + Scan     │   ─ SAST: SonarQube + Semgrep                                         ║
║  │              │   ─ SCA: Snyk + OWASP Dependency-Check                                 ║
║  │  Gates:      │   ─ License Compliance Check                                           ║
║  │  - SAST pass │   ─ Unit Tests + Security Unit Tests                                   ║
║  │  - SCA pass  │                                                                        ║
║  │  - No CVE    │   Build Environment: Isolated, Ephemeral Jenkins Agents                ║
║  │    critical  │                                                                        ║
║  └──────┬───────┘                                                                        ║
║         │                                                                                ║
║         ▼                                                                                ║
║  ┌──────────────┐                                                                        ║
║  │   STAGE 5    │   CONTAINER BUILD & SCAN                                               ║
║  │  🔒 Container│   ─ Docker Image Build (Multi-stage, minimal base image)               ║
║  │   Security   │   ─ Container Scan: Trivy                                              ║
║  │              │   ─ Dockerfile Lint: Hadolint                                          ║
║  │  Gates:      │   ─ Image Signing: Docker Content Trust / Cosign                       ║
║  │  - No HIGH   │                                                                        ║
║  │    CVE       │   Registry: Private Registry with Access Control                       ║
║  │  - Signed    │                                                                        ║
║  └──────┬───────┘                                                                        ║
║         │                                                                                ║
║         ▼                                                                                ║
║  ┌──────────────┐                                                                        ║
║  │   STAGE 6    │   STAGING DEPLOYMENT & DAST                                            ║
║  │  🔒 Dynamic  │   ─ Deploy ke Staging Environment (isolated)                           ║
║  │   Testing    │   ─ DAST: OWASP ZAP Automated Scan                                    ║
║  │              │   ─ IAST: Contrast Security (optional)                                 ║
║  │  Gates:      │   ─ Integration Tests                                                  ║
║  │  - DAST pass │   ─ Performance Tests                                                  ║
║  │  - No crit   │                                                                        ║
║  │    findings  │   Infrastructure: IaC Scanning with Checkov                            ║
║  └──────┬───────┘                                                                        ║
║         │                                                                                ║
║         ▼                                                                                ║
║  ┌──────────────┐                                                                        ║
║  │   STAGE 7    │   APPROVAL & COMPLIANCE                                                ║
║  │  🔒 Manual   │   ─ Security Team Sign-off                                             ║
║  │   Gate       │   ─ Compliance Check (UU PDP, ISO 27001)                               ║
║  │              │   ─ Change Management Approval                                         ║
║  │  Gates:      │   ─ Risk Acceptance (jika ada known issues)                            ║
║  │  - Sec team  │                                                                        ║
║  │    approved  │                                                                        ║
║  └──────┬───────┘                                                                        ║
║         │                                                                                ║
║         ▼                                                                                ║
║  ┌──────────────┐                                                                        ║
║  │   STAGE 8    │   PRODUCTION DEPLOYMENT                                                ║
║  │  🔒 Secure   │   ─ Blue/Green Deployment atau Canary Release                          ║
║  │   Deploy     │   ─ Rollback Plan Ready                                                ║
║  │              │   ─ Secret Injection dari HashiCorp Vault                               ║
║  │  Strategy:   │   ─ IaC: Terraform + Checkov                                           ║
║  │  - Canary    │   ─ Configuration Audit                                                ║
║  │  - Rollback  │                                                                        ║
║  └──────┬───────┘                                                                        ║
║         │                                                                                ║
║         ▼                                                                                ║
║  ┌──────────────┐                                                                        ║
║  │   STAGE 9    │   MONITORING & RESPONSE                                                ║
║  │  🔒 Runtime  │   ─ SIEM: Wazuh / Splunk                                               ║
║  │   Security   │   ─ Log Aggregation: ELK Stack                                        ║
║  │              │   ─ Runtime Protection: Falco                                          ║
║  │  Continuous: │   ─ Alerting: PagerDuty + Slack                                        ║
║  │  - 24/7 SOC  │   ─ Incident Response Plan                                             ║
║  │  - Auto alert│   ─ Periodic Penetration Testing                                       ║
║  └──────────────┘                                                                        ║
║                                                                                          ║
╚══════════════════════════════════════════════════════════════════════════════════════════╝
```

### Ringkasan Tools per Stage:

| Stage | Tools | Tipe Scanning |
|-------|-------|--------------|
| 1. Plan | Microsoft Threat Modeling Tool, OWASP Threat Dragon | Manual + Framework |
| 2. Code | GitLeaks, Semgrep, SonarLint, GPG | Secret Detection, Quick SAST |
| 3. Review | GitHub Advanced Security, CodeQL | Automated Code Review |
| 4. Build | SonarQube, Semgrep, Snyk, OWASP Dependency-Check | SAST + SCA |
| 5. Container | Trivy, Hadolint, Cosign | Container Scanning, Linting |
| 6. Staging | OWASP ZAP, Checkov | DAST + IaC Scanning |
| 7. Approval | Manual Process, Compliance Framework | Human Gate |
| 8. Deploy | Terraform, HashiCorp Vault | IaC, Secret Management |
| 9. Monitor | Wazuh, ELK Stack, Falco, Prometheus+Grafana | SIEM, Runtime Protection |

### Security Gates Summary:

```
Gate 1 (Code):     Tidak ada secrets → PASS/FAIL
Gate 2 (Review):   2 Reviewer approval → PASS/FAIL
Gate 3 (Build):    SAST + SCA findings = 0 Critical/High → PASS/FAIL
Gate 4 (Container):Trivy scan = 0 Critical → PASS/FAIL
Gate 5 (Staging):  DAST findings = 0 Critical → PASS/FAIL
Gate 6 (Approval): Security team sign-off → PASS/FAIL
```

**Jika SATU SAJA gate FAIL, deployment ke production DIHENTIKAN sampai masalah diperbaiki.**

---

## SOAL 4: What-If Scenario (20 Poin)

**Pertanyaan:**
Bayangkan skenario berikut: **"Bagaimana jika PT. NusaCloud sudah mengimplementasikan pipeline DevSecOps yang baru (sesuai redesign di Soal 3), tetapi seorang developer secara tidak sengaja memasukkan library open-source yang berisi kerentanan zero-day (belum ada CVE-nya) — dan library tersebut diexploit oleh attacker 1 minggu setelah deployment?"**

Jelaskan:
a) Apakah pipeline baru bisa mencegah insiden ini sepenuhnya? Mengapa?
b) Stage mana dari pipeline yang paling relevan untuk mendeteksi dan merespons ancaman ini?
c) Apa langkah mitigasi tambahan yang diperlukan?

---

### ✅ JAWABAN SOAL 4:

### a) Apakah Pipeline Baru Bisa Mencegah Insiden Ini Sepenuhnya?

**TIDAK, pipeline baru TIDAK BISA sepenuhnya mencegah insiden zero-day ini.** Alasannya:

1. **SAST** hanya mendeteksi pola kode yang sudah diketahui berbahaya. Jika library berisi kerentanan yang belum diketahui, SAST tidak akan menandainya karena tidak ada pattern/rule yang sesuai.

2. **SCA** bekerja dengan mencocokkan versi library dengan database CVE (misalnya NVD — National Vulnerability Database). **Zero-day berarti belum ada CVE-nya**, sehingga SCA tidak akan mendeteksi kerentanan ini.

3. **Container Scanning** juga bergantung pada database CVE yang sama, sehingga akan melewatkan zero-day.

4. **DAST** mungkin bisa mendeteksi **beberapa** kerentanan jika input/output dari library tersebut menunjukkan perilaku anamali, tetapi ini **tidak dijamin** — terutama jika kerentanan membutuhkan kondisi spesifik yang tidak dicover oleh automated DAST scan.

**Kesimpulan:** Tidak ada tool keamanan yang bisa memberikan **100% protection**. DevSecOps adalah tentang **defense-in-depth** (pertahanan berlapis) dan **reducing attack surface**, bukan eliminasi total risiko.

---

### b) Stage yang Paling Relevan

**Stage 9: Monitoring & Response** adalah stage paling kritis untuk skenario ini.

Meskipun pipeline tidak bisa **mencegah** deployment library dengan zero-day, pipeline baru bisa **mendeteksi eksploitasi** dan **merespons dengan cepat** melalui:

1. **SIEM (Wazuh/Splunk):**
   - Mendeteksi anomali behavior pasca-deployment
   - Alert otomatis jika ada unusual network traffic, unexpected process execution, atau privilege escalation
   - Contoh rule: "Alert jika ada outbound connection ke IP yang tidak ada di whitelist"

2. **Runtime Protection (Falco):**
   - Mendeteksi perilaku mencurigakan di container saat runtime
   - Contoh: Jika library tiba-tiba spawn child process atau membaca file sensitif yang seharusnya tidak diakses
   ```yaml
   # Falco Rule Example
   - rule: Unexpected outbound connection
     desc: Detect outbound connection from ERP container to unknown IP
     condition: >
       outbound and container and 
       container.name = "nusacloud-erp" and
       not fd.sip in (allowed_ips)
     output: "Unexpected outbound connection from ERP (IP=%fd.sip)"
     priority: WARNING
   ```

3. **Log Aggregation (ELK Stack):**
   - Memungkinkan forensic analysis yang cepat setelah insiden terdeteksi
   - Retention policy: Minimal 90 hari log untuk compliance dan investigation

**Stage 6 (Staging/DAST)** juga relevan karena:
- DAST mungkin mendeteksi behavior anomali jika exploitasi menghasilkan response yang tidak normal
- Fuzzing pada endpoint yang menggunakan library bermasalah bisa mengungkap crash atau unexpected behavior

---

### c) Langkah Mitigasi Tambahan

| # | Mitigasi | Detail |
|---|----------|--------|
| 1 | **Runtime Application Self-Protection (RASP)** | Tool seperti **Contrast Security** atau **Sqreen** yang berjalan di dalam aplikasi dan bisa memblokir serangan secara real-time, bahkan untuk zero-day |
| 2 | **Web Application Firewall (WAF)** | **ModSecurity**, **AWS WAF**, atau **Cloudflare WAF** untuk memfilter malicious requests sebelum sampai ke aplikasi |
| 3 | **Network Segmentation** | Pisahkan network production menjadi micro-segments sehingga jika satu service terkompromi, attacker tidak bisa lateral movement ke service lain |
| 4 | **Behavioral Analysis / UEBA** | **User and Entity Behavior Analytics** — deteksi anomali berdasarkan baseline behavior, bukan signature. Contoh: Jika library biasanya memproses 100 requests/menit tapi tiba-tiba memproses 10,000, ini anomali |
| 5 | **Incident Response Plan (IRP)** | Playbook yang sudah disiapkan sebelum insiden: Siapa yang bertanggung jawab? Bagaimana isolasi? Bagaimana komunikasi ke klien? |
| 6 | **Canary Deployment** | Deploy ke sebagian kecil user dulu (5-10%), monitor selama 24-48 jam, baru full rollout. Ini membatasi blast radius jika ada masalah |
| 7 | **Bug Bounty Program** | Encourage external security researchers untuk menemukan dan melaporkan kerentanan sebelum diexploit oleh attacker |
| 8 | **Threat Intelligence Feed** | Subscribe ke threat intelligence feed (contoh: **AlienVault OTX**, **MISP**) untuk mendapat informasi zero-day sesegera mungkin saat ditemukan |

### Timeline Response yang Ideal:

```
Zero-day exploit terjadi (T+0)
        │
        ▼
SIEM/Falco mendeteksi anomali (T+5 menit)
        │
        ▼
Alert ke Security Team via PagerDuty (T+6 menit)
        │
        ▼
Security Team mulai investigation (T+15 menit)
        │
        ▼
Keputusan: Isolasi atau Rollback (T+30 menit)
        │
        ├──▶ Rollback ke versi sebelumnya (T+45 menit)
        │
        └──▶ Patch diterapkan, re-deploy (T+2-4 jam)
        │
        ▼
Post-incident review & report (T+24 jam)
```

**Perbedaan dengan pipeline lama:** Dengan pipeline lama, insiden **baru terdeteksi setelah 2 bulan** (saat data muncul di dark web). Dengan pipeline DevSecOps, respons bisa dilakukan **dalam hitungan menit hingga jam**.

---

## SOAL 5: Critical Missing Process (20 Poin)

**Pertanyaan:**
Identifikasi **satu proses kritikal yang hilang** dari pipeline CI/CD original PT. NusaCloud Technologies. Jelaskan:
a) Apa proses tersebut dan mengapa sangat penting?
b) Bagaimana ketidakhadiran proses ini berkontribusi terhadap insiden yang terjadi?
c) Bagaimana proses ini seharusnya diimplementasikan?
d) Berikan contoh output/hasil dari proses ini jika telah diimplementasikan

---

### ✅ JAWABAN SOAL 5:

## Proses Kritikal yang Hilang: **THREAT MODELING**

### a) Apa Itu Threat Modeling dan Mengapa Sangat Penting?

**Threat Modeling** adalah proses terstruktur untuk mengidentifikasi, mengevaluasi, dan memprioritaskan potensi ancaman keamanan terhadap suatu sistem **sebelum** sistem tersebut dibangun atau dimodifikasi. Ini adalah proses **proaktif** yang dilakukan di **tahap paling awal** (Plan/Design stage).

**Mengapa sangat penting:**

1. **Proaktif vs Reaktif:** Threat Modeling mengidentifikasi masalah SEBELUM kode ditulis, bukan SETELAH breach terjadi. Biaya memperbaiki kerentanan saat desain adalah **6x lebih murah** dibandingkan saat production.

2. **Holistic View:** Melihat sistem secara menyeluruh — bukan hanya kode, tapi juga arsitektur, data flow, trust boundaries, dan proses operasional.

3. **Risk Prioritization:** Tidak semua ancaman sama. Threat modeling membantu memprioritaskan mitigasi berdasarkan **likelihood dan impact**.

4. **Compliance:** UU PDP Indonesia dan standar ISO 27001 mensyaratkan pendekatan berbasis risiko (risk-based approach), yang dimulai dari threat modeling.

**Framework Threat Modeling yang Digunakan:**

| Framework | Deskripsi |
|-----------|-----------|
| **STRIDE** | **S**poofing, **T**ampering, **R**epudiation, **I**nformation Disclosure, **D**enial of Service, **E**levation of Privilege |
| **DREAD** | **D**amage, **R**eproducibility, **E**xploitability, **A**ffected Users, **D**iscoverability — untuk scoring risiko |
| **PASTA** | Process for Attack Simulation and Threat Analysis — risk-centric approach |
| **LINDDUN** | Fokus pada privacy threats — relevan untuk UU PDP |

---

### b) Bagaimana Ketidakhadiran Threat Modeling Berkontribusi pada Insiden?

Jika PT. NusaCloud telah melakukan threat modeling, berikut ancaman yang **seharusnya sudah teridentifikasi**:

#### Analisis STRIDE terhadap Pipeline NusaCloud:

| Threat Category | Threat yang Seharusnya Teridentifikasi | Ditemukan? |
|----------------|---------------------------------------|------------|
| **Spoofing** | Mantan karyawan bisa menyamar sebagai admin karena shared credentials | ❌ Tidak teridentifikasi |
| **Tampering** | Jenkinsfile bisa dimodifikasi tanpa kontrol, menyisipkan backdoor | ❌ Tidak teridentifikasi |
| **Repudiation** | Tidak ada audit log, sehingga pelaku tidak bisa diidentifikasi | ❌ Tidak teridentifikasi |
| **Information Disclosure** | Hardcoded secrets bisa bocor, data flow tidak terenkripsi | ❌ Tidak teridentifikasi |
| **Denial of Service** | Single point of failure di Jenkins dan production | ❌ Tidak teridentifikasi |
| **Elevation of Privilege** | Semua developer memiliki root access ke production | ❌ Tidak teridentifikasi |

**Kesimpulan:** SEMUA elemen STRIDE dilanggar dalam pipeline original. Threat modeling yang proper akan mengidentifikasi minimal 6 kategori ancaman di atas dan memaksa tim untuk membuat mitigasi **SEBELUM** insiden terjadi.

#### Data Flow Diagram (DFD) yang Seharusnya Dibuat:

```
                          TRUST BOUNDARY
                    ┌─────────────────────────────────────────┐
                    │                                         │
  ┌──────────┐     │    ┌──────────┐      ┌──────────┐      │     ┌──────────┐
  │Developer │─────┼──▶ │  GitHub  │ ──▶  │ Jenkins  │──────┼───▶ │Production│
  │(External)│     │    │  Repo    │      │  Server  │      │     │  Server  │
  └──────────┘     │    └──────────┘      └──────────┘      │     └──────────┘
       ▲           │         │                   │          │          │
       │           │         │                   │          │          │
  ┌──────────┐     │    ┌────▼─────┐      ┌──────▼─────┐   │    ┌────▼─────┐
  │  Mantan  │     │    │ Secrets  │      │  Docker    │   │    │  Client  │
  │Developer │─────┼──▶ │(Hardcoded│      │  Registry  │   │    │  Data    │
  │(Threat!) │     │    │ in Code) │      │ (No Scan)  │   │    │          │
  └──────────┘     │    └──────────┘      └────────────┘   │    └──────────┘
                    │                                         │
                    └─────────────────────────────────────────┘

  ⚠️ PROBLEMS IDENTIFIED:
  1. Mantan developer ada di luar trust boundary tapi masih punya akses
  2. Secrets tersimpan di dalam kode (information disclosure risk)
  3. Docker Registry tidak ada scanning (tampering risk)
  4. Tidak ada security gate antara Jenkins dan Production
```

Diagram di atas menunjukkan bahwa **setiap data flow melewati boundary tanpa validasi keamanan** — ini seharusnya sudah menjadi red flag di tahap desain.

---

### c) Bagaimana Threat Modeling Seharusnya Diimplementasikan?

#### Proses Implementasi:

**Langkah 1: Identifikasi Assets**
```
Asset Register untuk NusaCloud ERP:
├── Data Assets
│   ├── Client Financial Data (CRITICAL)
│   ├── Employee PII (CRITICAL)  
│   ├── Transaction Records (HIGH)
│   └── Audit/Tax Reports (HIGH)
├── System Assets
│   ├── Production Server (CRITICAL)
│   ├── Jenkins Build Server (HIGH)
│   ├── GitHub Repository (HIGH)
│   └── Docker Registry (MEDIUM)
└── Credential Assets
    ├── Database Credentials (CRITICAL)
    ├── API Keys (HIGH)
    └── SSL/TLS Certificates (HIGH)
```

**Langkah 2: Buat Data Flow Diagram (DFD)**
- Identifikasi semua komponen sistem
- Gambarkan aliran data antar komponen
- Tentukan **trust boundaries**
- Identifikasi entry points dan exit points

**Langkah 3: Identifikasi Threats (STRIDE)**
- Untuk setiap data flow yang melewati trust boundary, analisis ke-6 kategori STRIDE
- Dokumentasikan setiap threat yang ditemukan

**Langkah 4: Risk Scoring (DREAD)**

Contoh scoring untuk threat "Mantan karyawan mengakses Jenkins":

| DREAD Factor | Score (1-10) | Justification |
|-------------|-------------|---------------|
| **Damage** | 10 | Full access ke production, data breach masif |
| **Reproducibility** | 9 | Mudah diulang karena shared credentials |
| **Exploitability** | 10 | Hanya perlu login biasa, tidak perlu exploit teknis |
| **Affected Users** | 10 | 500+ perusahaan klien dan jutaan end-users |
| **Discoverability** | 8 | Shared credentials adalah knowledge umum di tim |
| **TOTAL** | **47/50** | **CRITICAL — Harus dimitigasi segera** |

**Langkah 5: Tentukan Mitigasi**

| Threat | DREAD Score | Mitigasi | Prioritas |
|--------|------------|----------|-----------|
| Unauthorized access via shared credentials | 47/50 | Implementasi individual accounts + MFA + RBAC | P1 - Immediate |
| Pipeline tampering | 42/50 | Branch protection + signed commits + audit log | P1 - Immediate |
| Hardcoded secrets | 40/50 | HashiCorp Vault + GitLeaks pre-commit hooks | P1 - Immediate |
| Unscanned container images | 38/50 | Trivy scanning + image signing | P2 - Short-term |
| No security monitoring | 45/50 | SIEM (Wazuh) + ELK Stack + Falco | P1 - Immediate |

**Langkah 6: Review dan Update**
- Threat model harus di-review setiap kali ada **perubahan arsitektur**
- Minimal **quarterly review** meskipun tidak ada perubahan
- Update threat model setelah **setiap insiden keamanan**

---

### d) Contoh Output Threat Modeling Document

```
═══════════════════════════════════════════════════════
        THREAT MODEL REPORT
        PT. NusaCloud Technologies — ERP Platform
        Version: 1.0 | Date: Q1 2026
═══════════════════════════════════════════════════════

EXECUTIVE SUMMARY:
Ditemukan 15 threats, dengan 6 dikategorikan CRITICAL,
4 HIGH, 3 MEDIUM, dan 2 LOW. 

Total DREAD Score: 
- Average: 35.2/50
- Highest: 47/50 (Unauthorized Pipeline Access)

RECOMMENDATION:
Hentikan deployment ke production sampai mitigasi untuk
6 CRITICAL threats diimplementasikan.

═══════════════════════════════════════════════════════

CRITICAL THREATS (Mitigasi Wajib Sebelum Go-Live):

[TM-001] Unauthorized Build Pipeline Access
  Category: Spoofing + Elevation of Privilege
  DREAD: 47/50
  Description: Shared admin credentials memungkinkan
    siapa saja (termasuk mantan karyawan) memodifikasi
    build pipeline dan menyisipkan malicious code.
  Mitigation: Individual accounts, MFA, RBAC
  Owner: DevOps Lead
  Deadline: Sprint 1

[TM-002] Supply Chain Injection via Dependencies
  Category: Tampering
  DREAD: 42/50
  Description: Tidak ada SCA scanning, library dengan
    CVE yang diketahui bisa masuk ke production.
  Mitigation: Snyk + OWASP Dependency-Check di CI
  Owner: Security Team
  Deadline: Sprint 1

[TM-003] Credential Exposure
  Category: Information Disclosure
  DREAD: 40/50
  Description: API keys dan database passwords 
    hardcoded di source code.
  Mitigation: HashiCorp Vault + GitLeaks
  Owner: DevOps Lead
  Deadline: Sprint 1

... (dan seterusnya)

═══════════════════════════════════════════════════════
```

---

# BAGIAN C: RINGKASAN TOOLS DEVSECOPS

## Quick Reference Card

```
┌────────────────────────────────────────────────────────────────────────────┐
│                    DEVSECOPS TOOLS — QUICK REFERENCE                       │
├────────────────────┬──────────────────────────────────────────────────────┤
│                    │                                                      │
│  PLANNING          │  OWASP Threat Dragon, Microsoft TMT                  │
│                    │                                                      │
│  SECRET DETECTION  │  GitLeaks, TruffleHog                                │
│                    │                                                      │
│  SAST              │  SonarQube, Semgrep, Checkmarx, CodeQL               │
│                    │                                                      │
│  SCA               │  Snyk, Trivy, OWASP Dependency-Check, Dependabot     │
│                    │                                                      │
│  CONTAINER SCAN    │  Trivy, Aqua Security, Grype, Docker Scout           │
│                    │                                                      │
│  IaC SCANNING      │  Checkov, Terrascan, tfsec, KICS                     │
│                    │                                                      │
│  DAST              │  OWASP ZAP, Burp Suite, Nikto, Nuclei                │
│                    │                                                      │
│  SECRET MGMT       │  HashiCorp Vault, AWS Secrets Manager                │
│                    │                                                      │
│  IAM               │  Keycloak, Okta                                      │
│                    │                                                      │
│  MONITORING/SIEM   │  Wazuh, Splunk, ELK Stack                            │
│                    │                                                      │
│  RUNTIME PROTECT   │  Falco, Aqua Security                                │
│                    │                                                      │
│  CI/CD PLATFORM    │  Jenkins, GitLab CI, GitHub Actions                   │
│                    │                                                      │
│  WAF               │  ModSecurity, AWS WAF, Cloudflare                    │
│                    │                                                      │
└────────────────────┴──────────────────────────────────────────────────────┘
```

---

# BAGIAN D: TIPS MENJAWAB UJIAN

## Strategi Menjawab Study Case DevSecOps

1. **Selalu mulai dengan identifikasi masalah** — Sebutkan masalah spesifik dari case sebelum memberikan solusi
2. **Gunakan framework** — STRIDE, DREAD, Defense-in-Depth, Shift-Left
3. **Sebutkan tools spesifik** — Dosen ingin dengar nama tools, bukan hanya konsep
4. **Jelaskan MENGAPA, bukan hanya APA** — Jangan hanya list tools, jelaskan kenapa tools tersebut relevan
5. **Hubungkan dengan real-world incidents** — SolarWinds, Log4Shell, CodeCov dll.
6. **Gambar diagram jika diminta redesign** — Visual representation sangat penting
7. **Ingat: Tidak ada security yang 100%** — Jawaban yang baik mengakui limitasi dan menyebutkan defense-in-depth

## Key Terms yang Harus Diingat

| Term | Definisi |
|------|----------|
| **Shift Left** | Menggeser security testing ke tahap awal development |
| **Defense in Depth** | Pertahanan berlapis, tidak bergantung pada satu kontrol |
| **Zero Trust** | Jangan pernah trust, selalu verify — bahkan untuk internal users |
| **Security Gate** | Checkpoint otomatis yang harus dilalui sebelum lanjut ke stage berikutnya |
| **Supply Chain Attack** | Serangan melalui komponen third-party (library, build tools, dll.) |
| **Dwell Time** | Waktu attacker berada dalam sistem tanpa terdeteksi |
| **Blast Radius** | Seberapa besar dampak jika satu komponen terkompromi |
| **SBOM** | Software Bill of Materials — daftar semua komponen dalam software |
| **CVE** | Common Vulnerabilities and Exposures — database kerentanan publik |
| **SIEM** | Security Information and Event Management |

---

## Referensi Penting

1. **OWASP DevSecOps Guideline** — https://owasp.org/www-project-devsecops-guideline/
2. **OWASP Top 10** — https://owasp.org/www-project-top-ten/
3. **NIST Cybersecurity Framework** — https://www.nist.gov/cyberframework
4. **SolarWinds Attack Analysis** — https://www.cisecurity.org/solarwinds
5. **UU PDP Indonesia** — UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi

---

*Dokumen ini dibuat untuk persiapan UAS Server Network Administration — BINUS University*
*Cyber Security Program — Semester 4*
*Last Updated: April 2026*
