/*!
 * random-key
 *  @description Modul ini menyediakan fungsi untuk menghasilkan string acak dengan panjang bit yang ditentukan,
 * menggunakan berbagai set karakter termasuk angka, huruf, dan karakter khusus.
 * Fungsi ini mencari field "root" di dalam `package.json` dan mengembalikan nilainya.
 * Copyright (c) 2024 Dimas Fajar
 * MIT Licensed
 */

'use strict';

import { randomBytes as cryptoRandomBytes } from 'crypto';

const CHAR_SETS = Object.freeze({
  numb: '0123456789',
  alpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  char: '@#$_&-+()/%{}',
});

/**
 * @class Generate
 * @description Kelas untuk menghasilkan string acak menggunakan set karakter yang berbeda.
 */
class Generate {
  /**
   * Menghasilkan string acak yang hanya berisi angka.
   * @static
   * @param {number} bitLength - Panjang bit dari string yang akan dihasilkan.
   * @returns {string} - String acak yang dihasilkan.
   * @throws {Error} - Jika bitLength tidak valid.
   */
  static numb(bitLength) {
    this.validateBitLength(bitLength);
    return this.generateRandomString(bitLength, CHAR_SETS.numb);
  }

  /**
   * Menghasilkan string acak yang hanya berisi huruf.
   * @static
   * @param {number} bitLength - Panjang bit dari string yang akan dihasilkan.
   * @returns {string} - String acak yang dihasilkan.
   * @throws {Error} - Jika bitLength tidak valid.
   */
  static alpha(bitLength) {
    this.validateBitLength(bitLength);
    return this.generateRandomString(bitLength, CHAR_SETS.alpha);
  }

  /**
   * Menghasilkan string acak yang hanya berisi karakter khusus.
   * @static
   * @param {number} bitLength - Panjang bit dari string yang akan dihasilkan.
   * @returns {string} - String acak yang dihasilkan.
   * @throws {Error} - Jika bitLength tidak valid.
   */
  static char(bitLength) {
    this.validateBitLength(bitLength);
    return this.generateRandomString(bitLength, CHAR_SETS.char);
  }

  /**
   * Menghasilkan string acak yang berisi huruf dan angka.
   * @static
   * @param {number} bitLength - Panjang bit dari string yang akan dihasilkan.
   * @returns {string} - String acak yang dihasilkan.
   * @throws {Error} - Jika bitLength tidak valid.
   */
  static alphaNum(bitLength) {
    this.validateBitLength(bitLength);
    return this.generateRandomString(bitLength, CHAR_SETS.alpha + CHAR_SETS.numb);
  }

  /**
   * Menghasilkan string acak yang berisi huruf dan karakter khusus.
   * @static
   * @param {number} bitLength - Panjang bit dari string yang akan dihasilkan.
   * @returns {string} - String acak yang dihasilkan.
   * @throws {Error} - Jika bitLength tidak valid.
   */
  static alphaChar(bitLength) {
    this.validateBitLength(bitLength);
    return this.generateRandomString(bitLength, CHAR_SETS.alpha + CHAR_SETS.char);
  }

  /**
   * Menghasilkan string acak yang berisi angka dan karakter khusus.
   * @static
   * @param {number} bitLength - Panjang bit dari string yang akan dihasilkan.
   * @returns {string} - String acak yang dihasilkan.
   * @throws {Error} - Jika bitLength tidak valid.
   */
  static numChar(bitLength) {
    this.validateBitLength(bitLength);
    return this.generateRandomString(bitLength, CHAR_SETS.numb + CHAR_SETS.char);
  }

  /**
   * Menghasilkan string acak yang berisi huruf, angka, dan karakter khusus.
   * @static
   * @param {number} bitLength - Panjang bit dari string yang akan dihasilkan.
   * @returns {string} - String acak yang dihasilkan.
   * @throws {Error} - Jika bitLength tidak valid.
   */
  static random(bitLength) {
    this.validateBitLength(bitLength);
    return this.generateRandomString(bitLength, CHAR_SETS.numb + CHAR_SETS.alpha + CHAR_SETS.char);
  }

  /**
   * Fungsi utilitas untuk menghasilkan string acak dengan panjang bit dan karakter yang ditentukan.
   * @static
   * @param {number} bitLength - Panjang bit dari string yang akan dihasilkan.
   * @param {string} characters - Kumpulan karakter yang akan digunakan untuk menghasilkan string.
   * @returns {string} - String acak yang dihasilkan.
   * @throws {Error} - Jika terjadi kesalahan selama proses pembuatan string acak.
   */
  static generateRandomString(bitLength, characters) {
    this.validateCharacters(characters);
    const byteLength = Math.ceil(bitLength / 8);
    let randomString = '';

    try {
      const randomBytes = cryptoRandomBytes(byteLength);
      const randomBuffer = Buffer.from(randomBytes);
      for (const byte of randomBuffer) {
        const randomIndex = byte % characters.length;
        randomString += characters.charAt(randomIndex);
      }
    } catch (error) {
      console.error('Error generating random bytes:', error);
      throw new Error('Error generating random bytes: ' + error.message);
    }

    return randomString;
  }

  /**
   * Memvalidasi panjang bit.
   * @static
   * @param {number} bitLength - Panjang bit yang akan divalidasi.
   * @throws {Error} - Jika bitLength tidak valid.
   */
  static validateBitLength(bitLength) {
    if (!Number.isInteger(bitLength) || bitLength <= 0) {
      throw new Error('bitLength must be a positive integer');
    }
  }

  /**
   * Memvalidasi kumpulan karakter.
   * @static
   * @param {string} characters - Kumpulan karakter yang akan divalidasi.
   * @throws {Error} - Jika kumpulan karakter kosong atau tidak valid.
   */
  static validateCharacters(characters) {
    if (!characters || characters.length === 0) {
      throw new Error('The character set cannot be empty');
    }
  }
}

export { Generate };
