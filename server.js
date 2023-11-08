const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req, res) => res.sendFile(path.resolve("dist", "index.html")));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function () {
  console.log("listening on port ", 3000);
});
