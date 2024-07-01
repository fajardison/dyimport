# Dynamic Import Library
## _dyimport_
[![NPM Version](https://img.shields.io/npm/v/cache-class)](https://www.npmjs.com/package/cache-class)
[![License](https://img.shields.io/npm/l/cache-js)](https://github.com/fajardison/dyimport?tab=MIT-1-ov-file)

`dyimport` adalah pustaka untuk mengimpor modul javascript ESM secara dinamis dari direktori root yang ditentukan dengan fitur tambahan seperti caching dan hashing untuk meningkatkan efisiensi. Pustaka ini dirancang untuk mempermudah pengelolaan modul dalam proyek besar dengan struktur folder yang kompleks.

## Fitur Utama
- Import Dinamis: Mengimpor modul berdasarkan nama file pada runtime.

- Caching: Menyimpan hasil impor modul untuk menghindari impor ulang yang tidak perlu dan mempercepat akses modul.

- Hashing: Menggunakan hashing untuk menghasilkan token unik yang membantu dalam proses caching.

- Pencarian File: Mencari file dalam direktori dan subdirektori secara rekursif.

- Global Folder: Menentukan folder global pada package.json menggunakan variabel root dengan tipe data array.

## Instalasi
Anda dapat menginstal dyimport melalui npm dengan perintah berikut:

```sh
npm install dyimport
```

## Penggunaan
Berikut adalah contoh cara menggunakan dyimport dalam aplikasi Anda:

## Konfigurasi package.json
Untuk mendefinisikan direktori root global dan memungkinkan dyimport mencari file yang ditentukan dalam subfolder, Anda perlu menambahkan konfigurasi berikut dalam package.json Anda:
```json
{
  "type": "module",
  "root": [
    "path",
    "path/to/your/module"
  ]
}
```
## Mengimpor Modul
```js
import load from 'dyimport';

// Mengimpor modul secara dinamis dan mencari 'module.js' di dalam direktori root yang telah ditentukan pada package.json
const variabel = await load('module.js');
const { module1, module2 } await load(module.mjs)
```

## Menggunakan Modul yang Diimpor
Setelah Anda mengimpor modul, Anda dapat menggunakan fungsi atau objek yang diekspor dari modul tersebut.
```js
import load from 'dyimport';

async function runTest() {
  try {
    // Mengimpor file 'module/testFile.js'
    const { test1, test2 } = await load('module/testFile.js');
    
    // Menggunakan fungsi yang diimpor
    console.log(test1()); // Output: this is test use dyimport.
    console.log(test2()); // Output: test successful.
  } catch (error) {
    console.error('Error:', error);
  }
}

runTest();
```

## API
```bash
load(fileName: string): Promise<any>
Parameter:

fileName: Nama file modul yang akan diimpor.
Returns:

Modul yang diimpor sebagai objek.
Throws:

Error jika terjadi kesalahan selama proses impor.
```

## Lisensi
Proyek ini dilisensikan di bawah Lisensi MIT. Lihat LICENSE untuk informasi lebih lanjut.

## Kontak
Untuk pertanyaan atau informasi lebih lanjut, Anda dapat menghubungi kami di bhinneka@gmail.com.
