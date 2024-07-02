// module/testFile.js

/**
 * @module testFile
 * @description File ini hanya untuk keperluan pengujian. Berisi fungsi atau objek yang akan diimpor oleh loadModule.
 */

// Fungsi sederhana yang akan diimpor oleh loadModule
export function test1() {
  return 'this is a test using dyimport.';
}

export function test2() {
  return 'test successful.';
}
