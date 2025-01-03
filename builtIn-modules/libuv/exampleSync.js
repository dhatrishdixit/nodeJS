const crypto = require("node:crypto");

const start = Date.now();
crypto.pbkdf2Sync("password","salt", 100000, 512, "sha512");
console.log("hash 1:", Date.now() - start, "ms");
crypto.pbkdf2Sync("password","salt", 100000, 512, "sha512");
console.log("hash 2:", Date.now() - start, "ms");
crypto.pbkdf2Sync("password","salt", 100000, 512, "sha512");
console.log("hash 3:", Date.now() - start, "ms");

// sync operations are blocking the main thread and it is not recommended to use sync operations in node.js
