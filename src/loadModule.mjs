/*!
 * @license MIT
 * (c) 2024 Dimas Fajar
 * @description Modul ini menyediakan fungsi untuk mengimpor modul secara dinamis dari root direktori yang ditentukan,
 * dengan fitur caching dan hashing untuk meningkatkan efisiensi. Modul ini memanfaatkan `Secret` untuk menghasilkan
 * hash unik dan `Cache` untuk menyimpan hasil impor modul. Juga menyediakan fungsi untuk mencari file dalam direktori
 * dan subdirektori secara rekursif.
 */

'use strict';

/**
 * Module dependencies.
 */
 
import { loadData } from './root.mjs';
import { findFile } from './fileUtils.mjs';
import { initialize } from './initUtils.mjs';

// Inisialisasi Secret dan Cache
const { authToken, accessToken, cache } = initialize();

/**
 * Mengimpor modul secara dinamis dengan memanfaatkan cache.
 * @param {string} fileName - Nama file modul yang akan diimpor.
 * @returns {Promise<*>} - Modul yang diimpor.
 * @throws {Error} - Jika terjadi kesalahan selama proses impor.
 */
async function route(fileName) {
  try {
    // Validasi fileName
    if (!fileName || typeof fileName !== 'string') {
      throw new Error('Invalid fileName provided.');
    }

    const data = await loadData(); // Mengambil data dari root.mjs
    if (!Array.isArray(data)) {
      throw new Error('loadData should return an array of directories.');
    }

    console.log('Available directories:', data);

    const fullPath = await findFile(fileName, data);
    if (!fullPath) {
      throw new Error(`No matching file found for ${fileName}`);
    }

    console.log('Full path:', fullPath); // Log path untuk debug

    const cachedModule = await cache.getFromCache(fileName, accessToken);
    if (cachedModule) {
      return cachedModule;
    }

    const module = await import(fullPath);
    await cache.addToCache(fileName, module, accessToken);
    return module;

  } catch (error) {
    console.error('Error importing module:', error);
    throw error;
  }
}

export default route;
