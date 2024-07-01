/*!
 * @license MIT
 * Hak Cipta (c) 2024 Dimas Fajar
 * @description Modul ini menyediakan fungsi untuk menghasilkan dan memverifikasi hash menggunakan algoritma yang ditentukan.
 */

'use strict';

import { createHash } from 'crypto';

/**
 * @class Hash
 * @description Kelas untuk menangani operasi hashing menggunakan algoritma yang ditentukan.
 */
class Hash {
  /**
   * Menghasilkan hash dari input menggunakan algoritma yang ditentukan.
   * @static
   * @param {string} algorithm - Algoritma hashing yang akan digunakan (misalnya, 'sha256').
   * @param {string|Buffer} input - Input yang akan di-hash, harus berupa string atau buffer.
   * @returns {string} - Hash dalam format heksadesimal.
   * @throws {TypeError} - Jika input bukan string atau buffer.
   * @throws {Error} - Jika terjadi kesalahan selama proses hashing.
   */
  static sha(algorithm, input) {
    if (typeof input !== 'string' && !Buffer.isBuffer(input)) {
      throw new TypeError('Input must be a string or buffer');
    }

    const hash = createHash(algorithm);
    hash.update(input);

    try {
      return hash.digest('hex');
    } catch (error) {
      console.error(`Error hashing with ${algorithm}:`, error);
      throw new Error(`Error hashing with ${algorithm}: ${error.message}`);
    }
  }

  /**
   * Memverifikasi apakah hash dari input sesuai dengan hash yang diberikan.
   * @static
   * @param {string} algorithm - Algoritma hashing yang digunakan untuk membuat hash.
   * @param {string|Buffer} input - Input yang akan di-hash dan diverifikasi.
   * @param {string} inputHash - Hash yang akan dibandingkan dengan hash dari input.
   * @param {boolean} [debug=false] - Jika true, menampilkan log untuk debugging.
   * @returns {boolean} - True jika hash dari input sesuai dengan inputHash, sebaliknya false.
   */
  static verify(algorithm, input, inputHash, debug = false) {
    const hashed = Hash.sha(algorithm, input);
    if (hashed === inputHash) {
      if (debug) {
        console.log(`Verified ${algorithm}`);
      }
      return true;
    } else {
      if (debug) {
        console.error(`Verification failed.`);
        console.error(`input does not match ${algorithm}.`);
      }
      return false;
    }
  }
}

export default Hash;
