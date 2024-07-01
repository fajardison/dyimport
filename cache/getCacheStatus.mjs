/*!
 * cache-manager
 * @description Mengambil status dari cache, termasuk ukuran dan rincian setiap item cache.
 * Copyright (c) 2024 Dimas Fajar
 * MIT Licensed
 */

/**
 * Fungsi ini mengautentikasi permintaan menggunakan token yang diberikan. Jika autentikasi
 * berhasil, fungsi ini mengembalikan status cache saat ini, termasuk jumlah item dan 
 * rincian tentang setiap item, seperti kunci, nilai, waktu kadaluarsa, dan waktu yang tersisa 
 * sebelum kadaluarsa.
 * 
 * @param {string} token - Token autentikasi.
 * @returns {Promise<{size: number, items: Array<{key: string, value: any, expireAt: number, expiresIn: number}>}>}
 * Sebuah promise yang terselesaikan dengan objek yang berisi ukuran cache dan array rincian item cache.
 * @throws {Error} Menghasilkan error jika autentikasi gagal.
 * 
 * @example
 * // Contoh penggunaan:
 * const token = 'my-auth-token';
 * try {
 *   const status = await getCacheStatus(token);
 *   console.log('Status Cache:', status);
 * } catch (error) {
 *   console.error('Error mengambil status cache:', error.message);
 * }
 */
 
'use strict';
 
export default async function getCacheStatus(token) {
  if (this.authenticate(token)) {
    const now = Date.now();
    const items = Object.keys(this.cache).map(key => {
      const { value, expireAt } = this.cache[key];
      return { key, value, expireAt, expiresIn: expireAt - now };
    });

    return Promise.resolve({
      size: Object.keys(this.cache).length,
      items
    });
  } else {
    return Promise.reject(new Error('Unauthorized'));
  }
}
