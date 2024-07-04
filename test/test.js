/**
 * @file test.js
 * @description Skrip ini mengimpor modul `dyimport` dan memuat file `testFile.js` secara dinamis.
 *              Fungsi `runTest` menguji modul yang dimuat dengan memanggil fungsi `test1` dan `test2`
 *              dari file tersebut dan mencetak hasilnya ke konsol.
 */

import load from 'dyimport';

/**
 * Fungsi utama untuk menjalankan tes pada modul `dyimport`.
 * Mengimpor `testFile.js` menggunakan `load` dari `dyimport`, kemudian memanggil 
 * fungsi `test1` dan `test2` dari modul yang dimuat dan mencetak hasilnya ke konsol.
 * 
 * @async
 * @function runTest
 * @throws {Error} - Jika terjadi kesalahan saat memuat modul atau menjalankan fungsi.
 */
async function runTest() {
  try {
    // Memuat file testFile.js secara dinamis menggunakan `dyimport`
    const module = await load('testmodule.js');
    
    // Memanggil fungsi `test1` dan `test2` dari modul yang dimuat
    const result1 = module.test1();
    const result2 = module.test2();
    
    // Mencetak hasil ke konsol
    console.log('Hasil test1:', result1);
    console.log('Hasil test2:', result2);
  } catch (error) {
    // Menangani dan mencetak kesalahan jika terjadi
    console.error('Error:', error);
  }
}

// Menjalankan fungsi tes
runTest();
