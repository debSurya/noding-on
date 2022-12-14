const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./helper/path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use(({ res }) => {
  res.status(404).render("404", { pageTitle: "not not" });
});

app.listen(8888);
