const jwt = require("jsonwebtoken");
const secret_key = process.env.JWT_SECRET || "secret";

module.exports.encode = function (payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { ...payload, expiresIn: payload.exp || "14d" },
      secret_key,
      (err, token) => {
        if (err) {
          console.log(err.message || "JWT Encoding Error");
          return resolve(null);
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports.decode = function (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret_key, (err, payload) => {
      if (err) {
        console.log(err.message || "JWT Decoding Error");
        return resolve(null);
      } else {
        resolve(payload);
      }
    });
  });
};
