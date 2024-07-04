/*!
 * cache-manager
 * @description Menghapus entri dari cache yang telah kedaluwarsa.
 * Copyright (c) 2024 Dimas Fajar
 * MIT Licensed
 */

/**
 * Fungsi ini melakukan pembersihan cache dengan menghapus entri yang sudah kedaluwarsa.
 * Fungsi ini memeriksa setiap item dalam cache dan menghapus item yang waktu kedaluwarsanya 
 * sudah lewat berdasarkan waktu saat ini.
 * 
 * @returns {void}
 * @throws {Error} Menghasilkan error jika terjadi masalah selama proses pembersihan cache.
 * 
 * @example
 * // Contoh penggunaan:
 * const cache = new Cache('my-secret-token');
 * // Menjadwalkan pembersihan cache
 * cache.scheduleCleanup();
 */
 
'use strict';
 
export default function scheduleCleanup() {
  try {
    const now = Date.now();

    // Iterasi atas kunci cache untuk menghapus entri yang sudah kedaluwarsa
    for (const key in this.cache) {
      if (this.cache.hasOwnProperty(key)) {
        const cacheItem = this.cache[key];
        
        if (cacheItem.expireAt <= now) {
          delete this.cache[key];
        }
      }
    }
  } catch (err) {
    console.error('Error during cache cleanup:', err);
  }
}
