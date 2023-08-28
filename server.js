const app = require('./app')

const mongoose = require("mongoose");
const {DB_HOST} = process.env;
console.log(DB_HOST);
async function run() {
  try {
    await mongoose.connect(DB_HOST);
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000")
    })
  } catch (error) {
    console.log(error);
    process.exit(1);
  } finally {
    mongoose.disconnect();
  }
}
run();


