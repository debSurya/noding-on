const express = require("express");
const path = require("path");

const rootDir = require("../helper/path");

const router = express.Router();

const products = [];

router.get("/add", ({ res }) => {
  res.render("add-product", {
    pageTitle: "Add",
    path: "/admin/add",
  });
});

router.post("/add", (req, res) => {
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
