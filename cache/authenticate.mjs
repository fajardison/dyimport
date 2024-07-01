/**
 * @license MIT
 * Hak Cipta (c) 2024 Dimas Fajar
 * 
 * Mengautentikasi sebuah permintaan berdasarkan token yang diberikan.
 * 
 * Fungsi ini memeriksa apakah token yang diberikan cocok dengan token autentikasi yang tersimpan.
 * Jika cocok, autentikasi berhasil dan fungsi mengembalikan `true`.
 * Jika tidak cocok, sebuah error akan dilempar yang menunjukkan akses tidak sah.
 * 
 * @param {string} token - Token yang akan diverifikasi terhadap token autentikasi yang tersimpan.
 * @returns {boolean} `true` jika token valid.
 * @throws {Error} Menghasilkan error jika token tidak valid, menunjukkan akses tidak sah.
 * 
 * @example
 * // Contoh penggunaan:
 * const auth = new Authenticator('my-secret-token');
 * try {
 *   auth.authenticate('some-token');
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
 
export default function authenticate(token) {
  if (token === this.authToken) {
    return true;
  } else {
    throw new Error(`Token ${token} is invalid`);
  }
}
