/**
 * @license MIT
 * Hak Cipta (c) 2024 Dimas Fajar
 * 
 * Kelas yang mewakili cache dengan fitur autentikasi dan manajemen.
 * 
 * Kelas `Cache` menyediakan mekanisme untuk menyimpan, mengambil, menghapus, dan mengelola item cache
 * dengan autentikasi dan manajemen ukuran cache yang terintegrasi. Kelas ini memungkinkan penetapan
 * ukuran maksimum cache dan mencakup metode untuk menambahkan, mengambil, menghapus, dan menghapus semua
 * item cache. Kelas ini juga mendukung pembersihan cache dan pengambilan status cache.
 * 
 * @param {string} authToken - Token yang digunakan untuk autentikasi.
 * @param {number} [maxCacheSize=Infinity] - Jumlah maksimum item yang diizinkan dalam cache.
 * 
 * @example
 * // Contoh penggunaan:
 * const cache = new Cache('my-secret-token', 100);
 * 
 * // Tambahkan item ke cache
 * await cache.addToCache('key1', 'value1', 'my-secret-token');
 * 
 * // Ambil item dari cache
 * const value = await cache.getFromCache('key1', 'my-secret-token');
 * 
 * // Hapus item dari cache
 * await cache.deleteFromCache('key1', 'my-secret-token');
 * 
 * // Hapus semua item cache
 * await cache.clearCache('my-secret-token');
 * 
 * // Ambil status cache
 * const status = await cache.getCacheStatus('my-secret-token');
 * console.log('Status Cache:', status);
 */
 
'use strict';
 
import authenticate from './authenticate.mjs';
import addToCache from './addToCache.mjs';
import getFromCache from './getFromCache.mjs';
import deleteFromCache from './deleteFromCache.mjs';
import clearCache from './clearCache.mjs';
import scheduleCleanup from './scheduleCleanup.mjs';
import getCacheStatus from './getCacheStatus.mjs';


export default class Cache {
  /**
   * Membuat instansi dari Cache.
   * @param {string} authToken - Token yang digunakan untuk autentikasi.
   * @param {number} [maxCacheSize=Infinity] - Jumlah maksimum item yang diizinkan dalam cache.
   */
  constructor(authToken, maxCacheSize = Infinity) {
    this.cache = {};
    this.authToken = authToken;
    this.maxCacheSize = maxCacheSize;
    this.authenticate = authenticate.bind(this);
    this.addToCache = addToCache.bind(this);
    this.getFromCache = getFromCache.bind(this);
    this.deleteFromCache = deleteFromCache.bind(this);
    this.clearCache = clearCache.bind(this);
    this.scheduleCleanup = scheduleCleanup.bind(this);
    this.getCacheStatus = getCacheStatus.bind(this);
  }
}
