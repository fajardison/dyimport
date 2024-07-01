/**
 * @license MIT
 * Hak Cipta (c) 2024 Dimas Fajar
 * 
 * Menghapus nilai dari cache berdasarkan kunci yang diberikan.
 * 
 * Fungsi ini terlebih dahulu mengautentikasi permintaan menggunakan token yang diberikan.
 * Jika berhasil diautentikasi, fungsi ini memeriksa apakah entri cache untuk kunci yang diberikan ada.
 * Jika ada, entri tersebut dihapus dari cache dan fungsi ini mengembalikan `true`.
 * Jika entri tidak ada, fungsi ini mengembalikan `false`.
 * 
 * @param {string} key - Kunci entri cache yang akan dihapus.
 * @param {string} token - Token autentikasi.
 * @returns {Promise<boolean>} Sebuah promise yang terselesaikan dengan `true` jika entri dihapus,
 *                             atau `false` jika entri tidak ditemukan.
 * @throws {Error} Menghasilkan error jika autentikasi gagal.
 * 
 * @example
 * // Contoh penggunaan:
 * const token = 'my-auth-token';
 * try {
 *   const success = await deleteFromCache('myKey', token);
 *   if (success) {
 *     console.log('Entri cache berhasil dihapus.');
 *   } else {
 *     console.log('Entri cache tidak ditemukan.');
 *   }
 * } catch (error) {
 *   console.error('Error menghapus dari cache:', error.message);
 * }
 */
 
'use strict';
 
export default async function deleteFromCache(key, token) {
  if (this.authenticate(token)) {
    if (this.cache[key]) {
      delete this.cache[key];
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  } else {
    return Promise.reject(new Error('Tidak sah'));
  }
}
