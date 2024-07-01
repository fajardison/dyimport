/*!
 * @license MIT
 * (c) 2024 Dimas Fajar
 * @description Modul ini menyediakan kelas Secret untuk menghasilkan dan memverifikasi hash
 * menggunakan data acak, dengan fitur tambahan seperti hashing dan validasi.
 */

'use strict';

import { Generate } from './keyGen.mjs'; // menggunakan generate 
import Hash from './sha.mjs'; // menggunakan sha

/**
 * Kelas Secret untuk menghasilkan dan memverifikasi hash.
 */
class Secret {
  /**
   * Membuat instance baru dari Secret.
   * @param {string} algorithm - Nama algoritma hashing yang digunakan.
   */
  constructor(algorithm) {
    /**
     * Nama algoritma hashing.
     * @type {string}
     */
    this.algorithm = algorithm;

    /**
     * Data acak yang dihasilkan.
     * @type {Uint8Array | null}
     */
    this.randomData = null;

    /**
     * Hash yang dihasilkan dari data acak.
     * @type {string | null}
     */
    this.hash = null;
  }

  /**
   * Menghasilkan data acak dengan panjang tertentu.
   * @param {number} length - Panjang data acak yang dihasilkan.
   * @returns {Uint8Array} - Data acak yang dihasilkan.
   */
  generateRandomData(length) {
    this.randomData = Generate.random(length);
    return this.randomData;
  }

  /**
   * Membuat hash dari data acak yang telah dihasilkan.
   * @throws {Error} - Jika data acak belum dihasilkan.
   * @returns {string} - Hash yang dihasilkan.
   */
  createHash() {
    if (!this.randomData) {
      throw new Error('Random data not generated.');
    }
    this.hash = Hash.sha(this.algorithm, this.randomData);
    return this.hash;
  }

  /**
   * Memverifikasi apakah hash dari data input valid.
   * @param {Uint8Array} inputData - Data input yang akan diverifikasi.
   * @param {string} storedHash - Hash yang telah disimpan untuk dibandingkan.
   * @param {boolean} [debug=false] - Menentukan apakah akan menampilkan log debug.
   * @returns {boolean} - True jika hash valid, false sebaliknya.
   */
  verifyHash(inputData, storedHash, debug = false) {
    return Hash.verify(this.algorithm, inputData, storedHash, debug);
  }
}

export default Secret;
