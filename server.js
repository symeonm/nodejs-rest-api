const app = require("./app");

const mongoose = require("mongoose");
const { DB_HOST} = process.env;


mongoose.connect(DB_HOST)
.then(() => {
  console.log("Data base connect successful");
})
.catch(error => {
  console.log(error.message);
  process.exit(1);
}); 

const PORT = process.env.PORT || 8080;

app.listen({ port: PORT }, () => {
  console.log(`Server started on port ${PORT}`);
});
