<p align="center">
  <img src="https://user-images.githubusercontent.com/60084468/121986515-d40d7a00-cdc0-11eb-8682-37510fb3b59e.png" alt="Logo 2 (1)"/>
</p>

[Deskripsi](#-Deskripsi-Aplikasi) | [User Analysis](#-User-Analysis) | [Spesifikasi](#-Spesifikasi) | [Konsep OOP](#-konsep-OOP) | [Desain Pengembangan](#-tipe-desain-pengembangan) | [Pembahasan](#-hasil-dan-pembahasan) | [Implementasi](#-implementasi) | [Saran](#-saran) | [Developer](#-developer) |
:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:
---

# IPB PEDULI 
Tugas Akhir PSBO - P1 - Sebuah Platform untuk Berbagi

---
## Deskripsi Aplikasi
IPB Peduli merupakan sebuah platform penggalangan dana dan donasi secara online terstruktur dalam lingkup IPB. IPB Peduli membantu mahasiswa, dosen, dan civitas IPB lainnya dalam penyelenggaraan donasi. IPB Peduli yang merupakan platform berbasis web memungkinkan untuk seluruh civitas IPB untuk membuat suatu *campaign* atau turut serta berdonasi pada suatu *campaign* yang tentu dilaksanakan dalam lingkup IPB saja.

---

---
## User Analysis
### User Story
- "Sebagai seorang civitas IPB, saya ingin berdonasi dalam kegiatan kemanusiaan di IPB"
- "Sebagai seorang civitas IPB, saya ingin membuat sebuah campaign agar dapat membantu orang lain yang membutuhkan"
- "Sebagai seorang civitas IPB, saya ingin mengetahui informasi kegiatan penggalangan dana yang ada di IPB."

---
---
## Spesifikasi Teknis Lingkungan Pengembangan
### Software
- Github
- Figma
- Visual Studio Code
### Hardware
- Processor : intel Core i5
- RAM : 8GB 
### Tech Stack
 - HTML, CSS, JS, Bootstrap (Front end)
 - Node JS, MongoDB, ExpressJS (Back end)
 - Github (version control)

---

---
## Konsep OOP
- _Encapsulation_
  <p>Terdapat beberapa method dari object admin yang bersifat private yaitu dalam memverifikasi setiap donasi yang terdaftar</p>
- _Abstractions_
  <p>Proses alur verifikasi galang dana memakai konsep abstraction. Dimana object user yang menggalang dana tidak tahu alur proses verifikasi tersebut. User hanya akan tahu          galang dananya berhasil diterima atau tidak</p>
- _Inheritance_
- _object_
- _Method_
  <p>User merupakan object turunan (subclass) dari admin (superclass) dimana semua method yang digunakan oleh user dapat digunakan oleh admin sementara tidak semua method admin      dapat digunakan oleh object lainnya</p>

---
---
## Tipe Desain Pengembangan
Dalam pengembangan sistem web IPB Peduli, kami menggunakan metode waterfall. Metode ini menurut kami cocok mengingat waktu pengembangan yang sempit. Metode ini merupakan metode yang sistematis dan runtut. Tahapa-tahapan yang dilakukan dalam pengembangan ini adalah sebagai berikut :
- Analisis Kebutuhan
  <p>Pada tahap ini, dilakukan analisis kebutuhan pengguna untuk platform yang diharapkan. Analisis Kebutuhan dapat dilakukan dengan wawancara, diskusi, maupun studi literatur.      Hasil informasi yang didapatkan kemudian akan digunakan untuk memenuhi kebutuhan pengguna.</p>
- Sistem Desain
  <p>Pada sistem desain, kebutuhan software mulai dipenuhi, seperti perancangan sistem web, pembuatan use case diagram, pembuatan activity diagram, Class diagarm, arsitektur          sistem, dan interface untuk platform web.</p>
- Impementasi sistem
  <p>Pada tahap ini dilakukan implementasi dari perancangan yang dilakukan pada tahap sistem desain. Sistem akan dibuat menggunakan lingkungan Node JS, JS, HTML, CSS, MongoDB,        ExpressJs, dan Github (version control). Setelah implementasi, dilakukan testing untuk mengetahui kesalahan atau kekurangan yang terdapat pada platform yang dikembangkan.</p>
- Integrasi
  <p>Tahap pengintegrasian tahap-tahap yang telah dilakukan.</p>
- Perawatan dan Operasional


---
---
## Hasil dan Pembahasan
### Use case diagram
![Untitled Diagram-use case (2)](https://user-images.githubusercontent.com/60084468/122149884-fb2e7f00-ce86-11eb-99d8-400d02437dc9.png)
### Activity diagram
![WhatsApp Image 2021-06-16 at 9 43 36 AM](https://user-images.githubusercontent.com/60084468/122150150-65472400-ce87-11eb-87e0-4e04e03f77ff.jpeg)
![WhatsApp Image 2021-06-16 at 9 44 34 AM](https://user-images.githubusercontent.com/60084468/122150206-7abc4e00-ce87-11eb-8bd6-83166b7e845c.jpeg)
### Class diagram
![Class diagram](https://user-images.githubusercontent.com/60084323/122155515-51082480-ce91-11eb-8627-6d0b3bcc8f79.png)

### Entity Relationship Diagram
![Untitled Diagram-erd](https://user-images.githubusercontent.com/60084468/122149825-e6ea8200-ce86-11eb-904f-56a7ffde6c2e.png)

### Arsitektur sistem
![diagram-5](https://github.com/linggarasmara/PSBO/blob/8743c200794a51a83cc80af64cd705865ae9f264/diagram/Desain%20Arsitektur.jpg)
### Fungsi utama yang dikembangkan
### Fungsi CRUD

---
---
## Hasil Implementasi Perangkat Lunak
Pada bagian ini diisi screenshot hasil dan penjelasan singkat

---
---
## Saran Pengembangan
Saran
Dalam Pengerjaan Project ini, kami menemui beberapa kendala terutama dalam urasi waktu pengerjaan. baik dalam manajemen waktu team, maupun waktu yang diberikan.Pada pengembangan project selanjutnya diharapkan team dapat lebih memanajemen waktu. Kami menggunakan framework bootstrap dalam frontend website kami, mungkin dalam pengembangan lain dapat menggunakan framework lain agar didapatkan hasil yang lebih baik

---

## Developer dan Jobdesc

| Nama Anggota | NIM | Role
| ----- | ----- | ---- 
| Shibgotalloh Sabilana | G64180002  | Frontend Developer
| Abdullah Aziz Wali | G64180016  | Backend Developer
| Linggar Asmara  | G64180099  | Project Manager, UI Designer
| Firda Agustin Kartika Pratiwi | G64180116  | System Analyst
| Hudzaifah Muttaqin | G64180119  | UI Designer




![gamba-1](./images/gamba-1.png)
![gamba-2](./images/gamba-2.png)
![gamba-3](./images/gamba-3.png)
![gamba-4](./images/gamba-4.png)
![gamba-5](./images/gamba-5.png)
![gamba-6](./images/gamba-6.png)
![gamba-7](./images/gamba-7.png)
![gamba-8](./images/gamba-8.png)
![gambar-9](./images/gamba-9.png)
