/*!
 * dyimport
 *  @description Modul ini menyediakan fungsi untuk inisialisasi Secret dan Cache.
 * Copyright(c) 2024 Dimas Fajar
 * MIT Licensed
 */

'use strict';

import Secret from '../keys/secret.mjs';
import Cache from '../cache/cache.mjs';

/**
 * Inisialisasi Secret dan Cache.
 * @returns {{authToken: string, accessToken: string, cache: Cache}} - Objek yang berisi authToken, accessToken, dan cache.
 */
export function initialize() {
  const mySecret = new Secret('sha3-512');
  mySecret.generateRandomData(512);
  const hash = mySecret.createHash();
  const authToken = hash;
  const accessToken = hash;
  const cache = new Cache(authToken, 100);
  return { authToken, accessToken, cache };
}
