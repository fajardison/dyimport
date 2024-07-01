/**
 * @license MIT
 * Hak Cipta (c) 2024 Dimas Fajar
 * 
 * Menghapus semua entri dari cache.
 * 
 * Fungsi ini terlebih dahulu mengautentikasi permintaan menggunakan token yang diberikan.
 * Jika berhasil diautentikasi, fungsi ini akan menghapus semua entri dalam cache dengan mereset objek cache.
 * 
 * @param {string} token - Token autentikasi.
 * @returns {Promise<void>} Sebuah promise yang terselesaikan ketika cache berhasil dihapus.
 * @throws {Error} Menghasilkan error jika autentikasi gagal.
 * 
 * @example
 * // Contoh penggunaan:
 * const token = 'my-auth-token';
 * try {
 *   await clearCache(token);
 *   console.log('Cache berhasil dihapus.');
 * } catch (error) {
 *   console.error('Error menghapus cache:', error.message);
 * }
 */

'use strict';

export default async function clearCache(token) {
  if (this.authenticate(token)) {
    this.cache = {};
    return Promise.resolve();
  } else {
    return Promise.reject(new Error('Unauthorized'));
  }
}
