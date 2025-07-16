const express = require("express");
const unblocker = require("unblocker");
const app = express();

app.use(unblocker({ prefix: "/proxy/", requestMiddleware: [] }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(8080, () => {
  console.log("Unblocker proxy running on port 8080");
});
