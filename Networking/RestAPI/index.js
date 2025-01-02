//const express = require("express");
import express from "express";

const app = express();

app.all("/", (req, res) => {
  console.log("Request >", req);
  console.log("Responce >", res);
  res.send(`I'm up!`);
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
