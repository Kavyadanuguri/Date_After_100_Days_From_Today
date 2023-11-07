const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const result = addDays(new Date(), 100);
  const day = `${result.getDate()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`;
  response.send(day);
});

app.listen(3000);

module.exports = app;
