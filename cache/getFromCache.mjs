/*!
 * cache-manager
 * @description Mengambil nilai dari cache berdasarkan kunci yang diberikan.
 * Copyright (c) 2024 Dimas Fajar
 * MIT Licensed
 */

/**
 * Fungsi ini terlebih dahulu mengautentikasi permintaan menggunakan token yang diberikan.
 * Jika autentikasi berhasil, fungsi ini memeriksa apakah entri cache untuk kunci yang diberikan
 * masih valid. Jika valid, fungsi ini mengembalikan nilai cache. Jika entri cache telah kedaluwarsa
 * atau tidak ada, fungsi ini menghapus entri dari cache dan mengembalikan `undefined`.
 * 
 * @param {string} key - Kunci entri cache yang akan diambil.
 * @param {string} token - Token autentikasi.
 * @returns {Promise<any|undefined>} Sebuah promise yang terselesaikan dengan nilai cache jika valid,
 *                                    atau `undefined` jika entri telah kedaluwarsa atau tidak ada.
 * @throws {Error} Menghasilkan error jika autentikasi gagal.
 * 
 * @example
 * // Contoh penggunaan:
 * const token = 'my-auth-token';
 * try {
 *   const value = await getFromCache('myKey', token);
 *   if (value !== undefined) {
 *     console.log('Nilai cache:', value);
 *   } else {
 *     console.log('Tidak ada entri cache yang valid.');
 *   }
 * } catch (error) {
 *   console.error('Error mengambil dari cache:', error.message);
 * }
 */
 
'use strict';

export default async function getFromCache(key, token) {
  try {
    if (this.authenticate(token)) {
      const item = this.cache[key];
      if (item && item.expireAt > Date.now()) {
        return Promise.resolve(item.value);
      } else {
        delete this.cache[key];
        return Promise.resolve(undefined);
      }
    } else {
      throw new Error('Unauthorized');
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
