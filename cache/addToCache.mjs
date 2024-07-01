/*!
 * cache-manager
 * @description Menambahkan pasangan key-value ke dalam cache jika terautentikasi.
 * Copyright (c) 2024 Dimas Fajar
 * MIT Licensed
 */

 /** 
 * Fungsi ini pertama-tama mengautentikasi permintaan menggunakan token yang diberikan.
 * Jika terautentikasi, fungsi ini memeriksa apakah batas ukuran cache telah tercapai.
 * Jika tidak, fungsi ini menambahkan pasangan key-value ke dalam cache dengan waktu hidup opsional (ttl).
 * 
 * @param {string} key - Kunci untuk entri cache.
 * @param {any} value - Nilai yang akan dicache.
 * @param {string} token - Token autentikasi.
 * @param {number} [ttl=3600] - Waktu hidup dalam detik untuk entri cache (default: 3600 detik).
 * @returns {Promise<void>} Sebuah promise yang terresolve jika operasi berhasil.
 * @throws {Error} Menghasilkan error jika batas cache tercapai atau jika autentikasi gagal.
 * 
 * @example
 * // Contoh penggunaan:
 * const token = 'my-auth-token';
 * try {
 *   await addToCache('myKey', 'myValue', token, 60); // Cache 'myValue' dengan TTL 60 detik
 *   console.log('Berhasil menambahkan ke cache.');
 * } catch (error) {
 *   console.error('Error saat menambahkan ke cache:', error.message);
 * }
 */
 
'use strict';
 
export default async function addToCache(key, value, token, ttl = 3600) {
  if (this.authenticate(token)) {
    if (Object.keys(this.cache).length >= this.maxCacheSize) {
      throw new Error('Cache limit reached');
    }

    const expireAt = Date.now() + ttl * 1000;
    this.cache[key] = { value, expireAt };
    this.scheduleCleanup();
    return Promise.resolve();
  } else {
    throw new Error('Not authenticated');
  }
}
