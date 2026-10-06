// Generated Expo crypto adapter. Docs: docs/sdk/api-e2e.md
import {AnyOAuth as WebClient} from './index.js';
export class AnyOAuth extends WebClient {
  constructor({crypto: Crypto, ...options}) {
    super({...options,cryptoProvider:{
      getRandomValues: bytes => Crypto.getRandomValues(bytes),
      subtle: {digest: async (_algorithm, bytes) => {
        const value = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256,String.fromCharCode(...bytes),{encoding:Crypto.CryptoEncoding.BASE64});
        return Uint8Array.from(atob(value),c=>c.charCodeAt(0)).buffer;
      }},
    }});
  }
}
export {AnyOAuth as Client};
