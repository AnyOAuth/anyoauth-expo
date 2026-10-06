// Test-only stand-in for the OS crypto boundary. Never shipped as a runtime fallback.
import assert from 'node:assert/strict';
export const Crypto = {
  CryptoDigestAlgorithm:{SHA256:'SHA-256'},CryptoEncoding:{BASE64:'base64'},
  getRandomValues: bytes=>crypto.getRandomValues(bytes),
  async digestStringAsync(algorithm,value,options) {
    assert.equal(algorithm,'SHA-256'); assert.equal(options.encoding,'base64');
    return Buffer.from(await crypto.subtle.digest(algorithm,new TextEncoder().encode(value))).toString('base64');
  },
};
