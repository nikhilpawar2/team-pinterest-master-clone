require("dotenv").config();
let jwt = require("jsonwebtoken");
let verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWY_ACCESS_KEY, function (err, user) {
      if (err) return reject(err);
      // console.log("userrr", user);
      return resolve(user);
    });
  });
};
async function authenticate(request, response, next) {
  const bearerToken = request.headers.authorization;
  try {
    if (!bearerToken || !bearerToken.startsWith("Bearer "))
      return response.status(400).send({ messege: "invalid bearer token" });
    const token = bearerToken.split(" ")[1];
    const { user } = await verifyToken(token);
    request.user = user;
    return next();
  } catch (err) {
    return response
      .status(400)
      .send({ messege: "invalid bearer token try again" });
  }
}
module.exports = authenticate;
