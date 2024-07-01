/*!
 * dyimport
 * @description Modul ini menyediakan fungsi untuk membaca data dari file `package.json`.
 * Fungsi ini mencari field "root" di dalam `package.json` dan mengembalikan nilainya.
 * Copyright (c) 2024 Dimas Fajar
 * MIT Licensed
 */

'use strict';

import fs from 'fs/promises';
import path from 'path';

/**
 * Membaca data dari file package.json.
 * @returns {Promise<Object>} - Data yang ditemukan di dalam field "root" dari package.json.
 * @throws {Error} - Jika terjadi kesalahan dalam membaca atau parsing file package.json, atau jika field "root" tidak ditemukan.
 * @description Fungsi ini membaca file package.json dan mengembalikan data dari field "root".
 */
export async function loadData() {
  try {
    const filePath = path.resolve('package.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
    
    if (jsonData.root) {
      return jsonData.root; // Mengembalikan field "root"
    } else {
      throw new Error('Field "root" not found in package.json');
    }
  } catch (error) {
    console.error('Error reading package.json:', error);
    throw error; // Menyebarkan error ke caller
  }
}
