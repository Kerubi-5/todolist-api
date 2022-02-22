const crypto = require("crypto");

const secret = process.env.CRYPTO_SECRET;

const hash = (plainText) => {
  return crypto.createHmac("sha256", secret).update(plainText).digest("hex");
};

module.exports = hash;
