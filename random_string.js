function randomString(n_bytes, encode) {
  // encode can be: hex, ascii, utf8, utf19le | ucs2, binary, base64
  return require('crypto').randomBytes(n_bytes).toString(encode);
}

module.exports = {
  randomString
};
