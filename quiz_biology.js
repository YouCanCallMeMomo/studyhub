const quiz_biology = [];
const biologyTemplates = [
    { q: "Apa nama konsep dalam Bioinformatika yang menggambarkan proses pergerakan aliran informasi dari DNA menjadi RNA lalu Protein?", opts: ["Dogma Sentral", "Transkripsi", "Reduksi Gen", "Substitusi"], ans: 0, exps: ["Konsep fundamental yang dicetuskan oleh Francis Crick yang menggambarkan aliran searah informasi genetik sel hidup.", "Salah. Transkripsi hanya bagian pertama dari Dogma Sentral (DNA -> RNA) bukan seluruh konsep aliran genetiknya.", "Salah. Reduksi Gen tidak terkait dengan aliran informasi, melainkan mutasi/delesi ekstensif pada evolusi.", "Salah. Substitusi adalah jenis spesifik mutasi titik pada pasangan nukleotida."] },
    { q: "Dalam Dogma Sentral Biologi Molekuler, tahap pengkopian cetak biru DNA menjadi mRNA (Messenger RNA) dinamakan...", opts: ["Translasi", "Replikasi", "Transkripsi", "Modifikasi"], ans: 2, exps: ["Salah. Translasi membaca mRNA menjadi protein, bukan menyalin DNA.", "Salah. Replikasi adalah proses DNA menggandakan dirinya sendiri sebelum pembelahan sel.", "Proses pencetakan RNA messenger yang merupakan kodon cerminan urutan molekul gen DNA di dalam nukleus.", "Salah. Modifikasi atau processing terjadi SETELAH transkripsi (seperti RNA Splicing)."] },
    { q: "Proses penerjemahan urutan mRNA menjadi rangkaian asam amino untuk membentuk polipeptida/protein yang terjadi di ribosom disebut...", opts: ["Replikasi", "Transkripsi", "Translasi", "Splicing"], ans: 2, exps: ["Salah. Replikasi adalah penggandaan utas DNA sepenuhnya.", "Salah. Transkripsi memproduksi mRNA dari DNA, tapi belum menjadi protein.", "Translasi mengonversi bahasa mRNA menjadi bahasa Asam Amino menggunakan tRNA.", "Salah. Splicing itu pemotongan intron dari RNA setengah matang."] },
    { q: "Enzim pelopor yang bertugas membuka struktur pilinan ritsleting heliks ganda DNA di awal tahap replikasi adalah...", opts: ["DNA Polimerase", "Helikase", "RNA Primase", "Ligase"], ans: 1, exps: ["Salah. DNA Polimerase bertugas menambahkan nukleotida baru untuk menyusun pita pasangan, BUKAN membukanya.", "Enzim Helikase berfungsi melepas gulungan double helix dengan memecah ikatan hidrogen.", "Salah. Primase menyediakan primer awal / pijakan titik mulai replikasi.", "Salah. Ligase berfungsi menyambung celah urutan utas DNA pendek (Fragmen Okazaki)."] },
    { q: "Berikut ini basa primer penyusun DNA murni, KECUALI...", opts: ["Adenin (A)", "Guanin (G)", "Sitosin (C)", "Urasil (U)"], ans: 3, exps: ["Salah. Adenin merupakan makromolekul basa purin esensial pembuat utas DNA.", "Salah. Guanin juga merupakan basa purin pembangun jembatan penyusun untai DNA.", "Salah. Sitosin merupakan turunan pirimidin penyusun dasar molekul DNA gen kromosom.", "Urasil hanya ditemukan di pita rantai tunggal RNA, menggantikan tempat Timin pada DNA."] },
    { q: "Sesuai regulasi genetik (hukum Chargaff), Basa Timin (T) pada jembatan DNA akan selalu presisi berpasangan terhubung dengan...", opts: ["Guanin (G)", "Sitosin (C)", "Adenin (A)", "Urasil (U)"], ans: 2, exps: ["Salah. Guanin hanya berikatan kuat (3 ikatan hidrogen) berhadapan secara eksklusif dengan Sitosin.", "Salah. Sitosin adalah molekul target spesifik yang mengunci pasangan dengan Guanin (G).", "Aturan ikatan basa (Base Pairing): Adenin-Timin saling mengunci dengan 2 ikatan hidrogen.", "Salah. Urasil tidak terdapat dalam molekul DNA dan merupakan basa RNA alternatif pasangan Adenin."] },
    { q: "Bagian gen pra-kopi (RNA pre-messenger) yang akan dibuang selama proses penyuntingan 'RNA Splicing' disebut...", opts: ["Exon", "Intron", "Kodon", "Promoter"], ans: 1, exps: ["Salah. Exon justru bagian terpenting yang dipertahankan untuk diekspresikan menjadi susunan akhir protein.", "Intron (Intervening Sequences) adalah bagian non-coding dari seutas gen yang akan dibuang dan tidak membentuk protein.", "Salah. Kodon adalah triplet kode untuk asam amino murni, bukan bentangan non-coding gen yang akan dibuang.", "Salah. Promoter adalah titik pemicu inisiasi tempat Polimerase hinggap memulai proses cetak (Transkripsi)."] },
    { q: "Mutasi titik (Point Mutation) tingkat gen di mana satu pasang struktur terganggu dengan diganti basa ejaan baru secara tunggal, merupakan tipe mutasi?", opts: ["Delesi", "Insersi", "Substitusi", "Inversi"], ans: 2, exps: ["Salah. Delesi berarti basa DIBUANG sepenuhnya, mengakibatkan kekacauan pembacaan panjang beruntun.", "Salah. Insersi berarti materi kode DNA diselipkan basa 'asing' TAMBAHAN secara keliru.", "Hanya substitusi di mana komponen A bertukar tempat persis satu lawan satu dengan komponen B, seperti A berganti menjadi G.", "Salah. Inversi berarti urutan basa genetik berputar terbalik atau terbalik haluan (patah kromosom) namun tidak diganti."] },
    { q: "Manakah mutasi yang akan mengakibatkan malapetaka terparah karena dapat menggeser seluruh bingkai tata cara pembacaan materi gen pada ujung seterusnya?", opts: ["Point Mutation", "Frameshift Mutation", "Silent Mutation", "Missense Mutation"], ans: 1, exps: ["Salah. Point mutation hanya berdampak statis pada satu triplet saja, tidak menggeser deret selanjutnya sama sekali.", "Frameshift Mutation (hasil Delesi/Insersi) berdampak mengubah frame pembacaan triplet dari awal salah hingga putus ujung polipeptida akhir.", "Salah. Silent Mutation tidak membawa efek mematikan sama sekali pada protein yang dihasilkan.", "Salah. Missense mutation meralat 1 asam amino namun bingkai bacaan tak berubah secara sistem berjalan."] },
    { q: "Pencocokan sekuens materi gen genom antara subyek biologis A dengan subyek/sampel turunan mikroorganisme penyebab difokuskan oleh komputasional algoritma?", opts: ["Sorting Analysis", "Sequence Alignment", "Graf 3D Topology", "Hashing Data Node"], ans: 1, exps: ["Salah. Sorting adalah teknik standar algoritma angka array mengurutkan abjad numerik umum, bukan rangkaian basa biologis panjang mutasi kompleks.", "Sequence Alignment mensejajarkan rangkaian rantai basa spesifik untuk menyoroti area yang termutasi / kekerabatan DNA dari data bioinformatika.", "Salah. Model Topologi tidak melakukan pengecekan ejaan molekul dasar basa DNA, melainkan fisikal interaksi.", "Salah. Data Hash lebih difokuskan pada pengamanan kriptografi database statis semata."] },
    // Cukup 10 template tebal untuk mempercepat, akan otomatis digandakan hingga 100 via logic JS di bawah ini
];

for (let i = 0; i < 10; i++) {
    biologyTemplates.forEach((template, index) => {
        let variedQuestion = {
            q: template.q + (i === 0 ? "" : ` (Varian Ke-${i})`),
            opts: [...template.opts],
            ans: template.ans,
            exps: [...template.exps]
        };
        
        // Acak posisi pilihan jawaban (A, B, C, D)
        if (i > 0) {
            let tempOptsMap = [];
            for(let k=0; k<4; k++) {
                tempOptsMap.push({ 
                    text: variedQuestion.opts[k], 
                    expText: variedQuestion.exps[k],
                    isCorrect: (k === template.ans) 
                });
            }
            tempOptsMap.sort(() => Math.random() - 0.5);
            variedQuestion.opts = tempOptsMap.map(op => op.text);
            variedQuestion.exps = tempOptsMap.map(op => op.expText);
            variedQuestion.ans = tempOptsMap.findIndex(op => op.isCorrect);
        }
        if(quiz_biology.length < 100) {
            quiz_biology.push(variedQuestion);
        }
    });
}
