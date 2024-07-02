# Dynamic Import Library
## _dyimport_
[![NPM Version](https://img.shields.io/npm/v/cache-class)](https://www.npmjs.com/package/cache-class)
[![License](https://img.shields.io/npm/l/cache-js)](https://github.com/fajardison/dyimport?tab=MIT-1-ov-file)

`dyimport` adalah pustaka untuk mengimpor modul `javascript ESM` secara dinamis dari direktori root yang ditentukan dengan fitur tambahan seperti caching dan hashing untuk meningkatkan efisiensi. Pustaka ini dirancang untuk mempermudah pengelolaan modul dalam proyek besar dengan struktur folder yang kompleks.

## Fitur Utama
- Import Dinamis: Mengimpor modul berdasarkan nama file pada runtime.

- Caching: Menyimpan hasil impor modul untuk menghindari impor berulang yang tidak perlu dan mempercepat akses modul.

- Hashing: Menggunakan hashing untuk menghasilkan token unik yang membantu dalam proses caching.

- Scure: Mengamankan hasil dari import modul menggunakan hashing dan authtoken.

- Penanganan Err: Penanganan eror yang memberikan informasi kesalahan saat uji coba.

- Debugging: Anda dapat menggunakan fitur debug untuk pengujian aplikasi anda.

- Pencarian File: Mencari file dalam direktori dan subdirektori secara rekursif.

- Global Folder: Menentukan folder global pada package.json menggunakan variabel root dengan tipe data array.

## Instalasi
Anda dapat menginstal `dyimport` melalui npm dengan perintah berikut:

```sh
npm install dyimport
```

# Penggunaan
Berikut adalah contoh cara menggunakan `dyimport` dalam aplikasi Anda:

## Konfigurasi package.json
Untuk mendefinisikan direktori `root` global dan memungkinkan `dyimport` mencari file yang ditentukan dalam subfolder, Anda perlu menambahkan konfigurasi berikut dalam package.json Anda:
```json
{
  "name": "module-name",
  "version" : "x.x.x",
  "main": "index.js",
  "type": "module",
  "root": [
    "main",
    "path/to/your/modules"
  ]
}
```
## Mengimpor Modul
```js
import load from 'dyimport';

// Import the module dynamically and search for 'module.js' in the root directory specified in package.json.
const variabel = await load('module.js');
const { module1, module2 } await load(module.mjs)
```

## Menggunakan Modul yang Diimpor
Setelah Anda mengimpor modul, Anda dapat menggunakan fungsi atau objek yang diekspor dari modul tersebut:
```js
import load from 'dyimport';

async function runTest() {
  try {
    // Importing file 'path/to/you/modules/testFile.js'
    const { test1, test2 } = await load('module/testFile.js');
    
    // Using imported modules
    console.log(test1()); // Output: this is a test using dyimport.
    console.log(test2()); // Output: test successful.
  } catch (error) {
    console.error('Error:', error);
  }
}

runTest();
```

Anda juga dapat melakukan nya seperti ini:
```js
import load from 'dyimport';
// Importing file 'path/to/you/modules/testFile.js'
const { test1, test2 } = await load('module/testFile.js');

async function runTest() {
  try {
    // Using imported modules
    console.log(test1()); // Output: this is a test using dyimport.
    console.log(test2()); // Output: test successful.
  } catch (error) {
    console.error('Error:', error);
  }
}

runTest();
```

## Lisensi
Proyek ini dilisensikan di bawah lisensi MIT. Lihat [LICENSE](https://github.com/fajardison/dyimport?tab=MIT-1-ov-file) untuk informasi lebih lanjut.

## Kontak
Untuk pertanyaan atau informasi lebih lanjut, Anda dapat menghubungi kami di [Github](https://github.com/fajardison/dyimport).
