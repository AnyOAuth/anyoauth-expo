import assert from 'node:assert/strict';
import {AnyOAuth} from '../native.js';
import {Crypto} from './crypto.stub.mjs';
const client = new AnyOAuth({clientId:'test',crypto:Crypto});
assert.equal(await client.pkceChallenge({codeVerifier:'dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk'}),'E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM');
const tx = await client.createTransaction();
assert.equal(tx.codeChallenge,await client.pkceChallenge({codeVerifier:tx.codeVerifier}));
assert.equal(tx.state.length,43);
console.log('PASS Expo native crypto adapter contract');
