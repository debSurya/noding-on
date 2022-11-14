const express = require("express");
const path = require("path");

const rootDir = require("../helper/path");

const router = express.Router();

const adminData = require("./admin");

router.get("/", ({ res }) => {
  const products = adminData.products;
  res.render("shop", {
    products,
    path: "/",
    pageTitle: "default",
  });
});

module.exports = router;
