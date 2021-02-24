const port = process.env.PORT || 8080;
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => {
  console.log("Server listening at port 8080");
});
