# @anyoauth/expo

Generated AnyOAuth secret-free local login SDK 0.1.0.

`import { AnyOAuth } from '@anyoauth/expo'`

Construct with `new AnyOAuth({ clientId: 'public-id' })`.
Browser and Expo packages expose local helpers only. Use your backend for code exchange and application sessions.
Helpers: createTransaction, pkceChallenge({codeVerifier}), authorizationUrl({provider, redirectUri, state, codeChallenge}), validateCallback({callbackUrl, redirectUri, state, expiresAt}).
Persist and atomically consume the transaction in the initiating session. Only Google/GitHub and exact HTTPS or HTTP-loopback callbacks are supported. Null profile fields are legitimate. No automatic retries or HTTP redirects. Default timeout is 10 seconds including the body.

Run `npm run typecheck` and `npm test` from this package. Node 22+ provides Web Crypto; browsers and Expo require standards-compatible crypto.subtle and crypto.getRandomValues. Expo applications must install an appropriate Web Crypto implementation if their runtime lacks it; no insecure random fallback is provided.

License: MIT. Package coordinates do not imply registry publication.

## Expo native crypto

Run `npx expo install expo-crypto` in your application. Import `* as Crypto from "expo-crypto"` and `{ AnyOAuth } from "@anyoauth/expo/native"`, then construct `new AnyOAuth({clientId: "public-id", crypto: Crypto})`. The native entry uses expo-crypto directly; Hermes does not need crypto.subtle or an insecure random fallback. The base entry remains available for Web Crypto runtimes.

## Source and releases

Repository: https://github.com/AnyOAuth/anyoauth-expo

GitHub prerelease: https://github.com/AnyOAuth/anyoauth-expo/releases/tag/v0.1.0

Clone this repository, then run `node verify.mjs` with the native toolchain installed to build and execute the package's conformance suite. Source is generated in the AnyOAuth monorepo; propose changes there so every language stays aligned. GitHub hosts source archives and checksums. Package registry publication is separate.

This initial source release has full advertised-method conformance coverage. Runtime line/branch coverage for the whole language matrix remains a separate release gate; see https://anyoauth.com/docs/libraries/.
