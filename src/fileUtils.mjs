/*!
 * dyimport
 * @description Modul ini menyediakan fungsi untuk mencari dan mendaftar file dalam direktori secara rekursif.
 * Copyright(c) 2024 Dimas Fajar
 * MIT Licensed
 */

'use strict';

import path from 'path';
import fs from 'fs/promises';

/**
 * Mencari file di direktori dan subdirektori secara rekursif.
 * @param {string} fileName - Nama file yang dicari.
 * @param {Array<string>} directories - Daftar direktori untuk mencari file.
 * @returns {Promise<string|null>} - Path file yang ditemukan atau null jika tidak ditemukan.
 */
export async function findFile(fileName, directories) {
  for (const directory of directories) {
    const fullPath = path.resolve(directory);
    try {
      const files = await listFiles(fullPath, fileName);
      if (files.length > 0) {
        return files[0]; // Mengembalikan file pertama yang ditemukan
      }
    } catch (error) {
      console.error(`Error reading directory ${directory}:`, error);
    }
  }
  return null; // Tidak ditemukan
}

/**
 * Mendaftar file secara rekursif dalam direktori dan subdirektori.
 * @param {string} directory - Direktori awal untuk mulai mencari file.
 * @param {string} fileName - Nama file yang dicari.
 * @returns {Promise<Array<string>>} - Daftar path file yang ditemukan.
 */
export async function listFiles(directory, fileName) {
  let results = [];
  const list = await fs.readdir(directory, { withFileTypes: true });

  for (const dirent of list) {
    const fullPath = path.join(directory, dirent.name);
    if (dirent.isDirectory()) {
      results = results.concat(await listFiles(fullPath, fileName));
    } else if (dirent.isFile() && dirent.name === fileName) {
      results.push(fullPath);
    }
  }
  
  return results;
}
