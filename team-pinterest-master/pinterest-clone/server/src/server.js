const app = require("./index");
const connect = require("./configs/db");
let PORT = process.env.PORT|| 3500;
app.listen(PORT, async function () {
  try {
    await connect();
    console.log("listening on port 3500");
  } catch (err) {
    console.log(err);
  }
});
