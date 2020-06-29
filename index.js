const express = require("express");
const { PORT } = require("./config/constants");

const app = express();

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
  