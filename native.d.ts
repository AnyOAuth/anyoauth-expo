import { AnyOAuth as WebClient } from './index.js';
export interface ExpoCrypto<A extends string, E extends string> {
  getRandomValues<T extends Uint8Array>(values: T): T;
  digestStringAsync(algorithm: A, value: string, options: {encoding: E}): Promise<string>;
  CryptoDigestAlgorithm: {SHA256: A};
  CryptoEncoding: {BASE64: E};
}
export class AnyOAuth<A extends string, E extends string> extends WebClient { constructor(options: {clientId: string; baseUrl?: string; crypto: ExpoCrypto<A,E>}) }
export {AnyOAuth as Client};
